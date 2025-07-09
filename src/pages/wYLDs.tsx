
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import WYLDsHero from '@/components/wylds/WYLDsHero';
import WYLDsAbout from '@/components/wylds/WYLDsAbout';
import WYLDsStatsDashboard from '@/components/wylds/WYLDsStatsDashboard';
import WYLDsResources from '@/components/wylds/WYLDsResources';
import AccessibilityFeatures from '@/components/AccessibilityFeatures';
import PerformanceOptimizer from '@/components/PerformanceOptimizer';

const WYLDsPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <AccessibilityFeatures />
      <PerformanceOptimizer />
      <Header />
      <main id="main-content" className="flex-grow" role="main">
        <WYLDsHero />
        <WYLDsAbout />
        <WYLDsStatsDashboard />
        <WYLDsResources />
      </main>
      <Footer />
    </div>
  );
};

export default WYLDsPage;
