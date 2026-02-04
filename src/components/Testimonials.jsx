import { useState, useEffect, useCallback } from 'react';
import hbaLogo from '../assets/HBA-1°-Logo-2.png';
import bbrLogo from '../assets/2025BBR_GoldWinner.png';
import bbbLogo from '../assets/bbb-aplus.png';

const fallbackReviews = [
  {
    name: 'Garylyn Gill',
    photoUrl: null,
    profileUrl: null,
    rating: 5,
    text: 'Thank you GSE for sending Patrick Babin over to install 2 Fandeliers at my home. He was very professional, and so polite. It was truly a pleasure to work with him. 100% satisfaction!',
    relativeTime: '',
    role: 'Google Review',
  },
  {
    name: 'John Pacillo',
    photoUrl: null,
    profileUrl: null,
    rating: 5,
    text: 'Installed a Generac generator for me. Handled all the permitting and inspections. Did a great job. Looks professionally installed.',
    relativeTime: '',
    role: 'Google Review',
  },
  {
    name: 'Marcy M.',
    photoUrl: null,
    profileUrl: null,
    rating: 5,
    text: 'As a Real Estate Professional, I have used them several times. Always extremely knowledgeable and professional. They take the time to explain everything and provide excellent service.',
    relativeTime: '',
    role: 'Real Estate Professional',
  },
  {
    name: 'Jonathon S.',
    photoUrl: null,
    profileUrl: null,
    rating: 5,
    text: 'Technician was able to troubleshoot and solve our issue quickly at a reasonable cost. Highly recommend!',
    relativeTime: '',
    role: 'Google Review',
  },
  {
    name: 'Nathan & Amy LaPorte',
    photoUrl: null,
    profileUrl: null,
    rating: 5,
    text: 'Timely and very professional. Installer was great and cleaned everything up afterwards.',
    relativeTime: '',
    role: 'Google Review',
  },
  {
    name: 'Courtney D.',
    photoUrl: null,
    profileUrl: null,
    rating: 5,
    text: 'They were very professional and did the job quickly. They cleaned up when they were done and were very friendly. I would definitely recommend GSE for any electrical job.',
    relativeTime: '',
    role: 'Homeowner',
  },
  {
    name: 'Mark T.',
    photoUrl: null,
    profileUrl: null,
    rating: 5,
    text: 'Rob did a great job! Fast, efficient, and quality workmanship. When encountering a small problem replacing a recessed light in my master shower, he quickly came up with a solution.',
    relativeTime: '',
    role: 'Google Review',
  },
  {
    name: 'Aiesha B.',
    photoUrl: null,
    profileUrl: null,
    rating: 5,
    text: 'Leon installed two electric chargers at my residence. He was prompt, polite, and prepared! 10/10 service.',
    relativeTime: '',
    role: 'Google Review',
  },
  {
    name: 'Stephen D.',
    photoUrl: null,
    profileUrl: null,
    rating: 5,
    text: 'The recent work was first class. He was prompt, easy to work with, and the quality of work exceeded my expectations. Will definitely use them again.',
    relativeTime: '',
    role: 'Business Owner',
  },
  {
    name: 'Alex S.',
    photoUrl: null,
    profileUrl: null,
    rating: 5,
    text: 'GSE is a great company. I contacted them to repair some outlets that did not work and quote two new outdoor outlets. Jordan was at my house quickly and did excellent work.',
    relativeTime: '',
    role: 'Google Review',
  },
  {
    name: 'P Tyson',
    photoUrl: null,
    profileUrl: null,
    rating: 5,
    text: 'Pat was quick and professional. Happy to have working lights again.',
    relativeTime: '',
    role: 'Google Review',
  },
  {
    name: 'Todd C.',
    photoUrl: null,
    profileUrl: null,
    rating: 5,
    text: 'Rob and Leon from GSE were great. They were actually early for the appointment and completed it in record time. I am very impressed with their work.',
    relativeTime: '',
    role: 'Google Review',
  },
  {
    name: 'Barb B.',
    photoUrl: null,
    profileUrl: null,
    rating: 5,
    text: 'Jordan and Leon did an excellent job installing my 30 amp outlet on the exterior of my house. They were quick and professional and left the area clean.',
    relativeTime: '',
    role: 'Google Review',
  },
  {
    name: 'Zach K.',
    photoUrl: null,
    profileUrl: null,
    rating: 5,
    text: 'Jordan was great! Clear communication and willing to explain things to someone with no experience in electricity. Would highly recommend.',
    relativeTime: '',
    role: 'Google Review',
  },
  {
    name: 'Iván F.',
    photoUrl: null,
    profileUrl: null,
    rating: 5,
    text: 'Rob was very professional. I am very pleased with the work he did. He installed a ChargePoint charger hardwired on a 60 amp circuit breaker. Great job!',
    relativeTime: '',
    role: 'Google Review',
  },
  {
    name: 'Evita B.',
    photoUrl: null,
    profileUrl: null,
    rating: 5,
    text: 'Rob assisted me with my electrical needs. He was so educated on my issue and was so quick to resolve my problem. He made me feel like I was his only customer.',
    relativeTime: '',
    role: 'Google Review',
  },
  {
    name: 'Jack J.',
    photoUrl: null,
    profileUrl: null,
    rating: 5,
    text: 'Leon from GSE did professional work for me at my residence installing an attic light and switch. GSE has done work for me before. I would not hesitate to call them again.',
    relativeTime: '',
    role: 'Google Review',
  },
  {
    name: 'Michael C.',
    photoUrl: null,
    profileUrl: null,
    rating: 5,
    text: 'Rob got here on time and was able to take care of several items that I had asked to be fixed. He explained what he was doing and communicated clearly throughout.',
    relativeTime: '',
    role: 'Google Review',
  },
];

