import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { TrendingUp, ExternalLink, ArrowLeftRight, Coins, Home, Target, Zap, Activity, BarChart3 } from 'lucide-react';

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
      accentIcon: BarChart3,
      primaryStat: {
        value: `${tokenPoolData.purchased}%`,
        label: 'Pool Completion',
        trend: '+5.2% this week'
      },
      secondaryStat: {
        value: tokenPoolData.remaining,
        label: 'Available Tokens'
      },
      tertiaryStats: [
        { label: 'Participants', value: tokenPoolData.participantCount },
        { label: 'Total Pool', value: tokenPoolData.totalPool }
      ],
      ctaText: 'Buy on Kamino',
      ctaLink: 'https://app.kamino.finance',
      progressValue: tokenPoolData.purchased,
      priority: 'primary'
    },
    {
      id: 'yield-redeem',
      title: 'Redeem YIELD',
      subtitle: 'Convert to USDC',
      icon: TrendingUp,
      accentIcon: Activity,
      primaryStat: {
        value: '1:1',
        label: 'Exchange Rate',
        trend: 'Real-time parity'
      },
      secondaryStat: {
        value: 'Instant',
        label: 'Settlement Speed'
      },
      tertiaryStats: [
        { label: '24h Volume', value: '$2.4M' },
        { label: 'Liquidity', value: '$12.8M' }
      ],
      ctaText: 'Redeem on Raydium',
      ctaLink: 'https://raydium.io',
      priority: 'secondary'
    },
    {
      id: 'hash-redeem',
      title: 'Redeem HASH',
      subtitle: 'Cash Out Rewards',
      icon: Coins,
      accentIcon: Zap,
      primaryStat: {
        value: 'Market',
        label: 'Price Discovery',
        trend: '$0.0234 current'
      },
      secondaryStat: {
        value: '~$0.01',
        label: 'Network Fee'
      },
      tertiaryStats: [
        { label: 'Rewards APY', value: '18.5%' },
        { label: 'Total Staked', value: '45.2M' }
      ],
      ctaText: 'Redeem on Raydium',
      ctaLink: 'https://raydium.io',
      priority: 'tertiary'
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
          {cards.map((card, index) => {
            // Unified design approach using design system colors
            const isPrimary = card.priority === 'primary';
            const isSecondary = card.priority === 'secondary';
            
            return (
              <Card 
                key={card.id} 
                className={`relative overflow-hidden border transition-all duration-500 group ${
                  isPrimary 
                    ? 'border-header-glow/30 bg-gradient-to-br from-header-glow/5 via-background to-background hover:border-header-glow/50 hover:shadow-lg hover:shadow-header-glow/10' 
                    : 'border-border/50 bg-gradient-to-br from-muted/30 via-background to-background hover:border-header-glow/30 hover:shadow-lg hover:shadow-header-glow/5'
                } backdrop-blur-sm`}
              >
                {/* Subtle background pattern */}
                <div className="absolute inset-0 opacity-20">
                  <div className="h-full w-full bg-gradient-to-br from-transparent via-white/5 to-transparent"></div>
                </div>
                
                {/* Priority indicator */}
                <div className={`absolute top-4 right-4 w-2 h-2 rounded-full ${
                  isPrimary ? 'bg-header-glow' : 'bg-muted-foreground/40'
                } ${isPrimary ? 'animate-pulse' : ''}`}></div>

                <CardHeader className="relative pb-2">
                  <div className="flex items-center justify-between mb-3">
                    <div className={`relative p-3 rounded-xl border transition-all duration-300 group-hover:scale-105 ${
                      isPrimary 
                        ? 'bg-header-glow/10 border-header-glow/30 group-hover:bg-header-glow/15' 
                        : 'bg-muted/50 border-muted group-hover:bg-muted/70'
                    }`}>
                      <card.icon className={`w-6 h-6 ${
                        isPrimary ? 'text-header-glow' : 'text-muted-foreground'
                      }`} />
                      <div className={`absolute -top-1 -right-1 w-3 h-3 rounded-full flex items-center justify-center ${
                        isPrimary ? 'bg-header-glow/20' : 'bg-muted/60'
                      }`}>
                        <card.accentIcon className={`w-2 h-2 ${
                          isPrimary ? 'text-header-glow/80' : 'text-muted-foreground/80'
                        }`} />
                      </div>
                    </div>
                    <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                      isPrimary ? 'bg-header-glow/10 text-header-glow' : 'bg-muted/50 text-muted-foreground'
                    }`}>
                      {isPrimary ? 'Priority' : 'Available'}
                    </div>
                  </div>
                  <CardTitle className="text-xl font-bold mb-1 tracking-tight">{card.title}</CardTitle>
                  <p className="text-muted-foreground text-xs font-medium">{card.subtitle}</p>
                </CardHeader>
                
                <CardContent className="relative space-y-4">
                  {/* Primary Stat with unified styling */}
                  <div className="text-center py-4 px-3 rounded-xl bg-background/60 backdrop-blur-sm border border-border/50">
                    <div className={`text-4xl font-black mb-1 tracking-tighter ${
                      isPrimary ? 'text-gradient' : 'text-foreground'
                    }`}>
                      {card.primaryStat.value}
                    </div>
                    <div className="text-muted-foreground text-xs font-semibold mb-1">
                      {card.primaryStat.label}
                    </div>
                    <div className={`text-xs font-medium ${
                      isPrimary ? 'text-header-glow' : 'text-muted-foreground'
                    }`}>
                      {card.primaryStat.trend}
                    </div>
                  </div>

                  {/* Progress bar for primary card only */}
                  {card.progressValue && isPrimary && (
                    <div className="space-y-2">
                      <div className="relative w-full bg-muted/30 rounded-full h-3 overflow-hidden border border-border/50">
                        <div 
                          className="bg-gradient-to-r from-header-glow via-header-glow/80 to-header-glow h-3 rounded-full transition-all duration-1000 ease-out shadow-lg relative"
                          style={{ width: `${card.progressValue}%` }}
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-full"></div>
                        </div>
                      </div>
                      <div className="flex justify-between text-xs text-muted-foreground font-medium">
                        <span>0%</span>
                        <span className="text-header-glow">{card.progressValue}%</span>
                        <span>100%</span>
                      </div>
                    </div>
                  )}

                  {/* Consolidated stats */}
                  <div className="grid grid-cols-2 gap-2">
                    {card.tertiaryStats.map((stat, statIndex) => (
                      <div key={statIndex} className="p-2 rounded-lg bg-background/40 backdrop-blur-sm border border-border/30">
                        <div className="text-xs text-muted-foreground mb-1">{stat.label}</div>
                        <div className="text-sm font-bold">{stat.value}</div>
                      </div>
                    ))}
                    <div className="col-span-2 flex justify-between items-center py-2 px-3 rounded-lg bg-background/50 backdrop-blur-sm border border-border/40">
                      <span className="text-xs text-muted-foreground font-medium">{card.secondaryStat.label}</span>
                      <span className="font-bold text-sm">{card.secondaryStat.value}</span>
                    </div>
                  </div>
                  
                  {/* CTA Button with unified styling */}
                  <Button 
                    className={`w-full py-4 text-base font-bold rounded-xl transition-all duration-300 group/btn ${
                      isPrimary
                        ? 'bg-gradient-to-r from-header-glow to-header-glow/80 hover:from-header-glow/80 hover:to-header-glow text-background shadow-xl hover:shadow-2xl hover:shadow-header-glow/25 border border-header-glow/50'
                        : 'bg-gradient-to-r from-muted to-muted/80 hover:from-muted/80 hover:to-muted text-foreground shadow-lg hover:shadow-xl border border-muted/50'
                    }`}
                    asChild
                  >
                    <a 
                      href={card.ctaLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      {card.ctaText}
                      <ExternalLink className="h-4 w-4 transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-0.5" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-4 glass-effect rounded-2xl p-6 max-w-md mx-auto border border-border/50">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full bg-header-glow/10 border-2 border-background flex items-center justify-center">
                <Home className="w-4 h-4 text-header-glow" />
              </div>
              <div className="w-8 h-8 rounded-full bg-muted/40 border-2 border-background flex items-center justify-center">
                <TrendingUp className="w-4 h-4 text-muted-foreground" />
              </div>
              <div className="w-8 h-8 rounded-full bg-muted/40 border-2 border-background flex items-center justify-center">
                <Coins className="w-4 h-4 text-muted-foreground" />
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