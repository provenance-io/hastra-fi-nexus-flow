import { Button } from '@/components/ui/button';
import { Wallet } from 'lucide-react';
import { useWallet } from '@/contexts/WalletContext';

const WalletConnectionSection = () => {
  const { isConnected, connectWallet } = useWallet();

  const handleConnectWallet = async () => {
    if (!isConnected) {
      await connectWallet();
    } else {
      // Scroll to dashboard section if already connected
      const dashboardSection = document.querySelector('[data-section="wallet-dashboard"]');
      if (dashboardSection) {
        dashboardSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section className="py-24 md:py-32 bg-gradient-to-br from-header-glow/5 via-background to-crypto-accent/5">
      <div className="container">
        <div className="text-center py-20 border-t border-border/20">
          <div className="w-16 h-16 mx-auto rounded-full bg-header-glow/20 flex items-center justify-center mb-8">
            <Wallet className="w-8 h-8 text-header-glow" />
          </div>
          <h3 className="text-2xl md:text-3xl font-bold mb-8">Connect Your Wallet</h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            {isConnected ? 'Wallet connected! View your dashboard above to start trading.' : 'Connect your wallet to start earning with YIELD and sHASH tokens.'}
          </p>
          <Button 
            size="lg" 
            className="bg-orange-900/20 border border-orange-800/30 text-orange-300 hover:bg-orange-900/30 hover:border-orange-800/40 focus-ring font-bold px-8 py-4 text-lg rounded-xl min-w-[200px] group transition-all duration-200"
            onClick={handleConnectWallet}
          >
            {isConnected ? 'View Dashboard' : 'Connect Wallet'}
            <Wallet className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WalletConnectionSection;