import leftImage from "@/assets/new/about-page/about-hero-left-side.png";
import rightImage from "@/assets/new/about-page/about-hero-right-side.png";
import mobileLeft from "@/assets/new/about-page/grow-mobile-left.png";
import mobileRight from "@/assets/new/about-page/grow-mobile-right.png";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Wallet } from "lucide-react";

export const Login = ({
  handleConnectWallet,
}: {
  handleConnectWallet: () => Promise<void>;
}) => {
  return (
    <section
      aria-label="Connect with us"
      className="relative flex items-center md:my-[100px] justify-center z-10 min-h-[795px] w-screen text-brand-white px-[37px]"
    >
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
        <h2 className="text-[35px] md:text-[54px] leading-[98%] pb-14">
          Start <span className="text-brand-purple">Earning</span>
        </h2>
        <p className="max-w-[591px] text-[20px] md:text-[25px] leading-[98%] pb-14">
          Buy wYLDS on Hastra. Start earning from day one with proven strategies
          backed by real-world assets.
        </p>
        <Button
          onClick={handleConnectWallet}
          className="rounded-full w-[230px] h-[63px] text-base leading-[110%] shadow-brand-card text-brand-white"
          variant="ghost"
        >
          Connect Wallet <Wallet className="size-6" />
        </Button>
      </div>
    </section>
  );
};
