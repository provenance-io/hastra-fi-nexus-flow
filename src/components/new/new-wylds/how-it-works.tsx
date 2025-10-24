import cardOne from "@/assets/new/wylds-page/how-card-one.png";
import cardTwo from "@/assets/new/wylds-page/how-card-three.png";
import cardThree from "@/assets/new/wylds-page/how-card-three.png";
import cardFour from "@/assets/new/wylds-page/how-card-four.png";
import { Card } from "@/components/ui/card";

const cards = [
  {
    title: "Hold wYLDS tokens",
    description: "Simply hold wYLDS tokens in any compatible Solana wallet",
    background: cardOne,
  },
  {
    title: "Watch your balance grow",
    description:
      "Watch your balance grow on hastra.io - Yield is automatically calculated.",
    background: cardTwo,
  },
  {
    title: "Monthly Distributions",
    description:
      "Claim your yield on hastra.io on a monthly basis in wYLDS tokens",
    background: cardThree,
  },
  {
    title: "Use daily, or redeem for USDC",
    description:
      "Easily redeem your wYLDS through Raydium and Kamino protocols",
    background: cardFour,
  },
];

export const HowItWorks = () => {
  return (
    <section
      className="px-[37px] lg:px-[100px] py-[130px] font-season-sans flex items-center justify-center"
      aria-label="How it works"
    >
      <div className="flex flex-col max-w-[96rem] mx-auto">
        <h3 className="text-[60px] leading-[103%] pb-20 lg:pb-[226px]">
          How It Works
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {cards.map((c, index) => (
            <Card
              key={c.title}
              className="pt-10 lg:pt-[121px] pb-10 lg:pb-[90px] px-[53px] bg-cover bg-center grid lg:grid-cols-[1fr_2fr] gap-10 rounded-[65px] items-start h-full"
              style={{ backgroundImage: `url(${c.background})` }}
            >
              <h2 className="text-[70px] lg:text-[171px] leading-[70%] text-start lg:text-end">
                {index + 1}
              </h2>
              <div className="space-y-6 text-start">
                <p className="text-[35px] xl:text-[45px] leading-[111%]">
                  {c.title}
                </p>
                <p className="text-[20px] lg:text-[23px] leading-[133%] text-[#CBCBCB]">
                  {c.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
