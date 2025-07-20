
import { Button } from '@/components/ui/button';
import { ArrowRight, TrendingUp, Shield, Loader2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
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

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const heroRef = useRef<HTMLElement>(null);
  const coinsRef = useRef<HTMLDivElement>(null);

  const { data: apy, isLoading: apyLoading, error: apyError } = useQuery({
    queryKey: ['yield-apy'],
    queryFn: fetchCurrentAPY,
    refetchInterval: 5 * 60 * 1000, // Refetch every 5 minutes
  });

  // Enhanced coin configuration with more coins and bigger ones on the left (8 coins total)
  const coinConfigs = useRef([...Array(8)].map((_, i) => {
    // Distribute coins across 2 depth layers for simplicity
    const layer = i % 2; // 0 = far, 1 = near
    const zDepth = layer === 0 ? 0.4 : 1.0; // Simplified depth
    const baseScale = layer === 0 ? 0.6 : 1.0; // Simplified scaling
    
    // Size variations - removed very small coins, added more variety
    const sizeVariations = [1.2, 1.0, 2.0, 1.5, 2.5, 1.8, 2.2, 1.3]; // Better size range
    const coinSize = sizeVariations[i % sizeVariations.length];
    
    // Position configuration - more big coins on left side
    let startX;
    if (i < 3) {
      // First 3 coins on left side, make them larger
      startX = 5 + (i * 8) + Math.random() * 5; // Left side positioning
      const leftSideSizes = [2.2, 2.5, 2.0]; // Ensure left coins are big
      return {
        id: i,
        layer,
        zDepth,
        baseScale,
        coinSize: leftSideSizes[i], // Force large sizes on left
        startX,
        drift: (Math.random() - 0.5) * (40 * zDepth),
        duration: 4 + (i * 0.3),
        delay: i * 1.0,
        rotationStart: i * 45,
        spinSpeed: 360 + (i * 20),
        blur: layer === 0 ? 0.5 : 0,
        opacity: layer === 0 ? 0.7 : 1.0,
      }
    } else {
      // Remaining coins distributed across the rest
      startX = 30 + ((i - 3) * 12) + Math.random() * 8;
      return {
        id: i,
        layer,
        zDepth,
        baseScale,
        coinSize,
        startX,
        drift: (Math.random() - 0.5) * (40 * zDepth),
        duration: 4 + (i * 0.3),
        delay: i * 1.0,
        rotationStart: i * 45,
        spinSpeed: 360 + (i * 20),
        blur: layer === 0 ? 0.5 : 0,
        opacity: layer === 0 ? 0.7 : 1.0,
      }
    }
  }));

  useEffect(() => {
    // Debug coin configurations
    console.log('Coin configurations:', coinConfigs.current.map(c => ({ id: c.id, coinSize: c.coinSize })));
    
    // Preload and initialize animations
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 50);

    return () => clearTimeout(timer);
  }, []);

  const handleExploreClick = () => {
    const element = document.querySelector('#innovation-focus');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleProductsClick = () => {
    const element = document.querySelector('#products');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section ref={heroRef} className="relative py-24 md:py-40 overflow-hidden" role="banner">
      {/* Unified seamless background - removed conflicting gradients */}
      
      {/* Optimized smooth falling coins animation */}
      <div ref={coinsRef} className="absolute inset-0 pointer-events-none z-0">
        <div className="falling-coins-smooth-container">
          {coinConfigs.current.map((config) => (
            <div 
              key={`smooth-coin-${config.id}`}
              className="falling-coin-smooth"
               style={{ 
                '--fall-start-x': `${config.startX}%`,
                '--drift-amount': `${config.drift}px`,
                '--fall-duration': `${config.duration}s`,
                '--animation-delay': `${config.delay}s`,
                '--rotation-start': `${config.rotationStart}deg`,
                '--spin-speed': `${config.spinSpeed}deg`,
                '--z-depth': config.zDepth,
                '--base-scale': config.baseScale,
                '--coin-size': config.coinSize,
                '--layer': config.layer,
                '--blur-amount': `${config.blur}px`,
                '--layer-opacity': config.opacity,
               } as React.CSSProperties}
            >
              <div className="coin-face-smooth" />
              <div className="coin-edge-smooth" />
            </div>
          ))}
        </div>
      </div>
      
      <div className="container relative z-20">
        <div className={`text-center space-y-8 transition-opacity duration-500 ${isLoaded ? 'hero-content-loaded' : 'opacity-0'}`}>
          {/* Badge */}
          <div className="inline-flex items-center text-sm font-medium text-foreground/90 hero-badge">
            <span className="mr-2 w-2 h-2 bg-header-glow rounded-full animate-pulse"></span>
            <span className="flex items-center gap-1">
              Now Live: Earn Up to{' '}
              {apyLoading ? (
                <Loader2 className="w-3 h-3 animate-spin" />
              ) : apyError ? (
                '4%'
              ) : (
                `${apy}%`
              )}{' '}
              APY
            </span>
          </div>

          {/* Main heading with stable animations */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight">
            <span className="block text-gradient hero-title-primary">
              Stack Real Assets
            </span>
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70 hero-title-secondary">
              On-Chain
            </span>
          </h1>

          {/* Subtitle with stable timing */}
          <div className="hero-subtitle">
            <p className="text-xl md:text-2xl text-foreground/90 max-w-4xl mx-auto leading-relaxed" style={{ textShadow: '0 0 10px rgba(255, 255, 255, 0.3), 0 0 20px rgba(255, 255, 255, 0.1)' }}>
              Elite DeFi Products for the <span className="font-semibold">Crypto Savvy</span>, Backed by Real-World Assets.
            </p>
          </div>

          {/* CTA buttons with stable animations */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12 hero-cta-container">
            <Button 
              size="lg" 
              className="bg-orange-900/20 border border-orange-800/30 text-orange-300 hover:bg-orange-900/30 hover:border-orange-800/40 focus-ring font-bold px-8 py-4 text-lg rounded-xl min-w-[200px] group transition-all duration-200"
              asChild
            >
              <Link to="/yield">
                Get YIELD
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button 
              size="lg" 
              className="bg-orange-900/20 border border-orange-800/30 text-orange-300 hover:bg-orange-900/30 hover:border-orange-800/40 focus-ring font-bold px-8 py-4 text-lg rounded-xl min-w-[200px] group transition-all duration-200"
              asChild
            >
              <Link to="/homes">
                Explore HOMES
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
