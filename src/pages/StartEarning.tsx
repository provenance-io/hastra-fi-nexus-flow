import SimplifiedStartEarningHero from '@/components/start-earning/SimplifiedStartEarningHero';
import EnhancedGuidesSection from '@/components/start-earning/EnhancedGuidesSection';
import BuyEarnSection from '@/components/start-earning/BuyEarnSection';

const StartEarning = () => {
  return (
    <div className="relative">
      {/* Extended gradient background to match homepage */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-header-glow/5 to-crypto-accent/5"></div>
      <div className="relative z-10">
        <SimplifiedStartEarningHero />
        <EnhancedGuidesSection />
        <BuyEarnSection />
      </div>
    </div>
  );
};

export default StartEarning;