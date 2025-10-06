import { useCallback, useEffect, useState } from "react";
import { useWallet } from "@/contexts/WalletContext";
import { useToast } from "@/hooks/use-toast";
import {
  StakingState,
  TransactionResult,
  TransactionStatus,
  ValidationError,
} from "@/types/staking";
import { useTokenPortfolio } from "@/hooks/useTokenPortfolio.ts";
import { PRIME, wYLDS } from "@/types/tokens.ts";
import { useRedeemStake, useStake, useUnbond } from "@/hooks/use-solana-tx.ts";
import {
  usePendingUnstakeQuery,
  useUnbondingPeriodConfigQuery,
} from "@/hooks/useSolanaQuery.ts";
import { usePRIMEAPR } from "./use-prime-apr";

const INITIAL_STATE: StakingState = {
  userBalance: {
    wYLDS: "0",
    PRIME: "0",
    isLoading: false,
  },
  widgetMode: "stake",
  stakingForm: {
    amount: "",
    isValid: false,
    errors: [],
    estimatedOutput: "0",
  },
  unstakingForm: {
    amount: "",
    isValid: false,
    errors: [],
    estimatedOutput: "0",
    availableDate: new Date(),
    cooldownWarning: "",
  },
  pendingUnstake: {
    data: null,
    isLoading: false,
  },
  transaction: {
    type: "stake",
    status: "idle",
  },
  protocolData: {
    currentAPR: "",
    exchangeRate: "1.0",
    totalStaked: "0",
    unstakingCooldown: "20 days",
    unstakingFee: "0",
    lastUpdated: new Date(),
  },
};

