
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
      {/* Removed background effects to allow parent gradient to show through */}
      
      <div className="container relative">
        {/* Hero Content */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-8">
            <span className="block" style={{ 
              background: 'linear-gradient(135deg, hsl(var(--platinum)), hsl(var(--muted-foreground)))', 
              WebkitBackgroundClip: 'text', 
              WebkitTextFillColor: 'transparent',
              textShadow: '0 0 30px rgba(229, 218, 194, 0.4)'
            }}>
              Earn
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-platinum/80 max-w-4xl mx-auto leading-relaxed mb-16" 
             style={{ textShadow: '0 0 10px rgba(255, 255, 255, 0.3), 0 0 20px rgba(255, 255, 255, 0.1)' }}>
            Buy YIELD and sHASH tokens on trusted platforms. Start earning from day one with proven strategies backed by real-world assets.
          </p>
        </div>

        {/* Enhanced Quick Stats */}
        <div className="text-center mb-16">
          <div className="flex flex-wrap justify-center gap-8 text-sm">
            <div className="flex items-center gap-3 px-4 py-2 rounded-xl card-gradient border border-white/10">
              <div className="w-2 h-2 bg-platinum rounded-full animate-pulse" 
                   style={{ boxShadow: '0 0 8px hsl(var(--platinum))' }}></div>
              <span className="text-platinum/90 font-medium">Up to 8% APY with YIELD</span>
            </div>
            <div className="flex items-center gap-3 px-4 py-2 rounded-xl card-gradient border border-white/10">
              <div className="w-2 h-2 bg-platinum rounded-full animate-pulse" 
                   style={{ boxShadow: '0 0 8px hsl(var(--platinum))' }}></div>
              <span className="text-platinum/90 font-medium">Multiple trusted platforms</span>
            </div>
            <div className="flex items-center gap-3 px-4 py-2 rounded-xl card-gradient border border-white/10">
              <div className="w-2 h-2 bg-platinum rounded-full animate-pulse" 
                   style={{ boxShadow: '0 0 8px hsl(var(--platinum))' }}></div>
              <span className="text-platinum/90 font-medium">Instant earning potential</span>
            </div>
          </div>
        </div>

        {/* Enhanced CTA Section */}
        <div className="text-center">
          <p className="text-lg text-platinum/70 mb-8" style={{ textShadow: '0 0 10px rgba(255, 255, 255, 0.2)' }}>
            {isConnected ? 'Wallet connected! View your dashboard below.' : 'Ready to start earning with premium DeFi products?'}
          </p>
          <Button 
            size="lg" 
            className="bg-platinum/10 border border-platinum/20 text-platinum hover:bg-platinum/20 hover:border-platinum/30 focus-ring font-bold px-8 py-4 text-lg rounded-xl min-w-[200px] group transition-all duration-300"
            style={{
              boxShadow: '0 0 20px rgba(229, 218, 194, 0.3), 0 0 40px rgba(229, 218, 194, 0.1)',
              backdropFilter: 'blur(10px)'
            }}
            onClick={handleConnectWallet}
          >
            {isConnected ? 'View Dashboard' : 'Connect Wallet'}
            <Wallet className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default EarnHero;
