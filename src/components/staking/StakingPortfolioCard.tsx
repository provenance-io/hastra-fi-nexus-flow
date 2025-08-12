import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useStaking } from '@/hooks/useStaking';
import { useWallet } from '@/contexts/WalletContext';
import { 
  formatStakingAmount, 
  calculateStakingRewards,
  formatPercentage 
} from '@/utils/stakingUtils';
import { 
  TrendingUp, 
  Coins, 
  DollarSign, 
  Calendar,
  BarChart3,
  Zap
} from 'lucide-react';

const StakingPortfolioCard: React.FC = () => {
  const { userBalance, protocolData, pendingUnstakes } = useStaking();
  const { isConnected } = useWallet();

  if (!isConnected) {
    return null;
  }

  const stakedBalance = parseFloat(userBalance.stYLDS);
  const pendingBalance = parseFloat(pendingUnstakes.totalPending);
  const totalInStaking = stakedBalance + pendingBalance;

  const dailyRewards = calculateStakingRewards(
    userBalance.stYLDS, 
    protocolData.currentAPR, 
    'daily'
  );
  
  const monthlyRewards = calculateStakingRewards(
    userBalance.stYLDS, 
    protocolData.currentAPR, 
    'monthly'
  );

  const yearlyRewards = calculateStakingRewards(
    userBalance.stYLDS, 
    protocolData.currentAPR, 
    'yearly'
  );

  return (
    <Card className="card-gradient rounded-3xl border border-border/30 shadow-lg p-6">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-2 rounded-lg bg-hastra-teal/10 border border-hastra-teal/20">
              <BarChart3 className="h-5 w-5 text-hastra-teal" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground">
                Staking Portfolio
              </h3>
              <p className="text-sm text-muted-foreground">
                Your staking overview and rewards
              </p>
            </div>
          </div>

          <Badge className="bg-hastra-teal/10 text-hastra-teal border-hastra-teal/20">
            <TrendingUp className="h-3 w-3 mr-1" />
            {formatPercentage(protocolData.currentAPR)} APR
          </Badge>
        </div>

        {/* Main Balance Display */}
        <div className="text-center space-y-2 p-6 bg-secondary/20 rounded-2xl border border-border/20">
          <div className="space-y-1">
            <p className="text-sm text-muted-foreground">Total in Staking</p>
            <p className="text-3xl font-bold text-foreground">
              {formatStakingAmount(totalInStaking.toString())}
            </p>
            <p className="text-sm text-hastra-teal font-medium">
              stYLDS + Pending Unstakes
            </p>
          </div>
          
          <div className="text-xs text-muted-foreground">
            ≈ ${(totalInStaking * 1.0).toFixed(2)} USD
          </div>
        </div>

        {/* Balance Breakdown */}
        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 bg-secondary/20 rounded-lg border border-border/20">
            <div className="flex items-center space-x-2 mb-2">
              <Coins className="h-4 w-4 text-hastra-teal" />
              <span className="text-xs text-muted-foreground">Active Staking</span>
            </div>
            <div className="space-y-1">
              <p className="text-lg font-semibold text-foreground">
                {formatStakingAmount(userBalance.stYLDS)}
              </p>
              <p className="text-xs text-hastra-teal">stYLDS</p>
            </div>
          </div>

          <div className="p-4 bg-secondary/20 rounded-lg border border-border/20">
            <div className="flex items-center space-x-2 mb-2">
              <Calendar className="h-4 w-4 text-auburn-primary" />
              <span className="text-xs text-muted-foreground">Unstaking</span>
            </div>
            <div className="space-y-1">
              <p className="text-lg font-semibold text-foreground">
                {formatStakingAmount(pendingUnstakes.totalPending)}
              </p>
              <p className="text-xs text-auburn-primary">Pending</p>
            </div>
          </div>
        </div>

        {/* Rewards Projection */}
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <Zap className="h-4 w-4 text-amber-warm" />
            <h4 className="font-medium text-foreground">Estimated Rewards</h4>
          </div>

          <div className="grid grid-cols-3 gap-3">
            <div className="text-center p-3 bg-secondary/20 rounded-lg border border-border/20">
              <div className="text-sm font-semibold text-foreground">
                {formatStakingAmount(dailyRewards)}
              </div>
              <div className="text-xs text-muted-foreground mt-1">
                Daily
              </div>
            </div>

            <div className="text-center p-3 bg-secondary/20 rounded-lg border border-border/20">
              <div className="text-sm font-semibold text-foreground">
                {formatStakingAmount(monthlyRewards)}
              </div>
              <div className="text-xs text-muted-foreground mt-1">
                Monthly
              </div>
            </div>

            <div className="text-center p-3 bg-secondary/20 rounded-lg border border-border/20">
              <div className="text-sm font-semibold text-foreground">
                {formatStakingAmount(yearlyRewards)}
              </div>
              <div className="text-xs text-muted-foreground mt-1">
                Yearly
              </div>
            </div>
          </div>
        </div>

        {/* Protocol Stats */}
        <div className="border-t border-border/30 pt-4">
          <div className="grid grid-cols-2 gap-4 text-center">
            <div>
              <div className="text-lg font-semibold text-foreground">
                {formatStakingAmount(protocolData.totalStaked)}
              </div>
              <div className="text-xs text-muted-foreground">
                Total Protocol TVL
              </div>
            </div>

            <div>
              <div className="text-lg font-semibold text-foreground">
                {protocolData.unstakingCooldown}
              </div>
              <div className="text-xs text-muted-foreground">
                Unstaking Period
              </div>
            </div>
          </div>
        </div>

        {/* Quick Stats Footer */}
        <div className="flex items-center justify-center space-x-4 text-xs text-muted-foreground border-t border-border/30 pt-4">
          <div className="flex items-center space-x-1">
            <DollarSign className="h-3 w-3" />
            <span>Rewards compound automatically</span>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default StakingPortfolioCard;