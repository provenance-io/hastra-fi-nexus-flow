import { useState } from 'react';
import { Menu, X, ExternalLink, Copy, LogOut, Check, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useWallet } from '@/contexts/WalletContext';
import { useToast } from '@/hooks/use-toast';
import { getWalletIcon } from '@/utils/walletIcons';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

const MobileMenu = () => {
  const [open, setOpen] = useState(false);
  const [addressCopied, setAddressCopied] = useState(false);
  const { isConnected, address, disconnectWallet, walletType, connectWallet } = useWallet();
  const { toast } = useToast();
  const WalletIcon = getWalletIcon(walletType);

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
    setOpen(false);
    toast({
      title: "Wallet Disconnected",
      description: "Your wallet has been disconnected",
    });
  };

  const handleConnectWallet = async () => {
    await connectWallet();
    setOpen(false);
  };

  const navItems = [
    { label: 'About', href: '/about' },
    { label: 'YIELD', href: '/yield' },
    { label: 'HOMES', href: '/homes' },
    { label: 'Earn', href: '/earn' },
    { label: '(L)earn', href: '/learn' },
  ];

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Open menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-80 bg-background/20 backdrop-blur border-border/50 flex flex-col h-full">
        <SheetHeader className="flex-shrink-0">
          <SheetTitle className="text-left text-lg font-bold text-gradient">
            Navigation
          </SheetTitle>
        </SheetHeader>
        
        <div className="flex-1 overflow-y-auto py-3 space-y-3">
          {/* Wallet Section - Show when connected */}
          {isConnected && address && (
            <div className="p-3 bg-orange-900/10 border border-orange-800/20 rounded-lg">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-6 h-6 rounded-full bg-orange-900/20 flex items-center justify-center">
                  <WalletIcon className="w-3 h-3 text-orange-400" />
                </div>
                <div>
                  <p className="font-medium text-foreground text-xs">Connected</p>
                  <p className="text-xs text-muted-foreground font-mono">{formatAddress(address)}</p>
                </div>
              </div>
              
              <div className="space-y-1">
                <button
                  onClick={() => {
                    setOpen(false);
                    window.location.href = '/earn';
                  }}
                  className="w-full flex items-center gap-2 p-2 text-xs text-foreground hover:bg-orange-900/20 rounded-md transition-colors"
                >
                  <TrendingUp className="w-3 h-3 text-orange-400" />
                  View Earnings
                </button>
                
                <button
                  onClick={copyAddress}
                  className="w-full flex items-center gap-2 p-2 text-xs text-foreground hover:bg-orange-900/20 rounded-md transition-colors"
                >
                  {addressCopied ? (
                    <Check className="w-3 h-3 text-orange-400" />
                  ) : (
                    <Copy className="w-3 h-3 text-orange-400" />
                  )}
                  {addressCopied ? 'Copied!' : 'Copy Address'}
                </button>
                
                <button
                  onClick={handleDisconnect}
                  className="w-full flex items-center gap-2 p-2 text-xs text-foreground hover:bg-orange-900/20 rounded-md transition-colors"
                >
                  <LogOut className="w-3 h-3 text-orange-400" />
                  Disconnect
                </button>
              </div>
            </div>
          )}

          <nav className="space-y-1">
            {navItems.map((item) => (
              <div key={item.label}>
                <Link
                  to={item.href}
                  onClick={() => setOpen(false)}
                  className="block px-3 py-2 text-base font-medium text-foreground hover:text-header-glow transition-colors border-b border-border/20 hover:border-header-glow/50"
                >
                  {item.label}
                </Link>
              </div>
            ))}
          </nav>
        </div>
        
        <div className="flex-shrink-0 pt-3 border-t border-border/20">
          {!isConnected && (
            <Button 
              onClick={handleConnectWallet}
              size="sm" 
              className="w-full btn-gradient text-sm"
            >
              Connect Wallet
            </Button>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;