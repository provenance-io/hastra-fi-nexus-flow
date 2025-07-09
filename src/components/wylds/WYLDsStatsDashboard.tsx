
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const stats = [
  {
    title: 'Total YIELD in Circulation',
    value: '$150.3M',
    description: 'The total value of YIELD tokens currently in circulation.',
  },
  {
    title: 'Current APY',
    value: '4.75%',
    description: 'The current annual percentage yield for holding YIELD.',
  },
  {
    title: 'Total Yield Earned',
    value: '$1.2M',
    description: 'Cumulative yield distributed to all YIELD holders.',
  },
  {
    title: '24h Volume',
    value: '$5.6M',
    description: 'The total trading volume of YIELD in the last 24 hours.',
  },
];

const WYLDsStatsDashboard = () => {
  return (
    <section className="py-24 md:py-32 relative">
      {/* Premium background - matching homepage */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-header-glow/5 to-crypto-accent/5"></div>
      
      <div className="container relative">
        <div className="text-center mb-16">
          <div className="glass-premium rounded-full px-6 py-3 text-sm mb-8 inline-block">
            <span className="text-premium-gradient font-semibold">Real-Time Analytics</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-premium-gradient mb-6">Live Stats</h2>
          <p className="text-xl text-platinum/80 max-w-2xl mx-auto">
            Track YIELD performance with real-time data and transparent metrics
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <Card 
              key={stat.title} 
              className="card-premium card-premium-hover morphing-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-4">
                <CardTitle className="text-sm font-medium text-platinum/70">{stat.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl md:text-4xl font-bold text-premium-gradient mb-3 animate-pulse-light">
                  {stat.value}
                </div>
                <p className="text-sm text-platinum/60 leading-relaxed">{stat.description}</p>
                
                {/* Live indicator */}
                <div className="flex items-center gap-2 mt-4">
                  <div className="w-2 h-2 bg-electric-blue rounded-full animate-pulse"></div>
                  <span className="text-xs text-platinum/50">Live</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional metrics */}
        <div className="mt-16 text-center">
          <div className="glass-premium rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-premium-gradient mb-6">Additional Metrics</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="text-2xl font-bold text-electric-blue mb-2">12.4k+</div>
                <div className="text-platinum/70">Active Holders</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-neon-cyan mb-2">95.8%</div>
                <div className="text-platinum/70">Success Rate</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-premium-gold mb-2">$1.2M</div>
                <div className="text-platinum/70">Total Yield Distributed</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WYLDsStatsDashboard;
