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
    description: 'Master our platform, wYLDS and HASH tokens, and the Provenance ecosystem.',
    trackCount: 1,
    level: LEARNING_LEVELS.BEGINNER,
    tracks: [
      {
        icon: Target,
        title: "Hastra for Dummies",
        description: "Complete guide to wYLDS and HASH tokens within the Provenance ecosystem.",
        articles: [
          {
            title: "What is wYLDS and how to use it",
            description: "Complete overview of wYLDS tokens, their purpose, and practical usage within the Provenance ecosystem.",
            readTime: "8 min read",
            difficulty: "Beginner"
          },
          {
            title: "Understanding the HASH token",
            description: "Deep dive into HASH token mechanics, utility, and role in the Hastra platform.",
            readTime: "6 min read", 
            difficulty: "Beginner"
          },
          {
            title: "Strengthening Provenance ecosystem",
            description: "How wYLDS and HASH tokens contribute to and strengthen the broader Provenance blockchain ecosystem.",
            readTime: "10 min read",
            difficulty: "Intermediate"
          },
          {
            title: "Platform-specific walkthroughs",
            description: "Step-by-step guides for using Hastra platform features and token interactions.",
            readTime: "12 min read",
            difficulty: "Beginner"
          }
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
        articles: [
          {
            title: "What is DeFi and how it works",
            description: "Introduction to decentralized finance concepts, protocols, and how they differ from traditional finance.",
            readTime: "10 min read",
            difficulty: "Beginner"
          },
          {
            title: "Security & privacy fundamentals",
            description: "Essential security practices for safe DeFi participation, including wallet security and privacy protection.",
            readTime: "8 min read",
            difficulty: "Beginner"
          },
          {
            title: "Best practices reference guide",
            description: "Comprehensive checklist and guidelines for safe DeFi interactions and portfolio management.",
            readTime: "6 min read",
            difficulty: "Beginner"
          },
          {
            title: "Safe wallet management",
            description: "Complete guide to choosing, setting up, and securing your crypto wallet for DeFi use.",
            readTime: "12 min read",
            difficulty: "Beginner"
          }
        ],
        action: TRACK_ACTIONS.START,
        href: "#"
      },
      {
        icon: TrendingUp,
        title: "Mastering DeFi",
        description: "Advanced DeFi concepts including lending pools, tokenomics, and risk assessment.",
        articles: [
          {
            title: "Understanding lending pools",
            description: "How DeFi lending protocols work, including liquidity pools, interest rates, and yield farming strategies.",
            readTime: "15 min read",
            difficulty: "Advanced"
          },
          {
            title: "Interpreting tokenomics",
            description: "Learn to analyze token economics, supply mechanisms, governance models, and value accrual methods.",
            readTime: "12 min read",
            difficulty: "Advanced"
          },
          {
            title: "Risk & reward analysis",
            description: "Framework for evaluating DeFi opportunities, including smart contract risks and impermanent loss.",
            readTime: "10 min read",
            difficulty: "Intermediate"
          },
          {
            title: "Advanced DeFi strategies",
            description: "Complex strategies including arbitrage, leveraged yield farming, and cross-chain opportunities.",
            readTime: "18 min read",
            difficulty: "Advanced"
          }
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
        articles: [
          {
            title: "What is blockchain technology",
            description: "Fundamental concepts of blockchain, including distributed ledgers, consensus mechanisms, and decentralization.",
            readTime: "12 min read",
            difficulty: "Beginner"
          },
          {
            title: "How cryptocurrencies work",
            description: "Understanding digital currencies, mining, transactions, and the role of blockchain in cryptocurrency.",
            readTime: "10 min read",
            difficulty: "Beginner"
          },
          {
            title: "Public vs private keys",
            description: "Cryptographic fundamentals explaining key pairs, digital signatures, and wallet address generation.",
            readTime: "8 min read",
            difficulty: "Beginner"
          },
          {
            title: "Transaction mechanics",
            description: "How blockchain transactions work from initiation to confirmation, including fees and block validation.",
            readTime: "9 min read",
            difficulty: "Beginner"
          }
        ],
        action: TRACK_ACTIONS.START,
        href: "#"
      },
      {
        icon: Target,
        title: "Wallet Security Essentials",
        description: "Complete guide to securing your crypto assets and avoiding common pitfalls.",
        articles: [
          {
            title: "Choosing the right wallet",
            description: "Comparison of hardware, software, and mobile wallets with security and usability considerations.",
            readTime: "7 min read",
            difficulty: "Beginner"
          },
          {
            title: "Security best practices",
            description: "Essential security measures including 2FA, password management, and safe browsing habits.",
            readTime: "10 min read",
            difficulty: "Beginner"
          },
          {
            title: "Backup and recovery",
            description: "How to properly backup seed phrases, recovery procedures, and multiple backup strategies.",
            readTime: "8 min read",
            difficulty: "Beginner"
          },
          {
            title: "Avoiding scams and phishing",
            description: "Recognizing common crypto scams, phishing attempts, and protecting yourself from fraud.",
            readTime: "9 min read",
            difficulty: "Beginner"
          }
        ],
        action: TRACK_ACTIONS.START,
        href: "#"
      },
      {
        icon: TrendingUp,
        title: "Trading Fundamentals",
        description: "Basic trading concepts, market analysis, and risk management for beginners.",
        articles: [
          {
            title: "Market basics and terminology",
            description: "Essential trading terms, market concepts, and understanding different types of cryptocurrency markets.",
            readTime: "11 min read",
            difficulty: "Beginner"
          },
          {
            title: "Reading charts and indicators",
            description: "Technical analysis fundamentals including candlestick patterns, support/resistance, and key indicators.",
            readTime: "14 min read",
            difficulty: "Intermediate"
          },
          {
            title: "Risk management principles",
            description: "Position sizing, stop-losses, diversification, and emotional control in cryptocurrency trading.",
            readTime: "12 min read",
            difficulty: "Intermediate"
          },
          {
            title: "Creating a trading plan",
            description: "Step-by-step guide to developing a personal trading strategy, setting goals, and tracking performance.",
            readTime: "10 min read",
            difficulty: "Beginner"
          }
        ],
        action: TRACK_ACTIONS.START,
        href: "#"
      }
    ]
  }
];
