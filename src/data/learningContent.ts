import { BookOpen, TrendingUp, Target, LucideIcon } from 'lucide-react';

export interface LearningArea {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  action: string;
  href: string;
}

/**
 * Learning tracks data for the SimpleLearningSection component
 */
export const LEARNING_AREAS: LearningArea[] = [
  {
    icon: BookOpen,
    title: "DeFi Basics",
    description: "Essential DeFi fundamentals, security practices, and best practices reference guide.",
    features: [
      "What is DeFi and how it works",
      "Security & privacy fundamentals",
      "Best practices reference guide",
      "Safe wallet management"
    ],
    action: "Start Track 1",
    href: "#"
  },
  {
    icon: TrendingUp,
    title: "Mastering DeFi",
    description: "Advanced DeFi concepts including lending pools, tokenomics, and risk assessment.",
    features: [
      "Understanding lending pools",
      "Interpreting tokenomics",
      "Risk & reward analysis",
      "Advanced DeFi strategies"
    ],
    action: "Start Track 2",
    href: "#"
  },
  {
    icon: Target,
    title: "Hastra for Dummies",
    description: "Complete guide to YIELD and HASH tokens within the Provenance ecosystem.",
    features: [
      "What is YIELD and how to use it",
      "Understanding the HASH token",
      "Strengthening Provenance ecosystem",
      "Platform-specific walkthroughs"
    ],
    action: "Start Track 3",
    href: "#"
  }
];

/**
 * Constants for the learning section
 */
export const LEARNING_SECTION_CONTENT = {
  TITLE: "Learning Tracks",
  SUBTITLE: "Master DeFi and the Provenance ecosystem with our structured learning paths",
  CTA_TEXT: "Ready to start earning on Hastra?",
  CTA_BUTTON: "Start Earning Now",
} as const;