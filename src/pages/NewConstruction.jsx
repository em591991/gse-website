import ContactForm from '../components/ContactForm';

const NewConstruction = () => {
  const features = [
    {
      title: 'Complete Wiring Systems',
      description: 'Full electrical wiring for new residential and commercial buildings, designed to meet current and future needs.',
    },
    {
      title: 'Code Compliance',
      description: 'All work meets or exceeds local and national electrical codes, ensuring safety and passing inspections.',
    },
    {
      title: 'Smart Home Integration',
      description: 'Pre-wire for smart home systems, including automated lighting, security, and entertainment systems.',
    },
    {
      title: 'Commercial Build-Outs',
      description: 'Specialized electrical installations for offices, retail spaces, restaurants, and industrial facilities.',
    },
    {
      title: 'Energy Efficiency',
      description: 'Design and installation of energy-efficient systems to reduce operating costs and environmental impact.',
    },
    {
      title: 'Project Coordination',
      description: 'Seamless coordination with builders, architects, and other contractors for smooth project completion.',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-navy-500 to-navy-700 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              New Construction Electrical
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Expert electrical installation for new residential and commercial construction projects throughout Louisiana.
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-primary-500 font-semibold text-sm uppercase tracking-wider">Our Expertise</span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-navy-500">
              Building It Right From The Start
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-navy-500 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-navy-500 mb-6">
                Start Your Project With Confidence
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Whether you're building a new home or developing a commercial property, our experienced team ensures your electrical systems are installed correctly the first time.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-primary-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Licensed & Insured Electricians</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-primary-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">On-Time Project Completion</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-primary-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Competitive Pricing</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-navy-500 mb-6">Get a Free Estimate</h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewConstruction;
