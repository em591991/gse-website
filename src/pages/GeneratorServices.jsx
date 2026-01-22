import ContactForm from '../components/ContactForm';
import generacLogo from '../assets/generac-logo.png';
import briggsLogo from '../assets/Briggs&Stratton.png';
import kohlerLogo from '../assets/Kohler.png';

const GeneratorServices = () => {
  const services = [
    {
      title: 'Sales & Sizing',
      description: 'Expert consultation to size your standby/backup generator based on your specific needs.',
    },
    {
      title: 'Full Installation',
      description: 'Complete installation including connections to panels, fuel lines, and transfer switch wiring.',
    },
    {
      title: 'Preventive Maintenance',
      description: 'Seasonal servicing and load bank testing to keep your generator in peak condition.',
    },
    {
      title: 'Repairs & Diagnostics',
      description: 'Fast response repairs, parts replacement, and comprehensive diagnostics.',
    },
    {
      title: 'Remote Monitoring Setup',
      description: 'Configure alerts and monitoring so you can check your generator status from anywhere.',
    },
  ];

  const aboveAndBeyond = [
    {
      title: 'Detailed Load Analysis',
      description: 'We size your generator based on real-world usage, HVAC demands, and future expansion — not just guesswork.',
    },
    {
      title: 'Clean & Code Compliant Installs',
      description: 'Everything is mounted, grounded, and ventilated per manufacturer and parish code standards.',
    },
    {
      title: 'Scheduled Maintenance Plan',
      description: 'We offer tiered maintenance contracts (oil/filter changes, exercise cycles, diagnostics) so your generator is always ready.',
    },
    {
      title: 'Remote Visibility',
      description: 'With modern monitoring platforms, you can see status, alerts, and maintenance reminders from your phone or computer.',
    },
    {
      title: 'Emergency Priority Service',
      description: 'During outages, our generator customers jump to the front of the line to get back online faster.',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-navy-500 to-navy-700 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Generator Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              When the power goes out, our Generator Department ensures your home stays bright, cool, and functional. Our team is committed to year-round, around-the-clock service to support you in your time of need.
            </p>
          </div>
        </div>
      </section>

      {/* Image Placeholder Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-100 rounded-xl h-64 flex items-center justify-center">
              <p className="text-gray-500 text-center px-4">GSE truck pulling Generac trailer</p>
            </div>
            <div className="bg-gray-100 rounded-xl h-64 flex items-center justify-center">
              <p className="text-gray-500 text-center px-4">Generac generator installed outside home</p>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Text */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-lg text-gray-700 leading-relaxed">
            Whether you are looking for a new generator installation, or regular maintenance on an existing one, we will be there for you.
          </p>
        </div>
      </section>

      {/* Brands We Service */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-gray-500 uppercase tracking-wider mb-8">Brands We Service</p>
          <div className="bg-gray-50 rounded-2xl shadow-md p-6 sm:p-8">
            <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12">
              <img src={generacLogo} alt="Generac" className="h-12 w-auto" />
              <div className="hidden sm:block h-12 w-px bg-gray-200" />
              <img src={briggsLogo} alt="Briggs & Stratton" className="h-14 w-auto" />
              <div className="hidden sm:block h-12 w-px bg-gray-200" />
              <img src={kohlerLogo} alt="Kohler" className="h-12 w-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-primary-500 font-semibold text-sm uppercase tracking-wider">Our Services</span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-navy-500">
              We Handle
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-navy-500 mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Go Above and Beyond */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-primary-500 font-semibold text-sm uppercase tracking-wider">The GSE Difference</span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-navy-500">
              How We Go Above and Beyond
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aboveAndBeyond.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center mb-4 text-white font-bold">
                  {index + 1}
                </div>
                <h3 className="text-lg font-bold text-navy-500 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-navy-500 mb-6">
                Ready to Stay Powered?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Whether you need a new generator installation or want to ensure your current system is ready for the next storm, we're here to help.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-primary-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Free consultations and estimates</span>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-primary-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Authorized Generac dealer</span>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-primary-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Professional installation team</span>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-navy-500 mb-6">Generator Inquiry</h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Maintenance Signup CTA */}
      <section className="py-16 bg-primary-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Already Have a Generator?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Keep it running smoothly with our professional maintenance plans. Regular service means your generator is always ready when you need it most.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:2255290330"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-500 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-200 shadow-lg"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Schedule Maintenance: (225) 529-0330
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-navy-600 text-white font-semibold rounded-lg hover:bg-navy-700 transition-all duration-200 shadow-lg"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Sign Up for a Maintenance Plan
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GeneratorServices;
