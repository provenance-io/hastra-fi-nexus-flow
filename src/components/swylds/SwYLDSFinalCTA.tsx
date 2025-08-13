import { Button } from '@/components/ui/button';
import { ArrowRight, Rocket, DollarSign, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const SwYLDSFinalCTA = () => {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-crypto-accent/10 via-background to-auburn-primary/10"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-background/80 to-transparent"></div>
      
      <div className="container relative z-10 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main CTA Content */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Ready to Earn{' '}
            <span className="bg-gradient-to-r from-crypto-accent to-auburn-primary bg-clip-text text-transparent">
              9% APY
            </span>
            ?
          </h2>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Join thousands of users earning sustainable yield with swYLDS
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button 
              asChild 
              size="lg" 
              className="bg-gradient-to-r from-crypto-accent to-auburn-primary hover:from-crypto-accent/90 hover:to-auburn-primary/90 text-white px-10 py-6 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Link to="/earn">
                Start Staking Now
                <ArrowRight className="ml-3 h-6 w-6" />
              </Link>
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="border-border/40 bg-background/50 backdrop-blur-sm px-10 py-6 rounded-2xl font-semibold text-lg hover:bg-card/70 transition-all duration-300"
            >
              Read Documentation
            </Button>
          </div>
          
          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto mb-16">
            <div className="flex items-center justify-center space-x-3 bg-card/30 backdrop-blur-sm rounded-2xl p-6 border border-border/20">
              <Rocket className="h-6 w-6 text-crypto-accent flex-shrink-0" />
              <span className="font-semibold text-foreground">2,847 active stakers</span>
            </div>
            
            <div className="flex items-center justify-center space-x-3 bg-card/30 backdrop-blur-sm rounded-2xl p-6 border border-border/20">
              <DollarSign className="h-6 w-6 text-auburn-primary flex-shrink-0" />
              <span className="font-semibold text-foreground">$12.4M total staked</span>
            </div>
            
            <div className="flex items-center justify-center space-x-3 bg-card/30 backdrop-blur-sm rounded-2xl p-6 border border-border/20">
              <Clock className="h-6 w-6 text-green-500 flex-shrink-0" />
              <span className="font-semibold text-foreground">2 minute setup</span>
            </div>
          </div>
          
          {/* Security Notice */}
          <div className="bg-card/40 backdrop-blur-sm border border-border/40 rounded-2xl p-8 max-w-3xl mx-auto">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="font-semibold text-foreground">Secure & Audited</span>
            </div>
            
            <p className="text-muted-foreground text-sm leading-relaxed">
              swYLDS smart contracts have been audited by leading security firms. 
              Your funds are protected by industry-standard security practices and 
              backed by real-world assets through Figure Markets' SEC-registered foundation.
            </p>
          </div>
          
          {/* Final Message */}
          <div className="mt-16">
            <p className="text-lg text-muted-foreground">
              Start earning real yield from real assets today.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SwYLDSFinalCTA;