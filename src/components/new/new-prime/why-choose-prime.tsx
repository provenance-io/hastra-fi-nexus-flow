import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import whyChooseBg from "@/assets/new/prime-page/why-choose-card-bg.png";
import whyChooseIcon from "@/assets/new/prime-page/why-choose-icon.png";
import { useYLDSApy } from "@/hooks/use-ylds-apy";
import { useIsMobile } from "@/hooks/use-mobile";

const content = [
  {
    title: (
      <>
        Real Asset
        <br className="hidden md:block" /> Backing
      </>
    ),
    description:
      "Your yield comes from actual HELOC lending operations, not DeFi speculation. Sustainable and predictable returns.",
  },
  {
    title: (
      <>
        Powered by
        <br className="hidden md:block" /> Democratized Prime
      </>
    ),
    description:
      "Built on Figure Markets' YLDS - the first SEC-registered yield-bearing stablecoin. Regulatory clarity you can trust.",
  },
  {
    title: (
      <>
        DeFi
        <br className="hidden md:block" /> Compatible
      </>
    ),
    description:
      "Use your PRIME as collateral in DeFi protocols while continuing to earn your base yield. Maximum capital efficiency.",
  },
  {
    title: (
      <>
        Instant
        <br className="hidden md:block" /> Liquidity
      </>
    ),
    description:
      "Trade PRIME on DEXs or use in leverage strategies on Kamino. No lock-up periods, full flexibility.",
  },
  {
    title: (
      <>
        Transparent
        <br className="hidden md:block" /> & Audited
      </>
    ),
    description:
      "Open-source smart contracts, regular audits, and transparent reporting. See exactly where your yield comes from.",
  },
  {
    title: (
      <>
        Leverage
        <br className="hidden md:block" /> Opportunities
      </>
    ),
    description:
      "Achieve up to X% yields through leverage looping strategies on Kamino while maintaining your real asset exposure.",
  },
];

export const WhyChoosePrime = () => {
  return (
    <section
      className="max-w-[96rem] mx-auto px-4 md:px-10 pt-[100px] font-season-sans"
      aria-label="wYLDS card"
    >
      <Card
        className="relative shadow-brand-card rounded-[50px] bg-center bg-cover p-10 md:pt-[160px] md:pb-[100px] md:px-[100px]"
        style={{ backgroundImage: `url(${whyChooseBg})` }}
      >
        {/* <img
          src={whyChooseIcon}
          alt="Why Choose Icon"
          className="absolute max-h-[600px] top-10 right-10 z-1"
        /> */}
        <div className="relative md:w-1/2 pb-20 md:pb-[183px] space-y-10 z-10">
          <h3 className="text-[45px] md:text-[60px] leading-[103%]">
            Why Choose
            <br className="hidden md:block" /> Prime?
          </h3>
          <p className="text-[22px] md:text-[25px] leading-[110%]">
            Sustainable yield backed by real-
            <br className="hidden md:block" />
            world assets, not speculation
          </p>
        </div>
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-x-[37px] md:gap-y-[67px] z-10">
          {content.map((c) => (
            <div className="space-y-[23px]" key={c.description}>
              <p className="text-[32px] md:text-[40px] leading-[108%]">
                {c.title}
              </p>
              <p className="text-[#898989] text-base leading-[133%]">
                {c.description}
              </p>
            </div>
          ))}
        </div>
      </Card>
    </section>
  );
};
