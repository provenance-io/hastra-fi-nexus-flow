import heroImageMobile from "@/assets/new/wylds-page/wylds-hero.png";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { usePRIMEAPR } from "@/hooks/use-prime-apr";

export const HeroSmall = () => {
  const { rate, loading, error } = usePRIMEAPR();
  const displayApr = loading ? "..." : error ? "Error" : `${rate}%`;
  return (
    <section
      aria-label="Learn Page Hero Section"
      className="font-season-sans bg-cover bg-[center_top_-15rem] pt-[200px] min-h-[1200px] flex items-end justify-center"
      style={{ backgroundImage: `url(${heroImageMobile})` }}
    >
      <div className="w-full flex flex-col z-10 bg-gradient-to-b from-transparent to-black to-[40%] py-20 h-fit px-[37px]">
        <div className="flex flex-col text-start text-[45px] leading-[108%] pt-8">
          <p>
            Earn <span className="text-brand-purple">{displayApr} APY</span>{" "}
            with PRIME
          </p>
        </div>
        <div className="py-[25px] text-[18px] leading-[118%] space-y-[25px]">
          <p className="text-brand-light-purple">
            Real Yield. Real Assets. Real Returns.
          </p>
          <p>
            Stake your PRIME to earn sustainable yield backed by real-world
            HELOC lending. Powered by Figure’s Democratized Prime.
          </p>
        </div>
        <Card className="w-fit bg-[#021E4830] backdrop-blur-md text-[#CBCBCB] rounded-[42px] py-8 px-20 flex flex-col sm:flex-row items-center justify-center gap-10 border-r-0 border-l-0 border-y-[0.3] border-gray-600">
          <div className="flex flex-col items-center gap-y-[18px] text-[20px]">
            <p className="leading-[98%]">Current APY</p>
            <h3 className="font-[650] text-[60px] leading-[98%]">
              {displayApr}
            </h3>
            <div className="flex items-center gap-3 leading-[98%]">
              <div className="bg-green-200 rounded-full size-3" />
              Live Rate
            </div>
          </div>
          <div className="space-y-[10px] text-center">
            <Button
              size="custom"
              className="rounded-full text-[13px] md:text-base leading-[110%] shadow-purple-button text-brand-white py-[20px] px-[32px] hover:bg-brand-background bg-brand-background w-fit"
              variant="noShadow"
            >
              Start Earning Now
              <ArrowRight className="size-6" />
            </Button>
            <p className="text-[11px] text-[#898989]">
              Real-time yield calculation
            </p>
          </div>
          <p className="text-[#898989] text-[12px] text-center">
            Secured by: SEC-registered protocols • Real asset backing •
            Multi-sig security
          </p>
        </Card>
      </div>
    </section>
  );
};
