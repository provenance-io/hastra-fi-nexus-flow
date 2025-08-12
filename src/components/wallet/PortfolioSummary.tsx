import { DollarSign, TrendingUp, Gift, Coins, BarChart3 } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { useWallet } from "@/contexts/WalletContext.tsx";
import { useStaking } from '@/hooks/useStaking';
import { formatStakingAmount, calculateStakingRewards } from '@/utils/stakingUtils';

interface PortfolioSummaryProps {
  totalPortfolioValue: number;
  totalInterestEarned: number;
  totalUnclaimedInterest: number;
  onClaimAll: () => void;
}

const PortfolioSummary = ({
  totalPortfolioValue,
  totalInterestEarned,
  totalUnclaimedInterest,
  onClaimAll
}: PortfolioSummaryProps) => {
  const { toast } = useToast();
  const { isConnected } = useWallet();
  const { userBalance, protocolData, pendingUnstakes } = useStaking();
  
  const [isClaimAnimating, setIsClaimAnimating] = useState(false);
  const [prevClaimAmount, setPrevClaimAmount] = useState(totalUnclaimedInterest);

  // Calculate staking data
  const stakedBalance = parseFloat(userBalance.stYLDS);
  const pendingBalance = parseFloat(pendingUnstakes.totalPending);
  const totalInStaking = stakedBalance + pendingBalance;
  const stakingValue = totalInStaking * 1.0; // Assuming 1:1 USD value

  const dailyRewards = calculateStakingRewards(
    userBalance.stYLDS, 
    protocolData.currentAPR, 
    'daily'
  );

  // Trigger animation when unclaimed interest increases
  useEffect(() => {
    if (totalUnclaimedInterest > prevClaimAmount && prevClaimAmount > 0) {
      setIsClaimAnimating(true);
      const timer = setTimeout(() => setIsClaimAnimating(false), 800);
      return () => clearTimeout(timer);
    }
    setPrevClaimAmount(totalUnclaimedInterest);
  }, [totalUnclaimedInterest, prevClaimAmount]);

  const handleClaimAll = () => {
    if (totalUnclaimedInterest > 0) {
      onClaimAll();
      toast({
        title: "Successfully Claimed!",
        description: `Claimed $${totalUnclaimedInterest.toFixed(2)} in total rewards`,
      });
    }
  };

  return (
    <div className="px-6 pt-0 pb-6 space-y-6">
      {/* Main Portfolio Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Total Portfolio Value */}
        <div className="bg-background/30 rounded-xl p-4 border border-border/20 hover:border-amber-glow/15 transition-all duration-300 hover:shadow-[0_0_8px_rgba(229,218,194,0.1),0_0_15px_rgba(229,218,194,0.05)]">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 rounded-lg bg-hastra-teal/10 flex items-center justify-center">
              <DollarSign className="w-4 h-4 text-hastra-teal" />
            </div>
            <p className="text-sm text-muted-foreground font-medium">Total Portfolio Value</p>
          </div>
          <p className="text-3xl lg:text-4xl font-bold text-white mb-1">
            ${totalPortfolioValue.toLocaleString('en-US', { 
              minimumFractionDigits: 2,
              maximumFractionDigits: 2 
            })}
          </p>
        </div>
        
        {/* Total Interest Earned */}
        <div className="bg-background/30 rounded-xl p-4 border border-border/20 hover:border-amber-glow/15 transition-all duration-300 hover:shadow-[0_0_8px_rgba(229,218,194,0.1),0_0_15px_rgba(229,218,194,0.05)]">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 rounded-lg bg-green-400/10 flex items-center justify-center">
              <TrendingUp className="w-4 h-4 text-green-400" />
            </div>
            <p className="text-sm text-muted-foreground font-medium">Total Interest Earned</p>
          </div>
          <p className="text-3xl lg:text-4xl font-bold text-white mb-1">
            ${totalInterestEarned.toLocaleString('en-US', { 
              minimumFractionDigits: 2,
              maximumFractionDigits: 2 
            })}
          </p>
          <p className="text-xs text-muted-foreground">
            Lifetime earnings from APY
          </p>
        </div>

        {/* Available to Claim */}
        <div className={`bg-background/30 rounded-xl p-4 border border-border/20 hover:border-amber-glow/15 transition-all duration-300 hover:shadow-[0_0_8px_rgba(229,218,194,0.1),0_0_15px_rgba(229,218,194,0.05)] ${
          isClaimAnimating ? 'animate-claim-flash border-crypto-accent/50 bg-crypto-accent/20' : ''
        }`}>
          <div className="flex items-center gap-2 mb-3">
            <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 ${
              isClaimAnimating ? 'bg-crypto-accent/20' : 'bg-auburn-primary/10'
            }`}>
              <Gift className={`w-4 h-4 transition-colors duration-300 ${
                isClaimAnimating ? 'text-crypto-accent' : 'text-[hsl(34_100%_84%)]'
              }`} />
            </div>
            <p className="text-sm text-muted-foreground font-medium">Available to Claim</p>
          </div>
          <p className={`text-3xl lg:text-4xl font-bold transition-all duration-300 mb-1 ${
            isClaimAnimating ? 'text-crypto-accent scale-105' : 'text-white'
          }`}>
            ${totalUnclaimedInterest.toLocaleString('en-US', { 
              minimumFractionDigits: 2,
              maximumFractionDigits: 2 
            })}
          </p>
          <p className="text-xs text-muted-foreground">
            Ready for withdrawal
          </p>
        </div>
      </div>

      {/* Staking Portfolio Section - Only show if connected */}
      {isConnected && totalInStaking > 0 && (
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-6 h-6 rounded-lg bg-amber-warm/10 flex items-center justify-center">
              <BarChart3 className="w-4 h-4 text-amber-warm" />
            </div>
            <h4 className="text-lg font-semibold text-foreground">Staking Overview</h4>
            <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent flex-1 ml-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Total in Staking */}
            <div className="bg-background/30 rounded-xl p-4 border border-border/20 hover:border-amber-glow/15 transition-all duration-300">
              <div className="flex items-center gap-2 mb-2">
                <Coins className="w-4 h-4 text-amber-warm" />
                <p className="text-xs text-muted-foreground">Total in Staking</p>
              </div>
              <p className="text-xl font-bold text-white">
                {formatStakingAmount(totalInStaking.toString())}
              </p>
              <p className="text-xs text-amber-warm">stYLDS + Pending</p>
            </div>

            {/* Active Staking */}
            <div className="bg-background/30 rounded-xl p-4 border border-border/20 hover:border-amber-glow/15 transition-all duration-300">
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="w-4 h-4 text-hastra-teal" />
                <p className="text-xs text-muted-foreground">Active Staking</p>
              </div>
              <p className="text-xl font-bold text-white">
                {formatStakingAmount(userBalance.stYLDS)}
              </p>
              <p className="text-xs text-hastra-teal">{protocolData.currentAPR}% APR</p>
            </div>

            {/* Daily Rewards */}
            <div className="bg-background/30 rounded-xl p-4 border border-border/20 hover:border-amber-glow/15 transition-all duration-300">
              <div className="flex items-center gap-2 mb-2">
                <Gift className="w-4 h-4 text-green-400" />
                <p className="text-xs text-muted-foreground">Daily Rewards</p>
              </div>
              <p className="text-xl font-bold text-white">
                {formatStakingAmount(dailyRewards)}
              </p>
              <p className="text-xs text-green-400">wYLDS per day</p>
            </div>

            {/* Pending Unstakes */}
            <div className="bg-background/30 rounded-xl p-4 border border-border/20 hover:border-amber-glow/15 transition-all duration-300">
              <div className="flex items-center gap-2 mb-2">
                <Coins className="w-4 h-4 text-auburn-primary" />
                <p className="text-xs text-muted-foreground">Unstaking</p>
              </div>
              <p className="text-xl font-bold text-white">
                {formatStakingAmount(pendingUnstakes.totalPending)}
              </p>
              <p className="text-xs text-auburn-primary">7-day cooldown</p>
            </div>
          </div>
        </div>
      )}
      
      {/* Claim All Button - Outside of the cards */}
      {totalUnclaimedInterest > 0 && (
        <div className="flex justify-center pt-2">
          <Button
            size="default"
            variant="secondary"
            onClick={handleClaimAll}
            className="px-6 py-2"
          >
            Claim All
          </Button>
        </div>
      )}
    </div>
  );
};

export default PortfolioSummary;