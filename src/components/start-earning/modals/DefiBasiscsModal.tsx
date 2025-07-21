import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BookOpen, Shield, TrendingUp, ArrowRight, Play, ExternalLink } from 'lucide-react';

interface DefiBasiscsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

/**
 * Lesson card component for DeFi basics
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
  level: 'Beginner' | 'Intermediate';
  topics: string[];
}) => (
  <Card className="group hover:shadow-lg transition-all duration-300 hover:border-header-glow/40">
    <CardHeader className="pb-3">
      <div className="flex items-start justify-between mb-2">
        <Badge variant={level === 'Beginner' ? 'secondary' : 'outline'} className="mb-2">
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
        <Button size="sm" className="w-full group/btn" variant="secondary">
          Start Lesson
          <Play className="ml-2 h-3 w-3 transition-transform group-hover/btn:scale-110" />
        </Button>
      </div>
    </CardContent>
  </Card>
);

/**
 * DeFi Basics Modal - Comprehensive introduction to decentralized finance
 */
const DefiBasiscsModal = ({ isOpen, onClose }: DefiBasiscsModalProps) => {
  const lessons = [
    {
      title: "What is DeFi?",
      description: "Understanding the fundamentals of decentralized finance and how it differs from traditional banking.",
      duration: "15 min",
      level: "Beginner" as const,
      topics: [
        "Definition and core principles",
        "DeFi vs Traditional Finance",
        "Key benefits and risks",
        "Popular DeFi applications"
      ]
    },
    {
      title: "Wallet Setup & Security",
      description: "Learn how to securely set up and manage your crypto wallet for DeFi interactions.",
      duration: "20 min",
      level: "Beginner" as const,
      topics: [
        "Choosing the right wallet",
        "Security best practices",
        "Private key management",
        "Backup and recovery"
      ]
    },
    {
      title: "Understanding APY & Yields",
      description: "Master the concepts of Annual Percentage Yield and how returns work in DeFi protocols.",
      duration: "18 min",
      level: "Intermediate" as const,
      topics: [
        "APY vs APR explained",
        "Compound interest mechanics",
        "Yield farming basics",
        "Risk-return calculations"
      ]
    },
    {
      title: "Risk Management Fundamentals",
      description: "Essential strategies for managing and minimizing risks in DeFi investments.",
      duration: "25 min",
      level: "Intermediate" as const,
      topics: [
        "Types of DeFi risks",
        "Portfolio diversification",
        "Smart contract audits",
        "Exit strategies"
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
                <BookOpen className="w-6 h-6 text-header-glow" />
              </div>
              <div>
                <DialogTitle className="text-3xl font-bold text-gradient">
                  DeFi Basics
                </DialogTitle>
                <p className="text-muted-foreground mt-1">
                  Master the fundamentals of decentralized finance
                </p>
              </div>
            </div>
          </DialogHeader>
          
          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-4 mt-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-header-glow">4</div>
              <div className="text-sm text-muted-foreground">Lessons</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-header-glow">78min</div>
              <div className="text-sm text-muted-foreground">Total Time</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-header-glow">Beginner</div>
              <div className="text-sm text-muted-foreground">Level</div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-8 space-y-8">
          {/* Learning Path Overview */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-header-glow" />
              Your Learning Path
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Start your DeFi journey with our comprehensive basics course. You'll learn everything from 
              setting up your first wallet to understanding yield generation and managing risks. Perfect 
              for complete beginners who want to enter the DeFi space safely and confidently.
            </p>
          </div>

          {/* Lessons Grid */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold flex items-center gap-2">
              <Shield className="w-5 h-5 text-header-glow" />
              Course Lessons
            </h3>
            <div className="grid gap-4">
              {lessons.map((lesson, index) => (
                <LessonCard key={index} {...lesson} />
              ))}
            </div>
          </div>

          {/* Prerequisites & Next Steps */}
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-header-glow/20">
              <CardHeader>
                <CardTitle className="text-lg">Prerequisites</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-1 h-1 rounded-full bg-header-glow mt-2 flex-shrink-0" />
                    <span>Basic understanding of cryptocurrencies</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1 h-1 rounded-full bg-header-glow mt-2 flex-shrink-0" />
                    <span>Computer or mobile device with internet</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1 h-1 rounded-full bg-header-glow mt-2 flex-shrink-0" />
                    <span>Willingness to learn (no prior DeFi experience needed)</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-header-glow/20">
              <CardHeader>
                <CardTitle className="text-lg">What's Next?</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-1 h-1 rounded-full bg-header-glow mt-2 flex-shrink-0" />
                    <span>Platform-specific guides for YIELD and HOMES</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1 h-1 rounded-full bg-header-glow mt-2 flex-shrink-0" />
                    <span>Advanced DeFi strategies and optimization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1 h-1 rounded-full bg-header-glow mt-2 flex-shrink-0" />
                    <span>Start earning with real DeFi protocols</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t">
            <Button size="lg" className="flex-1 group">
              Start Learning Now
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline" className="flex-1 group" asChild>
              <a href="/earn">
                Skip to Earning
                <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:scale-110" />
              </a>
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DefiBasiscsModal;