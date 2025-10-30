import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import primeBg from "@/assets/new/about-page/prime-card-bg.png";
import prime from "@/assets/new/about-page/prime.png";
import cardOneBg from "@/assets/new/about-page/prime-card-bg-one.png";
import cardTwoBg from "@/assets/new/about-page/prime-card-bg-two.png";
import cardThreeBg from "@/assets/new/about-page/prime-card-bg-three.png";
import { useIsMobile } from "@/hooks/use-mobile";
import { usePRIMEAPR } from "@/hooks/use-prime-apr";

const SubCards = ({ input }: { input: ReturnType<typeof primeCards>[0] }) => (
  <Card
    style={{ backgroundImage: `url(${input.bg})` }}
    className="font-season-sans bg-cover bg-center overflow-hidden rounded-[39px] border-[0.1px] border-l-0 border-r-0 border-brand-white p-0 min-h-[256px] md:min-h-[292px] min-w-[275px] md:h-full md:w-full flex flex-col gap-y-[37px] justify-center items-center"
  >
    <p className="text-[51px] leading-[98%] font-[650]">{input.value}</p>
    <p className="text-[21px] leading-[98%]">{input.label}</p>
  </Card>
);

const primeCards = ({
  apy,
  supply,
  activeWallets,
}: {
  apy: string;
  supply: string;
  activeWallets: string;
}) => [
  {
    value: apy,
    label: "Current APY",
    bg: cardOneBg,
  },
  {
    value: supply,
    label: "Total Staked Supply",
    bg: cardTwoBg,
  },
  {
    value: activeWallets,
    label: "Active Wallets",
    bg: cardThreeBg,
  },
];

export const PrimeCard = () => {
  const { rate, loading, error } = usePRIMEAPR();
  const isMobile = useIsMobile();
  return (
    <section
      className="max-w-[96rem] mx-auto px-4 md:px-10 pt-[100px]"
      aria-label="PRIME card"
    >
      <Card
        className="shadow-brand-card rounded-[50px] bg-center"
        style={{ backgroundImage: `url(${primeBg})` }}
      >
        <CardHeader className="px-[55px] md:px-[87px] pt-[49px] md:pt-[90px] pb-10 md:pb-[73px]">
          <CardTitle className="flex flex-col md:flex-row flex-wrap md:items-center justify-between gap-10">
            <div className="flex gap-5 items-center justify-start text-brand-white pb-[69px] md:pb-0">
              <img
                src={prime}
                alt="prime"
                className="size-[55px] md:size-[100px]"
              />
              <div className="flex flex-col gap-y-1.5 md:gap-y-[11px]">
                <h3 className="text-[24px] md:text-[40px] font-[650] leading-[98%]">
                  PRIME
                </h3>
                <p className="leading-[98%] text-[15px] md:text-[25px]">
                  Live on Solana
                </p>
              </div>
            </div>
            <p className="text-[33px] md:text-[35px] font-[650] leading-[111%]">
              Liquid Staking {isMobile && <br />}
              for{" "}
              <span className="text-brand-purple">
                Real Estate{isMobile && <br />} Credit Markets
              </span>
            </p>
          </CardTitle>
        </CardHeader>
        <CardContent className="text-brand-white p-0">
          <div className="px-[55px] md:px-[87px] pb-[51px] md:pb-[73px] flex flex-col gap-5 md:flex-row md:gap-10 lg:gap-20 leading-[128%] text-[21px] md:text-[27px]">
            <p className="md:w-1/2">
              Liquid staking infrastructure for RWAs. Transforms illiquid HELOC
              lending positions into tradeable, yield-bearing tokens with full
              on-chain transparency.
            </p>
            <p className="md:w-1/2">
              <span className="font-[650]">Innovation:</span>
              <br />
              Liquid staking infrastructure for RWAs. Transforms illiquid HELOC
              lending positions into tradeable, yield-bearing tokens with full
              on-chain transparency.
            </p>
          </div>
          <div className="gap-x-10 flex flex-nowrap overflow-x-scroll pb-10 px-6">
            {primeCards({
              apy: loading ? "loading..." : error ? "error" : String(rate),
              supply: "$0.00",
              activeWallets: "2",
            }).map((c) => (
              <SubCards key={c.label} input={c} />
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
