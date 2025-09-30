import { useWallet } from "@/contexts/WalletContext";

/**
 * Simple hook to provide supported actions based on the
 * connected wallet account balances
 */
export const useAvailableActions = () => {
  const { solBalance, usdcBalance, wyldsBalance, syldsBalance } = useWallet();
  const hasSOL = solBalance > 0;
  const hasUSDC = usdcBalance > 0;
  const hasWYLDS = wyldsBalance > 0;
  const hasSYLDS = syldsBalance > 0;
  return {
    canBuy: hasSOL && hasUSDC,
    canSend: hasSOL && (hasUSDC || hasWYLDS || hasSYLDS),
    canStake: hasSOL && hasWYLDS,
    canUnstake: hasSOL && hasSYLDS,
  };
};
