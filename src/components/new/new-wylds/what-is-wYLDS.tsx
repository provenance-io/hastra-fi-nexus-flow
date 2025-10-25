import whatIsWyldsBg from "@/assets/new/wylds-page/what-is-wylds-bg.png";
import { Card } from "@/components/ui/card";
import chain from "@/assets/new/wylds-page/chain.png";
import lightning from "@/assets/new/wylds-page/lightning.png";
import building from "@/assets/new/wylds-page/building.png";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const WhatIsCard = ({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => (
  <Card className="mx-4 lg:mx-0 bg-[#0A1936BF] pt-[30px] md:pt-[69px] px-[18px] md:px-[29px] pb-[20px] md:pb-[27px] flex flex-col min-w-[300px] min-h-[300px] md:min-w-[402px] lg:w-[402px] md:min-h-[400px] items-center text-center">
    <div className="pb-[58px] flex flex-col items-center gap-y-[35px]">
      {icon}
      <p className="text-[34px] md:text-[40px] leading-[108%]">{title}</p>
    </div>
    <p className="text-base text-[#CBCBCB] leading-[133%]">{description}</p>
  </Card>
);

const cards = [
  {
    icon: (
      <img
        src={building}
        alt="Building"
        className="h-[54px] md:h-[77px] w-fit"
      />
    ),
    title: "Backed by RWAs",
    description:
      "wYLDS token is backed by reserves of YLDS - the first SEC-registered, yield-bearing stablecoin backed by real world assets.",
  },
  {
    icon: (
      <img
        src={lightning}
        alt="Lightning"
        className="h-[54px] md:h-[77px] w-fit"
      />
    ),
    title: "Automatic Yield",
    description:
      "Earn yield automatically just by holding wYLDS in your wallet - no staking required.",
  },
  {
    icon: (
      <img src={chain} alt="Chain" className="size-[54px] md:size-[77px]" />
    ),
    title: "Cross-Chain",
    description:
      "Earn yield automatically just by holding wYLDS in your wallet - no staking required.",
  },
];

export const WhatIsWYLDS = () => {
  return (
    <section
      className="flex flex-col items-center py-[171px] bg-cover bg-right font-season-sans w-screen"
      aria-label="What is wYLDS?"
      style={{ backgroundImage: `url(${whatIsWyldsBg})` }}
    >
      <h2 className="text-[45px] md:text-[60px] leading-[103%] pb-[88px] px-[37px]">
        What is wYLDS
      </h2>
      <div className="space-y-8 text-[18px] md:text-[25px] leading-[110%] pb-[85px] md:w-2/3 text-center px-[37px]">
        <p>
          wYLDS is a token representing a portion of a pool of reserves holding
          the YLDS token - the first SEC-registered, yield-bearing stablecoin
          combining the liquidity of traditional stablecoins with the earning
          power of a money market fund.*
        </p>
        <p>
          As users deposit USDC, Hastra purchases and holds YLDS, and
          distributes interest in wYLDS to token holders. Because earning yield
          shouldn't require complex strategies—it should just work.
        </p>
      </div>
      <div className="lg:gap-x-10 flex overflow-x-scroll pb-3 max-w-screen w-full lg:justify-center">
        {cards.map((c) => (
          <WhatIsCard key={c.title} {...c} />
        ))}
      </div>
      <Button
        size="custom"
        className="mt-[77px] mb-[57px] gap-4 font-season-sans font-thin rounded-full text-[13px] md:text-base leading-[110%] shadow-purple-button text-brand-white py-[20px] px-[32px] hover:bg-brand-background bg-brand-background w-fit"
        variant="noShadow"
      >
        Learn More About wYLDS
        <ArrowRight className="size-6" />
      </Button>
      <p className="text-[17px] leading-[110%] text-[#CBCBCB] px-[27px]">
        *wYLDS is not registered with the SEC or any securities regulator. YLDS
        is issued by a third party independent of Hastra.
      </p>
    </section>
  );
};
