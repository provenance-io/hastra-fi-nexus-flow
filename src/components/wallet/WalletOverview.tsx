
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useWallet } from '@/contexts/WalletContext';
import { useTokenPortfolio } from '@/hooks/useTokenPortfolio';
import TokenLineItem from './TokenLineItem';
import { 
  Wallet, 
  RefreshCw, 
  TrendingUp, 
  DollarSign,
  ArrowUpRight,
  ChevronDown,
  ChevronUp,
  Gift
} from 'lucide-react';
import { useState } from 'react';

const WalletOverview = () => {
  // Force component refresh after refactoring
  const { refreshBalance, address } = useWallet();
  const { 
    tokens, 
    claimInterest, 
    getTotalPortfolioValue, 
    getTotalInterestEarned,
    getTotalUnclaimedInterest 
  } = useTokenPortfolio();
  
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [showTokenHoldings, setShowTokenHoldings] = useState(true);

  const handleRefreshBalance = async () => {
    setIsRefreshing(true);
    await refreshBalance();
    setIsRefreshing(false);
  };

  const formatAddress = (addr: string) => {
    return `${addr.slice(0, 6)}...${addr.slice(-4)}`;
  };

  const handleTokenClaim = (tokenSymbol: string) => (claimedAmount: number) => {
    claimInterest(tokenSymbol, claimedAmount);
  };

  const totalPortfolioValue = getTotalPortfolioValue();
  const totalInterestEarned = getTotalInterestEarned();
  const totalUnclaimedInterest = getTotalUnclaimedInterest();
  const profitPercentage = totalPortfolioValue > 0 ? (totalInterestEarned / totalPortfolioValue) * 100 : 0;

  return (
    <Card className="glass-hastra">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-hastra-teal/20 flex items-center justify-center">
              <Wallet className="w-6 h-6 text-hastra-teal" />
            </div>
            <div>
              <CardTitle className="text-xl text-foreground">Portfolio Overview</CardTitle>
              <p className="text-sm text-muted-foreground font-mono">
                {address ? formatAddress(address) : 'Loading...'}
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowTokenHoldings(!showTokenHoldings)}
              className="text-muted-foreground hover:text-foreground"
            >
              {showTokenHoldings ? (
                <ChevronUp className="w-4 h-4" />
              ) : (
                <ChevronDown className="w-4 h-4" />
              )}
            </Button>
            
            <Button
              variant="ghost"
              size="sm"
              onClick={handleRefreshBalance}
              disabled={isRefreshing}
              className="text-muted-foreground hover:text-foreground"
            >
              <RefreshCw className={`w-4 h-4 ${isRefreshing ? 'animate-spin' : ''}`} />
            </Button>
          </div>
        </div>
      </CardHeader>
      
      <CardContent>
        {/* Portfolio Summary */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {/* Total Portfolio Value */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <DollarSign className="w-4 h-4 text-hastra-teal" />
              <p className="text-sm text-muted-foreground">total value</p>
            </div>
            
            <div className="space-y-1">
              <p className="text-2xl font-bold text-foreground">
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
                <Badge className="bg-green-500/20 border-green-500/30 text-green-300 text-xs">
                  +{profitPercentage.toFixed(1)}%
                </Badge>
              </div>
            </div>
          </div>
          
          {/* Total Interest Earned */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-hastra-teal" />
              <p className="text-sm text-muted-foreground">interest earned</p>
            </div>
            
            <div className="space-y-1">
              <p className="text-2xl font-bold text-green-400">
                {totalInterestEarned.toLocaleString('en-US', { 
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 4 
                })}
              </p>
              <div className="flex items-center gap-2">
                <Badge className="bg-green-500/20 border-green-500/30 text-green-300 text-xs">
                  All Time
                </Badge>
              </div>
            </div>
          </div>

          {/* Unclaimed Interest */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Gift className="w-4 h-4 text-hastra-teal" />
              <p className="text-sm text-muted-foreground">unclaimed</p>
            </div>
            
            <div className="space-y-1">
              <p className="text-2xl font-bold text-hastra-teal">
                {totalUnclaimedInterest.toLocaleString('en-US', { 
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 4 
                })}
              </p>
              <div className="flex items-center gap-2">
                <Badge className="bg-hastra-teal/20 border-hastra-teal/30 text-hastra-teal text-xs">
                  Ready to Claim
                </Badge>
              </div>
            </div>
          </div>
        </div>

        {/* Token Holdings */}
        {showTokenHoldings && (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground mb-3">Token Holdings</h3>
            <div className="space-y-3">
              {tokens.map((token) => (
                <TokenLineItem
                  key={token.token}
                  token={token.token}
                  amount={token.amount}
                  value={token.value}
                  apy={token.apy}
                  totalInterestEarned={token.totalInterestEarned}
                  unclaimedInterest={token.unclaimedInterest}
                  icon={token.icon}
                  onClaim={handleTokenClaim(token.token)}
                />
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default WalletOverview;
