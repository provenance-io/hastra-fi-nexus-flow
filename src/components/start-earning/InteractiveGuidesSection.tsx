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
  ArrowRight,
  Play,
  BookOpen,
  ExternalLink,
  Lightbulb,
  CheckCircle,
  Clock,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const quickTips = [
  {
    id: 1,
    title: "Bridge HASH to SOL-HASH",
    description: "Quick tip for bridging tokens via Figure Markets",
    type: "tip",
    content: [
      "Connect wallet to Figure Markets",
      "Select HASH → SOL-HASH",
      "Confirm transaction and wait 5-10 minutes",
    ],
  },
  {
    id: 2,
    title: "First Liquidity Pool",
    description: "Essential steps for your first LP position",
    type: "tip",
    content: [
      "Start with stablecoin pairs (lower risk)",
      "Understand impermanent loss",
      "Monitor pool performance daily",
    ],
  },
  {
    id: 3,
    title: "Portfolio Safety",
    description: "Key security practices for DeFi",
    type: "tip",
    content: [
      "Never share private keys",
      "Use hardware wallets for large amounts",
      "Verify contract addresses before interacting",
    ],
  },
];

const comprehensiveGuides = [
  {
    id: 1,
    title: "Complete Raydium Guide",
    description: "Master liquidity provision on Solana's leading AMM",
    difficulty: "Intermediate",
    duration: "25 min read",
    videoTime: "18:30",
    hasVideo: true,
    sections: 8,
    type: "comprehensive",
    icon: ArrowRight,
    route: "/guides/raydium-complete",
  },
  {
    id: 2,
    title: "Kamino Lending Mastery",
    description: "Advanced strategies for lending and borrowing",
    difficulty: "Advanced",
    duration: "35 min read",
    videoTime: "24:15",
    hasVideo: true,
    sections: 12,
    type: "comprehensive",
    icon: BookOpen,
    route: "/guides/kamino-mastery",
  },
  {
    id: 3,
    title: "sPRIME Staking Investment",
    description: "Real World Asset pools and yield optimization",
    difficulty: "Intermediate",
    duration: "20 min read",
    videoTime: "15:45",
    hasVideo: true,
    sections: 6,
    type: "comprehensive",
    icon: ExternalLink,
    route: "/guides/sylds-staking",
  },
];

const difficultyColors = {
  Beginner: "bg-green-500/20 border-green-500/30 text-green-300",
  Intermediate: "bg-blue-500/20 border-blue-500/30 text-blue-300",
  Advanced: "bg-purple-500/20 border-purple-500/30 text-purple-300",
};

const InteractiveGuidesSection = () => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("quick");

  const showQuickTip = (tip: (typeof quickTips)[0]) => {
    toast({
      title: tip.title,
      description: (
        <div className="space-y-2">
          <p className="text-sm text-muted-foreground mb-3">
            {tip.description}
          </p>
          <ol className="space-y-1">
            {tip.content.map((step, index) => (
              <li key={index} className="flex items-start gap-2 text-sm">
                <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                {step}
              </li>
            ))}
          </ol>
        </div>
      ),
      duration: 10000,
    });
  };

  const openFullGuide = (guide: (typeof comprehensiveGuides)[0]) => {
    // This would navigate to a full guide page
    toast({
      title: "Opening Full Guide",
      description: `${guide.title} - Complete tutorial with video and interactive elements`,
      duration: 3000,
    });
  };

  return (
    <section className="py-20 md:py-32 bg-gradient-to-r from-header-glow/5 to-crypto-accent/5">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Interactive Learning Guides
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Quick tips for instant help or comprehensive guides for deep
            learning
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-2 glass-effect mb-8">
              <TabsTrigger value="quick" className="text-sm">
                <Lightbulb className="w-4 h-4 mr-2" />
                Quick Tips & Shortcuts
              </TabsTrigger>
              <TabsTrigger value="comprehensive" className="text-sm">
                <BookOpen className="w-4 h-4 mr-2" />
                Comprehensive Guides
              </TabsTrigger>
            </TabsList>

            <TabsContent value="quick">
              <div className="grid md:grid-cols-3 gap-6">
                {quickTips.map((tip) => (
                  <Card
                    key={tip.id}
                    className="glass-effect border-border/50 hover:border-header-glow/30 transition-all duration-300 group cursor-pointer"
                  >
                    <CardHeader>
                      <div className="flex items-center gap-2 mb-2">
                        <Lightbulb className="w-5 h-5 text-yellow-400" />
                        <Badge variant="outline" className="text-xs">
                          Quick Tip
                        </Badge>
                      </div>
                      <CardTitle className="text-lg">{tip.title}</CardTitle>
                      <CardDescription>{tip.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button
                        onClick={() => showQuickTip(tip)}
                        className="w-full group-hover:bg-header-glow/20 transition-colors"
                        variant="outline"
                      >
                        Show Quick Tip
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="comprehensive">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {comprehensiveGuides.map((guide) => (
                  <Card
                    key={guide.id}
                    className="glass-effect border-border/50 hover:border-header-glow/30 transition-all duration-300 group"
                  >
                    <CardHeader>
                      <div className="flex items-center justify-between mb-3">
                        <Badge
                          className={
                            difficultyColors[
                              guide.difficulty as keyof typeof difficultyColors
                            ]
                          }
                        >
                          {guide.difficulty}
                        </Badge>
                        {guide.hasVideo && (
                          <div className="flex items-center gap-1 text-sm text-muted-foreground">
                            <Play className="w-4 h-4" />
                            {guide.videoTime}
                          </div>
                        )}
                      </div>
                      <CardTitle className="text-xl flex items-center gap-2">
                        <guide.icon className="w-5 h-5 text-header-glow" />
                        {guide.title}
                      </CardTitle>
                      <CardDescription>{guide.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between text-sm text-muted-foreground">
                          <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4" />
                            {guide.duration}
                          </div>
                          <span>{guide.sections} sections</span>
                        </div>

                        <div className="flex gap-2">
                          {guide.hasVideo && (
                            <Button
                              size="sm"
                              variant="outline"
                              className="flex-1"
                            >
                              <Play className="mr-2 h-4 w-4" />
                              Watch
                            </Button>
                          )}
                          <Button
                            size="sm"
                            className="flex-1 btn-gradient"
                            onClick={() => openFullGuide(guide)}
                          >
                            Read Guide
                            <ExternalLink className="ml-2 h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>

          {/* Learning Progress Indicator */}
          <Card className="glass-effect border-border/50 mt-12">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    Track Your Learning Progress
                  </h3>
                  <p className="text-muted-foreground">
                    Complete guides to unlock advanced strategies and earn
                    learning badges
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-header-glow">
                      5/18
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Completed
                    </div>
                  </div>
                  <Button className="btn-gradient">
                    View Progress
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default InteractiveGuidesSection;
