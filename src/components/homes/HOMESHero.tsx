import { Button } from '@/components/ui/button';
import { ArrowRight, Home, TrendingUp } from 'lucide-react';

const HOMESHero = () => {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-header-glow/5 to-crypto-accent/5"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiIgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIiBmaWxsPSJub25lIiBzdHJva2U9InJnYmEoMTAsIDIwLCA0MCwwLjA1KSI+PGQgcGF0aD0iTTAtMSAwIDEgTS0xIDAgMSAwIj48L2Q+PC9zdmc+')] opacity-40"></div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 opacity-20 animate-float">
        <Home className="w-8 h-8 text-header-glow" />
      </div>
      <div className="absolute top-32 right-16 opacity-20 animate-float" style={{ animationDelay: '1s' }}>
        <TrendingUp className="w-6 h-6 text-crypto-accent" />
      </div>
      
      <div className="container relative text-center animate-fade-in">
        <div className="inline-flex items-center px-4 py-2 rounded-full glass-effect border border-header-glow/20 text-sm font-medium text-foreground/80 animate-glow-pulse mb-6">
          <span className="mr-2 w-2 h-2 bg-header-glow rounded-full animate-pulse"></span>
          Powered by Provenance Blockchain
        </div>
        
        <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-4">
          <span className="block text-gradient">HOMES</span>
        </h1>
        <h2 className="text-4xl md:text-6xl font-black tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
          Tokenized Real Estate
        </h2>
        <p className="mt-6 max-w-4xl mx-auto text-xl md:text-2xl text-muted-foreground leading-relaxed">
          Access premium real estate investments through blockchain technology. Own fractions of high-value properties with complete transparency and liquidity.
        </p>

        <div className="my-8">
          <p className="text-lg text-muted-foreground">Total Value Locked</p>
          <p className="text-6xl md:text-7xl font-bold text-gradient">$2.4M</p>
        </div>
        
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <Button 
            size="lg" 
            className="bg-orange-900/20 border border-orange-800/30 text-orange-300 hover:bg-orange-900/30 hover:border-orange-800/40 focus-ring font-bold px-8 py-4 text-lg rounded-xl min-w-[200px] group"
          >
            Explore Properties
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button 
            size="lg" 
            className="bg-orange-900/20 border border-orange-800/30 text-orange-300 hover:bg-orange-900/30 hover:border-orange-800/40 focus-ring font-bold px-8 py-4 text-lg rounded-xl min-w-[200px] group"
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