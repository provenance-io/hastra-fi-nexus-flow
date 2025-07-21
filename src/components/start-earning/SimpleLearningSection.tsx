
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BookOpen, TrendingUp, Target, ExternalLink } from 'lucide-react';

const SimpleLearningSection = () => {
  const learningAreas = [
    {
      icon: BookOpen,
      title: "DeFi Basics",
      description: "Learn the fundamentals of decentralized finance, from wallets to yield farming.",
      features: [
        "Wallet setup and security",
        "Understanding APY and yields",
        "DeFi vs traditional finance",
        "Risk management basics"
      ],
      action: "Start Learning",
      href: "#"
    },
    {
      icon: TrendingUp,
      title: "Platform Guides",
      description: "Step-by-step guides for using YIELD and HOMES tokens effectively.",
      features: [
        "How to buy YIELD tokens",
        "HOMES token explained",
        "Platform navigation",
        "Transaction walkthroughs"
      ],
      action: "View Guides",
      href: "#"
    },
    {
      icon: Target,
      title: "Advanced Strategies",
      description: "Optimize your returns with advanced DeFi strategies and portfolio management.",
      features: [
        "Portfolio diversification",
        "Yield optimization",
        "Risk assessment tools",
        "Market analysis basics"
      ],
      action: "Learn Advanced",
      href: "#"
    }
  ];

  return (
    <section id="learning" data-section="learning" className="py-20 md:py-32 relative">
      <div className="container">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-6">
            <span className="text-gradient">Learning Resources</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Everything you need to master DeFi and start earning with confidence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {learningAreas.map((area, index) => {
            const IconComponent = area.icon;
            return (
              <Card 
                key={area.title}
                className="group relative overflow-hidden glass-effect border-header-glow/20 hover:border-header-glow/40 transition-all duration-500 hover:shadow-glow animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="text-center pb-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-header-glow/20 to-crypto-accent/20 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-header-glow" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-foreground group-hover:text-header-glow transition-colors duration-300">
                    {area.title}
                  </CardTitle>
                  <CardDescription className="text-base text-muted-foreground leading-relaxed">
                    {area.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {area.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-header-glow mt-2 flex-shrink-0"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button 
                    variant="secondary" 
                    className="w-full group/btn"
                    asChild
                  >
                    <a href={area.href} className="flex items-center justify-center">
                      {area.action}
                      <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Quick Start CTA */}
        <div className="text-center mt-16 animate-fade-in">
          <p className="text-lg text-muted-foreground mb-6">
            Ready to put your knowledge into practice?
          </p>
          <Button 
            size="lg" 
            variant="secondary"
            className="min-w-[200px] group"
            asChild
          >
            <a href="/earn">
              Start Earning Now
              <TrendingUp className="ml-2 h-5 w-5 transition-transform group-hover:scale-110" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SimpleLearningSection;
