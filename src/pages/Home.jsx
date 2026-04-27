import Hero from '../components/Hero';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';
import SEO from '../components/SEO';

const Home = () => {
  return (
    <div>
      <SEO
        title="GSE Integrated | Electrician & Security Services in Baton Rouge, LA"
        description="Licensed electricians serving Baton Rouge and surrounding parishes since 2009. Electrical, security systems, generators, and new construction. Call (225) 615-8131."
        path="/"
      />
      <Hero />
      <Services />
      <CTA />
      <Testimonials />
    </div>
  );
};

export default Home;
