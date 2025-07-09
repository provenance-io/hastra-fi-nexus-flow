import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { TrendingUp, ExternalLink, ArrowLeftRight, Coins, Home } from 'lucide-react';

const HOMESPortfolio = () => {
  // Mock data for demonstration
  const tokenPoolData = {
    totalPool: "$50M",
    purchased: "68%",
    remaining: "$16M",
    participantCount: "2,847"
  };

  const cards = [
    {
      id: 'homes-pool',
      title: 'HOMES Token Pool',
      description: 'Secure your position in the HOMES RWA yield pool',
      icon: Home,
      stats: [
        { label: 'Total Pool Size', value: tokenPoolData.totalPool },
        { label: 'Pool Purchased', value: tokenPoolData.purchased },
        { label: 'Remaining', value: tokenPoolData.remaining },
        { label: 'Participants', value: tokenPoolData.participantCount }
      ],
      ctaText: 'Buy HOMES on Kamino',
      ctaLink: 'https://app.kamino.finance',
      progressValue: tokenPoolData.purchased,
      accentColor: 'text-header-glow'
    },
    {
      id: 'yield-redeem',
      title: 'Redeem YIELD to USDC',
      description: 'Convert your YIELD tokens to USDC on Raydium',
      icon: TrendingUp,
      stats: [
        { label: 'Current Rate', value: '1:1' },
        { label: 'Available YIELD', value: 'Connect Wallet' },
        { label: 'Est. Gas Fee', value: '~$0.01' },
        { label: 'Processing Time', value: 'Instant' }
      ],
      ctaText: 'Redeem on Raydium',
      ctaLink: 'https://raydium.io',
      accentColor: 'text-crypto-accent'
    },
    {
      id: 'hash-redeem',
      title: 'Redeem HASH to USDC',
      description: 'Convert your HASH rewards to USDC on Raydium',
      icon: Coins,
      stats: [
        { label: 'Current Rate', value: 'Market Price' },
        { label: 'Available HASH', value: 'Connect Wallet' },
        { label: 'Est. Gas Fee', value: '~$0.01' },
        { label: 'Processing Time', value: 'Instant' }
      ],
      ctaText: 'Redeem on Raydium',
      ctaLink: 'https://raydium.io',
      accentColor: 'text-green-400'
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-muted/30" id="homes-actions">
      <div className="container">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Manage Your HOMES Investment
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Purchase HOMES tokens, redeem your yields, and manage your RWA portfolio with our trusted DeFi partners.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card) => (
            <Card key={card.id} className="glass-effect border-border/50 hover:border-header-glow/30 transition-all duration-300 group">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className={`p-2 rounded-lg bg-background/50 ${card.accentColor}`}>
                    <card.icon className="w-6 h-6" />
                  </div>
                  <CardTitle className="text-xl group-hover:text-header-glow transition-colors">
                    {card.title}
                  </CardTitle>
                </div>
                <p className="text-muted-foreground text-sm">{card.description}</p>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-3 text-sm">
                  {card.stats.map((stat, index) => (
                    <div key={index} className="space-y-1">
                      <div className="text-muted-foreground">{stat.label}</div>
                      <div className="font-medium">{stat.value}</div>
                    </div>
                  ))}
                </div>
                
                {card.progressValue && (
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Pool Status</span>
                      <span className="font-medium">{card.progressValue}</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div 
                        className="bg-header-glow h-2 rounded-full transition-all duration-500"
                        style={{ width: card.progressValue }}
                      ></div>
                    </div>
                  </div>
                )}
                
                <Button 
                  className="w-full mt-6 group/btn"
                  asChild
                >
                  <a 
                    href={card.ctaLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center"
                  >
                    {card.ctaText}
                    <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="glass-effect rounded-xl p-6 max-w-2xl mx-auto">
            <h3 className="text-lg font-semibold mb-2 text-gradient">Seamless DeFi Integration</h3>
            <p className="text-muted-foreground">
              All transactions are processed through our trusted partners Kamino and Raydium, ensuring secure and efficient token operations on Solana.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HOMESPortfolio;