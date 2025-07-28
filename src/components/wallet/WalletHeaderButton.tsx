import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import { useWallet } from "@/contexts/WalletContext";
import { Copy, LogOut, ChevronDown, Check, TrendingUp } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";
import { WalletIconComponent } from "@/utils/walletIcons";

const WalletHeaderButton = () => {
  const { isConnected, address, disconnectWallet, walletType } = useWallet();
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
          className="gap-2 bg-background/20 border border-orange-300/30 text-platinum/90 hover:bg-orange-300/10 hover:border-orange-300/50 hover:text-orange-300 shadow-lg font-medium px-3 py-1.5 rounded-xl transition-all duration-300 h-8 text-sm"
          style={{
            textShadow: "0 0 8px rgba(255, 255, 255, 0.2)",
            transition: "all 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.textShadow =
              "0 0 12px rgba(251, 146, 60, 0.6), 0 0 24px rgba(251, 146, 60, 0.3)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.textShadow =
              "0 0 8px rgba(255, 255, 255, 0.2)";
          }}
        >
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-orange-300 animate-pulse" />
            <span className="font-mono text-sm tracking-wider">
              {walletType && walletType !== "Connected"
                ? walletType.slice(0, 8)
                : formatAddress(address)}
            </span>
            <ChevronDown className="h-3 w-3" />
          </div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-56 bg-background/30 backdrop-blur-md border border-border/20 hover:border-orange-300/20 shadow-2xl mt-4 z-50"
        align="end"
      >
        <div className="p-3 border-b border-orange-300/20">
          <div className="flex items-center gap-3">
            <div className="size-8 rounded-full bg-orange-300/20 flex items-center justify-center">
              <WalletIconComponent
                walletType={walletType}
                className="size-8 rounded-full text-orange-300"
              />
            </div>
            <div>
              <p className="font-medium text-platinum/90">
                {walletType && walletType !== "Connected"
                  ? walletType
                  : "Connected Wallet"}
              </p>
              <p className="text-sm text-platinum/70 font-mono">
                {formatAddress(address)}
              </p>
            </div>
          </div>
        </div>

        <DropdownMenuItem
          onClick={() => navigate("/earn")}
          className="cursor-pointer p-3 hover:bg-orange-300/10 hover:text-orange-300 transition-colors"
        >
          <TrendingUp className="w-4 h-4 mr-3 text-platinum/60" />
          <span className="text-platinum/90">View My Earnings</span>
        </DropdownMenuItem>

        <DropdownMenuItem
          onClick={copyAddress}
          className="cursor-pointer p-3 hover:bg-orange-300/10 hover:text-orange-300 transition-colors"
        >
          <div className="flex items-center w-full">
            {addressCopied ? (
              <Check className="w-4 h-4 mr-3 text-orange-300" />
            ) : (
              <Copy className="w-4 h-4 mr-3 text-platinum/60" />
            )}
            <span className="text-platinum/90">
              {addressCopied ? "Address Copied!" : "Copy Address"}
            </span>
          </div>
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        <DropdownMenuItem
          onClick={handleDisconnect}
          className="cursor-pointer p-3 text-red-400 hover:bg-red-900/20 hover:text-red-300 transition-colors"
        >
          <LogOut className="w-4 h-4 mr-3" />
          <span>Disconnect Wallet</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default WalletHeaderButton;
