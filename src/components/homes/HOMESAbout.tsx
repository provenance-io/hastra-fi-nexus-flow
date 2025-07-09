import { Shield, TrendingUp, Users, Globe } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const HOMESAbout = () => {
  const features = [
    {
      icon: Shield,
      title: "SEC Compliant",
      description: "Fully regulated real estate tokenization with complete legal compliance and investor protection."
    },
    {
      icon: TrendingUp,
      title: "Fractional Ownership",
      description: "Own portions of premium properties starting from as little as $100, democratizing real estate investment."
    },
    {
      icon: Users,
      title: "Professional Management",
      description: "Expert property management and transparent reporting ensure optimal returns for all token holders."
    },
    {
      icon: Globe,
      title: "Global Access",
      description: "Invest in prime real estate across major markets worldwide, all from your digital wallet."
    }
  ];

  return (
    <section className="py-20 md:py-32" id="homes-about">
      <div className="container">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Revolutionizing Real Estate Investment
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            HOMES brings institutional-grade real estate opportunities to crypto-native investors through tokenization, offering unprecedented access to premium properties with complete transparency.
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
            Real Estate Meets DeFi
          </h3>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            Bridge traditional real estate with modern DeFi capabilities. Earn rental yields, participate in property appreciation, and maintain liquidity through our secondary market.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mt-8">
            <div>
              <div className="text-3xl font-bold text-header-glow mb-2">4-12%</div>
              <div className="text-sm text-muted-foreground">Annual Yield Range</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-header-glow mb-2">$50M+</div>
              <div className="text-sm text-muted-foreground">Properties Under Management</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-header-glow mb-2">24/7</div>
              <div className="text-sm text-muted-foreground">Trading Availability</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HOMESAbout;