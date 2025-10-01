import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import { fetchCurrentAPR } from "@/utils/solana-utils";
import SPRIMEAnimatedHero from "./SPRIMEAnimatedHero";

const SPRIMEHero = () => {
  const [displayApr, setDisplayApr] = useState("");

  const {
    data: currentAPR,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["currentAPR"],
    queryFn: fetchCurrentAPR,
    refetchInterval: 5 * 60 * 1000, // Refetch every 5 minutes
  });

  useEffect(() => {
    if (currentAPR && !isLoading && !error) {
      setDisplayApr(currentAPR.toFixed(1));
    }
  }, [currentAPR, isLoading, error]);

  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      <div className="container relative z-10 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Animated Hero Graphic */}
          <div className="mb-8">
            <SPRIMEAnimatedHero />
          </div>

          {/* Main headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Earn <span className="text-hastra-gradient">{displayApr}% APY</span>{" "}
            with sPRIME
          </h1>

          {/* Subheadline */}
          <div className="text-xl md:text-2xl lg:text-3xl font-semibold mb-6 text-platinum/90">
            Real Yield. Real Assets. Real Returns.
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Stake your PRIME to earn sustainable yield backed by real-world
            HELOC lending operations. Built on Figure Markets' SEC-registered
            foundation.
          </p>

          {/* Live APY Display */}
          <div className="inline-flex items-center space-x-3 bg-card/50 backdrop-blur-sm border border-border/40 rounded-2xl px-6 py-4 mb-8">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-muted-foreground">
                Live Rate
              </span>
            </div>
            <div className="text-2xl font-bold text-foreground">
              {isLoading ? "..." : `${displayApr}%`} APR
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Link to="/earn" className="inline-block">
              <Button
                size="lg"
                className="text-lg px-8 py-4 h-auto font-semibold"
              >
                Start Earning Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>

            <div className="inline-flex items-center space-x-2 text-muted-foreground">
              <TrendingUp className="h-4 w-4" />
              <span className="text-sm">Real-time yield calculation</span>
            </div>
          </div>

          {/* Trust indicators */}
          <div className="text-sm text-muted-foreground">
            <span className="font-medium">Secured by:</span> SEC-registered
            protocols • Real asset backing • Multi-sig security
          </div>
        </div>
      </div>
    </section>
  );
};

export default SPRIMEHero;
