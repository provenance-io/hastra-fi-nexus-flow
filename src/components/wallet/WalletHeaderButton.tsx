
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
          className="gap-2 bg-orange-900/20 border border-orange-800/30 text-orange-300 hover:bg-orange-900/30 hover:border-orange-800/40 focus-ring font-bold px-4 py-2 rounded-xl transition-all duration-200"
        >
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-orange-400 animate-pulse" />
            <span className="font-mono text-sm">{formatAddress(address)}</span>
            <ChevronDown className="h-3 w-3" />
          </div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        className="w-64 glass-effect border border-orange-800/20 shadow-2xl backdrop-blur-md" 
        align="end"
      >
        <div className="p-3 border-b border-orange-800/20">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-orange-900/20 flex items-center justify-center">
              <Wallet className="w-4 h-4 text-orange-400" />
            </div>
            <div>
              <p className="font-medium text-foreground">Connected Wallet</p>
              <div className="flex items-center gap-2">
                <p className="text-sm text-muted-foreground font-mono">{formatAddress(address)}</p>
                <Badge className="bg-orange-900/20 border-orange-800/30 text-orange-300 text-xs">
                  MetaMask
                </Badge>
              </div>
            </div>
          </div>
        </div>
        
        <DropdownMenuItem onClick={copyAddress} className="cursor-pointer p-3 hover:bg-orange-900/10">
          <div className="flex items-center w-full">
            {addressCopied ? (
              <Check className="w-4 h-4 mr-3 text-orange-400" />
            ) : (
              <Copy className="w-4 h-4 mr-3 text-muted-foreground" />
            )}
            <span className="text-foreground">{addressCopied ? 'Address Copied!' : 'Copy Address'}</span>
          </div>
        </DropdownMenuItem>
        
        <DropdownMenuSeparator />
        
        <DropdownMenuItem 
          onClick={handleDisconnect} 
          className="cursor-pointer p-3 text-red-400 hover:bg-red-900/10"
        >
          <LogOut className="w-4 h-4 mr-3" />
          <span>Disconnect Wallet</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default WalletHeaderButton;
