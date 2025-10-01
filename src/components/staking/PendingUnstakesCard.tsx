import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useStaking } from "@/hooks/useStaking";
import {
  formatStakingAmount,
  formatTimestamp,
  getTimeUntilClaimable,
  getUnstakeProgress,
} from "@/utils/stakingUtils";
import {
  ArrowRight,
  CheckCircle,
  ChevronDown,
  ChevronUp,
  Clock,
  Timer,
} from "lucide-react";
import CountdownTimer from "./CountdownTimer";

const PendingUnstakesCard: React.FC = () => {
  const [showDetails, setShowDetails] = useState(false);
  const {
    pendingUnstake,
    executeClaim,
    hasReadyToClaim,
    isTransacting,
    protocolData,
  } = useStaking();

  if (!pendingUnstake || !pendingUnstake.data) {
    return (
      <Card className="bg-background/30 rounded-xl border border-border/20 hover:border-amber-glow/15 transition-all duration-300 hover:shadow-[0_0_8px_rgba(229,218,194,0.1),0_0_15px_rgba(229,218,194,0.05)] p-6">
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center">
            <Timer className="h-5 w-5 text-[hsl(48_100%_67%)]" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-2">
              No Pending Unstakes
            </h3>
            <p className="text-sm text-muted-foreground">
              Your unstaking requests will appear here during the cooldown
              period
            </p>
          </div>
        </div>
      </Card>
    );
  }

  const handleClaim = async () => {
    await executeClaim();
  };

  const progress = getUnstakeProgress(
    pendingUnstake.data.initiatedAt,
    pendingUnstake.data.availableAt
  );
  const timeRemaining = getTimeUntilClaimable(pendingUnstake.data.availableAt);
  const isReady = pendingUnstake.data.canClaim;

  return (
    <Card className="bg-background/30 rounded-xl border border-border/20 hover:border-amber-glow/15 transition-all duration-300 hover:shadow-[0_0_8px_rgba(229,218,194,0.1),0_0_15px_rgba(229,218,194,0.05)] p-6">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="text-sm text-muted-foreground">
            1 active unstaking request
          </div>

          <div className="flex items-center gap-3">
            {/* Summary Stats */}
            <div className="text-right space-y-1">
              <div className="text-sm font-semibold text-foreground">
                {formatStakingAmount(pendingUnstake.data.amount)} sPRIME
              </div>
              <div className="text-xs text-muted-foreground">Total Pending</div>
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
                <CheckCircle className="h-4 w-4 text-[hsl(48_100%_67%)]" />
                <div>
                  <p className="text-sm font-medium text-[hsl(48_100%_67%)]">
                    {formatStakingAmount(pendingUnstake.data.amount)} sPRIME
                  </p>
                  <p className="text-xs text-muted-foreground">
                    1 unstake completed cooldown
                  </p>
                </div>
              </div>

              <Button
                onClick={handleClaim}
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
                    Unstake all to PRIME
                    <ArrowRight className="ml-2 h-3 w-3 text-[hsl(48_100%_67%)]" />
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
              <span>Individual Unstake</span>
            </div>
            <div className="relative border-l-2 border-auburn-primary/30 pl-4 ml-2 p-4 bg-background/30 rounded-xl border hover:border-amber-glow/15 transition-all duration-300 hover:shadow-[0_0_8px_rgba(229,218,194,0.1),0_0_15px_rgba(229,218,194,0.05)]">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-3">
                  {isReady ? (
                    <CheckCircle className="h-4 w-4 text-[hsl(48_100%_67%)]" />
                  ) : (
                    <Clock className="h-4 w-4 text-[hsl(48_100%_67%)]" />
                  )}
                  <div>
                    <p className="font-medium text-foreground">
                      {formatStakingAmount(pendingUnstake.data.amount)} sPRIME
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Initiated{" "}
                      {formatTimestamp(pendingUnstake.data.initiatedAt)}
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
                    targetDate={pendingUnstake.data.availableAt}
                    className="justify-center"
                  />
                </div>
              )}

              {/* Individual Claim Button for Ready Items */}
              {isReady && (
                <div className="mt-3 flex justify-end">
                  <Button
                    onClick={() => handleClaim()}
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
                        Unstake to PRIME
                        <ArrowRight className="ml-1 h-2.5 w-2.5 text-[hsl(48_100%_67%)]" />
                      </>
                    )}
                  </Button>
                </div>
              )}

              {/* Available Date */}
              {!isReady && (
                <div className="mt-3 text-xs text-muted-foreground">
                  Available: {formatTimestamp(pendingUnstake.data.availableAt)}
                </div>
              )}
            </div>
          </div>
        )}

        {/* Info Footer - Always visible */}
        <div className="text-center text-xs text-muted-foreground border-t border-border/30 pt-4">
          Tokens become claimable after the {protocolData.unstakingCooldown}{" "}
          cooldown period
        </div>
      </div>
    </Card>
  );
};

export default PendingUnstakesCard;
