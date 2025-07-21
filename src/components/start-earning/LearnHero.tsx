
import { Button } from '@/components/ui/button';
import { BookOpen, ArrowRight } from 'lucide-react';

const LearnHero = () => {
  return (
    <section className="relative py-24 md:py-40 overflow-hidden" role="banner">
      {/* Unified seamless background - matches homepage */}
      
      <div className="container relative z-20">
        <div className="text-center space-y-8 animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center text-sm font-medium text-foreground/90">
            <span className="mr-2 w-2 h-2 bg-header-glow rounded-full animate-pulse"></span>
            <span className="flex items-center gap-1">
              DeFi Education Hub
            </span>
          </div>

          {/* Main heading with stable animations */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight">
            <span className="block text-gradient">
              Learn DeFi
            </span>
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
              Start Earning
            </span>
          </h1>

          {/* Subtitle with stable timing */}
          <div>
            <p className="text-xl md:text-2xl text-foreground/90 max-w-4xl mx-auto leading-relaxed" style={{ textShadow: '0 0 10px rgba(255, 255, 255, 0.3), 0 0 20px rgba(255, 255, 255, 0.1)' }}>
              Master DeFi fundamentals and start earning with <span className="font-semibold">YIELD</span> and <span className="font-semibold">HOMES</span> tokens.
            </p>
          </div>

          {/* CTA buttons with stable animations */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12">
            <Button 
              size="lg" 
              variant="secondary"
              className="min-w-[200px] group"
              onClick={() => {
                const guidesSection = document.querySelector('[data-section="learning"]');
                if (guidesSection) {
                  guidesSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Start Learning
              <BookOpen className="ml-2 h-5 w-5 transition-transform group-hover:scale-110" />
            </Button>
            <Button 
              size="lg" 
              variant="secondary"
              className="min-w-[200px] group"
              asChild
            >
              <a href="/earn">
                Skip to Earning
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearnHero;
