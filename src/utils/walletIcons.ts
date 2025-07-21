import { LucideIcon } from 'lucide-react';
import { Wallet, Shield, Coins, Zap, Flame, CircleDot, Gem, Layers } from 'lucide-react';

// Map wallet types to their respective icons with more distinctive choices
export const walletIcons: Record<string, LucideIcon> = {
  'MetaMask': Zap, // Lightning bolt for MetaMask's speed
  'WalletConnect': Layers, // Layers for WalletConnect's bridging
  'Coinbase': Coins, // Coins for Coinbase
  'Phantom': CircleDot, // Circle dot for Phantom's minimalist design
  'Trust Wallet': Shield, // Shield for Trust Wallet's security focus
  'Solflare': Flame, // Flame for Solflare (plays on "flare")
  'Backpack': Gem, // Gem for Backpack's premium feel
  'Slope': Zap, // Lightning for Slope's speed
  'Glow': CircleDot, // Circle dot for Glow's clean design
  // Default fallback
  default: Wallet,
};

export const getWalletIcon = (walletType: string | null): LucideIcon => {
  if (!walletType) return walletIcons.default;
  return walletIcons[walletType] || walletIcons.default;
};