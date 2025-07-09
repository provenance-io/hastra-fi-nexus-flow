
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import InnovationFocus from '@/components/InnovationFocus';
import Products from '@/components/Products';
import InnovationApproach from '@/components/InnovationApproach';
import Footer from '@/components/Footer';
import AccessibilityFeatures from '@/components/AccessibilityFeatures';
import PerformanceOptimizer from '@/components/PerformanceOptimizer';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <AccessibilityFeatures />
      <PerformanceOptimizer />
      <Header />
      <main id="main-content" className="flex-grow" role="main">
        <div className="section-white">
          <Hero />
        </div>
        <div className="section-accent-light">
          <InnovationFocus />
        </div>
        <div className="section-white">
          <Products />
        </div>
        <div className="section-accent-subtle">
          <InnovationApproach />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
