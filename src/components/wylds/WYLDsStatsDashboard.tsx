
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const stats = [
  {
    title: 'Total wYLDS in Circulation',
    value: '$150.3M',
    description: 'The total value of wYLDS tokens currently in circulation.',
  },
  {
    title: 'Current APY',
    value: '4.75%',
    description: 'The current annual percentage yield for holding wYLDS.',
  },
  {
    title: 'Total Yield Earned',
    value: '$1.2M',
    description: 'Cumulative yield distributed to all wYLDS holders.',
  },
  {
    title: '24h Volume',
    value: '$5.6M',
    description: 'The total trading volume of wYLDS in the last 24 hours.',
  },
];

const WYLDsStatsDashboard = () => {
  return (
    <section className="py-20 md:py-24 border-t border-border/40">
      <div className="container">
        <h2 className="text-3xl font-bold tracking-tight text-center mb-12">Live Stats</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <Card key={stat.title} className="bg-secondary/30 border-border/50">
              <CardHeader>
                <CardTitle className="text-sm font-medium text-muted-foreground">{stat.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">{stat.value}</div>
                <p className="text-xs text-muted-foreground mt-2">{stat.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WYLDsStatsDashboard;
