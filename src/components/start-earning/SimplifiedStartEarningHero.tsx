import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { BookOpen, ShoppingCart, ExternalLink } from 'lucide-react';

const SimplifiedStartEarningHero = () => {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-header-glow/5 to-crypto-accent/5"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiIgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIiBmaWxsPSJub25lIiBzdHJva2U9InJnYmEoMTAsIDIwLCA0MCwwLjA1KSI+PGQgcGF0aD0iTTAtMSAwIDEgTS0xIDAgMSAwIj48L2Q+PC9zdmc+')] opacity-40"></div>
      
      <div className="container relative">
        {/* Hero Content */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center px-4 py-2 rounded-full glass-effect border border-header-glow/20 text-sm font-medium text-foreground/80 mb-6">
            <span className="mr-2 w-2 h-2 bg-header-glow rounded-full animate-pulse"></span>
            Your DeFi Journey Starts Here
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6">
            <span className="block text-gradient">Start (L)earning</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-12">
            Choose your path: Learn DeFi fundamentals or jump straight into earning with our tokens
          </p>
        </div>

        {/* Main Action Cards */}
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 mb-16">
          {/* Learn Path */}
          <Card className="glass-effect border-border/50 hover:border-header-glow/30 transition-all duration-300 group cursor-pointer">
            <CardContent className="p-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-header-glow/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <BookOpen className="w-8 h-8 text-header-glow" />
                </div>
                
                <h3 className="text-2xl font-bold mb-4">Learn First</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Master DeFi basics with our guided tutorials and interactive content before investing
                </p>
                
                  <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                    <div className="w-2 h-2 bg-header-glow rounded-full"></div>
                    <span>18 Step-by-step guides</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                    <div className="w-2 h-2 bg-header-glow rounded-full"></div>
                    <span>Video tutorials</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                    <div className="w-2 h-2 bg-header-glow rounded-full"></div>
                    <span>Interactive exercises</span>
                  </div>
                </div>
                
                <Button variant="secondary" className="w-full">
                  Start Learning
                  <BookOpen className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Buy Path */}
          <Card className="glass-effect border-border/50 hover:border-header-glow/30 transition-all duration-300 group cursor-pointer">
            <CardContent className="p-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-header-glow/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <ShoppingCart className="w-8 h-8 text-header-glow" />
                </div>
                
                <h3 className="text-2xl font-bold mb-4">Buy & Earn Now</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Jump straight into earning with YIELD and sHASH tokens on our partner platforms
                </p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                    <div className="w-2 h-2 bg-header-glow rounded-full"></div>
                    <span>YIELD token - Up to 8% APY</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                    <div className="w-2 h-2 bg-header-glow rounded-full"></div>
                    <span>sHASH token - DeFi participation</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                    <div className="w-2 h-2 bg-header-glow rounded-full"></div>
                    <span>Multiple platforms available</span>
                  </div>
                </div>
                
                <Button variant="secondary" className="w-full">
                  Buy Tokens
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Stats */}
        <div className="text-center">
          <p className="text-sm text-muted-foreground mb-4">Join thousands already earning</p>
          <div className="flex flex-wrap justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-header-glow rounded-full animate-pulse"></div>
              <span>12.4k+ Active users</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-crypto-accent rounded-full animate-pulse"></div>
              <span>$2.3M+ Total value locked</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-header-glow rounded-full animate-pulse"></div>
              <span>95% Success rate</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SimplifiedStartEarningHero;