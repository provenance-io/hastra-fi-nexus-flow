import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Wallet, 
  PieChart, 
  FileText, 
  CreditCard, 
  BarChart3, 
  Shield,
  Clock,
  Users
} from 'lucide-react';

const HOMESFeatures = () => {
  const investmentFeatures = [
    {
      icon: Wallet,
      title: "Easy Access",
      description: "Connect your wallet and start earning competitive yields in RWA pools with just a few clicks."
    },
    {
      icon: PieChart,
      title: "Yield Tracking",
      description: "Monitor your yield positions in real-time with detailed analytics and performance metrics."
    },
    {
      icon: FileText,
      title: "Transparent Operations",
      description: "Access detailed pool reports, yield distributions, and underlying asset documentation."
    },
    {
      icon: CreditCard,
      title: "Automated Rewards",
      description: "Receive yield distributions automatically - choose between yield tokens or HASH token rewards."
    }
  ];

  const managementFeatures = [
    {
      icon: BarChart3,
      title: "Professional Operations",
      description: "Expert fund management teams handle all operational aspects of yield pool optimization."
    },
    {
      icon: Shield,
      title: "Risk Management",
      description: "Rigorous risk assessment and management protocols ensure sustainable yield generation."
    },
    {
      icon: Clock,
      title: "Flexible Liquidity",
      description: "Access your funds when needed through our liquidity mechanisms and secondary markets."
    },
    {
      icon: Users,
      title: "Community Driven",
      description: "Participate in pool governance and strategic decisions through decentralized voting."
    }
  ];

  return (
    <section className="py-20 md:py-32" id="homes-features">
      <div className="container">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Built for DeFi Natives
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience yield farming like never before with our comprehensive RWA platform designed for the Solana ecosystem.
          </p>
        </div>

        <Tabs defaultValue="investment" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-12 max-w-md mx-auto">
            <TabsTrigger value="investment" className="text-sm">Investment</TabsTrigger>
            <TabsTrigger value="management" className="text-sm">Management</TabsTrigger>
          </TabsList>
          
          <TabsContent value="investment" className="space-y-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {investmentFeatures.map((feature, index) => (
                <Card key={index} className="glass-effect border-border/50 hover:border-header-glow/30 transition-all duration-300 group">
                  <CardContent className="p-6 text-center">
                    <div className="mb-4 inline-flex items-center justify-center w-12 h-12 bg-header-glow/10 rounded-lg group-hover:bg-header-glow/20 transition-colors">
                      <feature.icon className="w-6 h-6 text-header-glow" />
                    </div>
                    <h3 className="font-semibold mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="management" className="space-y-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {managementFeatures.map((feature, index) => (
                <Card key={index} className="glass-effect border-border/50 hover:border-header-glow/30 transition-all duration-300 group">
                  <CardContent className="p-6 text-center">
                    <div className="mb-4 inline-flex items-center justify-center w-12 h-12 bg-header-glow/10 rounded-lg group-hover:bg-header-glow/20 transition-colors">
                      <feature.icon className="w-6 h-6 text-header-glow" />
                    </div>
                    <h3 className="font-semibold mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <div className="mt-16 bg-gradient-to-r from-amber-500/10 to-orange-500/10 rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Start (L)earning?
          </h3>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            Join yield-seeking capital providers who are already earning competitive returns through our RWA pools. Be part of the Solana DeFi revolution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Card className="glass-effect border-border/50 p-4 min-w-[200px]">
              <div className="text-2xl font-bold text-header-glow mb-1">7.5%</div>
              <div className="text-sm text-muted-foreground">Target APY</div>
            </Card>
            <Card className="glass-effect border-border/50 p-4 min-w-[200px]">
              <div className="text-2xl font-bold text-header-glow mb-1">Dual</div>
              <div className="text-sm text-muted-foreground">Token Options</div>
            </Card>
            <Card className="glass-effect border-border/50 p-4 min-w-[200px]">
              <div className="text-2xl font-bold text-header-glow mb-1">Solana</div>
              <div className="text-sm text-muted-foreground">Fast & Low Cost</div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HOMESFeatures;