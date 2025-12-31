import ContactForm from '../components/ContactForm';

const GeneratorServices = () => {
  const services = [
    {
      title: 'Whole-Home Generators',
      description: 'Automatic standby generators that power your entire home during outages, providing seamless backup power.',
    },
    {
      title: 'Generator Installation',
      description: 'Professional installation including electrical connections, gas lines, and automatic transfer switches.',
    },
    {
      title: 'Maintenance Plans',
      description: 'Regular maintenance services to keep your generator in peak condition and ready when you need it.',
    },
    {
      title: 'Emergency Repairs',
      description: 'Fast response repair services to get your generator back up and running quickly.',
    },
    {
      title: 'Load Calculations',
      description: 'Expert analysis to determine the right size generator for your home or business needs.',
    },
    {
      title: 'Transfer Switches',
      description: 'Installation and repair of automatic and manual transfer switches for safe power switching.',
    },
  ];

  const benefits = [
    'Keep lights, HVAC, and appliances running during outages',
    'Protect food in refrigerators and freezers',
    'Maintain medical equipment and home security systems',
    'Work from home without interruption',
    'Protect your home from flood damage with sump pumps',
    'Increase your property value',
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
              Keep your power on during outages with professional generator installation and service. Never be left in the dark again.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-primary-500 font-semibold text-sm uppercase tracking-wider">Our Services</span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-navy-500">
              Complete Generator Solutions
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
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-navy-500 mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary-500 font-semibold text-sm uppercase tracking-wider">Why You Need a Generator</span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-navy-500 mb-6">
                Benefits of Backup Power
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Louisiana weather can be unpredictable. Hurricanes, storms, and grid failures can leave you without power for hours or even days. A standby generator provides peace of mind.
              </p>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="w-6 h-6 text-primary-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-navy-500 mb-6">Generator Inquiry</h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Get Serviced CTA */}
      <section className="py-16 bg-primary-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Already Have a Generator?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Keep it running smoothly with our professional maintenance and repair services.
            </p>
            <a
              href="tel:2255290330"
              className="inline-flex items-center px-8 py-4 bg-white text-primary-500 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-200 shadow-lg"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Schedule Service: (225) 529-0330
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GeneratorServices;
