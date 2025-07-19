
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
        return <Wallet className="w-6 h-6 text-orange-400" />;
      case 'Phantom':
        return <Wallet className="w-6 h-6 text-purple-400" />;
      case 'Solflare':
        return <Wallet className="w-6 h-6 text-yellow-400" />;
      case 'Coinbase':
        return <Wallet className="w-6 h-6 text-blue-400" />;
      default:
        return <Wallet className="w-6 h-6 text-hastra-teal" />;
    }
  };

  const getWalletBrandColor = (type: string | null) => {
    switch (type) {
      case 'MetaMask':
        return 'bg-orange-900/20';
      case 'Phantom':
        return 'bg-purple-900/20';
      case 'Solflare':
        return 'bg-yellow-900/20';
      case 'Coinbase':
        return 'bg-blue-900/20';
      default:
        return 'bg-hastra-teal/20';
    }
  };

  return (
    <div className="bg-background/20 rounded-t-3xl px-8 py-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className={`w-14 h-14 rounded-xl ${getWalletBrandColor(walletType)} flex items-center justify-center shadow-sm`}>
            {getWalletIcon(walletType)}
          </div>
          <div className="space-y-1">
            <p className="text-xs text-muted-foreground/80 uppercase tracking-wider font-medium">
              Connected Wallet
            </p>
            <p className="text-sm text-foreground font-mono font-medium">
              {address ? formatAddress(address) : 'Loading...'}
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
