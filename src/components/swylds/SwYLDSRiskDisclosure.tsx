import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { ChevronDown, ChevronRight, AlertTriangle, Shield, TrendingUp, Users } from 'lucide-react';

const riskCategories = [
  {
    id: "smart-contract",
    icon: Shield,
    title: "Smart Contract Risk",
    severity: "Medium",
    summary: "swYLDS depends on smart contract functionality. While audited, bugs or vulnerabilities could affect your funds.",
    details: "Smart contracts are complex software systems that may contain bugs or vulnerabilities despite thorough testing and auditing. Users should understand that smart contract risk cannot be completely eliminated. Our contracts have been audited by leading security firms, and we maintain bug bounty programs to incentivize security research.",
    mitigation: "Multiple security audits, formal verification, time-locked upgrades, and bug bounty programs help minimize this risk."
  },
  {
    id: "market-risk",
    icon: TrendingUp,
    title: "Market Risk",
    severity: "Low",
    summary: "Token values can fluctuate. swYLDS value may vary relative to other assets in volatile market conditions.",
    details: "While swYLDS is designed to maintain stability through real asset backing, market conditions can affect token values. The underlying HELOC lending operations and broader economic conditions may impact yield generation and token performance.",
    mitigation: "Real asset backing, diversified lending portfolio, and conservative lending practices help stabilize value."
  },
  {
    id: "counterparty-risk",
    icon: Users,
    title: "Counterparty Risk",
    severity: "Low",
    summary: "Yield depends on DemoPrime's lending operations and borrower performance in the real estate market.",
    details: "swYLDS yield is generated from real-world HELOC lending operations managed by DemoPrime. The performance of these loans and the overall real estate market can affect yield generation. Borrower defaults or economic downturns could impact returns.",
    mitigation: "Conservative lending standards, geographic diversification, and experienced loan management help reduce counterparty risk."
  }
];

const getSeverityColor = (severity: string) => {
  switch (severity) {
    case "High": return "text-red-500 bg-red-500/10";
    case "Medium": return "text-yellow-500 bg-yellow-500/10";
    case "Low": return "text-green-500 bg-green-500/10";
    default: return "text-muted-foreground bg-muted/10";
  }
};

const SwYLDSRiskDisclosure = () => {
  const [expandedRisk, setExpandedRisk] = useState<string | null>(null);

  const toggleRisk = (riskId: string) => {
    setExpandedRisk(expandedRisk === riskId ? null : riskId);
  };

  return (
    <section className="py-16 md:py-24 border-t border-border/40">
      <div className="container">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <AlertTriangle className="h-8 w-8 text-yellow-500" />
            <h2 className="text-3xl md:text-4xl font-bold">
              Important Disclosures
            </h2>
          </div>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Understand the risks before investing. We believe in complete transparency.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-4 mb-12">
          {riskCategories.map((risk) => (
            <Card key={risk.id} className="overflow-hidden bg-card/50 backdrop-blur-sm border-border/40">
              <div 
                className="p-6 cursor-pointer hover:bg-card/70 transition-all duration-300"
                onClick={() => toggleRisk(risk.id)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-yellow-500/20 to-red-500/20">
                      <risk.icon className="h-6 w-6 text-yellow-500" />
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex items-center space-x-3">
                        <h3 className="text-lg md:text-xl font-semibold text-foreground">
                          {risk.title}
                        </h3>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getSeverityColor(risk.severity)}`}>
                          {risk.severity} Risk
                        </span>
                      </div>
                      <p className="text-muted-foreground">
                        {risk.summary}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex-shrink-0">
                    {expandedRisk === risk.id ? (
                      <ChevronDown className="h-5 w-5 text-muted-foreground" />
                    ) : (
                      <ChevronRight className="h-5 w-5 text-muted-foreground" />
                    )}
                  </div>
                </div>
              </div>
              
              {expandedRisk === risk.id && (
                <div className="px-6 pb-6 border-t border-border/40 bg-muted/20">
                  <div className="pt-6 space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Detailed Risk Description</h4>
                      <p className="text-muted-foreground leading-relaxed">
                        {risk.details}
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-2">Risk Mitigation</h4>
                      <p className="text-muted-foreground leading-relaxed">
                        {risk.mitigation}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </Card>
          ))}
        </div>
        
        {/* General Disclaimer */}
        <Alert className="max-w-4xl mx-auto bg-muted/50 border-border/40">
          <AlertTriangle className="h-4 w-4" />
          <AlertDescription className="text-sm leading-relaxed">
            <strong>Important Disclaimer:</strong> This is not financial advice. Past performance does not guarantee future results. 
            Cryptocurrency and DeFi investments carry inherent risks including total loss of capital. 
            swYLDS is an experimental financial product that may not perform as expected. 
            Please consult with qualified financial professionals before investing and only invest what you can afford to lose. 
            The regulatory landscape for cryptocurrency products is evolving and may affect the operation of swYLDS.
          </AlertDescription>
        </Alert>
        
        <div className="text-center mt-12">
          <p className="text-sm text-muted-foreground">
            For detailed risk information and terms of service, please visit our documentation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SwYLDSRiskDisclosure;