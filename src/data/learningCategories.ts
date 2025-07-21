import { Target, TrendingUp, BookOpen, LucideIcon } from 'lucide-react';

export interface LearningArea {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  action: string;
  href: string;
}

export interface LearningCategory {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  trackCount: number;
  level: string;
  tracks: LearningArea[];
}

/**
 * Learning categories with their associated tracks
 */
export const LEARNING_CATEGORIES: LearningCategory[] = [
  {
    id: 'hastra',
    icon: Target,
    title: 'Hastra',
    description: 'Master our platform, YIELD and HASH tokens, and the Provenance ecosystem.',
    trackCount: 1,
    level: 'Beginner',
    tracks: [
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
        action: "Start Track",
        href: "#"
      }
    ]
  },
  {
    id: 'defi',
    icon: TrendingUp,
    title: 'DeFi',
    description: 'Learn decentralized finance from basics to advanced strategies and mastery.',
    trackCount: 2,
    level: 'All Levels',
    tracks: [
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
        action: "Start Track",
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
        action: "Start Track",
        href: "#"
      }
    ]
  },
  {
    id: 'crypto',
    icon: BookOpen,
    title: 'Crypto',
    description: 'Fundamental blockchain and cryptocurrency concepts for complete beginners.',
    trackCount: 3,
    level: 'Beginner',
    tracks: [
      {
        icon: BookOpen,
        title: "Blockchain Fundamentals",
        description: "Understanding blockchain technology, cryptocurrencies, and how they work.",
        features: [
          "What is blockchain technology",
          "How cryptocurrencies work",
          "Public vs private keys",
          "Transaction mechanics"
        ],
        action: "Start Track",
        href: "#"
      },
      {
        icon: Target,
        title: "Wallet Security Essentials",
        description: "Complete guide to securing your crypto assets and avoiding common pitfalls.",
        features: [
          "Choosing the right wallet",
          "Security best practices",
          "Backup and recovery",
          "Avoiding scams and phishing"
        ],
        action: "Start Track",
        href: "#"
      },
      {
        icon: TrendingUp,
        title: "Trading Fundamentals",
        description: "Basic trading concepts, market analysis, and risk management for beginners.",
        features: [
          "Market basics and terminology",
          "Reading charts and indicators",
          "Risk management principles",
          "Creating a trading plan"
        ],
        action: "Start Track",
        href: "#"
      }
    ]
  }
];

/**
 * Constants for the learning section
 */
export const LEARNING_SECTION_CONTENT = {
  TITLE: "Choose Your Learning Path",
  SUBTITLE: "Select your area of interest to see relevant learning tracks",
  CTA_TEXT: "Ready to start earning on Hastra?",
  CTA_BUTTON: "Start Earning Now",
} as const;