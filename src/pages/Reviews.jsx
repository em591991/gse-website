const reviews = [
  {
    name: 'Marcy M.',
    role: 'Real Estate Professional',
    content: 'As a Real Estate Professional, I have used them several times. Always extremely knowledgeable and professional. They take the time to explain everything and provide excellent service. I highly recommend GSE Integrated for any electrical work.',
    rating: 5,
    date: 'October 2024',
  },
  {
    name: 'Courtney D.',
    role: 'Homeowner',
    content: 'They were very professional and did the job quickly. The technicians were very friendly and answered all my questions. The pricing was fair and the work was completed exactly as promised. Highly recommend their services!',
    rating: 5,
    date: 'September 2024',
  },
  {
    name: 'Stephen D.',
    role: 'Business Owner',
    content: 'The recent work was first class. He was prompt, easy to work with, and the quality of work exceeded my expectations. Will definitely use them again for any future electrical needs.',
    rating: 5,
    date: 'August 2024',
  },
  {
    name: 'Michael R.',
    role: 'Homeowner',
    content: 'Had them install a whole-house generator before hurricane season. The installation was flawless and they explained everything about maintaining the unit. When the power went out during the last storm, the generator kicked in automatically. Worth every penny!',
    rating: 5,
    date: 'July 2024',
  },
  {
    name: 'Sarah L.',
    role: 'Property Manager',
    content: 'We use GSE Integrated for all our commercial properties. Their response time is excellent and they always get the job done right. The team is professional, clean, and respectful of our tenants.',
    rating: 5,
    date: 'June 2024',
  },
  {
    name: 'James T.',
    role: 'New Construction Client',
    content: 'GSE did all the electrical work for our new home build. They coordinated perfectly with our builder and the inspection passed without any issues. The smart home integration they set up is amazing!',
    rating: 5,
    date: 'May 2024',
  },
];

const StarIcon = ({ filled }) => (
  <svg
    className={`w-5 h-5 ${filled ? 'text-yellow-400' : 'text-gray-300'}`}
    fill="currentColor"
    viewBox="0 0 20 20"
  >
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

const Reviews = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-navy-500 to-navy-700 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Customer Reviews
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See what our customers are saying about GSE Integrated. We're proud of our 5-star reputation.
            </p>
          </div>
        </div>
      </section>

      {/* Rating Summary */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-navy-500 mb-2">5.0</div>
              <div className="flex justify-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} filled={true} />
                ))}
              </div>
              <p className="text-gray-600">Based on Google Reviews</p>
            </div>
            <div className="h-16 w-px bg-gray-200 hidden md:block" />
            <div className="flex items-center gap-4">
              <svg className="w-12 h-12" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              <div>
                <p className="font-semibold text-navy-500">Google Reviews</p>
                <p className="text-sm text-gray-500">Verified Reviews</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
              >
                {/* Rating */}
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} filled={i < review.rating} />
                  ))}
                </div>

                {/* Content */}
                <p className="text-gray-600 mb-6 italic">
                  "{review.content}"
                </p>

                {/* Author */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                      <span className="text-primary-500 font-bold text-lg">
                        {review.name.charAt(0)}
                      </span>
                    </div>
                    <div className="ml-4">
                      <p className="font-semibold text-navy-500">{review.name}</p>
                      <p className="text-sm text-gray-500">{review.role}</p>
                    </div>
                  </div>
                  <span className="text-sm text-gray-400">{review.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Experience Our Service?
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Join our growing list of satisfied customers.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-4 bg-white text-primary-500 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-200 shadow-lg"
          >
            Get Started Today
          </a>
        </div>
      </section>
    </div>
  );
};

export default Reviews;
