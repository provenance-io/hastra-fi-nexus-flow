import { memo } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  BookOpen,
  Shield,
  TrendingUp,
  ArrowRight,
  Play,
  ExternalLink,
} from "lucide-react";
import { LearningModalProps } from "@/types/learning";

/**
 * Lesson data interface for better type safety
 */
interface LessonData {
  title: string;
  description: string;
  duration: string;
  level: "Beginner" | "Intermediate";
  topics: string[];
}

/**
 * Lesson card component for DeFi basics
 * Memoized for performance optimization
 */
const LessonCard = memo<LessonData>(
  ({ title, description, duration, level, topics }) => (
    <Card className="group hover:shadow-lg transition-all duration-300 hover:border-header-glow/40">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between mb-2">
          <Badge
            variant={level === "Beginner" ? "secondary" : "outline"}
            className="mb-2"
          >
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
            <h4 className="text-sm font-medium mb-2 text-foreground/90">
              What you'll learn:
            </h4>
            <ul className="space-y-1">
              {topics.map((topic, index) => (
                <li
                  key={index}
                  className="flex items-start gap-2 text-sm text-muted-foreground"
                >
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
  )
);

LessonCard.displayName = "LessonCard";

/**
 * Track 1: DeFi Basics Modal - Essential fundamentals for DeFi understanding
 * Memoized to prevent unnecessary re-renders
 */
const DefiBasiscsModal = memo<LearningModalProps>(({ isOpen, onClose }) => {
  const lessons: LessonData[] = [
    {
      title: "What is DeFi?",
      description:
        "Complete introduction to decentralized finance, its core principles and how it differs from traditional banking.",
      duration: "12 min",
      level: "Beginner" as const,
      topics: [
        "Definition and core principles of DeFi",
        "DeFi vs Traditional Finance comparison",
        "Key benefits and potential risks",
        "Overview of popular DeFi applications",
      ],
    },
    {
      title: "Security & Privacy Fundamentals",
      description:
        "Essential security practices and privacy considerations for safe DeFi participation.",
      duration: "18 min",
      level: "Beginner" as const,
      topics: [
        "Wallet security best practices",
        "Private key management",
        "Recognizing and avoiding scams",
        "Privacy protection strategies",
      ],
    },
    {
      title: "Best Practices Reference Guide",
      description:
        "Comprehensive reference guide covering all essential DeFi best practices and safety guidelines.",
      duration: "15 min",
      level: "Beginner" as const,
      topics: [
        "Transaction safety checklist",
        "Smart contract interaction guidelines",
        "Portfolio management basics",
        "Emergency procedures and recovery",
      ],
    },
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
                  Track 1: DeFi Basics
                </DialogTitle>
                <p className="text-muted-foreground mt-1">
                  Essential fundamentals for understanding DeFi
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
              <div className="text-2xl font-bold text-header-glow">45min</div>
              <div className="text-sm text-muted-foreground">Total Time</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-header-glow">
                Beginner
              </div>
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
              Build a solid foundation in DeFi with our essential basics track.
              You'll learn what DeFi actually is, how to stay secure, and get a
              comprehensive best practices reference guide. Perfect for complete
              beginners who want to understand DeFi safely before diving deeper.
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
                    <span>
                      Willingness to learn (no prior DeFi experience needed)
                    </span>
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
                    <span>Platform-specific guides for wYLDS and sPRIME</span>
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
            <Button
              size="lg"
              variant="outline"
              className="flex-1 group"
              asChild
            >
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
});

DefiBasiscsModal.displayName = "DefiBasiscsModal";

export default DefiBasiscsModal;
