import { Target, TrendingUp, BookOpen } from 'lucide-react';
import { LearningCategory } from '@/types/learning';
import { TRACK_ACTIONS, LEARNING_LEVELS } from '@/constants/learning';

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
    level: LEARNING_LEVELS.BEGINNER,
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
        action: TRACK_ACTIONS.START,
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
    level: LEARNING_LEVELS.ALL_LEVELS,
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
        action: TRACK_ACTIONS.START,
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
        action: TRACK_ACTIONS.START,
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
    level: LEARNING_LEVELS.BEGINNER,
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
        action: TRACK_ACTIONS.START,
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
        action: TRACK_ACTIONS.START,
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
        action: TRACK_ACTIONS.START,
        href: "#"
      }
    ]
  }
];
