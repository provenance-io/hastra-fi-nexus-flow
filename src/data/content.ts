import { FlaskConical, Shield, Network } from "lucide-react";

export const navigationLinks = [
  // Removed Products link
];

export const innovationFocusAreas = [
  {
    title: "Yield-Bearing Infrastructure",
    description:
      "Reimagining how stable assets generate yield through regulatory-compliant mechanisms.",
    product:
      "Current Product: PRIME - First SEC-registered yield-bearing stablecoin",
    innovation:
      "Bridging traditional finance regulations with DeFi accessibility.",
  },
  {
    title: "Cross-Chain Financial Protocols",
    description:
      "Building seamless financial infrastructure across blockchain ecosystems.",
    status: "In Development",
    innovation:
      "Multi-chain native financial products with unified user experience.",
  },
  {
    title: "Next-Generation Trading Infrastructure",
    description:
      "Developing advanced trading and liquidity solutions for digital assets.",
    status: "Research Phase",
    innovation:
      "AI-powered trading algorithms and institutional-grade execution.",
  },
];

export const products = (apy?: number) => ({
  live: {
    name: "PRIME",
    tagline: "Earn Yield on Your Stable",
    description: `TradFi Yields meets DeFi Velocity. Earn up to ${
      apy || 4
    }% APY on-the-go and trade whenever you want - all backed by real world assets.`,
    innovation:
      "Instant transfers, minimal fees, full DeFi composability - all backed by real world assets",
    status: "Live on Solana",
    cta: "Learn More",
    // stats: [
    //   { label: "Current APY", value: "4.75%" },
    //   { label: "Total Supply", value: "$5M" },
    //   { label: "Active Users", value: "12,403" },
    // ],
  },
  sprime: {
    name: "sPRIME",
    tagline: "Staked PRIME Token",
    description:
      "Stake your PRIME tokens to earn enhanced yields. Access professional-grade DeFi strategies with automated compounding and additional HASH token rewards.",
    innovation:
      "Professional-grade DeFi product with rigorous risk management and transparent operations.",
    status: "Coming Soon",
    cta: "Learn More",
    stats: [
      { label: "Target APY", value: "7.5%" },
      { label: "Pool Size", value: "$5M-$100M" },
      { label: "First Mover", value: "Solana RWA" },
    ],
  },
});

export const innovationApproach = [
  {
    icon: FlaskConical,
    title: "Research-Driven Development",
    description:
      "Deep market research and technical analysis drives every product decision.",
  },
  {
    icon: Shield,
    title: "Regulatory-First Innovation",
    description:
      "Building compliant solutions that work within existing financial frameworks.",
  },
  {
    icon: Network,
    title: "Open Financial Infrastructure",
    description:
      "Creating interoperable solutions that enhance the entire financial ecosystem.",
  },
];

export const footerLinks = {
  company: [
    { label: "About", href: "/about" },
    { label: "Press & Media", href: "/brand-guide" },
    { label: "Earn", href: "/earn" },
    { label: "(L)earn", href: "/learn" },
  ],
  products: [
    { label: "PRIME", href: "/prime" },
    { label: "sPRIME", href: "/sprime" },
  ],
  legal: [
    { label: "Terms", href: "/terms" },
    { label: "Privacy", href: "/privacy" },
    { label: "Compliance", href: "#" },
  ],
};
