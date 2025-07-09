
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
