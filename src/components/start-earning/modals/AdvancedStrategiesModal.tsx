import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Target, BarChart3, Play, ArrowRight, ExternalLink, TrendingUp, AlertTriangle } from 'lucide-react';

interface AdvancedStrategiesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

/**
 * Strategy card component
 */
const StrategyCard = ({ 
  title, 
  description, 
  duration, 
  riskLevel, 
  concepts,
  expectedReturn 
}: {
  title: string;
  description: string;
  duration: string;
  riskLevel: 'Low' | 'Medium' | 'High';
  concepts: string[];
  expectedReturn: string;
}) => {
  const getRiskColor = (risk: string) => {
    switch (risk) {
      case 'Low': return 'bg-green-500/20 text-green-700';
      case 'Medium': return 'bg-yellow-500/20 text-yellow-700';
      case 'High': return 'bg-red-500/20 text-red-700';
      default: return 'bg-gray-500/20 text-gray-700';
    }
  };

  return (
    <Card className="group hover:shadow-lg transition-all duration-300 hover:border-header-glow/40">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between mb-2">
          <div className="flex items-center gap-2">
            <Badge variant="outline" className={`text-xs ${getRiskColor(riskLevel)}`}>
              {riskLevel} Risk
            </Badge>
            <Badge variant="secondary" className="text-xs">
              {expectedReturn}
            </Badge>
          </div>
          <span className="text-sm text-muted-foreground">{duration}</span>
        </div>
        <CardTitle className="text-lg group-hover:text-header-glow transition-colors">
          {title}
        </CardTitle>
        <CardDescription className="text-sm leading-relaxed">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="space-y-3">
          <div>
            <h4 className="text-sm font-medium mb-2 text-foreground/90">Key concepts covered:</h4>
            <ul className="space-y-1">
              {concepts.map((concept, index) => (
                <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <div className="w-1 h-1 rounded-full bg-header-glow mt-2 flex-shrink-0" />
                  <span>{concept}</span>
                </li>
              ))}
            </ul>
          </div>
          <Button size="sm" className="w-full group/btn" variant="secondary">
            Learn Strategy
            <Play className="ml-2 h-3 w-3 transition-transform group-hover/btn:scale-110" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

/**
 * Advanced Strategies Modal - Optimize returns with advanced DeFi strategies
 */
const AdvancedStrategiesModal = ({ isOpen, onClose }: AdvancedStrategiesModalProps) => {
  const strategies = [
    {
      title: "Portfolio Diversification",
      description: "Build a balanced portfolio across different DeFi protocols and risk levels to optimize returns while minimizing risk.",
      duration: "22 min",
      riskLevel: "Low" as const,
      expectedReturn: "8-15% APY",
      concepts: [
        "Asset allocation principles",
        "Correlation analysis",
        "Rebalancing strategies",
        "Risk-adjusted returns"
      ]
    },
    {
      title: "Yield Optimization Techniques",
      description: "Advanced methods to maximize yield through compound strategies, yield farming, and liquidity provision.",
      duration: "28 min",
      riskLevel: "Medium" as const,
      expectedReturn: "15-30% APY",
      concepts: [
        "Compound yield strategies",
        "Liquidity pool optimization",
        "Impermanent loss mitigation",
        "Automated rebalancing"
      ]
    },
    {
      title: "Risk Assessment Tools",
      description: "Master advanced risk metrics and tools to evaluate DeFi protocols and make informed investment decisions.",
      duration: "25 min",
      riskLevel: "Low" as const,
      expectedReturn: "Knowledge",
      concepts: [
        "Smart contract auditing",
        "Protocol risk scoring",
        "Liquidation risk analysis",
        "Market volatility metrics"
      ]
    },
    {
      title: "Arbitrage Opportunities",
      description: "Identify and capitalize on price differences across different platforms and protocols for risk-free profits.",
      duration: "35 min",
      riskLevel: "Medium" as const,
      expectedReturn: "5-20% per trade",
      concepts: [
        "Cross-platform arbitrage",
        "Flash loan strategies",
        "MEV protection techniques",
        "Gas optimization"
      ]
    },
    {
      title: "Advanced Staking Strategies",
      description: "Sophisticated staking approaches including liquid staking, validator selection, and multi-chain strategies.",
      duration: "30 min",
      riskLevel: "Medium" as const,
      expectedReturn: "12-25% APY",
      concepts: [
        "Liquid staking derivatives",
        "Validator performance analysis",
        "Cross-chain staking",
        "Slashing risk management"
      ]
    },
    {
      title: "Leverage and Margin Trading",
      description: "Responsibly use leverage to amplify returns while managing downside risks in volatile DeFi markets.",
      duration: "40 min",
      riskLevel: "High" as const,
      expectedReturn: "Variable",
      concepts: [
        "Collateral management",
        "Liquidation prevention",
        "Position sizing",
        "Risk/reward optimization"
      ]
    }
  ];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto p-0">
        {/* Header Section */}
        <div className="relative bg-gradient-to-br from-header-glow/10 to-crypto-accent/10 p-8 border-b">
          <DialogHeader className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-header-glow/20 to-crypto-accent/20 flex items-center justify-center">
                <Target className="w-6 h-6 text-header-glow" />
              </div>
              <div>
                <DialogTitle className="text-3xl font-bold text-gradient">
                  Advanced Strategies
                </DialogTitle>
                <p className="text-muted-foreground mt-1">
                  Optimize your returns with sophisticated DeFi strategies
                </p>
              </div>
            </div>
          </DialogHeader>
          
          {/* Quick Stats */}
          <div className="grid grid-cols-4 gap-4 mt-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-header-glow">6</div>
              <div className="text-sm text-muted-foreground">Strategies</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-header-glow">180min</div>
              <div className="text-sm text-muted-foreground">Total Time</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-header-glow">Advanced</div>
              <div className="text-sm text-muted-foreground">Level</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-header-glow">High</div>
              <div className="text-sm text-muted-foreground">Impact</div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-8 space-y-8">
          {/* Overview */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold flex items-center gap-2">
              <BarChart3 className="w-5 h-5 text-header-glow" />
              Advanced DeFi Strategies
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Take your DeFi knowledge to the next level with advanced strategies designed for experienced users. 
              Learn sophisticated techniques for portfolio optimization, risk management, and yield maximization 
              while understanding the complexities and risks involved.
            </p>
          </div>

          {/* Risk Warning */}
          <Card className="border-yellow-500/20 bg-yellow-500/5">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center gap-2 text-yellow-700">
                <AlertTriangle className="w-5 h-5" />
                Important Risk Notice
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-yellow-700/90 leading-relaxed">
                Advanced strategies involve higher risks and complexity. Ensure you have a solid understanding 
                of DeFi basics before attempting these strategies. Always invest only what you can afford to lose 
                and consider starting with smaller amounts to test strategies.
              </p>
            </CardContent>
          </Card>

          {/* Strategies Grid */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-header-glow" />
              Strategy Library
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {strategies.map((strategy, index) => (
                <StrategyCard key={index} {...strategy} />
              ))}
            </div>
          </div>

          {/* Prerequisites & Tools */}
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-header-glow/20">
              <CardHeader>
                <CardTitle className="text-lg">Prerequisites</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-1 h-1 rounded-full bg-header-glow mt-2 flex-shrink-0" />
                    <span>Completed DeFi Basics course</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1 h-1 rounded-full bg-header-glow mt-2 flex-shrink-0" />
                    <span>Experience with platform guides</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1 h-1 rounded-full bg-header-glow mt-2 flex-shrink-0" />
                    <span>Understanding of smart contracts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1 h-1 rounded-full bg-header-glow mt-2 flex-shrink-0" />
                    <span>Risk tolerance assessment</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-header-glow/20">
              <CardHeader>
                <CardTitle className="text-lg">Recommended Tools</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-1 h-1 rounded-full bg-header-glow mt-2 flex-shrink-0" />
                    <span>Portfolio tracking applications</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1 h-1 rounded-full bg-header-glow mt-2 flex-shrink-0" />
                    <span>DeFi analytics platforms</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1 h-1 rounded-full bg-header-glow mt-2 flex-shrink-0" />
                    <span>Risk assessment tools</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1 h-1 rounded-full bg-header-glow mt-2 flex-shrink-0" />
                    <span>Automated strategy platforms</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t">
            <Button size="lg" className="flex-1 group">
              Start with Portfolio Diversification
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline" className="flex-1 group" asChild>
              <a href="/earn">
                Apply Strategies
                <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:scale-110" />
              </a>
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AdvancedStrategiesModal;