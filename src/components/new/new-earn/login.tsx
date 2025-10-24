import leftImage from "@/assets/new/about-page/about-hero-left-side.png";
import rightImage from "@/assets/new/about-page/about-hero-right-side.png";
import mobileLeft from "@/assets/new/about-page/grow-mobile-left.png";
import mobileRight from "@/assets/new/about-page/grow-mobile-right.png";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Wallet } from "lucide-react";
import loginBackground from "@/assets/new/earn-page/start-earning-bg.png";
import { DevelopedBy } from "../new-home/developed-by";

export const Login = ({
  handleConnectWallet,
}: {
  handleConnectWallet: () => Promise<void>;
}) => {
  return (
    <>
      <section
        className="px-[37px] pt-[200px] pb-[284px] md:py-[284px] bg-cover bg-center font-season-sans flex items-center justify-center"
        aria-label="Start earning immediately"
        style={{ backgroundImage: `url(${loginBackground})` }}
      >
        <div className="space-y-[42px] flex flex-col items-center">
          <h2 className="text-[60px] md:text-[77px] leading-[98%] md:text-center">
            Start Earning
            <br className="hidden md:block" />{" "}
            <span className="text-brand-purple">Immediately</span>
          </h2>
          <p className="text-[22px] leading-[118%] md:w-2/3 text-center">
            Buy wYLDS on Hastra. Start earning from day one with proven
            strategies backed by real-world assets.
          </p>
        </div>
      </section>
      <section
        className="px-[37px] py-[100px] lg:py-[171px] font-season-sans flex items-center justify-center"
        aria-label="Connect Wallet"
      >
        <div className="space-y-[42px] flex flex-col items-center">
          <h2 className="text-[35px] md:text-[45px] leading-[98%] text-center">
            Ready to start earning
            <br className="hidden md:block" /> with premium DeFi products?
          </h2>
          <Button
            onClick={handleConnectWallet}
            className="rounded-full w-full sm:w-[230px] h-[63px] text-base leading-[110%] shadow-brand-card text-brand-white"
            variant="ghost"
          >
            Connect Wallet <Wallet className="size-6" />
          </Button>
        </div>
      </section>
      <DevelopedBy />
    </>
  );
};
