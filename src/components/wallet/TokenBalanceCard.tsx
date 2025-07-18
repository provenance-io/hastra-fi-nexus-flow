
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowUpRight, ArrowDownRight, ExternalLink } from 'lucide-react';

interface TokenBalanceCardProps {
  token: string;
  amount: number;
  value: number;
  apy: number;
  change: number;
  icon: string;
}

const TokenBalanceCard = ({ 
  token, 
  amount, 
  value, 
  apy, 
  change, 
  icon 
}: TokenBalanceCardProps) => {
  const isPositive = change >= 0;
  const isImage = icon.startsWith('/') || icon.startsWith('http');

  return (
    <Card className="glass-hastra hover:shadow-hastra-lg transition-all duration-300">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
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
              <CardTitle className="text-lg text-foreground">{token}</CardTitle>
              <p className="text-sm text-muted-foreground">
                {amount.toLocaleString()} tokens
              </p>
            </div>
          </div>
          
          <Button 
            variant="ghost" 
            size="sm"
            className="text-muted-foreground hover:text-hastra-teal"
          >
            <ExternalLink className="w-4 h-4" />
          </Button>
        </div>
      </CardHeader>
      
      <CardContent>
        <div className="space-y-3">
          {/* Value */}
          <div>
            <p className="text-2xl font-bold text-foreground">
              ${value.toLocaleString('en-US', { 
                minimumFractionDigits: 2,
                maximumFractionDigits: 2 
              })}
            </p>
            <div className="flex items-center gap-2 mt-1">
              {isPositive ? (
                <ArrowUpRight className="w-3 h-3 text-green-400" />
              ) : (
                <ArrowDownRight className="w-3 h-3 text-red-400" />
              )}
              <span className={`text-sm font-medium ${
                isPositive ? 'text-green-400' : 'text-red-400'
              }`}>
                {isPositive ? '+' : ''}{change}% 24h
              </span>
            </div>
          </div>
          
          {/* APY Badge */}
          <div className="flex items-center justify-between">
            <Badge className="bg-hastra-teal/20 border-hastra-teal/30 text-hastra-teal text-xs">
              {apy}% APY
            </Badge>
            <p className="text-xs text-muted-foreground">
              Auto-compounding
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TokenBalanceCard;
