import { Link } from 'react-router-dom';
import droneImage from '../assets/dronepic1png.png';

const About = () => {
  const values = [
    {
      title: 'Quality Workmanship',
      description: 'We take pride in every job, ensuring work is done right the first time.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
    },
    {
      title: 'Customer Focus',
      description: 'Your satisfaction is our priority. We listen, communicate, and deliver.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      title: 'Safety First',
      description: 'All work meets or exceeds safety codes and industry standards.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      title: 'Integrity',
      description: 'Honest pricing, clear communication, and no hidden surprises.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
        </svg>
      ),
    },
  ];

  const serviceAreas = [
    'Addis', 'Baker', 'Baton Rouge', 'Carville', 'Denham Springs',
    'Geismar', 'Gonzales', 'Grosse Tete', 'Hammond', 'Jackson',
    'LaPlace', 'Livingston', 'Mandeville', 'New Roads', 'Plaquemines',
    'Ponchatoula', 'Port Allen', 'Port Vincent', 'Prairieville',
    'Slaughter', 'St. Amant', 'St. Francisville', 'St. Gabriel',
    'St. George', 'Sunshine', 'Walker', 'Watson', 'White Castle', 'Zachary',
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0">
          <img
            src={droneImage}
            alt="GSE Integrated facility"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              About GSE Integrated
            </h1>
            <p className="text-xl text-white max-w-3xl mx-auto">
              Your trusted partner for electrical services, security systems, and generator installations in Louisiana.
            </p>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary-500 font-semibold text-sm uppercase tracking-wider">Our Story</span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-navy-500 mb-6">
                Licensed Electrical Contractors Serving Louisiana
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                GSE Integrated is a licensed electrical contractor based in Baton Rouge, Louisiana. We specialize in residential and commercial electrical services, security systems, and generator installations.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Our team of experienced electricians is committed to providing high-quality workmanship and exceptional customer service. Whether you need a simple repair or a complete electrical system installation, we have the expertise to get the job done right.
              </p>
              <p className="text-lg text-gray-600">
                We proudly serve Baton Rouge and surrounding communities throughout Louisiana, bringing professional electrical solutions to homes and businesses across the region.
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                  <div className="text-4xl font-bold text-primary-500 mb-2">29</div>
                  <p className="text-gray-600">Service Areas</p>
                </div>
                <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                  <div className="text-4xl font-bold text-primary-500 mb-2">5.0</div>
                  <p className="text-gray-600">Star Rating</p>
                </div>
                <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                  <div className="text-4xl font-bold text-primary-500 mb-2">24/7</div>
                  <p className="text-gray-600">Emergency Service</p>
                </div>
                <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                  <div className="text-4xl font-bold text-primary-500 mb-2">100%</div>
                  <p className="text-gray-600">Satisfaction</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-primary-500 font-semibold text-sm uppercase tracking-wider">Our Values</span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-navy-500">
              What Sets Us Apart
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 text-center hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6 text-primary-500">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-navy-500 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-primary-500 font-semibold text-sm uppercase tracking-wider">Coverage</span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-navy-500">
              Service Areas
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              We proudly serve communities throughout Louisiana.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {serviceAreas.map((area, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full hover:bg-primary-100 hover:text-primary-600 transition-colors duration-200"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Work With Us?
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Contact us today for a free estimate on your next project.
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
      </section>
    </div>
  );
};

export default About;