const TRUNCATE_LENGTH = 150;
const AUTO_CYCLE_MS = 8000;

const StarIcon = () => (
  <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

const ReviewCard = ({ review }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [imgError, setImgError] = useState(false);

  const needsTruncation = review.text.length > TRUNCATE_LENGTH;
  const displayText = isExpanded || !needsTruncation
    ? review.text
    : review.text.substring(0, TRUNCATE_LENGTH) + '...';

  return (
    <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
      {/* Star Rating */}
      <div className="flex mb-4">
        {[...Array(review.rating)].map((_, i) => (
          <StarIcon key={i} />
        ))}
      </div>

      {/* Review Text */}
      <p className="text-gray-600 mb-6 italic flex-grow">
        &ldquo;{displayText}&rdquo;
        {needsTruncation && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-primary-500 font-medium ml-1 hover:underline"
          >
            {isExpanded ? 'show less' : 'read more'}
          </button>
        )}
      </p>

      {/* Reviewer Info */}
      <div className="flex items-center mt-auto">
        {review.photoUrl && !imgError ? (
          <img
            src={review.photoUrl}
            alt={review.name}
            className="w-12 h-12 rounded-full object-cover"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
            <span className="text-primary-500 font-bold text-lg">
              {review.name.charAt(0)}
            </span>
          </div>
        )}
        <div className="ml-4">
          <p className="font-semibold text-navy-500">{review.name}</p>
          <p className="text-sm text-gray-500">
            {review.relativeTime || review.role || 'Google Review'}
          </p>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const [reviews, setReviews] = useState(fallbackReviews);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [cardsToShow, setCardsToShow] = useState(3);

  // Fetch reviews from API and merge with hardcoded ones
  useEffect(() => {
    let cancelled = false;
    async function loadReviews() {
      try {
        const res = await fetch('/api/reviews');
        if (!res.ok) throw new Error('API error');
        const data = await res.json();
        if (!cancelled && data.reviews && data.reviews.length > 0) {
          const hardcodedNames = new Set(fallbackReviews.map((r) => r.name.toLowerCase()));
          const freshReviews = data.reviews.filter(
            (r) => !hardcodedNames.has(r.name.toLowerCase())
          );
          setReviews([...freshReviews, ...fallbackReviews]);
          setCurrentIndex(0);
        }
      } catch {
        // Silently fall back to hardcoded reviews
      }
    }
    loadReviews();
    return () => { cancelled = true; };
  }, []);

  // Responsive card count
  useEffect(() => {
    function handleResize() {
      setCardsToShow(window.innerWidth < 768 ? 1 : 3);
    }
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalSlides = Math.ceil(reviews.length / cardsToShow);

  const goToNext = useCallback(() => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prev) => {
        const next = prev + cardsToShow;
        return next >= reviews.length ? 0 : next;
      });
      requestAnimationFrame(() => setIsTransitioning(false));
    }, 300);
  }, [cardsToShow, reviews.length]);

  const goToPrev = useCallback(() => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prev) => {
        const prevIdx = prev - cardsToShow;
        return prevIdx < 0 ? Math.max(0, reviews.length - cardsToShow) : prevIdx;
      });
      requestAnimationFrame(() => setIsTransitioning(false));
    }, 300);
  }, [cardsToShow, reviews.length]);

  const goToDot = useCallback((dotIndex) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex(dotIndex * cardsToShow);
      requestAnimationFrame(() => setIsTransitioning(false));
    }, 300);
  }, [cardsToShow]);

  // Auto-cycle
  useEffect(() => {
    if (isPaused || reviews.length <= cardsToShow) return;
    const interval = setInterval(goToNext, AUTO_CYCLE_MS);
    return () => clearInterval(interval);
  }, [isPaused, goToNext, reviews.length, cardsToShow]);

  // Get visible reviews with wrap-around
  const getVisibleReviews = () => {
    const visible = [];
    for (let i = 0; i < cardsToShow; i++) {
      const idx = (currentIndex + i) % reviews.length;
      visible.push(reviews[idx]);
    }
    return visible;
  };

  const visibleReviews = getVisibleReviews();
  const currentDot = Math.floor(currentIndex / cardsToShow);

  return (
    <section className="py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy-500">
            See What Our Customers Are Saying About Us
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers have to say about our services.
          </p>
        </div>

        {/* Carousel */}
        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Left Arrow */}
          {reviews.length > cardsToShow && (
            <button
              onClick={goToPrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 sm:-translate-x-4 z-10 bg-white shadow-lg rounded-full p-2 hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500"
              aria-label="Previous reviews"
            >
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          )}

          {/* Cards */}
          <div className="overflow-hidden mx-8 sm:mx-12">
            <div
              className={`grid gap-8 transition-opacity duration-300 ease-in-out ${
                cardsToShow === 3 ? 'md:grid-cols-3' : 'grid-cols-1'
              } ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}
            >
              {visibleReviews.map((review, index) => (
                <ReviewCard key={`${currentIndex}-${index}`} review={review} />
              ))}
            </div>
          </div>

          {/* Right Arrow */}
          {reviews.length > cardsToShow && (
            <button
              onClick={goToNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 sm:translate-x-4 z-10 bg-white shadow-lg rounded-full p-2 hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500"
              aria-label="Next reviews"
            >
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          )}
        </div>

        {/* Dot Indicators */}
        {totalSlides > 1 && (
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: totalSlides }).map((_, i) => (
              <button
                key={i}
                onClick={() => goToDot(i)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  currentDot === i
                    ? 'bg-primary-500'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to review page ${i + 1}`}
              />
            ))}
          </div>
        )}

        {/* Credentials Section */}
        <div className="mt-16">
          <p className="text-center text-sm text-gray-500 uppercase tracking-wider mb-6">Trusted & Accredited</p>
          <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8">
            <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8">
              {/* Google Reviews Badge */}
              <a
                href="https://www.google.com/search?q=GSE+Integrated+Baton+Rouge+reviews"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center h-16 hover:opacity-80 transition-opacity"
              >
                <svg className="w-10 h-10 mb-1" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                <span className="text-lg font-bold text-navy-500">5.0</span>
              </a>

              <div className="hidden sm:block h-12 w-px bg-gray-200" />

              {/* BBB Seal */}
              <a
                href="https://www.bbb.org/us/la/baton-rouge/profile/electrician/gse-integrated-0835-90047745/#sealclick"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center h-16 hover:opacity-80 transition-opacity"
              >
                <img
                  src={bbbLogo}
                  alt="BBB A+ Rating"
                  className="h-12 w-auto"
                />
              </a>

              <div className="hidden sm:block h-12 w-px bg-gray-200" />

              {/* HBA Logo */}
              <a
                href="https://business.hbagbr.org/directory/Details/gse-integrated-130379"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center h-16 hover:opacity-80 transition-opacity"
              >
                <img
                  src={hbaLogo}
                  alt="Home Builders Association"
                  className="h-12 w-auto"
                />
              </a>

              <div className="hidden sm:block h-12 w-px bg-gray-200" />

              {/* 2025 BBR Gold Winner */}
              <a
                href="https://www.votebestofbatonrouge.com/listing/gse-integrated.html"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center h-16 hover:opacity-80 transition-opacity"
              >
                <img
                  src={bbrLogo}
                  alt="2025 Best of Baton Rouge Gold Winner"
                  className="h-14 w-auto"
                />
              </a>
            </div>
          </div>

          {/* Licensed & Insured Section */}
          <div className="mt-8 bg-navy-500 rounded-2xl p-6 sm:p-8 text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <svg className="w-8 h-8 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <h3 className="text-xl sm:text-2xl font-bold text-white">Louisiana Licensed & Insured</h3>
            </div>
            <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed">
              GSE Integrated carries a Louisiana State Electrical License, a Louisiana State Master Plumbing License, and a Louisiana State Fire Marshall Alarm Installer License. All of our technicians maintain current education courses as required by state law. This means you can have peace of mind that you are hiring qualified electricians when you call our Baton Rouge office, and that your home is protected.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
