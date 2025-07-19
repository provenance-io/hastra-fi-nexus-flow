
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

  // Reduced and optimized coin configuration for smooth performance (5 coins instead of 8)
  const coinConfigs = useRef([...Array(5)].map((_, i) => {
    // Distribute coins across 2 depth layers for simplicity
    const layer = i % 2; // 0 = far, 1 = near
    const zDepth = layer === 0 ? 0.4 : 1.0; // Simplified depth
    const baseScale = layer === 0 ? 0.6 : 1.0; // Simplified scaling
    
    return {
      id: i,
      layer,
      zDepth,
      baseScale,
      startX: 15 + (i * 15) + Math.random() * 8, // Better distribution
      drift: (Math.random() - 0.5) * (40 * zDepth), // Single drift value
      duration: 4 + (i * 0.3), // Consistent timing
      delay: i * 1.2, // More staggered timing
      rotationStart: i * 72, // Even distribution (360/5)
      spinSpeed: 360 + (i * 20), // Simplified rotation
      blur: layer === 0 ? 0.5 : 0, // Simplified blur
      opacity: layer === 0 ? 0.7 : 1.0, // Simplified opacity
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
              Remember this: Elite DeFi products should be available to everyone, not locked away for the wealthy.
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
