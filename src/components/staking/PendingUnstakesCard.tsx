import React from 'react';
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
import { Clock, CheckCircle, ArrowRight, Timer } from 'lucide-react';

const PendingUnstakesCard: React.FC = () => {
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
      <Card className="card-gradient rounded-3xl border border-border/30 shadow-lg p-6">
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center">
            <div className="p-3 rounded-full bg-secondary/30 border border-border/20">
              <Timer className="h-6 w-6 text-muted-foreground" />
            </div>
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
    <Card className="card-gradient rounded-3xl border border-border/30 shadow-lg p-6">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-2 rounded-lg bg-auburn-primary/10 border border-auburn-primary/20">
              <Clock className="h-5 w-5 text-auburn-primary" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground">
                Pending Unstakes
              </h3>
              <p className="text-sm text-muted-foreground">
                {pendingUnstakes.list.length} active unstaking request{pendingUnstakes.list.length !== 1 ? 's' : ''}
              </p>
            </div>
          </div>

          {/* Summary Stats */}
          <div className="text-right space-y-1">
            <div className="text-sm font-semibold text-foreground">
              {formatStakingAmount(pendingUnstakes.totalPending)} stYLDS
            </div>
            <div className="text-xs text-muted-foreground">
              Total Pending
            </div>
          </div>
        </div>

        {/* Claim All Button */}
        {hasReadyToClaim && (
          <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <div>
                  <p className="text-sm font-medium text-green-500">
                    {formatStakingAmount(pendingUnstakes.totalReadyToClaim)} wYLDS Ready to Claim
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {readyToClaim.length} unstake{readyToClaim.length !== 1 ? 's' : ''} completed cooldown
                  </p>
                </div>
              </div>
              
              <Button
                onClick={handleClaimAll}
                disabled={isTransacting}
                className="btn-hastra"
              >
                {isTransacting ? (
                  <>
                    <div className="animate-spin rounded-full h-3 w-3 border-2 border-white border-t-transparent mr-2" />
                    Claiming...
                  </>
                ) : (
                  <>
                    Claim All
                    <ArrowRight className="ml-2 h-3 w-3" />
                  </>
                )}
              </Button>
            </div>
          </div>
        )}

        {/* Unstakes List */}
        <div className="space-y-3">
          {sortedUnstakes.map((unstake) => {
            const progress = getUnstakeProgress(unstake.initiatedAt, unstake.availableAt);
            const timeRemaining = getTimeUntilClaimable(unstake.availableAt);
            const isReady = unstake.canClaim;

            return (
              <div
                key={unstake.id}
                className={`p-4 rounded-lg border transition-all duration-200 ${
                  isReady
                    ? 'bg-green-500/10 border-green-500/30 hover:bg-green-500/20'
                    : 'bg-secondary/30 border-border/30 hover:bg-secondary/40'
                }`}
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
                        {formatStakingAmount(unstake.amount)} stYLDS
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Initiated {formatTimestamp(unstake.initiatedAt)}
                      </p>
                    </div>
                  </div>

                  <div className="text-right">
                    <Badge
                      className={
                        isReady
                          ? 'bg-green-500/10 text-green-500 border-green-500/20'
                          : 'bg-auburn-primary/10 text-auburn-primary border-auburn-primary/20'
                      }
                    >
                      {isReady ? 'Ready' : timeRemaining}
                    </Badge>
                  </div>
                </div>

                {/* Progress Bar */}
                {!isReady && (
                  <div className="space-y-2">
                    <Progress value={progress} className="h-1" />
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>Cooldown Progress</span>
                      <span>{progress}%</span>
                    </div>
                  </div>
                )}

                {/* Claim Button */}
                {isReady && (
                  <div className="mt-3 flex justify-end">
                    <Button
                      onClick={() => handleClaimSingle(unstake.id)}
                      disabled={isTransacting}
                      size="sm"
                      className="btn-hastra"
                    >
                      {isTransacting ? (
                        <>
                          <div className="animate-spin rounded-full h-3 w-3 border-2 border-white border-t-transparent mr-1" />
                          Claiming...
                        </>
                      ) : (
                        <>
                          Claim
                          <ArrowRight className="ml-1 h-3 w-3" />
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

        {/* Info Footer */}
        <div className="text-center text-xs text-muted-foreground border-t border-border/30 pt-4">
          Tokens become claimable after the 7-day cooldown period
        </div>
      </div>
    </Card>
  );
};

export default PendingUnstakesCard;