import hbaLogo from '../assets/HBA-1°-Logo-2.png';
import bbrLogo from '../assets/2025BBR_GoldWinner.png';

// Custom BBB Badge Component
const BBBBadge = () => (
  <svg viewBox="0 0 120 50" className="h-12 w-auto">
    {/* Background */}
    <rect x="0" y="0" width="120" height="50" rx="4" fill="#005A8C" />
    {/* BBB Torch Icon */}
    <g transform="translate(8, 8) scale(0.7)">
      <path fill="#ffffff" d="M12 2C12 2 8 6 8 10C8 12.5 9.5 14.5 12 15C14.5 14.5 16 12.5 16 10C16 6 12 2 12 2Z"/>
      <rect x="10.5" y="15" width="3" height="12" fill="#ffffff"/>
      <rect x="8" y="27" width="8" height="3" rx="1" fill="#ffffff"/>
    </g>
    {/* Text */}
    <text x="40" y="20" fill="#ffffff" fontSize="14" fontWeight="bold" fontFamily="Arial, sans-serif">BBB</text>
    <text x="40" y="32" fill="#ffffff" fontSize="7" fontFamily="Arial, sans-serif">ACCREDITED</text>
    <text x="40" y="42" fill="#ffffff" fontSize="7" fontFamily="Arial, sans-serif">BUSINESS</text>
    {/* Rating */}
    <text x="95" y="30" fill="#ffffff" fontSize="12" fontWeight="bold" fontFamily="Arial, sans-serif">A+</text>
  </svg>
);

const testimonials = [
  {
    name: 'Marcy M.',
    role: 'Real Estate Professional',
    content: 'As a Real Estate Professional, I have used them several times. Always extremely knowledgeable and professional. They take the time to explain everything and provide excellent service.',
    rating: 5,
  },
  {
    name: 'Courtney D.',
    role: 'Homeowner',
    content: 'They were very professional and did the job quickly. The technicians were very friendly and answered all my questions. Highly recommend their services!',
    rating: 5,
  },
  {
    name: 'Stephen D.',
    role: 'Business Owner',
    content: 'The recent work was first class. He was prompt, easy to work with, and the quality of work exceeded my expectations. Will definitely use them again.',
    rating: 5,
  },
];

const StarIcon = () => (
  <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

const Testimonials = () => {
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

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
            >
              {/* Rating */}
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <StarIcon key={i} />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-600 mb-6 italic">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                  <span className="text-primary-500 font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div className="ml-4">
                  <p className="font-semibold text-navy-500">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

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
                className="flex flex-col items-center justify-center h-16 w-24 hover:opacity-80 transition-opacity"
              >
                <svg className="w-8 h-8 mb-1" viewBox="0 0 24 24">
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
                <BBBBadge />
              </a>

              <div className="hidden sm:block h-12 w-px bg-gray-200" />

              {/* HBA Logo */}
              <div className="flex items-center justify-center h-16">
                <img
                  src={hbaLogo}
                  alt="Home Builders Association"
                  className="h-12 w-auto"
                />
              </div>

              <div className="hidden sm:block h-12 w-px bg-gray-200" />

              {/* 2025 BBR Gold Winner */}
              <div className="flex items-center justify-center h-16">
                <img
                  src={bbrLogo}
                  alt="2025 Best of Baton Rouge Gold Winner"
                  className="h-12 w-auto"
                />
              </div>
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
