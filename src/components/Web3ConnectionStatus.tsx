import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Wallet, AlertCircle, CheckCircle } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';

// Mock Web3 connection component for DeFi UX patterns
const Web3ConnectionStatus = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [isConnecting, setIsConnecting] = useState(false);
  const [walletAddress, setWalletAddress] = useState<string>('');
  const [networkError, setNetworkError] = useState<string>('');

  // Simulate wallet connection status check
  useEffect(() => {
    const checkWalletConnection = () => {
      // In a real app, this would check for actual wallet connection
      const mockConnected = localStorage.getItem('mock-wallet-connected') === 'true';
      if (mockConnected) {
        setIsConnected(true);
        setWalletAddress('0x742d...35A4'); // Mock address
      }
    };

    checkWalletConnection();
  }, []);

  const handleConnect = async () => {
    setIsConnecting(true);
    setNetworkError('');

    try {
      // Simulate connection delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Mock successful connection
      setIsConnected(true);
      setWalletAddress('0x742d...35A4');
      localStorage.setItem('mock-wallet-connected', 'true');
      
      // Show success notification
      const event = new CustomEvent('wallet-connected', {
        detail: { address: '0x742d...35A4' }
      });
      window.dispatchEvent(event);
      
    } catch (error) {
      setNetworkError('Failed to connect wallet. Please try again.');
    } finally {
      setIsConnecting(false);
    }
  };

  const handleDisconnect = () => {
    setIsConnected(false);
    setWalletAddress('');
    localStorage.removeItem('mock-wallet-connected');
    
    const event = new CustomEvent('wallet-disconnected');
    window.dispatchEvent(event);
  };

  if (!isConnected) {
    return (
      <div className="space-y-4">
        {networkError && (
          <Alert className="border-destructive/50 bg-destructive/10">
            <AlertCircle className="h-4 w-4 text-destructive" />
            <AlertDescription className="text-destructive">
              {networkError}
            </AlertDescription>
          </Alert>
        )}
        
        <Button
          onClick={handleConnect}
          disabled={isConnecting}
          className="w-full btn-gradient focus-ring group"
          size="lg"
        >
          {isConnecting ? (
            <>
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
              Connecting...
            </>
          ) : (
            <>
              <Wallet className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
              Connect Wallet
            </>
          )}
        </Button>
        
        <p className="text-sm text-muted-foreground text-center">
          Connect your wallet to start earning yield with YIELD
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between p-4 rounded-xl glass-effect border border-green-500/20">
        <div className="flex items-center space-x-3">
          <CheckCircle className="w-5 h-5 text-green-400" />
          <div>
            <p className="font-medium text-foreground">Wallet Connected</p>
            <p className="text-sm text-muted-foreground">{walletAddress}</p>
          </div>
        </div>
        
        <Button
          onClick={handleDisconnect}
          variant="outline"
          size="sm"
          className="focus-ring hover:border-destructive/50 hover:text-destructive"
        >
          Disconnect
        </Button>
      </div>
      
      <div className="text-center">
        <p className="text-sm text-muted-foreground">
          Ready to interact with YIELD protocol
        </p>
      </div>
    </div>
  );
};

export default Web3ConnectionStatus;