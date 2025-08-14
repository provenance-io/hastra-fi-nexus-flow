import { useState, useCallback, useEffect } from 'react';
import { useWallet } from '@/contexts/WalletContext';
import { useToast } from '@/hooks/use-toast';
import {
  StakingState,
  ValidationError,
  PendingUnstake,
  TransactionResult,
  ProtocolMetrics,
  TransactionStatus,
  StakingTransaction,
  RewardsData
} from '@/types/staking';

const INITIAL_STATE: StakingState = {
  userBalance: {
    wYLDS: '0',
    swYLDS: '0',
    isLoading: false,
  },
  widgetMode: 'stake',
  stakingForm: {
    amount: '',
    isValid: false,
    errors: [],
    estimatedOutput: '0',
  },
  unstakingForm: {
    amount: '',
    isValid: false,
    errors: [],
    estimatedOutput: '0',
    availableDate: new Date(),
    cooldownWarning: '',
  },
  pendingUnstakes: {
    list: [],
    totalPending: '0',
    totalReadyToClaim: '0',
    isLoading: false,
  },
  transaction: {
    type: 'stake',
    status: 'idle',
  },
  protocolData: {
    currentAPR: '9.2',
    exchangeRate: '1.0',
    totalStaked: '0',
    unstakingCooldown: '20 days',
    unstakingFee: '0',
    lastUpdated: new Date(),
  },
};

