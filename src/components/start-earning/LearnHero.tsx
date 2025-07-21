import { Button } from '@/components/ui/button';
import { BookOpen, ExternalLink, GraduationCap } from 'lucide-react';

const LearnHero = () => {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-header-glow/5 to-crypto-accent/5"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiIgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIiBmaWxsPSJub25lIiBzdHJva2U9InJnYmEoMTAsIDIwLCA0MCwwLjA1KSI+PGQgcGF0aD0iTTAtMSAwIDEgTS0xIDAgMSAwIj48L2Q+PC9zdmc+')] opacity-40"></div>
      
      <div className="container relative">
        {/* Hero Content */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6">
            <span className="block text-gradient">(L)earn</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-12">
            Don't know where to start? We got your back.
          </p>
        </div>


        {/* CTA Section */}
        <div className="text-center">
          <p className="text-lg text-muted-foreground mb-6">Start your DeFi education journey</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              className="min-w-[200px] group"
              variant="secondary"
              size="lg"
              onClick={() => {
                const guidesSection = document.querySelector('[data-section="guides"]');
                if (guidesSection) {
                  guidesSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Start Learning
              <BookOpen className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              className="min-w-[200px] group"
              variant="secondary"
              size="lg"
              asChild
            >
              <a href="/earn">
                Skip to Earning
                <ExternalLink className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearnHero;