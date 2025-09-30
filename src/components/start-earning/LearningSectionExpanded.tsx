import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  ArrowRight,
  Play,
  BookOpen,
  Clock,
  CheckCircle,
  Lightbulb,
  Users,
  TrendingUp,
  Target,
  X,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const quickStarters = [
  {
    id: 1,
    title: "DeFi Safety First",
    description: "Essential security practices before you start investing",
    duration: "5 min read",
    difficulty: "Essential",
    icon: CheckCircle,
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop",
    topics: [
      "Wallet security fundamentals",
      "Identifying common scams",
      "Transaction verification",
      "Smart contract risks",
    ],
    content: {
      intro:
        "Before diving into DeFi, protecting your assets is paramount. This guide covers essential security practices every DeFi participant must know.",
      keyPoints: [
        "Never share your private keys or seed phrases with anyone",
        "Always verify contract addresses before transactions",
        "Use hardware wallets for large amounts",
        "Be wary of 'too good to be true' APY offers",
        "Double-check URLs and watch for phishing sites",
      ],
    },
  },
  {
    id: 2,
    title: "Your First $100",
    description: "Complete walkthrough for your first DeFi investment",
    duration: "12 min read",
    difficulty: "Beginner",
    icon: Target,
    image:
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop",
    topics: [
      "Platform selection",
      "Risk assessment",
      "Token purchase",
      "Yield strategies",
    ],
    content: {
      intro:
        "Start your DeFi journey with confidence. This step-by-step guide walks you through making your first $100 investment safely and strategically.",
      keyPoints: [
        "Start with established platforms like Raydium or Kamino",
        "Consider PRIME token for stable, consistent returns",
        "Diversify across 2-3 different strategies initially",
        "Set aside funds for transaction fees (usually $1-5)",
        "Track your positions and understand how to exit",
      ],
    },
  },
  {
    id: 3,
    title: "Understanding APY",
    description: "Master yield calculations and return expectations",
    duration: "8 min read",
    difficulty: "Beginner",
    icon: TrendingUp,
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop",
    topics: [
      "APY calculations",
      "Compounding effects",
      "Risk vs reward",
      "Market factors",
    ],
    content: {
      intro:
        "APY (Annual Percentage Yield) determines your earnings potential. Learn how it works, what affects it, and how to calculate realistic returns.",
      keyPoints: [
        "APY includes compounding effects, APR does not",
        "High APY often means higher risk - assess carefully",
        "Market conditions can cause APY to fluctuate",
        "Factor in gas fees when calculating net returns",
        "Sustainable APY for stablecoins: 3-15% annually",
      ],
    },
  },
];

const comprehensiveGuides = [
  {
    id: 1,
    title: "HASH to SOL-HASH Bridge",
    description: "Complete guide to bridging tokens via Figure Markets",
    difficulty: "Intermediate",
    duration: "20 min read",
    videoTime: "12:30",
    hasVideo: true,
    sections: 6,
    icon: ArrowRight,
    steps: [
      "Connect your Provenance wallet to Figure Markets",
      "Navigate to the bridge section and verify the interface",
      "Select HASH as source token and SOL-HASH as destination",
      "Enter amount and review transaction fees",
      "Confirm transaction and monitor bridge status",
      "Verify SOL-HASH arrival in your Solana wallet",
    ],
  },
  {
    id: 2,
    title: "Raydium LP Strategies",
    description: "Master liquidity provision on Solana's leading AMM",
    difficulty: "Intermediate",
    duration: "25 min read",
    videoTime: "18:45",
    hasVideo: true,
    sections: 8,
    icon: Users,
    steps: [
      "Understanding impermanent loss and LP risks",
      "Choosing the right token pairs for your risk profile",
      "Setting up concentrated vs traditional liquidity",
      "Monitoring pool performance and analytics",
      "Claiming rewards and managing positions",
      "Advanced strategies for yield optimization",
    ],
  },
  {
    id: 3,
    title: "Kamino Lending Mastery",
    description: "Advanced lending and borrowing strategies",
    difficulty: "Advanced",
    duration: "30 min read",
    videoTime: "22:15",
    hasVideo: true,
    sections: 10,
    icon: TrendingUp,
    steps: [
      "Platform overview and automated strategies",
      "Deposit tokens into lending pools for passive income",
      "Understanding collateral ratios and liquidation risks",
      "Borrowing strategies for leveraged positions",
      "Using Kamino's automated strategies effectively",
      "Portfolio management and risk monitoring",
    ],
  },
];

