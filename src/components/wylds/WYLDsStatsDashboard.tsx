import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useQuery } from '@tanstack/react-query';
import { Loader2 } from 'lucide-react';

interface FigureYieldResponse {
  rate: number;
}

interface ProvenanceDenomOwnersResponse {
  pagination: {
    total: string;
  };
}

interface ProvenanceSupplyResponse {
  amount: {
    amount: string;
  };
}

const fetchCurrentAPY = async (): Promise<number> => {
  const response = await fetch('https://api.codetabs.com/v1/proxy?quest=https://www.figuremarkets.com/service-funds/public/api/v1/funds/17d885eb-13e9-47a4-ad2f-228c0aa89a91/yield');
  if (!response.ok) {
    throw new Error('Failed to fetch APY data');
  }
  const data: FigureYieldResponse = await response.json()
  return data.rate;
};

const fetchActiveHolders = async (): Promise<string> => {
  const response = await fetch('https://api.codetabs.com/v1/proxy?quest=https://api.provenance.io/cosmos/bank/v1beta1/denom_owners/uylds.fcc');
  if (!response.ok) {
    throw new Error('Failed to fetch active holders data');
  }
  const data: ProvenanceDenomOwnersResponse = await response.json();
  return data.pagination.total;
};

const fetchTotalCirculation = async (): Promise<number> => {
  const response = await fetch('https://api.codetabs.com/v1/proxy?quest=https://api.provenance.io/cosmos/bank/v1beta1/supply/by_denom?denom=uylds.fcc');
  if (!response.ok) {
    throw new Error('Failed to fetch circulation data');
  }
  const data: ProvenanceSupplyResponse = await response.json();
  return parseInt(data.amount.amount) / 1e6;
};

const formatNumber = (num: number): string => {
  if (num >= 1e9) {
    return `$${(num / 1e9).toFixed(1)}B`;
  } else if (num >= 1e6) {
    return `$${(num / 1e6).toFixed(1)}M`;
  } else if (num >= 1e3) {
    return `$${(num / 1e3).toFixed(1)}K`;
  }
  return `$${num.toFixed(2)}`;
};

const formatHolders = (holders: string): string => {
  const num = parseInt(holders);
  if (num >= 1000) {
    return `${(num / 1000).toFixed(1)}k+`;
  }
  return holders;
};

const WYLDsStatsDashboard = () => {
  const { data: apy, isLoading: apyLoading, error: apyError } = useQuery({
    queryKey: ['yield-apy'],
    queryFn: fetchCurrentAPY,
    refetchInterval: 5 * 60 * 1000, // Refetch every 5 minutes
  });

  const { data: holders, isLoading: holdersLoading, error: holdersError } = useQuery({
    queryKey: ['active-holders'],
    queryFn: fetchActiveHolders,
    refetchInterval: 5 * 60 * 1000, // Refetch every 5 minutes
  });

  const { data: circulation, isLoading: circulationLoading, error: circulationError } = useQuery({
    queryKey: ['total-circulation'],
    queryFn: fetchTotalCirculation,
    refetchInterval: 5 * 60 * 1000, // Refetch every 5 minutes
  });

  const stats = [
    {
      title: 'Total YIELD in Circulation',
      value: circulationLoading ? 'Loading...' : circulationError ? 'Error' : formatNumber(circulation || 0),
      description: 'The total value of YIELD tokens currently in circulation.',
      isLoading: circulationLoading,
      hasError: !!circulationError,
    },
    {
      title: 'Current APY',
      value: apyLoading ? 'Loading...' : apyError ? 'Error' : `${(apy || 0)}%`,
      description: 'The current annual percentage yield for holding YIELD.',
      isLoading: apyLoading,
      hasError: !!apyError,
    },
    {
      title: 'Total Yield Earned',
      value: '$1.2M',
      description: 'Cumulative yield distributed to all YIELD holders.',
      isLoading: false,
      hasError: false,
    },
    {
      title: 'Active Holders',
      value: holdersLoading ? 'Loading...' : holdersError ? 'Error' : formatHolders(holders || '0'),
      description: 'Total number of wallets currently holding YIELD tokens.',
      isLoading: holdersLoading,
      hasError: !!holdersError,
    },
  ];

  return (
    <section className="pt-12 pb-20 relative">
      {/* Premium background - matching homepage */}
      {/* Unified seamless background - removed conflicting gradient */}
      
      <div className="max-w-5xl mx-auto px-4 relative">
        <div className="max-w-5xl mx-auto">
          <div className="card-gradient rounded-3xl p-8 md:p-12 border border-transparent mb-16 relative">
            <div className="text-center mb-8">
              <p className="max-w-3xl mx-auto text-lg md:text-xl lg:text-2xl text-platinum/80 leading-relaxed mb-6 md:mb-8" 
                 style={{ 
                   textShadow: '0 0 10px rgba(255, 255, 255, 0.3), 0 0 20px rgba(255, 255, 255, 0.1)' 
                 }}>
                Track YIELD performance with real-time data and transparent metrics
              </p>
            </div>
            
            <div className="grid gap-6 md:gap-8 grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
            {stats.map((stat, index) => (
              <div 
                key={stat.title} 
                className="aspect-square card-gradient rounded-lg md:rounded-xl p-3 md:p-6 text-center flex flex-col justify-center space-y-1 md:space-y-3 hover:bg-background/60 transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-[10px] md:text-xs font-medium text-orange-300 leading-tight">
                  {stat.title}
                </div>
                <div className="text-lg md:text-xl lg:text-2xl font-bold flex items-center justify-center gap-1 md:gap-2">
                  {stat.isLoading && <Loader2 className="h-3 w-3 md:h-5 md:w-5 animate-spin" />}
                  <span className={stat.isLoading ? 'opacity-50' : stat.hasError ? 'text-red-400' : 'text-foreground/90'}>
                    {stat.value}
                  </span>
                </div>
                <div className="flex justify-center items-center gap-1 md:gap-2">
                  <div className={`w-1 h-1 md:w-1.5 md:h-1.5 rounded-full ${stat.hasError ? 'bg-red-400' : 'bg-header-glow animate-pulse'}`}></div>
                  <span className="text-[10px] md:text-xs text-platinum/60">{stat.hasError ? 'Error' : 'Live'}</span>
                </div>
              </div>
            ))}
           </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WYLDsStatsDashboard;
