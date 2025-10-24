import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAvailableActions } from "@/hooks/use-available-actions";
import { useStaking } from "@/hooks/useStaking";
import { cn } from "@/lib/utils";
import { estimateGasFee, formatStakingAmount } from "@/utils/stakingUtils";
import { ArrowRight } from "lucide-react";
import { match } from "ts-pattern";

export const UnstakeTokensForm = () => {
  const { canUnstake } = useAvailableActions();
  const {
    userBalance,
    unstakingForm,
    setUnstakingAmount,
    setMaxUnstakeAmount,
    executeUnstaking,
    pendingUnstake,
    executeClaim,
    hasReadyToClaim,
    isTransacting,
    protocolData,
  } = useStaking();
  return (
    <div aria-label="Staking Tokens Form" className="space-y-[61px] w-full">
      <div>
        <p className="pl-4 text-[25px] leading-[111%] pb-[28px]">Unstake</p>
        {match(canUnstake)
          .with(true, () => (
            <Card className="text-[22px] font-[650] rounded-[35px] text-center bg-brand-background border-brand-purple py-[71px]">
              Coming Soon
            </Card>
          ))
          .otherwise(() => (
            <Card className="rounded-[35px] text-center bg-brand-background border-brand-purple py-[71px]">
              You must have <span className="font-[650]">SOL</span> and{" "}
              <span className="font-[650]">PRIME</span> in your wallet to
              unstake.
            </Card>
          ))}
      </div>
      <div>
        <p className="pl-4 text-[25px] leading-[111%] pb-[28px]">
          Pending Unstakes
        </p>
        {match({
          pendingUnstake:
            Boolean(pendingUnstake) && Boolean(pendingUnstake.data),
        })
          .with({ pendingUnstake: true }, () => (
            <Card className="text-[22px] font-[650] rounded-[35px] text-center bg-brand-background border-brand-purple py-[71px]">
              Coming Soon
            </Card>
          ))
          .otherwise(() => (
            <Card className="rounded-[35px] space-y-3 text-center bg-brand-background border-brand-purple py-[157px] flex flex-col items-center justify-center">
              <p className="text-[22px] font-[650]">No Pending Unstakes</p>
              <p className="text-[17px] text-[#909090] w-1/2">
                Your unstaking requests will appear here during the cooldown
                period
              </p>
            </Card>
          ))}
      </div>
    </div>
  );
};
