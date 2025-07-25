import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useScrollBasedAnimation } from '@/hooks/useScrollBasedAnimation';
import AnimatedCard from '@/components/about/AnimatedCard';
import DynamicConnectingLines from '@/components/about/DynamicConnectingLines';
import EnhancedHashLogo from '@/components/about/EnhancedHashLogo';
import ProvenanceBranding from '@/components/ProvenanceBranding';

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
              <div className="relative animate-fade-in">
                <img 
                  src="/lovable-uploads/e7187c63-0dae-455c-971c-a6de70ce2afc.png" 
                  alt="Mission Logo" 
                  className="w-48 h-48 md:w-64 md:h-64"
                  style={{
                    filter: 'drop-shadow(0 0 6px rgba(0, 255, 150, 0.4)) drop-shadow(0 0 12px rgba(0, 200, 255, 0.2))',
                    animation: 'logoGlow 4s ease-in-out infinite'
                  }}
                  loading="eager"
                />
              </div>
            </div>
            
            
              <p className="text-xl md:text-2xl text-foreground/90 max-w-4xl mx-auto leading-relaxed mb-12" style={{ textShadow: '0 0 10px rgba(255, 255, 255, 0.3), 0 0 20px rgba(255, 255, 255, 0.1)' }}>
                Repeat after Us: Accessing good investments shouldn't require a trust fund.
              </p>

              {/* Flashing downward arrow indicator */}
              <div className="flex justify-center my-12">
                <div className="animate-pulse">
                  <svg 
                    className="w-8 h-8" 
                    style={{
                      filter: 'drop-shadow(0 0 12px rgba(229, 218, 194, 0.8)) drop-shadow(0 0 24px rgba(229, 218, 194, 0.4))',
                      animation: 'pulse 2s ease-in-out infinite'
                    }}
                    fill="none" 
                    stroke="rgba(229, 218, 194, 1)" 
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </div>
              </div>
            </div>
        </section>

        {/* Three Core Segments Section with Animation */}
        <section className="py-4 md:py-8 relative">
          {/* Dynamic Connecting Lines */}
          <DynamicConnectingLines 
            connections={[
              { from: 'mission-card', to: 'belief-card', visible: animationState.missionToBeliefLine },
              { from: 'belief-card', to: 'vision-card', visible: animationState.beliefToVisionLine },
              { from: 'vision-card', to: 'hash-logo', visible: animationState.visionToHashLine },
              { from: 'provenance-card', to: 'hash-token-card', visible: animationState.hashTokenToCommitmentLine },
              { from: 'hash-token-card', to: 'commitment-card', visible: animationState.commitmentToSuccessLine },
              { from: 'short-term-movements', to: 'join-mission', visible: animationState.shortTermToJoinLine },
            ]}
          />
          
          <div className="container relative">
            <div className="max-w-5xl mx-auto space-y-24">
              
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
              <EnhancedHashLogo shouldGlow={animationState.hashGlow} showCircle={animationState.hashCircleVisible} />
              
              <p className="text-xl md:text-2xl text-foreground/90 max-w-5xl mx-auto leading-relaxed mb-12" style={{ textShadow: '0 0 10px rgba(255, 255, 255, 0.3), 0 0 20px rgba(255, 255, 255, 0.1)' }}>
                Hastra is built on <a href="https://provenance.io" target="_blank" rel="noopener noreferrer" className="text-foreground/90 transition-colors hover:text-[#60C4A8]">Provenance Blockchain</a>—and we're committed to making the entire ecosystem stronger.
              </p>
              
              {/* Flashing downward arrow indicator */}
              <div className="flex justify-center my-24">
                <div className="animate-pulse">
                  <svg 
                    className="w-8 h-8" 
                    style={{
                      filter: 'drop-shadow(0 0 12px rgba(229, 218, 194, 0.8)) drop-shadow(0 0 24px rgba(229, 218, 194, 0.4))',
                      animation: 'pulse 2s ease-in-out infinite'
                    }}
                    fill="none" 
                    stroke="rgba(229, 218, 194, 1)" 
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </div>
              </div>
              
              <div id="provenance-card" className={`card-gradient rounded-3xl p-6 md:p-8 card-bottom-static max-w-5xl mx-auto mb-12 transition-all duration-500 ${
                animationState.provenanceCardGlow ? 'card-bottom-glow border-2' : 'border border-transparent'
              }`}>
                {animationState.provenanceCardGlow && (
                  <div className="absolute inset-0 rounded-3xl pointer-events-none" 
                       style={{ background: 'linear-gradient(to bottom right, rgba(229, 218, 194, 0.02), rgba(229, 218, 194, 0.01))' }} />
                )}
                
                <div className="relative z-10">
                  <p className="text-lg text-foreground/90 leading-relaxed">
                    Most DeFi protocols create their own tokens to capture value for themselves. We're taking a different approach. Instead of launching another token, we're channeling our success directly back to the HASH holders who power and secure the <a href="https://provenance.io" target="_blank" rel="noopener noreferrer" className="text-header-glow hover:text-header-glow/80 transition-colors">Provenance Blockchain</a>.
                  </p>
                </div>
              </div>
            </div>

            <div className="max-w-5xl mx-auto mt-32">
              <div id="hash-token-card" className={`card-gradient rounded-3xl p-8 md:p-12 card-bottom-static transition-all duration-500 ${
                animationState.hashTokenCardGlow ? 'card-bottom-glow border-2' : 'border border-transparent'
              }`}>
                {animationState.hashTokenCardGlow && (
                  <div className="absolute inset-0 rounded-3xl pointer-events-none" 
                       style={{ background: 'linear-gradient(to bottom right, rgba(229, 218, 194, 0.02), rgba(229, 218, 194, 0.01))' }} />
                )}
                
                <div className="relative z-10 space-y-6">
                  <h3 className="text-2xl md:text-3xl font-bold">Coming Soon: HASH Token Buy & Burn Program</h3>
                  <p className="text-lg text-foreground/90 leading-relaxed">
                    A significant portion of revenue from our institutional-grade DeFi products will be used to <span className="text-crypto-accent font-semibold">systematically purchase and permanently burn HASH tokens from the open market</span>.
                  </p>
                  
                  <div className="space-y-4">
                    <h4 className="text-xl font-semibold text-foreground/90">Why This Approach:</h4>
                    
                    <div className="space-y-6">
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-foreground/80 mt-2 flex-shrink-0"></div>
                        <div>
                          <span className="font-medium text-foreground/90">Strengthens network economics</span>
                          <span className="text-foreground/80"> - Reducing HASH supply while demand grows from ecosystem activity</span>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-foreground/80 mt-2 flex-shrink-0"></div>
                        <div>
                          <span className="font-medium text-foreground/90">Aligns incentives</span>
                          <span className="text-foreground/80"> - Our protocol's success directly benefits every HASH holder, not just our team</span>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-foreground/80 mt-2 flex-shrink-0"></div>
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
              <div id="commitment-card" className={`card-gradient rounded-3xl p-8 md:p-12 card-bottom-static mt-32 transition-all duration-500 ${
                animationState.commitmentCardGlow ? 'card-bottom-glow border-2' : 'border border-transparent'
              }`}>
                {animationState.commitmentCardGlow && (
                  <div className="absolute inset-0 rounded-3xl pointer-events-none" 
                       style={{ background: 'linear-gradient(to bottom right, rgba(229, 218, 194, 0.02), rgba(229, 218, 194, 0.01))' }} />
                )}
                
                <div className="relative z-10">
                  <p className="text-lg text-foreground/90 leading-relaxed">
                    This isn't about short-term price movements. It's about building sustainable value for the community that makes decentralized finance possible. <span className="text-orange-400 font-semibold">Every token we burn represents our commitment to the ecosystem that enables financial freedom for everyone.</span>
                  </p>
                </div>
                {/* Invisible element at bottom for line connection */}
                <div id="short-term-movements" className="absolute bottom-0 left-1/2 w-1 h-1"></div>
              </div>
              
              {/* Glowy conclusion text */}
              <div className="mt-16 text-center relative">
                <p className="text-xl md:text-2xl text-foreground/90 max-w-5xl mx-auto leading-relaxed" style={{ textShadow: '0 0 10px rgba(255, 255, 255, 0.3), 0 0 20px rgba(255, 255, 255, 0.1)' }}>
                  When we succeed, HASH holders succeed.
                </p>
                
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced CTA Section with Pulsating Glow */}
        <section className="py-16 relative overflow-hidden">
          <div className="container relative">
            <div className="max-w-5xl mx-auto">
              {/* Container with soft pulsating glow around the entire section */}
              <div className="relative">
                {/* Background div that reveals from top to bottom */}
                <div 
                  className={`absolute inset-0 rounded-3xl transition-all duration-[4000ms] ease-out ${
                    animationState.joinMissionGlow ? 'animate-reveal-backdrop' : 'opacity-0'
                  }`}
                  style={{
                    background: 'rgba(229, 218, 194, 0.08)',
                    border: '2px solid rgba(229, 218, 194, 0.3)',
                    boxShadow: '0 0 30px rgba(229, 218, 194, 0.2), 0 0 60px rgba(229, 218, 194, 0.1)',
                    transform: 'scaleX(1.005) scaleY(1.01)', // Smaller on x-axis, 2px larger on y-axis
                    zIndex: -1
                  }}
                />
                
                <div id="join-mission" className={`card-gradient rounded-3xl p-8 md:p-12 card-bottom-static transition-all duration-500 ${
                  animationState.joinMissionGlow ? 'card-bottom-glow animate-border-draw' : 'border border-transparent'
                } relative animate-pulse-glow overflow-hidden`}
                     style={{
                       background: 'rgba(255, 255, 255, 0.02)',
                       backdropFilter: 'blur(20px)',
                       border: '1px solid rgba(229, 218, 194, 0.1)',
                       boxShadow: '0 0 30px rgba(229, 218, 194, 0.15), 0 0 60px rgba(229, 218, 194, 0.08), inset 0 0 20px rgba(229, 218, 194, 0.02)',
                       animation: 'soft-pulse-glow 4s ease-in-out infinite'
                     }}>
                
                <div className="relative z-10 space-y-6">
                  <h3 className="text-2xl md:text-3xl font-bold">Join Our Mission</h3>
                  <p className="text-lg text-foreground/90 leading-relaxed">
                    Ready to be part of the financial revolution? Connect with us and help democratize access to institutional-grade DeFi opportunities.
                  </p>
                  
                   <div className="space-y-4">
                     <h4 className="text-xl font-semibold text-foreground/90">Connect With Us:</h4>
                   
                     {/* Social Media Icons */}
                     <div className="flex justify-center gap-12">
                       <a 
                         href="https://discord.gg/hastra" 
                         target="_blank" 
                         rel="noopener noreferrer"
                         className="group p-6 rounded-full border-2 border-white/20 hover:border-white/40 transition-all duration-300"
                         style={{
                           background: 'rgba(255, 255, 255, 0.05)',
                           backdropFilter: 'blur(16px)'
                         }}
                       >
                         <svg 
                           className="w-10 h-10 group-hover:scale-110 transition-transform duration-300" 
                           viewBox="0 0 24 24"
                         >
                           <defs>
                             <linearGradient id="discord-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                               <stop offset="0%" stopColor="hsl(180 100% 50%)" />
                               <stop offset="100%" stopColor="hsl(120 70% 45%)" />
                             </linearGradient>
                           </defs>
                           <path 
                             fill="url(#discord-gradient)"
                             d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"
                           />
                         </svg>
                       </a>
                       
                       <a 
                         href="https://x.com/HastraFi" 
                         target="_blank" 
                         rel="noopener noreferrer"
                         className="group p-6 rounded-full border-2 border-white/20 hover:border-white/40 transition-all duration-300"
                         style={{
                           background: 'rgba(255, 255, 255, 0.05)',
                           backdropFilter: 'blur(16px)'
                         }}
                       >
                         <svg 
                           className="w-10 h-10 group-hover:scale-110 transition-transform duration-300" 
                           viewBox="0 0 24 24"
                         >
                           <defs>
                             <linearGradient id="x-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                               <stop offset="0%" stopColor="hsl(180 100% 50%)" />
                               <stop offset="100%" stopColor="hsl(120 70% 45%)" />
                             </linearGradient>
                           </defs>
                           <path 
                             fill="url(#x-gradient)"
                             d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
                           />
                         </svg>
                       </a>
                     </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </section>
        </main>
        <ProvenanceBranding />
      </div>
    </div>
  );
};

export default About;
