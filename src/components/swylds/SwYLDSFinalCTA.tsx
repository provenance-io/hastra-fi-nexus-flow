import { Rocket, DollarSign, Clock } from 'lucide-react';

const SwYLDSFinalCTA = () => {
  return (
    <section className="py-16 px-4 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 relative z-10">
        {/* Combined Dashboard Box - Quick Stats */}
        <div className="card-gradient rounded-3xl p-8 md:p-12 border border-transparent mb-16 relative">
          <div className="relative z-10">
            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default SwYLDSFinalCTA;