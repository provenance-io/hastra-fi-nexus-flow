
import { Button } from '@/components/ui/button';
import { ArrowRight, TrendingUp, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const heroRef = useRef<HTMLElement>(null);
  const coinsRef = useRef<HTMLDivElement>(null);

  // Stable coin configuration to prevent animation glitches
  const coinConfigs = useRef([...Array(6)].map((_, i) => ({
    id: i,
    startX: 15 + (i * 14) + Math.random() * 8, // More evenly distributed
    driftEarly: (Math.random() - 0.5) * 30,
    driftMid: (Math.random() - 0.5) * 40,
    driftLate: (Math.random() - 0.5) * 50,
    driftEnd: (Math.random() - 0.5) * 60,
    duration: 10,
    // duration: 4 + (i * 0.3), // Staggered but consistent
    delay: i * 1.2, // Fixed delays for consistency
    rotationStart: i * 60, // Evenly distributed rotation starts
    spinSpeed: 90 + (i * 15),
    tiltSpeed: 15 + (i * 5)
  })));

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
      {/* Enhanced background with multiple layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-header-glow/5 to-crypto-accent/5"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiIgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIiBmaWxsPSJub25lIiBzdHJva2U9InJnYmEoMTAsIDIwLCA0MCwwLjA1KSI+PGQgcGF0aD0iTTAtMSAwIDEgTS0xIDAgMSAwIj48L2Q+PC9zdmc+')] opacity-40"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-background/80"></div>
      
      {/* Optimized falling coins animation */}
      {isLoaded && (
        <div ref={coinsRef} className="absolute inset-0 pointer-events-none z-0">
          <div className="falling-coins-container">
            {coinConfigs.current.map((config) => (
              <div 
                key={`stable-coin-${config.id}`}
                className="falling-coin-stable"
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
                  '--tilt-speed': `${config.tiltSpeed}deg`
                } as React.CSSProperties}
              >
                <div className="coin-face" />
                <div className="coin-edge" />
              </div>
            ))}
          </div>
        </div>
      )}
      
      <div className="container relative z-20">
        <div className={`text-center space-y-8 transition-opacity duration-500 ${isLoaded ? 'hero-content-loaded' : 'opacity-0'}`}>
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full glass-effect border border-header-glow/20 text-sm font-medium text-foreground/80 hero-badge">
            <span className="mr-2 w-2 h-2 bg-header-glow rounded-full animate-pulse"></span>
            Now Live: Earn Up to 8% APY
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
                <TrendingUp className="ml-2 h-5 w-5 transition-transform group-hover:scale-110" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
