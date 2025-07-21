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
 * Learning areas data for the SimpleLearningSection component
 */
export const LEARNING_AREAS: LearningArea[] = [
  {
    icon: BookOpen,
    title: "DeFi Basics",
    description: "Learn the fundamentals of decentralized finance, from wallets to yield farming.",
    features: [
      "Wallet setup and security",
      "Understanding APY and yields",
      "DeFi vs traditional finance",
      "Risk management basics"
    ],
    action: "Start Learning",
    href: "#"
  },
  {
    icon: TrendingUp,
    title: "Platform Guides",
    description: "Step-by-step guides for using YIELD and HOMES tokens effectively.",
    features: [
      "How to buy YIELD tokens",
      "HOMES token explained",
      "Platform navigation",
      "Transaction walkthroughs"
    ],
    action: "View Guides",
    href: "#"
  },
  {
    icon: Target,
    title: "Advanced Strategies",
    description: "Optimize your returns with advanced DeFi strategies and portfolio management.",
    features: [
      "Portfolio diversification",
      "Yield optimization",
      "Risk assessment tools",
      "Market analysis basics"
    ],
    action: "Learn Advanced",
    href: "#"
  }
];

/**
 * Constants for the learning section
 */
export const LEARNING_SECTION_CONTENT = {
  TITLE: "Learning Resources",
  SUBTITLE: "Everything you need to master DeFi and start earning with confidence",
  CTA_TEXT: "Ready to put your knowledge into practice?",
  CTA_BUTTON: "Start Earning Now",
} as const;