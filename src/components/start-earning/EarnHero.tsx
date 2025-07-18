
import { Button } from '@/components/ui/button';
import { Wallet } from 'lucide-react';
import { useWallet } from '@/contexts/WalletContext';

const EarnHero = () => {
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
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-header-glow/5 to-crypto-accent/5"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiIgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIiBmaWxsPSJub25lIiBzdHJva2U9InJnYmEoMTAsIDIwLCA0MCwwLjA1KSI+PGQgcGF0aD0iTTAtMSAwIDEgTS0xIDAgMSAwIj48L2Q+PC9zdmc+')] opacity-40"></div>
      
      <div className="container relative">
        {/* Hero Content */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center px-4 py-2 rounded-full glass-effect border border-header-glow/20 text-sm font-medium text-foreground/80 mb-6">
            <span className="mr-2 w-2 h-2 bg-header-glow rounded-full animate-pulse"></span>
            Start Earning Immediately
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6">
            <span className="block text-gradient">Earn</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-12">
            Buy YIELD and sHASH tokens on trusted platforms. Start earning from day one with proven strategies.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="text-center mb-12">
          <div className="flex flex-wrap justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-header-glow rounded-full animate-pulse"></div>
              <span>Up to 8% APY with YIELD</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-crypto-accent rounded-full animate-pulse"></div>
              <span>Multiple trusted platforms</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-header-glow rounded-full animate-pulse"></div>
              <span>Instant earning potential</span>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <p className="text-lg text-muted-foreground mb-6">
            {isConnected ? 'Wallet connected! View your dashboard below.' : 'Ready to start earning?'}
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

export default EarnHero;
