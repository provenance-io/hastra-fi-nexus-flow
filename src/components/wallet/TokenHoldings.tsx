import { useTokenPortfolio } from "@/hooks/useTokenPortfolio";
import TokenLineItem from "./TokenLineItem";
import { sYLDS, PRIME } from "@/types/tokens.ts";
import { Wallet } from "lucide-react";

export const TokenHoldings = () => {
  const { tokens, claimInterest } = useTokenPortfolio();

  const handleTokenClaim = (tokenSymbol: string) => (claimedAmount: number) => {
    claimInterest(tokenSymbol, claimedAmount);
  };
  return (
    <div className="card-gradient rounded-3xl border border-border/30 shadow-lg p-4 lg:p-6">
      <div className="space-y-8">
        <div className="flex items-center gap-4 mb-8">
          <Wallet className="size-6 md:size-5 text-header-glow" />
          <h3 className="text-xl md:text-xl font-bold">Token Holdings</h3>
          <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent flex-1 ml-6"></div>
        </div>
        {tokens && tokens.length > 0 && (
          <div className="space-y-4">
            {tokens.map((token) => {
              return (
                <TokenLineItem
                  key={token.token}
                  token={token.token}
                  amount={token.amount}
                  value={token.value}
                  apy={token.apy}
                  totalInterestEarned={token.totalInterestEarned}
                  unclaimedInterest={token.unclaimedInterest}
                  icon={token.icon}
                  tokenAddress={token.tokenAddress}
                  onClaim={
                    token.address === PRIME || token.address == sYLDS
                      ? handleTokenClaim(token.token)
                      : undefined
                  }
                />
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};
