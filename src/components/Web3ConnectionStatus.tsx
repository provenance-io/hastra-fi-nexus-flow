
import { Button } from '@/components/ui/button';
import { Wallet, AlertCircle, CheckCircle } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { useWallet } from '@/contexts/WalletContext';
import { getWalletIcon } from '@/utils/walletIcons';

const Web3ConnectionStatus = () => {
  const { 
    isConnected, 
    isConnecting, 
    address, 
    networkError, 
    connectWallet, 
    disconnectWallet,
    walletType 
  } = useWallet();
  
  const WalletIcon = getWalletIcon(walletType);

  const formatAddress = (addr: string) => {
    return `${addr.slice(0, 6)}...${addr.slice(-4)}`;
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
          onClick={connectWallet}
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
          Connect your wallet to start earning yield with sYLDS
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between p-4 rounded-xl glass-effect border border-green-500/20">
        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-2">
            <WalletIcon className="w-5 h-5 text-green-400" />
            <CheckCircle className="w-5 h-5 text-green-400" />
          </div>
          <div>
            <p className="font-medium text-foreground">Wallet Connected</p>
            <p className="text-sm text-muted-foreground">{address ? formatAddress(address) : 'Unknown'}</p>
          </div>
        </div>
        
        <Button
          onClick={disconnectWallet}
          variant="outline"
          size="sm"
          className="focus-ring hover:border-destructive/50 hover:text-destructive"
        >
          Disconnect
        </Button>
      </div>
      
      <div className="text-center">
        <p className="text-sm text-muted-foreground">
          Ready to interact with sYLDS protocol
        </p>
      </div>
    </div>
  );
};

export default Web3ConnectionStatus;
