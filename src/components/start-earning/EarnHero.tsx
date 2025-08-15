import { Button } from '@/components/ui/button';
import { Wallet } from 'lucide-react';
import { useWallet } from '@/contexts/WalletContext';
const EarnHero = () => {
  const {
    isConnected,
    connectWallet
  } = useWallet();
  const handleConnectWallet = async () => {
    if (!isConnected) {
      await connectWallet();
    } else {
      // Scroll to dashboard section if already connected
      const dashboardSection = document.querySelector('[data-section="wallet-dashboard"]');
      if (dashboardSection) {
        dashboardSection.scrollIntoView({
          behavior: 'smooth'
        });
      }
    }
  };
  return <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Removed background effects to allow parent gradient to show through */}
      
      <div className="container relative">
        {/* Hero Content */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-8">
            <span className="block">
              <span className="text-gradient">Start Earning</span>{' '}
              <span className="text-white">
                Immediately
              </span>
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-platinum/80 max-w-4xl mx-auto leading-relaxed mb-16" style={{
          textShadow: '0 0 10px rgba(255, 255, 255, 0.3), 0 0 20px rgba(255, 255, 255, 0.1)'
        }}>Buy wYLDS on Hastra. Start earning from day one with proven strategies backed by real-world assets.</p>
        </div>


        {/* Enhanced CTA Section */}
        <div className="text-center">
          <p className="text-lg text-platinum/70 mb-8" style={{
          textShadow: '0 0 10px rgba(255, 255, 255, 0.2)'
        }}>
            {isConnected ? 'Wallet connected! View your dashboard below.' : 'Ready to start earning with premium DeFi products?'}
          </p>
          <Button size="lg" variant="secondary" className="transition-all duration-300" onClick={handleConnectWallet}>
            {isConnected ? 'View Dashboard' : 'Connect Wallet'}
            <Wallet className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform" />
          </Button>
        </div>
      </div>
    </section>;
};
export default EarnHero;