const quickTips = [
  {
    title: "Start Small, Scale Smart",
    tip: "Begin with $50-100 to learn the ropes without risking significant capital. Once comfortable, gradually increase your position sizes based on your risk tolerance and experience level.",
    icon: Target,
    details:
      "Perfect for beginners who want to experience DeFi mechanics firsthand without major financial exposure.",
  },
  {
    title: "Diversify Across Strategies",
    tip: "Never put all your funds in one protocol, token, or strategy. Spread risk across lending, liquidity provision, and different tokens to protect against protocol failures or market volatility.",
    icon: Users,
    details:
      "Experienced DeFi users typically allocate funds across 3-5 different protocols and strategies.",
  },
  {
    title: "Verify Everything Twice",
    tip: "Always double-check contract addresses, transaction amounts, and recipient addresses before confirming any transaction. One wrong character can mean permanent loss of funds.",
    icon: CheckCircle,
    details:
      "Copy-paste addresses instead of typing them manually, and always verify on official websites.",
  },
  {
    title: "Understand Gas Fees",
    tip: "Solana's low fees make it ideal for DeFi, but always factor transaction costs into your profit calculations. High-frequency strategies need careful fee management.",
    icon: TrendingUp,
    details:
      "Typical Solana transaction fees range from $0.00025 to $0.01, making small transactions viable.",
  },
  {
    title: "Track Performance Actively",
    tip: "Monitor your positions regularly, set up alerts for significant changes, and have exit strategies ready. Markets can move quickly in DeFi.",
    icon: Lightbulb,
    details:
      "Use portfolio tracking tools and set price alerts to stay informed about your investments.",
  },
  {
    title: "Learn from Community",
    tip: "Join Discord communities, follow experienced DeFi users on Twitter, and participate in protocol governance. The community is your best learning resource.",
    icon: BookOpen,
    details:
      "Active communities often share alpha, warn about risks, and provide real-time market insights.",
  },
];

const difficultyColors = {
  Essential: "bg-red-500/20 border-red-500/30 text-red-300",
  Beginner: "bg-green-500/20 border-green-500/30 text-green-300",
  Intermediate: "bg-blue-500/20 border-blue-500/30 text-blue-300",
  Advanced: "bg-purple-500/20 border-purple-500/30 text-purple-300",
};

