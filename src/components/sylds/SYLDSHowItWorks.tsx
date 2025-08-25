import { Card } from '@/components/ui/card';
import { ArrowRight, Coins, Layers, TrendingUp, Zap } from 'lucide-react';

const steps = [
  {
    number: "1",
    icon: Coins,
    title: "Get wYLDS",
    description: "Acquire wYLDS tokens backed by Figure Markets' SEC-registered YLDS stablecoin",
    details: "Purchase wYLDS on supported exchanges or mint directly through Hastra Protocol"
  },
  {
    number: "2",
    icon: Layers,
    title: "Stake for sYLDS",
    description: "Stake your wYLDS on Hastra to receive sYLDS and start earning 9% APY immediately",
    details: "Simple one-click staking process with instant sYLDS receipt"
  },
  {
    number: "3",
    icon: TrendingUp,
    title: "Earn Real Yield",
    description: "Your sYLDS earns yield from DemoPrime's HELOC lending operations - real assets, real returns",
    details: "Yield is automatically compounded and distributed based on real lending performance"
  },
  {
    number: "4",
    icon: Zap,
    title: "Use in DeFi",
    description: "Leverage your sYLDS on Kamino for enhanced yields while maintaining your base 9% earnings",
    details: "Collateralize sYLDS for loans or use in leverage strategies for up to 12% total yield"
  }
];

const SYLDSHowItWorks = () => {
  return (
    <section className="py-16 px-4 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 relative z-10">
        {/* Combined Dashboard Box - How sYLDS Works */}
        <div className="card-gradient rounded-3xl p-8 md:p-12 border border-transparent mb-16 relative">
          <div className="relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground/90 mb-4">
                How sYLDS Works
              </h2>
              <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
                Simple staking, powerful yields
              </p>
            </div>

            {/* Step Cards */}
            <div className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-4">
              {steps.map((step, index) => (
                <Card 
                  key={step.number} 
                  className="relative p-6 bg-background/50 backdrop-blur-sm border-border/40 hover:bg-background/70 transition-all duration-300 group"
                >
                  {/* Step Number */}
                  <div className="absolute -top-3 -left-3 w-8 h-8 bg-gradient-to-br from-crypto-accent to-auburn-primary rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="w-12 h-12 bg-gradient-to-br from-header-glow/20 to-crypto-accent/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <step.icon className="h-6 w-6 text-crypto-accent" />
                  </div>

                  {/* Content */}
                  <h3 className="font-bold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    {step.description}
                  </p>
                  <p className="text-xs text-muted-foreground/80">
                    {step.details}
                  </p>

                  {/* Arrow for flow (except last item) */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute -right-4 top-1/2 transform -translate-y-1/2 z-10">
                      <ArrowRight className="h-6 w-6 text-crypto-accent/60" />
                    </div>
                  )}
                </Card>
              ))}
            </div>

            {/* Bottom CTA */}
            <div className="text-center mt-12">
              <p className="text-muted-foreground mb-4">
                Ready to start earning with sYLDS?
              </p>
              <div className="inline-flex items-center space-x-2 text-sm text-crypto-accent">
                <span>Simple • Secure • Sustainable</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SYLDSHowItWorks;