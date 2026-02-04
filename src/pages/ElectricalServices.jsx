import ContactForm from '../components/ContactForm';
import meandmaImg from '../assets/MEANDMA.jpg';
import eavelightsImg from '../assets/eavelights.jpg';

const ElectricalServices = () => {
  const services = [
    {
      title: 'Electrical Troubleshooting & Repairs',
      description: 'Expert diagnosis and repair of electrical issues to keep your home or business running safely.',
    },
    {
      title: 'Panel Upgrades, Circuit Extensions & Load Balancing',
      description: 'Upgrade your electrical panel, add new circuits, and optimize power distribution to meet modern demands.',
    },
    {
      title: 'Lighting Design & Retrofits',
      description: 'Chandeliers, recessed cans, landscaping lighting, LED retrofits, and fixture replacement to enhance your space.',
    },
    {
      title: 'EV Charger Installation',
      description: 'Professional installation of electric vehicle charging stations for homes and businesses.',
    },
    {
      title: 'TV & Ceiling Fan Installation',
      description: 'Expert mounting and wiring for televisions, ceiling fans, and other fixtures.',
    },
    {
      title: 'Whole-Home Electrical Safety Inspections',
      description: 'Comprehensive electrical inspections to identify potential hazards and ensure code compliance.',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-navy-500 to-navy-700 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Electrical Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              At GSE Integrated, our Service Department is your go-to for everyday support, repairs, upgrades, and emergency work across your home, business, or facility.
            </p>
          </div>
        </div>
      </section>

      {/* Image Placeholder Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <img src={meandmaImg} alt="Service professional meeting with customer" className="rounded-xl h-64 w-full object-cover" />
            <img src={eavelightsImg} alt="Home with beautiful eave lighting at night" className="rounded-xl h-64 w-full object-cover" />
          </div>
        </div>
      </section>

      {/* Service Promise */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-lg text-gray-700 leading-relaxed">
            Our office staff will schedule at your convenience, we will keep you updated every step of the way, and we provide up front pricing on callout charges. Our electricians keep job sites clean, wiring is run neatly, and we will walk you through what was done and why. Every service job is inspected and double checked; we won't leave until everything is safe, functioning, and up to code.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy-500">Our Services Include:</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300 text-center"
              >
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <svg className="w-6 h-6 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-navy-500 mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
          {/* And more CTA */}
          <div className="mt-12 text-center">
            <p className="text-xl text-gray-700 mb-4">...and more!</p>
            <a
              href="tel:2255290330"
              className="inline-flex items-center px-8 py-4 bg-primary-500 text-white font-semibold rounded-lg hover:bg-primary-600 transition-all duration-200 shadow-lg"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Give Us a Call: (225) 529-0330
            </a>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-navy-500 mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Whether it's a quick repair or a major upgrade, our team is here to help. Request a quote and we'll get back to you promptly.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-primary-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Convenient scheduling</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-primary-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Up front pricing</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-primary-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Clean, professional work</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-navy-500 mb-6">Request a Quote</h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ElectricalServices;
