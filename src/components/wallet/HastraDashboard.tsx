
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
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  if (!isConnected) {
    return null;
  }

  return (
    <div className="w-full">
      {/* Polished dashboard container with rounded corners and subtle background */}
      <div className="glass-premium rounded-2xl border border-border/20 overflow-hidden">
        <div className="container mx-auto px-6 py-8 max-w-7xl">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-hastra-gradient mb-2">
              Earnings Dashboard
            </h1>
            <p className="text-muted-foreground">
              Your decentralized finance command center
            </p>
          </div>

          {/* Portfolio Overview Section */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-foreground">
              Portfolio Overview
            </h2>
            
            <WalletOverview />
          </div>

          {/* Quick Start Section */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-foreground">
              Quick Start
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <ActionCard
                title="Buy & Send"
                description="Purchase tokens and transfer to other wallets"
                icon={<PlusCircle className="w-6 h-6" />}
                action={() => scrollToSection('buy-send-section')}
                variant="primary"
              />
              
              <ActionCard
                title="Trade & Lend"
                description="Access trading platforms and lending opportunities"
                icon={<ArrowLeftRight className="w-6 h-6" />}
                action={() => scrollToSection('trade-lend-section')}
                variant="secondary"
              />
            </div>
          </div>

          {/* Buy and Send Interfaces */}
          <div id="buy-send-section" className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-foreground">
              Buy & Send
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <BuyCard />
              <SendCard />
            </div>
          </div>

          {/* Trading Platforms Section */}
          <div id="trade-lend-section" className="mb-8">
            <TradingPlatformsSection />
          </div>

          {/* Additional Info */}
          <div className="text-center text-muted-foreground">
            <p className="text-sm">
              Always verify transactions before confirming
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HastraDashboard;
