
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useWallet } from '@/contexts/WalletContext';
import { Skeleton } from '@/components/ui/skeleton';
import { 
  Wallet, 
  RefreshCw, 
  TrendingUp, 
  DollarSign,
  ArrowUpRight,
  Eye,
  EyeOff
} from 'lucide-react';
import { useState } from 'react';

const WalletOverview = () => {
  const { balance, refreshBalance, address } = useWallet();
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [showBalance, setShowBalance] = useState(true);

  const handleRefreshBalance = async () => {
    setIsRefreshing(true);
    await refreshBalance();
    setIsRefreshing(false);
  };

  const formatAddress = (addr: string) => {
    return `${addr.slice(0, 6)}...${addr.slice(-4)}`;
  };

  // Mock data
  const portfolioData = {
    totalValue: balance,
    totalProfit: 245.67,
    profitPercentage: 15.8,
    monthlyYield: 127.43,
    monthlyYieldPercentage: 8.2,
  };

  return (
    <Card className="glass-hastra">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-hastra-teal/20 flex items-center justify-center">
              <Wallet className="w-6 h-6 text-hastra-teal" />
            </div>
            <div>
              <CardTitle className="text-xl text-foreground">Wallet Overview</CardTitle>
              <p className="text-sm text-muted-foreground font-mono">
                {address ? formatAddress(address) : 'Loading...'}
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowBalance(!showBalance)}
              className="text-muted-foreground hover:text-foreground"
            >
              {showBalance ? (
                <Eye className="w-4 h-4" />
              ) : (
                <EyeOff className="w-4 h-4" />
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Total Portfolio Value */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <DollarSign className="w-4 h-4 text-hastra-teal" />
              <p className="text-sm text-muted-foreground">Total Portfolio Value</p>
            </div>
            
            {showBalance ? (
              <div className="space-y-1">
                <p className="text-3xl font-bold text-foreground">
                  ${portfolioData.totalValue.toLocaleString('en-US', { 
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2 
                  })}
                </p>
                <div className="flex items-center gap-2">
                  <ArrowUpRight className="w-3 h-3 text-green-400" />
                  <span className="text-sm text-green-400 font-medium">
                    +${portfolioData.totalProfit.toLocaleString('en-US', { 
                      minimumFractionDigits: 2 
                    })}
                  </span>
                  <Badge className="bg-green-500/20 border-green-500/30 text-green-300 text-xs">
                    +{portfolioData.profitPercentage}%
                  </Badge>
                </div>
              </div>
            ) : (
              <div className="space-y-1">
                <p className="text-3xl font-bold text-foreground">••••••</p>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground">Hidden</span>
                </div>
              </div>
            )}
          </div>
          
          {/* Monthly Yield */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-hastra-teal" />
              <p className="text-sm text-muted-foreground">Monthly Yield</p>
            </div>
            
            {showBalance ? (
              <div className="space-y-1">
                <p className="text-3xl font-bold text-hastra-teal">
                  ${portfolioData.monthlyYield.toLocaleString('en-US', { 
                    minimumFractionDigits: 2 
                  })}
                </p>
                <div className="flex items-center gap-2">
                  <Badge className="bg-hastra-teal/20 border-hastra-teal/30 text-hastra-teal text-xs">
                    {portfolioData.monthlyYieldPercentage}% APY
                  </Badge>
                </div>
              </div>
            ) : (
              <div className="space-y-1">
                <p className="text-3xl font-bold text-hastra-teal">••••••</p>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground">Hidden</span>
                </div>
              </div>
            )}
          </div>
        </div>
        
        {/* Progress Bar */}
        <div className="mt-6 p-4 rounded-xl bg-background/50 border border-border/30">
          <div className="flex items-center justify-between text-sm text-muted-foreground mb-2">
            <span>Monthly Goal Progress</span>
            <span>78%</span>
          </div>
          <div className="w-full bg-border/50 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-hastra-teal to-hastra-teal-light h-2 rounded-full transition-all duration-300"
              style={{ width: '78%' }}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default WalletOverview;
