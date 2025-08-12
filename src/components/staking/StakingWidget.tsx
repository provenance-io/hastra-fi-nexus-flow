import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useStaking } from '@/hooks/useStaking';
import { useWallet } from '@/contexts/WalletContext';
import StakingMode from './StakingMode';
import UnstakingMode from './UnstakingMode';
import TransactionProgress from './TransactionProgress';
import APRDisplay from './APRDisplay';
import { Coins, TrendingUp } from 'lucide-react';

const StakingWidget: React.FC = () => {
  const { isConnected, connectWallet } = useWallet();
  const {
    protocolData,
    transaction,
    resetTransaction,
  } = useStaking();

  if (!isConnected) {
    return (
      <Card className="bg-background/30 rounded-xl border border-border/20 hover:border-amber-glow/15 transition-all duration-300 hover:shadow-[0_0_8px_rgba(229,218,194,0.1),0_0_15px_rgba(229,218,194,0.05)] p-6 md:p-8">
        <div className="text-center space-y-6">
          <div className="flex items-center justify-center">
            <div className="p-4 rounded-full bg-amber-warm/10 border border-amber-warm/20">
              <Coins className="h-8 w-8 text-amber-warm" />
            </div>
          </div>
          
          <div className="space-y-3">
            <h3 className="text-xl font-semibold text-foreground">
              Connect Wallet to Stake
            </h3>
            <p className="text-muted-foreground max-w-md mx-auto">
              Connect your wallet to start earning {protocolData.currentAPR}% APR by staking wYLDS tokens
            </p>
          </div>
          
          <Button 
            onClick={connectWallet}
            size="lg"
            variant="secondary"
            className="tracking-widest"
          >
            Connect Wallet
          </Button>
        </div>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="p-2 rounded-lg bg-amber-warm/10 border border-amber-warm/20">
            <TrendingUp className="h-5 w-5 text-amber-warm" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-foreground">
              Get swYLDS
            </h3>
            <p className="text-sm text-muted-foreground">
              Earn staking yield on your wYLDS tokens
            </p>
          </div>
        </div>
        
        <APRDisplay 
          currentAPR={protocolData.currentAPR}
          aprTrend="up"
          dataSource="Based on last 7 days"
          tooltipContent="Annual Percentage Rate based on current staking rewards and total staked amount"
        />
      </div>

      {/* Side by Side Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Stake Card */}
        <Card className="bg-background/30 rounded-xl border border-border/20 hover:border-amber-glow/15 transition-all duration-300 hover:shadow-[0_0_8px_rgba(229,218,194,0.1),0_0_15px_rgba(229,218,194,0.05)] p-6 animate-fade-in">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="p-2 rounded-lg bg-amber-warm/10 border border-amber-warm/20">
                <TrendingUp className="h-4 w-4 text-amber-warm" />
              </div>
              <h4 className="text-lg font-semibold text-foreground">Stake</h4>
            </div>
            <StakingMode />
          </div>
        </Card>

        {/* Unstake Card */}
        <Card className="bg-background/30 rounded-xl border border-border/20 hover:border-amber-glow/15 transition-all duration-300 hover:shadow-[0_0_8px_rgba(229,218,194,0.1),0_0_15px_rgba(229,218,194,0.05)] p-6 animate-fade-in">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="p-2 rounded-lg bg-auburn-primary/10 border border-auburn-primary/20">
                <Coins className="h-4 w-4 text-[hsl(34_100%_84%)]" />
              </div>
              <h4 className="text-lg font-semibold text-foreground">Unstake</h4>
            </div>
            <UnstakingMode />
          </div>
        </Card>
      </div>

      {/* Transaction Progress */}
      <TransactionProgress
        isVisible={transaction.status !== 'idle'}
        mode={transaction.type}
        stage={transaction.status}
        txHash={transaction.hash}
        error={transaction.error}
        onClose={resetTransaction}
      />
    </div>
  );
};

export default StakingWidget;