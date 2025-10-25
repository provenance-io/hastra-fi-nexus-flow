import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export const Ready = () => {
  return (
    <section
      className="px-[37px] py-[100px] lg:py-[171px] font-season-sans flex items-center justify-center"
      aria-label="Connect Wallet"
    >
      <div className="space-y-[42px] flex flex-col items-center">
        <h2 className="text-[35px] md:text-[45px] leading-[98%] text-center">
          Ready to start earning
          <br className="hidden md:block" /> with premium DeFi products?
        </h2>
        <Link to="/earn">
          <Button
            className="rounded-full w-full sm:w-[230px] h-[63px] text-base leading-[110%] shadow-purple-button bg-gradient-to-tr from-brand-purple to-[50%] to-transparent text-brand-white"
            variant="ghost"
          >
            GET wYLDS <ArrowRight className="size-6" />
          </Button>
        </Link>
      </div>
    </section>
  );
};
