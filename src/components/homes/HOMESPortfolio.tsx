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
      glassGradient: 'from-orange-500/15 via-amber-500/10 to-yellow-500/8',
      accentColor: 'orange',
      borderGlow: 'shadow-orange-500/20',
      pulseColor: 'bg-orange-400'
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
      glassGradient: 'from-blue-500/15 via-cyan-500/10 to-blue-500/8',
      accentColor: 'blue',
      borderGlow: 'shadow-blue-500/20',
      pulseColor: 'bg-blue-400'
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
      glassGradient: 'from-green-500/15 via-emerald-500/10 to-green-500/8',
      accentColor: 'green',
      borderGlow: 'shadow-green-500/20',
      pulseColor: 'bg-green-400'
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
            <Card key={card.id} className={`relative overflow-hidden border border-white/10 bg-gradient-to-br ${card.glassGradient} backdrop-blur-xl hover:${card.borderGlow} hover:border-white/20 transition-all duration-500 group`}>
              {/* Animated Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Neural Network Pattern */}
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGRlZnM+CjxwYXR0ZXJuIGlkPSJncmlkIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPgo8cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDIpIiBzdHJva2Utd2lkdGg9IjEiLz4KPC9wYXR0ZXJuPgo8L2RlZnM+CjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiIC8+Cjwvc3ZnPgo=')] opacity-30"></div>
              
              {/* Glow Orb */}
              <div className={`absolute top-4 right-4 w-2 h-2 ${card.pulseColor} rounded-full opacity-60 animate-pulse`}></div>

              <CardHeader className="relative pb-4">
                <div className="flex items-center justify-between mb-6">
                  <div className={`relative p-4 rounded-2xl bg-${card.accentColor}-500/10 border border-${card.accentColor}-500/20 group-hover:scale-110 group-hover:bg-${card.accentColor}-500/15 transition-all duration-300`}>
                    <card.icon className={`w-7 h-7 text-${card.accentColor}-400`} />
                    <div className={`absolute -top-1 -right-1 w-4 h-4 bg-${card.accentColor}-500/20 rounded-full flex items-center justify-center`}>
                      <card.accentIcon className={`w-2.5 h-2.5 text-${card.accentColor}-300`} />
                    </div>
                  </div>
                  <div className="flex flex-col items-end space-y-1">
                    <div className="h-1 w-8 bg-gradient-to-r from-transparent to-white/20 rounded-full"></div>
                    <div className="h-1 w-6 bg-gradient-to-r from-transparent to-white/15 rounded-full"></div>
                    <div className="h-1 w-4 bg-gradient-to-r from-transparent to-white/10 rounded-full"></div>
                  </div>
                </div>
                <CardTitle className="text-2xl font-bold mb-2 tracking-tight">{card.title}</CardTitle>
                <p className="text-muted-foreground/80 text-sm font-medium">{card.subtitle}</p>
              </CardHeader>
              
              <CardContent className="relative space-y-6">
                {/* Primary Stat with Trend */}
                <div className="text-center py-6 px-4 rounded-2xl bg-background/10 backdrop-blur-sm border border-white/5">
                  <div className="text-5xl font-black text-gradient mb-2 tracking-tighter">
                    {card.primaryStat.value}
                  </div>
                  <div className="text-muted-foreground/90 text-sm font-semibold mb-1">
                    {card.primaryStat.label}
                  </div>
                  <div className={`text-xs text-${card.accentColor}-400 font-medium`}>
                    {card.primaryStat.trend}
                  </div>
                </div>

                {/* Enhanced Progress Bar for HOMES Pool */}
                {card.progressValue && (
                  <div className="space-y-3">
                    <div className="relative w-full bg-background/20 rounded-full h-4 overflow-hidden border border-white/10">
                      <div 
                        className={`bg-gradient-to-r from-${card.accentColor}-400 via-${card.accentColor}-300 to-${card.accentColor}-400 h-4 rounded-full transition-all duration-1000 ease-out shadow-lg relative`}
                        style={{ width: `${card.progressValue}%` }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-full"></div>
                      </div>
                    </div>
                    <div className="flex justify-between text-xs text-muted-foreground/80 font-medium">
                      <span>0%</span>
                      <span className={`text-${card.accentColor}-400`}>{card.progressValue}% Complete</span>
                      <span>100%</span>
                    </div>
                  </div>
                )}

                {/* Tertiary Stats Grid */}
                <div className="grid grid-cols-2 gap-3">
                  {card.tertiaryStats.map((stat, index) => (
                    <div key={index} className="p-3 rounded-xl bg-background/10 backdrop-blur-sm border border-white/5">
                      <div className="text-xs text-muted-foreground/80 mb-1">{stat.label}</div>
                      <div className="text-lg font-bold">{stat.value}</div>
                    </div>
                  ))}
                </div>

                {/* Secondary Stat Enhanced */}
                <div className="flex justify-between items-center py-4 px-5 rounded-xl bg-background/15 backdrop-blur-sm border border-white/10">
                  <span className="text-sm text-muted-foreground/90 font-medium">{card.secondaryStat.label}</span>
                  <span className="font-bold text-lg">{card.secondaryStat.value}</span>
                </div>
                
                {/* Enhanced CTA Button */}
                <Button 
                  className={`w-full py-6 text-lg font-bold rounded-2xl bg-gradient-to-r from-${card.accentColor}-500 to-${card.accentColor}-400 hover:from-${card.accentColor}-400 hover:to-${card.accentColor}-300 text-white shadow-xl hover:shadow-2xl hover:shadow-${card.accentColor}-500/25 border border-${card.accentColor}-400/50 transition-all duration-300 group/btn`}
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