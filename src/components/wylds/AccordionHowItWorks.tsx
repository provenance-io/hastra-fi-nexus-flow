import { useState } from 'react';
import { ChevronDown, ChevronUp, TrendingUp, Calendar } from 'lucide-react';
import YieldTokenIcon from '@/components/wylds/YieldToken3DContainer';

interface Step {
  number: number;
  icon: any;
  title: string;
  description: string;
  color: string;
  bgPattern: string;
}

const AccordionHowItWorks = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps: Step[] = [
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
      description: "Watch your balance grow on hastra.io - Yield is automatically calculated.",
      color: "from-crypto-accent to-header-glow",
      bgPattern: "bg-crypto-accent/10"
    },
    {
      number: 3,
      icon: Calendar,
      title: "Monthly Distributions",
      description: "Your yield is distributed automatically every month, directly to your wallet.",
      color: "from-orange-400 to-crypto-accent",
      bgPattern: "bg-orange-400/10"
    }
  ];

  const handleNext = () => {
    setActiveStep((prev) => (prev + 1) % steps.length);
  };

  const handlePrev = () => {
    setActiveStep((prev) => (prev - 1 + steps.length) % steps.length);
  };

  const currentStep = steps[activeStep];
  const IconComponent = currentStep.icon;

  return (
    <div className="w-full max-w-sm mx-auto">
      {/* Card Container with Fixed Height */}
      <div className="relative h-[400px] overflow-hidden">
        <div 
          className="transition-transform duration-500 ease-in-out"
          style={{ transform: `translateY(-${activeStep * 400}px)` }}
        >
          {steps.map((step, index) => {
            const StepIconComponent = step.icon;
            return (
              <div 
                key={step.number}
                className="w-full h-[400px] flex flex-col"
              >
                <div className="relative group">
                  {/* Number Badge */}
                  <div className="absolute -top-3 -right-3 w-10 h-10 bg-orange-900/20 border border-orange-800/30 text-orange-300 rounded-full flex items-center justify-center font-bold text-base shadow-lg z-10">
                    {step.number}
                  </div>
                  
                  {/* Card */}
                  <div className="w-full card-gradient rounded-2xl p-6 md:p-8 text-center space-y-6 hover:bg-background/60 transition-all duration-300 relative overflow-hidden">
                    
                    {/* Icon Container */}
                    <div className="relative z-10 mb-6 flex justify-center">
                      {step.number === 1 ? (
                        <StepIconComponent className="w-16 h-16 md:w-20 md:h-20" />
                      ) : (
                        <div className={`w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                          <StepIconComponent className="w-8 h-8 md:w-10 md:h-10 text-black" />
                        </div>
                      )}
                    </div>
                    
                    {/* Content */}
                    <div className="relative z-10 space-y-4">
                      <h4 className={`font-bold text-xl md:text-2xl transition-colors duration-300 ${
                        step.number <= 2 ? 'text-header-glow' : 'text-header-glow group-hover:text-crypto-accent'
                      }`}>
                        {step.title}
                      </h4>
                      <p className="text-foreground/90 text-base md:text-lg leading-relaxed px-2">
                        {step.description}
                      </p>
                    </div>
                    
                    {/* Navigation Controls */}
                    <div className="flex justify-center items-center gap-4 pt-4">
                      {/* Previous Button */}
                      <button
                        onClick={handlePrev}
                        className="p-3 rounded-full bg-background/50 hover:bg-background/70 transition-all duration-200 disabled:opacity-50"
                        disabled={steps.length <= 1}
                      >
                        <ChevronUp className="w-6 h-6 text-orange-300" />
                      </button>
                      
                      {/* Step Indicators */}
                      <div className="flex gap-2">
                        {steps.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => setActiveStep(index)}
                            className={`w-3 h-3 rounded-full transition-all duration-200 ${
                              index === activeStep 
                                ? 'bg-header-glow shadow-lg shadow-header-glow/50' 
                                : 'bg-foreground/30 hover:bg-foreground/50'
                            }`}
                          />
                        ))}
                      </div>
                      
                      {/* Next Button */}
                      <button
                        onClick={handleNext}
                        className="p-3 rounded-full bg-background/50 hover:bg-background/70 transition-all duration-200 disabled:opacity-50"
                        disabled={steps.length <= 1}
                      >
                        <ChevronDown className="w-6 h-6 text-orange-300" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AccordionHowItWorks;