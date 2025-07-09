import Footer from '@/components/Footer';
import Header from '@/components/Header';
import HOMESHero from '@/components/homes/HOMESHero';
import HOMESAbout from '@/components/homes/HOMESAbout';
import HOMESPortfolio from '@/components/homes/HOMESPortfolio';
import HOMESPoolComposition from '@/components/homes/HOMESPoolComposition';
import HOMESFAQ from '@/components/homes/HOMESFAQ';
import AccessibilityFeatures from '@/components/AccessibilityFeatures';
import PerformanceOptimizer from '@/components/PerformanceOptimizer';

const HOMESPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <AccessibilityFeatures />
      <PerformanceOptimizer />
      <Header />
      <main id="main-content" className="flex-grow" role="main">
        <HOMESHero />
        <HOMESAbout />
        <HOMESPortfolio />
        <HOMESPoolComposition />
        <HOMESFAQ />
      </main>
      <Footer />
    </div>
  );
};

export default HOMESPage;