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
    description: "Use your sYLDS as collateral in DeFi protocols while continuing to earn your 9% base yield. Maximum capital efficiency."
  },
  {
    icon: Droplets,
    title: "Instant Liquidity",
    description: "Trade sYLDS on DEXs or use in leverage strategies on Kamino. No lock-up periods, full flexibility."
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

const SYLDSValueProposition = () => {
  return (
    <section className="py-16 px-4 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 relative z-10">
        {/* Combined Dashboard Box - Why Choose sYLDS */}
        <div className="card-gradient rounded-3xl p-8 md:p-12 border border-transparent mb-16 relative">
          <div className="relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground/90 mb-4">
                Why Choose sYLDS?
              </h2>
              <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
                Sustainable yield backed by real-world assets, not speculation
              </p>
            </div>

            {/* Feature Grid */}
            <div className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3">
              {features.map((feature, index) => (
                <Card 
                  key={feature.title} 
                  className="p-6 bg-background/30 backdrop-blur-sm border-border/40 hover:bg-background/50 transition-all duration-300 group"
                >
                  {/* Icon */}
                  <div className="w-12 h-12 bg-gradient-to-br from-crypto-accent/20 to-auburn-primary/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="h-6 w-6 text-crypto-accent" />
                  </div>

                  {/* Content */}
                  <h3 className="font-bold text-foreground mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </Card>
              ))}
            </div>

            {/* Bottom Stats */}
            <div className="mt-16 pt-8 border-t border-border/20">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-2xl font-bold text-crypto-accent mb-1">9.2%</div>
                  <div className="text-sm text-muted-foreground">Current APY</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-crypto-accent mb-1">$12.4M</div>
                  <div className="text-sm text-muted-foreground">Total Value Locked</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-crypto-accent mb-1">2,847</div>
                  <div className="text-sm text-muted-foreground">Active Stakers</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SYLDSValueProposition;