import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useStaking } from '@/hooks/useStaking';
import { formatStakingAmount, estimateGasFee } from '@/utils/stakingUtils';
import { ArrowRight, Wallet, TrendingUp } from 'lucide-react';

const StakingMode: React.FC = () => {
  const {
    userBalance,
    stakingForm,
    protocolData,
    setStakingAmount,
    setMaxStakeAmount,
    executeStaking,
    isTransacting,
  } = useStaking();

  const estimatedGas = estimateGasFee('stake');

  return (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-4">
        <div className="text-center p-3 bg-secondary/20 rounded-lg border border-border/20">
          <div className="text-lg font-semibold text-amber-warm">
            {protocolData.currentAPR}%
          </div>
          <div className="text-xs text-muted-foreground">
            Current APR
          </div>
        </div>
        <div className="text-center p-3 bg-secondary/20 rounded-lg border border-border/20">
          <div className="text-lg font-semibold text-foreground">
            {formatStakingAmount(protocolData.totalStaked)}
          </div>
          <div className="text-xs text-muted-foreground">
            Total Staked
          </div>
        </div>
      </div>

      {/* Balance Display */}
      <div className="flex items-center justify-between p-4 bg-secondary/30 rounded-lg border border-border/30">
        <div className="flex items-center space-x-2">
          <Wallet className="h-4 w-4 text-muted-foreground" />
          <span className="text-sm text-muted-foreground">Available Balance</span>
        </div>
        <div className="text-right">
          <div className="font-semibold text-foreground">
            {formatStakingAmount(userBalance.wYLDS)} wYLDS
          </div>
          <div className="text-xs text-muted-foreground">
            ${(parseFloat(userBalance.wYLDS) * 1.0).toFixed(2)}
          </div>
        </div>
      </div>

      {/* Staking Input */}
      <div className="bg-background/30 rounded-2xl border border-border/20 p-6 space-y-6">
        <div className="space-y-4">
          <Label htmlFor="stake-amount" className="text-base md:text-sm font-semibold text-foreground font-sans">
            Amount to Stake
          </Label>
          <div className="relative">
            <Input
              id="stake-amount"
              type="number"
              placeholder="0.00"
              value={stakingForm.amount}
              onChange={(e) => setStakingAmount(e.target.value)}
              className="bg-muted/50 h-12 md:h-auto text-base md:text-sm font-sans pr-24 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              disabled={isTransacting}
            />
            <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center space-x-2">
              <Button
                type="button"
                variant="ghost"
                size="sm"
                onClick={setMaxStakeAmount}
                disabled={isTransacting}
                className="h-8 md:h-7 text-sm md:text-xs px-3 md:px-2 font-sans text-muted-foreground hover:text-auburn-primary"
              >
                MAX
              </Button>
              <span className="text-sm text-muted-foreground">wYLDS</span>
            </div>
          </div>
          
          {/* Error Messages */}
          {stakingForm.errors.length > 0 && (
            <div className="space-y-1">
              {stakingForm.errors.map((error, index) => (
                <p key={index} className="text-xs text-destructive">
                  {error.message}
                </p>
              ))}
            </div>
          )}
        </div>

        {/* Exchange Preview */}
        {stakingForm.amount && parseFloat(stakingForm.amount) > 0 && (
          <Card className="p-4 bg-secondary/20 border border-border/30">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">You will receive</span>
                <div className="flex items-center space-x-2">
                  <TrendingUp className="h-4 w-4 text-amber-warm" />
                  <span className="text-sm font-medium text-amber-warm">
                    ~{formatStakingAmount(stakingForm.estimatedOutput)} swYLDS
                  </span>
                </div>
              </div>
              
              <div className="flex items-center justify-center py-2">
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <span>{formatStakingAmount(stakingForm.amount)} wYLDS</span>
                  <ArrowRight className="h-4 w-4" />
                  <span>{formatStakingAmount(stakingForm.estimatedOutput)} swYLDS</span>
                </div>
              </div>

              <div className="border-t border-border/30 pt-3 space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="text-muted-foreground">Exchange Rate</span>
                  <span className="font-medium">1 wYLDS = {protocolData.exchangeRate} swYLDS</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-muted-foreground">Estimated Gas Fee</span>
                  <span className="font-medium">~{estimatedGas} SOL</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-muted-foreground">APR</span>
                  <span className="font-medium text-amber-warm">{protocolData.currentAPR}%</span>
                </div>
              </div>
            </div>
          </Card>
        )}

        {/* Stake Button */}
        <Button
          onClick={executeStaking}
          disabled={!stakingForm.isValid || isTransacting}
          size="lg"
          variant="secondary"
          className="w-full px-6 py-4 md:py-3 text-base md:text-sm font-medium font-sans rounded-xl min-w-[200px] group"
        >
          {isTransacting ? (
            <>
              <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent mr-2" />
              Processing...
            </>
          ) : (
            <>
              Stake {stakingForm.amount || '0'} wYLDS
              <ArrowRight className="ml-2 h-4 w-4" />
            </>
          )}
        </Button>

      </div>
    </div>
  );
};

export default StakingMode;