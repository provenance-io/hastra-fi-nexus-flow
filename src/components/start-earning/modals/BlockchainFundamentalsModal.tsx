import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BookOpen, Shield, Play, ArrowRight, ExternalLink, Target } from 'lucide-react';

interface BlockchainFundamentalsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

/**
 * Lesson card component for Blockchain Fundamentals
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
  level: 'Beginner';
  topics: string[];
}) => (
  <Card className="group hover:shadow-lg transition-all duration-300 hover:border-header-glow/40">
    <CardHeader className="pb-3">
      <div className="flex items-start justify-between mb-2">
        <Badge variant="secondary" className="mb-2">
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
 * Blockchain Fundamentals Modal - Complete introduction to blockchain and crypto
 */
const BlockchainFundamentalsModal = ({ isOpen, onClose }: BlockchainFundamentalsModalProps) => {
  const lessons = [
    {
      title: "What is Blockchain?",
      description: "Complete introduction to blockchain technology, how it works, and why it matters.",
      duration: "15 min",
      level: "Beginner" as const,
      topics: [
        "Blockchain definition and purpose",
        "How blocks and chains work",
        "Decentralization concepts",
        "Real-world blockchain applications"
      ]
    },
    {
      title: "Understanding Cryptocurrencies",
      description: "Learn what cryptocurrencies are, how they differ from traditional money, and their key features.",
      duration: "18 min",
      level: "Beginner" as const,
      topics: [
        "What are cryptocurrencies",
        "Digital scarcity and value",
        "Major cryptocurrencies overview",
        "Crypto vs traditional currency"
      ]
    },
    {
      title: "Keys, Addresses & Transactions",
      description: "Master the fundamentals of how crypto transactions work and the role of public/private keys.",
      duration: "20 min",
      level: "Beginner" as const,
      topics: [
        "Public and private key basics",
        "How wallet addresses work",
        "Transaction process explained",
        "Digital signatures and verification"
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
                  Blockchain Fundamentals
                </DialogTitle>
                <p className="text-muted-foreground mt-1">
                  Essential blockchain and cryptocurrency concepts
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
              <div className="text-2xl font-bold text-header-glow">53min</div>
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
              <Target className="w-5 h-5 text-header-glow" />
              Your Blockchain Journey
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Start from the very beginning with blockchain and cryptocurrency fundamentals. 
              Perfect for complete beginners who want to understand the technology behind 
              digital assets before diving into DeFi or platform-specific features.
            </p>
          </div>

          {/* Lessons Grid */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold flex items-center gap-2">
              <Shield className="w-5 h-5 text-header-glow" />
              Foundation Lessons
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
                    <span>No prior crypto knowledge needed</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1 h-1 rounded-full bg-header-glow mt-2 flex-shrink-0" />
                    <span>Basic computer literacy</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1 h-1 rounded-full bg-header-glow mt-2 flex-shrink-0" />
                    <span>Curiosity about new technology</span>
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
                    <span>Wallet Security Essentials</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1 h-1 rounded-full bg-header-glow mt-2 flex-shrink-0" />
                    <span>DeFi Basics track</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1 h-1 rounded-full bg-header-glow mt-2 flex-shrink-0" />
                    <span>Trading Fundamentals</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1 h-1 rounded-full bg-header-glow mt-2 flex-shrink-0" />
                    <span>Hastra platform mastery</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t">
            <Button size="lg" className="flex-1 group">
              Start Learning Blockchain
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

export default BlockchainFundamentalsModal;