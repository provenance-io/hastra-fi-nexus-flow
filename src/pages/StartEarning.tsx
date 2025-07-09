import Footer from '@/components/Footer';
import Header from '@/components/Header';
import AccessibilityFeatures from '@/components/AccessibilityFeatures';
import PerformanceOptimizer from '@/components/PerformanceOptimizer';
import StartEarningHero from '@/components/start-earning/StartEarningHero';
import BuyTokensSection from '@/components/start-earning/BuyTokensSection';
import PlatformsSection from '@/components/start-earning/PlatformsSection';
import GuidesSection from '@/components/start-earning/GuidesSection';

const StartEarning = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <AccessibilityFeatures />
      <PerformanceOptimizer />
      <Header />
      <main id="main-content" className="flex-grow" role="main">
        <StartEarningHero />
        <BuyTokensSection />
        <PlatformsSection />
        <GuidesSection />
      </main>
      <Footer />
    </div>
  );
};

export default StartEarning;