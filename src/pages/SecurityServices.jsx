import ContactForm from '../components/ContactForm';
import gssIpadImage from '../assets/GSSipad.jpg';
import yardSignImage from '../assets/yard sign.JPG';

const SecurityServices = () => {
  const services = [
    {
      title: 'Burglar & Perimeter Intrusion Alarms',
      description: 'State-of-the-art intrusion detection systems to protect your home or business from unauthorized entry.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
        </svg>
      ),
    },
    {
      title: 'Access Control Systems',
      description: 'Manage who enters your property with keypad, card, or biometric access control systems.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
        </svg>
      ),
    },
    {
      title: 'CCTV/Video Surveillance & Remote Monitoring',
      description: 'High-definition video surveillance systems with remote viewing capabilities for complete property monitoring.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: 'Alarm Panel Service & Sensor Diagnostics',
      description: 'Professional service, diagnostics, and system upgrades to keep your security running smoothly.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
    {
      title: 'Smart Home Automation Integrations',
      description: 'Integrate your security system with smart home devices for seamless control and automation.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-navy-500 to-navy-700 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Alarm & Security
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Your safety is non-negotiable. Our Alarm & Security Department designs, installs, and maintains protection systems tailored to your needs.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Banner */}
      <section className="bg-primary-500 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-white text-lg">
              Monitoring Services Available Starting at{' '}
              <span className="text-3xl font-bold">$39.95</span>
              <span className="text-primary-100">/month</span>
            </p>
          </div>
        </div>
      </section>

      {/* Images Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img
                src={yardSignImage}
                alt="Secured by GSE Integrated yard sign"
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img
                src={gssIpadImage}
                alt="GSS Security iPad interface"
                className="w-full h-64 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Approach Text */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-lg text-gray-700 leading-relaxed">
            We begin with a site risk assessment — not a one size fits all template. We place cameras, sensors, and controls exactly where they're most effective.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-primary-500 font-semibold text-sm uppercase tracking-wider">Security Solutions</span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-navy-500">
              Our Offerings
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300 text-center w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.34rem)]"
              >
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6 text-primary-500">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-navy-500 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
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
                Protect What Matters Most
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Our security experts will design a customized system to meet your specific needs and budget. Get peace of mind knowing your property is protected around the clock.
              </p>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h4 className="font-bold text-navy-500 mb-4">Why Choose GSE Integrated?</h4>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-600">
                    <svg className="w-5 h-5 text-primary-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Licensed security professionals
                  </li>
                  <li className="flex items-center text-gray-600">
                    <svg className="w-5 h-5 text-primary-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    24/7 monitoring available
                  </li>
                  <li className="flex items-center text-gray-600">
                    <svg className="w-5 h-5 text-primary-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Free security assessments
                  </li>
                  <li className="flex items-center text-gray-600">
                    <svg className="w-5 h-5 text-primary-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    No long-term contracts required
                  </li>
                </ul>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-navy-500 mb-6">Get a Free Security Assessment</h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SecurityServices;
