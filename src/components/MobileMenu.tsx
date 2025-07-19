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

  const handleNavClick = (href: string, isAnchor?: boolean) => {
    if (isAnchor) {
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
    setOpen(false);
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Open menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-80 bg-background/95 backdrop-blur border-border/50">
        <SheetHeader>
          <SheetTitle className="text-left text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-header-glow to-crypto-accent">
            Navigation
          </SheetTitle>
        </SheetHeader>
        
        {/* Wallet Section - Show when connected */}
        {isConnected && address && (
          <div className="mt-6 p-4 bg-orange-900/20 border border-orange-800/30 rounded-xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-full bg-orange-900/30 flex items-center justify-center">
                <WalletIcon className="w-4 h-4 text-orange-600" />
              </div>
              <div>
                <p className="font-medium text-foreground text-sm">Connected Wallet</p>
                <p className="text-xs text-muted-foreground font-mono">{formatAddress(address)}</p>
              </div>
            </div>
            
            <div className="space-y-2">
              <button
                onClick={() => {
                  setOpen(false);
                  // Navigate to earn page
                  window.location.href = '/earn';
                }}
                className="w-full flex items-center gap-3 p-3 text-sm text-foreground hover:bg-orange-900/30 rounded-lg transition-colors"
              >
                <TrendingUp className="w-4 h-4 text-orange-600" />
                View My Earnings
              </button>
              
              <button
                onClick={copyAddress}
                className="w-full flex items-center gap-3 p-3 text-sm text-foreground hover:bg-orange-900/30 rounded-lg transition-colors"
              >
                {addressCopied ? (
                  <Check className="w-4 h-4 text-orange-600" />
                ) : (
                  <Copy className="w-4 h-4 text-orange-600" />
                )}
                {addressCopied ? 'Address Copied!' : 'Copy Address'}
              </button>
              
              <button
                onClick={handleDisconnect}
                className="w-full flex items-center gap-3 p-3 text-sm text-red-500 hover:bg-red-500/10 rounded-lg transition-colors"
              >
                <LogOut className="w-4 h-4" />
                Disconnect Wallet
              </button>
            </div>
          </div>
        )}

        <nav className="mt-8 space-y-4">
          {navItems.map((item) => (
            <div key={item.label}>
              <Link
                to={item.href}
                onClick={() => setOpen(false)}
                className="block px-4 py-3 text-lg font-medium text-foreground hover:text-header-glow transition-colors border-b border-border/30 hover:border-header-glow/50"
              >
                {item.label}
              </Link>
            </div>
          ))}
          <div className="pt-6 space-y-3">
            {!isConnected ? (
              <Button 
                onClick={handleConnectWallet}
                size="lg" 
                className="w-full btn-gradient text-sm md:text-base"
              >
                Connect Wallet
              </Button>
            ) : (
              <Button asChild size="lg" className="w-full btn-gradient text-sm md:text-base">
                <Link to="/yield">
                  Explore YIELD
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            )}
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;