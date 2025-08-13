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
    title: "Stake for swYLDS",
    description: "Stake your wYLDS on Hastra to receive swYLDS and start earning 9% APY immediately",
    details: "Simple one-click staking process with instant swYLDS receipt"
  },
  {
    number: "3",
    icon: TrendingUp,
    title: "Earn Real Yield",
    description: "Your swYLDS earns yield from DemoPrime's HELOC lending operations - real assets, real returns",
    details: "Yield is automatically compounded and distributed based on real lending performance"
  },
  {
    number: "4",
    icon: Zap,
    title: "Use in DeFi",
    description: "Leverage your swYLDS on Kamino for enhanced yields while maintaining your base 9% earnings",
    details: "Collateralize swYLDS for loans or use in leverage strategies for up to 12% total yield"
  }
];

const SwYLDSHowItWorks = () => {
  return (
    <section className="py-16 px-4 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 relative z-10">
        {/* Combined Dashboard Box - How swYLDS Works */}
        <div className="card-gradient rounded-3xl p-8 md:p-12 border border-transparent mb-16 relative">
          <div className="relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground/90 mb-4">
                How swYLDS Works
              </h2>
              <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
                Simple staking, powerful yields
              </p>
            </div>
        
        {/* Desktop horizontal flow */}
        <div className="hidden lg:block">
          <div className="flex items-center justify-between relative">
            {steps.map((step, index) => (
              <div key={index} className="flex items-center">
                <Card className="w-64 p-6 bg-card/50 backdrop-blur-sm border-border/40 hover:bg-card/70 transition-all duration-300 group">
                  <div className="text-center space-y-4">
                    <div className="flex items-center justify-center w-16 h-16 mx-auto rounded-full bg-gradient-to-r from-crypto-accent to-auburn-primary text-white font-bold text-xl">
                      {step.number}
                    </div>
                    
                    <div className="flex items-center justify-center w-10 h-10 mx-auto rounded-lg bg-gradient-to-r from-crypto-accent/20 to-auburn-primary/20">
                      <step.icon className="h-5 w-5 text-crypto-accent" />
                    </div>
                    
                    <div className="space-y-2">
                      <h3 className="font-semibold text-lg">{step.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </Card>
                
                {index < steps.length - 1 && (
                  <div className="flex items-center mx-4">
                    <ArrowRight className="h-6 w-6 text-muted-foreground" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        
        {/* Mobile/tablet vertical flow */}
        <div className="lg:hidden space-y-6">
          {steps.map((step, index) => (
            <Card key={index} className="p-6 bg-card/50 backdrop-blur-sm border-border/40">
              <div className="flex items-start space-x-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-crypto-accent to-auburn-primary text-white font-bold text-lg flex-shrink-0">
                  {step.number}
                </div>
                
                <div className="space-y-3 flex-1">
                  <div className="flex items-center space-x-3">
                    <step.icon className="h-5 w-5 text-crypto-accent" />
                    <h3 className="font-semibold text-lg">{step.title}</h3>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                  
                  <p className="text-sm text-muted-foreground/80 italic">
                    {step.details}
                  </p>
                </div>
              </div>
              
              {index < steps.length - 1 && (
                <div className="flex justify-center mt-6">
                  <ArrowRight className="h-5 w-5 text-muted-foreground rotate-90" />
                </div>
              )}
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-full px-6 py-3">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium">Start earning in under 5 minutes</span>
          </div>
        </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SwYLDSHowItWorks;