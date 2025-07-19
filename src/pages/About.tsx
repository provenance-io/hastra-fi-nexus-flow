import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useScrollBasedAnimation } from '@/hooks/useScrollBasedAnimation';
import AnimatedCard from '@/components/about/AnimatedCard';
import ConnectingLines from '@/components/about/ConnectingLines';
import EnhancedHashLogo from '@/components/about/EnhancedHashLogo';

const About = () => {
  const animationState = useScrollBasedAnimation();

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

        {/* Three Core Segments Section with Animation */}
        <section className="py-4 md:py-8 relative">
          {/* Connecting Lines */}
          <ConnectingLines 
            missionToBeliefLine={animationState.missionToBeliefLine}
            beliefToVisionLine={animationState.beliefToVisionLine}
            visionToHashLine={animationState.visionToHashLine}
          />
          
          <div className="container relative">
            <div className="max-w-6xl mx-auto space-y-8">
              
              {/* Mission Segment */}
              <AnimatedCard 
                title="Our Mission" 
                isVisible={animationState.missionVisible}
                cardId="mission-card"
                shouldGlow={animationState.missionGlow}
              >
                <p className="text-lg text-foreground/90 leading-relaxed mb-4">
                  To obliterate the artificial walls between Wall Street's inner circle and everyone else via DeFi technology.
                </p>
                <p className="text-lg text-foreground/90 leading-relaxed">
                  We aim to shatter every boundary that keeps you dependent on their system. Because <span className="text-header-glow font-semibold">being your own bank isn't a privilege—it's your fundamental right</span>.
                </p>
              </AnimatedCard>

              {/* Belief Segment */}
              <AnimatedCard 
                title="Our Belief" 
                isVisible={animationState.beliefVisible}
                cardId="belief-card"
                shouldGlow={animationState.beliefGlow}
              >
                <p className="text-lg text-foreground/90 leading-relaxed">
                  The same 8% yields that make the rich richer should be in your wallet, not locked behind some arbitrary "accredited investor" gate. Every high-yield opportunity hoarded by institutions is a theft from the people who actually need those returns. We're not just redistributing wealth—<span className="text-crypto-accent font-semibold">we're putting the power to create it directly into your hands</span>.
                </p>
              </AnimatedCard>

              {/* Vision Segment */}
              <AnimatedCard 
                title="Our Vision" 
                isVisible={animationState.visionVisible}
                cardId="vision-card"
                shouldGlow={animationState.visionGlow}
              >
                <div className="space-y-6">
                  <p className="text-lg text-foreground/90 leading-relaxed">
                    A financial system where you don't need their permission, their minimums, or their approval. True decentralization means every person on Earth becomes their own financial institution—no middlemen skimming profits, no gatekeepers deciding your worth.
                  </p>
                  <p className="text-lg text-foreground/90 leading-relaxed">
                    We're building the world where blockchain doesn't just enable financial inclusion—it demolishes financial apartheid and hands you the keys to institutional-grade wealth creation. Every product we ship pushes further past the boundaries they thought were permanent. Every innovation transfers more power from their vaults to your wallet. <span className="text-orange-400 font-semibold">The revolution isn't coming. You're holding it.</span>
                  </p>
                </div>
              </AnimatedCard>

            </div>
          </div>
        </section>

        {/* Provenance Blockchain Ecosystem Support */}
        <section className="py-40 relative"> {/* Increased from py-20 to py-40 */}
          {/* Unified seamless background - removed conflicting gradient */}
          
          <div className="container relative">
            <div className="text-center mb-16 animate-fade-in">
              {/* Enhanced HASH Logo with scroll-based glow */}
              <EnhancedHashLogo shouldGlow={animationState.hashGlow} />
              
              <p className="text-xl md:text-2xl text-foreground/90 max-w-4xl mx-auto leading-relaxed mb-12" style={{ textShadow: '0 0 10px rgba(255, 255, 255, 0.3), 0 0 20px rgba(255, 255, 255, 0.1)' }}>
                Hastra is built on Provenance Blockchain—and we're committed to making the entire ecosystem stronger.
              </p>
              <div className="card-gradient rounded-2xl p-6 md:p-8 card-hover max-w-4xl mx-auto mb-12">
                <p className="text-lg text-foreground/90 leading-relaxed">
                  Most DeFi protocols create their own tokens to capture value for themselves. We're taking a different approach. <span className="text-header-glow font-semibold">Instead of launching another token, we're channeling our success directly back to the HASH holders who power and secure the Provenance network.</span>
                </p>
              </div>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="card-gradient rounded-2xl p-8 md:p-12 card-hover">
                <div className="space-y-6">
                  <h3 className="text-2xl md:text-3xl font-bold">Coming Soon: HASH Token Buy & Burn Program</h3>
                  <p className="text-lg text-foreground/90 leading-relaxed">
                    A significant portion of revenue from our institutional-grade DeFi products will be used to <span className="text-crypto-accent font-semibold">systematically purchase and permanently burn HASH tokens from the open market</span>.
                  </p>
                  
                  <div className="space-y-4">
                    <h4 className="text-xl font-semibold text-foreground/90">Why This Approach:</h4>
                    
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-header-glow mt-2 flex-shrink-0"></div>
                        <div>
                          <span className="font-medium text-foreground/90">Strengthens network economics</span>
                          <span className="text-foreground/80"> - Reducing HASH supply while demand grows from ecosystem activity</span>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-header-glow mt-2 flex-shrink-0"></div>
                        <div>
                          <span className="font-medium text-foreground/90">Aligns incentives</span>
                          <span className="text-foreground/80"> - Our protocol's success directly benefits every HASH holder, not just our team</span>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-header-glow mt-2 flex-shrink-0"></div>
                        <div>
                          <span className="font-medium text-foreground/90">Supports decentralization</span>
                          <span className="text-foreground/80"> - We're not just using Provenance infrastructure—we're actively investing in its long-term economic health</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Additional commitment section */}
              <div className="card-gradient rounded-2xl p-8 md:p-12 card-hover mt-8">
                <p className="text-lg text-foreground/90 leading-relaxed">
                  This isn't about short-term price movements. It's about building sustainable value for the community that makes decentralized finance possible. <span className="text-orange-400 font-semibold">Every token we burn represents our commitment to the ecosystem that enables financial freedom for everyone.</span>
                </p>
              </div>
              
              {/* Glowy conclusion text */}
              <div className="mt-16 text-center">
                <p className="text-xl md:text-2xl text-foreground/90 max-w-4xl mx-auto leading-relaxed" style={{ textShadow: '0 0 10px rgba(255, 255, 255, 0.3), 0 0 20px rgba(255, 255, 255, 0.1)' }}>
                  When we succeed, HASH holders succeed.
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

            </div>
          </div>
        </section>
        </main>
      </div>
    </div>
  );
};

export default About;
