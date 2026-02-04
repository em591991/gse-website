import { Link } from 'react-router-dom';
import droneImage from '../assets/dronepic1png.png';

const About = () => {
  const coreValues = [
    {
      title: 'White-Glove Experience',
      description: 'Everyone will be treated with the utmost respect. Our goal is to give an exceptional customer service experience from the initial phone call through project completion. As the experts, we want to ensure you have peace of mind \u2013 we will take the stress so you don\u2019t have to.',
    },
    {
      title: 'Absolute Integrity',
      description: 'Everyone at GSE Integrated will conduct themselves with integrity, with no exceptions. We will communicate open and honestly, we will do the right thing when no one is looking, and we will always follow through on our commitments.',
    },
    {
      title: 'Thrive with the Hive',
      description: 'Given the wide range of electrical projects we take on, teamwork in our company is imperative. Everyone at GSE is available to help one another. You may meet one technician at your home, but there is always a line of other employees ready to assist them in bringing your project to completion.',
    },
    {
      title: 'Evolve or Dissolve',
      description: 'We always stay on the forefront of new technologies our industry presents. Whether it is smart-home technology, generators that we can monitor remotely to know about issues before you do, or simply improving our craftsmanship, we aim to stay on the cutting edge. All of our technicians undergo regular training and complete coursework needed to maintain licensing.',
    },
    {
      title: 'Relentless',
      description: 'Simply put, we will work hard to achieve your vision. We will overcome any obstacles during a job, and we will not accept failure. We take pride in finding a solution where it may seem one is not always possible.',
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
                Founded in 2009, we are a locally owned business serving as your one-stop shop for all electrical needs. With 30 dedicated employees, we are prepared to assist with any residential electrical or low voltage problem, standby generators, remodels, or new construction. Our technicians have over 215 years of combined electrical experience, so we are confident we can deliver an exceptional finished product regardless of the scope of your project. Explore our website to see some of the specifics on what we can offer!
              </p>
              <p className="text-lg text-gray-600">
                If you'd like to know more about the people you'll interact with at GSE Integrated, we'd love to introduce you to our core values. These are attributes we keep in mind every day when interacting with our customers, and we hold all of our employees to the highest standard in exhibiting them.
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

      {/* Core Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-primary-500 font-semibold text-sm uppercase tracking-wider">Our Values</span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-navy-500">
              Our Core Values
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreValues.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 hover:shadow-lg transition-shadow duration-300"
              >
                <h3 className="text-xl font-bold text-navy-500 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Outreach */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-primary-500 font-semibold text-sm uppercase tracking-wider">Giving Back</span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-navy-500">
              Community Outreach
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              GSE Integrated is committed to engaging with our neighbors and finding ways to give back. As a local company based out of Baton Rouge, we pride ourselves on being an active part of our community.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-navy-500 mb-4">St. Jude Dream Home Giveaway</h3>
              <p className="text-lg text-gray-600 mb-6">
                We are proud to be an ongoing part of the local St. Jude Dream Home Giveaway, which raises over $1,000,000 annually to support St. Jude Children's Research Hospital in their goal to end childhood cancer.
              </p>
              {/* TODO: Add picture of the completed home(s) and other proof of involvement */}
              <div className="bg-gray-200 rounded-lg h-48 flex items-center justify-center text-gray-500">
                <p className="text-center px-4">Photo of completed St. Jude Dream Home coming soon</p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-navy-500 mb-4">Adopt-A-Charger Program</h3>
              <p className="text-lg text-gray-600">
                GSE Integrated is also committed to helping Louisiana improve its infrastructure and decrease its carbon footprint by embracing electrical vehicle initiatives. We are partnered with the state-funded Adopt-A-Charger program which provides EV chargers around Louisiana in various public areas, available for use free of charge.
              </p>
            </div>
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
