
import EarnHero from '@/components/start-earning/EarnHero';
import BuyEarnSection from '@/components/start-earning/BuyEarnSection';
import WalletConnectionSection from '@/components/start-earning/WalletConnectionSection';
import EnhancedWalletConnection from '@/components/wallet/EnhancedWalletConnection';
import ProvenanceBranding from '@/components/ProvenanceBranding';
import { useWallet } from '@/contexts/WalletContext';

const Earn = () => {
  const { isConnected } = useWallet();

  return (
    <div className="relative">
      {/* New muted Hastra gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-hastra-gradient-start/80 via-hastra-gradient-mid/30 to-hastra-gradient-end/10"></div>
      <div className="relative z-10">
        {!isConnected && <EarnHero />}
        {isConnected && (
          <section className="py-12 md:py-16" data-section="wallet-dashboard">
            <div className="container">
              <EnhancedWalletConnection />
            </div>
          </section>
        )}
        {!isConnected && <BuyEarnSection />}
        {!isConnected && <WalletConnectionSection />}
        <ProvenanceBranding />
      </div>
    </div>
  );
};

export default Earn;
