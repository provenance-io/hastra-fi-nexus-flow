
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

  // Optimized coin configuration for smooth performance
  const coinConfigs = useRef([...Array(8)].map((_, i) => {
    // Distribute coins across 3 depth layers
    const layer = i % 3; // 0 = far, 1 = mid, 2 = near
    const zDepth = layer === 0 ? 0.3 : layer === 1 ? 0.6 : 1.0; // Depth multiplier
    const baseScale = layer === 0 ? 0.4 : layer === 1 ? 0.7 : 1.0; // Base scale by layer
    
    return {
      id: i,
      layer,
      zDepth,
      baseScale,
      startX: 10 + (i * 7) + Math.random() * 6, // More distributed
      driftEarly: (Math.random() - 0.5) * (30 * zDepth), // Depth affects drift
      driftMid: (Math.random() - 0.5) * (40 * zDepth),
      driftLate: (Math.random() - 0.5) * (50 * zDepth),
      driftEnd: (Math.random() - 0.5) * (60 * zDepth),
      duration: 3 + (i * 0.2) + (layer * 0.5), // Layer affects speed
      delay: i * 0.8, // Staggered timing
      rotationStart: i * 45,
      spinSpeed: 80 + (i * 10) + (layer * 20),
      tiltSpeed: 12 + (i * 3) + (layer * 5),
      blur: layer === 0 ? 1 : layer === 1 ? 0.5 : 0, // Far coins are blurred
      opacity: layer === 0 ? 0.6 : layer === 1 ? 0.8 : 1.0, // Far coins are more transparent
    }
  }));

  useEffect(() => {
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
      
      {/* Enhanced 3D perspective falling coins animation */}
      <div ref={coinsRef} className="absolute inset-0 pointer-events-none z-0">
        <div className="falling-coins-3d-container">
          {coinConfigs.current.map((config) => (
            <div 
              key={`perspective-coin-${config.id}`}
              className="falling-coin-3d"
              style={{ 
                '--fall-start-x': `${config.startX}%`,
                '--drift-early': `${config.driftEarly}px`,
                '--drift-mid': `${config.driftMid}px`,
                '--drift-late': `${config.driftLate}px`,
                '--drift-end': `${config.driftEnd}px`,
                '--fall-duration': `${config.duration}s`,
                '--animation-delay': `${config.delay}s`,
                '--rotation-start': `${config.rotationStart}deg`,
                '--spin-speed': `${config.spinSpeed}deg`,
                '--tilt-speed': `${config.tiltSpeed}deg`,
                '--z-depth': config.zDepth,
                '--base-scale': config.baseScale,
                '--layer': config.layer,
                '--blur-amount': `${config.blur}px`,
                '--layer-opacity': config.opacity,
              } as React.CSSProperties}
            >
              <div className="coin-face-3d" />
              <div className="coin-edge-3d" />
            </div>
          ))}
        </div>
      </div>
      
      <div className="container relative z-20">
        <div className={`text-center space-y-8 transition-opacity duration-500 ${isLoaded ? 'hero-content-loaded' : 'opacity-0'}`}>
          {/* Badge */}
          <div className="inline-flex items-center text-sm font-medium text-foreground/80 hero-badge">
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
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Elite DeFi Products for the <span className="text-header-glow font-semibold">Crypto Savvy</span>, Backed by Real-World Assets.
            </p>
          </div>

          {/* CTA buttons with stable animations */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12 hero-cta-container">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
