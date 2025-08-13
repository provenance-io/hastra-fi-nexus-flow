import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Button } from '@/components/ui/button';
import { ArrowRight, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { fetchCurrentAPY } from '@/utils/solana-utils';

const SwYLDSHero = () => {
  const [displayApy, setDisplayApy] = useState("9.2");

  const { data: currentAPY, isLoading, error } = useQuery({
    queryKey: ['currentAPY'],
    queryFn: fetchCurrentAPY,
    refetchInterval: 5 * 60 * 1000, // Refetch every 5 minutes
  });

  useEffect(() => {
    if (currentAPY && !isLoading && !error) {
      setDisplayApy(currentAPY.toFixed(1));
    }
  }, [currentAPY, isLoading, error]);

  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-header-glow/5 to-crypto-accent/5"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-background/50 to-auburn-primary/5"></div>
      
      <div className="container relative z-10 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Earn{' '}
            <span className="bg-gradient-to-r from-crypto-accent to-auburn-primary bg-clip-text text-transparent">
              {displayApy}% APY
            </span>{' '}
            with swYLDS
          </h1>
          
          {/* Subheadline */}
          <div className="text-xl md:text-2xl lg:text-3xl font-semibold mb-6 text-platinum/90">
            Real Yield. Real Assets. Real Returns.
          </div>
          
          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Stake your wYLDS to earn sustainable yield backed by real-world HELOC lending operations. 
            Built on Figure Markets' SEC-registered foundation.
          </p>
          
          {/* Live APY Display */}
          <div className="inline-flex items-center space-x-3 bg-card/50 backdrop-blur-sm border border-border/40 rounded-2xl px-6 py-4 mb-8">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-muted-foreground">Live Rate</span>
            </div>
            <div className="text-2xl font-bold text-foreground">
              {isLoading ? "Loading..." : error ? "9.2%" : `${displayApy}%`}
            </div>
            <TrendingUp className="h-5 w-5 text-green-500" />
          </div>
          
          {/* Hero CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button asChild size="lg" className="bg-gradient-to-r from-crypto-accent to-auburn-primary hover:from-crypto-accent/90 hover:to-auburn-primary/90 text-white px-8 py-4 rounded-xl font-semibold">
              <Link to="/earn">
                Start Earning {displayApy}% APY
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="border-border/40 bg-background/50 backdrop-blur-sm px-8 py-4 rounded-xl">
              Learn How It Works
            </Button>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default SwYLDSHero;