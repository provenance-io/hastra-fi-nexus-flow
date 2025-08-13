import { Card } from '@/components/ui/card';
import { Building2, Shield, Zap, Droplets, Eye, TrendingUp } from 'lucide-react';

const features = [
  {
    icon: Building2,
    title: "Real Asset Backing",
    description: "Your yield comes from actual HELOC lending operations, not DeFi speculation. Sustainable and predictable returns."
  },
  {
    icon: Shield,
    title: "SEC-Registered Foundation",
    description: "Built on Figure Markets' YLDS - the first SEC-registered yield-bearing stablecoin. Regulatory clarity you can trust."
  },
  {
    icon: Zap,
    title: "DeFi Compatible",
    description: "Use your swYLDS as collateral in DeFi protocols while continuing to earn your 9% base yield. Maximum capital efficiency."
  },
  {
    icon: Droplets,
    title: "Instant Liquidity",
    description: "Trade swYLDS on DEXs or use in leverage strategies on Kamino. No lock-up periods, full flexibility."
  },
  {
    icon: Eye,
    title: "Transparent & Audited",
    description: "Open-source smart contracts, regular audits, and transparent reporting. See exactly where your yield comes from."
  },
  {
    icon: TrendingUp,
    title: "Leverage Opportunities",
    description: "Achieve up to 12% yields through leverage looping strategies on Kamino while maintaining your real asset exposure."
  }
];

const SwYLDSValueProposition = () => {
  return (
    <section className="py-16 md:py-24 relative">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Why Choose swYLDS?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Sustainable yield backed by real-world assets, not speculation
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 bg-card/50 backdrop-blur-sm border-border/40 hover:bg-card/70 transition-all duration-300 group">
              <div className="flex flex-col items-start space-y-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r from-crypto-accent/20 to-auburn-primary/20 group-hover:from-crypto-accent/30 group-hover:to-auburn-primary/30 transition-all duration-300">
                  <feature.icon className="h-6 w-6 text-crypto-accent group-hover:text-auburn-primary transition-colors duration-300" />
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-crypto-accent/10 to-auburn-primary/10 rounded-full px-6 py-3">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium">Real assets generating real yield since 2024</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SwYLDSValueProposition;