import { Button } from '@/components/ui/button';
import { Building2, Zap, Link2 } from 'lucide-react';
import yieldIcon from '/lovable-uploads/1d678c0f-09c8-4451-a9a6-3e635e0fef72.png';
import AccordionHowItWorks from '@/components/wylds/AccordionHowItWorks';

const YieldTokenIcon = ({ className }: { className?: string }) => (
  <img src={yieldIcon} alt="YIELD Token" className={`${className} object-contain`} />
);

const WYLDsYieldExplanation = () => {

  return (
    <section className="py-16 px-4 relative overflow-hidden">
      {/* Background gradient */}
      {/* Unified seamless background - removed conflicting gradient */}
      
      <div className="max-w-5xl mx-auto px-4 relative z-10">
        {/* Dashboard Box - Matching About page styling */}
        <div className="card-gradient rounded-3xl p-8 md:p-12 border border-transparent mb-16 relative">
          <div className="relative z-10">
            {/* Section Header - Inside the box */}
            <div className="text-center mb-12">
              <p className="max-w-3xl mx-auto text-lg md:text-xl lg:text-2xl text-platinum/80 leading-relaxed mb-6 md:mb-8" 
                 style={{ 
                   textShadow: '0 0 10px rgba(255, 255, 255, 0.3), 0 0 20px rgba(255, 255, 255, 0.1)' 
                 }}>
                What is YIELD?
              </p>
            </div>
            {/* Feature Cards */}
            <div className="grid gap-6 md:gap-10 md:grid-cols-3">
              {[
                {
                  icon: Building2,
                  title: 'Backed by RWAs',
                  description: 'YIELD token is backed by reserves of YLDS - the first SEC-registered, yield-bearing stablecoin backed by real world assets.',
                },
                {
                  icon: Zap,
                  title: 'Automatic Yield',
                  description: 'Earn yield automatically just by holding YIELD in your wallet - no staking required.',
                },
                {
                  icon: Link2,
                  title: 'Cross-Chain',
                  description: 'Available on Solana with plans to expand to additional blockchain networks.',
                },
              ].map((feature, index) => (
                <div 
                  key={feature.title} 
                  className="group perspective-1000 h-48 md:h-56 cursor-pointer"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <div className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180">
                    {/* Front of card */}
                    <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(0deg)]">
                      <div className="w-full h-full card-gradient rounded-2xl p-4 md:p-6 text-center space-y-3 hover:bg-background/80 transition-all duration-300 bg-background/95 backdrop-blur-sm">
                        <div className="h-full flex flex-col justify-center">
                          <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-header-glow to-crypto-accent rounded-xl md:rounded-2xl mx-auto mb-4 md:mb-6 flex items-center justify-center shadow-lg">
                            <feature.icon className="h-8 w-8 md:h-10 md:w-10 text-black" />
                          </div>
                          <h3 className="text-base md:text-lg lg:text-2xl font-bold text-white px-2">{feature.title}</h3>
                        </div>
                      </div>
                    </div>
                    
                    {/* Back of card */}
                    <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)]">
                      <div className="w-full h-full card-gradient rounded-2xl p-4 md:p-6 text-center space-y-3 hover:bg-background/80 transition-all duration-300 bg-background/95 backdrop-blur-sm">
                        <div className="h-full flex flex-col justify-center">
                          <p className="text-sm md:text-base lg:text-lg text-platinum/90 leading-relaxed px-2">{feature.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Description */}
            <div className="text-center mb-16 mt-12">
            <p className="text-base md:text-lg lg:text-xl text-foreground/90 max-w-4xl mx-auto leading-relaxed px-4 md:px-6">
              YIELD is a token representing a portion of a pool of reserves holding the YLDS token - the first SEC-registered, yield-bearing stablecoin combining the liquidity of traditional stablecoins with the earning power of a money market fund.
              <br /><br />
              As users deposit USDC, Hastra purchases and holds YLDS, and distributes interest in YIELD to token holders.
            </p>
            </div>

            {/* CTA Button */}
            <div className="text-center">
              <Button 
                size="lg" 
                className="bg-orange-900/20 border border-orange-800/30 text-orange-300 hover:bg-orange-900/30 hover:border-orange-800/40 focus-ring font-bold px-8 py-3 text-lg rounded-xl transition-all duration-200"
                asChild
              >
                <a href="https://www.ylds.com/" target="_blank" rel="noopener noreferrer">
                  Learn more about YLDS
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* How It Works Dashboard Box */}
        <div className="card-gradient rounded-3xl p-8 md:p-12 border border-transparent mb-16 relative">
          <div className="relative z-10">
            {/* How It Works Section Header - Inside the box */}
            <div className="text-center mb-12">
              <p className="max-w-3xl mx-auto text-lg md:text-xl lg:text-2xl text-platinum/80 leading-relaxed mb-6 md:mb-8" 
                 style={{ 
                   textShadow: '0 0 10px rgba(255, 255, 255, 0.3), 0 0 20px rgba(255, 255, 255, 0.1)' 
                 }}>
                How It Works
              </p>
            </div>
          
            {/* Accordion Component for Mobile and Desktop */}
            <AccordionHowItWorks />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WYLDsYieldExplanation;