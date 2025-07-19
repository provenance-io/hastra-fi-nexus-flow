import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, ChevronDown, TrendingUp, Calendar, Repeat, Shield, Globe } from 'lucide-react';
import yieldIcon from '/lovable-uploads/1d678c0f-09c8-4451-a9a6-3e635e0fef72.png';

const YieldTokenIcon = ({ className }: { className?: string }) => (
  <img src={yieldIcon} alt="YIELD Token" className={`${className} object-contain`} />
);

const WYLDsYieldExplanation = () => {
  const steps = [
    {
      number: 1,
      icon: YieldTokenIcon,
      title: "Hold YIELD tokens",
      description: "Simply hold YIELD tokens in any compatible Solana wallet",
      color: "from-header-glow to-crypto-accent",
      bgPattern: "bg-header-glow/10"
    },
    {
      number: 2,
      icon: TrendingUp,
      title: "Watch your balance grow",
      description: "Watch your balance grow without any additional action. Yield is automatically calculated.",
      color: "from-crypto-accent to-header-glow",
      bgPattern: "bg-crypto-accent/10"
    },
    {
      number: 3,
      icon: Calendar,
      title: "Monthly Distributions",
      description: "Claim your yield on hastra.io on a monthly basis in YIELD tokens",
      color: "from-header-glow to-crypto-accent",
      bgPattern: "bg-header-glow/10"
    },
    {
      number: 4,
      icon: Repeat,
      title: "Use daily, or redeem for USDC",
      description: "Easily redeem your YIELD through Raydium and Kamino protocols",
      color: "from-crypto-accent to-header-glow",
      bgPattern: "bg-crypto-accent/10"
    }
  ];

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background gradient */}
      {/* Unified seamless background - removed conflicting gradient */}
      
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* What is YIELD Dashboard Box */}
        <Card className="mb-20 bg-background/40 backdrop-blur-sm border-border/50">
          <CardHeader className="text-center pb-8">
            <CardTitle className="text-2xl md:text-3xl font-bold text-foreground/90">
              What is YIELD?
            </CardTitle>
          </CardHeader>
          
          <CardContent className="space-y-16">
            {/* Feature Cards */}
            <div className="grid gap-10 md:grid-cols-3">
              {[
                {
                  icon: Shield,
                  title: 'Backed by RWAs',
                  description: 'YIELD token is backed by reserves of YLDS - the first SEC-registered, yield-bearing stablecoin backed by real world assets.',
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
                  className="group perspective-1000 h-56 cursor-pointer"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <div className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180">
                    {/* Front of card */}
                    <div className="absolute inset-0 w-full h-full backface-hidden">
                      <div className="w-full h-full card-gradient rounded-2xl p-6 text-center space-y-3 hover:bg-background/60 transition-all duration-300">
                        <div className="h-full flex flex-col justify-center">
                          <div className="w-20 h-20 glass-premium rounded-2xl mx-auto mb-6 flex items-center justify-center pulse-glow-premium">
                            <feature.icon className="h-10 w-10 text-header-glow" />
                          </div>
                          <h3 className="text-2xl font-bold text-gradient">{feature.title}</h3>
                        </div>
                      </div>
                    </div>
                    
                    {/* Back of card */}
                    <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180">
                      <div className="w-full h-full card-gradient rounded-2xl p-6 text-center space-y-3 hover:bg-background/60 transition-all duration-300">
                        <div className="h-full flex flex-col justify-center">
                          <p className="text-platinum/80 leading-relaxed text-lg">{feature.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Description */}
            <div className="text-center">
              <p className="text-lg md:text-xl text-platinum/80 max-w-4xl mx-auto leading-relaxed">
                YIELD is a token representing a vault of the YLDS token - the first SEC-registered, yield-bearing stablecoin combining the liquidity of traditional stablecoins with the earning power of a money market fund. As users deposit USDC, Hastra purchases and holds YLDS, and distributes interest in YIELD to token holders.
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
          </CardContent>
        </Card>

        {/* How It Works - Clean Infographic Style */}
        <div className="mb-20">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground/90 mb-4">
              How It Works
            </h3>
            <div className="w-24 h-1 bg-gradient-to-r from-header-glow to-crypto-accent mx-auto rounded-full"></div>
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
                        <div className="absolute -top-3 -right-3 w-8 h-8 bg-orange-900/20 border border-orange-800/30 text-orange-300 rounded-full flex items-center justify-center font-bold text-sm shadow-lg z-10">
                          {step.number}
                        </div>
                        
                        {/* Card Container - Fixed Dimensions */}
                        <div className="w-64 h-72 card-gradient rounded-2xl p-6 text-center space-y-3 hover:bg-background/60 transition-all duration-300 relative overflow-hidden">
                          {/* Hover Overlay */}
                          <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl`}></div>
                          
                          {/* Icon Container */}
                          <div className="relative z-10 mb-4 flex justify-center">
                            {step.number === 1 ? (
                              <IconComponent className="w-14 h-14" />
                            ) : (
                              <div className={`w-14 h-14 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                <IconComponent className="w-7 h-7 text-black" />
                              </div>
                            )}
                          </div>
                          
                          {/* Content */}
                          <div className="relative z-10 h-36 flex flex-col justify-between">
                            <h4 className="font-bold text-lg text-header-glow group-hover:text-crypto-accent transition-colors duration-300 mb-3">
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
                        <div className="mx-4 flex items-center justify-center h-72">
                          <div className="flex items-center">
                            <div className="w-6 h-0.5 bg-gradient-to-r from-header-glow to-crypto-accent rounded-full"></div>
                            <ArrowRight className="w-6 h-6 text-crypto-accent mx-2" />
                            <div className="w-6 h-0.5 bg-gradient-to-r from-crypto-accent to-header-glow rounded-full"></div>
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
                    <div className="absolute -top-3 -right-3 w-8 h-8 bg-orange-900/20 border border-orange-800/30 text-orange-300 rounded-full flex items-center justify-center font-bold text-sm shadow-lg z-10">
                      {step.number}
                    </div>
                    
                    {/* Card Container - Fixed Mobile Dimensions */}
                    <div className="w-full h-56 card-gradient rounded-2xl p-6 text-center space-y-3 hover:bg-background/60 transition-all duration-300 relative overflow-hidden">
                      {/* Hover Overlay */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl`}></div>
                      
                       {/* Icon Container */}
                       <div className="relative z-10 mb-4 flex justify-center">
                         {step.number === 1 ? (
                           <IconComponent className="w-14 h-14" />
                         ) : (
                           <div className={`w-14 h-14 bg-gradient-to-br ${step.color} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                             <IconComponent className="w-7 h-7 text-black" />
                           </div>
                         )}
                       </div>
                      
                      {/* Content */}
                      <div className="relative z-10 h-28 flex flex-col justify-between">
                        <h4 className="font-bold text-lg text-header-glow group-hover:text-crypto-accent transition-colors duration-300 mb-3">
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
                      <div className="bg-gradient-to-b from-header-glow to-crypto-accent rounded-full p-2">
                        <ChevronDown className="w-4 h-4 text-black" />
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WYLDsYieldExplanation;