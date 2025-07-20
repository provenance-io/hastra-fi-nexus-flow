
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
          <div key={index} className="card-gradient rounded-2xl p-6 space-y-4 transition-all duration-300 group">
            <div className="pb-3">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-semibold">{platform.name}</h3>
              </div>
              <p className="text-sm text-muted-foreground">{platform.description}</p>
            </div>
            <div className="pt-0">
              <ul className="space-y-2 mb-4">
                {platform.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 bg-header-glow rounded-full"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              <Button asChild variant="secondary" className="w-full group-hover:scale-[1.02]">
                <a href={platform.link} target="_blank" rel="noopener noreferrer">
                  Access {platform.name}
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TradingPlatformsSection;
