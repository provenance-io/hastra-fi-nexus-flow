import { useWallet } from "@/contexts/WalletContext";

/**
 * Simple hook to provide supported actions based on the
 * connected wallet account balances
 */
export const useAvailableActions = () => {
  const { solBalance, usdcBalance, primeBalance, wyldsBalance } = useWallet();
  const hasSOL = solBalance > 0;
  const hasUSDC = usdcBalance > 0;
  const hasWYLDS = wyldsBalance > 0;
  const hasPrime = primeBalance > 0;
  return {
    canBuy: hasSOL && hasUSDC,
    canSend: hasSOL && (hasUSDC || hasWYLDS || hasPrime),
    canStake: hasSOL && hasWYLDS,
    canUnstake: hasSOL && hasPrime,
  };
};
