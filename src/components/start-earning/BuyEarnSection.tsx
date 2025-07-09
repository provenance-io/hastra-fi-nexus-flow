import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Coins, TrendingUp, Shield, Info } from 'lucide-react';

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

const tokens = [
  {
    symbol: "YIELD",
    name: "Yield Token",
    description: "Yield-bearing stablecoin offering consistent returns",
    apy: "Up to 8%",
    risk: "Low",
    features: ["Stable value", "Consistent yields", "Low volatility"],
    color: "green"
  },
  {
    symbol: "sHASH",
    name: "Solana HASH",
    description: "Bridged HASH token for Solana DeFi participation",
    apy: "Variable",
    risk: "Medium",
    features: ["DeFi utility", "Cross-chain", "Growth potential"],
    color: "purple"
  }
];

const riskColors = {
  "Low": "bg-green-500/20 border-green-500/30 text-green-300",
  "Medium": "bg-yellow-500/20 border-yellow-500/30 text-yellow-300",
  "High": "bg-red-500/20 border-red-500/30 text-red-300"
};

const BuyEarnSection = () => {
  return (
    <section className="py-24 md:py-32 bg-gradient-to-br from-header-glow/5 via-background to-crypto-accent/5" data-section="buy-earn">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full glass-effect border border-header-glow/20 text-sm font-medium text-foreground/80 mb-6">
            <Coins className="w-4 h-4 mr-2" />
            Buy & Earn
          </div>
          
          <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-8">
            <span className="text-gradient">Start Earning</span>
            <br />
            <span className="text-muted-foreground">Immediately</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Get YIELD and sHASH tokens on trusted platforms. Start earning from day one with proven strategies.
          </p>
        </div>

        {/* Tokens Section */}
        <div className="mb-20">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-12">Available Tokens</h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {tokens.map((token, index) => (
              <Card key={index} className="glass-effect border-border/50 hover:border-header-glow/30 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between mb-3">
                    <Badge className={riskColors[token.risk as keyof typeof riskColors]}>
                      <Shield className="w-3 h-3 mr-1" />
                      {token.risk} Risk
                    </Badge>
                    <Badge variant="outline" className="text-header-glow border-header-glow/30">
                      {token.apy} APY
                    </Badge>
                  </div>
                  <CardTitle className="text-2xl flex items-center gap-3">
                    <div className={`w-12 h-12 rounded-lg ${token.color === 'green' ? 'bg-green-500/20' : 'bg-purple-500/20'} flex items-center justify-center`}>
                      <Coins className={`w-6 h-6 ${token.color === 'green' ? 'text-green-400' : 'text-purple-400'}`} />
                    </div>
                    <div>
                      <div className="text-xl font-bold">{token.symbol}</div>
                      <div className="text-sm text-muted-foreground font-normal">{token.name}</div>
                    </div>
                  </CardTitle>
                  <CardDescription className="text-base">{token.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-6">
                    {token.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-2 h-2 bg-header-glow rounded-full"></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button 
                    variant="auburn-outline"
                    className="w-full"
                    onClick={() => {
                      // Navigate to quick start guides
                      const learningSection = document.querySelector('[data-section="learning"]');
                      if (learningSection) {
                        learningSection.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                  >
                    Learn More
                    <Info className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Platforms Section */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-12">Trading Platforms</h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {platforms.map((platform, index) => (
              <Card key={index} className="glass-effect border-border/50 hover:border-header-glow/30 transition-all duration-300 group">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="outline" className="text-header-glow border-header-glow/30">
                      {platform.type}
                    </Badge>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <TrendingUp className="w-4 h-4" />
                      {platform.apy} APY
                    </div>
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
                  <div className="flex gap-3">
                  <Button 
                    variant="outline" 
                    className="flex-1"
                    onClick={() => {
                      // Navigate to comprehensive guides section
                      document.querySelector('[data-tab="comprehensive"]')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    Platform Guide
                    <Info className="ml-2 h-4 w-4" />
                  </Button>
                    <Button asChild className="flex-1 bg-orange-900/20 border border-orange-800/30 text-orange-300 hover:bg-orange-900/30 hover:border-orange-800/40 focus-ring font-bold px-8 py-4 text-lg rounded-xl group-hover:shadow-lg transition-all duration-200">
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
      </div>
    </section>
  );
};

export default BuyEarnSection;