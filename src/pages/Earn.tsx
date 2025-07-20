
import EarnHero from '@/components/start-earning/EarnHero';
import BuyEarnSection from '@/components/start-earning/BuyEarnSection';
import WalletConnectionSection from '@/components/start-earning/WalletConnectionSection';
import EnhancedWalletConnection from '@/components/wallet/EnhancedWalletConnection';
import { useWallet } from '@/contexts/WalletContext';

const Earn = () => {
  const { isConnected } = useWallet();

  return (
    <div className="relative min-h-screen">
      {/* Consistent gradient background matching other pages */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-background/90"></div>
      <div className="absolute inset-0" style={{
        background: 'linear-gradient(to bottom right, rgba(229, 218, 194, 0.05) 0%, transparent 30%), linear-gradient(to top right, rgba(229, 218, 194, 0.08) 0%, transparent 50%)'
      }}></div>
      <div className="absolute inset-0" style={{
        background: 'radial-gradient(ellipse at top, rgba(229, 218, 194, 0.12) 0%, transparent 50%), radial-gradient(ellipse at bottom, rgba(229, 218, 194, 0.08) 0%, transparent 50%)'
      }}></div>
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
      </div>
    </div>
  );
};

export default Earn;
