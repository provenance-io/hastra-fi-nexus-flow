
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
      <div className="absolute inset-0 bg-gradient-to-br from-background via-blue-900/10 to-purple-900/10 backdrop-blur-sm"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiIgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIiBmaWxsPSJub25lIiBzdHJva2U9InJnYmEoMTAsIDIwLCA0MCwwLjA1KSI+PGQgcGF0aD0iTTAtMSAwIDEgTS0xIDAgMSAwIj48L2Q+PC9zdmc+')] opacity-60"></div>
      <div className="container relative text-center animate-fade-in">
        <div className="inline-block bg-gray-700/50 border border-gray-600 rounded-full px-3 py-1 text-sm mb-4 animate-pulse-light">
          Powered by Provenance Blockchain
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
          YIELD
        </h1>
        <h2 className="mt-4 text-4xl md:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400">
          Earn Yield on Your Stable
        </h2>
        <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground">
          A Hastra-Fi Innovation: The world's first SEC-registered yield-bearing stablecoin, now bridged to Solana.
        </p>

        <div className="my-8">
            <p className="text-lg text-muted-foreground">Current APY</p>
            <p className="text-6xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">{currentApy}</p>
        </div>
        
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button size="lg" className="btn-gradient focus-ring font-bold px-8 py-3 rounded-xl text-base group min-w-[180px]">
                Start Earning
                <ChevronDown className="ml-2 h-4 w-4 transition-transform group-data-[state=open]:rotate-180" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 glass-effect border-border/50" align="center">
              <DropdownMenuItem asChild>
                <a 
                  href="https://app.kamino.finance" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center w-full cursor-pointer p-3 hover:bg-header-glow/10 rounded-lg transition-colors group"
                >
                  <div className="flex items-center gap-3 flex-1">
                    <img 
                      src="/lovable-uploads/9edb1ae1-8f98-4dcd-90f7-4f7e3135521e.png" 
                      alt="Kamino Finance"
                      className="w-6 h-6 rounded-full group-hover:scale-110 transition-transform"
                    />
                    <span className="font-medium">Earn on Kamino</span>
                  </div>
                  <ExternalLink className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <a 
                  href="https://raydium.io" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center w-full cursor-pointer p-3 hover:bg-crypto-accent/10 rounded-lg transition-colors group"
                >
                  <div className="flex items-center gap-3 flex-1">
                    <img 
                      src="/lovable-uploads/30e0a19d-182e-4457-b5e0-58c467109e2f.png" 
                      alt="Raydium"
                      className="w-6 h-6 rounded-full group-hover:scale-110 transition-transform"
                    />
                    <span className="font-medium">Earn on Raydium</span>
                  </div>
                  <ExternalLink className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button 
            size="lg" 
            variant="outline" 
            className="focus-ring font-bold px-8 py-3 rounded-xl text-base glass-effect hover:bg-background/90 border-border/50 hover:border-header-glow/30 min-w-[180px]" 
            asChild
          >
            <a 
              href="https://ylds.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center"
            >
              Learn About YLDS
              <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WYLDsHero;
