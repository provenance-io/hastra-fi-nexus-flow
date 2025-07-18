
import EarnHero from '@/components/start-earning/EarnHero';
import BuyEarnSection from '@/components/start-earning/BuyEarnSection';
import EnhancedWalletConnection from '@/components/wallet/EnhancedWalletConnection';

const Earn = () => {
  return (
    <div className="relative">
      {/* Extended gradient background to match homepage */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-header-glow/5 to-crypto-accent/5"></div>
      <div className="relative z-10">
        <EarnHero />
        <section className="py-24 md:py-32" data-section="wallet-dashboard">
          <div className="container">
            <EnhancedWalletConnection />
          </div>
        </section>
        <BuyEarnSection />
      </div>
    </div>
  );
};

export default Earn;
