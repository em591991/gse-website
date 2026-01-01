import { Link } from 'react-router-dom';
import droneImage from '../assets/DronePic2png.png';

const Hero = () => {
  return (
    <section className="relative overflow-hidden pt-20">
      {/* Full-width drone image background */}
      <div className="absolute inset-0">
        <img
          src={droneImage}
          alt="GSE Integrated facility aerial view"
          className="w-full h-full object-cover object-center"
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20 lg:py-28">
        <div className="max-w-4xl mx-auto text-center">
          {/* Content */}
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Powering Lifelong Trust
            </h1>
            <p className="mt-6 text-xl text-gray-200 max-w-3xl mx-auto">
              At GSE Integrated, we bring experience, care, and innovation to your home. We are happy to serve as your one-stop local electrical contractor: from electrical troubleshooting to safeguarding your property with state of the art security systems to keeping your lights on during outages and delivering full electrical buildouts for new construction — we're more than contractors. We're your trusted electrical partner in reliability.
            </p>
            <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto">
              Every job—big or small—is backed by licensed professionals, transparent communication, and a relentless commitment to quality. Whether you're a homeowner, business owner, or developer, you can count on us to deliver solutions built to last.
            </p>
            <p className="mt-4 text-lg text-primary-300 font-medium max-w-3xl mx-auto">
              Explore our departments to see how we can serve you — and why customers in the greater Baton Rouge area are choosing GSE Integrated.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/generator-services"
                className="px-8 py-4 bg-primary-500 text-white font-semibold rounded-lg hover:bg-primary-600 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Generator Inquiry
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 bg-white text-navy-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Submit Request
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="mt-12 flex flex-wrap gap-6 justify-center">
              <div className="flex items-center text-gray-300">
                <svg className="w-5 h-5 mr-2 text-primary-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Licensed & Insured</span>
              </div>
              <div className="flex items-center text-gray-300">
                <svg className="w-5 h-5 mr-2 text-primary-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>24/7 Emergency Service</span>
              </div>
              <div className="flex items-center text-gray-300">
                <svg className="w-5 h-5 mr-2 text-primary-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Free Estimates</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg className="w-full h-16 text-white" viewBox="0 0 1440 54" fill="currentColor" preserveAspectRatio="none">
          <path d="M0 22L60 16.7C120 11 240 1 360 0.3C480 0 600 8 720 16.7C840 25 960 35 1080 36.7C1200 38 1320 32 1380 28.7L1440 26V54H1380C1320 54 1200 54 1080 54C960 54 840 54 720 54C600 54 480 54 360 54C240 54 120 54 60 54H0V22Z" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
