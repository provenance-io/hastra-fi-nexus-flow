
import { FlaskConical, Shield, Network } from 'lucide-react';

export const navigationLinks = [
  { label: 'Products', href: '#' },
  { label: 'Developers', href: '#' },
  { label: 'Company', href: '#' },
  { label: 'Research', href: '#' },
];

export const innovationFocusAreas = [
  {
    title: 'Yield-Bearing Infrastructure',
    description: 'Reimagining how stable assets generate yield through regulatory-compliant mechanisms.',
    product: 'Current Product: wYLDS - First SEC-registered yield-bearing stablecoin',
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
    name: 'wYLDS',
    tagline: 'Earn Yield on Your Stable',
    description: "The world's first SEC-registered yield-bearing stablecoin, now available on Solana.",
    innovation: 'Regulatory compliance meets DeFi yield generation.',
    status: 'Live on Solana',
    cta: 'Learn More',
    stats: [
      { label: 'Current APY', value: '4.75%' },
      { label: 'Total Supply', value: '$150.3M' },
      { label: 'Active Users', value: '12,403' },
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
    products: [
        { label: 'wYLDs', href: '/wYLDs' },
    ],
    company: [
        { label: 'About', href: '#' },
        { label: 'Mission', href: '#' },
        { label: 'Team', href: '#' },
        { label: 'Careers', href: '#' },
    ],
    research: [
        { label: 'Whitepapers', href: '#' },
        { label: 'Analysis', href: '#' },
        { label: 'Publications', href: '#' },
    ],
    developers: [
        { label: 'Documentation', href: '#' },
        { label: 'APIs', href: '#' },
        { label: 'Community', href: '#' },
    ],
    legal: [
        { label: 'Terms', href: '#' },
        { label: 'Privacy', href: '#' },
        { label: 'Compliance', href: '#' },
    ]
}
