
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

  return (
    <div className="p-4 rounded-xl bg-background/50 border border-border/30 hover:border-hastra-teal/30 transition-all duration-300">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-hastra-teal/20 flex items-center justify-center">
            {isImage ? (
              <img 
                src={icon} 
                alt={`${token} Token`}
                className="w-6 h-6 rounded"
              />
            ) : (
              <span className="text-hastra-teal font-bold text-sm">{icon}</span>
            )}
          </div>
          <div>
            <h4 className="font-semibold text-foreground">{token}</h4>
            <div className="flex items-center gap-2">
              <Badge className="bg-hastra-teal/20 border-hastra-teal/30 text-hastra-teal text-xs">
                {apy}% APY
              </Badge>
            </div>
          </div>
        </div>
        
        <Button
          onClick={handleClaim}
          disabled={unclaimedInterest <= 0 || isClaiming}
          size="sm"
          className="bg-hastra-teal/20 border border-hastra-teal/30 text-hastra-teal hover:bg-hastra-teal/30 hover:border-hastra-teal/50 disabled:opacity-50"
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
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
        <div>
          <p className="text-muted-foreground mb-1">Tokens</p>
          <p className="font-medium text-foreground">
            {amount.toLocaleString('en-US', { 
              minimumFractionDigits: 2,
              maximumFractionDigits: 4 
            })}
          </p>
        </div>
        
        <div>
          <p className="text-muted-foreground mb-1">Worth</p>
          <p className="font-medium text-foreground">
            ${value.toLocaleString('en-US', { 
              minimumFractionDigits: 2,
              maximumFractionDigits: 2 
            })}
          </p>
        </div>
        
        <div>
          <p className="text-muted-foreground mb-1">Total Interest</p>
          <div className="flex items-center gap-1">
            <TrendingUp className="w-3 h-3 text-green-400" />
            <p className="font-medium text-green-400">
              {totalInterestEarned.toLocaleString('en-US', { 
                minimumFractionDigits: 2,
                maximumFractionDigits: 4 
              })}
            </p>
          </div>
        </div>
        
        <div>
          <p className="text-muted-foreground mb-1">Unclaimed</p>
          <p className={`font-medium ${unclaimedInterest > 0 ? 'text-hastra-teal' : 'text-muted-foreground'}`}>
            {unclaimedInterest.toLocaleString('en-US', { 
              minimumFractionDigits: 2,
              maximumFractionDigits: 4 
            })}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TokenLineItem;
