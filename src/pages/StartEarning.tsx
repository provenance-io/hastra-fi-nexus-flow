import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ArrowRight, ExternalLink, BookOpen, DollarSign, Coins, TrendingUp, Users, Info } from 'lucide-react';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import AccessibilityFeatures from '@/components/AccessibilityFeatures';
import PerformanceOptimizer from '@/components/PerformanceOptimizer';

const StartEarning = () => {
  const buyOptions = [
    {
      token: "YIELD",
      description: "Yield-bearing stablecoin earning up to 8% APY",
      platform: "Raydium",
      link: "https://raydium.io",
      color: "blue"
    },
    {
      token: "sHASH",
      description: "Bridged HASH token for Solana DeFi participation",
      platform: "Raydium",
      link: "https://raydium.io",
      color: "purple"
    }
  ];

  const platforms = [
    {
      name: "Raydium",
      description: "Automated Market Maker for liquidity pools and swaps",
      features: ["YIELD/USDC Pool", "HASH/USDC Pool", "Low fees", "High liquidity"],
      link: "https://raydium.io"
    },
    {
      name: "Kamino",
      description: "Lending and borrowing protocol with yield optimization",
      features: ["Lending pools", "Automated strategies", "HOMES participation", "Yield farming"],
      link: "https://kamino.finance"
    }
  ];

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

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <AccessibilityFeatures />
      <PerformanceOptimizer />
      <Header />
      <main id="main-content" className="flex-grow" role="main">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-background via-blue-900/10 to-purple-900/10 backdrop-blur-sm"></div>
          <div className="container relative text-center animate-fade-in">
            <div className="inline-block bg-blue-700/50 border border-blue-600 rounded-full px-3 py-1 text-sm mb-4 animate-pulse-light">
              DeFi Made Simple
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
              Start Earning
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground">
              Access premium DeFi opportunities with YIELD and sHASH. Buy tokens, provide liquidity, and earn consistent returns through our integrated ecosystem.
            </p>
          </div>
        </section>

        {/* Buy Tokens Section */}
        <section className="py-20 md:py-32">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Buy Tokens
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Get started with YIELD and sHASH tokens to participate in our DeFi ecosystem
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {buyOptions.map((option, index) => (
                <Card key={index} className="glass-effect border-border/50 hover:border-header-glow/30 transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-lg ${option.color === 'blue' ? 'bg-blue-500/20' : 'bg-purple-500/20'} flex items-center justify-center`}>
                        <Coins className={`w-5 h-5 ${option.color === 'blue' ? 'text-blue-400' : 'text-purple-400'}`} />
                      </div>
                      {option.token}
                    </CardTitle>
                    <CardDescription>{option.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button asChild className="w-full btn-gradient">
                      <a href={option.link} target="_blank" rel="noopener noreferrer">
                        Buy on {option.platform}
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Platforms Section */}
        <section className="py-20 md:py-32 bg-gradient-to-r from-header-glow/5 to-crypto-accent/5">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                DeFi Platforms
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Access liquidity pools and yield opportunities through our partner platforms
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {platforms.map((platform, index) => (
                <Card key={index} className="glass-effect border-border/50 hover:border-header-glow/30 transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-2xl">{platform.name}</CardTitle>
                    <CardDescription className="text-base">{platform.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-6">
                      {platform.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-header-glow rounded-full"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button asChild className="w-full btn-gradient">
                      <a href={platform.link} target="_blank" rel="noopener noreferrer">
                        Visit {platform.name}
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* How-to Guides */}
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
      </main>
      <Footer />
    </div>
  );
};

export default StartEarning;