import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Coins, Play, ChevronRight } from 'lucide-react';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import { useState } from 'react';

const platforms = [
  {
    name: "Kamino Finance",
    description: "Lending and borrowing with automated strategies",
    logo: "/lovable-uploads/9edb1ae1-8f98-4dcd-90f7-4f7e3135521e.png",
    link: "https://app.kamino.finance",
    apy: "Up to 8%",
    color: "blue"
  },
  {
    name: "Raydium",
    description: "AMM and liquidity farming on Solana",
    logo: "/lovable-uploads/30e0a19d-182e-4457-b5e0-58c467109e2f.png", 
    link: "https://raydium.io",
    apy: "Varies",
    color: "purple"
  }
];

const quickGuides = [
  {
    title: "DeFi Fundamentals",
    description: "Your first $100 in DeFi",
    duration: "15 min",
    level: "Beginner"
  },
  {
    title: "Token Swapping",
    description: "How to safely exchange tokens",
    duration: "8 min",
    level: "Beginner"
  },
  {
    title: "Yield Strategies",
    description: "Maximizing your returns",
    duration: "12 min",
    level: "Intermediate"
  }
];

const QuickActionsSection = () => {
  const [showAllPlatforms, setShowAllPlatforms] = useState(false);
  const [showAllGuides, setShowAllGuides] = useState(false);

  return (
    <section className="py-20 md:py-32">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Buy Tokens Quick Actions */}
          <div>
            <div className="mb-8">
              <Badge className="mb-4 bg-crypto-accent/20 border-crypto-accent/30 text-crypto-accent">
                <Coins className="w-3 h-3 mr-2" />
                Buy & Earn
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Start Earning Today
              </h2>
              <p className="text-muted-foreground text-lg">
                Get YIELD and sHASH tokens on these trusted platforms
              </p>
            </div>

            <div className="space-y-4">
              {platforms.slice(0, showAllPlatforms ? platforms.length : 2).map((platform, index) => (
                <Card key={index} className="glass-effect border-border/50 hover:border-crypto-accent/30 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <img 
                          src={platform.logo} 
                          alt={platform.name}
                          className="w-10 h-10 rounded-full"
                        />
                        <div>
                          <h3 className="font-semibold">{platform.name}</h3>
                          <p className="text-sm text-muted-foreground">{platform.description}</p>
                          <Badge variant="outline" className="mt-1 text-xs">
                            {platform.apy} APY
                          </Badge>
                        </div>
                      </div>
                      <Button asChild size="sm" className="btn-gradient">
                        <a href={platform.link} target="_blank" rel="noopener noreferrer">
                          Trade
                          <ExternalLink className="ml-2 h-3 w-3" />
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}

              <Collapsible open={showAllPlatforms} onOpenChange={setShowAllPlatforms}>
                <CollapsibleTrigger asChild>
                  <Button variant="ghost" className="w-full text-crypto-accent hover:bg-crypto-accent/10">
                    {showAllPlatforms ? 'Show Less' : 'View All Platforms'}
                    <ChevronRight className={`ml-2 h-4 w-4 transition-transform ${showAllPlatforms ? 'rotate-90' : ''}`} />
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  {/* Additional platforms would go here */}
                </CollapsibleContent>
              </Collapsible>
            </div>
          </div>

          {/* Learn Quick Actions */}
          <div>
            <div className="mb-8">
              <Badge className="mb-4 bg-header-glow/20 border-header-glow/30 text-header-glow">
                <Play className="w-3 h-3 mr-2" />
                Learn & Grow
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Essential Knowledge
              </h2>
              <p className="text-muted-foreground text-lg">
                Quick guides to get you started safely
              </p>
            </div>

            <div className="space-y-4">
              {quickGuides.slice(0, showAllGuides ? quickGuides.length : 3).map((guide, index) => (
                <Card key={index} className="glass-effect border-border/50 hover:border-header-glow/30 transition-all duration-300 cursor-pointer group">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="font-semibold">{guide.title}</h3>
                          <Badge variant="outline" className="text-xs">
                            {guide.level}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mb-1">{guide.description}</p>
                        <p className="text-xs text-muted-foreground">{guide.duration}</p>
                      </div>
                      <div className="w-12 h-12 bg-header-glow/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Play className="w-5 h-5 text-header-glow ml-0.5" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}

              <Collapsible open={showAllGuides} onOpenChange={setShowAllGuides}>
                <CollapsibleTrigger asChild>
                  <Button variant="ghost" className="w-full text-header-glow hover:bg-header-glow/10">
                    {showAllGuides ? 'Show Less' : 'View All Guides'}
                    <ChevronRight className={`ml-2 h-4 w-4 transition-transform ${showAllGuides ? 'rotate-90' : ''}`} />
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  {/* Additional guides would go here */}
                </CollapsibleContent>
              </Collapsible>

              <div className="pt-4">
                <Button className="w-full btn-gradient">
                  Browse Full Library
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickActionsSection;