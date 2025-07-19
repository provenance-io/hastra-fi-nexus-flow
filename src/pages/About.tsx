import InnovationFocus from '@/components/InnovationFocus';
import { Button } from '@/components/ui/button';
import { ArrowRight, Target, Eye, Coins } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="relative">
      {/* Extended gradient background to match homepage */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-header-glow/5 to-crypto-accent/5"></div>
      <div className="relative z-10">
        <main className="flex-grow">
        {/* Enhanced Hero Section */}
        <section className="relative py-20 md:py-32 overflow-hidden">
          {/* Unified seamless background - removed conflicting gradient */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiIgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIiBmaWxsPSJub25lIiBzdHJva2U9InJnYmEoMTAsIDIwLCA0MCwwLjA1KSI+PGQgcGF0aD0iTTAtMSAwIDEgTS0xIDAgMSAwIj48L2Q+PC9zdmc+')] opacity-30"></div>
          
          <div className="container relative text-center">
            
            {/* Subtle inline glow effect */}
            <div className="flex justify-center mb-12">
              <div className="relative">
                <img 
                  src="/lovable-uploads/e7187c63-0dae-455c-971c-a6de70ce2afc.png" 
                  alt="Mission Logo" 
                  className="w-32 h-32 md:w-48 md:h-48"
                  style={{
                    filter: 'drop-shadow(0 0 6px rgba(0, 255, 150, 0.4)) drop-shadow(0 0 12px rgba(0, 200, 255, 0.2))',
                    animation: 'logoGlow 4s ease-in-out infinite'
                  }}
                />
              </div>
            </div>
            
            <h1 className="text-5xl md:text-8xl font-black tracking-tight mb-8">
              <span className="block text-gradient">Our Mission</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-12">
              Accessing good investments shouldn't require a trust fund
            </p>

          </div>
        </section>

        {/* Enhanced Mission & Vision Section */}
        <section className="py-12 md:py-16 relative">
          {/* Unified seamless background - removed conflicting gradient */}
          
          <div className="container relative">
            {/* Combined Mission & Vision Card */}
            <div className="max-w-6xl mx-auto mb-16">
              <div className="card-gradient rounded-3xl p-8 md:p-12 card-hover animate-fade-in">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  
                  {/* Mission Segment */}
                  <div className="space-y-6">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 rounded-xl glass-effect flex items-center justify-center">
                        <Target className="w-6 h-6 text-header-glow" />
                      </div>
                      <h2 className="text-2xl md:text-3xl font-bold text-gradient">Our Mission</h2>
                    </div>
                    
                    <div className="space-y-4">
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        To bridge the gap between traditional finance and decentralized technology by creating 
                        <span className="text-header-glow font-semibold"> institutional-grade DeFi products</span> that are accessible, transparent, and backed by real-world assets.
                      </p>
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        We believe that everyone should have access to the same 
                        <span className="text-crypto-accent font-semibold">high-yield investment opportunities</span> that were previously reserved for institutions and high-net-worth individuals.
                      </p>
                    </div>
                  </div>

                  {/* Vision Segment */}
                  <div className="space-y-6">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 rounded-xl glass-effect flex items-center justify-center">
                        <Eye className="w-6 h-6 text-crypto-accent" />
                      </div>
                      <h2 className="text-2xl md:text-3xl font-bold text-gradient">Our Vision</h2>
                    </div>
                    
                    <div className="space-y-4">
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        A future where financial services are truly 
                        <span className="text-crypto-accent font-semibold">decentralized, transparent, and globally accessible</span>, while maintaining the security and compliance standards that institutional investors demand.
                      </p>
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        We envision a world where blockchain technology enables 
                        <span className="text-header-glow font-semibold">financial inclusion</span> and creates new opportunities for wealth creation across all economic segments.
                      </p>
                    </div>
                  </div>

                </div>
              </div>
            </div>

            {/* Metrics Banner */}
            <div className="relative">
              <div className="glass-effect rounded-2xl p-8 border border-header-glow/20">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                  <div className="space-y-2">
                    <div className="text-3xl md:text-4xl font-bold text-header-glow">24/7</div>
                    <div className="text-sm font-medium text-muted-foreground">Market Access</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-3xl md:text-4xl font-bold text-crypto-accent">Global</div>
                    <div className="text-sm font-medium text-muted-foreground">Reach</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-3xl md:text-4xl font-bold text-crypto-accent">100%</div>
                    <div className="text-sm font-medium text-muted-foreground">Transparent</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-3xl md:text-4xl font-bold text-header-glow">∞</div>
                    <div className="text-sm font-medium text-muted-foreground">Possibilities</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Innovation Focus Areas */}
        <InnovationFocus />

        {/* Provenance Blockchain Ecosystem Support */}
        <section className="py-20 relative">
          {/* Unified seamless background - removed conflicting gradient */}
          
          <div className="container relative">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Supporting the <span className="text-gradient">Provenance Blockchain</span> Ecosystem
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Hastra is proudly built on and in close collaboration with Provenance Blockchain. Our commitment extends beyond just building products—we're actively strengthening the entire Provenance ecosystem.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="card-gradient rounded-2xl p-8 md:p-12 card-hover">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0 overflow-hidden">
                    <img src="/lovable-uploads/bb5fd324-8133-40de-98e0-34ae8f181798.png" alt="HASH Token" className="w-16 h-16 object-cover" />
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-2xl md:text-3xl font-bold">HASH Token Buy & Burn Program (Coming Soon!)</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      A significant portion of revenue generated from our DeFi products is systematically allocated to purchase and permanently burn HASH tokens from the open market. This deflationary mechanism:
                    </p>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-header-glow mt-2 flex-shrink-0"></div>
                        <span>Reduces the total supply of HASH tokens over time</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-header-glow mt-2 flex-shrink-0"></div>
                        <span>Creates sustainable demand for HASH in the market</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-header-glow mt-2 flex-shrink-0"></div>
                        <span>Strengthens the economic security of the Provenance Blockchain</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-header-glow mt-2 flex-shrink-0"></div>
                        <span>Aligns our success with the long-term health of the ecosystem</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 text-center">
                <p className="text-lg font-medium text-foreground max-w-3xl mx-auto">
                  This commitment demonstrates our dedication to being a valuable participant in the Provenance ecosystem, ensuring that our growth directly benefits all HASH token holders and network validators.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced CTA Section */}
        <section className="py-32 relative overflow-hidden">
          {/* Unified seamless background - removed conflicting gradient */}
          
          <div className="container relative text-center">
            <div className="max-w-4xl mx-auto">
              <div className="inline-flex items-center px-4 py-2 rounded-full glass-effect border border-header-glow/20 text-sm font-medium text-foreground/80 mb-8">
                <span className="mr-2 w-2 h-2 bg-header-glow rounded-full animate-pulse"></span>
                Ready to Transform Your Financial Future?
              </div>
              
              <h2 className="text-4xl md:text-6xl font-bold mb-8 text-gradient">
                Join Our Mission
              </h2>
              
              <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
                Start earning with our innovative DeFi products and become part of the 
                <span className="text-header-glow font-semibold"> future of finance</span>
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-6 mb-16">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-header-glow to-crypto-accent text-white hover:opacity-90 transition-all duration-300 px-12 py-6 text-lg rounded-2xl min-w-[220px] group"
                  asChild
                >
                  <Link to="/yield">
                    Start Earning Today
                    <ArrowRight className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-header-glow/30 text-foreground hover:bg-header-glow/10 px-12 py-6 text-lg rounded-2xl min-w-[220px] group"
                  asChild
                >
                  <Link to="/homes">
                    Explore Real Estate
                    <ArrowRight className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>

              {/* Trust indicators */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl font-bold text-header-glow mb-2">$150M+</div>
                  <div className="text-muted-foreground">Total Value Locked</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-crypto-accent mb-2">25k+</div>
                  <div className="text-muted-foreground">Active Users</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-header-glow mb-2">99.9%</div>
                  <div className="text-muted-foreground">Uptime</div>
                </div>
              </div>
            </div>
          </div>
        </section>
        </main>
      </div>
    </div>
  );
};

export default About;