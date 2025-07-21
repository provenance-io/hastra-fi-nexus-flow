
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { TrendingUp } from 'lucide-react';
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
    <div className="bg-background/30 rounded-2xl border border-border/20 hover:border-amber-glow/15 transition-all duration-300 hover:shadow-[0_0_8px_rgba(229,218,194,0.1),0_0_15px_rgba(229,218,194,0.05)]">
      {/* Desktop Layout */}
      <div className="hidden lg:flex items-center p-6">
        {/* Token Info - Fixed Width */}
        <div className="flex flex-col items-center gap-2 w-32 flex-shrink-0">
          {isImage ? (
            <img 
              src={icon} 
              alt={`${token} Token`}
              className="w-12 h-12 rounded-full object-cover shadow-sm"
            />
          ) : (
            <div className="w-12 h-12 rounded-xl bg-hastra-teal/10 flex items-center justify-center shadow-sm">
              <span className="text-hastra-teal font-bold text-lg">{icon}</span>
            </div>
          )}
          <div className="text-center space-y-0.5">
            <h4 className="font-medium text-foreground text-sm leading-tight">{token.replace(' (Sol)', '')}</h4>
            <p className="text-xs text-muted-foreground">Token</p>
          </div>
        </div>
        
        {/* Data Columns - Equal Distribution with justify-between */}
        <div className="flex-1 flex justify-between items-center px-8">
          {/* Balance Column */}
          <div className="flex flex-col items-center text-center space-y-1 w-24">
            <p className="text-muted-foreground text-sm font-medium">Balance</p>
            <p className="font-bold text-white text-lg">
              {amount.toLocaleString('en-US', { 
                minimumFractionDigits: 2,
                maximumFractionDigits: 4 
              })}
            </p>
            <p className="text-xs text-muted-foreground">tokens</p>
          </div>
          
          {/* Value Column */}
          <div className="flex flex-col items-center text-center space-y-1 w-24">
            <p className="text-muted-foreground text-sm font-medium">Value</p>
            <p className="font-semibold text-white text-lg">
              ${value.toLocaleString('en-US', { 
                minimumFractionDigits: 2,
                maximumFractionDigits: 2 
              })}
            </p>
          </div>
          
          {/* Total Claimed Column */}
          <div className="flex flex-col items-center text-center space-y-1 w-24">
            <p className="text-muted-foreground text-sm font-medium">Total Claimed</p>
            <p className="font-semibold text-white text-lg">
              ${totalInterestEarnedUSD.toLocaleString('en-US', { 
                minimumFractionDigits: 2,
                maximumFractionDigits: 2 
              })}
            </p>
          </div>
          
          {/* Available Column */}
          <div className="flex flex-col items-center text-center space-y-1 w-24">
            <p className="text-muted-foreground text-sm font-medium">Available</p>
            <p className={`font-semibold text-lg ${unclaimedInterest > 0 ? 'text-white' : 'text-muted-foreground'}`}>
              ${unclaimedInterestUSD.toLocaleString('en-US', { 
                minimumFractionDigits: 2,
                maximumFractionDigits: 2 
              })}
            </p>
          </div>
        </div>
        
        {/* Claim Button - Fixed Width */}
        <div className="w-32 flex-shrink-0 flex justify-center">
          <Button
            onClick={handleClaim}
            disabled={unclaimedInterest <= 0 || isClaiming}
            size="sm"
            className="px-6 py-3 text-sm font-medium rounded-xl disabled:opacity-50 whitespace-nowrap"
            variant="secondary"
          >
            {isClaiming ? (
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 border-2 border-orange-300 border-t-transparent rounded-full animate-spin" />
                Claiming...
              </div>
            ) : (
              <>
                Claim {token.replace(' (Sol)', '')}
              </>
            )}
          </Button>
        </div>
      </div>

      {/* Mobile/Tablet Layout - Redesigned */}
      <div className="lg:hidden p-5 space-y-5">
        {/* Token Header - Improved Layout */}
        <div className="flex items-center gap-4">
          <div className="flex-shrink-0">
            {isImage ? (
              <img 
                src={icon} 
                alt={`${token} Token`}
                className="w-12 h-12 rounded-full object-cover shadow-sm"
              />
            ) : (
              <div className="w-12 h-12 rounded-xl bg-hastra-teal/10 flex items-center justify-center shadow-sm">
                <span className="text-hastra-teal font-bold text-lg">{icon}</span>
              </div>
            )}
          </div>
          <div className="flex-1 min-w-0">
            <h4 className="font-semibold text-foreground text-lg leading-tight">{token.replace(' (Sol)', '')}</h4>
            <p className="text-sm text-muted-foreground mt-0.5">Token</p>
          </div>
          <div className="text-right flex-shrink-0">
            <p className="font-bold text-white text-xl leading-tight">
              ${value.toLocaleString('en-US', { 
                minimumFractionDigits: 2,
                maximumFractionDigits: 2 
              })}
            </p>
            <p className="text-sm text-muted-foreground mt-0.5">Total Value</p>
          </div>
        </div>

        {/* Token Balance - Centered */}
        <div className="text-center py-3 bg-background/20 rounded-xl">
          <p className="text-3xl font-bold text-white leading-tight">
            {amount.toLocaleString('en-US', { 
              minimumFractionDigits: 2,
              maximumFractionDigits: 4 
            })}
          </p>
          <p className="text-sm text-muted-foreground mt-1">tokens held</p>
        </div>

        {/* Stats Grid - Improved Spacing */}
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-background/40 rounded-xl p-4 text-center">
            <div className="flex items-center justify-center gap-1.5 mb-2">
              <p className="text-sm text-muted-foreground font-medium">Total Claimed</p>
            </div>
            <p className="font-bold text-white text-lg leading-tight">
              ${totalInterestEarnedUSD.toLocaleString('en-US', { 
                minimumFractionDigits: 2,
                maximumFractionDigits: 2 
              })}
            </p>
          </div>
          
          <div className="bg-background/40 rounded-xl p-4 text-center">
            <p className="text-sm text-muted-foreground font-medium mb-2">Available</p>
            <p className={`font-bold text-lg leading-tight ${unclaimedInterest > 0 ? 'text-white' : 'text-muted-foreground'}`}>
              ${unclaimedInterestUSD.toLocaleString('en-US', { 
                minimumFractionDigits: 2,
                maximumFractionDigits: 2 
              })}
            </p>
          </div>
        </div>

        {/* Claim Button - Full Width */}
        <Button
          onClick={handleClaim}
          disabled={unclaimedInterest <= 0 || isClaiming}
          className="w-full py-4 text-base font-semibold rounded-xl disabled:opacity-50"
          variant="secondary"
        >
          {isClaiming ? (
            <div className="flex items-center justify-center gap-2.5">
              <div className="w-5 h-5 border-2 border-orange-300 border-t-transparent rounded-full animate-spin" />
              <span>Claiming Interest...</span>
            </div>
          ) : (
            <div className="flex items-center justify-center gap-2.5">
              <span>Claim {token.replace(' (Sol)', '')} - ${unclaimedInterestUSD.toFixed(2)}</span>
            </div>
          )}
        </Button>
      </div>
    </div>
  );
};

export default TokenLineItem;
