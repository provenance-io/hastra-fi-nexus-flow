import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Separator } from '@/components/ui/separator';
import { Progress } from '@/components/ui/progress';
import { 
  ArrowRight, Play, BookOpen, Clock, CheckCircle, Lightbulb, Users, TrendingUp, 
  Target, AlertTriangle, Shield, DollarSign, Coins, ExternalLink, Copy, Info,
  Eye, BarChart3, Wallet, Link, RefreshCw, Zap
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const enhancedQuickStarters = [
  {
    id: 1,
    title: "DeFi Security Fundamentals",
    description: "Complete security guide for protecting your crypto assets",
    duration: "15 min read",
    difficulty: "Essential",
    estimatedTime: 15,
    icon: Shield,
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop",
    topics: ["Wallet security", "Scam identification", "Transaction safety", "Smart contract risks", "Recovery planning"],
    prerequisites: ["Basic crypto knowledge", "Have a wallet set up"],
    outcomes: ["Secure wallet setup", "Scam recognition", "Safe transaction habits"],
    content: {
      intro: "Security is the foundation of successful DeFi participation. This comprehensive guide covers everything you need to protect your assets and navigate DeFi safely, from wallet basics to advanced security practices.",
      sections: [
        {
          title: "Wallet Security Fundamentals",
          content: [
            "Use hardware wallets for amounts over $1,000",
            "Enable 2FA on all crypto-related accounts",
            "Never share private keys or seed phrases with anyone",
            "Create secure backups of your seed phrase (offline, multiple locations)",
            "Use unique passwords and password managers",
            "Regularly update your wallet software"
          ]
        },
        {
          title: "Identifying and Avoiding Scams",
          content: [
            "Be suspicious of 'guaranteed' high returns (>50% APY)",
            "Verify project team credentials and smart contract audits",
            "Watch for phishing websites with similar URLs",
            "Never connect your wallet to unknown dApps",
            "Beware of impersonators on social media and Discord",
            "Always verify official links through multiple sources"
          ]
        },
        {
          title: "Transaction Safety Protocols",
          content: [
            "Double-check recipient addresses character by character",
            "Test with small amounts first ($5-10) for new protocols",
            "Verify contract addresses on official documentation",
            "Check gas fees and slippage before confirming",
            "Understand what permissions you're granting",
            "Keep transaction records for tax purposes"
          ]
        },
        {
          title: "Smart Contract Risk Assessment",
          content: [
            "Look for recent security audits from reputable firms",
            "Check Total Value Locked (TVL) and user count",
            "Verify code is open source and audited",
            "Understand liquidation and slashing risks",
            "Research the development team's track record",
            "Start with established protocols for first investments"
          ]
        }
      ],
      practicalSteps: [
        "Set up a hardware wallet or secure software wallet",
        "Create and secure your seed phrase backup",
        "Practice identifying phishing attempts",
        "Test wallet connection with a small amount",
        "Learn to read and verify smart contract interactions"
      ]
    }
  },
  {
    id: 2,
    title: "Your First $100 DeFi Investment",
    description: "Step-by-step walkthrough from setup to earning your first yield",
    duration: "25 min read",
    difficulty: "Beginner",
    estimatedTime: 25,
    icon: Target,
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop",
    topics: ["Platform selection", "Risk assessment", "Token acquisition", "Position management", "Performance tracking"],
    prerequisites: ["Secure wallet setup", "Basic DeFi knowledge", "$100+ to invest"],
    outcomes: ["Active DeFi position", "Understanding of yields", "Portfolio tracking setup"],
    content: {
      intro: "Transform your first $100 into a learning experience that sets the foundation for larger DeFi investments. This guide provides a complete roadmap from choosing platforms to managing your positions.",
      sections: [
        {
          title: "Platform Selection Strategy",
          content: [
            "Start with established platforms: Raydium, Kamino, Jupiter",
            "Check platform TVL (aim for $100M+ for safety)",
            "Verify recent security audits and track record",
            "Consider user interface and documentation quality",
            "Look for active community and developer support",
            "Evaluate fee structures and earning potential"
          ]
        },
        {
          title: "Risk Assessment Framework",
          content: [
            "Understand impermanent loss for liquidity provision",
            "Research liquidation risks for lending protocols",
            "Evaluate token volatility and correlation",
            "Consider smart contract and protocol risks",
            "Assess your personal risk tolerance",
            "Plan for different market scenarios"
          ]
        },
        {
          title: "Token Acquisition Guide",
          content: [
            "Purchase SOL for transaction fees (keep $10-20)",
            "Choose between sYLDS (stable) or sHASH (growth)",
            "Use Jupiter for token swaps with price comparison",
            "Set appropriate slippage tolerance (0.5-1%)",
            "Consider dollar-cost averaging for larger amounts",
            "Keep detailed records of all transactions"
          ]
        },
        {
          title: "Position Management Best Practices",
          content: [
            "Start with single strategy to understand mechanics",
            "Monitor positions daily for first week",
            "Set up price alerts for significant changes",
            "Understand how to exit positions quickly",
            "Plan reinvestment strategy for earned yields",
            "Document lessons learned for future reference"
          ]
        }
      ],
      practicalSteps: [
        "Research and select your first DeFi platform",
        "Acquire SOL and your chosen investment token",
        "Make your first position with $50-75",
        "Set up monitoring and tracking systems",
        "Plan your strategy for the next 30 days"
      ]
    }
  },
  {
    id: 3,
    title: "Mastering APY and Yield Calculations",
    description: "Deep dive into understanding returns, risks, and realistic expectations",
    duration: "20 min read",
    difficulty: "Beginner",
    estimatedTime: 20,
    icon: TrendingUp,
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop",
    topics: ["APY vs APR", "Compounding effects", "Risk-adjusted returns", "Market factors", "Calculation tools"],
    prerequisites: ["Basic math skills", "Understanding of percentages", "DeFi platform familiarity"],
    outcomes: ["APY calculation skills", "Risk assessment ability", "Realistic return expectations"],
    content: {
      intro: "Understanding yield calculations is crucial for making informed DeFi decisions. Learn to calculate real returns, assess risks, and set realistic expectations for your investments.",
      sections: [
        {
          title: "APY vs APR: The Critical Difference",
          content: [
            "APY includes compounding effects, APR does not",
            "APY = (1 + APR/n)^n - 1, where n = compounding frequency",
            "Higher compounding frequency increases effective yield",
            "Many DeFi protocols compound continuously or daily",
            "Always compare APY to APY, not APY to APR",
            "Understand how frequently rewards are distributed"
          ]
        },
        {
          title: "Compounding Strategies and Effects",
          content: [
            "Manual vs automatic compounding trade-offs",
            "Gas fees impact on small position compounding",
            "Optimal compounding frequency calculations",
            "Tax implications of frequent compounding",
            "Platform-specific compounding mechanisms",
            "Long-term wealth building through compounding"
          ]
        },
        {
          title: "Risk-Adjusted Return Analysis",
          content: [
            "Sharpe ratio calculations for crypto investments",
            "Volatility impact on effective returns",
            "Downside protection and maximum drawdown",
            "Correlation risk between token pairs",
            "Liquidity risk and exit scenarios",
            "Opportunity cost of different strategies"
          ]
        },
        {
          title: "Market Factors Affecting Yields",
          content: [
            "Supply and demand dynamics for lending",
            "Liquidity depth impact on trading fees",
            "Token emission schedules and inflation",
            "Market cycles and yield sustainability",
            "Regulatory changes and protocol updates",
            "Competition between protocols and yields"
          ]
        }
      ],
      practicalSteps: [
        "Calculate APY for your current or planned positions",
        "Factor in all costs (gas, slippage, opportunity cost)",
        "Compare risk-adjusted returns across strategies",
        "Set up yield tracking and monitoring systems",
        "Develop realistic return expectations and goals"
      ]
    }
  }
];

const comprehensiveGuides = [
  {
    id: 1,
    title: "Complete HASH to SOL-HASH Bridge Guide",
    description: "Master cross-chain bridging with detailed walkthrough and troubleshooting",
    difficulty: "Intermediate",
    duration: "35 min read",
    videoTime: "18:30",
    hasVideo: true,
    sections: 8,
    estimatedTime: 35,
    icon: ArrowRight,
    prerequisites: ["Provenance wallet", "Solana wallet", "HASH tokens"],
    outcomes: ["Cross-chain bridging mastery", "Troubleshooting skills", "Multi-chain portfolio"],
    detailedSections: [
      {
        title: "Understanding the Bridge Architecture",
        duration: "5 min",
        content: "Learn how Figure Markets bridge works, security mechanisms, and token economics"
      },
      {
        title: "Wallet Setup and Connection",
        duration: "7 min", 
        content: "Step-by-step wallet configuration for both Provenance and Solana networks"
      },
      {
        title: "Bridge Interface Navigation",
        duration: "6 min",
        content: "Complete walkthrough of Figure Markets interface and features"
      },
      {
        title: "Transaction Execution and Monitoring",
        duration: "8 min",
        content: "Executing the bridge transaction and tracking progress across networks"
      },
      {
        title: "Verification and Troubleshooting",
        duration: "5 min",
        content: "Confirming successful bridging and resolving common issues"
      },
      {
        title: "Post-Bridge Strategy Planning",
        duration: "4 min",
        content: "Optimizing your SOL-HASH for DeFi opportunities on Solana"
      }
    ],
    tips: [
      "Start with small amounts to test the process",
      "Bridge fees are typically 0.1-0.5% of transaction value",
      "Process usually takes 5-15 minutes to complete",
      "Keep some SOL for transaction fees on Solana side"
    ]
  },
  {
    id: 2,
    title: "Advanced Raydium Liquidity Strategies",
    description: "Professional-grade liquidity provision techniques and optimization",
    difficulty: "Advanced",
    duration: "45 min read",
    videoTime: "28:15",
    hasVideo: true,
    sections: 12,
    estimatedTime: 45,
    icon: Users,
    prerequisites: ["DeFi experience", "LP understanding", "Risk management knowledge"],
    outcomes: ["Advanced LP strategies", "Yield optimization", "Risk management"],
    detailedSections: [
      {
        title: "Concentrated Liquidity Fundamentals",
        duration: "6 min",
        content: "Understanding concentrated liquidity mechanics and capital efficiency"
      },
      {
        title: "Range Selection Strategies",
        duration: "8 min",
        content: "Optimal range setting for different market conditions and tokens"
      },
      {
        title: "Impermanent Loss Mitigation",
        duration: "7 min",
        content: "Advanced techniques to minimize IL while maximizing fees"
      },
      {
        title: "Multi-Pool Strategies",
        duration: "6 min",
        content: "Diversifying across multiple pools for risk management"
      },
      {
        title: "Active Management Techniques",
        duration: "8 min",
        content: "When and how to rebalance positions for optimal returns"
      },
      {
        title: "Yield Farming Integration",
        duration: "5 min",
        content: "Combining LP positions with additional reward programs"
      },
      {
        title: "Tax Optimization Strategies",
        duration: "5 min",
        content: "Managing tax implications of active LP management"
      }
    ],
    tips: [
      "Monitor pool fees and volume before entering",
      "Set price alerts for range boundaries",
      "Consider correlation between token pairs",
      "Factor in gas costs for active management"
    ]
  },
  {
    id: 3,
    title: "Kamino Lending Protocol Mastery",
    description: "Complete guide to automated lending strategies and risk management",
    difficulty: "Advanced",
    duration: "40 min read",
    videoTime: "25:45",
    hasVideo: true,
    sections: 10,
    estimatedTime: 40,
    icon: TrendingUp,
    prerequisites: ["Lending basics", "Collateral concepts", "Advanced DeFi knowledge"],
    outcomes: ["Lending mastery", "Automated strategies", "Risk management"],
    detailedSections: [
      {
        title: "Kamino Platform Architecture",
        duration: "5 min",
        content: "Understanding Kamino's automated strategy engine and optimization algorithms"
      },
      {
        title: "Strategy Selection Framework",
        duration: "6 min",
        content: "Choosing optimal strategies based on risk tolerance and market conditions"
      },
      {
        title: "Collateral Management",
        duration: "7 min",
        content: "Advanced collateral strategies and liquidation risk management"
      },
      {
        title: "Leverage and Borrowing",
        duration: "8 min",
        content: "Safe leverage practices and yield multiplication techniques"
      },
      {
        title: "Automated Rebalancing",
        duration: "6 min",
        content: "Understanding and optimizing automated position management"
      },
      {
        title: "Risk Monitoring and Alerts",
        duration: "4 min",
        content: "Setting up comprehensive monitoring systems"
      },
      {
        title: "Exit Strategies and Emergency Procedures",
        duration: "4 min",
        content: "Planning exits and handling emergency situations"
      }
    ],
    tips: [
      "Start with conservative leverage ratios (1.5x max)",
      "Monitor health factor closely (keep above 2.0)",
      "Understand liquidation triggers and penalties",
      "Have emergency exit plans for market volatility"
    ]
  }
];

const enhancedTips = [
  {
    category: "Risk Management",
    title: "The 5-5-90 Rule",
    tip: "Allocate 5% for high-risk/high-reward experiments, 5% for learning and mistakes, and 90% for proven, conservative strategies. This balance allows growth while protecting capital.",
    icon: Shield,
    details: "Professional DeFi investors rarely risk more than 10% on experimental strategies. This allocation ensures you can learn and grow without catastrophic losses.",
    actionItems: [
      "Calculate your total DeFi allocation",
      "Set strict limits for experimental investments",
      "Track performance across risk categories",
      "Rebalance quarterly based on results"
    ]
  },
  {
    category: "Portfolio Management",
    title: "Diversification Matrix",
    tip: "Spread investments across protocols (3-5), token types (stable/volatile), and strategies (lending/LP/staking). Never exceed 25% in any single protocol or token pair.",
    icon: BarChart3,
    details: "Diversification is your primary defense against protocol failures, smart contract bugs, and market volatility in DeFi.",
    actionItems: [
      "Map current positions across protocols",
      "Identify concentration risks above 25%",
      "Plan rebalancing to achieve target allocation",
      "Set up monitoring for drift from targets"
    ]
  },
  {
    category: "Security",
    title: "Transaction Verification Protocol", 
    tip: "Always verify contract addresses, check transaction simulation, and understand approval permissions before signing. Use multiple sources to confirm legitimacy.",
    icon: CheckCircle,
    details: "Most DeFi losses come from user error or malicious contracts. A systematic verification process eliminates 90% of these risks.",
    actionItems: [
      "Create verification checklist for transactions",
      "Bookmark official contract addresses",
      "Use transaction simulation tools",
      "Set up separate wallet for DeFi experiments"
    ]
  },
  {
    category: "Yield Optimization",
    title: "Compound Frequency Calculator",
    tip: "Calculate optimal compounding frequency based on position size and gas costs. Small positions may benefit from weekly/monthly compounding instead of daily.",
    icon: RefreshCw,
    details: "Gas fees can eat significant returns on small positions. Optimize compounding frequency to maximize net yields.",
    actionItems: [
      "Calculate break-even compounding frequency",
      "Factor transaction costs into yield calculations",
      "Consider automated compounding services",
      "Track net yields after all costs"
    ]
  },
  {
    category: "Market Intelligence",
    title: "Yield Sustainability Analysis",
    tip: "Investigate the source of high yields. Sustainable yields come from real economic activity, not just token emissions. Look for fee generation and user adoption metrics.",
    icon: TrendingUp,
    details: "Unsustainable yields often collapse quickly. Understanding yield sources helps predict longevity and adjust strategies accordingly.",
    actionItems: [
      "Research protocol revenue sources",
      "Analyze token emission schedules",
      "Monitor user growth and activity metrics",
      "Set yield sustainability thresholds"
    ]
  },
  {
    category: "Tax Optimization",
    title: "Strategic Timing Framework",
    tip: "Plan position entries and exits around tax implications. Consider holding periods, harvest loss opportunities, and jurisdiction-specific rules.",
    icon: DollarSign,
    details: "Tax-aware DeFi strategies can significantly improve after-tax returns through proper timing and structure.",
    actionItems: [
      "Track holding periods for tax optimization",
      "Plan harvest loss opportunities",
      "Consider tax-efficient protocols and structures",
      "Maintain detailed transaction records"
    ]
  }
];

const difficultyColors = {
  "Essential": "bg-red-500/20 border-red-500/30 text-red-300",
  "Beginner": "bg-green-500/20 border-green-500/30 text-green-300",
  "Intermediate": "bg-blue-500/20 border-blue-500/30 text-blue-300",
  "Advanced": "bg-purple-500/20 border-purple-500/30 text-purple-300"
};

const EnhancedGuidesSection = () => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("quick");
  const [expandedGuide, setExpandedGuide] = useState<number | null>(null);
  const [selectedGuide, setSelectedGuide] = useState<typeof enhancedQuickStarters[0] | null>(null);
  const [selectedComprehensive, setSelectedComprehensive] = useState<typeof comprehensiveGuides[0] | null>(null);
  const [isGuideDialogOpen, setIsGuideDialogOpen] = useState(false);
  const [isComprehensiveDialogOpen, setIsComprehensiveDialogOpen] = useState(false);
  const [readingProgress, setReadingProgress] = useState(0);

  const startReading = (starter: typeof enhancedQuickStarters[0]) => {
    setSelectedGuide(starter);
    setIsGuideDialogOpen(true);
    setReadingProgress(0);
  };

  const openComprehensiveGuide = (guide: typeof comprehensiveGuides[0]) => {
    setSelectedComprehensive(guide);
    setIsComprehensiveDialogOpen(true);
  };

  const showEnhancedTip = (tip: typeof enhancedTips[0]) => {
    toast({
      title: `${tip.category}: ${tip.title}`,
      description: tip.tip,
      duration: 6000,
    });
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied to clipboard",
      description: "Content copied successfully",
      duration: 2000,
    });
  };

  return (
    <section className="py-24 md:py-32 bg-gradient-to-br from-header-glow/5 via-background to-crypto-accent/5" data-section="guides">
      <div className="container">
        {/* Enhanced Section Header */}
        <div className="text-center mb-20">
          <Badge className="mb-6 bg-header-glow/20 border-header-glow/30 text-header-glow hover:bg-header-glow/30">
            <BookOpen className="w-4 h-4 mr-2" />
            Complete Learning System
          </Badge>
          
          <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-8">
            <span className="text-gradient">Master DeFi</span>
            <br />
            <span className="text-muted-foreground">Like a Pro</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-8">
            Comprehensive guides designed by DeFi professionals. From security fundamentals to advanced strategies.
          </p>

          {/* Learning Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-2xl font-bold text-auburn-primary">12+</div>
              <div className="text-sm text-muted-foreground">Complete Guides</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-auburn-light">150+</div>
              <div className="text-sm text-muted-foreground">Pro Tips</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-auburn-primary">40+</div>
              <div className="text-sm text-muted-foreground">Video Tutorials</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-auburn-light">24/7</div>
              <div className="text-sm text-muted-foreground">Support</div>
            </div>
          </div>
        </div>

        {/* Enhanced Learning Tabs */}
        <div className="max-w-7xl mx-auto">
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-3 glass-effect mb-12 max-w-2xl mx-auto">
              <TabsTrigger value="quick" className="text-sm">
                <Lightbulb className="w-4 h-4 mr-2" />
                Quick Start
              </TabsTrigger>
              <TabsTrigger value="comprehensive" className="text-sm" data-tab="comprehensive">
                <BookOpen className="w-4 h-4 mr-2" />
                Master Guides
              </TabsTrigger>
              <TabsTrigger value="tips" className="text-sm">
                <Target className="w-4 h-4 mr-2" />
                Pro Strategies
              </TabsTrigger>
            </TabsList>

            {/* Enhanced Quick Start Tab */}
            <TabsContent value="quick">
              <div className="grid lg:grid-cols-3 gap-8">
                {enhancedQuickStarters.map((starter) => (
                  <Card key={starter.id} className="glass-effect border-border/50 hover:border-header-glow/30 transition-all duration-300 group overflow-hidden">
                    {/* Enhanced Hero Image */}
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={starter.image} 
                        alt={starter.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                        <Badge className={difficultyColors[starter.difficulty as keyof typeof difficultyColors]}>
                          {starter.difficulty}
                        </Badge>
                        <div className="text-right">
                          <div className="text-xs text-white/80">Estimated time</div>
                          <div className="text-sm text-white font-medium">{starter.duration}</div>
                        </div>
                      </div>
                    </div>

                    <CardHeader>
                      <CardTitle className="text-xl flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-lg bg-header-glow/10 flex items-center justify-center">
                          <starter.icon className="w-5 h-5 text-header-glow" />
                        </div>
                        {starter.title}
                      </CardTitle>
                      <CardDescription className="text-base leading-relaxed">{starter.description}</CardDescription>
                      
                      {/* Prerequisites & Outcomes */}
                      <div className="space-y-3 mt-4">
                        <div>
                          <div className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-1">Prerequisites</div>
                          <div className="flex flex-wrap gap-1">
                            {starter.prerequisites.map((prereq, i) => (
                              <Badge key={i} variant="outline" className="text-xs">
                                {prereq}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <div>
                          <div className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-1">You'll learn</div>
                          <div className="flex flex-wrap gap-1">
                            {starter.outcomes.map((outcome, i) => (
                              <Badge key={i} variant="outline" className="text-xs bg-green-500/10 border-green-500/30 text-green-400">
                                {outcome}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3 mb-6">
                        {starter.topics.slice(0, 4).map((topic, i) => (
                          <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <div className="w-2 h-2 bg-header-glow rounded-full"></div>
                            <span>{topic}</span>
                          </div>
                        ))}
                        {starter.topics.length > 4 && (
                          <div className="text-xs text-muted-foreground">
                            +{starter.topics.length - 4} more topics
                          </div>
                        )}
                      </div>
                      <Button 
                        variant="auburn"
                        className="w-full group-hover:shadow-lg transition-shadow"
                        onClick={() => startReading(starter)}
                      >
                        Start Reading
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Enhanced Comprehensive Guides Tab */}
            <TabsContent value="comprehensive">
              <div className="space-y-8">
                {comprehensiveGuides.map((guide) => (
                  <Card key={guide.id} className="glass-effect border-border/50 hover:border-header-glow/30 transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-4">
                        <Badge className={difficultyColors[guide.difficulty as keyof typeof difficultyColors]}>
                          {guide.difficulty}
                        </Badge>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {guide.duration}
                          </div>
                          {guide.hasVideo && (
                            <div className="flex items-center gap-1">
                              <Play className="w-4 h-4" />
                              {guide.videoTime}
                            </div>
                          )}
                          <div className="flex items-center gap-1">
                            <BookOpen className="w-4 h-4" />
                            {guide.sections} sections
                          </div>
                        </div>
                      </div>
                      <CardTitle className="text-2xl flex items-center gap-3">
                        <div className="w-12 h-12 rounded-lg bg-header-glow/10 flex items-center justify-center">
                          <guide.icon className="w-6 h-6 text-header-glow" />
                        </div>
                        <div>
                          <div>{guide.title}</div>
                          <div className="text-sm text-muted-foreground font-normal mt-1">
                            Prerequisites: {guide.prerequisites.join(", ")}
                          </div>
                        </div>
                      </CardTitle>
                      <CardDescription className="text-base">{guide.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        {/* Section Preview */}
                        <div className={`space-y-3 ${expandedGuide === guide.id ? '' : 'max-h-48 overflow-hidden'} transition-all relative`}>
                          {guide.detailedSections && guide.detailedSections.map((section, i) => (
                            <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-muted/20 border border-border/30">
                              <div className="w-6 h-6 rounded-full bg-header-glow/20 flex items-center justify-center text-sm font-medium text-header-glow mt-0.5 flex-shrink-0">
                                {i + 1}
                              </div>
                              <div className="flex-1">
                                <div className="font-medium text-foreground">{section.title}</div>
                                <div className="text-sm text-muted-foreground mt-1">{section.content}</div>
                                <div className="text-xs text-header-glow mt-1">{section.duration}</div>
                              </div>
                            </div>
                          ))}
                          {expandedGuide !== guide.id && (
                            <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-background to-transparent" />
                          )}
                        </div>

                        {/* Pro Tips */}
                        {guide.tips && (
                          <div className="space-y-2">
                            <h4 className="font-medium text-sm text-header-glow">Pro Tips:</h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                              {guide.tips.map((tip, i) => (
                                <div key={i} className="text-xs text-muted-foreground bg-muted/10 p-2 rounded border border-border/20">
                                  💡 {tip}
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                        
                        <div className="flex gap-3 pt-4 border-t border-border/50">
                          <Button
                            variant="outline"
                            onClick={() => setExpandedGuide(expandedGuide === guide.id ? null : guide.id)}
                            className="flex-1"
                          >
                            {expandedGuide === guide.id ? 'Show Less' : 'Preview Sections'}
                            <Eye className="ml-2 h-4 w-4" />
                          </Button>
                          {guide.hasVideo && (
                            <Button size="sm" variant="outline">
                              <Play className="mr-2 h-4 w-4" />
                              Watch
                            </Button>
                          )}
                          <Button 
                            variant="auburn"
                            className="flex-1"
                            onClick={() => openComprehensiveGuide(guide)}
                          >
                            Read Full Guide
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Enhanced Pro Tips Tab */}
            <TabsContent value="tips">
              <div className="grid lg:grid-cols-2 gap-8">
                {enhancedTips.map((tip, index) => (
                  <Card key={index} className="glass-effect border-border/50 hover:border-header-glow/30 transition-all duration-300 group">
                    <CardContent className="p-8">
                      <div className="flex items-start gap-4 mb-6">
                        <div className="w-12 h-12 bg-header-glow/20 rounded-lg flex items-center justify-center flex-shrink-0">
                          <tip.icon className="w-6 h-6 text-header-glow" />
                        </div>
                        <div className="flex-1">
                          <Badge variant="outline" className="mb-2 text-xs">
                            {tip.category}
                          </Badge>
                          <h3 className="text-xl font-bold mb-3">{tip.title}</h3>
                          <p className="text-muted-foreground mb-4 leading-relaxed">{tip.tip}</p>
                          <p className="text-sm text-muted-foreground/80 mb-4">{tip.details}</p>
                        </div>
                      </div>

                      {/* Action Items */}
                      <div className="space-y-3 mb-6">
                        <h4 className="font-medium text-sm text-header-glow">Action Items:</h4>
                        {tip.actionItems.map((item, i) => (
                          <div key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>

                      <div className="flex gap-3">
                        <Button 
                          onClick={() => showEnhancedTip(tip)}
                          className="flex-1 group-hover:bg-auburn-primary/20 transition-colors"
                          variant="auburn-outline"
                        >
                          Save Strategy
                          <CheckCircle className="ml-2 h-4 w-4" />
                        </Button>
                        <Button 
                          size="sm"
                          variant="ghost"
                          onClick={() => copyToClipboard(tip.tip)}
                        >
                          <Copy className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      {/* Enhanced Quick Start Dialog */}
      <Dialog open={isGuideDialogOpen} onOpenChange={setIsGuideDialogOpen}>
        <DialogContent className="glass-effect max-w-6xl max-h-[90vh] overflow-y-auto">
          {selectedGuide && (
            <>
              <DialogHeader className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-header-glow/20 flex items-center justify-center">
                      <selectedGuide.icon className="w-6 h-6 text-header-glow" />
                    </div>
                    <div>
                      <DialogTitle className="text-3xl font-bold text-left">
                        {selectedGuide.title}
                      </DialogTitle>
                      <div className="flex items-center gap-3 mt-2">
                        <Badge className={difficultyColors[selectedGuide.difficulty as keyof typeof difficultyColors]}>
                          {selectedGuide.difficulty}
                        </Badge>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <Clock className="w-4 h-4" />
                          {selectedGuide.duration}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Reading Progress */}
                <div className="space-y-2">
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>Reading Progress</span>
                    <span>{readingProgress}%</span>
                  </div>
                  <Progress value={readingProgress} className="h-2" />
                </div>
                
                <DialogDescription className="text-left text-lg leading-relaxed">
                  {selectedGuide.description}
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-8 mt-8">
                {/* Enhanced Hero Image */}
                <div className="relative h-64 rounded-lg overflow-hidden">
                  <img 
                    src={selectedGuide.image} 
                    alt={selectedGuide.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
                </div>

                {/* Introduction */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-header-glow" />
                    Introduction
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-base">
                    {selectedGuide.content.intro}
                  </p>
                </div>

                {/* Detailed Sections */}
                {selectedGuide.content.sections.map((section, sectionIndex) => (
                  <div key={sectionIndex} className="space-y-4">
                    <h3 className="text-xl font-semibold flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-header-glow/20 flex items-center justify-center text-sm font-medium text-header-glow">
                        {sectionIndex + 1}
                      </div>
                      {section.title}
                    </h3>
                    <div className="space-y-3">
                      {section.content.map((point, i) => (
                        <div key={i} className="flex items-start gap-3 p-4 rounded-lg bg-muted/30 border border-border/50">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-foreground leading-relaxed">{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}

                {/* Practical Steps */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold flex items-center gap-2">
                    <Target className="w-5 h-5 text-header-glow" />
                    Next Steps
                  </h3>
                  <div className="space-y-3">
                    {selectedGuide.content.practicalSteps.map((step, i) => (
                      <div key={i} className="flex items-start gap-3 p-4 rounded-lg bg-header-glow/10 border border-header-glow/30">
                        <div className="w-6 h-6 rounded-full bg-header-glow/30 flex items-center justify-center text-sm font-medium text-header-glow mt-0.5 flex-shrink-0">
                          {i + 1}
                        </div>
                        <span className="text-foreground leading-relaxed">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4 pt-6 border-t border-border/50">
                  <Button 
                    variant="outline" 
                    onClick={() => setIsGuideDialogOpen(false)}
                    className="flex-1"
                  >
                    Close Guide
                  </Button>
                  <Button 
                    variant="auburn"
                    className="flex-1"
                    onClick={() => {
                      setReadingProgress(100);
                      toast({
                        title: "Guide Completed!",
                        description: `${selectedGuide.title} marked as complete`,
                        duration: 3000,
                      });
                    }}
                  >
                    <CheckCircle className="mr-2 h-4 w-4" />
                    Mark Complete
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      {/* Comprehensive Guide Dialog */}
      <Dialog open={isComprehensiveDialogOpen} onOpenChange={setIsComprehensiveDialogOpen}>
        <DialogContent className="glass-effect max-w-5xl max-h-[90vh] overflow-y-auto">
          {selectedComprehensive && (
            <>
              <DialogHeader className="space-y-4">
                <DialogTitle className="text-2xl font-bold flex items-center gap-3">
                  <selectedComprehensive.icon className="w-8 h-8 text-header-glow" />
                  {selectedComprehensive.title}
                </DialogTitle>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <Badge className={difficultyColors[selectedComprehensive.difficulty as keyof typeof difficultyColors]}>
                    {selectedComprehensive.difficulty}
                  </Badge>
                  <span>{selectedComprehensive.duration}</span>
                  <span>{selectedComprehensive.sections} sections</span>
                </div>
              </DialogHeader>

              <div className="space-y-6 mt-6">
                <p className="text-muted-foreground text-base leading-relaxed">
                  {selectedComprehensive.description}
                </p>

                {/* Prerequisites and Outcomes */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-header-glow">Prerequisites</h4>
                    <div className="space-y-2">
                      {selectedComprehensive.prerequisites.map((req, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm">
                          <Info className="w-4 h-4 text-blue-500" />
                          {req}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 text-header-glow">Learning Outcomes</h4>
                    <div className="space-y-2">
                      {selectedComprehensive.outcomes.map((outcome, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          {outcome}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Detailed Sections */}
                <div className="space-y-4">
                  <h4 className="font-semibold text-header-glow">Guide Sections</h4>
                  {selectedComprehensive.detailedSections?.map((section, i) => (
                    <div key={i} className="p-4 rounded-lg bg-muted/20 border border-border/30">
                      <div className="flex justify-between items-start mb-2">
                        <h5 className="font-medium">{section.title}</h5>
                        <Badge variant="outline" className="text-xs">{section.duration}</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">{section.content}</p>
                    </div>
                  ))}
                </div>

                <div className="flex gap-4 pt-4 border-t border-border/50">
                  <Button 
                    variant="outline" 
                    onClick={() => setIsComprehensiveDialogOpen(false)}
                    className="flex-1"
                  >
                    Close
                  </Button>
                  <Button variant="auburn" className="flex-1">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Access Full Guide
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default EnhancedGuidesSection;