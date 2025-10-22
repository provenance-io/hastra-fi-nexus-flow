import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import wyldsBg from "@/assets/new/about-page/wylds-card-bg.png";
import cardOneBg from "@/assets/new/about-page/wylds-card-one-bg.png";
import cardTwoBg from "@/assets/new/about-page/wylds-card-two-bg.png";
import cardThreeBg from "@/assets/new/about-page/wylds-card-3-bg.png";
import { ArrowRight, Wallet } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { useWallet } from "@/contexts/WalletContext";
import { useTokenPortfolio } from "@/hooks/useTokenPortfolio";

const SubCards = ({ input }: { input: ReturnType<typeof wYLDSCards>[0] }) => (
  <Card
    style={{ backgroundImage: `url(${input.bg})` }}
    className="bg-cover bg-center overflow-hidden rounded-[39px] border-[0.1px] border-l-0 border-r-0 border-brand-white p-0 min-w-[193px] pt-[60px] pb-[64px] md:min-h-[241px] px-5 md:min-w-[275px] h-full w-full flex flex-col gap-y-[18px] md:gap-y-[37px] justify-center md:items-center"
  >
    <p className="flex items-center justify-center text-center gap-4 text-[18px] xl:text-[28px] leading-[98%]">
      <ArrowRight className="size-6 hidden md:block" />
      {input.label}
    </p>
    <p className="self-center text-[45px] lg:text-[60px] leading-[98%] font-[650]">
      $
      {input.value.toLocaleString("en-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })}
    </p>
  </Card>
);

const wYLDSCards = ({
  totalPortfolioValue,
  totalInterestEarned,
  availableToClaim,
}: {
  totalPortfolioValue: number;
  totalInterestEarned: number;
  availableToClaim: number;
}) => [
  {
    value: totalPortfolioValue,
    label: "Total Portfolio Value",
    bg: cardOneBg,
  },
  {
    value: totalInterestEarned,
    label: "Total Interest Earned",
    bg: cardTwoBg,
  },
  {
    value: availableToClaim,
    label: "Available To Claim",
    bg: cardThreeBg,
  },
];

const getWalletIcon = (type: string | null) => {
  switch (type) {
    case "MetaMask":
      return <Wallet className="size-[54px] text-[hsl(34_100%_84%)]" />;
    case "Phantom":
      return (
        <img
          src="/lovable-uploads/a4d8da02-50c5-4552-bfd9-bd18932e737c.png"
          alt="Phantom Wallet"
          className="size-[54px] rounded-full"
        />
      );
    case "Solflare":
      return <Wallet className="size-[54px] text-[hsl(34_100%_84%)]" />;
    case "Coinbase":
      return <Wallet className="size-[54PX] text-blue-400" />;
    case "WalletConnect":
      return <Wallet className="size-[54PX] text-blue-400" />;
    case "Backpack":
      return <Wallet className="size-[54PX] text-purple-400" />;
    case "Slope":
      return <Wallet className="size-[54PX] text-green-400" />;
    case "Glow":
      return <Wallet className="size-[54PX] text-yellow-400" />;
    default:
      return <Wallet className="size-[54PX] text-hastra-teal" />;
  }
};

const getWalletBrandColor = (type: string | null) => {
  switch (type) {
    case "MetaMask":
      return "bg-orange-900/20";
    case "Phantom":
      return "bg-transparent";
    case "Solflare":
      return "bg-yellow-900/20";
    case "Coinbase":
      return "bg-blue-900/20";
    case "WalletConnect":
      return "bg-blue-900/20";
    case "Backpack":
      return "bg-purple-900/20";
    case "Slope":
      return "bg-green-900/20";
    case "Glow":
      return "bg-yellow-900/20";
    default:
      return "bg-hastra-teal/20";
  }
};

const formatAddress = (addr: string) => {
  return `${addr.slice(0, 6)}...${addr.slice(-4)}`;
};

const copyAddress = async (address: string) => {
  if (address) {
    await navigator.clipboard.writeText(address);
    toast({
      title: "Address Copied",
      description: "Wallet address copied to clipboard",
    });
  }
};

export const AccountPageCard = () => {
  const { address, walletType } = useWallet();
  const {
    claimAllInterest,
    getTotalPortfolioValue,
    getTotalInterestEarned,
    getTotalUnclaimedInterest,
  } = useTokenPortfolio();

  const totalPortfolioValue = getTotalPortfolioValue();
  const totalInterestEarned = getTotalInterestEarned();
  const availableToClaim = getTotalUnclaimedInterest();
  return (
    <section
      className="max-w-[96rem] mx-auto px-[20px] md:px-[37px]"
      aria-label="Account Overview card"
    >
      <Card
        className="shadow-brand-card rounded-[50px] bg-center"
        style={{ backgroundImage: `url(${wyldsBg})` }}
      >
        <CardHeader className="pt-[81px] md:pt-[60px] pb-10 md:pb-[73px] px-[20px] md:px-[37px]">
          <CardTitle className="flex flex-col md:flex-row flex-wrap md:items-center md:justify-between md:gap-10 px-[20px] md:px-[37px]">
            <div className="flex gap-5 items-center text-brand-white pb-10 md:pb-0">
              <h3 className="text-[30px] md:text-[35px] font-[650] leading-[111%]">
                Portfolio Overview
              </h3>
            </div>
            <Button
              variant="ghost"
              className="flex items-center justify-between h-fit px-0"
              onClick={() => copyAddress(address)}
            >
              <div className="flex items-center gap-4">
                <div
                  className={`rounded-full ${getWalletBrandColor(
                    walletType
                  )} flex items-center justify-center shadow-sm`}
                >
                  {getWalletIcon(walletType)}
                </div>
                <div className="flex flex-col text-start gap-y-1.5 md:gap-y-[11px] text-brand-white">
                  <h3 className="text-[20px] md:text-[22px] font-[650] leading-[98%]">
                    {address ? formatAddress(address) : "Loading..."}
                  </h3>
                  <p className="leading-[98%] text-[15px] md:text-[20px] font-thin">
                    {walletType && walletType !== "Connected"
                      ? walletType
                      : "Connected Wallet"}
                  </p>
                </div>
              </div>
            </Button>
          </CardTitle>
        </CardHeader>
        <CardContent className="text-brand-white p-0">
          <div className="gap-x-10 flex flex-nowrap overflow-x-scroll pb-10 px-[37px]">
            {wYLDSCards({
              totalPortfolioValue,
              totalInterestEarned,
              availableToClaim,
            }).map((c) => (
              <SubCards key={c.label} input={c} />
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
