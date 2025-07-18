
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
import { Wallet, Copy, LogOut, ChevronDown, Check } from 'lucide-react';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const WalletHeaderButton = () => {
  const { isConnected, address, disconnectWallet } = useWallet();
  const [addressCopied, setAddressCopied] = useState(false);
  const { toast } = useToast();

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
          className="gap-2 border-green-500/30 bg-green-500/10 text-green-300 hover:bg-green-500/20 hover:border-green-500/40"
        >
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="font-mono text-sm">{formatAddress(address)}</span>
            <ChevronDown className="h-3 w-3" />
          </div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        className="w-64 bg-white/95 backdrop-blur-md border border-gray-200 shadow-2xl" 
        align="end"
      >
        <div className="p-3 border-b border-gray-200">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
              <Wallet className="w-4 h-4 text-green-500" />
            </div>
            <div>
              <p className="font-medium text-gray-900">Connected Wallet</p>
              <div className="flex items-center gap-2">
                <p className="text-sm text-gray-600 font-mono">{formatAddress(address)}</p>
                <Badge className="bg-green-500/20 border-green-500/30 text-green-600 text-xs">
                  MetaMask
                </Badge>
              </div>
            </div>
          </div>
        </div>
        
        <DropdownMenuItem onClick={copyAddress} className="cursor-pointer p-3">
          <div className="flex items-center w-full">
            {addressCopied ? (
              <Check className="w-4 h-4 mr-3 text-green-500" />
            ) : (
              <Copy className="w-4 h-4 mr-3" />
            )}
            <span>{addressCopied ? 'Address Copied!' : 'Copy Address'}</span>
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
