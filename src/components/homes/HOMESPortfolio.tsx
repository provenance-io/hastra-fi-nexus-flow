import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { TrendingUp, ExternalLink, ArrowLeftRight, Coins, Home, Target } from 'lucide-react';

const HOMESPortfolio = () => {
  // Mock data for demonstration
  const tokenPoolData = {
    totalPool: "$50M",
    purchased: 68,
    remaining: "$16M",
    participantCount: "2,847"
  };

  const cards = [
    {
      id: 'homes-pool',
      title: 'HOMES Token Pool',
      subtitle: 'Join the RWA Revolution',
      icon: Home,
      primaryStat: {
        value: `${tokenPoolData.purchased}%`,
        label: 'Pool Filled'
      },
      secondaryStat: {
        value: tokenPoolData.remaining,
        label: 'Still Available'
      },
      ctaText: 'Buy on Kamino',
      ctaLink: 'https://app.kamino.finance',
      progressValue: tokenPoolData.purchased,
      bgGradient: 'from-orange-500/10 via-amber-500/5 to-yellow-500/10',
      iconBg: 'bg-orange-500/20 text-orange-400',
      buttonStyle: 'bg-orange-500 hover:bg-orange-600 text-white'
    },
    {
      id: 'yield-redeem',
      title: 'Redeem YIELD',
      subtitle: 'Convert to USDC',
      icon: TrendingUp,
      primaryStat: {
        value: '1:1',
        label: 'Exchange Rate'
      },
      secondaryStat: {
        value: 'Instant',
        label: 'Settlement'
      },
      ctaText: 'Redeem on Raydium',
      ctaLink: 'https://raydium.io',
      bgGradient: 'from-blue-500/10 via-cyan-500/5 to-blue-500/10',
      iconBg: 'bg-blue-500/20 text-blue-400',
      buttonStyle: 'bg-blue-500 hover:bg-blue-600 text-white'
    },
    {
      id: 'hash-redeem',
      title: 'Redeem HASH',
      subtitle: 'Cash Out Rewards',
      icon: Coins,
      primaryStat: {
        value: 'Market',
        label: 'Price Rate'
      },
      secondaryStat: {
        value: '~$0.01',
        label: 'Gas Fee'
      },
      ctaText: 'Redeem on Raydium',
      ctaLink: 'https://raydium.io',
      bgGradient: 'from-green-500/10 via-emerald-500/5 to-green-500/10',
      iconBg: 'bg-green-500/20 text-green-400',
      buttonStyle: 'bg-green-500 hover:bg-green-600 text-white'
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
            Purchase tokens, redeem yields, and manage your portfolio seamlessly.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card) => (
            <Card key={card.id} className={`relative overflow-hidden border-0 bg-gradient-to-br ${card.bgGradient} backdrop-blur-sm hover:shadow-xl transition-all duration-300 group`}>
              {/* Background Pattern */}
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiIgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIiBmaWxsPSJub25lIiBzdHJva2U9InJnYmEoMTAsIDIwLCA0MCwwLjAzKSI+PGQgcGF0aD0iTTAtMSAwIDEgTS0xIDAgMSAwIj48L2Q+PC9zdmc+')] opacity-50"></div>
              
              <CardHeader className="relative pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-xl ${card.iconBg} group-hover:scale-110 transition-transform`}>
                    <card.icon className="w-6 h-6" />
                  </div>
                  <Target className="w-5 h-5 text-muted-foreground/50" />
                </div>
                <CardTitle className="text-2xl font-bold mb-1">{card.title}</CardTitle>
                <p className="text-muted-foreground text-sm">{card.subtitle}</p>
              </CardHeader>
              
              <CardContent className="relative space-y-6">
                {/* Primary Stat - Large Display */}
                <div className="text-center py-4">
                  <div className="text-4xl font-black text-gradient mb-1">
                    {card.primaryStat.value}
                  </div>
                  <div className="text-muted-foreground text-sm">
                    {card.primaryStat.label}
                  </div>
                </div>

                {/* Progress Bar for HOMES Pool */}
                {card.progressValue && (
                  <div className="space-y-2">
                    <div className="w-full bg-muted/50 rounded-full h-3 overflow-hidden">
                      <div 
                        className="bg-gradient-to-r from-orange-400 to-amber-400 h-3 rounded-full transition-all duration-1000 ease-out shadow-sm"
                        style={{ width: `${card.progressValue}%` }}
                      ></div>
                    </div>
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>0%</span>
                      <span>100%</span>
                    </div>
                  </div>
                )}

                {/* Secondary Stat */}
                <div className="flex justify-between items-center py-3 px-4 rounded-lg bg-background/20 backdrop-blur-sm">
                  <span className="text-sm text-muted-foreground">{card.secondaryStat.label}</span>
                  <span className="font-semibold">{card.secondaryStat.value}</span>
                </div>
                
                {/* CTA Button */}
                <Button 
                  className={`w-full py-6 text-lg font-bold rounded-xl ${card.buttonStyle} shadow-lg hover:shadow-xl transition-all duration-300 group/btn`}
                  asChild
                >
                  <a 
                    href={card.ctaLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3"
                  >
                    {card.ctaText}
                    <ExternalLink className="h-5 w-5 transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-0.5" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-4 glass-effect rounded-2xl p-6 max-w-md mx-auto">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full bg-orange-500/20 border-2 border-background flex items-center justify-center">
                <Home className="w-4 h-4 text-orange-400" />
              </div>
              <div className="w-8 h-8 rounded-full bg-blue-500/20 border-2 border-background flex items-center justify-center">
                <TrendingUp className="w-4 h-4 text-blue-400" />
              </div>
              <div className="w-8 h-8 rounded-full bg-green-500/20 border-2 border-background flex items-center justify-center">
                <Coins className="w-4 h-4 text-green-400" />
              </div>
            </div>
            <div className="text-left">
              <div className="font-semibold text-sm">Powered by Solana DeFi</div>
              <div className="text-xs text-muted-foreground">Kamino & Raydium</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HOMESPortfolio;