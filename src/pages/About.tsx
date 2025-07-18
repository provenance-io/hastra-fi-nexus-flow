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
          {/* Premium background with multiple layers - matching homepage */}
          <div className="absolute inset-0 bg-gradient-to-br from-background via-header-glow/5 to-crypto-accent/5"></div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiIgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIiBmaWxsPSJub25lIiBzdHJva2U9InJnYmEoMTAsIDIwLCA0MCwwLjA1KSI+PGQgcGF0aD0iTTAtMSAwIDEgTS0xIDAgMSAwIj48L2Q+PC9zdmc+')] opacity-30"></div>
          
          {/* Floating geometric elements */}
          <div className="absolute top-20 left-10 w-20 h-20 border border-electric-blue/20 rounded-full animate-float opacity-50"></div>
          <div className="absolute top-40 right-20 w-16 h-16 border border-neon-cyan/20 rotate-45 animate-float opacity-40" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 border border-premium-gold/20 rounded-xl animate-float opacity-30" style={{ animationDelay: '2s' }}></div>
          
          <div className="container relative text-center">
            <div className="glass-premium rounded-full px-6 py-3 text-sm mb-8 animate-glow-pulse inline-block">
              <span className="mr-2 w-2 h-2 bg-electric-blue rounded-full animate-pulse inline-block"></span>
              <span className="text-premium-gradient font-semibold">About Hastra-Fi</span>
            </div>
            
            <h1 className="text-5xl md:text-8xl font-black tracking-tight mb-8 relative">
              <span className="block text-premium-gradient animate-slide-in-left relative z-10">
                Our Mission
              </span>
              <div className="absolute inset-0 text-premium-gradient opacity-20 blur-sm animate-pulse">
                Our Mission
              </div>
            </h1>
            
            <p className="text-xl md:text-2xl text-platinum/90 max-w-4xl mx-auto leading-relaxed mb-12 animate-fade-in-up">
              Bringing Top-Tier Financial Opportunities to Everyone Through 
              <span className="text-premium-gradient font-semibold"> Revolutionary DeFi Solutions</span>
            </p>

            {/* Animated scroll indicator */}
            <div className="animate-bounce mt-16">
              <div className="w-6 h-10 border-2 border-electric-blue/50 rounded-full flex justify-center">
                <div className="w-1 h-3 bg-electric-blue rounded-full mt-2 animate-pulse"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Mission & Vision Section */}
        <section className="py-24 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-background via-header-glow/5 to-crypto-accent/5"></div>
          
          <div className="container relative">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
              {/* Mission */}
              <div className="space-y-8 animate-fade-in">
                <div className="card-premium rounded-3xl p-8 morphing-card">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-2xl glass-premium flex items-center justify-center pulse-glow-premium">
                      <Target className="w-8 h-8 text-electric-blue" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-premium-gradient">Our Mission</h2>
                  </div>
                  
                  <div className="space-y-6">
                    <p className="text-lg text-platinum/90 leading-relaxed">
                      To bridge the gap between traditional finance and decentralized technology by creating 
                      <span className="text-electric-blue font-semibold"> institutional-grade DeFi products</span> that are accessible, transparent, and backed by real-world assets.
                    </p>
                    <p className="text-lg text-platinum/90 leading-relaxed">
                      We believe that everyone should have access to the same 
                      <span className="text-neon-cyan font-semibold">high-yield investment opportunities</span> that were previously reserved for institutions and high-net-worth individuals.
                    </p>
                  </div>

                  {/* Mission metrics */}
                  <div className="grid grid-cols-2 gap-4 mt-8 pt-6 border-t border-electric-blue/20">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-electric-blue">24/7</div>
                      <div className="text-sm text-platinum/70">Market Access</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-neon-cyan">Global</div>
                      <div className="text-sm text-platinum/70">Reach</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Vision */}
              <div className="space-y-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <div className="card-premium rounded-3xl p-8 morphing-card">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-2xl glass-premium flex items-center justify-center pulse-glow-premium" style={{ animationDelay: '1s' }}>
                      <Eye className="w-8 h-8 text-neon-cyan" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-premium-gradient">Our Vision</h2>
                  </div>
                  
                  <div className="space-y-6">
                    <p className="text-lg text-platinum/90 leading-relaxed">
                      A future where financial services are truly 
                      <span className="text-neon-cyan font-semibold">decentralized, transparent, and globally accessible</span>, while maintaining the security and compliance standards that institutional investors demand.
                    </p>
                    <p className="text-lg text-platinum/90 leading-relaxed">
                      We envision a world where blockchain technology enables 
                      <span className="text-premium-gold font-semibold">financial inclusion</span> and creates new opportunities for wealth creation across all economic segments.
                    </p>
                  </div>

                  {/* Vision metrics */}
                  <div className="grid grid-cols-2 gap-4 mt-8 pt-6 border-t border-neon-cyan/20">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-neon-cyan">100%</div>
                      <div className="text-sm text-platinum/70">Transparent</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-premium-gold">∞</div>
                      <div className="text-sm text-platinum/70">Possibilities</div>
                    </div>
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
          <div className="absolute inset-0 bg-gradient-to-br from-background via-header-glow/5 to-crypto-accent/5"></div>
          
          <div className="container relative">
            <div className="text-center mb-16 animate-fade-in">
              <div className="inline-block bg-header-glow/20 border border-header-glow/30 rounded-full px-4 py-2 text-sm mb-6">
                <span className="mr-2 w-2 h-2 bg-header-glow rounded-full animate-pulse inline-block"></span>
                Ecosystem Support
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Supporting the <span className="text-gradient">Provenance Blockchain</span> Ecosystem
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Our commitment extends beyond just building products—we're actively strengthening the entire Provenance ecosystem.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="card-gradient rounded-2xl p-8 md:p-12 card-hover">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0">
                    <img src="/lovable-uploads/c7496f8a-f155-4106-ab9f-fec1d493871e.png" alt="HASH Token" className="w-16 h-16 rounded-xl" />
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
                    <div className="pt-4">
                      <p className="text-lg font-medium text-foreground mb-4">
                        This commitment demonstrates our dedication to being a valuable participant in the Provenance ecosystem, ensuring that our growth directly benefits all HASH token holders and network validators.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced CTA Section */}
        <section className="py-32 relative overflow-hidden">
          {/* Premium background - matching homepage */}
          <div className="absolute inset-0 bg-gradient-to-br from-background via-header-glow/5 to-crypto-accent/5"></div>
          
          {/* Animated background elements */}
          <div className="absolute top-10 left-10 w-32 h-32 border border-electric-blue/10 rounded-full animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-24 h-24 border border-neon-cyan/10 rotate-45 animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-premium-gold/5 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
          
          <div className="container relative text-center">
            <div className="max-w-4xl mx-auto">
              <div className="glass-premium rounded-full px-6 py-3 text-sm mb-8 inline-block">
                <span className="text-premium-gradient font-semibold">Ready to Transform Your Financial Future?</span>
              </div>
              
              <h2 className="text-4xl md:text-6xl font-bold mb-8 text-premium-gradient">
                Join Our Mission
              </h2>
              
              <p className="text-xl md:text-2xl text-platinum/90 mb-12 max-w-3xl mx-auto leading-relaxed">
                Start earning with our innovative DeFi products and become part of the 
                <span className="text-electric-blue font-semibold"> future of finance</span>
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-6 mb-16">
                <Button 
                  size="lg" 
                  className="btn-premium px-12 py-6 text-lg rounded-2xl min-w-[220px] group shadow-premium"
                  asChild
                >
                  <Link to="/yield">
                    Start Earning Today
                    <ArrowRight className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button 
                  size="lg" 
                  className="btn-glass px-12 py-6 text-lg rounded-2xl min-w-[220px] group"
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
                  <div className="text-3xl font-bold text-electric-blue mb-2">$150M+</div>
                  <div className="text-platinum/70">Total Value Locked</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-neon-cyan mb-2">25k+</div>
                  <div className="text-platinum/70">Active Users</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-premium-gold mb-2">99.9%</div>
                  <div className="text-platinum/70">Uptime</div>
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