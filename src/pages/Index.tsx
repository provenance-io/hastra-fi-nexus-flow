
import Header from '@/components/Header';
import Hero from '@/components/Hero';

import Products from '@/components/Products';
import InnovationApproach from '@/components/InnovationApproach';
import Footer from '@/components/Footer';
import AccessibilityFeatures from '@/components/AccessibilityFeatures';
import PerformanceOptimizer from '@/components/PerformanceOptimizer';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen relative">
      {/* Extended gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-header-glow/5 to-crypto-accent/5"></div>
      <div className="relative z-10 flex flex-col min-h-screen">
        <AccessibilityFeatures />
        <PerformanceOptimizer />
        <Header />
        <main id="main-content" className="flex-grow" role="main">
          <Hero />
          <Products />
          <InnovationApproach />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Index;
