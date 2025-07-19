import { FlaskConical, Shield, Network } from 'lucide-react';

export const navigationLinks = [
  // Removed Products link
];

export const innovationFocusAreas = [
  {
    title: 'Yield-Bearing Infrastructure',
    description: 'Reimagining how stable assets generate yield through regulatory-compliant mechanisms.',
    product: 'Current Product: YIELD - First SEC-registered yield-bearing stablecoin',
    innovation: 'Bridging traditional finance regulations with DeFi accessibility.',
  },
  {
    title: 'Cross-Chain Financial Protocols',
    description: 'Building seamless financial infrastructure across blockchain ecosystems.',
    status: 'In Development',
    innovation: 'Multi-chain native financial products with unified user experience.',
  },
  {
    title: 'Next-Generation Trading Infrastructure',
    description: 'Developing advanced trading and liquidity solutions for digital assets.',
    status: 'Research Phase',
    innovation: 'AI-powered trading algorithms and institutional-grade execution.',
  },
];

export const products = {
  live: {
    name: 'YIELD',
    tagline: 'Earn Yield on Your Stable',
    description: "Stop waiting: Start earning up to 4% APY with instant transfers and zero lockups.",
    innovation: 'Instant transfers, minimal fees, full DeFi composability - all backed by real world assets',
    status: 'Live on Solana',
    cta: 'Learn More',
    stats: [
      { label: 'Current APY', value: '4.75%' },
      { label: 'Total Supply', value: '$5M' },
      { label: 'Active Users', value: '12,403' },
    ],
  },
  homes: {
    name: 'HOMES',
    tagline: 'RWA Yield Pools',
    description: "Claim your share: Professional-grade yields from real estate, now accessible through DeFi.",
    innovation: 'Professional-grade DeFi product with rigorous risk management and transparent operations.',
    status: 'Coming Soon',
    cta: 'Learn More',
    stats: [
      { label: 'Target APY', value: '7.5%' },
      { label: 'Pool Size', value: '$5M-$100M' },
      { label: 'First Mover', value: 'Solana RWA' },
    ],
  }
};

export const innovationApproach = [
    {
        icon: FlaskConical,
        title: 'Research-Driven Development',
        description: 'Understand this: Every product decision starts with deep market research, not trends.',
    },
    {
        icon: Shield,
        title: 'Regulatory-First Innovation',
        description: 'Never compromise: Build solutions that work within regulations, not around them.',
    },
    {
        icon: Network,
        title: 'Open Financial Infrastructure',
        description: 'Think bigger: Create solutions that enhance the entire financial ecosystem, not just our products.',
    }
];

export const footerLinks = {
    company: [
        { label: 'About', href: '/about' },
        { label: 'Earn', href: '/earn' },
        { label: '(L)earn', href: '/learn' },
    ],
    products: [
        { label: 'YIELD', href: '/yield' },
        { label: 'HOMES', href: '/homes' },
    ],
    legal: [
        { label: 'Terms', href: '#' },
        { label: 'Privacy', href: '#' },
        { label: 'Compliance', href: '#' },
    ]
}
