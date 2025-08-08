import { TrendingUp, ExternalLink, ArrowLeftRight, Coins, Home, Target, Zap, Activity, BarChart3 } from 'lucide-react';

export const tokenPoolData = {
  totalPool: "$50M",
  purchased: 68,
  remaining: "$16M",
  participantCount: "2,847"
};

export const portfolioCards = [
  {
    id: 'homes-pool',
    title: 'HOMES Token Pool',
    subtitle: 'Join the RWA Revolution',
    icon: Home,
    accentIcon: BarChart3,
    primaryStat: {
      value: `${tokenPoolData.purchased}%`,
      label: 'Pool Completion',
      trend: '+5.2% this week'
    },
    secondaryStat: {
      value: tokenPoolData.remaining,
      label: 'Available Tokens'
    },
    tertiaryStats: [
      { label: 'Participants', value: tokenPoolData.participantCount },
      { label: 'Total Pool', value: tokenPoolData.totalPool }
    ],
    ctaText: 'Buy on Kamino',
    ctaLink: 'https://app.kamino.finance',
    progressValue: tokenPoolData.purchased,
    priority: 'primary'
  },
  {
    id: 'yield-redeem',
    title: 'Redeem sYLDS',
    subtitle: 'Convert to USDC',
    icon: TrendingUp,
    accentIcon: Activity,
    primaryStat: {
      value: '1:1',
      label: 'Exchange Rate',
      trend: 'Real-time parity'
    },
    secondaryStat: {
      value: 'Instant',
      label: 'Settlement Speed'
    },
    tertiaryStats: [
      { label: '24h Volume', value: '$2.4M' },
      { label: 'Liquidity', value: '$12.8M' }
    ],
    ctaText: 'Redeem on Raydium',
    ctaLink: 'https://raydium.io',
    priority: 'secondary'
  },
  {
    id: 'hash-redeem',
    title: 'Redeem HASH',
    subtitle: 'Cash Out Rewards',
    icon: Coins,
    accentIcon: Zap,
    primaryStat: {
      value: 'Market',
      label: 'Price Discovery',
      trend: '$0.0234 current'
    },
    secondaryStat: {
      value: '~$0.01',
      label: 'Network Fee'
    },
    tertiaryStats: [
      { label: 'Rewards APY', value: '18.5%' },
      { label: 'Total Staked', value: '45.2M' }
    ],
    ctaText: 'Redeem on Raydium',
    ctaLink: 'https://raydium.io',
    priority: 'tertiary'
  }
] as const;