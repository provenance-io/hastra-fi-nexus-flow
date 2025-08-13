import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const comparisonData = [
  {
    name: "swYLDS",
    apy: "9.2%",
    risk: "Low",
    liquidity: "Instant",
    backing: "Real Estate Loans",
    highlight: true
  },
  {
    name: "Traditional Savings",
    apy: "0.5%",
    risk: "Low",
    liquidity: "Instant",
    backing: "FDIC Insurance"
  },
  {
    name: "Treasury Bills",
    apy: "4.2%",
    risk: "Low",
    liquidity: "Medium",
    backing: "US Government"
  },
  {
    name: "DeFi Lending",
    apy: "3-15%",
    risk: "High",
    liquidity: "Instant",
    backing: "Crypto Volatility"
  },
  {
    name: "Real Estate REITs",
    apy: "6-8%",
    risk: "Medium",
    liquidity: "Medium",
    backing: "Real Estate"
  }
];

const getRiskColor = (risk: string) => {
  switch (risk) {
    case "Low": return "bg-green-500/10 text-green-500";
    case "Medium": return "bg-yellow-500/10 text-yellow-500";
    case "High": return "bg-red-500/10 text-red-500";
    default: return "bg-muted text-muted-foreground";
  }
};

const getLiquidityColor = (liquidity: string) => {
  switch (liquidity) {
    case "Instant": return "bg-green-500/10 text-green-500";
    case "Medium": return "bg-yellow-500/10 text-yellow-500";
    case "Low": return "bg-red-500/10 text-red-500";
    default: return "bg-muted text-muted-foreground";
  }
};

const SwYLDSYieldComparison = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            swYLDS vs Traditional Options
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            See how swYLDS stacks up against other yield opportunities
          </p>
        </div>
        
        {/* Desktop table view */}
        <div className="hidden lg:block">
          <Card className="overflow-hidden bg-card/50 backdrop-blur-sm border-border/40">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-muted/50">
                  <tr>
                    <th className="text-left p-4 font-semibold">Investment Option</th>
                    <th className="text-left p-4 font-semibold">APY</th>
                    <th className="text-left p-4 font-semibold">Risk Level</th>
                    <th className="text-left p-4 font-semibold">Liquidity</th>
                    <th className="text-left p-4 font-semibold">Backing</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((item, index) => (
                    <tr 
                      key={index}
                      className={`border-t border-border/40 ${
                        item.highlight 
                          ? 'bg-gradient-to-r from-crypto-accent/5 to-auburn-primary/5 border-l-4 border-l-crypto-accent' 
                          : 'hover:bg-muted/20'
                      }`}
                    >
                      <td className="p-4">
                        <div className="flex items-center space-x-2">
                          <span className={`font-semibold ${item.highlight ? 'text-foreground' : 'text-foreground'}`}>
                            {item.name}
                          </span>
                          {item.highlight && (
                            <Badge variant="secondary" className="bg-crypto-accent/20 text-crypto-accent">
                              Recommended
                            </Badge>
                          )}
                        </div>
                      </td>
                      <td className="p-4">
                        <span className={`font-bold text-lg ${item.highlight ? 'text-crypto-accent' : 'text-foreground'}`}>
                          {item.apy}
                        </span>
                      </td>
                      <td className="p-4">
                        <Badge variant="outline" className={getRiskColor(item.risk)}>
                          {item.risk}
                        </Badge>
                      </td>
                      <td className="p-4">
                        <Badge variant="outline" className={getLiquidityColor(item.liquidity)}>
                          {item.liquidity}
                        </Badge>
                      </td>
                      <td className="p-4 text-muted-foreground">
                        {item.backing}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </div>
        
        {/* Mobile card view */}
        <div className="lg:hidden space-y-4">
          {comparisonData.map((item, index) => (
            <Card 
              key={index}
              className={`p-6 ${
                item.highlight 
                  ? 'bg-gradient-to-r from-crypto-accent/5 to-auburn-primary/5 border-crypto-accent/50' 
                  : 'bg-card/50 backdrop-blur-sm border-border/40'
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <h3 className="font-semibold text-lg">{item.name}</h3>
                  {item.highlight && (
                    <Badge variant="secondary" className="bg-crypto-accent/20 text-crypto-accent">
                      Recommended
                    </Badge>
                  )}
                </div>
                <span className={`font-bold text-xl ${item.highlight ? 'text-crypto-accent' : 'text-foreground'}`}>
                  {item.apy}
                </span>
              </div>
              
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Risk Level</p>
                  <Badge variant="outline" className={getRiskColor(item.risk)}>
                    {item.risk}
                  </Badge>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Liquidity</p>
                  <Badge variant="outline" className={getLiquidityColor(item.liquidity)}>
                    {item.liquidity}
                  </Badge>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Backing</p>
                  <p className="text-sm">{item.backing}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-sm text-muted-foreground">
            * APY rates are current as of {new Date().toLocaleDateString()} and subject to change
          </p>
        </div>
      </div>
    </section>
  );
};

export default SwYLDSYieldComparison;