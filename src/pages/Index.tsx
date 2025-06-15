
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import InnovationFocus from '@/components/InnovationFocus';
import Products from '@/components/Products';
import InnovationApproach from '@/components/InnovationApproach';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <Hero />
        <InnovationFocus />
        <Products />
        <InnovationApproach />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
