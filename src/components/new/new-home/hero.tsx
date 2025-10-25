import { Button } from "@/components/ui/button";
import { useYLDSApy } from "@/hooks/use-ylds-apy";
import { ArrowRight } from "lucide-react";
import aboutHero from "@/assets/new/about-page/about-hero.jpg";
import aboutHeroMobile from "@/assets/new/about-page/about-hero-mobile.png";
import leftImage from "@/assets/new/about-page/about-hero-left-side.png";
import rightImage from "@/assets/new/about-page/about-hero-right-side.png";
import mobileLeft from "@/assets/new/about-page/grow-mobile-left.png";
import mobileRight from "@/assets/new/about-page/grow-mobile-right.png";
import { Link } from "react-router-dom";

export const Hero = () => {
  const { displayApy } = useYLDSApy();
  return (
    <section
      className="relative mx-auto overflow-x-hidden overflow-y-hidden flex flex-col gap-4 text-brand-white max-w-screen font-season-sans"
      aria-label="About Page Hero"
    >
      <img
        src={aboutHeroMobile}
        alt="About Hero"
        className="md:hidden pb-[100px] sm:pb-0"
      />
      <div className="absolute top-[25%] sm:top-[30%] md:relative sm:pt-[15%] px-4 md:px-0 md:pl-[10%] flex flex-col z-10">
        <p className="hidden md:block text-brand-light-purple text-base leading-[98%] pb-[25px]">
          Now Live: Earn Up to {displayApy}% APY
        </p>
        <div className="pb-[42px] text-[45px] md:text-[77px] leading-[98%]">
          <p>Stack</p>
          <p className="text-brand-purple">Real Assets</p>
          <p>On-Chain</p>
        </div>
        <p className="text-[19px] md:text-[22px] pb-[37px] leading-[118%] pr-4 md:pr-0">
          Elite DeFi Products for the Crypto Savvy,
          <br className="hidden md:block" /> Backed by Real-World Assets.
        </p>
        <div className="flex items-center gap-5 text-[18px] pb-[110px]">
          <Link to="">
            <Button className="h-[45px] px-[23px] md:h-[63px] rounded-full">
              Get wYLDS <ArrowRight className="size-4" />
            </Button>
          </Link>
          <Link to="">
            <Button className="h-[45px] px-[23px] md:h-[63px] rounded-full">
              Explore wYLDS <ArrowRight className="size-4" />
            </Button>
          </Link>
        </div>
      </div>
      <img
        src={aboutHero}
        alt="About Hero"
        className="hidden md:block absolute inset-0 object-cover md:left-[25%] lg:left-[5%] overflow-hidden min-h-[1093px]"
      />
      <div className="relative flex items-center justify-center z-10 min-h-[795px] w-screen text-brand-white">
        <div className="h-fit flex items-center justify-center self-center z-10">
          <img
            src={leftImage}
            alt="left image"
            className="absolute left-0 top-0 hidden md:block h-[735px]"
          />
          <img
            src={rightImage}
            alt="right image"
            className="absolute right-0 top-0 hidden md:block h-[795px]"
          />
          <img
            src={mobileLeft}
            alt="left image"
            className="absolute top-1/2 -translate-y-1/2 left-0 md:hidden h-[523px]"
          />
          <img
            src={mobileRight}
            alt="right image"
            className="absolute top-1/2 -translate-y-1/2 right-0 md:hidden h-[723px]"
          />
        </div>
        <div className="flex flex-col justify-center items-center text-center">
          <h2 className="text-[45px] md:text-[65px] leading-[98%] pb-16">
            Grow <span className="text-brand-purple">your wealth,</span>
            <br />
            not your workload.
          </h2>
          <p className="w-1/2 md:w-full text-[23px] md:text-[30px] leading-[108%]">
            Explore new ways our tokens
            <br /> can earn APY for you.
          </p>
        </div>
      </div>
    </section>
  );
};
