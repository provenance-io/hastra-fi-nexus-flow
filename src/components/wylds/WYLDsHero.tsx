import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { ChevronDown, ExternalLink } from 'lucide-react';

const WYLDsHero = () => {
  const currentApy = '4.75%'; // Placeholder

  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Premium layered background - matching homepage */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-header-glow/5 to-crypto-accent/5"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiIgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIiBmaWxsPSJub25lIiBzdHJva2U9InJnYmEoMTAsIDIwLCA0MCwwLjA1KSI+PGQgcGF0aD0iTTAtMSAwIDEgTS0xIDAgMSAwIj48L2Q+PC9zdmc+')] opacity-30"></div>
      
      {/* Floating geometric elements */}
      <div className="absolute top-16 left-16 w-24 h-24 border border-neon-cyan/20 rounded-full animate-float opacity-60"></div>
      <div className="absolute top-32 right-16 w-16 h-16 border border-electric-blue/20 rotate-45 animate-float opacity-50" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-16 left-1/3 w-20 h-20 border border-premium-gold/20 rounded-xl animate-float opacity-40" style={{ animationDelay: '2s' }}></div>
      
      <div className="container relative text-center">
        <div className="glass-premium rounded-full px-6 py-3 text-sm font-medium mb-8 animate-glow-pulse inline-block">
          <span className="mr-2 w-2 h-2 bg-electric-blue rounded-full animate-pulse"></span>
          <span className="text-premium-gradient font-semibold">Built on Provenance Blockchain</span>
        </div>
        
        <h1 className="text-6xl md:text-8xl font-black tracking-tight mb-6 relative">
          <span className="block text-premium-gradient relative z-10">YIELD</span>
          <div className="absolute inset-0 text-premium-gradient opacity-20 blur-sm animate-pulse">YIELD</div>
        </h1>
        
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-8 text-platinum/90">
          <span className="text-electric-blue">TRADE IT.</span>{" "}
          <span className="text-neon-cyan">LEND IT.</span>{" "}
          <span className="text-premium-gold">SPEND IT.</span>{" "}
          <span className="text-premium-gradient">SEND IT.</span>
        </h2>
        
        <p className="max-w-4xl mx-auto text-xl md:text-2xl text-platinum/80 leading-relaxed mb-12">
          Earn yield on-the-go and spend whenever you want - backed by real world assets.
        </p>

        {/* Enhanced APY Display */}
        <div className="my-12">
          <div className="card-premium rounded-2xl p-8 max-w-md mx-auto pulse-glow-premium">
            <p className="text-lg text-platinum/70 mb-2">Current APY</p>
            <div className="relative">
              <p className="text-6xl md:text-7xl font-bold text-premium-gradient relative z-10">{currentApy}</p>
              <div className="absolute inset-0 text-premium-gradient opacity-30 blur-sm">
                {currentApy}
              </div>
            </div>
            <div className="flex justify-center items-center gap-2 mt-4">
              <div className="w-2 h-2 bg-electric-blue rounded-full animate-pulse"></div>
              <span className="text-sm text-platinum/60">Live Rate</span>
            </div>
          </div>
        </div>
        
        {/* Enhanced Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-6 mb-16">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button size="lg" className="btn-premium px-12 py-6 text-lg rounded-2xl min-w-[240px] group shadow-premium">
                Start (L)earning
                <ChevronDown className="ml-3 h-4 w-4 transition-transform group-data-[state=open]:rotate-180" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-64 glass-premium border-electric-blue/20" align="center">
              <DropdownMenuItem asChild>
                <a 
                  href="https://app.kamino.finance" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center w-full cursor-pointer p-4 hover:bg-electric-blue/10 rounded-lg transition-all duration-300 group"
                >
                  <div className="flex items-center gap-4 flex-1">
                    <img 
                      src="/lovable-uploads/9edb1ae1-8f98-4dcd-90f7-4f7e3135521e.png" 
                      alt="Kamino Finance"
                      className="w-8 h-8 rounded-full group-hover:scale-110 transition-transform shadow-lg"
                    />
                    <div>
                      <span className="font-semibold text-foreground">Earn on Kamino</span>
                      <div className="text-xs text-muted-foreground">Yield farming & lending</div>
                    </div>
                  </div>
                  <ExternalLink className="h-5 w-5 group-hover:translate-x-1 transition-transform text-electric-blue" />
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <a 
                  href="https://raydium.io" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center w-full cursor-pointer p-4 hover:bg-neon-cyan/10 rounded-lg transition-all duration-300 group"
                >
                  <div className="flex items-center gap-4 flex-1">
                    <img 
                      src="/lovable-uploads/30e0a19d-182e-4457-b5e0-58c467109e2f.png" 
                      alt="Raydium"
                      className="w-8 h-8 rounded-full group-hover:scale-110 transition-transform shadow-lg"
                    />
                    <div>
                      <span className="font-semibold text-foreground">Earn on Raydium</span>
                      <div className="text-xs text-muted-foreground">DEX & liquidity pools</div>
                    </div>
                  </div>
                  <ExternalLink className="h-5 w-5 group-hover:translate-x-1 transition-transform text-neon-cyan" />
                </a>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          
          <Button 
            size="lg" 
            className="btn-glass px-12 py-6 text-lg rounded-2xl min-w-[240px] group"
            asChild
          >
            <a 
              href="https://ylds.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center"
            >
              Learn About YLDS
              <ExternalLink className="ml-3 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WYLDsHero;
