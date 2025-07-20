import { useState } from 'react';
import { Menu, X, ExternalLink, Copy, LogOut, Check, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useWallet } from '@/contexts/WalletContext';
import { useToast } from '@/hooks/use-toast';
import { getWalletIcon } from '@/utils/walletIcons';
import HastraLogo from '@/components/HastraLogo';
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
      <SheetContent side="right" className="w-80 bg-card/60 backdrop-blur-xl border-border/30 flex flex-col h-full shadow-2xl">
        <SheetHeader className="flex-shrink-0">
          <SheetTitle className="text-left">
            <Link 
              to="/" 
              onClick={() => setOpen(false)}
              className="inline-block hover:scale-105 transition-transform duration-200"
            >
              <HastraLogo className="h-10 w-auto" />
            </Link>
          </SheetTitle>
        </SheetHeader>
        
        <div className="flex-1 overflow-y-auto py-3 space-y-3">
          {/* Wallet Section - Show when connected */}
          {isConnected && address && (
            <div className="p-4 bg-crypto-accent/10 border border-crypto-accent/20 rounded-xl shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-full bg-crypto-accent/20 flex items-center justify-center">
                  <WalletIcon className="w-4 h-4 text-crypto-accent" />
                </div>
                <div>
                  <p className="font-medium text-foreground text-sm">Connected</p>
                  <p className="text-sm text-muted-foreground font-mono">{formatAddress(address)}</p>
                </div>
              </div>
              
              <div className="space-y-2">
                <button
                  onClick={() => {
                    setOpen(false);
                    window.location.href = '/earn';
                  }}
                  className="w-full flex items-center gap-3 p-3 text-sm text-foreground hover:bg-crypto-accent/20 rounded-lg transition-colors"
                >
                  <TrendingUp className="w-4 h-4 text-crypto-accent" />
                  View Earnings
                </button>
                
                <button
                  onClick={copyAddress}
                  className="w-full flex items-center gap-3 p-3 text-sm text-foreground hover:bg-crypto-accent/20 rounded-lg transition-colors"
                >
                  {addressCopied ? (
                    <Check className="w-4 h-4 text-crypto-accent" />
                  ) : (
                    <Copy className="w-4 h-4 text-crypto-accent" />
                  )}
                  {addressCopied ? 'Copied!' : 'Copy Address'}
                </button>
                
                <button
                  onClick={handleDisconnect}
                  className="w-full flex items-center gap-3 p-3 text-sm text-foreground hover:bg-crypto-accent/20 rounded-lg transition-colors"
                >
                  <LogOut className="w-4 h-4 text-crypto-accent" />
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
                  className="block px-3 py-2 text-base font-medium text-foreground hover:text-header-glow transition-all duration-300 border-b border-border/20 uppercase hover:shadow-[0_0_10px_hsl(var(--header-glow)/0.5)]"
                >
                  {item.label}
                </Link>
              </div>
            ))}
          </nav>

          {/* Connect Wallet Button - Show when not connected */}
          {!isConnected && (
            <div className="px-1 pt-2">
              <Button 
                onClick={handleConnectWallet}
                size="sm" 
                className="w-full btn-gradient text-sm"
              >
                Connect Wallet
              </Button>
            </div>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;