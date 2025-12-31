import { Link } from 'react-router-dom';
import ContactForm from '../components/ContactForm';

const ElectricalServices = () => {
  const services = [
    {
      title: 'Troubleshooting & Repairs',
      description: 'Expert diagnosis and repair of electrical issues to keep your home or business running safely.',
    },
    {
      title: 'Panel Upgrades',
      description: 'Upgrade your electrical panel to handle modern power demands and improve safety.',
    },
    {
      title: 'Circuit Extensions',
      description: 'Add new circuits to accommodate additional appliances, equipment, or room additions.',
    },
    {
      title: 'Load Balancing',
      description: 'Optimize your electrical system to distribute power evenly and prevent overloads.',
    },
    {
      title: 'Lighting Design',
      description: 'Custom lighting solutions to enhance your space, including LED upgrades and smart lighting.',
    },
    {
      title: 'EV Charger Installation',
      description: 'Professional installation of electric vehicle charging stations for home and business.',
    },
    {
      title: 'TV & Ceiling Fan Installation',
      description: 'Expert mounting and wiring for televisions, ceiling fans, and other fixtures.',
    },
    {
      title: 'Whole-Home Safety Inspections',
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
              Complete residential and commercial electrical solutions from our licensed professionals in Baton Rouge and surrounding areas.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-navy-500 mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commercial Solutions */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary-500 font-semibold text-sm uppercase tracking-wider">Commercial</span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-navy-500 mb-6">
                Commercial Electrical Solutions
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                We provide comprehensive electrical services for businesses of all sizes, ensuring your commercial space operates efficiently and safely.
              </p>
              <ul className="space-y-4">
                {['Data/Network Cabling', 'LED Lighting Conversions', 'Smart Office Components', 'Security Systems'].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <svg className="w-6 h-6 text-primary-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
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
