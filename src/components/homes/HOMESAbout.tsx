import { Shield, TrendingUp, Coins, Zap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const HOMESAbout = () => {
  const features = [
    {
      icon: Shield,
      title: "Institutional Grade",
      description: "Professional-grade DeFi product with rigorous risk management and transparent operations."
    },
    {
      icon: TrendingUp,
      title: "Competitive Yields",
      description: "Target 7.5% APY through strategic Real World Asset backing and yield optimization."
    },
    {
      icon: Coins,
      title: "Dual Token Options",
      description: "Choose between stable yield tokens or enhanced returns with native HASH token rewards."
    },
    {
      icon: Zap,
      title: "Solana-Powered",
      description: "Built on Solana for fast, low-cost transactions and seamless DeFi integration."
    }
  ];

  return (
    <section className="py-20 md:py-32" id="homes-about">
      <div className="container">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Democratizing Financial Opportunities
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            HOMES pools provide access to high-yield opportunities traditionally reserved for institutions, removing barriers that have historically excluded everyday investors from top-tier financial products.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="glass-effect border-border/50 hover:border-header-glow/30 transition-all duration-300 group">
              <CardContent className="p-6 text-center">
                <div className="mb-4 inline-flex items-center justify-center w-12 h-12 bg-header-glow/10 rounded-lg group-hover:bg-header-glow/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-header-glow" />
                </div>
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-r from-header-glow/10 to-crypto-accent/10 rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            RWA Meets DeFi Innovation
          </h3>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            Experience the convergence of Real World Assets and decentralized finance. Earn competitive yields while maintaining the transparency and accessibility that DeFi promises.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mt-8">
            <div>
              <div className="text-3xl font-bold text-header-glow mb-2">7.5%</div>
              <div className="text-sm text-muted-foreground">Target APY</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-header-glow mb-2">$5M-$100M</div>
              <div className="text-sm text-muted-foreground">Projected Pool Size</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-header-glow mb-2">First</div>
              <div className="text-sm text-muted-foreground">Mover on Solana RWA</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HOMESAbout;