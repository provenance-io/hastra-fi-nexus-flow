import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ArrowRight, TrendingUp, Users } from 'lucide-react';

const guides = [
  {
    title: "How to swap HASH for SOL-HASH through Figure Markets",
    description: "Step-by-step guide to bridge HASH tokens from Provenance to Solana",
    icon: ArrowRight,
    content: [
      "Connect your Provenance wallet to Figure Markets",
      "Navigate to the bridge section",
      "Select HASH as source token and SOL-HASH as destination",
      "Enter amount and confirm transaction",
      "Wait for bridge confirmation (usually 5-10 minutes)",
      "Your SOL-HASH will appear in your Solana wallet"
    ]
  },
  {
    title: "Understanding Kamino Lending Pools",
    description: "Learn how to participate in Kamino's lending ecosystem",
    icon: TrendingUp,
    content: [
      "Kamino offers automated lending strategies for maximum yield",
      "Deposit tokens into lending pools to earn interest",
      "Borrow against your deposits for leveraged positions",
      "Use Kamino's automated strategies for optimized returns",
      "Monitor your positions through the Kamino dashboard",
      "Withdraw earnings and principal at any time"
    ]
  },
  {
    title: "Understanding Raydium Liquidity Pools",
    description: "Master liquidity provision on Raydium for consistent yields",
    icon: Users,
    content: [
      "Raydium is Solana's leading automated market maker (AMM)",
      "Provide liquidity to earn trading fees from swaps",
      "Choose between concentrated or traditional liquidity",
      "Monitor impermanent loss and adjust positions accordingly",
      "Claim trading fees and additional reward tokens",
      "Use Raydium's analytics to optimize your strategies"
    ]
  }
];

const GuidesSection = () => {
  return (
    <section className="py-20 md:py-32">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            How-to Guides
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Step-by-step guides to help you navigate the DeFi ecosystem successfully
          </p>
        </div>

        <Tabs defaultValue="0" className="max-w-6xl mx-auto">
          <TabsList className="grid w-full grid-cols-3 glass-effect">
            {guides.map((guide, index) => (
              <TabsTrigger key={index} value={index.toString()} className="text-sm">
                <guide.icon className="w-4 h-4 mr-2" />
                {guide.title.split(' ')[0]} {guide.title.split(' ')[1]}
              </TabsTrigger>
            ))}
          </TabsList>
          
          {guides.map((guide, index) => (
            <TabsContent key={index} value={index.toString()}>
              <Card className="glass-effect border-border/50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-2xl">
                    <div className="w-12 h-12 rounded-lg bg-header-glow/10 flex items-center justify-center">
                      <guide.icon className="w-6 h-6 text-header-glow" />
                    </div>
                    {guide.title}
                  </CardTitle>
                  <CardDescription className="text-base">{guide.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ol className="space-y-3">
                    {guide.content.map((step, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-header-glow/20 flex items-center justify-center text-sm font-medium text-header-glow mt-0.5">
                          {i + 1}
                        </div>
                        <span className="text-muted-foreground">{step}</span>
                      </li>
                    ))}
                  </ol>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default GuidesSection;