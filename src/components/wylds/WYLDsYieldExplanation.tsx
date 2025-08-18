import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  ChevronDown,
  ChevronRight,
  TrendingUp,
  Calendar,
  Repeat,
  Building2,
  Zap,
  Link2,
  Loader2,
} from "lucide-react";
import { useRef, useState, useEffect } from "react";
import yieldIcon from "/lovable-uploads/1d678c0f-09c8-4451-a9a6-3e635e0fef72.png";
import {
  fetchCurrentAPY,
  fetchActiveHolders,
  fetchTotalCirculation,
} from "@/utils/solana-utils";
import { useQuery } from "@tanstack/react-query";
import { formatNumber } from "./WYLDsStatsDashboard";

const YieldTokenIcon = ({ className }: { className?: string }) => (
  <img
    src={yieldIcon}
    alt="sYLDS Token"
    className={`${className} object-contain`}
  />
);

const WYLDsYieldExplanation = () => {
  const {
    data: apy,
    isLoading: apyLoading,
    error: apyError,
  } = useQuery({
    queryKey: ["yield-apy"],
    queryFn: fetchCurrentAPY,
    refetchInterval: 5 * 60 * 1000, // Refetch every 5 minutes
  });

  const {
    data: holders,
    isLoading: holdersLoading,
    error: holdersError,
  } = useQuery({
    queryKey: ["active-holders"],
    queryFn: fetchActiveHolders,
    refetchInterval: 5 * 60 * 1000, // Refetch every 5 minutes
  });

  const {
    data: circulation,
    isLoading: circulationLoading,
    error: circulationError,
  } = useQuery({
    queryKey: ["total-circulation"],
    queryFn: fetchTotalCirculation,
    refetchInterval: 5 * 60 * 1000, // Refetch every 5 minutes
  });
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const steps = [
    {
      number: 1,
      icon: YieldTokenIcon,
      title: "Hold sYLDS tokens",
      description: "Simply hold sYLDS tokens in any compatible Solana wallet",
      color: "from-header-glow to-crypto-accent",
      bgPattern: "bg-header-glow/10",
    },
    {
      number: 2,
      icon: TrendingUp,
      title: "Watch your balance grow",
      description:
        "Watch your balance grow on hastra.io - Yield is automatically calculated.",
      color: "from-crypto-accent to-header-glow",
      bgPattern: "bg-crypto-accent/10",
    },
    {
      number: 3,
      icon: Calendar,
      title: "Monthly Distributions",
      description:
        "Claim your yield on hastra.io on a monthly basis in sYLDS tokens",
      color: "from-header-glow to-crypto-accent",
      bgPattern: "bg-header-glow/10",
    },
    {
      number: 4,
      icon: Repeat,
      title: "Use daily, or redeem for USDC",
      description:
        "Easily redeem your sYLDS through Raydium and Kamino protocols",
      color: "from-crypto-accent to-header-glow",
      bgPattern: "bg-crypto-accent/10",
    },
  ];

  const handleScrollUpdate = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const scrollLeft = container.scrollLeft;
      const maxScroll = container.scrollWidth - container.clientWidth;
      const progress = maxScroll > 0 ? (scrollLeft / maxScroll) * 100 : 0;
      setScrollProgress(progress);
    }
  };

  const handleSliderChange = (clientX: number, sliderRect: DOMRect) => {
    const percentage = Math.max(
      0,
      Math.min(100, ((clientX - sliderRect.left) / sliderRect.width) * 100)
    );
    setScrollProgress(percentage);

    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const maxScroll = container.scrollWidth - container.clientWidth;
      container.scrollLeft = (percentage / 100) * maxScroll;
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScrollUpdate);
      return () => container.removeEventListener("scroll", handleScrollUpdate);
    }
  }, []);

  return (
    <section className="py-16 px-4 relative overflow-hidden">
      {/* Background gradient */}
      {/* Unified seamless background - removed conflicting gradient */}

      <div className="max-w-5xl mx-auto px-4 relative z-10">
        {/* Combined Dashboard Box - What is wYLDS? + How It Works */}
        <div className="card-gradient rounded-3xl p-8 md:p-12 border border-transparent mb-16 relative">
          <div className="relative z-10">
            {/* What is wYLDS Section */}
            {/* Section Header - Matching About page AnimatedCard style */}
            <div className="mb-8 text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground/90">
                What is wYLDS?
              </h2>
            </div>
            {/* Feature Cards */}
            <div className="grid gap-6 md:gap-10 md:grid-cols-3">
              {[
                {
                  icon: Building2,
                  title: "Backed by RWAs",
                  description:
                    "wYLDS token is backed by reserves of YLDS - the first SEC-registered, yield-bearing stablecoin backed by real world assets.",
                },
                {
                  icon: Zap,
                  title: "Automatic Yield",
                  description:
                    "Earn yield automatically just by holding wYLDS in your wallet - no staking required.",
                },
                {
                  icon: Link2,
                  title: "Cross-Chain",
                  description:
                    "Available on Solana with plans to expand to additional blockchain networks.",
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

            {/* Description - Matching About page style */}
            <div className="mt-12 mb-16">
              <p className="text-lg text-foreground/90 leading-relaxed mb-4">
                wYLDS is a token representing a portion of a pool of reserves
                holding the YLDS token - the first SEC-registered, yield-bearing
                stablecoin combining the liquidity of traditional stablecoins
                with the earning power of a money market fund.*
              </p>
              <p className="text-lg text-foreground/90 leading-relaxed">
                As users deposit USDC, Hastra purchases and holds YLDS, and
                distributes interest in wYLDS to token holders. Because{" "}
                <span className="text-header-glow font-semibold">
                  earning yield shouldn't require complex strategies—it should
                  just work
                </span>
                .
              </p>
            </div>

            {/* CTA Button */}
            <div className="text-center mb-16">
              <Button
                size="lg"
                variant="secondary"
                className="min-w-[200px] group"
                asChild
              >
                <a
                  href="https://www.ylds.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn more about YLDS
                </a>
              </Button>
            </div>

            {/* Disclaimer */}
            <div className="text-center mb-16">
              <p className="text-sm italic text-white/80 max-w-2xl mx-auto leading-relaxed">
                *wYLDS is not registered with the SEC or any securities
                regulator. YLDS is issued by a third party independent of
                Hastra.
              </p>
            </div>

            {/* How It Works Section */}
            {/* How It Works Section Header - Matching About page AnimatedCard style */}
            <div className="mb-8 text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground/90">
                How It Works
              </h2>
            </div>

            {/* Desktop: Scrollable Horizontal Layout */}
            <div className="hidden lg:block max-w-7xl mx-auto">
              <div
                ref={scrollContainerRef}
                className="overflow-x-auto pb-4 scrollbar-hide"
              >
                <div className="flex items-center gap-8 min-w-max px-4 py-4">
                  {steps.map((step, index) => {
                    const IconComponent = step.icon;
                    return (
                      <div
                        key={step.number}
                        className="flex items-center flex-shrink-0"
                      >
                        {/* Step Card - Fixed Size */}
                        <div className="relative group">
                          {/* Number Badge */}
                          <div className="absolute -top-3 -right-3 w-8 h-8 bg-orange-900/20 border border-orange-800/30 text-orange-300 rounded-full flex items-center justify-center font-bold text-sm shadow-lg z-10">
                            {step.number}
                          </div>

                          {/* Card Container - Fixed Dimensions */}
                          <div className="w-64 h-80 card-gradient rounded-2xl p-8 text-center space-y-4 hover:bg-background/60 transition-all duration-300 relative overflow-hidden">
                            {/* Icon Container */}
                            <div className="relative z-10 mb-4 flex justify-center">
                              {step.number === 1 ? (
                                <IconComponent className="w-14 h-14" />
                              ) : (
                                <div
                                  className={`w-14 h-14 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                                >
                                  <IconComponent className="w-7 h-7 text-black" />
                                </div>
                              )}
                            </div>

                            {/* Content */}
                            <div className="relative z-10 flex flex-col justify-between h-auto space-y-4">
                              <h4
                                className="font-bold text-lg transition-colors duration-300"
                                style={{ color: "hsl(34, 100%, 84%)" }}
                              >
                                {step.title}
                              </h4>
                              <p className="text-foreground/90 text-sm leading-relaxed px-2">
                                {step.description}
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* Arrow Connector */}
                        {index < steps.length - 1 && (
                          <div className="mx-6 flex items-center justify-center h-80">
                            <ChevronRight
                              className="w-8 h-8"
                              style={{ color: "hsl(34, 100%, 84%)" }}
                            />
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Mobile/Tablet: Clean Vertical Layout */}
            <div className="lg:hidden max-w-sm mx-auto space-y-8">
              {steps.map((step, index) => {
                const IconComponent = step.icon;
                return (
                  <div key={step.number} className="relative">
                    {/* Step Card - Consistent Mobile Size */}
                    <div className="relative group">
                      {/* Number Badge */}
                      <div className="absolute -top-3 -right-3 w-8 h-8 bg-orange-900/20 border border-orange-800/30 text-orange-300 rounded-full flex items-center justify-center font-bold text-sm shadow-lg z-10">
                        {step.number}
                      </div>

                      {/* Card Container - Fixed Mobile Dimensions */}
                      <div className="w-full h-64 card-gradient rounded-2xl p-8 text-center space-y-4 hover:bg-background/60 transition-all duration-300 relative overflow-hidden">
                        {/* Icon Container */}
                        <div className="relative z-10 mb-4 flex justify-center">
                          {step.number === 1 ? (
                            <IconComponent className="w-14 h-14" />
                          ) : (
                            <div
                              className={`w-14 h-14 bg-gradient-to-br ${step.color} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                            >
                              <IconComponent className="w-7 h-7 text-black" />
                            </div>
                          )}
                        </div>

                        {/* Content */}
                        <div className="relative z-10 flex flex-col justify-between h-auto space-y-4">
                          <h4
                            className="font-bold text-lg transition-colors duration-300"
                            style={{ color: "hsl(34, 100%, 84%)" }}
                          >
                            {step.title}
                          </h4>
                          <p className="text-foreground/90 text-sm leading-relaxed px-2">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Down Arrow Connector */}
                    {index < steps.length - 1 && (
                      <div className="flex justify-center my-8">
                        <ChevronDown
                          className="w-8 h-8"
                          style={{ color: "hsl(34, 100%, 84%)" }}
                        />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Ultra Sleek Scroll Bar - Desktop Only */}
            <div className="hidden lg:flex justify-center mt-8">
              <div
                className="relative w-80 h-0.5 cursor-pointer group"
                onMouseDown={(e) => {
                  const sliderRect = e.currentTarget.getBoundingClientRect();
                  handleSliderChange(e.clientX, sliderRect);

                  const handleMouseMove = (moveEvent: MouseEvent) => {
                    handleSliderChange(moveEvent.clientX, sliderRect);
                  };

                  const handleMouseUp = () => {
                    document.removeEventListener("mousemove", handleMouseMove);
                    document.removeEventListener("mouseup", handleMouseUp);
                  };

                  document.addEventListener("mousemove", handleMouseMove);
                  document.addEventListener("mouseup", handleMouseUp);
                }}
              >
                {/* Visible track */}
                <div
                  className="absolute inset-0 rounded-full"
                  style={{ backgroundColor: "hsl(34, 100%, 84%, 0.3)" }}
                />

                <div
                  className="absolute top-1/2 -translate-y-1/2 w-6 h-1 rounded-full transition-all duration-300 ease-out cursor-grab active:cursor-grabbing group-hover:scale-125 active:scale-110"
                  style={{
                    left: `${Math.max(
                      0,
                      Math.min(100 - (24 / 320) * 100, scrollProgress)
                    )}%`,
                    transform: "translateY(-50%)",
                    backgroundColor: "hsl(34, 100%, 84%)",
                    filter: "drop-shadow(0 2px 4px rgba(251, 146, 60, 0.3))",
                    boxShadow: "0 0 20px hsla(34, 100%, 84%, 0.6)",
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Watch sYLDS as it Grows text section */}
        <div className="text-center mb-12 mt-32">
          <p
            className="max-w-3xl mx-auto text-lg md:text-xl lg:text-2xl text-platinum/80 leading-relaxed"
            style={{
              textShadow:
                "0 0 10px rgba(255, 255, 255, 0.3), 0 0 20px rgba(255, 255, 255, 0.1)",
            }}
          >
            Watch sYLDS as it Grows
          </p>
        </div>

        {/* By the Numbers Dashboard Box */}
        <div className="card-gradient rounded-3xl p-8 md:p-12 border border-transparent mb-16 relative">
          <div className="relative z-10">
            {/* Section Header - Matching About page AnimatedCard style */}
            <div className="mb-8 text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground/90">
                By the Numbers
              </h2>
            </div>

            <div className="grid gap-8 md:gap-10 grid-cols-1 sm:grid-cols-3 max-w-7xl mx-auto">
              <div className="aspect-square bg-background/30 rounded-xl md:rounded-2xl p-6 md:p-8 text-center flex flex-col justify-center space-y-3 md:space-y-4 border border-border/20 hover:border-hastra-teal/20 transition-all duration-300">
                <div
                  className="text-xs md:text-sm font-medium leading-tight"
                  style={{ color: "hsl(34, 100%, 84%)" }}
                >
                  Total sYLDS in Circulation
                </div>
                <div className="text-2xl md:text-3xl lg:text-4xl font-bold flex items-center justify-center gap-1 md:gap-2">
                  <span
                    className={
                      circulationError ? "text-red-400" : "text-foreground/90"
                    }
                  >
                    {circulationLoading ? (
                      <Loader2 className="h-3 w-3 md:h-5 md:w-5 animate-spin" />
                    ) : circulationError ? (
                      "Error"
                    ) : (
                      formatNumber(circulation || 0)
                    )}
                  </span>
                </div>
                <div className="flex justify-center items-center gap-1 md:gap-2">
                  <div
                    className={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full ${
                      circulationError
                        ? "bg-red-400"
                        : "bg-header-glow animate-pulse"
                    }`}
                  ></div>
                  <span className="text-xs md:text-sm text-platinum/60">
                    {circulationError ? "Error" : "Live"}
                  </span>
                </div>
              </div>

              <div
                className="aspect-square bg-background/30 rounded-xl md:rounded-2xl p-6 md:p-8 text-center flex flex-col justify-center space-y-3 md:space-y-4 border border-border/20 hover:border-hastra-teal/20 transition-all duration-300"
                style={{ animationDelay: "0.1s" }}
              >
                <div
                  className="text-xs md:text-sm font-medium leading-tight"
                  style={{ color: "hsl(34, 100%, 84%)" }}
                >
                  Current APY
                </div>
                <div className="text-2xl md:text-3xl lg:text-4xl font-bold flex items-center justify-center gap-1 md:gap-2">
                  <span
                    className={apyError ? "text-red-400" : "text-foreground/90"}
                  >
                    {apyLoading ? (
                      <Loader2 className="h-3 w-3 md:h-5 md:w-5 animate-spin" />
                    ) : apyError ? (
                      "Error"
                    ) : (
                      `${apy}%`
                    )}
                  </span>
                </div>
                <div className="flex justify-center items-center gap-1 md:gap-2">
                  <div
                    className={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full ${
                      apyError ? "bg-red-400" : "bg-header-glow animate-pulse"
                    }`}
                  ></div>
                  <span className="text-xs md:text-sm text-platinum/60">
                    {apyError ? "Error" : "Live"}
                  </span>
                </div>
              </div>

              {/* <div
                className="aspect-square bg-background/30 rounded-xl md:rounded-2xl p-6 md:p-8 text-center flex flex-col justify-center space-y-3 md:space-y-4 border border-border/20 hover:border-hastra-teal/20 transition-all duration-300"
                style={{ animationDelay: "0.2s" }}
              >
                <div
                  className="text-xs md:text-sm font-medium leading-tight"
                  style={{ color: "hsl(34, 100%, 84%)" }}
                >
                  Total Yield Earned
                </div>
                <div className="text-2xl md:text-3xl lg:text-4xl font-bold flex items-center justify-center gap-1 md:gap-2">
                  <span className="text-foreground/90">$1.2M</span>
                </div>
                <div className="flex justify-center items-center gap-1 md:gap-2">
                  <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-header-glow animate-pulse"></div>
                  <span className="text-xs md:text-sm text-platinum/60">
                    Live
                  </span>
                </div>
              </div> */}

              <div
                className="aspect-square bg-background/30 rounded-xl md:rounded-2xl p-6 md:p-8 text-center flex flex-col justify-center space-y-3 md:space-y-4 border border-border/20 hover:border-hastra-teal/20 transition-all duration-300"
                style={{ animationDelay: "0.3s" }}
              >
                <div
                  className="text-xs md:text-sm font-medium leading-tight"
                  style={{ color: "hsl(34, 100%, 84%)" }}
                >
                  Active Holders
                </div>
                <div className="text-2xl md:text-3xl lg:text-4xl font-bold flex items-center justify-center gap-1 md:gap-2">
                  <span
                    className={
                      holdersError ? "text-red-400" : "text-foreground/90"
                    }
                  >
                    {holdersLoading ? (
                      <Loader2 className="h-3 w-3 md:h-5 md:w-5 animate-spin" />
                    ) : holdersError ? (
                      "Error"
                    ) : (
                      holders
                    )}
                  </span>
                </div>
                <div className="flex justify-center items-center gap-1 md:gap-2">
                  <div
                    className={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full ${
                      holdersError
                        ? "bg-red-400"
                        : "bg-header-glow animate-pulse"
                    }`}
                  ></div>
                  <span className="text-xs md:text-sm text-platinum/60">
                    {holdersError ? "Error" : "Live"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WYLDsYieldExplanation;
