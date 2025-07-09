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
      title: "Easy Investment",
      description: "Connect your wallet and start investing in premium real estate with just a few clicks."
    },
    {
      icon: PieChart,
      title: "Portfolio Tracking",
      description: "Monitor your real estate investments in real-time with detailed analytics and performance metrics."
    },
    {
      icon: FileText,
      title: "Transparent Reporting",
      description: "Access detailed property reports, financial statements, and legal documentation."
    },
    {
      icon: CreditCard,
      title: "Automated Distributions",
      description: "Receive rental income and profits automatically distributed to your wallet monthly."
    }
  ];

  const managementFeatures = [
    {
      icon: BarChart3,
      title: "Professional Management",
      description: "Expert property management teams handle all operational aspects of real estate investments."
    },
    {
      icon: Shield,
      title: "Legal Compliance",
      description: "Full regulatory compliance with SEC requirements and proper legal structuring."
    },
    {
      icon: Clock,
      title: "24/7 Liquidity",
      description: "Trade your property tokens anytime on our secondary market for instant liquidity."
    },
    {
      icon: Users,
      title: "Community Governance",
      description: "Participate in key property decisions through our decentralized governance system."
    }
  ];

  return (
    <section className="py-20 md:py-32" id="homes-features">
      <div className="container">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Built for Modern Investors
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience real estate investment like never before with our comprehensive platform designed for the digital age.
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
            Ready to Build Your Real Estate Portfolio?
          </h3>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            Join thousands of investors who are already earning passive income through tokenized real estate. Start with as little as $100.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Card className="glass-effect border-border/50 p-4 min-w-[200px]">
              <div className="text-2xl font-bold text-header-glow mb-1">$100</div>
              <div className="text-sm text-muted-foreground">Minimum Investment</div>
            </Card>
            <Card className="glass-effect border-border/50 p-4 min-w-[200px]">
              <div className="text-2xl font-bold text-header-glow mb-1">Monthly</div>
              <div className="text-sm text-muted-foreground">Income Distributions</div>
            </Card>
            <Card className="glass-effect border-border/50 p-4 min-w-[200px]">
              <div className="text-2xl font-bold text-header-glow mb-1">0%</div>
              <div className="text-sm text-muted-foreground">Management Fees</div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HOMESFeatures;