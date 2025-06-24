
import { Shield, TrendingUp, Globe, CheckCircle, Building2 } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const features = [
  {
    icon: Shield,
    title: 'SEC-Registered',
    description: 'The first yield-bearing stablecoin registered with the Securities and Exchange Commission.',
  },
  {
    icon: TrendingUp,
    title: 'Automatic Yield',
    description: 'Earn yield automatically just by holding wYLDS in your wallet - no staking required.',
  },
  {
    icon: Globe,
    title: 'Cross-Chain',
    description: 'Available on Solana with plans to expand to additional blockchain networks.',
  },
];

const benefits = [
  'Regulatory compliance and transparency',
  'No minimum holding period',
  'Daily yield distribution',
  'Backed by real-world assets',
  'Instant liquidity',
  'Low transaction fees on Solana',
];

const WYLDsAbout = () => {
  return (
    <section className="py-20 md:py-24">
      <div className="container">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-6">
            <Building2 className="h-4 w-4 text-blue-400" />
            <span className="text-sm font-medium text-blue-400">Hastra-Fi Protocol Innovation</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Expanding the Hastra Ecosystem
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            wYLDS represents Hastra-Fi's commitment to building protocol use cases that expand the Hastra ecosystem. 
            By bridging traditional finance regulations with DeFi innovation, we're creating new opportunities 
            for yield generation across the broader financial landscape.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3 mb-16">
          {features.map((feature) => (
            <Card key={feature.title} className="bg-secondary/30 border-border/50">
              <CardContent className="p-6 text-center">
                <feature.icon className="h-12 w-12 mx-auto mb-4 text-blue-400" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid gap-12 md:grid-cols-2 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-6">Key Benefits</h3>
            <div className="space-y-3">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                  <span className="text-foreground/90">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-secondary/20 p-8 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Protocol Integration</h3>
            <div className="space-y-4 text-sm text-muted-foreground">
              <div className="flex gap-3">
                <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0">1</span>
                <p>wYLDS integrates with leading DeFi protocols like Kamino and Raydium</p>
              </div>
              <div className="flex gap-3">
                <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0">2</span>
                <p>Yield is automatically calculated and distributed through protocol mechanics</p>
              </div>
              <div className="flex gap-3">
                <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0">3</span>
                <p>Users benefit from expanded utility across the Hastra ecosystem</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-lg p-8">
            <h3 className="text-xl font-semibold mb-4">Building the Future of Finance</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              As part of Hastra-Fi's mission to expand protocol capabilities, wYLDS serves as a foundational 
              building block for creating new financial primitives that bridge traditional and decentralized finance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WYLDsAbout;
