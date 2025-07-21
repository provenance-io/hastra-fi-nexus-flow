
import { products } from '@/data/content';
import { Button } from '@/components/ui/button';
import { ArrowRight, TrendingUp, Users, DollarSign, ExternalLink, Home, Building, Loader2 } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

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

const Products = () => {
  const navigate = useNavigate();
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

  const statIcons = {
    'Current APY': TrendingUp,
    'Total Supply': DollarSign,
    'Active Users': Users,
    'Total Value Locked': Building,
    'Properties': Home,
    'Avg. Yield': TrendingUp,
    'Target APY': TrendingUp,
    'Pool Size': DollarSign,
    'First Mover': ExternalLink,
  };

  // Create dynamic stats for YIELD product
  const yieldStats = [
    {
      label: 'Current APY',
      value: apyLoading ? 'Loading...' : apyError ? 'Error' : `${(apy || 0)}%`,
      isLoading: apyLoading,
      hasError: !!apyError,
    },
    {
      label: 'Total Supply',
      value: circulationLoading ? 'Loading...' : circulationError ? 'Error' : formatNumber(circulation || 0),
      isLoading: circulationLoading,
      hasError: !!circulationError,
    },
    {
      label: 'Active Users',
      value: holdersLoading ? 'Loading...' : holdersError ? 'Error' : formatHolders(holders || '0'),
      isLoading: holdersLoading,
      hasError: !!holdersError,
    },
  ];

  return (
    <section id="products" className="py-24 md:py-32 relative" role="region" aria-labelledby="products-heading">
      {/* Unified seamless background - removed conflicting gradient */}
      
      <div className="container relative">
        <div className="text-center space-y-4 mb-12 -mt-8">
          <h2 id="products-heading" className="text-4xl md:text-5xl font-bold tracking-tight">
            Grow your wealth, <span className="text-gradient">not your workload.</span>
          </h2>
          <p className="text-xl md:text-2xl text-foreground/90 max-w-4xl mx-auto leading-relaxed" style={{ textShadow: '0 0 10px rgba(255, 255, 255, 0.3), 0 0 20px rgba(255, 255, 255, 0.1)' }}>
            Explore new ways our tokens can earn APY for you.
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto space-y-8">
          {/* YIELD Product */}
          <div className="card-gradient rounded-3xl p-8 md:p-12 space-y-8 animate-fade-in-up">
            {/* Product header */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                {/* YIELD Token Icon */}
                <img 
                  src="/lovable-uploads/08452a7b-6782-4b0a-900e-0f0c99a4fc4e.png" 
                  alt="YIELD Token"
                  className="w-16 h-16 rounded-full"
                />
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div className="flex flex-col">
                      <h3 className="text-3xl md:text-4xl font-bold text-foreground transition-colors">
                        {products.live.name}
                      </h3>
                      <div className="flex items-center mt-1">
                        <div className="w-2 h-2 bg-orange-300 rounded-full mr-2 animate-pulse"></div>
                        <span className="text-sm font-medium animate-pulse-light" style={{ color: 'hsl(34, 100%, 84%)' }}>
                          {products.live.status}
                        </span>
                      </div>
                    </div>
                    <Button 
                      variant="secondary"
                      className="group sm:ml-4 cursor-pointer"
                      asChild
                    >
                      <Link to="/yield">
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
               <p className="text-xl md:text-2xl font-semibold" style={{ color: 'hsl(var(--hastra-teal))' }}>
                 Liquid Yield. No staking. Just Earning.
               </p>
             </div>

             {/* Product description */}
            <div className="space-y-4">
              <p className="text-lg md:text-xl text-foreground/90 leading-relaxed">
                {products.live.description}
              </p>
              
              <div className="flex items-start space-x-3 p-4 rounded-xl bg-orange-900/10 border border-orange-800/20">
                <TrendingUp className="w-5 h-5 text-orange-300 mt-0.5 flex-shrink-0" />
                <p className="text-foreground/90">
                  <span className="font-semibold text-orange-300">Innovation:</span>{' '}
                  <span className="text-foreground/90">{products.live.innovation}</span>
                </p>
              </div>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {yieldStats.map((stat, index) => {
                const IconComponent = statIcons[stat.label as keyof typeof statIcons] || TrendingUp;
                return (
                  <div 
                    key={stat.label} 
                    className="group bg-background/30 rounded-2xl p-6 text-center space-y-3 border border-border/20 hover:border-hastra-teal/20 transition-all duration-300"
                    style={{
                      animationDelay: `${index * 0.1}s`,
                      animation: 'fade-in-up 0.6s ease-out forwards'
                    }}
                  >
                    <IconComponent className="w-8 h-8 mx-auto text-orange-300 group-hover:scale-110 transition-transform duration-300" />
                    <div className="text-3xl md:text-4xl font-bold group-hover:scale-105 transition-transform duration-300 flex items-center justify-center gap-2">
                      {stat.isLoading && <Loader2 className="w-6 h-6 animate-spin" />}
                      <span className={stat.isLoading ? 'opacity-50' : stat.hasError ? 'text-red-400' : 'text-foreground/90'}>
                        {stat.value}
                      </span>
                    </div>
                    <div className="text-sm font-medium text-orange-300">
                      {stat.label}
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

          {/* HOMES Product */}
          <div className="card-gradient rounded-3xl p-8 md:p-12 space-y-8 animate-fade-in-up relative mt-16" style={{ animationDelay: '0.2s' }}>
            
            {/* Product header */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <img 
                    src="/lovable-uploads/e7aaba79-32ba-4351-820f-5388f7bed1c2.png" 
                    alt="HOMES Token"
                    className="w-16 h-16 rounded-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div className="flex flex-col">
                      <h3 className="text-3xl md:text-4xl font-bold text-foreground transition-colors">
                        {products.homes.name}
                      </h3>
                      <div className="flex items-center mt-1">
                        <div className="w-2 h-2 bg-orange-400 rounded-full mr-2 animate-pulse"></div>
                        <span className="text-sm font-medium text-orange-300 animate-pulse-light">
                          {products.homes.status}
                        </span>
                      </div>
                     </div>
                     <Link 
                       to="/homes"
                        onClick={() => {
                          // Navigation handled by Link component
                        }}
                     >
                       <Button 
                         size="lg" 
                         variant="secondary"
                         className="group sm:ml-4"
                       >
                         Learn More
                         <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                       </Button>
                     </Link>
                   </div>
                 </div>
               </div>
                <p className="text-xl md:text-2xl font-semibold" style={{ color: 'hsl(var(--mint-green))' }}>
                  {products.homes.tagline}
                </p>
             </div>

            {/* Product description */}
            <div className="space-y-4">
              <p className="text-lg md:text-xl text-foreground/90 leading-relaxed">
                {products.homes.description}
              </p>
              
              <div className="flex items-start space-x-3 p-4 rounded-xl bg-orange-900/10 border border-orange-800/20">
                <Home className="w-5 h-5 text-orange-300 mt-0.5 flex-shrink-0" />
                <p className="text-foreground/90">
                  <span className="font-semibold text-orange-300">Innovation:</span>{' '}
                  <span className="text-foreground/90">{products.homes.innovation}</span>
                </p>
              </div>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {products.homes.stats.map((stat, index) => {
                const IconComponent = statIcons[stat.label as keyof typeof statIcons] || Building;
                return (
                  <div 
                    key={stat.label} 
                    className="group bg-background/30 rounded-2xl p-6 text-center space-y-3 border border-border/20 hover:border-hastra-teal/20 transition-all duration-300"
                    style={{
                      animationDelay: `${(index + 3) * 0.1}s`,
                      animation: 'fade-in-up 0.6s ease-out forwards'
                    }}
                  >
                    <IconComponent className="w-8 h-8 mx-auto text-orange-300 group-hover:scale-110 transition-transform duration-300" />
                    <div className="text-3xl md:text-4xl font-bold text-foreground/90 group-hover:scale-105 transition-transform duration-300">
                      {stat.value}
                    </div>
                    <div className="text-sm font-medium text-orange-300">
                      {stat.label}
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
