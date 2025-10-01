import { useWallet } from "@/contexts/WalletContext";

/**
 * Simple hook to provide supported actions based on the
 * connected wallet account balances
 */
export const useAvailableActions = () => {
  const { solBalance, usdcBalance, primeBalance, sPrimeBalance } = useWallet();
  const hasSOL = solBalance > 0;
  const hasUSDC = usdcBalance > 0;
  const hasPrime = primeBalance > 0;
  const hasSPrime = sPrimeBalance > 0;
  return {
    canBuy: hasSOL && hasUSDC,
    canSend: hasSOL && (hasUSDC || hasPrime || hasSPrime),
    canStake: hasSOL && hasPrime,
    canUnstake: hasSOL && hasSPrime,
  };
};
