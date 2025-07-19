
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
    <div className="card-gradient rounded-2xl p-8 grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
      {/* Total Portfolio Value */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <DollarSign className="w-4 h-4 text-hastra-teal" />
          <p className="text-sm text-muted-foreground">Total Value of Hastra Tokens</p>
        </div>
        
        <div className="space-y-2">
          <p className="text-3xl font-bold text-foreground">
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
              })}
            </span>
          </div>
        </div>
      </div>
      
      {/* Total Interest Earned */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <TrendingUp className="w-4 h-4 text-hastra-teal" />
          <p className="text-sm text-muted-foreground">Total Interest Earned</p>
        </div>
        
        <div className="space-y-2">
          <p className="text-3xl font-bold text-green-400">
            ${totalInterestEarned.toLocaleString('en-US', { 
              minimumFractionDigits: 2,
              maximumFractionDigits: 2 
            })}
          </p>
        </div>
      </div>

      {/* Unclaimed Interest */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Gift className="w-4 h-4 text-hastra-teal" />
          <p className="text-sm text-muted-foreground">Total Unclaimed Interest</p>
        </div>
        
        <div className="space-y-2">
          <p className="text-3xl font-bold text-hastra-teal">
            ${totalUnclaimedInterest.toLocaleString('en-US', { 
              minimumFractionDigits: 2,
              maximumFractionDigits: 2 
            })}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PortfolioSummary;