export const useStaking = () => {
  const [state, setState] = useState<StakingState>(INITIAL_STATE);
  const { isConnected, address, yieldBalance, refreshBalance } = useWallet();
  const { toast } = useToast();

  // Mock data for development - replace with actual API calls
  const mockProtocolData: ProtocolMetrics = {
    currentAPR: '9.2',
    totalStaked: '1,247,893',
    exchangeRate: '1.0',
    unstakingCooldown: '20 days',
    unstakingFee: '0',
    totalUsers: 3420,
  };

  const mockPendingUnstakes: PendingUnstake[] = [
    {
      id: '1',
      amount: '50.0',
      initiatedAt: new Date(Date.now() - 22 * 24 * 60 * 60 * 1000), // 22 days ago
      availableAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000), // 2 days ago (ready)
      status: 'ready',
      canClaim: true,
      canCancel: false,
    },
    {
      id: '2',
      amount: '50.0',
      initiatedAt: new Date(Date.now() - 21 * 24 * 60 * 60 * 1000), // 21 days ago
      availableAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000), // 1 day ago (ready)
      status: 'ready',
      canClaim: true,
      canCancel: false,
    },
    {
      id: '3',
      amount: '100.0',
      initiatedAt: new Date(Date.now() - 15 * 24 * 60 * 60 * 1000), // 15 days ago
      availableAt: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000), // 5 days from now
      status: 'pending',
      canClaim: false,
      canCancel: true,
    },
  ];

  // Initialize protocol data
  useEffect(() => {
    const fetchProtocolData = async () => {
      try {
        // Mock API call - replace with actual implementation
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        setState(prev => ({
          ...prev,
          protocolData: {
            ...mockProtocolData,
            lastUpdated: new Date(),
          },
          pendingUnstakes: {
            ...prev.pendingUnstakes,
            list: mockPendingUnstakes,
            totalPending: mockPendingUnstakes
              .reduce((sum, u) => sum + parseFloat(u.amount), 0)
              .toString(),
            totalReadyToClaim: mockPendingUnstakes
              .filter(u => u.status === 'ready')
              .reduce((sum, u) => sum + parseFloat(u.amount), 0)
              .toString(),
          },
        }));
      } catch (error) {
        console.error('Failed to fetch protocol data:', error);
      }
    };

    fetchProtocolData();
  }, []);

  // Update user balance
  useEffect(() => {
    if (isConnected && address) {
      setState(prev => ({
        ...prev,
        userBalance: {
          wYLDS: yieldBalance?.toString() || '0',
          swYLDS: '200.0', // Mock swYLDS balance (reflects pending unstakes)
          isLoading: false,
        },
      }));
    }
  }, [isConnected, address, yieldBalance]);

  const validateStakingAmount = useCallback((amount: string): ValidationError[] => {
    const errors: ValidationError[] = [];
    const numAmount = parseFloat(amount);
    const balance = parseFloat(state.userBalance.wYLDS);

    if (!amount || isNaN(numAmount) || numAmount <= 0) {
      errors.push({
        field: 'amount',
        message: 'Please enter a valid amount',
        type: 'invalid_input',
      });
    }

    if (numAmount > balance) {
      errors.push({
        field: 'amount',
        message: 'Insufficient wYLDS balance',
        type: 'insufficient_balance',
      });
    }

    if (numAmount < 0.01) {
      errors.push({
        field: 'amount',
        message: 'Minimum stake amount is 0.01 wYLDS',
        type: 'min_amount',
      });
    }

    return errors;
  }, [state.userBalance.wYLDS]);

  const validateUnstakingAmount = useCallback((amount: string): ValidationError[] => {
    const errors: ValidationError[] = [];
    const numAmount = parseFloat(amount);
    const balance = parseFloat(state.userBalance.swYLDS);

    if (!amount || isNaN(numAmount) || numAmount <= 0) {
      errors.push({
        field: 'amount',
        message: 'Please enter a valid amount',
        type: 'invalid_input',
      });
    }

    if (numAmount > balance) {
      errors.push({
        field: 'amount',
        message: 'Insufficient swYLDS balance',
        type: 'insufficient_balance',
      });
    }

    if (numAmount < 0.01) {
      errors.push({
        field: 'amount',
        message: 'Minimum unstake amount is 0.01 swYLDS',
        type: 'min_amount',
      });
    }

    return errors;
  }, [state.userBalance.swYLDS]);

  const setStakingAmount = useCallback((amount: string) => {
    const errors = validateStakingAmount(amount);
    const estimatedOutput = amount ? (parseFloat(amount) * parseFloat(state.protocolData.exchangeRate)).toString() : '0';

    setState(prev => ({
      ...prev,
      stakingForm: {
        amount,
        isValid: errors.length === 0 && parseFloat(amount) > 0,
        errors,
        estimatedOutput,
      },
    }));
  }, [validateStakingAmount, state.protocolData.exchangeRate]);

  const setUnstakingAmount = useCallback((amount: string) => {
    const errors = validateUnstakingAmount(amount);
    const estimatedOutput = amount ? (parseFloat(amount) * parseFloat(state.protocolData.exchangeRate)).toString() : '0';
    const cooldownDays = 20; // Updated to 20 days
    const availableDate = new Date(Date.now() + cooldownDays * 24 * 60 * 60 * 1000);

    setState(prev => ({
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
  }, [validateUnstakingAmount, state.protocolData.exchangeRate]);

  const setWidgetMode = useCallback((mode: 'stake' | 'unstake') => {
    setState(prev => ({
      ...prev,
      widgetMode: mode,
      stakingForm: { ...prev.stakingForm, amount: '', errors: [] },
      unstakingForm: { ...prev.unstakingForm, amount: '', errors: [] },
    }));
  }, []);

  const setMaxStakeAmount = useCallback(() => {
    setStakingAmount(state.userBalance.wYLDS);
  }, [state.userBalance.wYLDS, setStakingAmount]);

  const setMaxUnstakeAmount = useCallback(() => {
    setUnstakingAmount(state.userBalance.swYLDS);
  }, [state.userBalance.swYLDS, setUnstakingAmount]);

  const updateTransactionStatus = useCallback((status: TransactionStatus, txHash?: string, error?: string) => {
    setState(prev => ({
      ...prev,
      transaction: {
        ...prev.transaction,
        status,
        hash: txHash,
        error,
      },
    }));
  }, []);

  const executeStaking = useCallback(async (): Promise<TransactionResult> => {
    if (!state.stakingForm.isValid || !isConnected) {
      return { success: false, error: 'Invalid form or wallet not connected' };
    }

    try {
      updateTransactionStatus('preparing');
      
      // Mock transaction execution - replace with actual Solana transaction
      await new Promise(resolve => setTimeout(resolve, 1000));
      updateTransactionStatus('signing');
      
      await new Promise(resolve => setTimeout(resolve, 1500));
      updateTransactionStatus('broadcasting');
      
      await new Promise(resolve => setTimeout(resolve, 2000));
      updateTransactionStatus('confirming');
      
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      const mockTxHash = 'mock_tx_hash_' + Date.now();
      updateTransactionStatus('success', mockTxHash);

      toast({
        title: "🟢 Staking Successful",
        description: `Successfully staked ${state.stakingForm.amount} wYLDS`,
        className: "toast-action-success",
      });

      // Reset form
      setState(prev => ({
        ...prev,
        stakingForm: { ...prev.stakingForm, amount: '', errors: [] },
      }));

      return { success: true, txHash: mockTxHash };
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Transaction failed';
      updateTransactionStatus('error', undefined, errorMessage);
      
      toast({
        title: "❌ Staking Failed",
        description: errorMessage,
        variant: "destructive",
      });

      return { success: false, error: errorMessage };
    }
  }, [state.stakingForm, isConnected, updateTransactionStatus, toast]);

  const executeUnstaking = useCallback(async (): Promise<TransactionResult> => {
    if (!state.unstakingForm.isValid || !isConnected) {
      return { success: false, error: 'Invalid form or wallet not connected' };
    }

    try {
      updateTransactionStatus('preparing');
      
      // Mock transaction execution
      await new Promise(resolve => setTimeout(resolve, 1000));
      updateTransactionStatus('signing');
      
      await new Promise(resolve => setTimeout(resolve, 1500));
      updateTransactionStatus('broadcasting');
      
      await new Promise(resolve => setTimeout(resolve, 2000));
      updateTransactionStatus('confirming');
      
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      const mockTxHash = 'mock_unstake_tx_' + Date.now();
      const mockUnstakeId = 'unstake_' + Date.now();
      updateTransactionStatus('success', mockTxHash);

      toast({
        title: "🟡 Unstaking Initiated",
        description: `Unstaking ${state.unstakingForm.amount} swYLDS. Available in 20 days.`,
        className: "toast-action-warning",
      });

      // Reset form
      setState(prev => ({
        ...prev,
        unstakingForm: { ...prev.unstakingForm, amount: '', errors: [] },
      }));

      return { success: true, txHash: mockTxHash, unstakeId: mockUnstakeId };
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Transaction failed';
      updateTransactionStatus('error', undefined, errorMessage);
      
      toast({
        title: "❌ Unstaking Failed",
        description: errorMessage,
        variant: "destructive",
      });

      return { success: false, error: errorMessage };
    }
  }, [state.unstakingForm, isConnected, updateTransactionStatus, toast]);

  const executeClaim = useCallback(async (unstakeIds: string[]): Promise<TransactionResult> => {
    if (!isConnected) {
      return { success: false, error: 'Wallet not connected' };
    }

    try {
      updateTransactionStatus('preparing');
      
      // Calculate total amount being claimed
      const unstakesToClaim = state.pendingUnstakes.list.filter(u => unstakeIds.includes(u.id));
      const totalClaimedAmount = unstakesToClaim.reduce((sum, u) => sum + parseFloat(u.amount), 0);
      
      // Mock claim execution
      await new Promise(resolve => setTimeout(resolve, 1000));
      updateTransactionStatus('signing');
      
      await new Promise(resolve => setTimeout(resolve, 1500));
      updateTransactionStatus('broadcasting');
      
      await new Promise(resolve => setTimeout(resolve, 2000));
      updateTransactionStatus('confirming');
      
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      const mockTxHash = 'mock_claim_tx_' + Date.now();
      updateTransactionStatus('success', mockTxHash);

      // Update balances: decrease swYLDS, increase wYLDS
      setState(prev => {
        const currentSwYLDS = parseFloat(prev.userBalance.swYLDS);
        const newSwYLDS = Math.max(0, currentSwYLDS - totalClaimedAmount);
        
        // Remove claimed unstakes from pending list
        const remainingUnstakes = prev.pendingUnstakes.list.filter(u => !unstakeIds.includes(u.id));
        
        return {
          ...prev,
          userBalance: {
            ...prev.userBalance,
            swYLDS: newSwYLDS.toString(),
          },
          pendingUnstakes: {
            ...prev.pendingUnstakes,
            list: remainingUnstakes,
            totalPending: remainingUnstakes
              .reduce((sum, u) => sum + parseFloat(u.amount), 0)
              .toString(),
            totalReadyToClaim: remainingUnstakes
              .filter(u => u.status === 'ready')
              .reduce((sum, u) => sum + parseFloat(u.amount), 0)
              .toString(),
          },
        };
      });

      // Refresh wYLDS balance from wallet context
      refreshBalance();
      
      toast({
        title: "🟢 Unstaked to wYLDS",
        description: `Successfully unstaked ${totalClaimedAmount} swYLDS to wYLDS`,
        className: "toast-action-success",
      });

      return { success: true, txHash: mockTxHash };
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unstaking failed';
      updateTransactionStatus('error', undefined, errorMessage);
      
      toast({
        title: "❌ Unstaking Failed",
        description: errorMessage,
        variant: "destructive",
      });

      return { success: false, error: errorMessage };
    }
  }, [isConnected, updateTransactionStatus, toast, state.pendingUnstakes.list]);

  const resetTransaction = useCallback(() => {
    setState(prev => ({
      ...prev,
      transaction: {
        ...prev.transaction,
        status: 'idle',
        hash: undefined,
        error: undefined,
      },
    }));
  }, []);

  return {
    // State
    ...state,
    
    // Computed values
    isTransacting: state.transaction.status !== 'idle',
    hasReadyToClaim: parseFloat(state.pendingUnstakes.totalReadyToClaim) > 0,
    
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