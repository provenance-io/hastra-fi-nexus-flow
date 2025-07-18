
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { Gift, TrendingUp } from 'lucide-react';
import { useState } from 'react';

interface TokenLineItemProps {
  token: string;
  amount: number;
  value: number;
  apy: number;
  totalInterestEarned: number;
  unclaimedInterest: number;
  icon: string;
  onClaim: (amount: number) => void;
}

const TokenLineItem = ({
  token,
  amount,
  value,
  apy,
  totalInterestEarned,
  unclaimedInterest,
  icon,
  onClaim
}: TokenLineItemProps) => {
  const [isClaiming, setIsClaiming] = useState(false);
  const { toast } = useToast();
  const isImage = icon.startsWith('/') || icon.startsWith('http');

  const handleClaim = async () => {
    if (unclaimedInterest <= 0) return;
    
    setIsClaiming(true);
    
    // Simulate claim transaction
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    onClaim(unclaimedInterest);
    
    toast({
      title: "Interest Claimed",
      description: `Successfully claimed ${unclaimedInterest.toFixed(4)} ${token} tokens`,
    });
    
    setIsClaiming(false);
  };

  // Calculate dollar values for interest
  const tokenPrice = value / amount; // Price per token
  const totalInterestEarnedUSD = totalInterestEarned * tokenPrice;
  const unclaimedInterestUSD = unclaimedInterest * tokenPrice;

  return (
    <div className="p-4 rounded-xl bg-background/50 border border-border/30 hover:border-hastra-teal/30 transition-all duration-300">
      <div className="flex items-center justify-between gap-8">
        <div className="flex items-center gap-3 min-w-0 flex-shrink-0">
          {isImage ? (
            <img 
              src={icon} 
              alt={`${token} Token`}
              className="w-8 h-8 rounded"
            />
          ) : (
            <span className="text-hastra-teal font-bold text-lg">{icon}</span>
          )}
          <h4 className="font-semibold text-foreground">{token}</h4>
        </div>
        
        <div className="flex items-center justify-between flex-1 gap-8 text-sm">
          <div className="text-center min-w-0">
            <p className="text-muted-foreground mb-1">Tokens</p>
            <p className="font-medium text-foreground">
              {amount.toLocaleString('en-US', { 
                minimumFractionDigits: 2,
                maximumFractionDigits: 4 
              })}
            </p>
          </div>
          
          <div className="text-center min-w-0">
            <p className="text-muted-foreground mb-1">Worth</p>
            <p className="font-medium text-foreground">
              ${value.toLocaleString('en-US', { 
                minimumFractionDigits: 2,
                maximumFractionDigits: 2 
              })}
            </p>
          </div>
          
          <div className="text-center min-w-0">
            <p className="text-muted-foreground mb-1">Total Interest Claimed</p>
            <div className="flex items-center justify-center gap-1">
              <TrendingUp className="w-3 h-3 text-green-400" />
              <p className="font-medium text-green-400">
                ${totalInterestEarnedUSD.toLocaleString('en-US', { 
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2 
                })}
              </p>
            </div>
          </div>
          
          <div className="text-center min-w-0">
            <p className="text-muted-foreground mb-1">Unclaimed Interest</p>
            <p className={`font-medium ${unclaimedInterest > 0 ? 'text-hastra-teal' : 'text-muted-foreground'}`}>
              ${unclaimedInterestUSD.toLocaleString('en-US', { 
                minimumFractionDigits: 2,
                maximumFractionDigits: 2 
              })}
            </p>
          </div>
          
          <Button
            onClick={handleClaim}
            disabled={unclaimedInterest <= 0 || isClaiming}
            size="sm"
            className="bg-orange-900/20 border border-orange-800/30 text-orange-300 hover:bg-orange-900/30 hover:border-orange-800/40 focus-ring px-4 py-2 text-xs font-medium rounded-lg transition-all duration-200 disabled:opacity-50 flex-shrink-0"
          >
            {isClaiming ? (
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 border border-hastra-teal border-t-transparent rounded-full animate-spin" />
                Claiming...
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <Gift className="w-3 h-3" />
                Claim APY
              </div>
            )}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TokenLineItem;
