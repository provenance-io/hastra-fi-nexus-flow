
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
    <div className="bg-background/30 rounded-2xl border border-border/20 hover:border-hastra-teal/30 transition-all duration-300 hover:shadow-lg">
      {/* Desktop Layout */}
      <div className="hidden lg:grid grid-cols-[auto_1fr_1fr_1fr_1fr_auto] gap-8 items-center p-6">
        {/* Token Info */}
        <div className="flex items-center gap-4 min-w-0">
          {isImage ? (
            <img 
              src={icon} 
              alt={`${token} Token`}
              className="w-16 h-16 rounded-xl shadow-sm"
            />
          ) : (
            <div className="w-16 h-16 rounded-xl bg-hastra-teal/10 flex items-center justify-center shadow-sm">
              <span className="text-hastra-teal font-bold text-xl">{icon}</span>
            </div>
          )}
          <div className="space-y-1">
            <h4 className="font-semibold text-foreground text-lg">{token}</h4>
            <p className="text-sm text-muted-foreground">Token</p>
          </div>
        </div>
        
        {/* Tokens Column */}
        <div className="text-center space-y-1">
          <p className="text-muted-foreground text-sm font-medium">Balance</p>
          <p className="font-semibold text-foreground text-lg">
            {amount.toLocaleString('en-US', { 
              minimumFractionDigits: 2,
              maximumFractionDigits: 4 
            })}
          </p>
        </div>
        
        {/* Worth Column */}
        <div className="text-center space-y-1">
          <p className="text-muted-foreground text-sm font-medium">Value</p>
          <p className="font-semibold text-foreground text-lg">
            ${value.toLocaleString('en-US', { 
              minimumFractionDigits: 2,
              maximumFractionDigits: 2 
            })}
          </p>
        </div>
        
        {/* Total Interest Claimed Column */}
        <div className="text-center space-y-1">
          <p className="text-muted-foreground text-sm font-medium">Total Claimed</p>
          <div className="flex items-center justify-center gap-2">
            <TrendingUp className="w-4 h-4 text-green-400" />
            <p className="font-semibold text-green-400 text-lg">
              ${totalInterestEarnedUSD.toLocaleString('en-US', { 
                minimumFractionDigits: 2,
                maximumFractionDigits: 2 
              })}
            </p>
          </div>
        </div>
        
        {/* Unclaimed Interest Column */}
        <div className="text-center space-y-1">
          <p className="text-muted-foreground text-sm font-medium">Available</p>
          <p className={`font-semibold text-lg ${unclaimedInterest > 0 ? 'text-orange-400' : 'text-muted-foreground'}`}>
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
          className="bg-orange-900/20 border border-orange-800/30 text-orange-300 hover:bg-orange-900/30 hover:border-orange-800/40 focus-ring px-6 py-3 text-sm font-medium rounded-xl transition-all duration-200 disabled:opacity-50 whitespace-nowrap min-w-[120px]"
        >
          {isClaiming ? (
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 border-2 border-orange-300 border-t-transparent rounded-full animate-spin" />
              Claiming...
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <Gift className="w-4 h-4" />
              Claim APY
            </div>
          )}
        </Button>
      </div>

      {/* Mobile/Tablet Layout */}
      <div className="lg:hidden p-6 space-y-6">
        {/* Token Header */}
        <div className="flex items-center gap-4">
          {isImage ? (
            <img 
              src={icon} 
              alt={`${token} Token`}
              className="w-14 h-14 rounded-xl shadow-sm"
            />
          ) : (
            <div className="w-14 h-14 rounded-xl bg-hastra-teal/10 flex items-center justify-center shadow-sm">
              <span className="text-hastra-teal font-bold text-lg">{icon}</span>
            </div>
          )}
          <div className="flex-1 space-y-1">
            <h4 className="font-semibold text-foreground text-lg">{token}</h4>
            <p className="text-sm text-muted-foreground">
              {amount.toLocaleString('en-US', { 
                minimumFractionDigits: 2,
                maximumFractionDigits: 4 
              })} tokens
            </p>
          </div>
          <div className="text-right space-y-1">
            <p className="font-semibold text-foreground text-lg">
              ${value.toLocaleString('en-US', { 
                minimumFractionDigits: 2,
                maximumFractionDigits: 2 
              })}
            </p>
            <p className="text-sm text-muted-foreground">Total Value</p>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-background/40 rounded-xl p-4 space-y-2">
            <div className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-green-400" />
              <p className="text-sm text-muted-foreground font-medium">Total Claimed</p>
            </div>
            <p className="font-semibold text-green-400 text-lg">
              ${totalInterestEarnedUSD.toLocaleString('en-US', { 
                minimumFractionDigits: 2,
                maximumFractionDigits: 2 
              })}
            </p>
          </div>
          
          <div className="bg-background/40 rounded-xl p-4 space-y-2">
            <p className="text-sm text-muted-foreground font-medium">Available</p>
            <p className={`font-semibold text-lg ${unclaimedInterest > 0 ? 'text-orange-400' : 'text-muted-foreground'}`}>
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
          className="w-full bg-orange-900/20 border border-orange-800/30 text-orange-300 hover:bg-orange-900/30 hover:border-orange-800/40 focus-ring py-4 text-sm font-medium rounded-xl transition-all duration-200 disabled:opacity-50"
        >
          {isClaiming ? (
            <div className="flex items-center justify-center gap-2">
              <div className="w-4 h-4 border-2 border-orange-300 border-t-transparent rounded-full animate-spin" />
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
