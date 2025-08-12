import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ExternalLink, Coins } from 'lucide-react';

const buyOptions = [
  {
    token: "wYLDS",
    description: "Yield-bearing stablecoin earning up to 8% APY",
    platform: "Raydium",
    link: "https://raydium.io",
    color: "blue"
  },
  {
    token: "sHASH",
    description: "Bridged HASH token for Solana DeFi participation",
    platform: "Raydium",
    link: "https://raydium.io",
    color: "purple"
  }
];

const BuyTokensSection = () => {
  return (
    <section className="py-20 md:py-32">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Buy Tokens
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get started with wYLDS and sHASH tokens to participate in our DeFi ecosystem
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {buyOptions.map((option, index) => (
            <Card key={index} className="glass-effect border-border/50 hover:border-header-glow/30 transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  {option.token === 'wYLDS' ? (
                    <img 
                      src="/lovable-uploads/08452a7b-6782-4b0a-900e-0f0c99a4fc4e.png" 
                      alt="wYLDS Token"
                      className="w-10 h-10 rounded-lg"
                    />
                  ) : (
                    <div className={`w-10 h-10 rounded-lg ${option.color === 'blue' ? 'bg-blue-500/20' : 'bg-purple-500/20'} flex items-center justify-center`}>
                      <Coins className={`w-5 h-5 ${option.color === 'blue' ? 'text-blue-400' : 'text-purple-400'}`} />
                    </div>
                  )}
                  {option.token}
                </CardTitle>
                <CardDescription>{option.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild className="w-full btn-gradient">
                  <a href={option.link} target="_blank" rel="noopener noreferrer">
                    Buy on {option.platform}
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

export default BuyTokensSection;