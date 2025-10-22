import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { TokenData } from "@/hooks/useTokenPortfolio";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

export const SmallTokenCard = ({
  token,
  amount,
  value,
  apy,
  totalInterestEarned,
  unclaimedInterest,
  icon,
  tokenAddress,
  onClaim,
}: TokenData & { onClaim: (amount: number) => void }) => {
  const [isClaiming, setIsClaiming] = useState(false);
  const { toast } = useToast();
  const isImage = icon.startsWith("/") || icon.startsWith("http");

  const copyToClipboard = () => {
    navigator.clipboard.writeText(tokenAddress);
    toast({
      title: "TA copied to clipboard",
      description: `${tokenAddress} copied successfully`,
      duration: 3000,
    });
  };

  const handleClaim = async () => {
    if (unclaimedInterest <= 0) return;

    console.log(`Claiming ${unclaimedInterest} ${token} interest`);
    setIsClaiming(true);

    // Simulate claim transaction
    await new Promise((resolve) => setTimeout(resolve, 2000));

    onClaim?.(unclaimedInterest);

    toast({
      title: "Interest Claimed",
      description:
        token === "PRIME"
          ? `Successfully claimed ${unclaimedInterest.toFixed(
              4
            )} wYLDS tokens from PRIME staking rewards`
          : `Successfully claimed ${unclaimedInterest.toFixed(
              4
            )} ${token} tokens`,
    });

    setIsClaiming(false);
  };

  // Calculate dollar values for interest
  const tokenPrice = value / amount; // Price per token
  const totalInterestEarnedUSD = isNaN(totalInterestEarned * tokenPrice)
    ? 0
    : totalInterestEarned * tokenPrice;
  const unclaimedInterestUSD = isNaN(unclaimedInterest * tokenPrice)
    ? 0
    : unclaimedInterest * tokenPrice;

  const Trigger = ({ className }: { className?: string }) => (
    <AccordionTrigger className={cn("hover:no-underline", className)}>
      <div className="pr-4 flex justify-between items-center gap-4 text-[16px] lg:text-[22px] leading-[98%]">
        {isImage ? (
          <img
            src={icon}
            alt={`${token} Token`}
            className="size-[50px] lg:size-[84px] rounded-full object-cover shadow-sm flex-shrink-0"
          />
        ) : (
          <div className="size-[50px] lg:size-[84px] rounded-xl bg-hastra-teal/10 flex items-center justify-center shadow-sm flex-shrink-0">
            <span className="text-hastra-teal font-bold text-base">{icon}</span>
          </div>
        )}
        <div className="flex flex-col gap-2 items-start">
          <h4 className="font-[650]">{token}</h4>
          <p>
            {amount.toLocaleString("en-US", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 4,
            })}
          </p>
        </div>
      </div>
    </AccordionTrigger>
  );

  return (
    <Card className="p-0 bg-[#021E4830] py-0 px-4 flex flex-col md:flex-row justify-between rounded-xl text-sm sm:text-base leading-[98%] border-[0.1px] border-l-0 border-r-0 border-gray-600">
      <Accordion type="multiple">
        <AccordionItem value={token} className="border-none">
          <div className="hidden sm:flex justify-between items-center">
            <Trigger />
            {onClaim && (
              <Button
                className="hidden sm:flex rounded-full text-sm leading-[110%] shadow-brand-card text-brand-white"
                variant="ghost"
                onClick={handleClaim}
                disabled={unclaimedInterest <= 0 || isClaiming}
                size="sm"
              >
                {isClaiming ? (
                  <div className="flex items-center gap-1.5">
                    <div className="size-3 border-2 border-orange-300 border-t-transparent rounded-full animate-spin" />
                    Claiming...
                  </div>
                ) : (
                  <>
                    Claim {token}{" "}
                    <ArrowRight strokeWidth={0.5} className="size-6" />
                  </>
                )}
              </Button>
            )}
          </div>
          <Trigger className="sm:hidden" />
          <AccordionContent className="grid grid-cols-2 p-4 gap-4">
            <div className="text-center flex flex-col items-start sm:items-center justify-center gap-2">
              <p className="font-[650]">Balance</p>
              <p className="font-[650]">
                {amount.toLocaleString("en-US", {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 4,
                })}
              </p>
              <p>Tokens</p>
            </div>
            <div className="text-center flex flex-col items-start sm:items-center justify-center gap-2">
              <p className="font-[650]">Value</p>
              <p>
                $
                {value.toLocaleString("en-US", {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </p>
            </div>
            <div className="text-center flex flex-col items-start sm:items-center justify-center gap-2">
              <p className="font-[650]">Total Claimed</p>
              <p>
                $
                {totalInterestEarnedUSD.toLocaleString("en-US", {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </p>
            </div>
            <div className="text-center flex flex-col items-start sm:items-center justify-center gap-2">
              <p className="font-[650]">Available</p>
              <p
                className={`${
                  unclaimedInterest > 0 ? "text-white" : "text-muted-foreground"
                }`}
              >
                $
                {unclaimedInterestUSD.toLocaleString("en-US", {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </p>
            </div>
            {onClaim && (
              <div className="sm:hidden flex flex-col items-center justify-center col-span-2">
                <Button
                  className="rounded-full text-base leading-[110%] shadow-brand-card text-brand-white px-[26px] py-5 w-full"
                  variant="ghost"
                  onClick={handleClaim}
                  disabled={unclaimedInterest <= 0 || isClaiming}
                  size="sm"
                >
                  {isClaiming ? (
                    <div className="flex items-center gap-1.5">
                      <div className="size-3 border-2 border-orange-300 border-t-transparent rounded-full animate-spin" />
                      Claiming...
                    </div>
                  ) : (
                    <>
                      Claim {token}{" "}
                      <ArrowRight strokeWidth={0.5} className="size-6" />
                    </>
                  )}
                </Button>
              </div>
            )}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </Card>
  );
};
