
import { Shield, TrendingUp, Globe, CheckCircle, Building2, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import SolanaBanner from './SolanaBanner';

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
    <section className="py-24 md:py-32 relative">
      {/* Premium background - matching homepage */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-header-glow/5 to-crypto-accent/5"></div>
      
      <div className="container relative">
        <SolanaBanner />
        
        <div className="text-center mb-20">
          <div className="glass-premium rounded-full px-6 py-3 text-sm font-medium mb-8 inline-block">
            <Building2 className="h-5 w-5 text-electric-blue mr-3 inline" />
            <span className="text-premium-gradient font-semibold">Hastra-Fi Protocol Innovation</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-8">
            Expanding the <span className="text-premium-gradient">Hastra Ecosystem</span>
          </h2>
          <p className="text-xl md:text-2xl text-platinum/90 max-w-5xl mx-auto leading-relaxed">
            YIELD represents Hastra-Fi's commitment to building protocol use cases that expand the Hastra ecosystem. 
            By bridging <span className="text-electric-blue font-semibold">traditional finance regulations</span> with 
            <span className="text-neon-cyan font-semibold"> DeFi innovation</span>, we're creating new opportunities 
            for yield generation across the broader financial landscape.
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-3 mb-20">
          {features.map((feature, index) => (
            <div 
              key={feature.title} 
              className="group perspective-1000 h-64 cursor-pointer"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180">
                {/* Front of card */}
                <div className="absolute inset-0 w-full h-full backface-hidden">
                  <Card className="w-full h-full card-premium pointer-events-none">
                    <CardContent className="p-8 text-center h-full flex flex-col justify-center">
                      <div className="w-20 h-20 glass-premium rounded-2xl mx-auto mb-6 flex items-center justify-center pulse-glow-premium">
                        <feature.icon className="h-10 w-10 text-electric-blue" />
                      </div>
                      <h3 className="text-2xl font-bold text-premium-gradient">{feature.title}</h3>
                    </CardContent>
                  </Card>
                </div>
                
                {/* Back of card */}
                <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180">
                  <Card className="w-full h-full card-premium pointer-events-none">
                    <CardContent className="p-8 text-center h-full flex flex-col justify-center">
                      <p className="text-platinum/80 leading-relaxed text-lg">{feature.description}</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid gap-16 lg:grid-cols-2 items-start mb-16">
          <div>
            <h3 className="text-2xl font-bold mb-8 text-center lg:text-left">Key Benefits</h3>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-center gap-3 p-3 rounded-lg card-gradient">
                  <CheckCircle className="h-5 w-5 text-crypto-accent flex-shrink-0" />
                  <span className="text-foreground/90">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-8 text-center lg:text-left">How It Works</h3>
            <div className="space-y-6">
              {howItWorks.map((item) => (
                <div key={item.step} className="flex items-start gap-4 p-4 rounded-lg card-gradient">
                  <div className="bg-header-glow/20 text-header-glow border border-header-glow/30 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0">
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
          <div className="card-premium rounded-3xl p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold mb-6 text-premium-gradient">
              Building the Future of Finance
            </h3>
            <p className="text-xl text-platinum/90 max-w-3xl mx-auto leading-relaxed">
              As part of Hastra-Fi's mission to expand protocol capabilities, YIELD serves as a foundational 
              building block for creating new <span className="text-electric-blue font-semibold">financial primitives</span> that bridge 
              <span className="text-neon-cyan font-semibold">traditional and decentralized finance</span>.
            </p>
            
            {/* Call to action */}
            <div className="mt-10">
              <Button className="btn-premium px-10 py-4 text-lg rounded-xl">
                Explore YIELD Features
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WYLDsAbout;
