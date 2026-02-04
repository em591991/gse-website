const { app } = require("@azure/functions");

// In-memory cache for reviews (survives warm invocations)
let cachedReviews = null;
let reviewsCacheTimestamp = 0;
const REVIEWS_CACHE_TTL = 24 * 60 * 60 * 1000; // 24 hours

// In-memory cache for Place ID (stable, cached longer)
let cachedPlaceId = null;
let placeIdCacheTimestamp = 0;
const PLACE_ID_CACHE_TTL = 7 * 24 * 60 * 60 * 1000; // 7 days

async function findPlaceId(apiKey) {
  if (cachedPlaceId && Date.now() - placeIdCacheTimestamp < PLACE_ID_CACHE_TTL) {
    return cachedPlaceId;
  }

  const res = await fetch("https://places.googleapis.com/v1/places:searchText", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Goog-Api-Key": apiKey,
      "X-Goog-FieldMask": "places.id",
    },
    body: JSON.stringify({
      textQuery: "GSE Integrated 6441 Jones Creek Rd Baton Rouge LA",
    }),
  });

  if (!res.ok) {
    throw new Error(`Text Search failed with status ${res.status}`);
  }

  const data = await res.json();
  if (!data.places || data.places.length === 0) {
    throw new Error("Place not found in Text Search results");
  }

  cachedPlaceId = data.places[0].id;
  placeIdCacheTimestamp = Date.now();
  return cachedPlaceId;
}

async function fetchReviews(apiKey) {
  if (cachedReviews && Date.now() - reviewsCacheTimestamp < REVIEWS_CACHE_TTL) {
    return cachedReviews;
  }

  const placeId = await findPlaceId(apiKey);

  const res = await fetch(
    `https://places.googleapis.com/v1/places/${placeId}`,
    {
      headers: {
        "X-Goog-Api-Key": apiKey,
        "X-Goog-FieldMask": "reviews",
      },
    }
  );

  if (!res.ok) {
    throw new Error(`Place Details failed with status ${res.status}`);
  }

  const data = await res.json();

  const reviews = (data.reviews || []).map((r) => ({
    name: r.authorAttribution?.displayName || "Google User",
    photoUrl: r.authorAttribution?.photoUri || null,
    profileUrl: r.authorAttribution?.uri || null,
    rating: r.rating || 5,
    text: r.text?.text || "",
    relativeTime: r.relativePublishTimeDescription || "",
  }));

  cachedReviews = reviews;
  reviewsCacheTimestamp = Date.now();
  return reviews;
}

app.http("getReviews", {
  methods: ["GET"],
  authLevel: "anonymous",
  route: "reviews",
  handler: async (request, context) => {
    try {
      const apiKey = process.env.GOOGLE_PLACES_API_KEY;
      if (!apiKey) {
        context.log("GOOGLE_PLACES_API_KEY environment variable is not set");
        return {
          status: 500,
          jsonBody: { error: "API key not configured" },
        };
      }

      const reviews = await fetchReviews(apiKey);

      return {
        jsonBody: { reviews },
        headers: {
          "Cache-Control": "public, max-age=3600",
        },
      };
    } catch (err) {
      context.log("Error fetching reviews:", err.message);
      return {
        status: 500,
        jsonBody: { error: "Failed to fetch reviews" },
      };
    }
  },
});
