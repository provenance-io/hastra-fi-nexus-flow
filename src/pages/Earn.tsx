
import EarnHero from '@/components/start-earning/EarnHero';
import BuyEarnSection from '@/components/start-earning/BuyEarnSection';
import WalletConnectionSection from '@/components/start-earning/WalletConnectionSection';
import EnhancedWalletConnection from '@/components/wallet/EnhancedWalletConnection';
import { useWallet } from '@/contexts/WalletContext';

const Earn = () => {
  const { isConnected } = useWallet();

  return (
    <div className="relative">
      <div className="relative z-10">
        {!isConnected && <EarnHero />}
        <section className={`${isConnected ? 'py-12 md:py-16' : 'py-24 md:py-32'}`} data-section="wallet-dashboard">
          <div className="container">
            <EnhancedWalletConnection />
          </div>
        </section>
        {!isConnected && <BuyEarnSection />}
        {!isConnected && <WalletConnectionSection />}
      </div>
    </div>
  );
};

export default Earn;
