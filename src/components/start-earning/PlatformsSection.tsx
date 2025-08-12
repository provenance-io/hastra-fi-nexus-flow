import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ExternalLink } from 'lucide-react';

const platforms = [
  {
    name: "Raydium",
    description: "Automated Market Maker for liquidity pools and swaps",
    features: ["wYLDS/USDC Pool", "HASH/USDC Pool", "Low fees", "High liquidity"],
    link: "https://raydium.io"
  },
  {
    name: "Kamino",
    description: "Lending and borrowing protocol with yield optimization",
    features: ["Lending pools", "Automated strategies", "swYLDS participation", "Yield farming"],
    link: "https://kamino.finance"
  }
];

const PlatformsSection = () => {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-r from-header-glow/5 to-crypto-accent/5">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            DeFi Platforms
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Access liquidity pools and yield opportunities through our partner platforms
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {platforms.map((platform, index) => (
            <Card key={index} className="glass-effect border-border/50 hover:border-header-glow/30 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-2xl">{platform.name}</CardTitle>
                <CardDescription className="text-base">{platform.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {platform.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-header-glow rounded-full"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button asChild className="w-full btn-gradient">
                  <a href={platform.link} target="_blank" rel="noopener noreferrer">
                    Visit {platform.name}
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlatformsSection;