import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Target, Wallet, Play, ArrowRight, ExternalLink, Hash, TrendingUp, Clock, Sparkles } from 'lucide-react';

interface HastraForDummiesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

/**
 * Module card component for Hastra content
 */
const ModuleCard = ({ 
  title, 
  description, 
  duration, 
  status,
  topics,
  tokenType 
}: {
  title: string;
  description: string;
  duration: string;
  status: 'Available' | 'Coming Soon';
  topics: string[];
  tokenType: 'sYLDS' | 'HASH';
}) => (
  <Card className={`group transition-all duration-300 ${status === 'Available' ? 'hover:shadow-lg hover:border-header-glow/40' : 'opacity-75'}`}>
    <CardHeader className="pb-3">
      <div className="flex items-start justify-between mb-2">
        <div className="flex items-center gap-2">
          <Badge variant={tokenType === 'sYLDS' ? 'default' : 'secondary'}>
            {tokenType}
          </Badge>
          <Badge variant={status === 'Available' ? 'outline' : 'secondary'} className="text-xs">
            {status}
          </Badge>
        </div>
        <span className="text-sm text-muted-foreground">{duration}</span>
      </div>
      <CardTitle className={`text-lg transition-colors ${status === 'Available' ? 'group-hover:text-header-glow' : ''}`}>
        {title}
      </CardTitle>
      <CardDescription className="text-sm leading-relaxed">
        {description}
      </CardDescription>
    </CardHeader>
    <CardContent className="pt-0">
      <div className="space-y-3">
        <div>
          <h4 className="text-sm font-medium mb-2 text-foreground/90">What you'll learn:</h4>
          <ul className="space-y-1">
            {topics.map((topic, index) => (
              <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                <div className="w-1 h-1 rounded-full bg-header-glow mt-2 flex-shrink-0" />
                <span>{topic}</span>
              </li>
            ))}
          </ul>
        </div>
        <Button 
          size="sm" 
          className="w-full group/btn" 
          variant="secondary"
          disabled={status === 'Coming Soon'}
        >
          {status === 'Available' ? (
            <>
              Start Module
              <Play className="ml-2 h-3 w-3 transition-transform group-hover/btn:scale-110" />
            </>
          ) : (
            <>
              Coming Soon
              <Clock className="ml-2 h-3 w-3" />
            </>
          )}
        </Button>
      </div>
    </CardContent>
  </Card>
);

/**
 * Track 3: Hastra for Dummies Modal - Platform-specific content for sYLDS and HASH
 */
const HastraForDummiesModal = ({ isOpen, onClose }: HastraForDummiesModalProps) => {
  const modules = [
    {
      title: "What is sYLDS?",
      description: "Complete introduction to the sYLDS token, its purpose, and core functionality within the Hastra ecosystem.",
      duration: "8 min",
      status: "Available" as const,
      tokenType: "sYLDS" as const,
      topics: [
        "sYLDS token fundamentals",
        "Role in the Hastra ecosystem",
        "Utility and use cases",
        "Token mechanics and features"
      ]
    },
    {
      title: "How to Get sYLDS",
      description: "Step-by-step guide to acquiring sYLDS tokens through various methods and platforms.",
      duration: "12 min",
      status: "Available" as const,
      tokenType: "sYLDS" as const,
      topics: [
        "Where to buy sYLDS tokens",
        "Wallet setup for sYLDS",
        "Transaction walkthrough",
        "Best practices for acquisition"
      ]
    },
    {
      title: "Using sYLDS on Hastra",
      description: "Comprehensive guide to utilizing sYLDS tokens effectively within the Hastra platform.",
      duration: "15 min",
      status: "Available" as const,
      tokenType: "sYLDS" as const,
      topics: [
        "Platform navigation",
        "Staking and earning mechanisms",
        "Yield optimization strategies",
        "Portfolio management tools"
      ]
    },
    {
      title: "What is HASH?",
      description: "Understanding the HASH token and its critical role in strengthening the Provenance ecosystem.",
      duration: "8 min",
      status: "Available" as const,
      tokenType: "HASH" as const,
      topics: [
        "HASH token overview",
        "Connection to Provenance blockchain",
        "Ecosystem strengthening role",
        "Long-term value proposition"
      ]
    },
    {
      title: "Why Focus on HASH?",
      description: "Deep dive into the strategic importance of HASH and why it's central to our mission.",
      duration: "10 min",
      status: "Available" as const,
      tokenType: "HASH" as const,
      topics: [
        "Strategic ecosystem benefits",
        "Network security contributions",
        "Community governance role",
        "Investment thesis"
      ]
    },
    {
      title: "How to Buy HASH",
      description: "Complete walkthrough for purchasing HASH tokens and joining the Provenance ecosystem.",
      duration: "12 min",
      status: "Available" as const,
      tokenType: "HASH" as const,
      topics: [
        "Where to purchase HASH",
        "Provenance wallet setup",
        "Transaction process",
        "Security considerations"
      ]
    },
    {
      title: "Using HASH (Coming Soon)",
      description: "Advanced strategies and use cases for HASH tokens within the expanding Provenance ecosystem.",
      duration: "18 min",
      status: "Coming Soon" as const,
      tokenType: "HASH" as const,
      topics: [
        "Staking and delegation",
        "Governance participation",
        "DeFi opportunities",
        "Ecosystem rewards"
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
                <Target className="w-6 h-6 text-header-glow" />
              </div>
              <div>
                <DialogTitle className="text-3xl font-bold text-gradient">
                  Track 3: Hastra for Dummies
                </DialogTitle>
                <p className="text-muted-foreground mt-1">
                  Master sYLDS and HASH tokens in the Provenance ecosystem
                </p>
              </div>
            </div>
          </DialogHeader>
          
          {/* Quick Stats */}
          <div className="grid grid-cols-4 gap-4 mt-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-header-glow">7</div>
              <div className="text-sm text-muted-foreground">Modules</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-header-glow">85min</div>
              <div className="text-sm text-muted-foreground">Total Time</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-header-glow">2</div>
              <div className="text-sm text-muted-foreground">Tokens</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-header-glow">Beginner</div>
              <div className="text-sm text-muted-foreground">Level</div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-8 space-y-8">
          {/* Overview */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold flex items-center gap-2">
              <Wallet className="w-5 h-5 text-header-glow" />
              Platform-Specific Mastery
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Get hands-on with the Hastra platform and Provenance ecosystem. This practical track covers 
              everything from understanding sYLDS and HASH tokens to actually using them effectively. 
              Perfect for those ready to start earning with our specific tools and tokens.
            </p>
          </div>

          {/* Token Sections */}
          <div className="space-y-8">
            {/* sYLDS Section */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-header-glow" />
                sYLDS Token Mastery
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {modules.filter(module => module.tokenType === 'sYLDS').map((module, index) => (
                  <ModuleCard key={index} {...module} />
                ))}
              </div>
            </div>

            {/* HASH Section */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <Hash className="w-5 h-5 text-header-glow" />
                Strengthening Provenance Ecosystem
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {modules.filter(module => module.tokenType === 'HASH').map((module, index) => (
                  <ModuleCard key={index} {...module} />
                ))}
              </div>
            </div>
          </div>

          {/* Platform Features */}
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-header-glow/20">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Badge>sYLDS</Badge>
                  Platform Features
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-1 h-1 rounded-full bg-header-glow mt-2 flex-shrink-0" />
                    <span>Automated yield optimization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1 h-1 rounded-full bg-header-glow mt-2 flex-shrink-0" />
                    <span>Multi-strategy portfolios</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1 h-1 rounded-full bg-header-glow mt-2 flex-shrink-0" />
                    <span>Real-time analytics dashboard</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1 h-1 rounded-full bg-header-glow mt-2 flex-shrink-0" />
                    <span>Cross-chain compatibility</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-header-glow/20">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Badge variant="secondary">HASH</Badge>
                  Ecosystem Benefits
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-1 h-1 rounded-full bg-header-glow mt-2 flex-shrink-0" />
                    <span>Provenance network security</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1 h-1 rounded-full bg-header-glow mt-2 flex-shrink-0" />
                    <span>Governance participation rights</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1 h-1 rounded-full bg-header-glow mt-2 flex-shrink-0" />
                    <span>Ecosystem growth rewards</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1 h-1 rounded-full bg-header-glow mt-2 flex-shrink-0" />
                    <span>Long-term value accrual</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Coming Soon Notice */}
          <Card className="border-purple-500/20 bg-purple-500/5">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center gap-2 text-purple-700">
                <Sparkles className="w-5 h-5" />
                More Features Coming Soon
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-purple-700/90 leading-relaxed">
                We're continuously expanding the Hastra platform and HASH token utility. 
                Stay tuned for advanced staking mechanisms, governance features, and new 
                ways to participate in the growing Provenance ecosystem.
              </p>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t">
            <Button size="lg" className="flex-1 group">
              Start with sYLDS
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="secondary" className="flex-1 group">
              Explore HASH
              <Hash className="ml-2 h-4 w-4 transition-transform group-hover:scale-110" />
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

export default HastraForDummiesModal;