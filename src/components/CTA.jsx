import { Link } from 'react-router-dom';

const CTA = () => {
  return (
    <section className="py-20 bg-primary-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-primary-100 mb-10 max-w-2xl mx-auto">
            Contact us today for a free estimate. Our team is ready to help with all your electrical needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-white text-primary-500 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-200 shadow-lg"
            >
              Submit Request
            </Link>
            <a
              href="tel:2255290330"
              className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary-500 transition-all duration-200"
            >
              Call (225) 529-0330
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
