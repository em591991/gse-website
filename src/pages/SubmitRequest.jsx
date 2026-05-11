import { useNavigate } from 'react-router-dom';
import SEO from '../components/SEO';
import SchemaMarkup from '../components/SchemaMarkup';
import { buildBreadcrumbSchema } from '../data/schemas';
import droneImage from '../assets/dronepic1png.png';

const SubmitRequest = () => {
  const navigate = useNavigate();

  return (
    <div>
      <SEO
        title="Submit a Service Request | GSE Integrated"
        description="Request electrical, security, or generator services from GSE Integrated in Baton Rouge."
        path="/submit-request"
      />
      <SchemaMarkup schema={buildBreadcrumbSchema([
        { name: 'Home', url: '/' },
        { name: 'Contact', url: '/submit-request' },
      ])} />
      {/* Back Button */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="inline-flex items-center text-primary-500 hover:text-primary-600 font-medium transition-colors duration-200"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
            Back
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 z-0">
          <img
            src={droneImage}
            alt="GSE Integrated facility"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Submit a Request
            </h1>
            <p className="text-xl text-white max-w-3xl mx-auto">
              Fill out the form below and our team will get back to you shortly.
            </p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <iframe
            title="GSE Integrated Service Request Form"
            src="https://form.jotform.com/261097041504147"
            frameBorder="0"
            scrolling="yes"
            className="w-full"
            style={{ width: '100%', minHeight: '800px', border: 'none' }}
          />
        </div>
      </section>
    </div>
  );
};

export default SubmitRequest;
