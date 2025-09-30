import { Button } from "@/components/ui/button";
import { Loader2, ArrowRight } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import FlashingText from "./FlashingText";
import { fetchCurrentAPY } from "@/utils/solana-utils";
import solanaLogo from "@/assets/solana-logo.svg";

interface FigureYieldResponse {
  rate: number;
}

const PRIMEHero = () => {
  const {
    data: apy,
    isLoading: apyLoading,
    error: apyError,
  } = useQuery({
    queryKey: ["yield-apy"],
    queryFn: fetchCurrentAPY,
    refetchInterval: 5 * 60 * 1000, // Refetch every 5 minutes
  });

  const displayApy = apyLoading
    ? "Loading..."
    : apyError
    ? "Error"
    : `${apy || 4}%`;

  const flashingPhrases = ["BUY IT.", " TRADE IT.", " LEND IT.", " SEND IT."];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden py-8 md:py-12 pt-6 md:pt-10">
      {/* Premium layered background - matching homepage */}
      {/* Unified seamless background - removed conflicting gradient */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiIgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIiBmaWxsPSJub25lIiBzdHJva2U9InJnYmEoMTAsIDIwLCA0MCwwLjA1KSI+PGQgcGF0aD0iTTAtMSAwIDEgTS0xIDAgMSAwIj48L2Q+PC9zdmc+')] opacity-30"></div>

      <div className="max-w-5xl mx-auto px-4 relative text-center">
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 md:mb-6 text-platinum/90">
          <FlashingText phrases={flashingPhrases} className="block" />
        </h2>

        <div className="mb-4 md:mb-6 flex justify-center">
          <img
            src="/lovable-uploads/cb96356b-822d-4dc0-963a-96ef43bfedbd.png"
            alt="sYLDS Token"
            className="w-48 h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 animate-pulse"
            style={{
              filter:
                "drop-shadow(0 0 20px rgba(0, 255, 150, 0.6)) drop-shadow(0 0 40px rgba(0, 200, 255, 0.4)) drop-shadow(0 0 60px rgba(255, 255, 255, 0.2))",
              transform: "perspective(1000px) rotateX(5deg) rotateY(5deg)",
              animation:
                "logoGlow 3s ease-in-out infinite, float 6s ease-in-out infinite",
            }}
          />
        </div>

        <p
          className="max-w-3xl mx-auto text-lg md:text-xl lg:text-2xl text-platinum/80 leading-relaxed mb-6 md:mb-8"
          style={{
            textShadow:
              "0 0 10px rgba(255, 255, 255, 0.3), 0 0 20px rgba(255, 255, 255, 0.1)",
          }}
        >
          Earn yield on-the-go and spend whenever you want - backed by real
          world assets.
        </p>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-8 my-6 md:my-8">
          {/* APY Box - same width as button */}
          <div className="group card-gradient rounded-xl p-4 text-center space-y-2 hover:bg-background/60 transition-all duration-300 order-2 lg:order-1 w-full max-w-[200px]">
            <div className="text-xs font-medium text-orange-300">
              Current APY
            </div>
            <div className="text-2xl md:text-3xl font-bold group-hover:scale-105 transition-transform duration-300 flex items-center justify-center gap-2">
              {apyLoading && <Loader2 className="w-5 h-5 animate-spin" />}
              <span
                className={
                  apyLoading
                    ? "opacity-50"
                    : apyError
                    ? "text-red-400"
                    : "text-foreground/90"
                }
              >
                {displayApy}
              </span>
            </div>
            <div className="flex justify-center items-center gap-2">
              <div
                className={`w-1.5 h-1.5 rounded-full ${
                  apyError ? "bg-red-400" : "bg-header-glow animate-pulse"
                }`}
              ></div>
              <span className="text-xs text-platinum/60">
                {apyError ? "Error" : "Live Rate"}
              </span>
            </div>
          </div>

          {/* GET sYLDS Button - aligned */}
          <div className="order-1 lg:order-2 w-full max-w-[200px]">
            <Button
              size="lg"
              variant="secondary"
              className="min-w-[200px] group"
              asChild
            >
              <Link to="/earn" className="flex items-center justify-center">
                Get PRIME
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>

            {/* Now available on Solana - directly below button */}
            <div className="text-sm font-medium mt-3">
              <span className="mr-2 w-2 h-2 bg-header-glow rounded-full"></span>
              <span className="text-platinum/90 font-semibold flex items-center justify-center gap-2">
                Now available on
                <img
                  src={solanaLogo}
                  alt="Solana"
                  className="h-4 w-auto inline"
                />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PRIMEHero;
