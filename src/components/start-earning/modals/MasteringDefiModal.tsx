import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, BarChart3, Play, ArrowRight, ExternalLink, Target, AlertTriangle } from 'lucide-react';

interface MasteringDefiModalProps {
  isOpen: boolean;
  onClose: () => void;
}

/**
 * Lesson card component for Mastering DeFi
 */
const LessonCard = ({ 
  title, 
  description, 
  duration, 
  level, 
  topics 
}: {
  title: string;
  description: string;
  duration: string;
  level: 'Intermediate' | 'Advanced';
  topics: string[];
}) => (
  <Card className="group hover:shadow-lg transition-all duration-300 hover:border-header-glow/40">
    <CardHeader className="pb-3">
      <div className="flex items-start justify-between mb-2">
        <Badge variant={level === 'Intermediate' ? 'secondary' : 'outline'} className="mb-2">
          {level}
        </Badge>
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
          <h4 className="text-sm font-medium mb-2 text-foreground/90">What you'll master:</h4>
          <ul className="space-y-1">
            {topics.map((topic, index) => (
              <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                <div className="w-1 h-1 rounded-full bg-header-glow mt-2 flex-shrink-0" />
                <span>{topic}</span>
              </li>
            ))}
          </ul>
        </div>
        <Button size="sm" className="w-full group/btn" variant="secondary">
          Start Lesson
          <Play className="ml-2 h-3 w-3 transition-transform group-hover/btn:scale-110" />
        </Button>
      </div>
    </CardContent>
  </Card>
);

/**
 * Track 2: Mastering DeFi Modal - Advanced DeFi concepts and strategies
 */
const MasteringDefiModal = ({ isOpen, onClose }: MasteringDefiModalProps) => {
  const lessons = [
    {
      title: "Understanding Lending Pools",
      description: "Deep dive into how lending pools work, their mechanics, and how to participate safely and profitably.",
      duration: "20 min",
      level: "Intermediate" as const,
      topics: [
        "How lending pools generate yield",
        "Borrowing vs lending strategies",
        "Pool selection criteria",
        "Understanding liquidation risks"
      ]
    },
    {
      title: "Interpreting Tokenomics",
      description: "Master the art of analyzing token economics to make informed investment decisions.",
      duration: "25 min",
      level: "Intermediate" as const,
      topics: [
        "Token distribution analysis",
        "Utility and value accrual mechanisms",
        "Inflation and deflation models",
        "Governance token evaluation"
      ]
    },
    {
      title: "Risk & Reward Analysis",
      description: "Advanced frameworks for evaluating and managing risk-reward ratios in DeFi investments.",
      duration: "22 min",
      level: "Advanced" as const,
      topics: [
        "Advanced risk assessment models",
        "Correlation and diversification strategies",
        "Yield sustainability analysis",
        "Portfolio optimization techniques"
      ]
    }
  ];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto p-0">
        {/* Header Section */}
        <div className="relative bg-gradient-to-br from-header-glow/10 to-crypto-accent/10 p-8 border-b">
          <DialogHeader className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-header-glow/20 to-crypto-accent/20 flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-header-glow" />
              </div>
              <div>
                <DialogTitle className="text-3xl font-bold text-gradient">
                  Track 2: Mastering DeFi
                </DialogTitle>
                <p className="text-muted-foreground mt-1">
                  Advanced DeFi concepts and strategic thinking
                </p>
              </div>
            </div>
          </DialogHeader>
          
          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-4 mt-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-header-glow">3</div>
              <div className="text-sm text-muted-foreground">Lessons</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-header-glow">67min</div>
              <div className="text-sm text-muted-foreground">Total Time</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-header-glow">Intermediate</div>
              <div className="text-sm text-muted-foreground">Level</div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-8 space-y-8">
          {/* Learning Path Overview */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold flex items-center gap-2">
              <BarChart3 className="w-5 h-5 text-header-glow" />
              Advanced DeFi Mastery
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Take your DeFi knowledge to the next level with intermediate and advanced concepts. 
              Master lending pools, learn to interpret tokenomics like a pro, and develop sophisticated 
              risk assessment skills that will set you apart from casual DeFi users.
            </p>
          </div>

          {/* Prerequisites Notice */}
          <Card className="border-blue-500/20 bg-blue-500/5">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center gap-2 text-blue-700">
                <Target className="w-5 h-5" />
                Prerequisites
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-blue-700/90 leading-relaxed">
                Complete Track 1: DeFi Basics before starting this track. You should be comfortable 
                with wallet management, basic DeFi concepts, and have some hands-on DeFi experience.
              </p>
            </CardContent>
          </Card>

          {/* Lessons Grid */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-header-glow" />
              Advanced Lessons
            </h3>
            <div className="grid gap-4">
              {lessons.map((lesson, index) => (
                <LessonCard key={index} {...lesson} />
              ))}
            </div>
          </div>

          {/* What You'll Gain */}
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-header-glow/20">
              <CardHeader>
                <CardTitle className="text-lg">Skills You'll Develop</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-1 h-1 rounded-full bg-header-glow mt-2 flex-shrink-0" />
                    <span>Advanced protocol analysis</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1 h-1 rounded-full bg-header-glow mt-2 flex-shrink-0" />
                    <span>Risk-adjusted decision making</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1 h-1 rounded-full bg-header-glow mt-2 flex-shrink-0" />
                    <span>Tokenomics evaluation expertise</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1 h-1 rounded-full bg-header-glow mt-2 flex-shrink-0" />
                    <span>Strategic portfolio construction</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-header-glow/20">
              <CardHeader>
                <CardTitle className="text-lg">Next Steps</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-1 h-1 rounded-full bg-header-glow mt-2 flex-shrink-0" />
                    <span>Apply skills to Hastra platform</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1 h-1 rounded-full bg-header-glow mt-2 flex-shrink-0" />
                    <span>Explore wYLDS and HASH tokens</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1 h-1 rounded-full bg-header-glow mt-2 flex-shrink-0" />
                    <span>Join the Provenance ecosystem</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1 h-1 rounded-full bg-header-glow mt-2 flex-shrink-0" />
                    <span>Start earning advanced yields</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t">
            <Button size="lg" className="flex-1 group">
              Start Mastering DeFi
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline" className="flex-1 group" asChild>
              <a href="/earn">
                Apply Knowledge
                <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:scale-110" />
              </a>
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default MasteringDefiModal;