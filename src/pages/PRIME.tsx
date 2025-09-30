import PRIMEHero from "@/components/prime/PRIMEHero";
import PRIMEYieldExplanation from "@/components/prime/PRIMEYieldExplanation";
import PRIMEAbout from "@/components/prime/PRIMEAbout";
import PRIMEStatsDashboard from "@/components/prime/PRIMEStatsDashboard";
import PRIMEResources from "@/components/prime/PRIMEResources";
import PRIMEFAQ from "@/components/prime/PRIMEFAQ";
import PRIMETypeformEmbed from "@/components/prime/PRIMETypeformEmbed";
import ProvenanceBranding from "@/components/ProvenanceBranding";

const PRIMEPage = () => {
  return (
    <div className="relative">
      {/* Extended gradient background to match homepage */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-header-glow/5 to-crypto-accent/5"></div>
      <div className="relative z-10">
        <PRIMEHero />
        <PRIMEYieldExplanation />
        <PRIMEFAQ />
        <PRIMETypeformEmbed />
        <PRIMEResources />
        <ProvenanceBranding />
      </div>
    </div>
  );
};

export default PRIMEPage;
