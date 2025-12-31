import ServiceCard from './ServiceCard';

const Services = () => {
  const services = [
    {
      title: 'Electrical Services',
      description: 'Complete residential and commercial electrical solutions from our licensed professionals.',
      link: '/electrical-services',
      features: [
        'Troubleshooting & Repairs',
        'Panel Upgrades',
        'Lighting Design',
        'EV Charger Installation',
      ],
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      title: 'New Construction',
      description: 'Expert electrical installation for new residential and commercial construction projects.',
      link: '/new-construction',
      features: [
        'Complete Wiring Systems',
        'Code Compliance',
        'Smart Home Integration',
        'Commercial Build-Outs',
      ],
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
    },
    {
      title: 'Home Security',
      description: 'Protect your home and business with our comprehensive security solutions.',
      link: '/security-services',
      features: [
        'Burglar Alarms',
        'CCTV Surveillance',
        'Access Control',
        'Remote Monitoring',
      ],
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      title: 'Generator Services',
      description: 'Keep your power on during outages with professional generator installation and service.',
      link: '/generator-services',
      features: [
        'Whole-Home Generators',
        'Installation & Setup',
        'Maintenance Plans',
        'Emergency Repairs',
      ],
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-primary-500 font-semibold text-sm uppercase tracking-wider">Our Services</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-navy-500">
            Comprehensive Electrical Solutions
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            From residential repairs to commercial installations, we provide complete electrical services for all your needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
