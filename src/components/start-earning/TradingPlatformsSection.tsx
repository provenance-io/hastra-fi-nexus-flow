
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
          <div key={index} className="bg-background/30 rounded-2xl p-6 border border-border/10 hover:border-border/20 transition-all duration-300 group">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-xl bg-hastra-teal/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 p-2">
                {platform.name === 'Raydium' ? (
                  <img src="/lovable-uploads/40699f1a-7230-446f-867c-5ca94029b9ff.png" alt="Raydium" className="w-full h-full object-contain" />
                ) : (
                  <img src="/lovable-uploads/3e98b3c7-793c-4b26-9bf5-0c2d02974dd5.png" alt="Kamino Finance" className="w-full h-full object-contain" />
                )}
              </div>
              <div>
                <div className="text-2xl font-bold text-foreground">{platform.name}</div>
                <div className="text-sm text-muted-foreground font-medium">{platform.type}</div>
              </div>
            </div>
            
            <p className="text-muted-foreground text-base mb-6 leading-relaxed">{platform.description}</p>
            <div className="space-y-3 mb-8">
              {platform.features.map((feature, i) => (
                <div key={i} className="flex items-center gap-3 text-sm text-muted-foreground">
                  <div className="w-2 h-2 bg-foreground/60 rounded-full"></div>
                  <span>{feature}</span>
                </div>
              ))}
            </div>
            <Button 
              asChild 
              variant="secondary" 
              className="w-full group-hover:scale-[1.02] transition-transform duration-300"
            >
              <a href={platform.link} target="_blank" rel="noopener noreferrer">
                Access {platform.name}
                <ExternalLink className="ml-2 h-4 w-4 group-hover:scale-110 transition-transform" />
              </a>
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TradingPlatformsSection;
