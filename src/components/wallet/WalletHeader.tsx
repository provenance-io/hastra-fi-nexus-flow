import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import { Wallet, FolderOpen } from "lucide-react";

interface WalletHeaderProps {
  address: string | null;
  walletType: string | null;
}

const WalletHeader = ({ address, walletType }: WalletHeaderProps) => {
  const formatAddress = (addr: string) => {
    return `${addr.slice(0, 6)}...${addr.slice(-4)}`;
  };

  const copyAddress = async () => {
    if (address) {
      await navigator.clipboard.writeText(address);
      toast({
        title: "Address Copied",
        description: "Wallet address copied to clipboard",
      });
    }
  };

  const getWalletIcon = (type: string | null) => {
    switch (type) {
      case "MetaMask":
        return <Wallet className="size-8 text-[hsl(34_100%_84%)]" />;
      case "Phantom":
        return (
          <img
            src="/lovable-uploads/a4d8da02-50c5-4552-bfd9-bd18932e737c.png"
            alt="Phantom Wallet"
            className="size-8 rounded-lg"
          />
        );
      case "Solflare":
        return <Wallet className="size-8 text-[hsl(34_100%_84%)]" />;
      case "Coinbase":
        return <Wallet className="size-8 text-blue-400" />;
      case "WalletConnect":
        return <Wallet className="size-8 text-blue-400" />;
      case "Backpack":
        return <Wallet className="size-8 text-purple-400" />;
      case "Slope":
        return <Wallet className="size-8 text-green-400" />;
      case "Glow":
        return <Wallet className="size-8 text-yellow-400" />;
      default:
        return <Wallet className="size-8 text-hastra-teal" />;
    }
  };

  const getWalletBrandColor = (type: string | null) => {
    switch (type) {
      case "MetaMask":
        return "bg-orange-900/20";
      case "Phantom":
        return "bg-transparent";
      case "Solflare":
        return "bg-yellow-900/20";
      case "Coinbase":
        return "bg-blue-900/20";
      case "WalletConnect":
        return "bg-blue-900/20";
      case "Backpack":
        return "bg-purple-900/20";
      case "Slope":
        return "bg-green-900/20";
      case "Glow":
        return "bg-yellow-900/20";
      default:
        return "bg-hastra-teal/20";
    }
  };

  return (
    <div className="bg-background/20 rounded-t-3xl p-4 lg:p-6">
      <div className="flex items-center justify-between">
        <h2 className="text-lg md:text-xl font-semibold text-foreground flex items-center gap-4">
          <FolderOpen className="size-6 md:size-5 text-header-glow" />
          Portfolio Overview
        </h2>
      </div>
      <Button
        variant="ghost"
        className="flex items-center justify-between my-4 py-6"
        onClick={copyAddress}
      >
        <div className="flex items-center gap-4">
          <div
            className={`rounded-xl ${getWalletBrandColor(
              walletType
            )} flex items-center justify-center shadow-sm`}
          >
            {getWalletIcon(walletType)}
          </div>
          <div>
            <p className="text-sm text-foreground font-mono font-medium">
              {address ? formatAddress(address) : "Loading..."}
            </p>
            <p className="text-xs text-muted-foreground">
              {walletType && walletType !== "Connected"
                ? walletType
                : "Connected Wallet"}
            </p>
          </div>
        </div>
      </Button>
    </div>
  );
};

export default WalletHeader;
