import { LucideIcon } from "lucide-react";
import {
  Wallet,
  Shield,
  Coins,
  Zap,
  Flame,
  CircleDot,
  Gem,
  Layers,
} from "lucide-react";
import React from "react";

// Import wallet icons
import phantomIcon from "@/assets/wallet-icons/phantom.png";
import metamaskIcon from "@/assets/wallet-icons/metamask.svg";
import coinbaseIcon from "@/assets/wallet-icons/coinbase.svg";
import solflareIcon from "@/assets/wallet-icons/solflare.svg";
import walletconnectIcon from "@/assets/wallet-icons/walletconnect.png";

// Wallet icon component that handles both images and fallback icons
export const WalletIconComponent = ({
  walletType,
  className,
}: {
  walletType: string | null;
  className?: string;
}) => {
  const iconMap: Record<string, string> = {
    MetaMask: metamaskIcon,
    Phantom: phantomIcon,
    Coinbase: coinbaseIcon,
    Solflare: solflareIcon,
    WalletConnect: walletconnectIcon,
  };

  const iconSrc = walletType ? iconMap[walletType] : null;

  if (iconSrc) {
    return React.createElement("img", {
      src: iconSrc,
      alt: `${walletType} wallet`,
      className: className,
      style: { objectFit: "contain" },
    });
  }

  // Fallback to Lucide icons for wallets without specific images
  const fallbackIcons: Record<string, LucideIcon> = {
    "Trust Wallet": Shield,
    Backpack: Gem,
    Slope: Zap,
    Glow: CircleDot,
    default: Wallet,
  };

  const FallbackIcon = walletType
    ? fallbackIcons[walletType] || fallbackIcons.default
    : fallbackIcons.default;
  return React.createElement(FallbackIcon, { className });
};

// Map wallet types to their respective icons with more distinctive choices
export const walletIcons: Record<string, LucideIcon> = {
  MetaMask: Zap, // Lightning bolt for MetaMask's speed
  WalletConnect: Layers, // Layers for WalletConnect's bridging
  Coinbase: Coins, // Coins for Coinbase
  Phantom: CircleDot, // Circle dot for Phantom's minimalist design
  "Trust Wallet": Shield, // Shield for Trust Wallet's security focus
  Solflare: Flame, // Flame for Solflare (plays on "flare")
  Backpack: Gem, // Gem for Backpack's premium feel
  Slope: Zap, // Lightning for Slope's speed
  Glow: CircleDot, // Circle dot for Glow's clean design
  // Default fallback
  default: Wallet,
};

export const getWalletIcon = (walletType: string | null): LucideIcon => {
  if (!walletType) return walletIcons.default;
  return walletIcons[walletType] || walletIcons.default;
};
