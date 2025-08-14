import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { useStaking } from '@/hooks/useStaking';
import { 
  formatStakingAmount, 
  getTimeUntilClaimable, 
  getUnstakeProgress,
  formatTimestamp,
  sortUnstakesByStatus 
} from '@/utils/stakingUtils';
import { Clock, CheckCircle, ArrowRight, Timer, ChevronDown, ChevronUp } from 'lucide-react';
import CountdownTimer from './CountdownTimer';

const PendingUnstakesCard: React.FC = () => {
  const [showDetails, setShowDetails] = useState(false);
  const {
    pendingUnstakes,
    executeClaim,
    hasReadyToClaim,
    isTransacting,
  } = useStaking();

  const sortedUnstakes = sortUnstakesByStatus(pendingUnstakes.list);
  const readyToClaim = sortedUnstakes.filter(unstake => unstake.canClaim);

  if (pendingUnstakes.list.length === 0) {
    return (
      <Card className="bg-background/30 rounded-xl border border-border/20 hover:border-amber-glow/15 transition-all duration-300 hover:shadow-[0_0_8px_rgba(229,218,194,0.1),0_0_15px_rgba(229,218,194,0.05)] p-6">
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center">
            <Timer className="h-5 w-5 text-muted-foreground" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-2">
              No Pending Unstakes
            </h3>
            <p className="text-sm text-muted-foreground">
              Your unstaking requests will appear here during the cooldown period
            </p>
          </div>
        </div>
      </Card>
    );
  }

  const handleClaimAll = async () => {
    const claimableIds = readyToClaim.map(unstake => unstake.id);
    await executeClaim(claimableIds);
  };

  const handleClaimSingle = async (unstakeId: string) => {
    await executeClaim([unstakeId]);
  };

  return (
    <Card className="bg-background/30 rounded-xl border border-border/20 hover:border-amber-glow/15 transition-all duration-300 hover:shadow-[0_0_8px_rgba(229,218,194,0.1),0_0_15px_rgba(229,218,194,0.05)] p-6">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="text-sm text-muted-foreground">
            {pendingUnstakes.list.length} active unstaking request{pendingUnstakes.list.length !== 1 ? 's' : ''}
          </div>

          <div className="flex items-center gap-3">
            {/* Summary Stats */}
            <div className="text-right space-y-1">
              <div className="text-sm font-semibold text-foreground">
                {formatStakingAmount(pendingUnstakes.totalPending)} swYLDS
              </div>
              <div className="text-xs text-muted-foreground">
                Total Pending
              </div>
            </div>
            
            {/* Toggle Button */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowDetails(!showDetails)}
              className="text-muted-foreground hover:text-auburn-primary p-2 rounded-xl hover:bg-auburn-primary/10 transition-all duration-200"
            >
              {showDetails ? (
                <ChevronUp className="w-4 h-4 text-foreground" />
              ) : (
                <ChevronDown className="w-4 h-4 text-foreground" />
              )}
            </Button>
          </div>
        </div>

        {/* Claim All Button */}
        {hasReadyToClaim && (
          <div className="p-4 bg-background/30 rounded-xl border border-border/20 hover:border-amber-glow/15 transition-all duration-300 hover:shadow-[0_0_8px_rgba(229,218,194,0.1),0_0_15px_rgba(229,218,194,0.05)]">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <div>
                  <p className="text-sm font-medium text-green-500">
                    {formatStakingAmount(pendingUnstakes.totalReadyToClaim)} swYLDS
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {readyToClaim.length} unstake{readyToClaim.length !== 1 ? 's' : ''} completed cooldown
                  </p>
                </div>
              </div>
              
              <Button
                onClick={handleClaimAll}
                disabled={isTransacting}
                size="default"
                variant="secondary"
                className="px-4 py-2 text-sm font-medium font-sans rounded-lg"
              >
                      {isTransacting ? (
                        <>
                          <div className="animate-spin rounded-full h-3 w-3 border-2 border-white border-t-transparent mr-2" />
                          Unstaking...
                        </>
                      ) : (
                        <>
                          Unstake all to wYLDS
                          <ArrowRight className="ml-2 h-3 w-3" />
                        </>
                      )}
              </Button>
            </div>
          </div>
        )}

        {/* Individual Unstakes List - Only show when expanded */}
        {showDetails && (
        <div className="space-y-3">
          <div className="flex items-center justify-between text-sm text-muted-foreground border-b border-border/30 pb-2 mb-4">
            <span>Individual Unstakes</span>
            <span>{sortedUnstakes.length} unstake{sortedUnstakes.length !== 1 ? 's' : ''} contributing to total</span>
          </div>
          
          {sortedUnstakes.map((unstake) => {
            const progress = getUnstakeProgress(unstake.initiatedAt, unstake.availableAt);
            const timeRemaining = getTimeUntilClaimable(unstake.availableAt);
            const isReady = unstake.canClaim;

            return (
              <div
                key={unstake.id}
                className="relative border-l-2 border-auburn-primary/30 pl-4 ml-2 p-4 bg-background/30 rounded-xl border border-border/20 hover:border-amber-glow/15 transition-all duration-300 hover:shadow-[0_0_8px_rgba(229,218,194,0.1),0_0_15px_rgba(229,218,194,0.05)]"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    {isReady ? (
                      <CheckCircle className="h-4 w-4 text-green-500" />
                    ) : (
                      <Clock className="h-4 w-4 text-auburn-primary" />
                    )}
                    <div>
                      <p className="font-medium text-foreground">
                        {formatStakingAmount(unstake.amount)} swYLDS
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Initiated {formatTimestamp(unstake.initiatedAt)}
                      </p>
                    </div>
                  </div>

                  {!isReady && (
                    <div className="text-right">
                      <span className="text-sm text-muted-foreground">
                        {timeRemaining}
                      </span>
                    </div>
                  )}
                </div>

                {/* Progress Bar and Timer */}
                {!isReady && (
                  <div className="space-y-3">
                    <div className="space-y-2">
                      <Progress value={progress} className="h-1" />
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <span>Cooldown Progress</span>
                        <span>{progress}%</span>
                      </div>
                    </div>
                    {/* Live Countdown Timer */}
                    <CountdownTimer 
                      targetDate={unstake.availableAt}
                      className="justify-center"
                    />
                  </div>
                )}

                {/* Individual Claim Button for Ready Items */}
                {isReady && (
                  <div className="mt-3 flex justify-end">
                    <Button
                      onClick={() => handleClaimSingle(unstake.id)}
                      disabled={isTransacting}
                      size="sm"
                      variant="secondary"
                      className="px-3 py-1.5 text-xs font-medium font-sans rounded-lg"
                    >
                      {isTransacting ? (
                        <>
                          <div className="animate-spin rounded-full h-3 w-3 border-2 border-white border-t-transparent mr-1" />
                          Unstaking...
                        </>
                      ) : (
                        <>
                          Unstake to wYLDS
                          <ArrowRight className="ml-1 h-2.5 w-2.5" />
                        </>
                      )}
                    </Button>
                  </div>
                )}

                {/* Available Date */}
                {!isReady && (
                  <div className="mt-3 text-xs text-muted-foreground">
                    Available: {formatTimestamp(unstake.availableAt)}
                  </div>
                )}
              </div>
            );
          })}
        </div>
        )}

        {/* Info Footer - Always visible */}
        <div className="text-center text-xs text-muted-foreground border-t border-border/30 pt-4">
          Tokens become claimable after the 20-day cooldown period
        </div>
      </div>
    </Card>
  );
};

export default PendingUnstakesCard;