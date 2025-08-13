import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronDown, ChevronRight, ExternalLink, Layers, Shield, Zap, Building2 } from 'lucide-react';

const techLayers = [
  {
    id: "layer1",
    title: "Layer 1: YLDS Foundation",
    icon: Shield,
    summary: "Figure Markets' SEC-registered yield-bearing stablecoin backed by prime money market fund securities",
    details: "YLDS is the first SEC-registered yield-bearing stablecoin, backed by a diversified portfolio of prime money market fund securities. This regulatory foundation provides institutional-grade compliance and transparency.",
    link: "https://www.ylds.com",
    linkText: "Learn more about YLDS"
  },
  {
    id: "layer2", 
    title: "Layer 2: wYLDS Bridge",
    icon: Layers,
    summary: "Cross-chain wrapped version enabling DeFi usage while maintaining YLDS backing",
    details: "wYLDS maintains full backing by YLDS while enabling cross-chain functionality. Each wYLDS token is backed 1:1 by YLDS, preserving the regulatory compliance and yield characteristics.",
    link: "/wylds",
    linkText: "Learn about wYLDS"
  },
  {
    id: "layer3",
    title: "Layer 3: swYLDS Staking",
    icon: Building2,
    summary: "Staked wYLDS earning yield from DemoPrime's real-world HELOC lending operations",
    details: "swYLDS enhances wYLDS by adding yield from DemoPrime's HELOC lending operations. This creates a dual-yield structure: base YLDS yield plus real estate lending returns, targeting ~9% APY.",
    link: "#",
    linkText: "View technical docs"
  },
  {
    id: "layer4",
    title: "Layer 4: DeFi Integration",
    icon: Zap,
    summary: "Use swYLDS as collateral on Kamino for leverage strategies while maintaining base yield",
    details: "swYLDS can be used as collateral in DeFi protocols like Kamino for leverage strategies. Users can maintain their base 9% yield while accessing additional leverage opportunities for enhanced returns.",
    link: "https://kamino.finance",
    linkText: "Explore Kamino"
  }
];

const SwYLDSTechnicalDetails = () => {
  const [expandedLayer, setExpandedLayer] = useState<string | null>("layer1");

  const toggleLayer = (layerId: string) => {
    setExpandedLayer(expandedLayer === layerId ? null : layerId);
  };

  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Built on Solid Foundations
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Understanding the technology behind your yield
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-4">
          {techLayers.map((layer, index) => (
            <Card key={layer.id} className="overflow-hidden bg-card/50 backdrop-blur-sm border-border/40">
              <div 
                className="p-6 cursor-pointer hover:bg-card/70 transition-all duration-300"
                onClick={() => toggleLayer(layer.id)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-crypto-accent/20 to-auburn-primary/20">
                      <layer.icon className="h-6 w-6 text-crypto-accent" />
                    </div>
                    
                    <div className="space-y-1">
                      <h3 className="text-lg md:text-xl font-semibold text-foreground">
                        {layer.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {layer.summary}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex-shrink-0">
                    {expandedLayer === layer.id ? (
                      <ChevronDown className="h-5 w-5 text-muted-foreground" />
                    ) : (
                      <ChevronRight className="h-5 w-5 text-muted-foreground" />
                    )}
                  </div>
                </div>
              </div>
              
              {expandedLayer === layer.id && (
                <div className="px-6 pb-6 border-t border-border/40 bg-muted/20">
                  <div className="pt-6 space-y-4">
                    <p className="text-muted-foreground leading-relaxed">
                      {layer.details}
                    </p>
                    
                    {layer.link && (
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="bg-background/50 backdrop-blur-sm"
                        asChild
                      >
                        <a 
                          href={layer.link}
                          target={layer.link.startsWith('http') ? "_blank" : "_self"}
                          rel={layer.link.startsWith('http') ? "noopener noreferrer" : undefined}
                          className="inline-flex items-center space-x-2"
                        >
                          <span>{layer.linkText}</span>
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              )}
            </Card>
          ))}
        </div>
        
        {/* Architecture Diagram */}
        <div className="mt-16 text-center">
          <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/40 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold mb-6">Architecture Flow</h3>
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6">
              <div className="flex flex-col items-center space-y-2">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-green-500/20 to-blue-500/20 flex items-center justify-center">
                  <Shield className="h-6 w-6 text-green-500" />
                </div>
                <span className="text-sm font-medium">YLDS</span>
              </div>
              
              <ChevronRight className="h-5 w-5 text-muted-foreground rotate-90 md:rotate-0" />
              
              <div className="flex flex-col items-center space-y-2">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                  <Layers className="h-6 w-6 text-blue-500" />
                </div>
                <span className="text-sm font-medium">wYLDS</span>
              </div>
              
              <ChevronRight className="h-5 w-5 text-muted-foreground rotate-90 md:rotate-0" />
              
              <div className="flex flex-col items-center space-y-2">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-crypto-accent/20 to-auburn-primary/20 flex items-center justify-center">
                  <Building2 className="h-6 w-6 text-crypto-accent" />
                </div>
                <span className="text-sm font-medium">swYLDS</span>
              </div>
              
              <ChevronRight className="h-5 w-5 text-muted-foreground rotate-90 md:rotate-0" />
              
              <div className="flex flex-col items-center space-y-2">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 flex items-center justify-center">
                  <Zap className="h-6 w-6 text-purple-500" />
                </div>
                <span className="text-sm font-medium">DeFi</span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SwYLDSTechnicalDetails;