
import { products } from '@/data/content';
import { Button } from '@/components/ui/button';
import { ArrowRight, TrendingUp, Users, DollarSign, ExternalLink, Home, Building } from 'lucide-react';
import { Link } from 'react-router-dom';

const Products = () => {
  const statIcons = {
    'Current APY': TrendingUp,
    'Total Supply': DollarSign,
    'Active Users': Users,
    'Total Value Locked': Building,
    'Properties': Home,
    'Avg. Yield': TrendingUp,
  };

  return (
    <section id="products" className="py-24 md:py-32 relative" role="region" aria-labelledby="products-heading">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-crypto-accent/2 to-transparent"></div>
      
      <div className="container relative">
        <div className="text-center space-y-4 mb-16">
          <h2 id="products-heading" className="text-4xl md:text-5xl font-bold tracking-tight">
            Our <span className="text-gradient">Products</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Revolutionary financial products that bridge traditional finance with DeFi innovation
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto space-y-8">
          {/* YIELD Product */}
          <div className="floating-card card-gradient card-hover rounded-3xl p-8 md:p-12 space-y-8 animate-fade-in-up">
            {/* Product header */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
              <div className="space-y-3">
                <h3 className="text-3xl md:text-4xl font-bold text-foreground group-hover:text-header-glow transition-colors">
                  {products.live.name}
                </h3>
                <p className="text-xl md:text-2xl font-semibold text-gradient">
                  TradFi Yields, Defi Velocity
                </p>
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 font-medium animate-pulse-light">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                  {products.live.status}
                </div>
              </div>
              
              <Button 
                asChild 
                size="lg" 
                className="bg-orange-900/20 border border-orange-800/30 text-orange-300 hover:bg-orange-900/30 hover:border-orange-800/40 focus-ring font-bold px-8 py-4 text-lg rounded-xl min-w-[160px] transition-all duration-300 group"
              >
                <Link to="/yield">
                  Learn More
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>

            {/* Product description */}
            <div className="space-y-4">
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                {products.live.description}
              </p>
              
              <div className="flex items-start space-x-3 p-4 rounded-xl bg-header-glow/5 border border-header-glow/10">
                <TrendingUp className="w-5 h-5 text-header-glow mt-0.5 flex-shrink-0" />
                <p className="text-foreground/90">
                  <span className="font-semibold text-header-glow">Innovation:</span>{' '}
                  <span className="text-muted-foreground">{products.live.innovation}</span>
                </p>
              </div>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {products.live.stats.map((stat, index) => {
                const IconComponent = statIcons[stat.label as keyof typeof statIcons] || TrendingUp;
                return (
                  <div 
                    key={stat.label} 
                    className="group glass-effect rounded-2xl p-6 text-center space-y-3 hover:bg-background/60 transition-all duration-300"
                    style={{
                      animationDelay: `${index * 0.1}s`,
                      animation: 'fade-in-up 0.6s ease-out forwards'
                    }}
                  >
                    <IconComponent className="w-8 h-8 mx-auto text-header-glow group-hover:scale-110 transition-transform duration-300" />
                    <div className="text-3xl md:text-4xl font-bold text-gradient group-hover:scale-105 transition-transform duration-300">
                      {stat.value}
                    </div>
                    <div className="text-sm font-medium text-muted-foreground">
                      {stat.label}
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

          {/* HOMES Product */}
          <div className="floating-card card-gradient card-hover rounded-3xl p-8 md:p-12 space-y-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            {/* Product header */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
              <div className="space-y-3">
                <h3 className="text-3xl md:text-4xl font-bold text-foreground group-hover:text-header-glow transition-colors">
                  {products.homes.name}
                </h3>
                <p className="text-xl md:text-2xl font-semibold text-gradient">
                  {products.homes.tagline}
                </p>
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 font-medium animate-pulse-light">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                  Live on Solana
                </div>
              </div>
              
              <Button 
                asChild 
                size="lg" 
                variant="outline"
                className="focus-ring font-bold px-8 py-4 text-lg rounded-xl min-w-[160px] glass-effect hover:bg-background/90 border-border/50 hover:border-header-glow/30 transition-all duration-300 group"
              >
                <Link to="/homes">
                  Learn More
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>

            {/* Product description */}
            <div className="space-y-4">
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                {products.homes.description}
              </p>
              
              <div className="flex items-start space-x-3 p-4 rounded-xl bg-orange-900/10 border border-orange-800/20">
                <Home className="w-5 h-5 text-orange-300 mt-0.5 flex-shrink-0" />
                <p className="text-foreground/90">
                  <span className="font-semibold text-orange-300">Innovation:</span>{' '}
                  <span className="text-muted-foreground">{products.homes.innovation}</span>
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
                    className="group glass-effect rounded-2xl p-6 text-center space-y-3 hover:bg-background/60 transition-all duration-300"
                    style={{
                      animationDelay: `${(index + 3) * 0.1}s`,
                      animation: 'fade-in-up 0.6s ease-out forwards'
                    }}
                  >
                    <IconComponent className="w-8 h-8 mx-auto text-orange-300 group-hover:scale-110 transition-transform duration-300" />
                    <div className="text-3xl md:text-4xl font-bold text-gradient group-hover:scale-105 transition-transform duration-300">
                      {stat.value}
                    </div>
                    <div className="text-sm font-medium text-muted-foreground">
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
