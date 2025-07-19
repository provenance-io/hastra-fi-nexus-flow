import { Button } from '@/components/ui/button';
import { ArrowRight, Home, TrendingUp } from 'lucide-react';

const HOMESHero = () => {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Unified seamless background - removed conflicting gradients */}
      
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
          Now Available on Solana
        </div>
        
        <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-4">
          <span className="block text-gradient">HOMES</span>
        </h1>
        <h2 className="text-4xl md:text-6xl font-black tracking-tight" style={{ color: 'hsl(var(--mint-green))' }}>
          RWA Yield Pools
        </h2>
        <p className="mt-6 max-w-4xl mx-auto text-xl md:text-2xl text-muted-foreground leading-relaxed">
          Access competitive yields through Real World Asset pools on Solana. Earn attractive returns with both yield tokens and enhanced HASH token rewards.
        </p>

        <div className="my-8">
          <p className="text-lg text-muted-foreground">Target Yield</p>
          <p className="text-6xl md:text-7xl font-bold text-gradient">10%</p>
          <p className="text-sm text-muted-foreground mt-2">Annual Percentage Yield</p>
        </div>
        
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <Button 
            size="lg" 
            className="bg-orange-900/20 border border-orange-800/30 text-orange-300 hover:bg-orange-900/30 hover:border-orange-800/40 focus-ring font-bold px-8 py-4 text-lg rounded-xl min-w-[200px] group"
          >
            Learn More
            <TrendingUp className="ml-2 h-4 w-4" />
          </Button>
          <Button 
            size="lg" 
            className="bg-orange-900/20 border border-orange-800/30 text-orange-300 hover:bg-orange-900/30 hover:border-orange-800/40 focus-ring font-bold px-8 py-4 text-lg rounded-xl min-w-[200px] group"
          >
            Manage HOMES
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HOMESHero;