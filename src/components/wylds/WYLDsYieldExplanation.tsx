import { Button } from '@/components/ui/button';
import { ArrowRight, ChevronDown, Wallet, TrendingUp, Calendar, Repeat } from 'lucide-react';

const WYLDsYieldExplanation = () => {
  const steps = [
    {
      number: 1,
      icon: Wallet,
      title: "Hold YIELD tokens",
      description: "Simply hold YIELD tokens in any compatible Solana wallet",
      color: "from-electric-blue to-neon-cyan",
      bgPattern: "bg-electric-blue/10"
    },
    {
      number: 2,
      icon: TrendingUp,
      title: "Watch your balance grow",
      description: "Watch your balance grow without any additional action. Yield is automatically calculated.",
      color: "from-neon-cyan to-premium-gold",
      bgPattern: "bg-neon-cyan/10"
    },
    {
      number: 3,
      icon: Calendar,
      title: "Monthly Distributions",
      description: "YIELD is distributed on a monthly basis",
      color: "from-premium-gold to-electric-blue",
      bgPattern: "bg-premium-gold/10"
    },
    {
      number: 4,
      icon: Repeat,
      title: "Use daily, or redeem for USDC",
      description: "Easily redeem your YIELD through Raydium and Kamino protocols",
      color: "from-electric-blue to-neon-cyan",
      bgPattern: "bg-electric-blue/10"
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

        {/* How It Works - Infographic Style */}
        <div className="mb-20">
          {/* Section Header with Visual Enhancement */}
          <div className="text-center mb-16 relative">
            <div className="inline-block relative">
              <h3 className="text-3xl md:text-4xl font-bold text-transparent bg-gradient-to-r from-electric-blue via-neon-cyan to-premium-gold bg-clip-text relative z-10">
                How It Works
              </h3>
              <div className="absolute inset-0 bg-gradient-to-r from-electric-blue/20 via-neon-cyan/20 to-premium-gold/20 blur-xl"></div>
            </div>
            <div className="w-24 h-1 bg-gradient-to-r from-electric-blue to-neon-cyan mx-auto mt-4 rounded-full"></div>
          </div>
          
          {/* Desktop: Enhanced Horizontal Infographic */}
          <div className="hidden lg:block">
            {/* Progress Line */}
            <div className="relative max-w-6xl mx-auto mb-8">
              <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-electric-blue via-neon-cyan via-premium-gold to-electric-blue rounded-full opacity-30"></div>
              <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-electric-blue via-neon-cyan via-premium-gold to-electric-blue rounded-full animate-pulse"></div>
            </div>
            
            <div className="flex items-start justify-between max-w-6xl mx-auto relative">
              {steps.map((step, index) => {
                const IconComponent = step.icon;
                return (
                  <div key={step.number} className="flex flex-col items-center relative group">
                    {/* Step Card */}
                    <div className={`${step.bgPattern} backdrop-blur-sm border-2 border-transparent bg-gradient-to-br from-card/80 to-card/60 rounded-2xl p-8 max-w-xs text-center hover:scale-105 transition-all duration-500 group-hover:shadow-2xl relative overflow-hidden`}>
                      {/* Animated Background */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl`}></div>
                      
                      {/* Floating Icon */}
                      <div className="relative z-10 mb-6">
                        <div className={`w-20 h-20 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center mx-auto group-hover:rotate-6 transition-transform duration-500 shadow-lg`}>
                          <IconComponent className="w-10 h-10 text-black" />
                        </div>
                        
                        {/* Step Number Badge */}
                        <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-premium-gold to-electric-blue rounded-full flex items-center justify-center text-black font-bold text-sm shadow-lg">
                          {step.number}
                        </div>
                      </div>
                      
                      {/* Content */}
                      <h4 className="font-bold text-xl mb-4 text-electric-blue group-hover:text-neon-cyan transition-colors duration-300">
                        {step.title}
                      </h4>
                      <p className="text-platinum/80 text-sm leading-relaxed relative z-10">
                        {step.description}
                      </p>
                      
                      {/* Decorative Elements */}
                      <div className="absolute top-4 right-4 w-2 h-2 bg-neon-cyan rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute bottom-4 left-4 w-1 h-1 bg-premium-gold rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    
                    {/* Enhanced Arrow Connectors */}
                    {index < steps.length - 1 && (
                      <div className="absolute top-20 -right-16 z-20">
                        <div className="flex items-center">
                          <div className="w-8 h-0.5 bg-gradient-to-r from-electric-blue to-neon-cyan"></div>
                          <ArrowRight className="w-6 h-6 text-neon-cyan ml-1 animate-pulse" />
                          <div className="w-8 h-0.5 bg-gradient-to-r from-neon-cyan to-premium-gold ml-1"></div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Mobile/Tablet: Enhanced Vertical Infographic */}
          <div className="lg:hidden max-w-sm mx-auto">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div key={step.number} className="relative">
                  {/* Vertical Progress Line */}
                  {index < steps.length - 1 && (
                    <div className="absolute left-1/2 top-32 bottom-0 w-1 bg-gradient-to-b from-electric-blue via-neon-cyan to-premium-gold opacity-30 transform -translate-x-1/2 z-0"></div>
                  )}
                  
                  {/* Step Card */}
                  <div className={`${step.bgPattern} backdrop-blur-sm border-2 border-transparent bg-gradient-to-br from-card/80 to-card/60 rounded-2xl p-6 text-center hover:scale-105 transition-all duration-500 relative overflow-hidden mb-8 group`}>
                    {/* Animated Background */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl`}></div>
                    
                    {/* Floating Icon */}
                    <div className="relative z-10 mb-6">
                      <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-xl flex items-center justify-center mx-auto group-hover:rotate-6 transition-transform duration-500 shadow-lg`}>
                        <IconComponent className="w-8 h-8 text-black" />
                      </div>
                      
                      {/* Step Number Badge */}
                      <div className="absolute -top-2 -right-6 w-6 h-6 bg-gradient-to-r from-premium-gold to-electric-blue rounded-full flex items-center justify-center text-black font-bold text-xs shadow-lg">
                        {step.number}
                      </div>
                    </div>
                    
                    {/* Content */}
                    <h4 className="font-bold text-lg mb-3 text-electric-blue group-hover:text-neon-cyan transition-colors duration-300">
                      {step.title}
                    </h4>
                    <p className="text-platinum/80 text-sm leading-relaxed relative z-10">
                      {step.description}
                    </p>
                    
                    {/* Decorative Elements */}
                    <div className="absolute top-4 right-4 w-2 h-2 bg-neon-cyan rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  
                  {/* Down Arrow Connector */}
                  {index < steps.length - 1 && (
                    <div className="flex justify-center -mt-4 mb-4 relative z-10">
                      <div className="bg-gradient-to-b from-electric-blue to-neon-cyan rounded-full p-2">
                        <ChevronDown className="w-4 h-4 text-black animate-bounce" />
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
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