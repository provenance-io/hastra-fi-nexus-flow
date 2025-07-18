import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, TrendingDown, Minus, Info, PieChart, Users, Home, Shield } from 'lucide-react';
import { poolOverview, borrowerProfile, lienDistribution, riskMetrics } from '@/data/poolCompositionData';

const HOMESPoolComposition = () => {
  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up': return <TrendingUp className="w-3 h-3 text-green-400" />;
      case 'down': return <TrendingDown className="w-3 h-3 text-red-400" />;
      default: return <Minus className="w-3 h-3 text-muted-foreground" />;
    }
  };

  const getFormatIcon = (format: string) => {
    switch (format) {
      case 'currency': return '$';
      case 'percentage': return '%';
      case 'years': return 'Y';
      case 'score': return '★';
      default: return '';
    }
  };

  return (
    <section className="py-20 md:py-32" id="pool-composition">
      <div className="container">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Pool Composition
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transparent insight into the underlying assets securing your investment.
          </p>
        </div>

        {/* Risk Overview Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {riskMetrics.map((metric, index) => (
            <Card key={index} className="relative overflow-hidden border-border/50 bg-gradient-to-br from-muted/30 via-background to-background hover:border-header-glow/30 transition-all duration-300 group">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <div className="p-2 rounded-lg bg-header-glow/10 border border-header-glow/20">
                    <Shield className="w-4 h-4 text-header-glow" />
                  </div>
                  {getTrendIcon(metric.trend)}
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold mb-1">{metric.value}</div>
                <div className="text-sm font-medium text-muted-foreground mb-2">{metric.label}</div>
                <div className="text-xs text-muted-foreground/80">{metric.description}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Lien Distribution */}
        <Card className="mb-12 border-border/50 bg-gradient-to-br from-muted/20 via-background to-background">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <PieChart className="w-5 h-5 text-header-glow" />
              Lien Distribution
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {lienDistribution.map((lien, index) => (
                <div key={index} className="flex items-center justify-between p-4 rounded-xl bg-background/60 border border-border/30">
                  <div className="flex items-center gap-3">
                    <div className={`w-3 h-3 rounded-full bg-${lien.color}`}></div>
                    <span className="font-medium">{lien.type}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex-1 bg-muted/30 rounded-full h-2 w-32">
                      <div 
                        className={`bg-${lien.color} h-2 rounded-full transition-all duration-1000`}
                        style={{ width: `${lien.percentage}%` }}
                      ></div>
                    </div>
                    <span className="text-lg font-bold min-w-[60px] text-right">{lien.percentage}%</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Borrower Profile Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {borrowerProfile.map((category, categoryIndex) => (
            <Card key={categoryIndex} className="border-border/50 bg-gradient-to-br from-muted/20 via-background to-background">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-2 text-lg">
                  {categoryIndex === 0 && <Users className="w-5 h-5 text-header-glow" />}
                  {categoryIndex === 1 && <Home className="w-5 h-5 text-header-glow" />}
                  {categoryIndex === 2 && <Info className="w-5 h-5 text-header-glow" />}
                  {category.category}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {category.metrics.map((metric, metricIndex) => (
                  <div key={metricIndex} className="flex items-center justify-between p-3 rounded-lg bg-background/40 border border-border/20">
                    <div className="text-sm text-muted-foreground font-medium">
                      {metric.label}
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="font-bold text-foreground">{metric.value}</span>
                      {metric.format !== 'currency' && (
                        <span className="text-xs text-muted-foreground">
                          {getFormatIcon(metric.format)}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* About Figure Lending */}
        <Card className="border-border/50 bg-background/60 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Info className="w-5 h-5 text-header-glow" />
              About Figure Lending
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="p-6 rounded-xl bg-background/40 border border-border/20">
              <p className="text-muted-foreground leading-relaxed">
                {poolOverview.description}
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default HOMESPoolComposition;