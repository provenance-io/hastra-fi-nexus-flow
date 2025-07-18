
import EarnHero from '@/components/start-earning/EarnHero';
import BuyEarnSection from '@/components/start-earning/BuyEarnSection';
import WalletConnectionSection from '@/components/start-earning/WalletConnectionSection';
import EnhancedWalletConnection from '@/components/wallet/EnhancedWalletConnection';
import { useWallet } from '@/contexts/WalletContext';

const Earn = () => {
  const { isConnected } = useWallet();

  return (
    <div className="relative overflow-hidden">
      {/* Enhanced background with multiple layers matching homepage hero */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-header-glow/5 to-crypto-accent/5"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiIgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIiBmaWxsPSJub25lIiBzdHJva2U9InJnYmEoMTAsIDIwLCA0MCwwLjA1KSI+PGQgcGF0aD0iTTAtMSAwIDEgTS0xIDAgMSAwIj48L2Q+PC9zdmc+')] opacity-40"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-background/80"></div>
      
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
