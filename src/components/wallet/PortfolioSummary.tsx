
import { DollarSign, TrendingUp, Gift, ArrowUpRight } from 'lucide-react';

interface PortfolioSummaryProps {
  totalPortfolioValue: number;
  totalInterestEarned: number;
  totalUnclaimedInterest: number;
}

const PortfolioSummary = ({
  totalPortfolioValue,
  totalInterestEarned,
  totalUnclaimedInterest
}: PortfolioSummaryProps) => {
  return (
    <div className="px-8 py-4 space-y-4">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Total Portfolio Value */}
        <div className="bg-background/30 rounded-2xl p-4 space-y-3 border border-border/20 hover:border-hastra-teal/20 transition-all duration-300">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-hastra-teal/10 flex items-center justify-center">
              <DollarSign className="w-5 h-5 text-hastra-teal" />
            </div>
            <p className="text-sm text-muted-foreground font-medium">Total Portfolio Value</p>
          </div>
          
          <div className="space-y-2">
            <p className="text-2xl lg:text-3xl font-bold text-white">
              ${totalPortfolioValue.toLocaleString('en-US', { 
                minimumFractionDigits: 2,
                maximumFractionDigits: 2 
              })}
            </p>
            <div className="flex items-center gap-2">
              <ArrowUpRight className="w-3 h-3 text-green-400" />
              <span className="text-sm text-green-400 font-medium">
                +${totalInterestEarned.toLocaleString('en-US', { 
                  minimumFractionDigits: 2 
                })} earned
              </span>
            </div>
          </div>
        </div>
        
        {/* Total Interest Earned */}
        <div className="bg-background/30 rounded-2xl p-4 space-y-3 border border-border/20 hover:border-green-400/20 transition-all duration-300">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-green-400/10 flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-green-400" />
            </div>
            <p className="text-sm text-muted-foreground font-medium">Total Interest Earned</p>
          </div>
          
          <div className="space-y-2">
            <p className="text-2xl lg:text-3xl font-bold text-white">
              ${totalInterestEarned.toLocaleString('en-US', { 
                minimumFractionDigits: 2,
                maximumFractionDigits: 2 
              })}
            </p>
            <p className="text-xs text-muted-foreground">
              Lifetime earnings from APY
            </p>
          </div>
        </div>

        {/* Unclaimed Interest */}
        <div className="bg-background/30 rounded-2xl p-4 space-y-3 border border-border/20 hover:border-orange-400/20 transition-all duration-300">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-orange-400/10 flex items-center justify-center">
              <Gift className="w-5 h-5 text-orange-400" />
            </div>
            <p className="text-sm text-muted-foreground font-medium">Available to Claim</p>
          </div>
          
          <div className="space-y-2">
            <p className="text-2xl lg:text-3xl font-bold text-white">
              ${totalUnclaimedInterest.toLocaleString('en-US', { 
                minimumFractionDigits: 2,
                maximumFractionDigits: 2 
              })}
            </p>
            <p className="text-xs text-muted-foreground">
              Ready for withdrawal
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioSummary;
