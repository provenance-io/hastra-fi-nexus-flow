
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

  console.log('my stats', stats)

  return (
    <section className="py-24 md:py-32 relative">
      {/* Premium background - matching homepage */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-header-glow/5 to-crypto-accent/5"></div>
      
      <div className="container relative">
        <div className="text-center mb-16">
          <div className="glass-premium rounded-full px-6 py-3 text-sm mb-8 inline-block">
            <span className="text-premium-gradient font-semibold">Real-Time Analytics</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-premium-gradient mb-6">Live Stats</h2>
          <p className="text-xl text-platinum/80 max-w-2xl mx-auto">
            Track YIELD performance with real-time data and transparent metrics
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <Card 
              key={stat.title} 
              className="card-premium card-premium-hover morphing-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-4">
                <CardTitle className="text-sm font-medium text-platinum/70">{stat.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl md:text-4xl font-bold text-premium-gradient mb-3 flex items-center gap-2">
                  {stat.isLoading && <Loader2 className="h-6 w-6 animate-spin" />}
                  <span className={stat.isLoading ? 'opacity-50' : stat.hasError ? 'text-red-400' : 'animate-pulse-light'}>
                    {stat.value}
                  </span>
                </div>
                <p className="text-sm text-platinum/60 leading-relaxed">{stat.description}</p>
                
                {/* Live indicator */}
                <div className="flex items-center gap-2 mt-4">
                  <div className={`w-2 h-2 rounded-full ${stat.hasError ? 'bg-red-400' : 'bg-electric-blue animate-pulse'}`}></div>
                  <span className="text-xs text-platinum/50">{stat.hasError ? 'Error' : 'Live'}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WYLDsStatsDashboard;