const LearningSectionExpanded = () => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("quick");
  const [expandedGuide, setExpandedGuide] = useState<number | null>(null);
  const [selectedGuide, setSelectedGuide] = useState<
    (typeof quickStarters)[0] | null
  >(null);
  const [isGuideDialogOpen, setIsGuideDialogOpen] = useState(false);

  const showQuickTip = (tip: (typeof quickTips)[0]) => {
    toast({
      title: tip.title,
      description: tip.tip,
      duration: 5000,
    });
  };

  const openFullGuide = (guide: (typeof comprehensiveGuides)[0]) => {
    toast({
      title: "Guide Available",
      description: `${guide.title} - ${guide.difficulty} level guide ready to read`,
      duration: 3000,
    });
  };

  const startReading = (starter: (typeof quickStarters)[0]) => {
    setSelectedGuide(starter);
    setIsGuideDialogOpen(true);
  };

  const closeGuideDialog = () => {
    setIsGuideDialogOpen(false);
    setSelectedGuide(null);
  };

  return (
    <section
      className="py-24 md:py-32 bg-gradient-to-br from-header-glow/5 via-background to-crypto-accent/5"
      data-section="learning"
    >
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-20">
          <Badge className="mb-6 bg-header-glow/20 border-header-glow/30 text-header-glow hover:bg-header-glow/30">
            <BookOpen className="w-4 h-4 mr-2" />
            Learn & Grow
          </Badge>

          <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-8">
            <span className="text-gradient">Master DeFi</span>
            <br />
            <span className="text-muted-foreground">Step by Step</span>
          </h2>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            From complete beginner to confident DeFi participant. Choose your
            learning path and progress at your own pace.
          </p>
        </div>

        {/* Learning Tabs */}
        <div className="max-w-7xl mx-auto">
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-3 glass-effect mb-12 max-w-2xl mx-auto">
              <TabsTrigger value="quick" className="text-sm">
                <Lightbulb className="w-4 h-4 mr-2" />
                Quick Start
              </TabsTrigger>
              <TabsTrigger
                value="comprehensive"
                className="text-sm"
                data-tab="comprehensive"
              >
                <BookOpen className="w-4 h-4 mr-2" />
                Full Guides
              </TabsTrigger>
              <TabsTrigger value="tips" className="text-sm">
                <Target className="w-4 h-4 mr-2" />
                Pro Tips
              </TabsTrigger>
            </TabsList>

            {/* Quick Start Tab */}
            <TabsContent value="quick">
              <div className="grid md:grid-cols-3 gap-8">
                {quickStarters.map((starter) => (
                  <Card
                    key={starter.id}
                    className="glass-effect border-border/50 hover:border-header-glow/30 transition-all duration-300 group overflow-hidden"
                  >
                    {/* Hero Image */}
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={starter.image}
                        alt={starter.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <Badge
                          className={
                            difficultyColors[
                              starter.difficulty as keyof typeof difficultyColors
                            ]
                          }
                        >
                          {starter.difficulty}
                        </Badge>
                      </div>
                    </div>

                    <CardHeader>
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <Clock className="w-4 h-4" />
                          {starter.duration}
                        </div>
                      </div>
                      <CardTitle className="text-xl flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-header-glow/10 flex items-center justify-center">
                          <starter.icon className="w-5 h-5 text-header-glow" />
                        </div>
                        {starter.title}
                      </CardTitle>
                      <CardDescription className="text-base">
                        {starter.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3 mb-6">
                        {starter.topics.map((topic, i) => (
                          <div
                            key={i}
                            className="flex items-center gap-2 text-sm text-muted-foreground"
                          >
                            <div className="w-2 h-2 bg-header-glow rounded-full"></div>
                            <span>{topic}</span>
                          </div>
                        ))}
                      </div>
                      <Button
                        className="w-full btn-gradient group-hover:shadow-lg transition-shadow"
                        onClick={() => startReading(starter)}
                      >
                        Read Guide
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Comprehensive Guides Tab */}
            <TabsContent value="comprehensive">
              <div className="space-y-8">
                {comprehensiveGuides.map((guide) => (
                  <Card
                    key={guide.id}
                    className="glass-effect border-border/50 hover:border-header-glow/30 transition-all duration-300"
                  >
                    <CardHeader>
                      <div className="flex items-center justify-between mb-4">
                        <Badge
                          className={
                            difficultyColors[
                              guide.difficulty as keyof typeof difficultyColors
                            ]
                          }
                        >
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
                          <span>{guide.sections} sections</span>
                        </div>
                      </div>
                      <CardTitle className="text-2xl flex items-center gap-3">
                        <div className="w-12 h-12 rounded-lg bg-header-glow/10 flex items-center justify-center">
                          <guide.icon className="w-6 h-6 text-header-glow" />
                        </div>
                        {guide.title}
                      </CardTitle>
                      <CardDescription className="text-base">
                        {guide.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {/* Guide Steps Preview */}
                        <div
                          className={`space-y-3 ${
                            expandedGuide === guide.id
                              ? ""
                              : "max-h-32 overflow-hidden"
                          } transition-all`}
                        >
                          {guide.steps.map((step, i) => (
                            <div key={i} className="flex items-start gap-3">
                              <div className="w-6 h-6 rounded-full bg-header-glow/20 flex items-center justify-center text-sm font-medium text-header-glow mt-0.5 flex-shrink-0">
                                {i + 1}
                              </div>
                              <span className="text-muted-foreground text-sm">
                                {step}
                              </span>
                            </div>
                          ))}
                        </div>

                        <div className="flex gap-3 pt-4">
                          <Button
                            variant="outline"
                            onClick={() =>
                              setExpandedGuide(
                                expandedGuide === guide.id ? null : guide.id
                              )
                            }
                            className="flex-1"
                          >
                            {expandedGuide === guide.id
                              ? "Show Less"
                              : "Preview Steps"}
                          </Button>
                          {guide.hasVideo && (
                            <Button size="sm" variant="outline">
                              <Play className="mr-2 h-4 w-4" />
                              Watch Video
                            </Button>
                          )}
                          <Button
                            className="flex-1 btn-gradient"
                            onClick={() => openFullGuide(guide)}
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

            {/* Pro Tips Tab */}
            <TabsContent value="tips">
              <div className="grid md:grid-cols-3 gap-8">
                {quickTips.map((tip, index) => (
                  <Card
                    key={index}
                    className="glass-effect border-border/50 hover:border-header-glow/30 transition-all duration-300 group cursor-pointer"
                  >
                    <CardContent className="p-8 text-center">
                      <div className="w-16 h-16 bg-header-glow/20 rounded-full flex items-center justify-center mx-auto mb-6">
                        <tip.icon className="w-8 h-8 text-header-glow" />
                      </div>
                      <h3 className="text-xl font-bold mb-4">{tip.title}</h3>
                      <p className="text-muted-foreground mb-6">{tip.tip}</p>
                      <Button
                        onClick={() => showQuickTip(tip)}
                        className="w-full group-hover:bg-header-glow/20 transition-colors"
                        variant="outline"
                      >
                        Save This Tip
                        <CheckCircle className="ml-2 h-4 w-4" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      {/* Guide Modal Dialog */}
      <Dialog open={isGuideDialogOpen} onOpenChange={setIsGuideDialogOpen}>
        <DialogContent className="glass-effect max-w-4xl max-h-[90vh] overflow-y-auto">
          {selectedGuide && (
            <>
              <DialogHeader className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-header-glow/20 flex items-center justify-center">
                      <selectedGuide.icon className="w-6 h-6 text-header-glow" />
                    </div>
                    <div>
                      <DialogTitle className="text-2xl font-bold text-left">
                        {selectedGuide.title}
                      </DialogTitle>
                      <div className="flex items-center gap-3 mt-2">
                        <Badge
                          className={
                            difficultyColors[
                              selectedGuide.difficulty as keyof typeof difficultyColors
                            ]
                          }
                        >
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

                <DialogDescription className="text-left text-lg leading-relaxed">
                  {selectedGuide.description}
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-8 mt-8">
                {/* Hero Image */}
                <div className="relative h-64 rounded-lg overflow-hidden">
                  <img
                    src={selectedGuide.image}
                    alt={selectedGuide.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
                </div>

                {/* Guide Introduction */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-header-glow" />
                    Introduction
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-base">
                    {selectedGuide.content.intro}
                  </p>
                </div>

                {/* Key Points */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-header-glow" />
                    Key Points
                  </h3>
                  <div className="space-y-4">
                    {selectedGuide.content.keyPoints.map((point, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-3 p-4 rounded-lg bg-muted/30 border border-border/50"
                      >
                        <div className="w-6 h-6 rounded-full bg-header-glow/20 flex items-center justify-center text-sm font-medium text-header-glow mt-0.5 flex-shrink-0">
                          {i + 1}
                        </div>
                        <span className="text-foreground leading-relaxed">
                          {point}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Topics Covered */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold flex items-center gap-2">
                    <Target className="w-5 h-5 text-header-glow" />
                    Topics Covered
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {selectedGuide.topics.map((topic, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-3 p-3 rounded-lg bg-muted/20 border border-border/30"
                      >
                        <div className="w-2 h-2 bg-header-glow rounded-full flex-shrink-0"></div>
                        <span className="text-foreground">{topic}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4 pt-6 border-t border-border/50">
                  <Button
                    variant="outline"
                    onClick={closeGuideDialog}
                    className="flex-1"
                  >
                    Close Guide
                  </Button>
                  <Button
                    className="flex-1 btn-gradient"
                    onClick={() => {
                      toast({
                        title: "Guide Bookmarked",
                        description: `${selectedGuide.title} has been saved to your reading list`,
                        duration: 3000,
                      });
                    }}
                  >
                    <CheckCircle className="mr-2 h-4 w-4" />
                    Bookmark Guide
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

export default LearningSectionExpanded;
