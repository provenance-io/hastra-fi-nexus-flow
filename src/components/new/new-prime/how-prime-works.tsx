import howBg from "@/assets/new/prime-page/how-prime-works-bg.png";
import { Card } from "@/components/ui/card";

const cards = [
  {
    title: "Get wYLDS",
    subTitle: "Swap any USDC to get wYLDS",
    description:
      "wYLDS token is backed by reserves of YLDS - the first SEC-registered, yield-bearing stablecoin backed by real world assets",
  },
  {
    title: "Stake for PRIME",
    subTitle:
      "Stake wYLDS on Hastra to receive PRIME, your liquid staking token for HELOC lending pools",
    description: "Simple one-click staking process with instant PRIME receipt",
  },
  {
    title: "Earn Real Yield",
    subTitle:
      "Your PRIME earns yield from Figure's Democratized Prime HELOC lending operations - real assets, real returns",
    description:
      "Yield is automatically accrued based on real lending performance",
  },
  {
    title: "Use in DeFi",
    subTitle:
      "Leverage your PRIME in DeFi for enhanced yields while maintaining your base earnings",
    description:
      "Collateralize PRIME for loans or use in leverage strategies for up to X% total yield",
  },
];

export const HowPrimeWorks = () => {
  return (
    <section
      aria-label="How Prime Works"
      className="py-[100px] flex flex-col items-center justify-center font-season-sans bg-cover bg-right w-screen"
      style={{ backgroundImage: `url(${howBg})` }}
    >
      <h2 className="text-[45px] md:text-[60px] leading-[103%] pb-[26px] px-[37px]">
        How PRIME Works
      </h2>
      <p className="text-[18px] md:text-[25px] leading-[110%] pb-[85px] md:w-2/3 text-center px-[37px]">
        Simple staking, powerful yields
      </p>
      <div className="no-scrollbar xl:gap-x-4 flex overflow-x-scroll pb-3 max-w-screen w-full xl:justify-center">
        {cards.map((c) => (
          <Card
            key={c.title}
            className="mx-4 xl:mx-0 bg-[#0A1936BF] rounded-[60px] pl-[39px] pr-[20px] py-[52px] flex flex-col justify-between gap-7 min-w-[300px] w-[300px]"
          >
            <div className="flex flex-col gap-7">
              <p className="text-[32px] leading-[136%]">{c.title}</p>
              <p className="text-[19px] leading-[131%]">{c.subTitle}</p>
            </div>
            <p className="text-[#898989] text-[15px]">{c.description}</p>
          </Card>
        ))}
      </div>
    </section>
  );
};
