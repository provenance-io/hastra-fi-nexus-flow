
import { Button } from '@/components/ui/button';
import { RefreshCw, ChevronDown, ChevronUp, Wallet } from 'lucide-react';

interface WalletHeaderProps {
  address: string | null;
  walletType: string | null;
  isRefreshing: boolean;
  showTokenHoldings: boolean;
  onRefresh: () => void;
  onToggleHoldings: () => void;
}

const WalletHeader = ({
  address,
  walletType,
  isRefreshing,
  showTokenHoldings,
  onRefresh,
  onToggleHoldings
}: WalletHeaderProps) => {
  const formatAddress = (addr: string) => {
    return `${addr.slice(0, 6)}...${addr.slice(-4)}`;
  };

  const getWalletIcon = (type: string | null) => {
    switch (type) {
      case 'MetaMask':
        return <Wallet className="w-6 h-6 text-[hsl(34_100%_84%)]" />;
      case 'Phantom':
        return (
          <img 
            src="/lovable-uploads/a4d8da02-50c5-4552-bfd9-bd18932e737c.png" 
            alt="Phantom Wallet" 
            className="w-6 h-6 rounded-lg"
          />
        );
      case 'Solflare':
        return <Wallet className="w-6 h-6 text-[hsl(34_100%_84%)]" />;
      case 'Coinbase':
        return <Wallet className="w-6 h-6 text-blue-400" />;
      case 'WalletConnect':
        return <Wallet className="w-6 h-6 text-blue-400" />;
      case 'Backpack':
        return <Wallet className="w-6 h-6 text-purple-400" />;
      case 'Slope':
        return <Wallet className="w-6 h-6 text-green-400" />;
      case 'Glow':
        return <Wallet className="w-6 h-6 text-yellow-400" />;
      default:
        return <Wallet className="w-6 h-6 text-hastra-teal" />;
    }
  };

  const getWalletBrandColor = (type: string | null) => {
    switch (type) {
      case 'MetaMask':
        return 'bg-orange-900/20';
      case 'Phantom':
        return 'bg-transparent';
      case 'Solflare':
        return 'bg-yellow-900/20';
      case 'Coinbase':
        return 'bg-blue-900/20';
      case 'WalletConnect':
        return 'bg-blue-900/20';
      case 'Backpack':
        return 'bg-purple-900/20';
      case 'Slope':
        return 'bg-green-900/20';
      case 'Glow':
        return 'bg-yellow-900/20';
      default:
        return 'bg-hastra-teal/20';
    }
  };

  return (
    <div className="bg-background/20 rounded-t-3xl px-8 pt-6 pb-0">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4 mt-4">
          <div className={`w-14 h-14 rounded-xl ${getWalletBrandColor(walletType)} flex items-center justify-center shadow-sm`}>
            {getWalletIcon(walletType)}
          </div>
          <div>
            <p className="text-sm text-foreground font-mono font-medium">
              {address ? formatAddress(address) : 'Loading...'}
            </p>
            <p className="text-xs text-muted-foreground">
              {walletType && walletType !== 'Connected' ? walletType : 'Connected Wallet'}
            </p>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={onToggleHoldings}
            className="text-muted-foreground hover:text-foreground p-3 rounded-xl hover:bg-background/30 transition-all duration-200"
          >
            {showTokenHoldings ? (
              <ChevronUp className="w-4 h-4" />
            ) : (
              <ChevronDown className="w-4 h-4" />
            )}
          </Button>
          
          <Button
            variant="ghost"
            size="sm"
            onClick={onRefresh}
            disabled={isRefreshing}
            className="text-muted-foreground hover:text-foreground p-3 rounded-xl hover:bg-background/30 transition-all duration-200 disabled:opacity-50"
          >
            <RefreshCw className={`w-4 h-4 ${isRefreshing ? 'animate-spin' : ''}`} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default WalletHeader;
