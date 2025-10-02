import WyldsHero from "../components/wylds/WyldsHero";
import WyldsYieldExplanation from "../components/wylds/WyldsYieldExplanation";
import WyldsAbout from "../components/wylds/WyldsAbout";
import WyldsStatsDashboard from "../components/wylds/WyldsStatsDashboard";
import WyldsResources from "../components/wylds/WyldsResources";
import WyldsFAQ from "../components/wylds/WyldsFAQ";
import WyldsTypeformEmbed from "../components/wylds/WyldsTypeformEmbed";
import ProvenanceBranding from "../components/ProvenanceBranding";

const WyldsPage = () => {
  return (
    <div className="relative">
      {/* Extended gradient background to match homepage */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-header-glow/5 to-crypto-accent/5"></div>
      <div className="relative z-10">
        <WyldsHero />
        <WyldsYieldExplanation />
        <WyldsFAQ />
        <WyldsTypeformEmbed />
        <WyldsResources />
        <ProvenanceBranding />
      </div>
    </div>
  );
};

export default WyldsPage;
