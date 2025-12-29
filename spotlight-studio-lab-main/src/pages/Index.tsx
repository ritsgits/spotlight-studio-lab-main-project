import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ClientsMarquee from '@/components/ClientsMarquee';
import Services from '@/components/Services';
import Results from '@/components/Results';
import Portfolio from '@/components/Portfolio';
import Testimonials from '@/components/Testimonials';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <Hero />
      <ClientsMarquee />
      <Services />
      {/* <Results /> */}
      <Portfolio />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
};

export default Index;
