
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
      {/* Desktop Layout */}
      <div className="hidden lg:grid grid-cols-[auto_1fr_1fr_1fr_1fr_auto] gap-6 items-center">
        {/* Token Info */}
        <div className="flex items-center gap-3 min-w-0">
          {isImage ? (
            <img 
              src={icon} 
              alt={`${token} Token`}
              className="w-16 h-16 rounded-lg"
            />
          ) : (
            <div className="w-16 h-16 rounded-lg bg-hastra-teal/10 flex items-center justify-center">
              <span className="text-hastra-teal font-bold text-xl">{icon}</span>
            </div>
          )}
          <h4 className="font-semibold text-foreground whitespace-nowrap">{token}</h4>
        </div>
        
        {/* Tokens Column */}
        <div className="text-center">
          <p className="text-muted-foreground mb-1 text-sm">Tokens</p>
          <p className="font-medium text-foreground">
            {amount.toLocaleString('en-US', { 
              minimumFractionDigits: 2,
              maximumFractionDigits: 4 
            })}
          </p>
        </div>
        
        {/* Worth Column */}
        <div className="text-center">
          <p className="text-muted-foreground mb-1 text-sm">Worth</p>
          <p className="font-medium text-foreground">
            ${value.toLocaleString('en-US', { 
              minimumFractionDigits: 2,
              maximumFractionDigits: 2 
            })}
          </p>
        </div>
        
        {/* Total Interest Claimed Column */}
        <div className="text-center">
          <p className="text-muted-foreground mb-1 text-sm">Total Interest Claimed</p>
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
        
        {/* Unclaimed Interest Column */}
        <div className="text-center">
          <p className="text-muted-foreground mb-1 text-sm">Unclaimed Interest</p>
          <p className={`font-medium ${unclaimedInterest > 0 ? 'text-hastra-teal' : 'text-muted-foreground'}`}>
            ${unclaimedInterestUSD.toLocaleString('en-US', { 
              minimumFractionDigits: 2,
              maximumFractionDigits: 2 
            })}
          </p>
        </div>
        
        {/* Claim Button */}
        <Button
          onClick={handleClaim}
          disabled={unclaimedInterest <= 0 || isClaiming}
          size="sm"
          className="bg-orange-900/20 border border-orange-800/30 text-orange-300 hover:bg-orange-900/30 hover:border-orange-800/40 focus-ring px-4 py-2 text-xs font-medium rounded-lg transition-all duration-200 disabled:opacity-50 whitespace-nowrap"
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

      {/* Mobile/Tablet Layout */}
      <div className="lg:hidden space-y-4">
        {/* Token Header */}
        <div className="flex items-center gap-3">
          {isImage ? (
            <img 
              src={icon} 
              alt={`${token} Token`}
              className="w-12 h-12 rounded-lg"
            />
          ) : (
            <div className="w-12 h-12 rounded-lg bg-hastra-teal/10 flex items-center justify-center">
              <span className="text-hastra-teal font-bold text-lg">{icon}</span>
            </div>
          )}
          <div className="flex-1">
            <h4 className="font-semibold text-foreground">{token}</h4>
            <p className="text-sm text-muted-foreground">
              {amount.toLocaleString('en-US', { 
                minimumFractionDigits: 2,
                maximumFractionDigits: 4 
              })} tokens
            </p>
          </div>
          <div className="text-right">
            <p className="font-medium text-foreground">
              ${value.toLocaleString('en-US', { 
                minimumFractionDigits: 2,
                maximumFractionDigits: 2 
              })}
            </p>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-background/30 rounded-lg p-3">
            <div className="flex items-center gap-1 mb-1">
              <TrendingUp className="w-3 h-3 text-green-400" />
              <p className="text-xs text-muted-foreground">Total Claimed</p>
            </div>
            <p className="font-medium text-green-400 text-sm">
              ${totalInterestEarnedUSD.toLocaleString('en-US', { 
                minimumFractionDigits: 2,
                maximumFractionDigits: 2 
              })}
            </p>
          </div>
          
          <div className="bg-background/30 rounded-lg p-3">
            <p className="text-xs text-muted-foreground mb-1">Unclaimed</p>
            <p className={`font-medium text-sm ${unclaimedInterest > 0 ? 'text-hastra-teal' : 'text-muted-foreground'}`}>
              ${unclaimedInterestUSD.toLocaleString('en-US', { 
                minimumFractionDigits: 2,
                maximumFractionDigits: 2 
              })}
            </p>
          </div>
        </div>

        {/* Claim Button */}
        <Button
          onClick={handleClaim}
          disabled={unclaimedInterest <= 0 || isClaiming}
          className="w-full bg-orange-900/20 border border-orange-800/30 text-orange-300 hover:bg-orange-900/30 hover:border-orange-800/40 focus-ring py-3 text-sm font-medium rounded-lg transition-all duration-200 disabled:opacity-50"
        >
          {isClaiming ? (
            <div className="flex items-center justify-center gap-2">
              <div className="w-4 h-4 border border-hastra-teal border-t-transparent rounded-full animate-spin" />
              Claiming Interest...
            </div>
          ) : (
            <div className="flex items-center justify-center gap-2">
              <Gift className="w-4 h-4" />
              Claim ${unclaimedInterestUSD.toFixed(2)} APY
            </div>
          )}
        </Button>
      </div>
    </div>
  );
};

export default TokenLineItem;
