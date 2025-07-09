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
    description: "TradFi yields, DeFi velocity",
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
    tagline: 'Tokenized Real Estate',
    description: "Access premium real estate investments through blockchain technology. Own fractions of high-value properties with complete transparency and liquidity.",
    innovation: 'Traditional real estate meets modern DeFi capabilities.',
    status: 'Live on Provenance',
    cta: 'Explore Properties',
    stats: [
      { label: 'Total Value Locked', value: '$2.4M' },
      { label: 'Properties', value: '8' },
      { label: 'Avg. Yield', value: '6.2%' },
    ],
  }
};

export const innovationApproach = [
    {
        icon: FlaskConical,
        title: 'Research-Driven Development',
        description: 'Deep market research and technical analysis drives every product decision.',
    },
    {
        icon: Shield,
        title: 'Regulatory-First Innovation',
        description: 'Building compliant solutions that work within existing financial frameworks.',
    },
    {
        icon: Network,
        title: 'Open Financial Infrastructure',
        description: 'Creating interoperable solutions that enhance the entire financial ecosystem.',
    }
];

export const footerLinks = {
    company: [
        { label: 'About', href: '/about' },
        { label: 'Start Earning', href: '/start-earning' },
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
