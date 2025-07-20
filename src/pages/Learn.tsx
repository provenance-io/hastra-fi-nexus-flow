
import LearnHero from '@/components/start-earning/LearnHero';
import EnhancedGuidesSection from '@/components/start-earning/EnhancedGuidesSection';
import ProvenanceBranding from '@/components/ProvenanceBranding';

const Learn = () => {
  return (
    <div className="relative">
      {/* New muted Hastra gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-hastra-gradient-start/80 via-hastra-gradient-mid/30 to-hastra-gradient-end/10"></div>
      <div className="relative z-10">
        <LearnHero />
        <EnhancedGuidesSection />
        <ProvenanceBranding />
      </div>
    </div>
  );
};

export default Learn;
