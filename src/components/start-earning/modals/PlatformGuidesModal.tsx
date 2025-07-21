import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, Wallet, Play, ArrowRight, ExternalLink, Target } from 'lucide-react';

interface PlatformGuidesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

/**
 * Platform guide card component
 */
const GuideCard = ({ 
  title, 
  description, 
  duration, 
  difficulty, 
  steps,
  platform 
}: {
  title: string;
  description: string;
  duration: string;
  difficulty: 'Easy' | 'Medium';
  steps: string[];
  platform: 'YIELD' | 'HOMES';
}) => (
  <Card className="group hover:shadow-lg transition-all duration-300 hover:border-header-glow/40">
    <CardHeader className="pb-3">
      <div className="flex items-start justify-between mb-2">
        <div className="flex items-center gap-2">
          <Badge variant={platform === 'YIELD' ? 'default' : 'secondary'}>
            {platform}
          </Badge>
          <Badge variant="outline" className="text-xs">
            {difficulty}
          </Badge>
        </div>
        <span className="text-sm text-muted-foreground">{duration}</span>
      </div>
      <CardTitle className="text-lg group-hover:text-header-glow transition-colors">
        {title}
      </CardTitle>
      <CardDescription className="text-sm leading-relaxed">
        {description}
      </CardDescription>
    </CardHeader>
    <CardContent className="pt-0">
      <div className="space-y-3">
        <div>
          <h4 className="text-sm font-medium mb-2 text-foreground/90">Step-by-step guide:</h4>
          <ul className="space-y-1">
            {steps.map((step, index) => (
              <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-header-glow/20 text-header-glow text-xs flex items-center justify-center mt-0.5 font-medium">
                  {index + 1}
                </span>
                <span>{step}</span>
              </li>
            ))}
          </ul>
        </div>
        <Button size="sm" className="w-full group/btn" variant="secondary">
          Start Guide
          <Play className="ml-2 h-3 w-3 transition-transform group-hover/btn:scale-110" />
        </Button>
      </div>
    </CardContent>
  </Card>
);

/**
 * Platform Guides Modal - Step-by-step guides for using YIELD and HOMES tokens
 */
