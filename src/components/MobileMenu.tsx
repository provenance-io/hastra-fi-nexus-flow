import { useState } from "react";
import {
  Menu,
  X,
  ExternalLink,
  Copy,
  LogOut,
  Check,
  TrendingUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useWallet } from "@/contexts/WalletContext";
import { useToast } from "@/hooks/use-toast";
import { WalletIconComponent } from "@/utils/walletIcons";
import HastraLogo from "@/components/HastraLogo";
import { isFeatureEnabled } from "@/utils/featureFlags";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const MobileMenu = () => {
  const [open, setOpen] = useState(false);
  const [addressCopied, setAddressCopied] = useState(false);
  const { isConnected, address, disconnectWallet, walletType, connectWallet } =
    useWallet();
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

  const getNavItems = () => {
    const items = [
      { label: "About", href: "/about" },
      { label: "PRIME", href: "/prime" },
      { label: "sPRIME", href: "/sprime" },
      { label: "Earn", href: "/earn" },
      { label: "(L)earn", href: "/learn" },
    ];

    if (isFeatureEnabled("homesEnabled")) {
      items.splice(3, 0, { label: "HOMES", href: "/homes" });
    }

    return items;
  };

  const navItems = getNavItems();

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Open menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent
        side="right"
        className="w-80 bg-background/20 backdrop-blur-xl border-border/30 flex flex-col h-full shadow-2xl rounded-l-3xl"
      >
        <SheetHeader className="flex-shrink-0">
          <SheetTitle className="text-left">
            <Link
              to="/"
              onClick={() => setOpen(false)}
              className="inline-block hover:scale-105 transition-transform duration-200"
            >
              <HastraLogo className="h-10 w-auto" white={true} />
            </Link>
          </SheetTitle>
        </SheetHeader>

        <div className="flex-1 overflow-y-auto py-3 space-y-3">
          {/* Wallet Section - Show when connected */}
          {isConnected && address && (
            <div className="p-4 bg-background/30 backdrop-blur-md border border-border/20 hover:border-orange-300/20 rounded-xl shadow-2xl">
              <div className="flex items-center gap-3 mb-4 pb-3 border-b border-orange-300/20">
                <WalletIconComponent
                  walletType={walletType}
                  className="w-8 h-8"
                />
                <div>
                  <p className="font-medium text-platinum/90 text-sm">
                    {walletType && walletType !== "Connected"
                      ? walletType
                      : "Connected Wallet"}
                  </p>
                  <p className="text-sm text-platinum/70 font-mono">
                    {formatAddress(address)}
                  </p>
                </div>
              </div>

              <div className="space-y-1">
                <button
                  onClick={() => {
                    setOpen(false);
                    window.location.href = "/earn";
                  }}
                  className="w-full flex items-center gap-3 p-3 text-sm text-platinum/90 hover:bg-orange-300/10 hover:text-orange-300 rounded-lg transition-colors"
                >
                  <TrendingUp className="w-4 h-4 text-platinum/60" />
                  View My Earnings
                </button>

                <button
                  onClick={copyAddress}
                  className="w-full flex items-center gap-3 p-3 text-sm text-platinum/90 hover:bg-orange-300/10 hover:text-orange-300 rounded-lg transition-colors"
                >
                  {addressCopied ? (
                    <Check className="w-4 h-4 text-orange-300" />
                  ) : (
                    <Copy className="w-4 h-4 text-platinum/60" />
                  )}
                  {addressCopied ? "Address Copied!" : "Copy Address"}
                </button>

                <button
                  onClick={handleDisconnect}
                  className="w-full flex items-center gap-3 p-3 text-sm text-red-400 hover:bg-red-900/20 hover:text-red-300 rounded-lg transition-colors"
                >
                  <LogOut className="w-4 h-4" />
                  Disconnect Wallet
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
                size="lg"
                variant="destructive"
                className="w-full tracking-widest"
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
