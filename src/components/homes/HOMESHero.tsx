import { Button } from '@/components/ui/button';
import { ArrowRight, Home, TrendingUp } from 'lucide-react';

const HOMESHero = () => {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-amber-900/10 to-orange-900/10 backdrop-blur-sm"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiIgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIiBmaWxsPSJub25lIiBzdHJva2U9InJnYmEoMTAsIDIwLCA0MCwwLjA1KSI+PGQgcGF0aD0iTTAtMSAwIDEgTS0xIDAgMSAwIj48L2Q+PC9zdmc+')] opacity-60"></div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 opacity-20 animate-float">
        <Home className="w-8 h-8 text-amber-500" />
      </div>
      <div className="absolute top-32 right-16 opacity-20 animate-float" style={{ animationDelay: '1s' }}>
        <TrendingUp className="w-6 h-6 text-orange-500" />
      </div>
      
      <div className="container relative text-center animate-fade-in">
        <div className="inline-block bg-amber-700/50 border border-amber-600 rounded-full px-3 py-1 text-sm mb-4 animate-pulse-light">
          Powered by Provenance Blockchain
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
          HOMES
        </h1>
        <h2 className="mt-4 text-4xl md:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400">
          Tokenized Real Estate
        </h2>
        <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground">
          Access premium real estate investments through blockchain technology. Own fractions of high-value properties with complete transparency and liquidity.
        </p>

        <div className="my-8">
          <p className="text-lg text-muted-foreground">Total Value Locked</p>
          <p className="text-6xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-orange-500">$2.4M</p>
        </div>
        
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <Button 
            size="lg" 
            className="btn-gradient focus-ring font-bold px-8 py-3 rounded-xl text-base group min-w-[180px]"
          >
            Explore Properties
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="focus-ring font-bold px-8 py-3 rounded-xl text-base glass-effect hover:bg-background/90 border-border/50 hover:border-header-glow/30 min-w-[180px]"
          >
            Learn More
            <Home className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HOMESHero;