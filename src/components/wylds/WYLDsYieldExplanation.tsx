import { Button } from '@/components/ui/button';
import { Shield, TrendingUp, Globe } from 'lucide-react';

const WYLDsYieldExplanation = () => {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-header-glow/5 to-crypto-accent/5"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient bg-gradient-to-r from-electric-blue via-neon-cyan to-premium-gold bg-clip-text text-transparent">
            What is YIELD?
          </h2>
          <p className="text-lg md:text-xl text-platinum/80 max-w-4xl mx-auto leading-relaxed">
            YIELD is a token representing a vault of the YLDS token - the first SEC-registered, yield-bearing stablecoin combining the liquidity of traditional stablecoins with the earning power of a money market fund. As users deposit USDC, Hastra purchases, holds, and distributes YIELD to token holders.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid gap-10 md:grid-cols-3 mb-20">
          {[
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
          ].map((feature, index) => (
            <div 
              key={feature.title} 
              className="group perspective-1000 h-64 cursor-pointer"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180">
                {/* Front of card */}
                <div className="absolute inset-0 w-full h-full backface-hidden">
                  <div className="w-full h-full card-premium pointer-events-none border border-electric-blue/20 rounded-2xl">
                    <div className="p-8 text-center h-full flex flex-col justify-center">
                      <div className="w-20 h-20 glass-premium rounded-2xl mx-auto mb-6 flex items-center justify-center pulse-glow-premium">
                        <feature.icon className="h-10 w-10 text-electric-blue" />
                      </div>
                      <h3 className="text-2xl font-bold text-premium-gradient">{feature.title}</h3>
                    </div>
                  </div>
                </div>
                
                {/* Back of card */}
                <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180">
                  <div className="w-full h-full card-premium pointer-events-none border border-electric-blue/20 rounded-2xl">
                    <div className="p-8 text-center h-full flex flex-col justify-center">
                      <p className="text-platinum/80 leading-relaxed text-lg">{feature.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-electric-blue to-neon-cyan hover:from-electric-blue/80 hover:to-neon-cyan/80 text-black font-semibold px-8 py-3 text-lg shadow-lg hover:shadow-electric-blue/20 transition-all duration-300"
          >
            Learn more about YLDS
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WYLDsYieldExplanation;