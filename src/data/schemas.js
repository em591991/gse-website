// Centralized JSON-LD schemas for GSE Integrated.
// Edit values here ONLY — components consume these objects.
// AggregateRating intentionally omitted until Google Places carousel is live.

const SITE = "https://gseintegrated.com";

const BUSINESS_ID = `${SITE}/#business`;
const ORG_ID = `${SITE}/#organization`;
const WEBSITE_ID = `${SITE}/#website`;

const AREA_SERVED = [
  "Baton Rouge", "Prairieville", "Denham Springs", "Gonzales", "New Orleans",
  "Hammond", "Port Allen", "Brusly", "Zachary", "Livingston", "Sorrento",
  "Donaldsonville", "Madisonville", "Mandeville", "Slidell", "Chalmette", "St. Bernard"
].map((name) => ({ "@type": "City", name, containedInPlace: { "@type": "State", name: "Louisiana" } }));

const ORGANIZATION = {
  "@type": "Organization",
  "@id": ORG_ID,
  name: "GSE Integrated",
  alternateName: "GSE Integrated LLC",
  url: SITE,
  logo: `${SITE}/logo.png`,
  email: "reception@gseintegrated.com",
  telephone: "+1-225-615-8131",
  foundingDate: "2009",
  description: "Licensed electrical contractor serving residential and commercial customers in Baton Rouge and the surrounding Louisiana region, specializing in electrical, alarm and security, generator, new construction, EV charging, smart home, and data networking services.",
  sameAs: [
    "https://www.facebook.com/wiremeerik/",
    "https://www.linkedin.com/company/gse-integrated",
    "https://www.yelp.com/biz/gse-integrated-baton-rouge"
  ]
};

const BUSINESS = {
  "@type": "ElectricalContractor",
  "@id": BUSINESS_ID,
  name: "GSE Integrated",
  url: SITE,
  image: `${SITE}/logo.png`,
  logo: `${SITE}/logo.png`,
  telephone: "+1-225-615-8131",
  email: "reception@gseintegrated.com",
  priceRange: "$$",
  parentOrganization: { "@id": ORG_ID },
  description: "Louisiana state-certified electrical contractor in Baton Rouge providing electrical service, alarm and security, whole-home generators, new construction wiring, EV charger installation, smart home integration, and data/networking for residential and commercial clients since 2009.",
  slogan: "Your trusted electrical partner in reliability.",
  foundingDate: "2009",
  address: {
    "@type": "PostalAddress",
    streetAddress: "6441 Jones Creek Rd",
    addressLocality: "Baton Rouge",
    addressRegion: "LA",
    postalCode: "70817",
    addressCountry: "US"
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 30.3936817,
    longitude: -91.0177288
  },
  areaServed: AREA_SERVED,
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday"],
      opens: "07:30",
      closes: "17:00"
    }
  ],
  // Verify these license numbers before publishing.
  hasCredential: [
    {
      "@type": "EducationalOccupationalCredential",
      name: "Louisiana State Electrical License",
      credentialCategory: "license",
      identifier: "51125",
      recognizedBy: { "@type": "GovernmentOrganization", name: "State of Louisiana" }
    },
    {
      "@type": "EducationalOccupationalCredential",
      name: "Louisiana State Fire Marshal Alarm Installer License",
      credentialCategory: "license",
      identifier: "F2462",
      recognizedBy: { "@type": "GovernmentOrganization", name: "Louisiana Office of State Fire Marshal" }
    }
  ],
  knowsAbout: [
    "Residential electrical service", "Commercial electrical service",
    "Electrical troubleshooting and repair", "Panel upgrades and rewiring",
    "Lighting installation", "Ceiling fan installation",
    "Alarm systems", "Security cameras and surveillance", "Access control",
    "Whole-home generator installation", "Generator maintenance and load testing",
    "New construction wiring", "National Electrical Code compliance",
    "EV charger installation", "Level 2 EV charging",
    "Smart home automation", "Structured cabling and data networking"
  ],
  sameAs: ORGANIZATION.sameAs,
  potentialAction: {
    "@type": "ReserveAction",
    target: `${SITE}/submit-request`,
    name: "Request Service"
  }
  // TODO: Add aggregateRating once Google Places review integration ships.
  // aggregateRating: { "@type": "AggregateRating", ratingValue: "5.0", reviewCount: "60" }
};

const WEBSITE = {
  "@type": "WebSite",
  "@id": WEBSITE_ID,
  url: SITE,
  name: "GSE Integrated",
  publisher: { "@id": ORG_ID },
  inLanguage: "en-US",
  potentialAction: {
    "@type": "SearchAction",
    target: { "@type": "EntryPoint", urlTemplate: `${SITE}/search?q={search_term_string}` },
    "query-input": "required name=search_term_string"
  }
};

