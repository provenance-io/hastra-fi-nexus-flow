
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
  tokenAddress: string;
  onClaim?: (amount: number) => void;

}

const TokenLineItem = ({
  token,
  amount,
  value,
  apy,
  totalInterestEarned,
  unclaimedInterest,
  icon,
  tokenAddress,
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

  const copyToClipboard = () => {
    navigator.clipboard.writeText(tokenAddress);
    toast({
      title: "TA copied to clipboard",
      description: `${tokenAddress} copied successfully`,
      duration: 3000,
    });
  };

  // Calculate dollar values for interest
  const tokenPrice = value / amount; // Price per token
  const totalInterestEarnedUSD = isNaN(totalInterestEarned * tokenPrice) ? 0 : (totalInterestEarned * tokenPrice);
  const unclaimedInterestUSD = isNaN(unclaimedInterest * tokenPrice) ? 0 : (totalInterestEarned * tokenPrice);

  return (
    <div className="bg-background/30 rounded-2xl border border-border/20 hover:border-amber-glow/15 transition-all duration-300 hover:shadow-[0_0_8px_rgba(229,218,194,0.1),0_0_15px_rgba(229,218,194,0.05)] max-w-4xl mx-auto">
      
      {/* Desktop/Large Screens Layout (lg+) */}
      <div className="hidden lg:flex items-center p-4">
        {/* Token Info - Compact */}
        <div className="flex items-center gap-3 w-36 flex-shrink-0">
          {isImage ? (
            <img 
              src={icon} 
              alt={`${token} Token`}
              className="w-10 h-10 rounded-full object-cover shadow-sm flex-shrink-0"
            />
          ) : (
            <div className="w-10 h-10 rounded-xl bg-hastra-teal/10 flex items-center justify-center shadow-sm flex-shrink-0">
              <span className="text-hastra-teal font-bold text-base">{icon}</span>
            </div>
          )}
          <div className="min-w-0">
            <h4 className="font-medium text-foreground text-sm leading-tight">{token.replace(' (Sol)', '')}</h4>
            <p className="text-xs text-muted-foreground hover:cursor-pointer" onClick={copyToClipboard}>Token</p>
          </div>
        </div>
        
        {/* Data Columns - Compact Grid */}
        <div className="flex-1 grid grid-cols-4 gap-4 px-4">
          <div className="text-center">
            <p className="text-muted-foreground text-xs font-medium mb-1">Balance</p>
            <p className="font-bold text-white text-sm">
              {amount.toLocaleString('en-US', { 
                minimumFractionDigits: 2,
                maximumFractionDigits: 4 
              })}
            </p>
            <p className="text-xs text-muted-foreground">tokens</p>
          </div>
          
          <div className="text-center">
            <p className="text-muted-foreground text-xs font-medium mb-1">Value</p>
            <p className="font-semibold text-white text-sm">
              ${value.toLocaleString('en-US', { 
                minimumFractionDigits: 2,
                maximumFractionDigits: 2 
              })}
            </p>
          </div>
          
          <div className="text-center">
            <p className="text-muted-foreground text-xs font-medium mb-1">Total Claimed</p>
            <p className="font-semibold text-white text-sm">
              ${totalInterestEarnedUSD.toLocaleString('en-US', { 
                minimumFractionDigits: 2,
                maximumFractionDigits: 2 
              })}
            </p>
          </div>
          
          <div className="text-center">
            <p className="text-muted-foreground text-xs font-medium mb-1">Available</p>
            <p className={`font-semibold text-sm ${unclaimedInterest > 0 ? 'text-white' : 'text-muted-foreground'}`}>
              ${unclaimedInterestUSD.toLocaleString('en-US', { 
                minimumFractionDigits: 2,
                maximumFractionDigits: 2 
              })}
            </p>
          </div>
        </div>
        
        {/* Claim Button - Compact */}
        <div className="w-28 flex-shrink-0 flex justify-center">
          { onClaim && <Button
            onClick={handleClaim}
            disabled={unclaimedInterest <= 0 || isClaiming}
            size="sm"
            className="px-4 py-2 text-xs font-medium rounded-lg disabled:opacity-50 whitespace-nowrap"
            variant="secondary"
          >
            {isClaiming ? (
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 border-2 border-orange-300 border-t-transparent rounded-full animate-spin" />
                Claiming...
              </div>
            ) : (
              <>
                Claim {token.replace(' (Sol)', '')}
              </>
            )}
          </Button> }
        </div>
      </div>

      {/* Tablet Layout (md to lg) */}
      <div className="hidden md:block lg:hidden p-5">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            {isImage ? (
              <img 
                src={icon} 
                alt={`${token} Token`}
                className="w-10 h-10 rounded-full object-cover shadow-sm"
              />
            ) : (
              <div className="w-10 h-10 rounded-xl bg-hastra-teal/10 flex items-center justify-center shadow-sm">
                <span className="text-hastra-teal font-bold text-base">{icon}</span>
              </div>
            )}
            <div>
              <h4 className="font-semibold text-foreground text-base">{token.replace(' (Sol)', '')}</h4>
              <p className="text-sm text-muted-foreground">Token</p>
            </div>
          </div>
          <div className="text-right">
            <p className="font-bold text-white text-lg">
              ${value.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </p>
            <p className="text-sm text-muted-foreground">Total Value</p>
          </div>
        </div>
        
        <div className="grid grid-cols-3 gap-4 mb-4">
          <div className="text-center">
            <p className="text-sm text-muted-foreground mb-1">Balance</p>
            <p className="font-bold text-white text-base">
              {amount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 4 })}
            </p>
          </div>
          <div className="text-center">
            <p className="text-sm text-muted-foreground mb-1">Total Claimed</p>
            <p className="font-bold text-white text-base">
              ${totalInterestEarnedUSD.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </p>
          </div>
          <div className="text-center">
            <p className="text-sm text-muted-foreground mb-1">Available</p>
            <p className={`font-bold text-base ${unclaimedInterest > 0 ? 'text-white' : 'text-muted-foreground'}`}>
              ${unclaimedInterestUSD.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </p>
          </div>
        </div>
        
        <Button
          onClick={handleClaim}
          disabled={unclaimedInterest <= 0 || isClaiming}
          className="w-full py-3 text-sm font-medium rounded-xl disabled:opacity-50"
          variant="secondary"
        >
          {isClaiming ? (
            <div className="flex items-center justify-center gap-2">
              <div className="w-4 h-4 border-2 border-orange-300 border-t-transparent rounded-full animate-spin" />
              <span>Claiming...</span>
            </div>
          ) : (
            <span>Claim {token.replace(' (Sol)', '')} - ${unclaimedInterestUSD.toFixed(2)}</span>
          )}
        </Button>
      </div>

      {/* Mobile Layout (sm and below) */}
      <div className="md:hidden p-4 space-y-4">
        {/* Token Header */}
        <div className="flex items-center gap-3">
          <div className="flex-shrink-0">
            {isImage ? (
              <img 
                src={icon} 
                alt={`${token} Token`}
                className="w-10 h-10 rounded-full object-cover shadow-sm"
              />
            ) : (
              <div className="w-10 h-10 rounded-xl bg-hastra-teal/10 flex items-center justify-center shadow-sm">
                <span className="text-hastra-teal font-bold text-base">{icon}</span>
              </div>
            )}
          </div>
          <div className="flex-1 min-w-0">
            <h4 className="font-semibold text-foreground text-base leading-tight">{token.replace(' (Sol)', '')}</h4>
            <p className="text-sm text-muted-foreground">Token</p>
          </div>
          <div className="text-right flex-shrink-0">
            <p className="font-bold text-white text-lg leading-tight">
              ${value.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </p>
            <p className="text-xs text-muted-foreground">Value</p>
          </div>
        </div>

        {/* Balance Section */}
        <div className="text-center py-3 bg-background/20 rounded-xl">
          <p className="text-2xl font-bold text-white leading-tight">
            {amount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 4 })}
          </p>
          <p className="text-sm text-muted-foreground">tokens held</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-background/40 rounded-xl p-3 text-center">
            <p className="text-sm text-muted-foreground font-medium mb-1">Total Claimed</p>
            <p className="font-bold text-white text-base leading-tight">
              ${totalInterestEarnedUSD.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </p>
          </div>
          
          <div className="bg-background/40 rounded-xl p-3 text-center">
            <p className="text-sm text-muted-foreground font-medium mb-1">Available</p>
            <p className={`font-bold text-base leading-tight ${unclaimedInterest > 0 ? 'text-white' : 'text-muted-foreground'}`}>
              ${unclaimedInterestUSD.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </p>
          </div>
        </div>

        {/* Claim Button */}
        <Button
          onClick={handleClaim}
          disabled={unclaimedInterest <= 0 || isClaiming}
          className="w-full py-3 text-sm font-medium rounded-xl disabled:opacity-50"
          variant="secondary"
        >
          {isClaiming ? (
            <div className="flex items-center justify-center gap-2">
              <div className="w-4 h-4 border-2 border-orange-300 border-t-transparent rounded-full animate-spin" />
              <span>Claiming...</span>
            </div>
          ) : (
            <span>Claim - ${unclaimedInterestUSD.toFixed(2)}</span>
          )}
        </Button>
      </div>
    </div>
  );
};

export default TokenLineItem;
