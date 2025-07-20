
import WYLDsHero from '@/components/wylds/WYLDsHero';
import WYLDsYieldExplanation from '@/components/wylds/WYLDsYieldExplanation';
import WYLDsAbout from '@/components/wylds/WYLDsAbout';
import WYLDsStatsDashboard from '@/components/wylds/WYLDsStatsDashboard';
import WYLDsResources from '@/components/wylds/WYLDsResources';
import WYLDsFAQ from '@/components/wylds/WYLDsFAQ';
import WYLDsTypeformEmbed from '@/components/wylds/WYLDsTypeformEmbed';
import SolanaAvailableBanner from '@/components/wylds/SolanaAvailableBanner';
import ProvenanceBranding from '@/components/ProvenanceBranding';

const WYLDsPage = () => {
  return (
    <div className="relative">
      {/* New muted Hastra gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-hastra-gradient-start/80 via-hastra-gradient-mid/30 to-hastra-gradient-end/10"></div>
      <div className="relative z-10 space-y-16">
        <WYLDsHero />
        
        <WYLDsYieldExplanation />
        <WYLDsStatsDashboard />
        <WYLDsFAQ />
        <WYLDsTypeformEmbed />
        <WYLDsResources />
        <ProvenanceBranding />
      </div>
    </div>
  );
};

export default WYLDsPage;