export const useStaking = () => {
  const [state, setState] = useState<StakingState>(INITIAL_STATE);
  const { isConnected, address } = useWallet();
  const { rate, loading: aprLoading, error: aprError } = usePRIMEAPR();
  const { tokens, refetchTokens } = useTokenPortfolio();
  const { invoke: invokeStake } = useStake();
  const { invoke: invokeUnbond } = useUnbond();
  const { invoke: invokeRedeem } = useRedeemStake();
  const { data: unbondingData, isLoading: unbondingLoading } =
    usePendingUnstakeQuery();
  const { data: unbondingPeriod } = useUnbondingPeriodConfigQuery();

  const { toast } = useToast();

  // Initialize protocol data
  useEffect(() => {
    const fetchProtocolData = async () => {
      try {
        // Mock API call - replace with actual implementation
        await new Promise((resolve) => setTimeout(resolve, 1000));

        setState((prev) => ({
          ...prev,
          pendingUnstake: {
            data: unbondingData || null,
            isLoading: unbondingLoading,
          },
          protocolData: {
            currentAPR: aprLoading
              ? "Loading..."
              : rate
              ? `${rate}%`
              : aprError
              ? "Error"
              : "--",
            exchangeRate: "1.0",
            totalStaked: "5000000",
            unstakingCooldown: unbondingPeriod
              ? `${Math.floor(unbondingPeriod / 86400)} days`
              : "UNKNOWN",
            unstakingFee: "0",
            lastUpdated: new Date(),
          },
        }));
      } catch (error) {
        console.error("Failed to fetch protocol data:", error);
      }
    };
    fetchProtocolData();
  }, [
    unbondingData,
    unbondingLoading,
    unbondingPeriod,
    rate,
    aprLoading,
    aprError,
  ]);

  // Update user balance
  useEffect(() => {
    if (tokens && address) {
      setState((prev) => ({
        ...prev,
        userBalance: {
          wYLDS: tokens.find((t) => t.mint === wYLDS)?.amount.toString() || "0",
          PRIME: tokens.find((t) => t.mint === PRIME)?.amount.toString() || "0",
          isLoading: false,
        },
      }));
    }
  }, [tokens, address]);

  const validateStakingAmount = useCallback(
    (amount: string): ValidationError[] => {
      const errors: ValidationError[] = [];
      const numAmount = parseFloat(amount);
      const balance = parseFloat(state.userBalance.wYLDS);

      if (!amount || isNaN(numAmount) || numAmount <= 0) {
        errors.push({
          field: "amount",
          message: "Please enter a valid amount",
          type: "invalid_input",
        });
      }

      if (numAmount > balance) {
        errors.push({
          field: "amount",
          message: "Insufficient wYLDS balance",
          type: "insufficient_balance",
        });
      }

      if (numAmount < 0.01) {
        errors.push({
          field: "amount",
          message: "Minimum stake amount is 0.01 wYLDS",
          type: "min_amount",
        });
      }

      return errors;
    },
    [state.userBalance.wYLDS]
  );

  const validateUnstakingAmount = useCallback(
    (amount: string): ValidationError[] => {
      const errors: ValidationError[] = [];
      const numAmount = parseFloat(amount);
      const balance = parseFloat(state.userBalance.PRIME);

      if (!amount || isNaN(numAmount) || numAmount <= 0) {
        errors.push({
          field: "amount",
          message: "Please enter a valid amount",
          type: "invalid_input",
        });
      }

      if (numAmount > balance) {
        errors.push({
          field: "amount",
          message: "Insufficient PRIME balance",
          type: "insufficient_balance",
        });
      }

      if (numAmount < 0.01) {
        errors.push({
          field: "amount",
          message: "Minimum unstake amount is 0.01 PRIME",
          type: "min_amount",
        });
      }

      return errors;
    },
    [state.userBalance.PRIME]
  );

  const setStakingAmount = useCallback(
    (amount: string) => {
      const errors = validateStakingAmount(amount);
      const estimatedOutput = amount
        ? (
            parseFloat(amount) * parseFloat(state.protocolData.exchangeRate)
          ).toString()
        : "0";

      setState((prev) => ({
        ...prev,
        stakingForm: {
          amount,
          isValid: errors.length === 0 && parseFloat(amount) > 0,
          errors,
          estimatedOutput,
        },
      }));
    },
    [validateStakingAmount, state.protocolData.exchangeRate]
  );

  const setUnstakingAmount = useCallback(
    (amount: string) => {
      const errors = validateUnstakingAmount(amount);
      const estimatedOutput = amount
        ? (
            parseFloat(amount) * parseFloat(state.protocolData.exchangeRate)
          ).toString()
        : "0";
      const cooldownDays = 20; // Updated to 20 days
      const availableDate = new Date(
        Date.now() + cooldownDays * 24 * 60 * 60 * 1000
      );

      setState((prev) => ({
        ...prev,
        unstakingForm: {
          amount,
          isValid: errors.length === 0 && parseFloat(amount) > 0,
          errors,
          estimatedOutput,
          availableDate,
          cooldownWarning: `Your tokens will be available to claim in ${cooldownDays} days`,
        },
      }));
    },
    [validateUnstakingAmount, state.protocolData.exchangeRate]
  );

  const setWidgetMode = useCallback((mode: "stake" | "unstake") => {
    setState((prev) => ({
      ...prev,
      widgetMode: mode,
      stakingForm: { ...prev.stakingForm, amount: "", errors: [] },
      unstakingForm: { ...prev.unstakingForm, amount: "", errors: [] },
    }));
  }, []);

  const setMaxStakeAmount = useCallback(() => {
    setStakingAmount(state.userBalance.wYLDS);
  }, [state.userBalance.wYLDS, setStakingAmount]);

  const setMaxUnstakeAmount = useCallback(() => {
    setUnstakingAmount(state.userBalance.PRIME);
  }, [state.userBalance.PRIME, setUnstakingAmount]);

  const updateTransactionStatus = useCallback(
    (status: TransactionStatus, txHash?: string, error?: string) => {
      setState((prev) => ({
        ...prev,
        transaction: {
          ...prev.transaction,
          status,
          hash: txHash,
          error,
        },
      }));
    },
    []
  );

  const executeStaking = useCallback(async (): Promise<TransactionResult> => {
    if (!state.stakingForm.isValid || !isConnected) {
      return { success: false, error: "Invalid form or wallet not connected" };
    }
    updateTransactionStatus("broadcasting");
    invokeStake(parseFloat(state.stakingForm.amount))
      .then((tx) => {
        updateTransactionStatus("success", tx.txId);
        toast({
          title: tx.success ? "🟢 Staking Successful" : "❌ Staking Failed",
          description: tx.success
            ? `Successfully staked ${state.stakingForm.amount} wYLDS`
            : `Staking of ${state.stakingForm.amount} wYLDS failed: ${tx.error}`,
          className: tx.success ? "toast-action-success" : "toast-action-error",
        });
        if (!tx.success) {
          console.error(JSON.stringify(tx));
        }

        // Reset form
        setState((prev) => ({
          ...prev,
          stakingForm: { ...prev.stakingForm, amount: "", errors: [] },
        }));
        return { success: tx.success, txHash: tx.txId };
      })
      .catch((error) => {
        updateTransactionStatus("error", undefined, error.message);
        console.error(error);
        toast({
          title: "❌ Staking Exception",
          description: error.message,
          variant: "destructive",
        });
        return { success: false, error: JSON.stringify(error) };
      })
      .finally(() => refetchTokens());
  }, [
    state.stakingForm.isValid,
    state.stakingForm.amount,
    isConnected,
    invokeStake,
    updateTransactionStatus,
    toast,
    refetchTokens,
  ]);

  const executeUnstaking = useCallback(async (): Promise<TransactionResult> => {
    if (!state.unstakingForm.isValid || !isConnected) {
      return { success: false, error: "Invalid form or wallet not connected" };
    }

    updateTransactionStatus("broadcasting");
    invokeUnbond(parseFloat(state.unstakingForm.amount))
      .then((tx) => {
        updateTransactionStatus("success", tx.txId);
        toast({
          title: tx.success ? "🟢 Unstaking Successful" : "❌ Staking Failed",
          description: tx.success
            ? `Successfully initiated unstake ${state.unstakingForm.amount} PRIME`
            : `Unstake of ${state.unstakingForm.amount} PRIME failed: ${tx.error}`,
          className: tx.success ? "toast-action-success" : "toast-action-error",
        });
        if (!tx.success) {
          console.error(JSON.stringify(tx));
        }

        // Reset form
        setState((prev) => ({
          ...prev,
          unstakingForm: { ...prev.unstakingForm, amount: "", errors: [] },
        }));
        return { success: tx.success, txHash: tx.txId };
      })
      .catch((error) => {
        updateTransactionStatus("error", undefined, error.message);
        console.error(error);
        toast({
          title: "❌ Unstaking Exception",
          description: error.message,
          variant: "destructive",
        });
        return { success: false, error: JSON.stringify(error) };
      })
      .finally(() => refetchTokens());
  }, [
    state.unstakingForm,
    isConnected,
    updateTransactionStatus,
    invokeUnbond,
    toast,
    refetchTokens,
  ]);

  const executeClaim = useCallback(async (): Promise<TransactionResult> => {
    if (!isConnected) {
      return { success: false, error: "Wallet not connected" };
    }

    updateTransactionStatus("broadcasting");

    invokeRedeem()
      .then((tx) => {
        updateTransactionStatus("success", tx.txId);
        toast({
          title: "🟢 Unstaked to wYLDS",
          description: `Successfully unstaked PRIME to wYLDS`,
          className: "toast-action-success",
        });
        if (!tx.success) {
          console.error(JSON.stringify(tx));
        }

        // Update balances: decrease PRIME, increase wYLDS
        setState((prev) => {
          const newSPRIME = 0;
          return {
            ...prev,
            userBalance: {
              ...prev.userBalance,
              PRIME: newSPRIME.toString(),
            },
            pendingUnstakes: {
              data: null,
              isLoading: false,
            },
          };
        });

        return { success: tx.success, txHash: tx.txId };
      })
      .catch((error) => {
        updateTransactionStatus("error", undefined, error.message);
        console.error(error);
        toast({
          title: "❌ Claim Exception",
          description: error.message,
          variant: "destructive",
        });
        return { success: false, error: JSON.stringify(error) };
      })
      .finally(() => refetchTokens());
  }, [
    isConnected,
    updateTransactionStatus,
    invokeRedeem,
    toast,
    refetchTokens,
  ]);

  const resetTransaction = useCallback(() => {
    setState((prev) => ({
      ...prev,
      transaction: {
        ...prev.transaction,
        status: "idle",
        hash: undefined,
        error: undefined,
      },
    }));
  }, []);

  return {
    // State
    ...state,

    // Computed values
    isTransacting:
      state.transaction.status === "signing" ||
      state.transaction.status === "broadcasting" ||
      state.transaction.status === "confirming",
    hasReadyToClaim:
      state.pendingUnstake.data && state.pendingUnstake.data.canClaim,

    transactionStatus: state.transaction.status,
    // Actions
    setStakingAmount,
    setUnstakingAmount,
    setWidgetMode,
    setMaxStakeAmount,
    setMaxUnstakeAmount,
    executeStaking,
    executeUnstaking,
    executeClaim,
    resetTransaction,
  };
};
