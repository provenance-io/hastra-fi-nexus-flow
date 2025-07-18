
import { useWallet } from '@/contexts/WalletContext';
import WalletDashboard from './WalletDashboard';
import TradingPlatformsSection from '../start-earning/TradingPlatformsSection';

const EnhancedWalletConnection = () => {
  const { isConnected } = useWallet();

  if (isConnected) {
    return (
      <div className="space-y-8">
        <div>
          <h2 className="text-3xl font-bold text-gradient">Your Dashboard</h2>
          <p className="text-muted-foreground mt-2">Manage your DeFi positions and track earnings</p>
        </div>
        <WalletDashboard />
        <TradingPlatformsSection />
      </div>
    );
  }

  // Don't render anything if wallet is not connected - the dedicated section at bottom handles this
  return null;
};

export default EnhancedWalletConnection;
