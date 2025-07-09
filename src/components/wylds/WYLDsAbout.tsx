
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
    description: 'Earn yield automatically just by holding YIELD in your wallet - no staking required.',
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

const howItWorks = [
  {
    step: '1',
    title: 'Hold YIELD tokens',
    description: 'Simply hold YIELD tokens in any compatible wallet',
  },
  {
    step: '2',
    title: 'Automatic yield calculation',
    description: 'Yield is automatically calculated and distributed daily',
  },
  {
    step: '3',
    title: 'Watch your balance grow',
    description: 'Watch your balance grow without any additional action',
  },
  {
    step: '4',
    title: 'Redeem via key Solana partners',
    description: 'Easily redeem your YIELD through Raydium and Kamino protocols',
  },
];

const WYLDsAbout = () => {
  return (
    <section className="py-20 md:py-24">
      <div className="container">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-header-glow/10 border border-header-glow/20 rounded-full px-4 py-2 mb-6">
            <Building2 className="h-4 w-4 text-header-glow" />
            <span className="text-sm font-medium text-header-glow">Hastra-Fi Protocol Innovation</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Expanding the Hastra Ecosystem
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            YIELD represents Hastra-Fi's commitment to building protocol use cases that expand the Hastra ecosystem. 
            By bridging traditional finance regulations with DeFi innovation, we're creating new opportunities 
            for yield generation across the broader financial landscape.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3 mb-16">
          {features.map((feature) => (
            <Card key={feature.title} className="bg-secondary/30 border-border/50">
              <CardContent className="p-6 text-center">
                <feature.icon className="h-12 w-12 mx-auto mb-4 text-header-glow" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid gap-16 lg:grid-cols-2 items-start mb-16">
          <div>
            <h3 className="text-2xl font-bold mb-8 text-center lg:text-left">Key Benefits</h3>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-center gap-3 p-3 rounded-lg bg-secondary/20">
                  <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                  <span className="text-foreground/90">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-8 text-center lg:text-left">How It Works</h3>
            <div className="space-y-6">
              {howItWorks.map((item) => (
                <div key={item.step} className="flex items-start gap-4 p-4 rounded-lg bg-secondary/20">
                  <div className="bg-header-glow text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0">
                    {item.step}
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">{item.title}</h4>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center">
          <div className="bg-gradient-to-r from-header-glow/10 to-crypto-accent/10 border border-header-glow/20 rounded-lg p-8">
            <h3 className="text-xl font-semibold mb-4">Building the Future of Finance</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              As part of Hastra-Fi's mission to expand protocol capabilities, YIELD serves as a foundational 
              building block for creating new financial primitives that bridge traditional and decentralized finance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WYLDsAbout;
