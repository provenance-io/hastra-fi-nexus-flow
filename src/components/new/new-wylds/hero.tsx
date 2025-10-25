import heroImage from "@/assets/new/wylds-page/wylds-hero.png";
import heroImageMobile from "@/assets/new/learn-page/learn-hero-mobile.png";
import { Card } from "@/components/ui/card";
import sideImage from "@/assets/new/wylds-page/wylds-hero-side.png";
import { useYLDSApy } from "@/hooks/use-ylds-apy";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  const { displayApy } = useYLDSApy();
  return (
    <section
      aria-label="Learn Page Hero Section"
      className="relative overflow-y-hidden font-season-sans bg-black"
    >
      <div
        className="mx-auto overflow-x-hidden overflow-y-hidden flex flex-col gap-4 text-brand-white max-w-screen h-screen min-h-[1093px] z-10"
        aria-label="Hero Image"
      >
        <img
          src={heroImageMobile}
          alt="Learn Hero"
          className="md:hidden sm:pb-0"
        />
        <div className="hidden md:block absolute top-[25%] left-[5%] lg:left-[15%] xl:left-[15%] 2xl:right-[30%] z-10">
          <div className="flex flex-col md:text-[45px] lg:text-[77px] leading-[98%]">
            Buy it. Trade it. <br />
            <p>
              Lend it. <span className="text-brand-purple">Send it.</span>
            </p>
          </div>
          <p className="pt-[42px] text-[22px] leading-[118%]">
            Earn yield on-the-go backed by real world assets.
          </p>
        </div>
        <div className="md:hidden top-[85%] sm:top-[70%] pb-[400px] sm:pb-[300px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 absolute w-full px-5 z-10 bg-gradient-to-b from-transparent to-[#021323]">
          <div className="flex flex-col items-center text-[45px] leading-[108%]">
            Buy it. Trade it. <br />
            <p>
              Lend it. <span className="text-brand-purple">Send it.</span>
            </p>
          </div>
          <p className="pt-[42px] text-[22px] leading-[118%] text-center w-full">
            Earn yield on-the-go backed by real world assets.
          </p>
        </div>
        <img
          src={heroImage}
          alt="About Hero"
          className="hidden md:block absolute inset-0 object-cover left-0 overflow-hidden min-h-[1093px]"
        />
        <div className="absolute bottom-0 w-screen h-[411px] bg-gradient-to-b from-transparent to-black" />
      </div>
      <div className="relative flex flex-col gap-[35px] items-center justify-center w-screen -mt-[550px] z-30 overflow-y-hidden min-h-[475px] lg:min-h-[675px] mb-[100px] bg-gradient-to-b from-transparent to-black">
        <Card className="w-fit bg-[#021E4830] backdrop-blur-md text-[#CBCBCB] rounded-[42px] py-[56px] px-[121px] flex items-center justify-center gap-[117px] border-r-0 border-l-0 border-y-[0.3] border-gray-600">
          <div className="flex flex-col items-center gap-y-[18px] text-[25px]">
            <p className="leading-[98%]">Current APY</p>
            <h3 className="font-[650] text-[90px] leading-[98%]">
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
        <p className="text-[#CBCBCB] text-[25px] leading-[98%]">
          Now available on Solana
        </p>
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
