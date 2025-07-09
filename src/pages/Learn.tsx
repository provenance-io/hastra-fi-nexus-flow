import LearnHero from '@/components/start-earning/LearnHero';
import EnhancedGuidesSection from '@/components/start-earning/EnhancedGuidesSection';

const Learn = () => {
  return (
    <div className="relative">
      {/* Extended gradient background to match homepage */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-header-glow/5 to-crypto-accent/5"></div>
      <div className="relative z-10">
        <LearnHero />
        <EnhancedGuidesSection />
      </div>
    </div>
  );
};

export default Learn;