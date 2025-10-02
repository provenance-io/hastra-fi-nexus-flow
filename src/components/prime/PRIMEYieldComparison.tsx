import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Repeat, TrendingUp, Zap } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { fetchCurrentAPR } from "@/utils/solana-utils";

const PRIMELeveragedLooping = () => {
  // TODO: Replace this with a single hook
  const { data: currentAPR, isLoading: apyLoading } = useQuery({
    queryKey: ["currentAPR"],
    queryFn: fetchCurrentAPR,
    refetchInterval: 5 * 60 * 1000,
  });
  return (
    <section className="py-16 px-4 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground/90 mb-4">
            Leveraged Looping with Kamino
          </h2>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
            Maximize your PRIME potential through leverage strategies while
            maintaining your base{" "}
            {currentAPR ? currentAPR.toFixed(1) : "Loading..."}% yield
          </p>
        </div>

        {/* Partnership Badge */}
        <div className="flex justify-center mb-12">
          <Badge
            variant="secondary"
            className="px-6 py-2 text-lg bg-gradient-to-r from-crypto-accent/20 to-auburn-primary/20 border border-crypto-accent/30"
          >
            🤝 Official Kamino Partnership
          </Badge>
        </div>

        {/* How Leveraged Looping Works */}
        <div className="card-gradient rounded-3xl p-8 md:p-12 border border-transparent mb-12 relative">
          <div className="relative z-10">
            <h3 className="text-xl md:text-2xl font-bold text-foreground/90 mb-8 text-center">
              How Leveraged Looping Works
            </h3>

            <div className="grid gap-6 md:grid-cols-3">
              {[
                {
                  icon: Zap,
                  title: "Deposit PRIME",
                  description:
                    "Use your PRIME as collateral on Kamino lending pools",
                  step: "1",
                },
                {
                  icon: Repeat,
                  title: "Borrow & Loop",
                  description:
                    "Borrow against your PRIME and use proceeds to acquire more PRIME",
                  step: "2",
                },
                {
                  icon: TrendingUp,
                  title: "Enhanced Yield",
                  description:
                    "Earn leveraged returns while maintaining exposure to real asset yields",
                  step: "3",
                },
              ].map((step, index) => (
                <Card
                  key={step.step}
                  className="p-6 bg-background/30 backdrop-blur-sm border-border/40 relative"
                >
                  <div className="absolute -top-3 -left-3 w-8 h-8 bg-gradient-to-br from-crypto-accent to-auburn-primary rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {step.step}
                  </div>

                  <div className="w-12 h-12 bg-gradient-to-br from-crypto-accent/20 to-auburn-primary/20 rounded-xl flex items-center justify-center mb-4">
                    <step.icon className="h-6 w-6 text-crypto-accent" />
                  </div>

                  <h4 className="font-bold text-foreground mb-2">
                    {step.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {step.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Yield Comparison */}
        <div className="card-gradient rounded-3xl p-8 md:p-12 border border-transparent mb-12 relative">
          <div className="relative z-10">
            <h3 className="text-xl md:text-2xl font-bold text-foreground/90 mb-8 text-center">
              Yield Comparison
            </h3>

            <div className="grid gap-6 md:grid-cols-3">
              {[
                {
                  title: "Base PRIME",
                  apy: "9.2%",
                  description: "Standard staking yield from HELOC operations",
                  risk: "Low",
                  color: "text-green-500",
                },
                {
                  title: "2x Leverage",
                  apy: "~11.5%",
                  description: "Moderate leverage through Kamino protocols",
                  risk: "Medium",
                  color: "text-yellow-500",
                },
                {
                  title: "3x Leverage",
                  apy: "~14.2%",
                  description: "Maximum leverage for experienced DeFi users",
                  risk: "High",
                  color: "text-red-500",
                },
              ].map((strategy, index) => (
                <Card
                  key={strategy.title}
                  className="p-6 bg-background/30 backdrop-blur-sm border-border/40 hover:bg-background/50 transition-all duration-300"
                >
                  <div className="text-center">
                    <h4 className="font-bold text-foreground mb-2">
                      {strategy.title}
                    </h4>
                    <div
                      className={`text-3xl font-bold mb-3 ${strategy.color}`}
                    >
                      {strategy.apy}
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">
                      {strategy.description}
                    </p>
                    <Badge
                      variant="outline"
                      className={`${strategy.color} border-current`}
                    >
                      {strategy.risk} Risk
                    </Badge>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Risk Disclosure */}
        <div className="card-gradient rounded-3xl p-8 md:p-12 border border-transparent relative">
          <div className="relative z-10">
            <h3 className="text-xl font-bold text-foreground/90 mb-6 text-center">
              Important Risk Considerations
            </h3>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-4">
                <h4 className="font-semibold text-foreground">
                  Leverage Risks:
                </h4>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• Amplified losses during market downturns</li>
                  <li>• Liquidation risk if collateral value drops</li>
                  <li>• Interest rate exposure on borrowed funds</li>
                  <li>• Smart contract and protocol risks</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold text-foreground">
                  Mitigation Strategies:
                </h4>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• Maintain conservative loan-to-value ratios</li>
                  <li>• Monitor positions regularly</li>
                  <li>• Use stop-loss mechanisms</li>
                  <li>• Start with lower leverage levels</li>
                </ul>
              </div>
            </div>

            <div className="mt-8 p-4 bg-background/20 rounded-xl border border-border/20">
              <p className="text-xs text-muted-foreground leading-relaxed">
                <strong>Disclaimer:</strong> Leveraged strategies involve
                significant risk and may not be suitable for all investors. Past
                performance does not guarantee future results. Please understand
                all risks before participating in leveraged strategies.
              </p>
            </div>

            <div className="text-center mt-8">
              <Button className="bg-gradient-to-r from-crypto-accent to-auburn-primary hover:opacity-90">
                Learn More on Kamino
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PRIMELeveragedLooping;
