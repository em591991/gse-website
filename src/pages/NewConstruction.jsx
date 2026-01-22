import ConstructionContactForm from '../components/ConstructionContactForm';
import scaleImage from '../assets/scale.jpg';
import hallImage from '../assets/Hall Mast and Powder.JPG';
import scoutguideImage from '../assets/scoutguide.jpg';
import slabImage from '../assets/slab.jpg';
import livingRoomImage from '../assets/living room.jpg';

const NewConstruction = () => {
  const services = [
    {
      title: 'Full Custom Electrical System Design & Buildout',
      description: 'Complete electrical infrastructure tailored to your specific needs and vision.',
      image: scaleImage,
      alt: 'Construction blueprints and planning',
    },
    {
      title: 'Coordination with Other Trades',
      description: 'Seamless coordination with HVAC, plumbing, and other contractors for smooth project execution.',
      image: slabImage,
      alt: 'Foundation slab work',
    },
    {
      title: 'Internal Quality Control Checks',
      description: 'On-site QC at every step — we catch issues before the inspectors do and keep your build running smoothly!',
      image: scoutguideImage,
      alt: 'Quality control inspection',
    },
    {
      title: 'In-House Low Voltage & Generator Installation',
      description: 'Complete integration of low voltage systems and backup power solutions.',
      image: hallImage,
      alt: 'Electrical installation work',
    },
    {
      title: 'Warranty & Follow-Up Support',
      description: 'We don\'t disappear after project turnover — we stay available for tweaks, additions, and long-term service.',
      image: livingRoomImage,
      alt: 'Finished living room',
    },
  ];

  const pecBenefits = [
    'Review your blueprint drawings together',
    'Ask detailed questions, make adjustments, and get your input on how the final layout should look',
    'Position switches, outlets, lighting, and special features exactly where you want them',
    'Help you incorporate custom touches — from accent lighting and smart switches to niche features you may not even have thought of',
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src={scoutguideImage}
            alt="Construction site"
            className="w-full h-full object-cover object-center"
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Construction
            </h1>
            <p className="text-xl text-white max-w-3xl mx-auto">
              For architects, builders, and developers, our Construction Department brings an unmatched level of customization with precision and foresight.
            </p>
          </div>
        </div>
      </section>

      {/* Services with Photos */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-primary-500 font-semibold text-sm uppercase tracking-wider">Our Services</span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-navy-500">
              What We Offer
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  src={service.image}
                  alt={service.alt}
                  className="w-full h-40 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-lg font-bold text-navy-500 mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* From Blueprint to Brilliance - PEC Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-primary-500 font-bold text-xl italic mb-4">"From blueprint to brilliance"</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-navy-500">
                Pre Electrical Consultations (PECs)
              </h2>
            </div>

            <p className="text-lg text-gray-700 mb-8 text-center">
              At GSE Integrated, before a single wire is pulled, we begin custom home builds with our signature Pre Electrical Consultations (PECs) — a dedicated design session with our customer and builder. In this meeting we:
            </p>

            <div className="bg-gray-50 rounded-xl p-8 mb-8">
              <ul className="space-y-4">
                {pecBenefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="w-6 h-6 text-primary-500 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-primary-50 border-l-4 border-primary-500 p-6 rounded-r-xl">
              <h3 className="text-xl font-bold text-navy-500 mb-3">Why is this so powerful?</h3>
              <p className="text-gray-700 mb-4">
                No one in our industry offers this level of upfront collaboration. That means fewer surprises, smoother construction, and a result that feels uniquely yours.
              </p>
              <p className="text-gray-700 font-medium">
                With GSE Integrated, you don't just get efficient electrical construction — you get a partner dedicated to bringing your vision to life.
              </p>
            </div>
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
              <h3 className="text-xl font-bold text-navy-500 mb-6">Submit Plans for Bid</h3>
              <ConstructionContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewConstruction;
