import { PendingUnstake } from '@/types/staking';

export const formatStakingAmount = (amount: string | number): string => {
  const num = typeof amount === 'string' ? parseFloat(amount) : amount;
  if (isNaN(num)) return '0.00';
  
  if (num >= 1e9) {
    return (num / 1e9).toFixed(2) + 'B';
  } else if (num >= 1e6) {
    return (num / 1e6).toFixed(2) + 'M';
  } else if (num >= 1e3) {
    return (num / 1e3).toFixed(2) + 'K';
  } else {
    return num.toLocaleString('en-US', { 
      minimumFractionDigits: 2, 
      maximumFractionDigits: 6 
    });
  }
};

export const formatPercentage = (value: string | number): string => {
  const num = typeof value === 'string' ? parseFloat(value) : value;
  if (isNaN(num)) return '0.00%';
  return num.toFixed(2) + '%';
};

export const calculateStakingRewards = (
  stakedAmount: string,
  apr: string,
  period: 'daily' | 'monthly' | 'yearly' = 'yearly'
): string => {
  const amount = parseFloat(stakedAmount);
  const annualRate = parseFloat(apr) / 100;
  
  if (isNaN(amount) || isNaN(annualRate)) return '0';
  
  switch (period) {
    case 'daily':
      return (amount * annualRate / 365).toFixed(6);
    case 'monthly':
      return (amount * annualRate / 12).toFixed(6);
    case 'yearly':
      return (amount * annualRate).toFixed(6);
    default:
      return '0';
  }
};

export const getTimeUntilClaimable = (availableAt: Date): string => {
  const now = new Date();
  const diff = availableAt.getTime() - now.getTime();
  
  if (diff <= 0) return 'Ready to claim';
  
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  
  if (days > 0) {
    return `${days}d ${hours}h`;
  } else if (hours > 0) {
    return `${hours}h ${minutes}m`;
  } else {
    return `${minutes}m`;
  }
};

export const getUnstakeProgress = (initiatedAt: Date, availableAt: Date): number => {
  const now = new Date();
  const total = availableAt.getTime() - initiatedAt.getTime();
  const elapsed = now.getTime() - initiatedAt.getTime();
  
  const progress = Math.min(Math.max(elapsed / total, 0), 1);
  return Math.round(progress * 100);
};

export const validateMinimumAmount = (amount: string, minimum: number = 0.01): boolean => {
  const num = parseFloat(amount);
  return !isNaN(num) && num >= minimum;
};

export const calculateExchangeRate = (wyldsAmount: string, swyldsAmount: string): string => {
  const wylds = parseFloat(wyldsAmount);
  const swylds = parseFloat(swyldsAmount);
  
  if (isNaN(wylds) || isNaN(swylds) || wylds === 0) return '1.0';
  
  return (swylds / wylds).toFixed(6);
};

export const estimateGasFee = (transactionType: 'stake' | 'unstake' | 'claim'): string => {
  // Mock gas estimation - replace with actual Solana fee calculation
  const baseFee = 0.000005; // SOL
  
  switch (transactionType) {
    case 'stake':
      return (baseFee * 1.2).toFixed(6); // Slightly higher for stake
    case 'unstake':
      return (baseFee * 1.1).toFixed(6);
    case 'claim':
      return baseFee.toFixed(6);
    default:
      return baseFee.toFixed(6);
  }
};

export const sortUnstakesByStatus = (unstakes: PendingUnstake[]): PendingUnstake[] => {
  return [...unstakes].sort((a, b) => {
    // Ready to claim first, then by availability date
    if (a.status === 'ready' && b.status !== 'ready') return -1;
    if (b.status === 'ready' && a.status !== 'ready') return 1;
    
    return a.availableAt.getTime() - b.availableAt.getTime();
  });
};

export const getTotalClaimableAmount = (unstakes: PendingUnstake[]): string => {
  return unstakes
    .filter(unstake => unstake.canClaim)
    .reduce((sum, unstake) => sum + parseFloat(unstake.amount), 0)
    .toString();
};

export const formatTimestamp = (date: Date): string => {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  }).format(date);
};

export const getAPRTrend = (currentAPR: string, previousAPR: string): 'up' | 'down' | 'stable' => {
  const current = parseFloat(currentAPR);
  const previous = parseFloat(previousAPR);
  
  if (isNaN(current) || isNaN(previous)) return 'stable';
  
  const threshold = 0.01; // 0.01% threshold for stability
  
  if (current > previous + threshold) return 'up';
  if (current < previous - threshold) return 'down';
  return 'stable';
};

export const calculateSlippage = (expectedOutput: string, actualOutput: string): string => {
  const expected = parseFloat(expectedOutput);
  const actual = parseFloat(actualOutput);
  
  if (isNaN(expected) || isNaN(actual) || expected === 0) return '0';
  
  const slippage = Math.abs((expected - actual) / expected) * 100;
  return slippage.toFixed(4);
};

export const isValidSolanaAddress = (address: string): boolean => {
  // Basic Solana address validation (base58, 32-44 characters)
  const base58Regex = /^[A-HJ-NP-Za-km-z1-9]+$/;
  return base58Regex.test(address) && address.length >= 32 && address.length <= 44;
};

export const formatExplorerURL = (txHash: string, network: 'mainnet' | 'devnet' = 'mainnet'): string => {
  const baseURL = network === 'mainnet' 
    ? 'https://explorer.solana.com/tx/' 
    : 'https://explorer.solana.com/tx/';
  
  const cluster = network === 'devnet' ? '?cluster=devnet' : '';
  return `${baseURL}${txHash}${cluster}`;
};