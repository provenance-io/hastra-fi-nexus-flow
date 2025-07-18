
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { useWallet } from '@/contexts/WalletContext';
import { Wallet, AlertCircle, CheckCircle, Loader2 } from 'lucide-react';
import WalletDashboard from './WalletDashboard';
import TradingPlatformsSection from '../start-earning/TradingPlatformsSection';

const EnhancedWalletConnection = () => {
  const { 
    isConnected, 
    isConnecting, 
    networkError, 
    connectWallet, 
    disconnectWallet 
  } = useWallet();

  if (isConnected) {
    return (
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold text-gradient">Your Dashboard</h2>
            <p className="text-muted-foreground mt-2">Manage your DeFi positions and track earnings</p>
          </div>
          <Button
            onClick={disconnectWallet}
            variant="outline"
            className="focus-ring hover:border-destructive/50 hover:text-destructive"
          >
            Disconnect Wallet
          </Button>
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
