import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink } from 'lucide-react';

const platforms = [
  {
    name: "Kamino Finance",
    description: "Automated lending strategies with optimized yields",
    logo: "/lovable-uploads/9edb1ae1-8f98-4dcd-90f7-4f7e3135521e.png",
    link: "https://app.kamino.finance",
    apy: "Up to 8%",
    features: ["Automated strategies", "Lending & borrowing", "Risk management"],
    color: "blue",
    type: "Lending Platform"
  },
  {
    name: "Raydium",
    description: "Leading AMM for liquidity provision and trading",
    logo: "/lovable-uploads/30e0a19d-182e-4457-b5e0-58c467109e2f.png", 
    link: "https://raydium.io",
    apy: "Variable",
    features: ["Concentrated liquidity", "Low fees", "High volume"],
    color: "purple",
    type: "DEX & Liquidity"
  }
];

const TradingPlatformsSection = () => {
  return (
    <div className="mt-12 pt-12 border-t border-border/50">
      <h3 className="text-2xl md:text-3xl font-bold text-center mb-12">Trading Platforms</h3>
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {platforms.map((platform, index) => (
          <Card key={index} className="glass-effect border-border/50 hover:border-header-glow/30 transition-all duration-300 group">
            <CardHeader>
              <div className="flex items-center justify-between mb-4">
                <Badge variant="outline" className="text-header-glow border-header-glow/30">
                  {platform.type}
                </Badge>
              </div>
              <CardTitle className="text-xl flex items-center gap-4">
                <img 
                  src={platform.logo} 
                  alt={platform.name}
                  className="w-12 h-12 rounded-lg"
                />
                <div>
                  <div className="text-xl font-bold">{platform.name}</div>
                  <div className="text-sm text-muted-foreground font-normal">{platform.type}</div>
                </div>
              </CardTitle>
              <CardDescription className="text-base">{platform.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 mb-6">
                {platform.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-2 h-2 bg-header-glow rounded-full"></div>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              <div className="flex justify-center">
                <Button asChild className="w-full bg-orange-900/20 border border-orange-800/30 text-orange-300 hover:bg-orange-900/30 hover:border-orange-800/40 focus-ring font-bold px-8 py-4 text-lg rounded-xl transition-all duration-200">
                  <a href={platform.link} target="_blank" rel="noopener noreferrer">
                    Start Trading
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default TradingPlatformsSection;