import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
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
                  className="w-48 h-48 md:w-64 md:h-64"
                  style={{
                    filter: 'drop-shadow(0 0 6px rgba(0, 255, 150, 0.4)) drop-shadow(0 0 12px rgba(0, 200, 255, 0.2))',
                    animation: 'logoGlow 4s ease-in-out infinite'
                  }}
                />
              </div>
            </div>
            
            
            <p className="text-xl md:text-2xl text-foreground/90 max-w-4xl mx-auto leading-relaxed mb-12" style={{ textShadow: '0 0 10px rgba(255, 255, 255, 0.3), 0 0 20px rgba(255, 255, 255, 0.1)' }}>
              Repeat after Us: Accessing good investments shouldn't require a trust fund.
            </p>

          </div>
        </section>

        {/* Three Core Segments Section */}
        <section className="py-4 md:py-8 relative">
          <div className="container relative">
            <div className="max-w-6xl mx-auto space-y-8">
              
              {/* Mission Segment */}
              <div className="card-gradient rounded-3xl p-8 md:p-12 card-hover animate-fade-in">
                <div className="mb-8">
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground/90">Our Mission</h2>
                </div>
                <p className="text-lg text-foreground/90 leading-relaxed">
                  To obliterate the artificial walls between Wall Street's inner circle and everyone else via DeFi technology.
                </p>
                <p className="text-lg text-foreground/90 leading-relaxed">
                  We aim to shatter every boundary that keeps you dependent on their system. Because <span className="text-header-glow font-semibold">being your own bank isn't a privilege—it's your fundamental right</span>.
                </p>
              </div>

              {/* Belief Segment */}
              <div className="card-gradient rounded-3xl p-8 md:p-12 card-hover animate-fade-in">
                <div className="mb-8">
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground/90">Our Belief</h2>
                </div>
                <p className="text-lg text-foreground/90 leading-relaxed">
                  The same 8% yields that make the rich richer should be in your wallet, not locked behind some arbitrary "accredited investor" gate. Every high-yield opportunity hoarded by institutions is a theft from the people who actually need those returns. We're not just redistributing wealth—<span className="text-crypto-accent font-semibold">we're putting the power to create it directly into your hands</span>.
                </p>
              </div>

              {/* Vision Segment */}
              <div className="card-gradient rounded-3xl p-8 md:p-12 card-hover animate-fade-in">
                <div className="mb-8">
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground/90">Our Vision</h2>
                </div>
                <div className="space-y-6">
                  <p className="text-lg text-foreground/90 leading-relaxed">
                    A financial system where you don't need their permission, their minimums, or their approval. True decentralization means every person on Earth becomes their own financial institution—no middlemen skimming profits, no gatekeepers deciding your worth.
                  </p>
                  <p className="text-lg text-foreground/90 leading-relaxed">
                    We're building the world where blockchain doesn't just enable financial inclusion—it demolishes financial apartheid and hands you the keys to institutional-grade wealth creation. Every product we ship pushes further past the boundaries they thought were permanent. Every innovation transfers more power from their vaults to your wallet. <span className="text-orange-400 font-semibold">The revolution isn't coming. You're holding it.</span>
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Provenance Blockchain Ecosystem Support */}
        <section className="py-20 relative">
          {/* Unified seamless background - removed conflicting gradient */}
          
          <div className="container relative">
            <div className="text-center mb-16 animate-fade-in">
              {/* HASH Logo with glow effect */}
              <div className="flex justify-center mb-12">
                <div className="relative">
                  <img 
                    src="/lovable-uploads/9da758ec-2299-4fe7-82e4-e7fb95e9cdb8.png" 
                    alt="HASH Logo" 
                    className="w-48 h-48 md:w-64 md:h-64"
                    style={{
                      filter: 'drop-shadow(0 0 6px rgba(0, 255, 150, 0.4)) drop-shadow(0 0 12px rgba(0, 200, 255, 0.2))',
                      animation: 'logoGlow 4s ease-in-out infinite'
                    }}
                  />
                </div>
              </div>
              
              <p className="text-xl md:text-2xl text-foreground/90 max-w-4xl mx-auto leading-relaxed mb-12" style={{ textShadow: '0 0 10px rgba(255, 255, 255, 0.3), 0 0 20px rgba(255, 255, 255, 0.1)' }}>
                Hastra is built on Provenance Blockchain—and we're committed to making the entire ecosystem stronger.
              </p>
              <div className="card-gradient rounded-2xl p-6 md:p-8 card-hover max-w-4xl mx-auto mb-12">
                <p className="text-lg text-foreground/90 leading-relaxed">
                  Most DeFi protocols create their own tokens to capture value for themselves. We're taking a different approach. Instead of launching another token, we're channeling our success directly back to the HASH holders who power and secure the Provenance network.
                </p>
              </div>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="card-gradient rounded-2xl p-8 md:p-12 card-hover">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0 overflow-hidden">
                    <img src="/lovable-uploads/bb5fd324-8133-40de-98e0-34ae8f181798.png" alt="HASH Token" className="w-16 h-16 object-cover" />
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-2xl md:text-3xl font-bold">HASH Token Buy & Burn Program (Coming Soon!)</h3>
                    <p className="text-lg text-foreground/90 leading-relaxed">
                      A significant portion of revenue generated from our DeFi products is systematically allocated to purchase and permanently burn HASH tokens from the open market. We believe this will:
                    </p>
                    <ul className="space-y-3 text-foreground/90">
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-header-glow mt-2 flex-shrink-0"></div>
                        <span>Strengthen the economic security of the Provenance Blockchain</span>
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
                <p className="text-lg font-medium text-foreground/90 max-w-3xl mx-auto">
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
              <div className="inline-flex items-center px-4 py-2 rounded-full glass-effect border border-header-glow/20 text-sm font-medium text-foreground/90 mb-8">
                <span className="mr-2 w-2 h-2 bg-header-glow rounded-full animate-pulse"></span>
                Ready to Transform Your Financial Future?
              </div>
              
              <h2 className="text-4xl md:text-6xl font-bold mb-8 text-gradient">
                Join Our Mission
              </h2>
              
              <p className="text-xl md:text-2xl text-foreground/90 mb-12 max-w-3xl mx-auto leading-relaxed">
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
                  <div className="text-foreground/90">Total Value Locked</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-crypto-accent mb-2">25k+</div>
                  <div className="text-foreground/90">Active Users</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-header-glow mb-2">99.9%</div>
                  <div className="text-foreground/90">Uptime</div>
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
