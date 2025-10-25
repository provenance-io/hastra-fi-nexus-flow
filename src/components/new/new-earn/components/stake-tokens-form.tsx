import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useStaking } from "@/hooks/useStaking";
import { cn } from "@/lib/utils";
import { estimateGasFee, formatStakingAmount } from "@/utils/stakingUtils";
import { ArrowRight } from "lucide-react";
import { match } from "ts-pattern";

export const StakeTokensForm = () => {
  const {
    userBalance,
    stakingForm,
    protocolData,
    setStakingAmount,
    setMaxStakeAmount,
    executeStaking,
    isTransacting,
  } = useStaking();
  return (
    <div aria-label="Staking Tokens Form" className="space-y-4 w-full">
      <p className="pl-4 text-[25px] leading-[111%] pb-[28px]">Stake</p>
      <Card className="rounded-[35px] bg-[#021323] p-0 px-3 py-4 flex flex-col gap-[15px]">
        <div className="grid grid-cols-2 gap-4">
          <Card className="bg-[#1F273678] flex flex-col rounded-[25px] pb-4">
            <p className="text-center self-center text-[45px] leading-[98%] font-[650] pt-[65px] pb-[25px] px-[65px]">
              {protocolData.currentAPR || "--"}
            </p>
            <p className="text-[20px] text-center leading-[116%] text-[#909090]">
              Current APR
            </p>
          </Card>
          <Card className="bg-[#1F273678] flex flex-col rounded-[25px] pb-4">
            <p className="text-center self-center text-[45px] leading-[98%] font-[650] pt-[65px] pb-[25px] px-[65px]">
              {formatStakingAmount(userBalance.PRIME)}
            </p>
            <p className="text-[20px] text-center leading-[116%] text-[#909090]">
              Total Staked
            </p>
          </Card>
        </div>
        <Card className="bg-[#1F273678] rounded-[25px] flex justify-between items-center px-[29px] py-[35px]">
          <p className="text-[22px] font-[650] w-1/2">Available Balance</p>
          <div className="flex flex-col text-end text-[20px] leading-[116%] text-[#909090]">
            <p className="font-[650]">
              {" "}
              {formatStakingAmount(userBalance.wYLDS)} wYLDS
            </p>
            <p className="text-[15px]">
              ${parseFloat(userBalance.wYLDS).toFixed(2)}
            </p>
          </div>
        </Card>
      </Card>
      <Card className="px-[25px] py-[59px] rounded-[35px] bg-[#021323] flex flex-col gap-[15px]">
        <div className="space-y-8 w-full">
          <div className="flex flex-col md:flex-row justify-between md:items-center">
            <Label className="font-normal text-[22px] md:text-[25px] leading-[111%]">
              Amount to Stake
            </Label>
            <div className="flex items-center gap-x-3 pt-5 md:pt-0">
              <Button
                type="button"
                size="custom"
                variant="noShadow"
                className={cn(
                  "font-season-sans font-normal rounded-full text-[13px] md:text-[22px] leading-[111%] py-2 px-[17px] md:py-[15px] md:px-[31px] text-[#CBCBCB] bg-[#212E3C] hover:bg-[#BABABA] hover:text-[#212E3C]"
                )}
                onClick={setMaxStakeAmount}
                disabled={isTransacting}
              >
                Max
              </Button>
            </div>
          </div>
          <div className="relative">
            <Input
              type="number"
              placeholder="0.00"
              min={0}
              step={1}
              className="[&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none [-moz-appearance:textfield] text-[20px] md:text-[25px] bg-[#021E4830] leading-[116%] rounded-[39px] pl-10 flex items-center py-8 border-l-0 border-r-0 border-y-[0.1px] border-gray-600 w-full"
              value={stakingForm.amount}
              onChange={(e) => setStakingAmount(e.target.value)}
              disabled={isTransacting}
            />
            <p className="absolute right-5 top-5 text-[20px] text-[#909090]">
              wYLDS
            </p>
          </div>
          {stakingForm.errors.length > 0 && (
            <div className="space-y-1">
              {stakingForm.errors.map((error, index) => (
                <p key={index} className="text-sm text-destructive">
                  {error.message}
                </p>
              ))}
            </div>
          )}
        </div>
        {Number(stakingForm.amount) > 0 && (
          <Card className="bg-[#1F273678] text-[22px] rounded-[25px] flex flex-col px-[23px] py-[32px] text-[#CBCBCB]">
            <div className="w-full flex justify-between gap-4">
              <p>You will receive</p>
              <p className="text-brand-purple font-[650]">
                ~ {formatStakingAmount(stakingForm.estimatedOutput)} PRIME
              </p>
            </div>
            <div className="flex items-center justify-center text-center pt-[43px] pb-[38px] border-b border-[#21203C]">
              <p className="flex gap-4 items-center">
                {formatStakingAmount(stakingForm.amount)} wYLDS{" "}
                <ArrowRight className="size-4" />{" "}
                {formatStakingAmount(stakingForm.estimatedOutput)} PRIME
              </p>
            </div>
            <div className="pt-[26px] flex flex-col gap-[11px] text-[15px] leading-[111%]">
              <div className="w-full flex justify-between items-center">
                <p>Exchange Rate</p>
                <p>1 wYLDS = {protocolData.exchangeRate} PRIME</p>
              </div>
              <div className="w-full flex justify-between items-center">
                <p>Estimated Gas Fee</p>
                <p>~{estimateGasFee("stake")} SOL</p>
              </div>
              <div className="w-full flex justify-between items-center">
                <p>APR</p>
                <p className="text-brand-purple">{protocolData.currentAPR}</p>
              </div>
            </div>
          </Card>
        )}
        <Button
          onClick={executeStaking}
          disabled={!stakingForm.isValid || isTransacting}
          size="custom"
          className="mt-[43px] self-center rounded-full text-[13px] md:text-base leading-[110%] shadow-brand-card text-brand-white py-[20px] px-[26px] hover:bg-brand-background bg-brand-background w-fit"
          variant="noShadow"
        >
          {match({ isTransacting, hasAmount: Number(stakingForm.amount) > 0 })
            .with({ isTransacting: true }, () => (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent mr-2" />
                Processing...
              </>
            ))
            .with({ hasAmount: true }, () => (
              <div className="flex items-center gap-3">
                Stake {stakingForm.amount} wYLDS
                <ArrowRight className="size-6" />
              </div>
            ))
            .otherwise(() => (
              <div className="flex items-center gap-3">
                Stake for PRIME
                <ArrowRight className="size-6" />
              </div>
            ))}
        </Button>
      </Card>
    </div>
  );
};
