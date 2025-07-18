import { Button } from '@/components/ui/button';
import { ArrowRight, ChevronDown, Wallet, TrendingUp, Calendar, Repeat, Shield, Globe } from 'lucide-react';

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
      description: "Yield is distributed to your Solana wallet on a monthly basis in YIELD tokens",
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
      {/* Unified seamless background - removed conflicting gradient */}
      
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient bg-gradient-to-r from-electric-blue via-neon-cyan to-premium-gold bg-clip-text text-transparent">
            What is YIELD?
          </h2>
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

        {/* Description */}
        <div className="text-center mb-20">
          <p className="text-lg md:text-xl text-platinum/80 max-w-4xl mx-auto leading-relaxed">
            YIELD is a token representing a vault of the YLDS token - the first SEC-registered, yield-bearing stablecoin combining the liquidity of traditional stablecoins with the earning power of a money market fund. As users deposit USDC, Hastra purchases, holds, and distributes YIELD to token holders.
          </p>
        </div>

        {/* How It Works - Clean Infographic Style */}
        <div className="mb-20">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-transparent bg-gradient-to-r from-electric-blue via-neon-cyan to-premium-gold bg-clip-text mb-4">
              How It Works
            </h3>
            <div className="w-24 h-1 bg-gradient-to-r from-electric-blue to-neon-cyan mx-auto rounded-full"></div>
          </div>
          
          {/* Desktop: Scrollable Horizontal Layout */}
          <div className="hidden lg:block max-w-7xl mx-auto">
            <div className="overflow-x-auto pb-4 scrollbar-hide">
              <div className="flex items-center gap-4 min-w-max px-4 py-4">
                {steps.map((step, index) => {
                  const IconComponent = step.icon;
                  return (
                    <div key={step.number} className="flex items-center flex-shrink-0">
                      {/* Step Card - Fixed Size */}
                      <div className="relative group">
                        {/* Number Badge */}
                        <div className="absolute -top-3 -right-3 w-8 h-8 bg-gradient-to-r from-premium-gold to-electric-blue rounded-full flex items-center justify-center text-black font-bold text-sm shadow-lg z-10">
                          {step.number}
                        </div>
                        
                        {/* Card Container - Fixed Dimensions */}
                        <div className="w-72 h-80 bg-gradient-to-br from-card/90 to-card/70 backdrop-blur-sm border border-electric-blue/20 rounded-2xl p-6 text-center hover:border-electric-blue/40 transition-all duration-300 group-hover:shadow-xl group-hover:shadow-electric-blue/10 relative overflow-hidden">
                          {/* Hover Overlay */}
                          <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl`}></div>
                          
                          {/* Icon Container */}
                          <div className="relative z-10 mb-6 flex justify-center">
                            <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                              <IconComponent className="w-8 h-8 text-black" />
                            </div>
                          </div>
                          
                          {/* Content */}
                          <div className="relative z-10 h-44 flex flex-col justify-between">
                            <h4 className="font-bold text-xl text-electric-blue group-hover:text-neon-cyan transition-colors duration-300 mb-4">
                              {step.title}
                            </h4>
                            <p className="text-platinum/80 text-sm leading-relaxed flex-1 flex items-center justify-center">
                              {step.description}
                            </p>
                          </div>
                        </div>
                      </div>
                      
                      {/* Arrow Connector */}
                      {index < steps.length - 1 && (
                        <div className="mx-4 flex items-center justify-center h-80">
                          <div className="flex items-center">
                            <div className="w-6 h-0.5 bg-gradient-to-r from-electric-blue to-neon-cyan rounded-full"></div>
                            <ArrowRight className="w-6 h-6 text-neon-cyan mx-2" />
                            <div className="w-6 h-0.5 bg-gradient-to-r from-neon-cyan to-premium-gold rounded-full"></div>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Mobile/Tablet: Clean Vertical Layout */}
          <div className="lg:hidden max-w-sm mx-auto space-y-6">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div key={step.number} className="relative">
                  {/* Step Card - Consistent Mobile Size */}
                  <div className="relative group">
                    {/* Number Badge */}
                    <div className="absolute -top-3 -right-3 w-8 h-8 bg-gradient-to-r from-premium-gold to-electric-blue rounded-full flex items-center justify-center text-black font-bold text-sm shadow-lg z-10">
                      {step.number}
                    </div>
                    
                    {/* Card Container - Fixed Mobile Dimensions */}
                    <div className="w-full h-64 bg-gradient-to-br from-card/90 to-card/70 backdrop-blur-sm border border-electric-blue/20 rounded-2xl p-6 text-center hover:border-electric-blue/40 transition-all duration-300 group-hover:shadow-xl group-hover:shadow-electric-blue/10 relative overflow-hidden">
                      {/* Hover Overlay */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl`}></div>
                      
                      {/* Icon Container */}
                      <div className="relative z-10 mb-4 flex justify-center">
                        <div className={`w-14 h-14 bg-gradient-to-br ${step.color} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                          <IconComponent className="w-7 h-7 text-black" />
                        </div>
                      </div>
                      
                      {/* Content */}
                      <div className="relative z-10 h-36 flex flex-col justify-between">
                        <h4 className="font-bold text-lg text-electric-blue group-hover:text-neon-cyan transition-colors duration-300 mb-3">
                          {step.title}
                        </h4>
                        <p className="text-platinum/80 text-sm leading-relaxed flex-1 flex items-center justify-center">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Down Arrow Connector */}
                  {index < steps.length - 1 && (
                    <div className="flex justify-center my-6">
                      <div className="bg-gradient-to-b from-electric-blue to-neon-cyan rounded-full p-2">
                        <ChevronDown className="w-4 h-4 text-black" />
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
            className="bg-orange-900/20 border border-orange-800/30 text-orange-300 hover:bg-orange-900/30 hover:border-orange-800/40 focus-ring font-bold px-8 py-3 text-lg rounded-xl transition-all duration-200"
            asChild
          >
            <a href="https://www.ylds.com/" target="_blank" rel="noopener noreferrer">
              Learn more about YLDS
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WYLDsYieldExplanation;