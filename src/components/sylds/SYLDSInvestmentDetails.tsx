import { Building2, ExternalLink, FileText, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';

const SYLDSInvestmentDetails = () => {
  return (
    <section className="py-16 px-4 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 relative z-10">
        {/* Combined Dashboard Box - What sYLDS Invests In */}
        <div className="card-gradient rounded-3xl p-8 md:p-12 border border-transparent mb-16 relative">
          <div className="relative z-10">
            {/* Section Header */}
            <div className="mb-8 text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground/90">
                What sYLDS Invests In
              </h2>
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
                            <feature.icon className="h-6 w-6 md:h-7 md:w-7 text-white" />
                          </div>
                          <h3 className="text-base md:text-lg font-bold text-foreground/90 mb-2 md:mb-3">
                            {feature.title}
                          </h3>
                          <p className="text-xs md:text-sm text-foreground/70 leading-relaxed">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Back of card */}
                    <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)]">
                      <div className="w-full h-full bg-gradient-to-br from-crypto-accent/20 to-auburn-primary/20 rounded-2xl p-4 md:p-6 text-center space-y-3 border border-crypto-accent/30 backdrop-blur-sm">
                        <div className="h-full flex flex-col justify-center space-y-2 md:space-y-3">
                          <div className="w-10 h-10 md:w-12 md:h-12 bg-white/10 rounded-xl mx-auto flex items-center justify-center">
                            <feature.icon className="h-5 w-5 md:h-6 md:w-6 text-crypto-accent" />
                          </div>
                          <h4 className="text-sm md:text-base font-semibold text-white mb-2">
                            Learn More
                          </h4>
                          <p className="text-xs text-white/80 leading-relaxed">
                            Discover how {feature.title.toLowerCase()} contributes to your sYLDS yields
                          </p>
                          <Button
                            size="sm"
                            variant="outline"
                            className="mt-2 md:mt-3 text-xs bg-white/10 border-white/20 text-white hover:bg-white/20"
                          >
                            View Details
                            <ExternalLink className="ml-1 h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Investment Stats */}
            <div className="mt-12 pt-8 border-t border-border/20">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-xl md:text-2xl font-bold text-crypto-accent mb-1">
                    $847M
                  </div>
                  <div className="text-xs md:text-sm text-muted-foreground">
                    Total HELOC Portfolio
                  </div>
                </div>
                <div>
                  <div className="text-xl md:text-2xl font-bold text-crypto-accent mb-1">
                    7.2%
                  </div>
                  <div className="text-xs md:text-sm text-muted-foreground">
                    Avg. Interest Rate
                  </div>
                </div>
                <div>
                  <div className="text-xl md:text-2xl font-bold text-crypto-accent mb-1">
                    68%
                  </div>
                  <div className="text-xs md:text-sm text-muted-foreground">
                    Avg. Loan-to-Value
                  </div>
                </div>
                <div>
                  <div className="text-xl md:text-2xl font-bold text-crypto-accent mb-1">
                    &lt;0.1%
                  </div>
                  <div className="text-xs md:text-sm text-muted-foreground">
                    Default Rate
                  </div>
                </div>
              </div>
            </div>

            {/* Disclaimer */}
            <div className="mt-8 p-4 bg-background/20 rounded-xl border border-border/20">
              <p className="text-xs text-muted-foreground leading-relaxed">
                <strong>Investment Details:</strong> sYLDS yield is generated through DemoPrime's HELOC lending operations, 
                providing exposure to real estate-backed lending. All investments carry risk and past performance 
                does not guarantee future results. Please review all documentation before investing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SYLDSInvestmentDetails;