
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { ChevronDown, ExternalLink, Loader2 } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';

interface FigureYieldResponse {
  rate: number;
}

const fetchCurrentAPY = async (): Promise<number> => {
  const response = await fetch('https://api.codetabs.com/v1/proxy?quest=https://www.figuremarkets.com/service-funds/public/api/v1/funds/17d885eb-13e9-47a4-ad2f-228c0aa89a91/yield');
  if (!response.ok) {
    throw new Error('Failed to fetch APY data');
  }
  const data: FigureYieldResponse = await response.json()
  return data.rate;
};

const WYLDsHero = () => {
  const { data: apy, isLoading: apyLoading, error: apyError } = useQuery({
    queryKey: ['yield-apy'],
    queryFn: fetchCurrentAPY,
    refetchInterval: 5 * 60 * 1000, // Refetch every 5 minutes
  });

  const displayApy = apyLoading ? 'Loading...' : apyError ? 'Error' : `${apy || 0}%`;

  return (
    <section className="relative py-12 md:py-20 overflow-hidden">
      {/* Premium layered background - matching homepage */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-header-glow/5 to-crypto-accent/5"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiIgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIiBmaWxsPSJub25lIiBzdHJva2U9InJnYmEoMTAsIDIwLCA0MCwwLjA1KSI+PGQgcGF0aD0iTTAtMSAwIDEgTS0xIDAgMSAwIj48L2Q+PC9zdmc+')] opacity-30"></div>
      
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
              <div className="text-6xl md:text-7xl font-bold relative z-10 flex items-center justify-center gap-2">
                {apyLoading && <Loader2 className="h-8 w-8 animate-spin" />}
                <span className={apyLoading ? 'opacity-50' : apyError ? 'text-red-400' : 'text-premium-gradient'}>
                  {displayApy}
                </span>
              </div>
              <div className="absolute inset-0 text-premium-gradient opacity-30 blur-sm">
                {displayApy}
              </div>
            </div>
            <div className="flex justify-center items-center gap-2 mt-4">
              <div className={`w-2 h-2 rounded-full ${apyError ? 'bg-red-400' : 'bg-electric-blue animate-pulse'}`}></div>
              <span className="text-sm text-platinum/60">{apyError ? 'Error' : 'Live Rate'}</span>
            </div>
          </div>
        </div>
        
        {/* Single CTA Button */}
        <div className="flex justify-center mb-16">
          <Button 
            size="lg" 
            className="btn-premium px-12 py-6 text-lg rounded-2xl min-w-[240px] group shadow-premium"
            asChild
          >
            <a 
              href="https://test.hastra.io/protocol" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center"
            >
              Get YIELD
              <ExternalLink className="ml-3 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WYLDsHero;
