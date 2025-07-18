
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Badge } from '@/components/ui/badge';
import { useWallet } from '@/contexts/WalletContext';
import { Copy, LogOut, ChevronDown, Check, TrendingUp } from 'lucide-react';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { useNavigate } from 'react-router-dom';
import { getWalletIcon } from '@/utils/walletIcons';

const WalletHeaderButton = () => {
  const { isConnected, address, disconnectWallet, walletType } = useWallet();
  const WalletIcon = getWalletIcon(walletType);
  const [addressCopied, setAddressCopied] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const formatAddress = (addr: string) => {
    return `${addr.slice(0, 6)}...${addr.slice(-4)}`;
  };

  const copyAddress = async () => {
    if (address) {
      await navigator.clipboard.writeText(address);
      setAddressCopied(true);
      setTimeout(() => setAddressCopied(false), 2000);
      toast({
        title: "Address Copied",
        description: "Wallet address copied to clipboard",
      });
    }
  };

  const handleDisconnect = () => {
    disconnectWallet();
    toast({
      title: "Wallet Disconnected",
      description: "Your wallet has been disconnected",
    });
  };

  if (!isConnected || !address) {
    return null;
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="outline" 
          className="gap-2 bg-orange-900/40 border-2 border-orange-800/50 text-orange-100 hover:bg-orange-900/50 hover:border-orange-700/60 shadow-lg hover:shadow-orange-900/20 font-bold px-4 py-2 rounded-xl transition-all duration-200"
        >
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-orange-400" />
            <span className="font-mono text-sm">{formatAddress(address)}</span>
            <ChevronDown className="h-3 w-3" />
          </div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        className="w-64 bg-white/95 border-2 border-orange-800/30 shadow-2xl z-50" 
        align="end"
      >
        <div className="p-3 border-b border-orange-800/20">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-orange-900/30 flex items-center justify-center">
              <WalletIcon className="w-4 h-4 text-orange-600" />
            </div>
            <div>
              <p className="font-medium text-gray-900">Connected Wallet</p>
              <p className="text-sm text-gray-700 font-mono">{formatAddress(address)}</p>
            </div>
          </div>
        </div>
        
        <DropdownMenuItem onClick={() => navigate('/earn')} className="cursor-pointer p-3 hover:bg-orange-50">
          <TrendingUp className="w-4 h-4 mr-3 text-gray-600" />
          <span className="text-gray-900">View My Earnings</span>
        </DropdownMenuItem>

        <DropdownMenuItem onClick={copyAddress} className="cursor-pointer p-3 hover:bg-orange-50">
          <div className="flex items-center w-full">
            {addressCopied ? (
              <Check className="w-4 h-4 mr-3 text-orange-600" />
            ) : (
              <Copy className="w-4 h-4 mr-3 text-gray-600" />
            )}
            <span className="text-gray-900">{addressCopied ? 'Address Copied!' : 'Copy Address'}</span>
          </div>
        </DropdownMenuItem>
        
        <DropdownMenuSeparator />
        
        <DropdownMenuItem 
          onClick={handleDisconnect} 
          className="cursor-pointer p-3 text-red-600 hover:bg-red-50"
        >
          <LogOut className="w-4 h-4 mr-3" />
          <span>Disconnect Wallet</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default WalletHeaderButton;
