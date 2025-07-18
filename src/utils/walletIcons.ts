import { LucideIcon } from 'lucide-react';
import { Wallet, Shield, Coins } from 'lucide-react';

// Map wallet types to their respective icons
export const walletIcons: Record<string, LucideIcon> = {
  'MetaMask': Shield,
  'WalletConnect': Wallet,
  'Coinbase': Coins,
  'Phantom': Wallet,
  'Trust Wallet': Shield,
  // Default fallback
  default: Wallet,
};

export const getWalletIcon = (walletType: string | null): LucideIcon => {
  if (!walletType) return walletIcons.default;
  return walletIcons[walletType] || walletIcons.default;
};