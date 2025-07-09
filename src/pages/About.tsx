import Header from '@/components/Header';
import Footer from '@/components/Footer';
import InnovationFocus from '@/components/InnovationFocus';
import AccessibilityFeatures from '@/components/AccessibilityFeatures';
import PerformanceOptimizer from '@/components/PerformanceOptimizer';
import { Button } from '@/components/ui/button';
import { ArrowRight, Target, Eye, Coins } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <AccessibilityFeatures />
      <PerformanceOptimizer />
      <Header />
      <main id="main-content" className="flex-grow" role="main">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-background via-header-glow/5 to-crypto-accent/5"></div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiIgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIiBmaWxsPSJub25lIiBzdHJva2U9InJnYmEoMTAsIDIwLCA0MCwwLjA1KSI+PGQgcGF0aD0iTTAtMSAwIDEgTS0xIDAgMSAwIj48L2Q+PC9zdmc+')] opacity-40"></div>
          
          <div className="container relative text-center animate-fade-in">
            <div className="inline-block bg-header-glow/20 border border-header-glow/30 rounded-full px-4 py-2 text-sm mb-6 animate-glow-pulse">
              <span className="mr-2 w-2 h-2 bg-header-glow rounded-full animate-pulse inline-block"></span>
              About Hastra-Fi
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6">
              <span className="block text-gradient animate-slide-in-left">
                Our Mission
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-8">
              Democratizing access to <span className="text-header-glow font-semibold">elite financial products</span> through blockchain innovation and regulatory compliance.
            </p>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="py-20 relative">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Mission */}
              <div className="space-y-6 animate-fade-in">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-header-glow/20 flex items-center justify-center">
                    <Target className="w-6 h-6 text-header-glow" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold">Our Mission</h2>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To bridge the gap between traditional finance and decentralized technology by creating institutional-grade DeFi products that are accessible, transparent, and backed by real-world assets.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We believe that everyone should have access to the same high-yield investment opportunities that were previously reserved for institutions and high-net-worth individuals.
                </p>
              </div>

              {/* Vision */}
              <div className="space-y-6 animate-fade-in">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-crypto-accent/20 flex items-center justify-center">
                    <Eye className="w-6 h-6 text-crypto-accent" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold">Our Vision</h2>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  A future where financial services are truly decentralized, transparent, and globally accessible, while maintaining the security and compliance standards that institutional investors demand.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We envision a world where blockchain technology enables financial inclusion and creates new opportunities for wealth creation across all economic segments.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Innovation Focus Areas */}
        <InnovationFocus />

        {/* Provenance Blockchain Ecosystem Support */}
        <section className="py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-header-glow/5 to-crypto-accent/5"></div>
          
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
                  <div className="w-16 h-16 rounded-xl bg-header-glow/20 flex items-center justify-center flex-shrink-0">
                    <Coins className="w-8 h-8 text-header-glow" />
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-2xl md:text-3xl font-bold">HASH Token Buy & Burn Program</h3>
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

        {/* CTA Section */}
        <section className="py-20 relative">
          <div className="container text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Join Our Mission?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Start earning with our innovative DeFi products and become part of the future of finance.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button 
                size="lg" 
                className="bg-orange-900/20 border border-orange-800/30 text-orange-300 hover:bg-orange-900/30 hover:border-orange-800/40 focus-ring font-bold px-8 py-4 text-lg rounded-xl min-w-[200px] group"
                asChild
              >
                <Link to="/yield">
                  Start Earning Today
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button 
                size="lg" 
                className="bg-orange-900/20 border border-orange-800/30 text-orange-300 hover:bg-orange-900/30 hover:border-orange-800/40 focus-ring font-bold px-8 py-4 text-lg rounded-xl min-w-[200px] group"
                asChild
              >
                <Link to="/homes">
                  Explore Real Estate
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;