const makeService = ({ slug, name, description, serviceType, keywords }) => ({
  "@type": "Service",
  "@id": `${SITE}/${slug}#service`,
  name,
  serviceType,
  description,
  url: `${SITE}/${slug}`,
  provider: { "@id": BUSINESS_ID },
  areaServed: AREA_SERVED,
  category: "Electrical Services",
  keywords
});

const SERVICES = [
  makeService({
    slug: "electrical-services",
    name: "Residential & Commercial Electrical Services",
    serviceType: "Electrical Service",
    description: "Licensed electrical service for homes and businesses in Baton Rouge: troubleshooting, panel upgrades, rewiring, lighting, outlets, ceiling fans, code corrections, and inspection follow-ups.",
    keywords: "electrician Baton Rouge, electrical repair, panel upgrade, rewiring, licensed electrician Louisiana"
  }),
  makeService({
    slug: "alarm-security",
    name: "Alarm & Security Systems",
    serviceType: "Security System Installation",
    description: "Design, installation, and service of alarm systems, surveillance cameras, access control, and smart security integrations by a Louisiana Fire Marshal licensed installer.",
    keywords: "alarm installer Baton Rouge, security cameras, surveillance, access control, home security"
  }),
  makeService({
    slug: "generators",
    name: "Whole-Home & Commercial Generators",
    serviceType: "Generator Installation and Maintenance",
    description: "Whole-home and commercial standby generator design, installation, load testing, scheduled maintenance, repairs, and remote monitoring setup.",
    keywords: "generator installation Baton Rouge, whole home generator, Generac, generator maintenance, backup power Louisiana"
  }),
  makeService({
    slug: "new-construction",
    name: "New Construction Electrical",
    serviceType: "New Construction Wiring",
    description: "Full-scope electrical buildouts for new residential and commercial construction, working alongside builders, architects, and developers from plan to inspection in full compliance with the National Electrical Code.",
    keywords: "new construction electrician Baton Rouge, residential wiring, commercial wiring, NEC compliance, new home electrical"
  })
];

const FAQ = {
  "@type": "FAQPage",
  "@id": `${SITE}/#faq`,
  mainEntity: [
    {
      "@type": "Question",
      name: "Is GSE Integrated licensed and insured?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. GSE Integrated holds a Louisiana State Electrical License (#51125) and a Louisiana State Fire Marshal Alarm Installer License (#F2462), and we carry full general liability and workers' compensation insurance."
      }
    },
    {
      "@type": "Question",
      name: "What areas do you serve?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We serve Baton Rouge and the surrounding region, including Prairieville, Denham Springs, Gonzales, Port Allen, Brusly, Zachary, Livingston, Sorrento, and Donaldsonville, extending east to Hammond, Madisonville, Mandeville, and Slidell, and south to New Orleans, Chalmette, and St. Bernard."
      }
    },
    {
      "@type": "Question",
      name: "Do you offer free estimates?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we offer free estimates on most projects. Submit a request through our contact form at gseintegrated.com/submit-request or call (225) 615-8131 to schedule."
      }
    },
    {
      "@type": "Question",
      name: "Do you provide emergency electrical service?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Electrical issues do not wait for business hours, and neither do we. Call (225) 615-8131 for after-hours and emergency support."
      }
    },
    {
      "@type": "Question",
      name: "Do you handle both residential and commercial work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. While our roots are residential, we serve both home and business owners across the greater Baton Rouge area for service calls, new construction, security, generators, EV charging, and integrated systems."
      }
    },
    {
      "@type": "Question",
      name: "Do you install EV chargers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We install Level 2 home EV chargers and commercial charging stations, sized to your panel capacity, vehicle, and daily charging needs."
      }
    },
    {
      "@type": "Question",
      name: "Do you install and service whole-home generators?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We design, install, service, and maintain whole-home and commercial standby generators with remote monitoring, scheduled maintenance, and load testing for full peace of mind."
      }
    },
    {
      "@type": "Question",
      name: "What kinds of security and alarm systems do you install?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We install and service alarm systems, security camera and surveillance systems, access control, and smart-home security integrations, all under our Louisiana Fire Marshal Alarm Installer License."
      }
    },
    {
      "@type": "Question",
      name: "Can you work with my builder or architect on new construction?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. Our New Construction Department collaborates with builders, architects, and developers from plan review through final inspection, ensuring full compliance with the National Electrical Code and any local amendments."
      }
    },
    {
      "@type": "Question",
      name: "How quickly can I get on the schedule?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most service calls can be scheduled within a few business days. Emergency situations are prioritized — call (225) 615-8131 and we will dispatch as quickly as possible."
      }
    }
  ]
};

export const siteSchemaGraph = {
  "@context": "https://schema.org",
  "@graph": [BUSINESS, ORGANIZATION, WEBSITE, ...SERVICES]
};

export const faqSchema = {
  "@context": "https://schema.org",
  ...FAQ
};

export const buildBreadcrumbSchema = (items) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: item.url.startsWith("http") ? item.url : `${SITE}${item.url}`
  }))
});
