
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, TrendingUp, DollarSign } from 'lucide-react';

const tradingPlatforms = [
  {
    name: "Raydium",
    description: "Trade tokens and provide liquidity on Solana's leading AMM",
    type: "Trading & Liquidity",
    features: ["YIELD/USDC Trading", "HASH/USDC Pool", "Low fees", "High liquidity"],
    link: "https://raydium.io",
    color: "blue"
  },
  {
    name: "Kamino Finance",
    description: "Lending and borrowing with automated yield strategies",
    type: "Lending & Yield",
    features: ["Lending pools", "Automated strategies", "Leveraged farming", "Risk management"],
    link: "https://app.kamino.finance",
    color: "green"
  }
];

const TradingPlatformsSection = () => {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold mb-4 text-foreground">
        Trade & Lend
      </h2>
      <p className="text-muted-foreground mb-6">
        Access leading DeFi platforms for trading, lending, and yield generation
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {tradingPlatforms.map((platform, index) => (
          <Card key={index} className="bg-background/80 backdrop-blur-md border-border/50 transition-all duration-300 group">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between mb-2">
                <CardTitle className="text-lg">{platform.name}</CardTitle>
                <Badge 
                  className={`text-xs ${
                    platform.color === 'blue' ? 'bg-blue-500/20 border-blue-500/30 text-blue-300' :
                    'bg-green-500/20 border-green-500/30 text-green-300'
                  }`}
                >
                  {platform.type}
                </Badge>
              </div>
              <CardDescription className="text-sm">{platform.description}</CardDescription>
            </CardHeader>
            <CardContent className="pt-0">
              <ul className="space-y-2 mb-4">
                {platform.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 bg-header-glow rounded-full"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              <Button asChild className="w-full bg-orange-900/20 border border-orange-800/30 text-orange-300 hover:bg-orange-900/30 hover:border-orange-800/40 transition-all duration-200 group-hover:scale-[1.02]">
                <a href={platform.link} target="_blank" rel="noopener noreferrer">
                  Access {platform.name}
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default TradingPlatformsSection;
