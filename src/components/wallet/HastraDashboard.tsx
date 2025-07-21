
import { useWallet } from '@/contexts/WalletContext';
import WalletOverview from './WalletOverview';
import ActionCard from './ActionCard';
import BuyCard from './BuyCard';
import SendCard from './SendCard';
import TradingPlatformsSection from '../start-earning/TradingPlatformsSection';
import { 
  PlusCircle, 
  ArrowLeftRight
} from 'lucide-react';

const HastraDashboard = () => {
  const { isConnected } = useWallet();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const elementPosition = element.offsetTop;
      const offsetPosition = elementPosition - 100; // Offset to keep title visible
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  if (!isConnected) {
    return null;
  }

  return (
    <div className="w-full">
      {/* Header */}
      <div className="mb-6 md:mb-8 text-center">
        <p className="text-xl md:text-2xl text-foreground/90 max-w-4xl mx-auto leading-relaxed" style={{ textShadow: '0 0 10px rgba(255, 255, 255, 0.3), 0 0 20px rgba(255, 255, 255, 0.1)' }}>
          Your decentralized finance command center
        </p>
      </div>

      {/* Portfolio Overview Section */}
      <div className="mb-8 md:mb-12 relative">
        <WalletOverview />
        <h2 className="absolute top-4 left-6 text-lg md:text-xl font-semibold text-foreground z-10">
          Portfolio Overview
        </h2>
      </div>


      {/* Buy and Send Interfaces */}
      <div id="buy-send-section" className="mb-8 md:mb-12">
        <div className="card-gradient rounded-3xl border border-border/30 shadow-lg p-6 md:p-12">
          <h2 className="text-lg md:text-xl font-semibold text-foreground mb-6 md:mb-8">
            Buy & Send
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            <BuyCard />
            <SendCard />
          </div>
        </div>
      </div>

      {/* Trading Platforms Section */}
      <div id="trade-lend-section" className="mb-8 md:mb-12">
        <div className="card-gradient rounded-3xl border border-border/30 shadow-lg p-6 md:p-12">
          <TradingPlatformsSection />
        </div>
      </div>

      {/* Additional Info */}
      <div className="text-center text-muted-foreground">
        <p className="text-sm">
          Always verify transactions before confirming
        </p>
      </div>
    </div>
  );
};

export default HastraDashboard;
