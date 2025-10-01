export interface StakingState {
  // User Data
  userBalance: {
    PRIME: string;
    sPRIME: string;
    isLoading: boolean;
  };

  // Widget Mode
  widgetMode: "stake" | "unstake";

  // Staking Form
  stakingForm: {
    amount: string;
    isValid: boolean;
    errors: ValidationError[];
    estimatedOutput: string;
  };

  // Unstaking Form
  unstakingForm: {
    amount: string;
    isValid: boolean;
    errors: ValidationError[];
    estimatedOutput: string;
    availableDate: Date;
    cooldownWarning: string;
  };

  // Pending Unstake
  pendingUnstake: {
    data: PendingUnstake | null;
    isLoading: boolean;
  };

  // Transaction
  transaction: {
    type: "stake" | "unstake" | "claim";
    status: TransactionStatus;
    hash?: string;
    error?: string;
    gasEstimate?: string;
  };

  // Protocol Data
  protocolData: {
    currentAPR: string;
    exchangeRate: string;
    totalStaked: string;
    unstakingCooldown: string;
    unstakingFee: string;
    lastUpdated: Date;
  };
}

export interface ValidationError {
  field: string;
  message: string;
  type:
    | "insufficient_balance"
    | "min_amount"
    | "invalid_input"
    | "network_error";
}

export interface ValidationWarning {
  message: string;
  type: "cooldown" | "fee" | "slippage";
}

export interface PendingUnstake {
  id: string;
  amount: string;
  initiatedAt: Date;
  availableAt: Date;
  status: "pending" | "ready" | "claimed";
  canClaim: boolean;
  canCancel: boolean;
}

export interface StakingTransaction {
  id: string;
  type: "stake" | "unstake" | "claim";
  amount: string;
  txHash: string;
  timestamp: Date;
  status: "pending" | "confirmed" | "failed";
}

export interface ProtocolMetrics {
  currentAPR: string;
  totalStaked: string;
  exchangeRate: string;
  unstakingCooldown: string;
  unstakingFee: string;
  totalUsers: number;
}

export interface TransactionEstimate {
  gasFee: string;
  estimatedOutput: string;
  slippage: string;
  estimatedTime: string;
}

export interface PreparedTransaction {
  transaction: any; // Solana Transaction object
  signers: any[];
  estimate: TransactionEstimate;
}

export interface TransactionResult {
  success: boolean;
  txHash?: string;
  error?: string;
  unstakeId?: string; // For unstaking transactions
}

export type TransactionStatus =
  | "idle"
  | "preparing"
  | "signing"
  | "broadcasting"
  | "confirming"
  | "success"
  | "error";

export interface UserBalance {
  PRIME: string;
  sPRIME: string;
  isLoading: boolean;
}

export interface UnstakingInfo {
  cooldownPeriod: string;
  fees: string;
  process: string[];
  limitations: string[];
}

export interface FAQ {
  question: string;
  answer: string;
  category: "staking" | "unstaking" | "rewards" | "security";
}

export interface RiskItem {
  title: string;
  description: string;
  severity: "low" | "medium" | "high";
}

export interface HelpLink {
  title: string;
  url: string;
  description: string;
}

export interface RewardsData {
  totalRewards: string;
  dailyRewards: string;
  monthlyRewards: string;
  history: RewardEntry[];
}

export interface RewardEntry {
  date: Date;
  amount: string;
  apr: string;
}
