import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Coins, Shield, Info, Wallet } from "lucide-react";
import { useWallet } from "@/contexts/WalletContext";

const tokens = [
  {
    symbol: "YIELD",
    name: "Yield Token",
    description: "Yield-bearing stablecoin offering consistent returns",
    apy: "Up to 4%",
    risk: "Low",
    features: ["Stable value", "Consistent yields", "Low volatility"],
    color: "green",
  },
  {
    symbol: "HASH",
    name: "HASH on Solana",
    description: "Bridged HASH token for Solana DeFi participation",
    apy: "No",
    risk: "Medium",
    features: ["DeFi utility", "Cross-chain", "Growth potential"],
    color: "purple",
  },
];

const riskColors = {
  Low: "bg-green-500/20 border-green-500/30 text-green-300",
  Medium: "bg-yellow-500/20 border-yellow-500/30 text-yellow-300",
  High: "bg-red-500/20 border-red-500/30 text-red-300",
};

const BuyEarnSection = () => {
  return (
    <section className="py-20 md:py-32 relative" data-section="buy-earn">
      {/* Removed background effects to allow parent gradient to show through */}
      <div className="container relative">
        {/* Available Tokens Container */}
        <div className="max-w-6xl mx-auto">
          <div className="bg-background/20 rounded-3xl border border-border/20 p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-12 text-foreground">
              Available Tokens
            </h3>

            <div className="grid md:grid-cols-2 gap-8">
              {tokens.map((token, index) => (
                <div
                  key={index}
                  className="bg-background/30 rounded-2xl p-6 border border-border/10 hover:border-border/20 transition-all duration-300 group"
                >
                  <div className="flex items-center gap-4 mb-6">
                    {token.symbol === "YIELD" ? (
                      <img
                        src="/lovable-uploads/08452a7b-6782-4b0a-900e-0f0c99a4fc4e.png"
                        alt="YIELD Token"
                        className="w-16 h-16 rounded-xl group-hover:scale-110 transition-transform duration-300"
                      />
                    ) : (
                      <img
                        src="/lovable-uploads/bf8624e5-73f0-4058-89bf-eae815967f7e.png"
                        alt="HASH Token"
                        className="w-16 h-16 rounded-xl group-hover:scale-110 transition-transform duration-300"
                      />
                    )}
                    <div>
                      <div className="text-2xl font-bold text-foreground">
                        {token.symbol}
                      </div>
                      <div className="text-sm text-muted-foreground font-medium">
                        {token.name}
                      </div>
                    </div>
                  </div>

                  {/* Risk and APY info without glow */}
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-foreground font-medium text-sm flex items-center gap-2 px-3 py-1 rounded-lg bg-background/40 border border-border/20">
                      <div className="w-2 h-2 bg-foreground/60 rounded-full"></div>
                      {token.risk} Risk
                    </span>
                    <span className="text-foreground font-medium text-sm flex items-center gap-2 px-3 py-1 rounded-lg bg-background/40 border border-border/20">
                      <div className="w-2 h-2 bg-foreground/60 rounded-full"></div>
                      {token.apy} APY
                    </span>
                  </div>

                  <p className="text-muted-foreground text-base mb-6 leading-relaxed">
                    {token.description}
                  </p>
                  <div className="space-y-3 mb-8">
                    {token.features.map((feature, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-3 text-sm text-muted-foreground"
                      >
                        <div className="w-2 h-2 bg-foreground/60 rounded-full"></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button
                    variant="secondary"
                    className="w-full group-hover:scale-[1.02] transition-transform duration-300"
                    onClick={() => {
                      // Navigate to quick start guides
                      const learningSection = document.querySelector(
                        '[data-section="learning"]'
                      );
                      if (learningSection) {
                        learningSection.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                  >
                    Learn More
                    <Info className="ml-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuyEarnSection;
