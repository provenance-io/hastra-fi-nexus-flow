import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Coins, Shield, Info, Wallet } from 'lucide-react';
import { useWallet } from '@/contexts/WalletContext';


const tokens = [
  {
    symbol: "YIELD",
    name: "Yield Token",
    description: "Yield-bearing stablecoin offering consistent returns",
    apy: "Up to 4%",
    risk: "Low",
    features: ["Stable value", "Consistent yields", "Low volatility"],
    color: "green"
  },
  {
    symbol: "HASH",
    name: "Solana HASH",
    description: "Bridged HASH token for Solana DeFi participation",
    apy: "No",
    risk: "Medium",
    features: ["DeFi utility", "Cross-chain", "Growth potential"],
    color: "purple"
  }
];

const riskColors = {
  "Low": "bg-green-500/20 border-green-500/30 text-green-300",
  "Medium": "bg-yellow-500/20 border-yellow-500/30 text-yellow-300",
  "High": "bg-red-500/20 border-red-500/30 text-red-300"
};

const BuyEarnSection = () => {
  return (
    <section className="py-20 md:py-32 relative" data-section="buy-earn">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/90"></div>
      <div className="container relative">
        {/* Enhanced Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-8">
            <span style={{ 
              background: 'linear-gradient(135deg, hsl(var(--platinum)), hsl(var(--muted-foreground)))', 
              WebkitBackgroundClip: 'text', 
              WebkitTextFillColor: 'transparent',
              textShadow: '0 0 30px rgba(229, 218, 194, 0.4)'
            }}>Start Earning</span>
            <br />
            <span className="text-platinum/60">Immediately</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-platinum/80 max-w-4xl mx-auto leading-relaxed" 
             style={{ textShadow: '0 0 10px rgba(255, 255, 255, 0.3), 0 0 20px rgba(255, 255, 255, 0.1)' }}>
            Get YIELD and HASH tokens on trusted platforms. Start earning from day one with proven strategies backed by real-world assets.
          </p>
        </div>

        {/* Enhanced Tokens Section */}
        <div className="mb-20">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-12 text-platinum" 
              style={{ textShadow: '0 0 20px rgba(229, 218, 194, 0.3)' }}>
            Available Tokens
          </h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {tokens.map((token, index) => (
              <div key={index} className="card-gradient rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 group"
                   style={{
                     backdropFilter: 'blur(16px)',
                     boxShadow: '0 0 20px rgba(229, 218, 194, 0.2), 0 0 40px rgba(229, 218, 194, 0.1)'
                   }}>
                <div className="flex items-center gap-4 mb-6">
                  {token.symbol === 'YIELD' ? (
                    <img 
                      src="/lovable-uploads/08452a7b-6782-4b0a-900e-0f0c99a4fc4e.png" 
                      alt="YIELD Token"
                      className="w-16 h-16 rounded-xl group-hover:scale-110 transition-transform duration-300"
                      style={{ filter: 'drop-shadow(0 0 8px rgba(229, 218, 194, 0.4))' }}
                    />
                  ) : (
                     <img 
                       src="/lovable-uploads/bf8624e5-73f0-4058-89bf-eae815967f7e.png"
                      alt="HASH Token"
                      className="w-16 h-16 rounded-xl group-hover:scale-110 transition-transform duration-300"
                      style={{ filter: 'drop-shadow(0 0 8px rgba(229, 218, 194, 0.4))' }}
                    />
                  )}
                  <div>
                    <div className="text-2xl font-bold text-platinum">{token.symbol}</div>
                    <div className="text-sm text-platinum/70 font-medium">{token.name}</div>
                  </div>
                </div>
                  
                {/* Enhanced Risk and APY info */}
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-platinum font-medium text-sm flex items-center gap-2 px-3 py-1 rounded-lg card-gradient border border-white/10">
                    <div className="w-2 h-2 bg-platinum rounded-full" 
                         style={{ boxShadow: '0 0 6px hsl(var(--platinum))' }}></div>
                    {token.risk} Risk
                  </span>
                  <span className="text-platinum font-medium text-sm flex items-center gap-2 px-3 py-1 rounded-lg card-gradient border border-white/10">
                    <div className="w-2 h-2 bg-platinum rounded-full" 
                         style={{ boxShadow: '0 0 6px hsl(var(--platinum))' }}></div>
                    {token.apy} APY
                  </span>
                </div>
                
                <p className="text-platinum/80 text-base mb-6 leading-relaxed">{token.description}</p>
                <div className="space-y-3 mb-8">
                  {token.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3 text-sm text-platinum/80">
                      <div className="w-2 h-2 bg-platinum rounded-full" 
                           style={{ boxShadow: '0 0 4px hsl(var(--platinum))' }}></div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                <Button 
                  className="w-full bg-platinum/10 border border-platinum/20 text-platinum hover:bg-platinum/20 hover:border-platinum/30 transition-all duration-300 group-hover:scale-[1.02] font-medium"
                  style={{
                    backdropFilter: 'blur(10px)',
                    boxShadow: '0 0 10px rgba(229, 218, 194, 0.2)'
                  }}
                  onClick={() => {
                    // Navigate to quick start guides
                    const learningSection = document.querySelector('[data-section="learning"]');
                    if (learningSection) {
                      learningSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  Learn More
                  <Info className="ml-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuyEarnSection;