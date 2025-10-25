import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <section
      aria-label="Learn"
      className="bg-brand-background pb-[126px] pt-[230px] flex flex-col items-center justify-center text-center font-season-sans"
    >
      <h1 className="text-[77px] leading-[98%] pb-[42px]">
        Learn <span className="text-brand-purple">DeFi</span>
        <br />
        Start Earning
      </h1>
      <p className="text-[22px] leading-[118%] pb-[105px]">
        Master DeFi fundamentals and start earning
        <br /> with wYLDS and PRIME tokens.
      </p>
      <div className="flex items-center gap-[26px]">
        <Link to="#" target="_blank" rel="noopener noreferrer">
          <Button
            size="custom"
            className="rounded-full text-[13px] md:text-base leading-[110%] shadow-purple-button text-brand-white py-[20px] px-[32px] hover:bg-brand-background bg-brand-background w-fit"
            variant="noShadow"
          >
            Start Learning
            <ArrowRight className="size-6" />
          </Button>
        </Link>
        <Link to="/earn">
          <Button
            size="custom"
            className="rounded-full text-[13px] md:text-base leading-[110%] shadow-purple-button text-brand-white py-[20px] px-[32px] hover:bg-brand-background bg-brand-background w-fit"
            variant="noShadow"
          >
            Skip to Earning
            <ArrowRight className="size-6" />
          </Button>
        </Link>
      </div>
    </section>
  );
};
