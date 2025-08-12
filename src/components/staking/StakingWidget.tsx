import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
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
    widgetMode,
    setWidgetMode,
    isTransacting,
    protocolData,
    transaction,
    resetTransaction,
  } = useStaking();

  if (!isConnected) {
    return (
      <Card className="card-gradient rounded-3xl border border-border/30 shadow-lg p-6 md:p-8">
        <div className="text-center space-y-6">
          <div className="flex items-center justify-center">
            <div className="p-4 rounded-full bg-hastra-teal/10 border border-hastra-teal/20">
              <Coins className="h-8 w-8 text-hastra-teal" />
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
            className="btn-hastra px-8 py-3 text-lg"
          >
            Connect Wallet
          </Button>
        </div>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      <Card className="card-gradient rounded-3xl border border-border/30 shadow-lg p-6 md:p-8">
        <div className="space-y-6">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="p-2 rounded-lg bg-hastra-teal/10 border border-hastra-teal/20">
                <TrendingUp className="h-5 w-5 text-hastra-teal" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground">
                  Stake wYLDS
                </h3>
                <p className="text-sm text-muted-foreground">
                  Earn staking rewards on your wYLDS tokens
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

          {/* Mode Toggle */}
          <Tabs 
            value={widgetMode} 
            onValueChange={(value) => setWidgetMode(value as 'stake' | 'unstake')}
            className="w-full"
          >
            <TabsList className="grid w-full grid-cols-2 bg-secondary/50">
              <TabsTrigger 
                value="stake" 
                disabled={isTransacting}
                className="data-[state=active]:bg-hastra-teal data-[state=active]:text-white"
              >
                Stake
              </TabsTrigger>
              <TabsTrigger 
                value="unstake" 
                disabled={isTransacting}
                className="data-[state=active]:bg-auburn-primary data-[state=active]:text-white"
              >
                Unstake
              </TabsTrigger>
            </TabsList>

            <TabsContent value="stake" className="mt-6">
              <StakingMode />
            </TabsContent>

            <TabsContent value="unstake" className="mt-6">
              <UnstakingMode />
            </TabsContent>
          </Tabs>
        </div>
      </Card>

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