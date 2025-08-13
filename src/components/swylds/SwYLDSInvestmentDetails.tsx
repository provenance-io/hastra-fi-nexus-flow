import { Building2, ExternalLink, FileText, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';

const SwYLDSInvestmentDetails = () => {
  return (
    <section className="py-16 px-4 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 relative z-10">
        {/* Combined Dashboard Box - What swYLDS Invests In */}
        <div className="card-gradient rounded-3xl p-8 md:p-12 border border-transparent mb-16 relative">
          <div className="relative z-10">
            {/* Section Header */}
            <div className="mb-8 text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground/90">
                What swYLDS Invests In
              </h2>
              <p className="text-lg text-foreground/70 mt-4 max-w-3xl mx-auto">
                Your swYLDS earns yield from real-world Home Equity Line of Credit (HELOC) lending through Democratized Prime
              </p>
            </div>

            {/* Feature Cards */}
            <div className="grid gap-6 md:gap-10 md:grid-cols-3">
              {[
                {
                  icon: Building2,
                  title: "Real Estate Secured",
                  description:
                    "Backed by Home Equity Lines of Credit (HELOCs) secured by real estate properties across the United States.",
                },
                {
                  icon: Shield,
                  title: "Prime Borrowers",
                  description:
                    "Lending exclusively to prime borrowers with strong credit profiles and significant home equity positions.",
                },
                {
                  icon: FileText,
                  title: "Regulated Operations",
                  description:
                    "Operating through Figure Markets' regulated platform with proper compliance and risk management frameworks.",
                },
              ].map((feature, index) => (
                <div
                  key={feature.title}
                  className="group perspective-1000 h-48 md:h-56 cursor-pointer"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <div className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180">
                    {/* Front of card */}
                    <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(0deg)]">
                      <div className="w-full h-full bg-background/30 rounded-2xl p-4 md:p-6 text-center space-y-3 border border-border/20 hover:border-hastra-teal/20 transition-all duration-300 backdrop-blur-sm">
                        <div className="h-full flex flex-col justify-center">
                          <div className="w-14 h-14 bg-gradient-to-br from-header-glow to-crypto-accent rounded-2xl mx-auto mb-4 md:mb-6 flex items-center justify-center shadow-lg">
                            <feature.icon className="h-7 w-7 text-black" />
                          </div>
                          <h3
                            className="font-bold text-lg"
                            style={{ color: "hsl(34, 100%, 84%)" }}
                          >
                            {feature.title}
                          </h3>
                        </div>
                      </div>
                    </div>

                    {/* Back of card */}
                    <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)]">
                      <div className="w-full h-full card-gradient rounded-2xl p-4 md:p-6 text-center space-y-3 hover:bg-background/80 transition-all duration-300 bg-background/95 backdrop-blur-sm">
                        <div className="h-full flex flex-col justify-center">
                          <p className="text-base text-platinum/90 leading-relaxed px-2">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Description */}
            <div className="mt-12 mb-16">
              <p className="text-lg text-foreground/90 leading-relaxed mb-4">
                swYLDS generates yield through Democratized Prime, Figure Markets' lending platform that 
                originates Home Equity Lines of Credit (HELOCs) to prime borrowers. These loans are backed 
                by real estate collateral and provide sustainable, real-world returns.
              </p>
              <p className="text-lg text-foreground/90 leading-relaxed">
                This approach delivers{" "}
                <span className="text-header-glow font-semibold">
                  consistent, asset-backed yield without the volatility of speculative DeFi strategies
                </span>
                , creating a stable foundation for your staking rewards.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <Button
                size="lg"
                variant="secondary"
                className="min-w-[200px] group"
                asChild
              >
                <a
                  href="https://www.figuremarkets.com/c/democratized-prime"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  Learn about Demo Prime
                  <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
              
              <Button
                size="lg"
                variant="outline"
                className="min-w-[200px] group"
                asChild
              >
                <a
                  href="https://www.figuremarkets.com/resources/How-to-Lend-With-Democratized-Prime/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  Read Help Center
                  <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
              
              <Button
                size="lg"
                variant="outline"
                className="min-w-[200px] group"
                asChild
              >
                <a
                  href="https://www.figuremarkets.com/disclosures/helocs-credit-profile/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  HELOC Credit Profiles
                  <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
            </div>

            {/* Disclaimer */}
            <div className="text-center mb-16">
              <p className="text-sm italic text-white/80 max-w-2xl mx-auto leading-relaxed">
                *Investment returns are not guaranteed and depend on the performance of underlying HELOC lending operations. 
                Past performance does not guarantee future results. Please review all risk disclosures before investing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SwYLDSInvestmentDetails;