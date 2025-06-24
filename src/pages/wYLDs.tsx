
import Footer from '@/components/Footer';
import WYLDsHeader from '@/components/wylds/WYLDsHeader';
import WYLDsHero from '@/components/wylds/WYLDsHero';
import WYLDsAbout from '@/components/wylds/WYLDsAbout';
import WYLDsStatsDashboard from '@/components/wylds/WYLDsStatsDashboard';
import WYLDsResources from '@/components/wylds/WYLDsResources';

const WYLDsPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <WYLDsHeader />
      <main className="flex-grow">
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
