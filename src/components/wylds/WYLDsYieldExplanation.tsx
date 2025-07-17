import { Button } from '@/components/ui/button';
import { ArrowRight, ChevronDown } from 'lucide-react';

const WYLDsYieldExplanation = () => {
  const steps = [
    {
      number: 1,
      title: "Hold YIELD tokens",
      description: "Simply hold YIELD tokens in any compatible Solana wallet"
    },
    {
      number: 2,
      title: "Watch your balance grow",
      description: "Watch your balance grow without any additional action. Yield is automatically calculated."
    },
    {
      number: 3,
      title: "Monthly Distributions",
      description: "YIELD is distributed on a monthly basis"
    },
    {
      number: 4,
      title: "Use daily, or redeem for USDC",
      description: "Easily redeem your YIELD through Raydium and Kamino protocols"
    }
  ];

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

        {/* How It Works */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-12 text-electric-blue">
            How It Works
          </h3>
          
          {/* Desktop: Horizontal Layout */}
          <div className="hidden lg:flex items-center justify-between max-w-6xl mx-auto">
            {steps.map((step, index) => (
              <div key={step.number} className="flex items-center">
                {/* Step Card */}
                <div className="bg-card/50 backdrop-blur-sm border border-electric-blue/20 rounded-xl p-6 max-w-xs text-center hover:bg-card/70 hover:border-electric-blue/40 transition-all duration-300 group">
                  {/* Number Circle */}
                  <div className="w-12 h-12 bg-gradient-to-r from-electric-blue to-neon-cyan rounded-full flex items-center justify-center text-black font-bold text-lg mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                    {step.number}
                  </div>
                  
                  {/* Content */}
                  <h4 className="font-semibold text-lg mb-3 text-electric-blue">
                    {step.title}
                  </h4>
                  <p className="text-platinum/70 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
                
                {/* Arrow Connector (except for last step) */}
                {index < steps.length - 1 && (
                  <div className="mx-6 flex-shrink-0">
                    <ArrowRight className="w-8 h-8 text-electric-blue/60" />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile/Tablet: Vertical Layout */}
          <div className="lg:hidden space-y-8 max-w-md mx-auto">
            {steps.map((step, index) => (
              <div key={step.number}>
                {/* Step Card */}
                <div className="bg-card/50 backdrop-blur-sm border border-electric-blue/20 rounded-xl p-6 text-center hover:bg-card/70 hover:border-electric-blue/40 transition-all duration-300 group">
                  {/* Number Circle */}
                  <div className="w-12 h-12 bg-gradient-to-r from-electric-blue to-neon-cyan rounded-full flex items-center justify-center text-black font-bold text-lg mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                    {step.number}
                  </div>
                  
                  {/* Content */}
                  <h4 className="font-semibold text-lg mb-3 text-electric-blue">
                    {step.title}
                  </h4>
                  <p className="text-platinum/70 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
                
                {/* Down Arrow Connector (except for last step) */}
                {index < steps.length - 1 && (
                  <div className="flex justify-center my-4">
                    <ChevronDown className="w-6 h-6 text-electric-blue/60" />
                  </div>
                )}
              </div>
            ))}
          </div>
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