
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

  // Enhanced coin configuration for 3D system
  const coinConfigs = useRef([...Array(6)].map((_, i) => {
    // Distribute coins across 2 depth layers for visual depth
    const layer = i % 2; // 0 = far, 1 = near
    const zDepth = layer === 0 ? 0.4 : 1.0;
    const baseScale = layer === 0 ? 0.6 : 1.0;
    
    // Size variations within 1.25-1.75 range
    const sizeVariations = [1.45, 1.3, 1.65, 1.4, 1.55, 1.75];
    const coinSize = sizeVariations[i];
    
    // Even distribution algorithm: divide screen into 6 equal sections (16.67% each)
    const sectionWidth = 100 / 6; // 16.67% per section
    const sectionStart = i * sectionWidth; // Start of this coin's section
    const sectionCenter = sectionStart + (sectionWidth / 2); // Center of section
    
    // Add randomization within section bounds (±6% from center)
    const randomOffset = (Math.random() - 0.5) * 12; // ±6% variation
    const startX = Math.max(2, Math.min(98, sectionCenter + randomOffset)); // Clamp to screen bounds
    
    // 3D physics variables
    const driftEarly = (Math.random() - 0.5) * 30;
    const driftMid = (Math.random() - 0.5) * 50;
    const driftLate = (Math.random() - 0.5) * 40;
    const driftEnd = (Math.random() - 0.5) * 35;
    
    return {
      id: i,
      layer,
      zDepth,
      baseScale,
      coinSize,
      startX,
      driftEarly,
      driftMid,
      driftLate,
      driftEnd,
      duration: 4 + (i * 0.3),
      delay: i * 1.0,
      rotationStart: i * 45,
      spinSpeed: 360 + (i * 20),
      blur: layer === 0 ? 0.5 : 0,
      opacity: layer === 0 ? 0.7 : 1.0,
    };
  }));

  useEffect(() => {
    // Debug coin configurations
    console.log('3D Coin configurations:', coinConfigs.current.map(c => ({ 
      id: c.id, 
      coinSize: c.coinSize, 
      startX: c.startX.toFixed(1) + '%',
      section: Math.floor(c.id * 16.67) + '-' + Math.floor((c.id + 1) * 16.67) + '%'
    })));
    
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
      
      {/* Enhanced 3D coin animation system */}
      <div ref={coinsRef} className="absolute inset-0 pointer-events-none z-0">
        <div className="falling-coins-3d-container">
          {coinConfigs.current.map((config) => (
            <div 
              key={`3d-coin-${config.id}`}
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
                '--z-depth': config.zDepth,
                '--base-scale': config.baseScale,
                '--layer': config.layer,
                '--blur-amount': `${config.blur}px`,
                '--layer-opacity': config.opacity,
               } as React.CSSProperties}
            >
              <div className="coin-face-3d">
                <img 
                  src="/lovable-uploads/4906f514-8559-48de-8ba3-342f6a26b5eb.png" 
                  alt="Token logo" 
                  className="w-3/4 h-3/4 object-contain absolute inset-0 m-auto opacity-80"
                  style={{ filter: 'drop-shadow(0 0 1px hsl(var(--mint-green)))' }}
                />
              </div>
              <div className="coin-edge-3d" />
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
              variant="secondary"
              className="min-w-[200px] group"
              asChild
            >
              <Link to="/yield">
                Get YIELD
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button 
              size="lg" 
              variant="secondary"
              className="min-w-[200px] group"
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
