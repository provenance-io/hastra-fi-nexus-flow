import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useTokenPortfolio } from "@/hooks/useTokenPortfolio";
import { TokenCard } from "./components/token-card";
import { PRIME, wYLDS } from "@/types/tokens";

export const TokenHoldingsCard = () => {
  const { tokens, claimInterest } = useTokenPortfolio();
  const handleTokenClaim = (tokenSymbol: string) => (claimedAmount: number) => {
    claimInterest(tokenSymbol, claimedAmount);
  };
  return (
    <section
      className="max-w-[96rem] mx-auto px-[20px] md:px-[37px] font-season-sans"
      aria-label="Account Overview card"
    >
      <Card className="shadow-token-holdings rounded-[50px] bg-brand-background">
        <CardHeader className="pt-[49px] md:pt-[60px] pb-10 md:pb-[73px] px-[20px] md:px-[37px]">
          <CardTitle className="flex flex-col md:flex-row flex-wrap md:items-center md:justify-between md:gap-10 px-[20px] md:px-[37px]">
            <p className="text-[24px] md:text-[35px] font-[650] leading-[111%]">
              Token Holdings
            </p>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {tokens.map((t) => (
            <div className="flex-wrap overflow-x-scroll" key={t.token}>
              <TokenCard
                {...t}
                onClaim={
                  t.address === wYLDS ? handleTokenClaim(t.token) : undefined
                }
              />
            </div>
          ))}
        </CardContent>
      </Card>
    </section>
  );
};
