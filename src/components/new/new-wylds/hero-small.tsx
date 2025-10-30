import heroImageMobile from "@/assets/new/wylds-page/wylds-hero.png";
import { Card } from "@/components/ui/card";
import { useYLDSApy } from "@/hooks/use-ylds-apy";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const HeroSmall = () => {
  const { displayApy } = useYLDSApy();
  return (
    <section
      aria-label="Learn Page Hero Section"
      className="font-season-sans bg-cover bg-[center_top_-15rem] pt-[200px] min-h-[1200px] flex items-end justify-center"
      style={{ backgroundImage: `url(${heroImageMobile})` }}
    >
      <div className="w-full flex flex-col items-center z-10 bg-gradient-to-b from-transparent to-black to-[40%] py-20 h-fit px-[37px]">
        <div className="flex flex-col items-center text-center text-[45px] leading-[108%]">
          <p>
            Buy it. Trade it. Lend it.{" "}
            <span className="text-brand-purple">Send it.</span>
          </p>
        </div>
        <p className="py-[42px] text-[22px] leading-[118%] text-center w-full">
          Earn yield on-the-go backed by real world assets.
        </p>
        <Card className="w-fit bg-[#021E4830] backdrop-blur-md text-[#CBCBCB] rounded-[42px] py-8 px-20 flex flex-col sm:flex-row items-center justify-center gap-10 border-r-0 border-l-0 border-y-[0.3] border-gray-600">
          <div className="flex flex-col items-center gap-y-[18px] text-[20px]">
            <p className="leading-[98%]">Current APY</p>
            <h3 className="font-[650] text-[60px] leading-[98%]">
              {displayApy}%
            </h3>
            <div className="flex items-center gap-3 leading-[98%]">
              <div className="bg-green-200 rounded-full size-3" />
              Live Rate
            </div>
          </div>
          <Button
            size="custom"
            className="rounded-full text-[13px] md:text-base leading-[110%] shadow-purple-button text-brand-white py-[20px] px-[32px] hover:bg-brand-background bg-brand-background w-fit"
            variant="noShadow"
          >
            GET wYLDS
            <ArrowRight className="size-6" />
          </Button>
        </Card>
        <p className="text-[#CBCBCB] text-[20px] leading-[98%] pt-8">
          Now available on Solana
        </p>
      </div>
    </section>
  );
};
