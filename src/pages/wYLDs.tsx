
import WYLDsHero from '@/components/wylds/WYLDsHero';
import WYLDsAbout from '@/components/wylds/WYLDsAbout';
import WYLDsStatsDashboard from '@/components/wylds/WYLDsStatsDashboard';
import WYLDsResources from '@/components/wylds/WYLDsResources';

const WYLDsPage = () => {
  return (
    <div className="relative">
      {/* Extended gradient background to match homepage */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-header-glow/5 to-crypto-accent/5"></div>
      <div className="relative z-10">
        <WYLDsHero />
        <WYLDsAbout />
        <WYLDsStatsDashboard />
        <WYLDsResources />
      </div>
    </div>
  );
};

export default WYLDsPage;
