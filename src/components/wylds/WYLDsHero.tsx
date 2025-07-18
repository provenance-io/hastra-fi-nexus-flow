
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
    <section className="relative py-8 md:py-12 overflow-hidden">
      {/* Premium layered background - matching homepage */}
      {/* Unified seamless background - removed conflicting gradient */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiIgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIiBmaWxsPSJub25lIiBzdHJva2U9InJnYmEoMTAsIDIwLCA0MCwwLjA1KSI+PGQgcGF0aD0iTTAtMSAwIDEgTS0xIDAgMSAwIj48L2Q+PC9zdmc+')] opacity-30"></div>
      
      <div className="container relative text-center">
        <div className="text-sm font-medium mb-8 animate-pulse inline-block">
          <span className="mr-2 w-2 h-2 bg-header-glow rounded-full animate-pulse"></span>
          <span className="text-gradient font-semibold">Now available on Solana</span>
        </div>
        
        <div className="mb-6 flex justify-center">
          <img 
            src="/lovable-uploads/cb96356b-822d-4dc0-963a-96ef43bfedbd.png" 
            alt="YIELD Token" 
            className="w-32 h-32 md:w-40 md:h-40 drop-shadow-2xl"
          />
        </div>
        
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-8 text-platinum/90">
          <span className="text-header-glow">TRADE IT.</span>{" "}
          <span className="text-crypto-accent">LEND IT.</span>{" "}
          <span className="text-header-glow">SPEND IT.</span>{" "}
          <span className="text-gradient">SEND IT.</span>
        </h2>
        
        <p className="max-w-4xl mx-auto text-xl md:text-2xl text-platinum/80 leading-relaxed mb-12">
          Earn yield on-the-go and spend whenever you want - backed by real world assets.
        </p>

        {/* Enhanced APY Display */}
        <div className="my-12">
          <div className="card-premium rounded-2xl p-6 max-w-xs mx-auto pulse-glow-premium">
            <p className="text-lg text-platinum/70 mb-2">Current APY</p>
            <div className="relative">
              <div className="text-5xl md:text-6xl font-bold relative z-10 flex items-center justify-center gap-2">
                {apyLoading && <Loader2 className="h-8 w-8 animate-spin" />}
                <span className={apyLoading ? 'opacity-50' : apyError ? 'text-red-400' : 'text-gradient'}>
                  {displayApy}
                </span>
              </div>
              <div className="absolute inset-0 text-gradient opacity-30 blur-sm">
                {displayApy}
              </div>
            </div>
            <div className="flex justify-center items-center gap-2 mt-4">
              <div className={`w-2 h-2 rounded-full ${apyError ? 'bg-red-400' : 'bg-header-glow animate-pulse'}`}></div>
              <span className="text-sm text-platinum/60">{apyError ? 'Error' : 'Live Rate'}</span>
            </div>
          </div>
        </div>
        
        <div className="flex justify-center mb-4">
          <Button 
            size="lg" 
            className="bg-orange-900/20 border border-orange-800/30 text-orange-300 hover:bg-orange-900/30 hover:border-orange-800/40 focus-ring font-bold px-12 py-6 text-lg rounded-2xl min-w-[240px] group transition-all duration-200"
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
