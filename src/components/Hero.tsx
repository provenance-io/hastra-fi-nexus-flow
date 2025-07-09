
import { Button } from '@/components/ui/button';
import { ArrowRight, TrendingUp, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const handleExploreClick = () => {
    const element = document.querySelector('#innovation-focus');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleProductsClick = () => {
    const element = document.querySelector('#products');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative py-24 md:py-40 overflow-hidden" role="banner">
      {/* Enhanced background with multiple layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-header-glow/5 to-crypto-accent/5"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiIgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIiBmaWxsPSJub25lIiBzdHJva2U9InJnYmEoMTAsIDIwLCA0MCwwLjA1KSI+PGQgcGF0aD0iTTAtMSAwIDEgTS0xIDAgMSAwIj48L2Q+PC9zdmc+')] opacity-40"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-background/80"></div>
      
      {/* Permanent coin pile at bottom */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 pointer-events-none z-0">
        <div className="coin-pile-base">
          {/* Base scattered coins */}
          {[...Array(100)].map((_, i) => (
            <div 
              key={`base-${i}`}
              className="base-coin"
              style={{ 
                '--pile-x': `${(Math.random() - 0.5) * 280}px`,
                '--pile-y': `${Math.random() * 25}px`,
                '--pile-rotation': `${Math.random() * 360}deg`,
                '--pile-scale': `${0.7 + Math.random() * 0.4}`,
                '--pile-layer': Math.floor(Math.random() * 3)
              } as React.CSSProperties}
            />
          ))}
          
          {/* Vertical tower coins */}
          {[...Array(30)].map((_, i) => {
            const towerIndex = Math.floor(i / 6); // 6 coins per tower
            const coinInTower = i % 6;
            const towerOffset = (towerIndex - 2.5) * 40; // 5 towers spread across center
            
            return (
              <div 
                key={`tower-${i}`}
                className="tower-coin"
                style={{ 
                  '--tower-x': `${towerOffset}px`,
                  '--tower-y': `${-coinInTower * 22}px`,
                  '--tower-rotation': `${(Math.random() - 0.5) * 20}deg`,
                  '--tower-scale': `${0.9 + Math.random() * 0.2}`,
                  '--tower-layer': coinInTower + 10
                } as React.CSSProperties}
              />
            );
          })}
        </div>
      </div>
      
      {/* Falling coins animation */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="falling-coins-container">
          {[...Array(10)].map((_, i) => (
            <div 
              key={`falling-${i}`}
              className="falling-coin"
              style={{ 
                animationDelay: `${i * 0.8}s`,
                '--fall-start-x': `${5 + (i * 9)}%`,
                '--fall-end-x': `${40 + Math.random() * 20}%`,
                '--rotation-speed': `${1.5 + Math.random() * 1.5}`,
              } as React.CSSProperties}
            />
          ))}
        </div>
      </div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 opacity-20 animate-float z-10">
        <TrendingUp className="w-8 h-8 text-header-glow" />
      </div>
      <div className="absolute top-32 right-16 opacity-20 animate-float z-10" style={{ animationDelay: '1s' }}>
        <Shield className="w-6 h-6 text-crypto-accent" />
      </div>
      
      <div className="container relative z-20">
        <div className="text-center space-y-8 animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full glass-effect border border-header-glow/20 text-sm font-medium text-foreground/80 animate-glow-pulse">
            <span className="mr-2 w-2 h-2 bg-header-glow rounded-full animate-pulse"></span>
            Now Live: Earn Up to 8% APY
          </div>

          {/* Main heading with enhanced typography */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight">
            <span className="block text-gradient animate-slide-in-left">
              Stack Real Assets
            </span>
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70 animate-slide-in-right" style={{ animationDelay: '0.2s' }}>
              On-Chain
            </span>
          </h1>

          {/* Subtitle with better spacing */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Elite DeFi Products for the <span className="text-header-glow font-semibold">Crypto Savvy</span>, Backed by Real-World Assets.
            </p>
          </div>

          {/* CTA buttons with enhanced design */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <Button 
              size="lg" 
              className="btn-gradient focus-ring font-bold px-8 py-4 text-lg rounded-xl min-w-[200px] group"
              asChild
            >
              <Link to="/homes">
                Explore HOMES
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="focus-ring font-bold px-8 py-4 text-lg rounded-xl min-w-[200px] glass-effect hover:bg-background/90 border-border/50 hover:border-header-glow/30 transition-all duration-300 group"
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
