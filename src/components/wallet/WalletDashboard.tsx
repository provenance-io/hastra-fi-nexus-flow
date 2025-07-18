
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useWallet } from '@/contexts/WalletContext';
import { 
  TrendingUp, 
  RefreshCw, 
  ExternalLink, 
  DollarSign,
  PieChart,
  ArrowUpRight
} from 'lucide-react';
import { useState } from 'react';

const WalletDashboard = () => {
  const { balance, refreshBalance } = useWallet();
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleRefreshBalance = async () => {
    setIsRefreshing(true);
    await refreshBalance();
    setIsRefreshing(false);
  };

  // Mock portfolio data
  const portfolioStats = {
    totalValue: balance,
    yieldEarned: 156.78,
    monthlyReturn: 8.2,
    positions: [
      { token: 'YIELD', amount: 850.25, value: 850.25, apy: 8.0 },
      { token: 'HASH (Sol)', amount: 127.43, value: 400.20, apy: 12.5 },
    ]
  };

  return (
    <div className="space-y-8">
      {/* Wallet Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="glass-effect border-border/50">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Balance</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${balance.toLocaleString('en-US', { minimumFractionDigits: 2 })}</div>
            <div className="flex items-center justify-between mt-2">
              <p className="text-xs text-muted-foreground">
                +12.5% from last month
              </p>
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={handleRefreshBalance}
                disabled={isRefreshing}
              >
                <RefreshCw className={`h-3 w-3 ${isRefreshing ? 'animate-spin' : ''}`} />
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="glass-effect border-border/50">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Yield Earned</CardTitle>
            <TrendingUp className="h-4 w-4 text-green-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-400">
              ${portfolioStats.yieldEarned.toLocaleString('en-US', { minimumFractionDigits: 2 })}
            </div>
            <p className="text-xs text-muted-foreground">
              This month
            </p>
          </CardContent>
        </Card>

        <Card className="glass-effect border-border/50">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Monthly Return</CardTitle>
            <ArrowUpRight className="h-4 w-4 text-green-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-400">
              {portfolioStats.monthlyReturn}%
            </div>
            <p className="text-xs text-muted-foreground">
              Average APY: 9.2%
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Portfolio Positions */}
      <Card className="glass-effect border-border/50">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <PieChart className="h-5 w-5 text-header-glow" />
              <div>
                <CardTitle className="text-lg">Your Positions</CardTitle>
                <CardDescription>Current token holdings and yields</CardDescription>
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {portfolioStats.positions.map((position, index) => (
              <div key={index} className="flex items-center justify-between p-4 rounded-xl glass-effect border border-border/30">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-header-glow/20 flex items-center justify-center">
                    {position.token === 'YIELD' ? (
                      <img 
                        src="/lovable-uploads/08452a7b-6782-4b0a-900e-0f0c99a4fc4e.png" 
                        alt="YIELD Token"
                        className="w-8 h-8 rounded"
                      />
                    ) : (
                      <img 
                        src="/lovable-uploads/bb5fd324-8133-40de-98e0-34ae8f181798.png" 
                        alt="HASH Token"
                        className="w-8 h-8 rounded-full object-cover"
                      />
                    )}
                  </div>
                  <div>
                    <p className="font-medium">{position.token}</p>
                    <p className="text-sm text-muted-foreground">
                      {position.amount.toLocaleString()} tokens
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium">${position.value.toLocaleString('en-US', { minimumFractionDigits: 2 })}</p>
                  <div className="flex items-center gap-2">
                    <Badge className="bg-green-500/20 border-green-500/30 text-green-300 text-xs">
                      {position.apy}% APY
                    </Badge>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <Card className="glass-effect border-border/50">
        <CardHeader>
          <CardTitle className="text-lg">Quick Actions</CardTitle>
          <CardDescription>Manage your DeFi positions</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Button 
              className="bg-orange-900/20 border border-orange-800/30 text-orange-300 hover:bg-orange-900/30 hover:border-orange-800/40 focus-ring font-bold py-4 rounded-xl transition-all duration-200"
              asChild
            >
              <a href="https://app.kamino.finance" target="_blank" rel="noopener noreferrer">
                Add Liquidity
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button 
              className="bg-orange-900/20 border border-orange-800/30 text-orange-300 hover:bg-orange-900/30 hover:border-orange-800/40 focus-ring font-bold py-4 rounded-xl transition-all duration-200"
              asChild
            >
              <a href="https://raydium.io" target="_blank" rel="noopener noreferrer">
                Trade Tokens
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default WalletDashboard;
