import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import wyldsBg from "@/assets/new/about-page/wylds-card-bg.png";
import wylds from "@/assets/new/about-page/wYLDS.png";
import cardOneBg from "@/assets/new/about-page/wylds-card-one-bg.png";
import cardTwoBg from "@/assets/new/about-page/wylds-card-two-bg.png";
import cardThreeBg from "@/assets/new/about-page/wylds-card-3-bg.png";
import { useYLDSApy } from "@/hooks/use-ylds-apy";
import { useIsMobile } from "@/hooks/use-mobile";

const SubCards = ({ input }: { input: ReturnType<typeof wYLDSCards>[0] }) => (
  <Card
    style={{ backgroundImage: `url(${input.bg})` }}
    className="bg-cover bg-center overflow-hidden rounded-[39px] border-[0.1px] border-l-0 border-r-0 border-brand-white p-0 min-h-[256px] md:min-h-[292px] min-w-[275px] md:h-full md:w-full flex flex-col gap-y-[37px] justify-center items-center"
  >
    <p className="text-[51px] leading-[98%] font-[650]">{input.value}</p>
    <p className="text-[21px] leading-[98%]">{input.label}</p>
  </Card>
);

const wYLDSCards = ({
  apy,
  supply,
  activeUsers,
}: {
  apy: string;
  supply: string;
  activeUsers: string;
}) => [
  {
    value: apy,
    label: "Current APY",
    bg: cardOneBg,
  },
  {
    value: supply,
    label: "Total Circulating Supply",
    bg: cardTwoBg,
  },
  {
    value: activeUsers,
    label: "Active Users",
    bg: cardThreeBg,
  },
];

export const WYLDSCard = () => {
  const { displayApy } = useYLDSApy();
  const isMobile = useIsMobile();
  return (
    <section
      className="max-w-[96rem] mx-auto px-10 pt-[100px]"
      aria-label="wYLDS card"
    >
      <Card
        className="shadow-brand-card rounded-[50px] bg-center"
        style={{ backgroundImage: `url(${wyldsBg})` }}
      >
        <CardHeader className="px-[55px] md:px-[87px] pt-[49px] md:pt-[90px] pb-10 md:pb-[73px]">
          <CardTitle className="flex flex-col md:flex-row flex-wrap md:items-center justify-between gap-10">
            <div className="flex gap-5 items-center justify-start text-brand-white pb-[69px] md:pb-0">
              <img
                src={wylds}
                alt="wYLDS"
                className="size-[55px] md:size-[100px]"
              />
              <div className="flex flex-col gap-y-1.5 md:gap-y-[11px]">
                <h3 className="text-[24px] md:text-[40px] font-[650] leading-[98%]">
                  wYLDS
                </h3>
                <p className="leading-[98%] text-[15px] md:text-[25px]">
                  Live on Solana
                </p>
              </div>
            </div>
            <p className="text-[33px] md:text-[35px] font-[650] leading-[111%]">
              Liquid Yield. {isMobile && <br />}
              <span className="text-brand-purple">No staking.</span>
              {isMobile && <br />} Just Earning
            </p>
          </CardTitle>
        </CardHeader>
        <CardContent className="text-brand-white p-0">
          <div className="px-[55px] md:px-[87px] pb-[51px] md:pb-[73px] flex flex-col gap-5 md:flex-row md:gap-10 lg:gap-20 leading-[128%] text-[21px] md:text-[27px]">
            <p className="md:w-1/2">
              TradFi Yields meets DeFi Velocity. Earn{" "}
              <span className="text-brand-purple">{displayApy}%</span> APY
              on-the-go and trade and send whenever you want - all backed by
              real world assets.
            </p>
            <p className="md:w-1/2">
              <span className="font-[650]">Innovation:</span>
              <br />
              Instant transfers, minimal fees, full DeFi composability - all
              backed by real world assets
            </p>
          </div>
          <div className="gap-x-10 flex flex-nowrap overflow-x-scroll pb-10 px-6">
            {wYLDSCards({
              apy: String(displayApy),
              supply: "$0.00",
              activeUsers: "2",
            }).map((c) => (
              <SubCards key={c.label} input={c} />
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
