import heroImage from "@/assets/new/prime-page/prime-hero.png";
import { Card } from "@/components/ui/card";
import sideImage from "@/assets/new/wylds-page/wylds-hero-side.png";
import { useYLDSApy } from "@/hooks/use-ylds-apy";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { usePRIMEAPR } from "@/hooks/use-prime-apr";

export const Hero = () => {
  const { rate, loading, error } = usePRIMEAPR();
  const displayApr = loading ? "..." : error ? "Error" : `${rate}%`;
  return (
    <section
      aria-label="Learn Page Hero Section"
      className="overflow-y-hidden font-season-sans bg-black"
    >
      <div
        className="relative mx-auto overflow-x-hidden overflow-y-hidden flex flex-col gap-4 text-brand-white h-screen min-h-[1093px] z-10"
        aria-label="Hero Image"
      >
        <div className="absolute top-[20%] lg:top-[25%] right-[5%] lg:right-[10%] xl:right-[15%] 2xl:left-[30%] z-10 w-[350px] lg:w-[490px] xl:w-[490px]">
          <div className="flex flex-col md:text-[45px] lg:text-[77px] leading-[98%] w-fit">
            <p>
              Earn <span className="text-brand-purple">{displayApr} APY</span>
              <br /> with PRIME
            </p>
          </div>
          <div className="pt-[25px] text-[22px] leading-[118%] space-y-[25px]">
            <p className="text-brand-light-purple">
              Real Yield. Real Assets. Real Returns.
            </p>
            <p>
              Stake your PRIME to earn sustainable yield backed by real-world
              HELOC lending. Powered by Figure’s Democratized Prime.
            </p>
          </div>
        </div>
        <img
          src={heroImage}
          alt="About Hero"
          className="absolute -left-[200px] overflow-hidden max-h-[896px]"
        />
        <div className="absolute -left-[200px] overflow-hidden min-h-[896px] bg-gradient-to-br from-transparent to-black to-[90%] w-screen" />
      </div>
      <div className="relative flex flex-col gap-[35px] items-center justify-center w-screen -mt-[550px] z-30 overflow-y-hidden min-h-[475px] lg:min-h-[675px] mb-[100px] bg-gradient-to-b from-transparent to-black">
        <Card className="w-fit bg-[#021E4830] backdrop-blur-md text-[#CBCBCB] rounded-[42px] pt-[56px] pb-[14px] px-[121px] border-r-0 border-l-0 border-y-[0.3] border-gray-600">
          <div className="flex items-center justify-center gap-[117px] ">
            <div className="flex flex-col items-center gap-y-[18px] text-[25px]">
              <p className="leading-[98%]">Current APY</p>
              <h3 className="font-[650] text-[90px] leading-[98%]">
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
          </div>
          <p className="text-[#898989] text-[12px] pt-8">
            Secured by: SEC-registered protocols • Real asset backing •
            Multi-sig security
          </p>
        </Card>
        <img
          src={sideImage}
          alt="side image left"
          className="hidden lg:block h-[675px] absolute left-0 top-0 rotate-180"
        />
        <img
          src={sideImage}
          alt="side image right"
          className="hidden lg:block h-[675px] absolute right-0 top-0"
        />
      </div>
    </section>
  );
};
