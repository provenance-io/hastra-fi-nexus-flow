import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useStaking } from "@/hooks/useStaking";
import { useWallet } from "@/contexts/WalletContext";
import StakingMode from "./StakingMode";
import UnstakingMode from "./UnstakingMode";
import TransactionProgress from "./TransactionProgress";
import { Coins, TrendingUp } from "lucide-react";
import { useAvailableActions } from "@/hooks/use-available-actions";

const StakingWidget: React.FC = () => {
  const { isConnected, connectWallet } = useWallet();
  const { protocolData, transaction, resetTransaction } = useStaking();
  const actions = useAvailableActions();

  if (!isConnected) {
    return (
      <Card className="bg-background/30 rounded-xl border border-border/20 hover:border-amber-glow/15 transition-all duration-300 hover:shadow-[0_0_8px_rgba(229,218,194,0.1),0_0_15px_rgba(229,218,194,0.05)] p-6 md:p-8">
        <div className="text-center space-y-6">
          <div className="flex items-center justify-center">
            <div className="p-4 rounded-full bg-amber-warm/10 border border-amber-warm/20">
              <Coins className="size-8 text-header-glow" />
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-semibold text-foreground">
              Connect Wallet to Stake
            </h3>
            <p className="text-muted-foreground max-w-md mx-auto">
              Connect your wallet to start earning {protocolData.currentAPR}%
              APR by staking wYLDS tokens
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
      {/* Side by Side Cards with Titles */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Stake Section */}
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <TrendingUp className="size-6 md:size-5 text-header-glow" />
            <h4 className="text-lg font-semibold text-foreground">Stake</h4>
          </div>
          <Card className="bg-background/30 rounded-xl border border-border/20 hover:border-amber-glow/15 transition-all duration-300 hover:shadow-[0_0_8px_rgba(229,218,194,0.1),0_0_15px_rgba(229,218,194,0.05)] p-6 animate-fade-in">
            <StakingMode canStake={actions.canStake} />
          </Card>
        </div>

        {/* Unstake Section */}
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <Coins className="size-6 md:size-5 text-header-glow" />
            <h4 className="text-lg font-semibold text-foreground">Unstake</h4>
          </div>
          <Card className="bg-background/30 rounded-xl border border-border/20 hover:border-amber-glow/15 transition-all duration-300 hover:shadow-[0_0_8px_rgba(229,218,194,0.1),0_0_15px_rgba(229,218,194,0.05)] p-6 animate-fade-in">
            <UnstakingMode canUnstake={actions.canUnstake} />
          </Card>
        </div>
      </div>

      {/* Transaction Progress */}
      <TransactionProgress
        isVisible={transaction.status !== "idle"}
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