const PlatformGuidesModal = ({ isOpen, onClose }: PlatformGuidesModalProps) => {
  const guides = [
    {
      title: "How to Buy YIELD Tokens",
      description: "Complete walkthrough for purchasing your first YIELD tokens safely and efficiently.",
      duration: "12 min",
      difficulty: "Easy" as const,
      platform: "YIELD" as const,
      steps: [
        "Connect your wallet to the platform",
        "Navigate to the YIELD token page",
        "Choose your purchase amount",
        "Review transaction details",
        "Confirm and complete purchase"
      ]
    },
    {
      title: "HOMES Token Explained",
      description: "Understanding HOMES tokens, their utility, and how they generate passive income.",
      duration: "15 min",
      difficulty: "Easy" as const,
      platform: "HOMES" as const,
      steps: [
        "What are HOMES tokens?",
        "Real estate backing mechanism",
        "Income distribution model",
        "How to earn with HOMES",
        "Claiming your rewards"
      ]
    },
    {
      title: "Platform Navigation Guide",
      description: "Master the platform interface and discover all available features and tools.",
      duration: "10 min",
      difficulty: "Easy" as const,
      platform: "YIELD" as const,
      steps: [
        "Dashboard overview",
        "Portfolio management section",
        "Trading and swap features",
        "Analytics and reporting",
        "Settings and preferences"
      ]
    },
    {
      title: "Transaction Walkthroughs",
      description: "Detailed guides for common transactions including swaps, stakes, and withdrawals.",
      duration: "18 min",
      difficulty: "Medium" as const,
      platform: "YIELD" as const,
      steps: [
        "Understanding gas fees",
        "Approving token allowances",
        "Executing swaps safely",
        "Staking for rewards",
        "Withdrawing earnings"
      ]
    },
    {
      title: "HOMES Portfolio Management",
      description: "Optimize your HOMES token holdings and maximize your real estate exposure.",
      duration: "20 min",
      difficulty: "Medium" as const,
      platform: "HOMES" as const,
      steps: [
        "Analyzing property performance",
        "Diversifying across regions",
        "Reinvesting dividends",
        "Tracking market trends",
        "Exit strategies"
      ]
    },
    {
      title: "Advanced Platform Features",
      description: "Unlock advanced features like limit orders, automated strategies, and yield optimization.",
      duration: "25 min",
      difficulty: "Medium" as const,
      platform: "YIELD" as const,
      steps: [
        "Setting up limit orders",
        "Creating automated strategies",
        "Using yield optimization tools",
        "Advanced analytics dashboard",
        "API integration basics"
      ]
    }
  ];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto p-0">
        {/* Header Section */}
        <div className="relative bg-gradient-to-br from-header-glow/10 to-crypto-accent/10 p-8 border-b">
          <DialogHeader className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-header-glow/20 to-crypto-accent/20 flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-header-glow" />
              </div>
              <div>
                <DialogTitle className="text-3xl font-bold text-gradient">
                  Platform Guides
                </DialogTitle>
                <p className="text-muted-foreground mt-1">
                  Step-by-step guides for YIELD and HOMES tokens
                </p>
              </div>
            </div>
          </DialogHeader>
          
          {/* Quick Stats */}
          <div className="grid grid-cols-4 gap-4 mt-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-header-glow">6</div>
              <div className="text-sm text-muted-foreground">Guides</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-header-glow">100min</div>
              <div className="text-sm text-muted-foreground">Total Time</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-header-glow">Easy</div>
              <div className="text-sm text-muted-foreground">Difficulty</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-header-glow">2</div>
              <div className="text-sm text-muted-foreground">Platforms</div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-8 space-y-8">
          {/* Overview */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold flex items-center gap-2">
              <Wallet className="w-5 h-5 text-header-glow" />
              Platform-Specific Guides
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Master both YIELD and HOMES platforms with our comprehensive step-by-step guides. 
              From your first token purchase to advanced portfolio management, these guides will 
              help you navigate every feature with confidence and start earning immediately.
            </p>
          </div>

          {/* Guides Grid */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold flex items-center gap-2">
              <Target className="w-5 h-5 text-header-glow" />
              Available Guides
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {guides.map((guide, index) => (
                <GuideCard key={index} {...guide} />
              ))}
            </div>
          </div>

          {/* Platform Comparison */}
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-header-glow/20">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Badge>YIELD</Badge>
                  Token Features
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-1 h-1 rounded-full bg-header-glow mt-2 flex-shrink-0" />
                    <span>High-yield DeFi strategies</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1 h-1 rounded-full bg-header-glow mt-2 flex-shrink-0" />
                    <span>Automated yield optimization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1 h-1 rounded-full bg-header-glow mt-2 flex-shrink-0" />
                    <span>Flexible staking options</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1 h-1 rounded-full bg-header-glow mt-2 flex-shrink-0" />
                    <span>Cross-platform compatibility</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-header-glow/20">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Badge variant="secondary">HOMES</Badge>
                  Token Features
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-1 h-1 rounded-full bg-header-glow mt-2 flex-shrink-0" />
                    <span>Real estate-backed tokens</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1 h-1 rounded-full bg-header-glow mt-2 flex-shrink-0" />
                    <span>Passive rental income</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1 h-1 rounded-full bg-header-glow mt-2 flex-shrink-0" />
                    <span>Property appreciation exposure</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1 h-1 rounded-full bg-header-glow mt-2 flex-shrink-0" />
                    <span>Diversified property portfolio</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t">
            <Button size="lg" className="flex-1 group">
              Start with YIELD Guides
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="secondary" className="flex-1 group">
              Explore HOMES Guides
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline" className="flex-1 group" asChild>
              <a href="/earn">
                Start Earning
                <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:scale-110" />
              </a>
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PlatformGuidesModal;