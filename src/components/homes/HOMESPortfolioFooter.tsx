
import { Home, TrendingUp, Coins } from 'lucide-react';

const HOMESPortfolioFooter = () => {
  return (
    <div className="text-center mt-16">
      <div className="inline-flex items-center gap-4 glass-effect rounded-2xl p-6 max-w-md mx-auto border border-border/50">
        <div className="flex -space-x-2">
          <div className="w-8 h-8 rounded-full bg-header-glow/10 border-2 border-background flex items-center justify-center">
            <Home className="w-4 h-4 text-header-glow" />
          </div>
          <div className="w-8 h-8 rounded-full bg-muted/40 border-2 border-background flex items-center justify-center">
            <TrendingUp className="w-4 h-4 text-muted-foreground" />
          </div>
          <div className="w-8 h-8 rounded-full bg-muted/40 border-2 border-background flex items-center justify-center">
            <Coins className="w-4 h-4 text-muted-foreground" />
          </div>
        </div>
        <div className="text-left">
          <div className="font-semibold text-sm">Built on Solana DeFi</div>
          <div className="text-xs text-muted-foreground">Kamino & Raydium</div>
        </div>
      </div>
    </div>
  );
};

export default HOMESPortfolioFooter;
