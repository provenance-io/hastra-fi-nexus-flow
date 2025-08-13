import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Repeat, TrendingUp, Zap } from 'lucide-react';

const SwYLDSLeveragedLooping = () => {
  return (
    <section className="py-16 px-4 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground/90 mb-4">
            Leveraged Looping with Kamino
          </h2>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
            Maximize your swYLDS potential through leverage strategies while maintaining your base 9% yield
          </p>
        </div>

        {/* Partnership Badge */}
        <div className="flex justify-center mb-12">
          <Badge variant="secondary" className="px-6 py-2 text-lg bg-gradient-to-r from-crypto-accent/20 to-auburn-primary/20 border border-crypto-accent/30">
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
                  title: "Deposit swYLDS",
                  description: "Use your swYLDS as collateral on Kamino lending pools",
                  step: "1"
                },
                {
                  icon: Repeat,
                  title: "Borrow & Loop",
                  description: "Borrow against your swYLDS and use proceeds to acquire more swYLDS",
                  step: "2"
                },
                {
                  icon: TrendingUp,
                  title: "Enhanced Yield",
                  description: "Amplify your position while maintaining base 9% yield on all swYLDS holdings",
                  step: "3"
                }
              ].map((step, index) => (
                <div key={step.title} className="relative">
                  <Card className="p-6 bg-background/30 border-border/20 hover:border-hastra-teal/20 transition-all duration-300 backdrop-blur-sm h-full">
                    <div className="flex flex-col items-center text-center space-y-4">
                      <div className="relative">
                        <div className="w-16 h-16 bg-gradient-to-br from-header-glow to-crypto-accent rounded-2xl flex items-center justify-center shadow-lg">
                          <step.icon className="h-8 w-8 text-black" />
                        </div>
                        <div className="absolute -top-2 -right-2 w-6 h-6 bg-auburn-primary rounded-full flex items-center justify-center text-white text-sm font-bold">
                          {step.step}
                        </div>
                      </div>
                      <h4 className="font-bold text-lg text-header-glow">
                        {step.title}
                      </h4>
                      <p className="text-platinum/90 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </Card>
                  
                  {/* Arrow for desktop */}
                  {index < 2 && (
                    <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                      <div className="w-6 h-6 text-crypto-accent">
                        <svg viewBox="0 0 24 24" fill="currentColor">
                          <path d="M8.59 16.59L13.17 12L8.59 7.41L10 6L16 12L10 18L8.59 16.59Z" />
                        </svg>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Yield Enhancement Examples */}
        <div className="grid gap-8 md:grid-cols-2 mb-12">
          <Card className="p-8 bg-background/30 border-border/20 backdrop-blur-sm">
            <div className="text-center">
              <h4 className="text-xl font-bold text-foreground/90 mb-4">
                Conservative Strategy
              </h4>
              <div className="space-y-4">
                <div className="text-3xl font-bold text-crypto-accent">~12% APY</div>
                <p className="text-platinum/80">
                  2x leverage with lower risk exposure
                </p>
                <ul className="text-sm text-platinum/70 space-y-2 text-left">
                  <li>• Base 9% yield on swYLDS</li>
                  <li>• Conservative borrowing ratio</li>
                  <li>• Reduced liquidation risk</li>
                </ul>
              </div>
            </div>
          </Card>

          <Card className="p-8 bg-background/30 border-border/20 backdrop-blur-sm">
            <div className="text-center">
              <h4 className="text-xl font-bold text-foreground/90 mb-4">
                Aggressive Strategy
              </h4>
              <div className="space-y-4">
                <div className="text-3xl font-bold text-auburn-primary">~18% APY</div>
                <p className="text-platinum/80">
                  Higher leverage for maximum yield
                </p>
                <ul className="text-sm text-platinum/70 space-y-2 text-left">
                  <li>• Base 9% yield amplified</li>
                  <li>• Higher borrowing ratios</li>
                  <li>• Requires active management</li>
                </ul>
              </div>
            </div>
          </Card>
        </div>

        {/* Benefits Section */}
        <div className="card-gradient rounded-3xl p-8 md:p-12 border border-transparent mb-12 relative">
          <div className="relative z-10">
            <h3 className="text-xl md:text-2xl font-bold text-foreground/90 mb-8 text-center">
              Why Choose Kamino for Leverage?
            </h3>
            
            <div className="grid gap-6 md:grid-cols-2">
              {[
                {
                  title: "Trusted Platform",
                  description: "Kamino is a leading lending protocol on Solana with proven track record and deep liquidity"
                },
                {
                  title: "Capital Efficiency",
                  description: "Maximize your capital utilization while maintaining exposure to real-world asset yields"
                },
                {
                  title: "Automated Strategies",
                  description: "Set up automated looping strategies that manage positions and optimize yields"
                },
                {
                  title: "Transparent Risks",
                  description: "Clear liquidation parameters and risk metrics help you make informed decisions"
                }
              ].map((benefit) => (
                <div key={benefit.title} className="space-y-3">
                  <h4 className="font-semibold text-lg text-header-glow">
                    {benefit.title}
                  </h4>
                  <p className="text-platinum/80 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h3 className="text-xl font-bold text-foreground/90 mb-6">
            Ready to Amplify Your swYLDS Yield?
          </h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button
              size="lg"
              className="bg-gradient-to-r from-crypto-accent to-auburn-primary hover:from-crypto-accent/90 hover:to-auburn-primary/90 text-white px-8 py-4 rounded-xl font-semibold"
              asChild
            >
              <a
                href="https://app.kamino.finance"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                Start Looping on Kamino
                <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              className="border-border/40 bg-background/50 backdrop-blur-sm px-8 py-4 rounded-xl"
              asChild
            >
              <a
                href="https://docs.kamino.finance"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                Learn More About Kamino
                <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          </div>
          
          {/* Risk Disclaimer */}
          <p className="text-sm text-platinum/60 max-w-3xl mx-auto leading-relaxed">
            Leveraged strategies involve additional risks including liquidation risk. Higher leverage increases both potential returns and potential losses. 
            Please understand the risks before engaging in leveraged strategies.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SwYLDSLeveragedLooping;