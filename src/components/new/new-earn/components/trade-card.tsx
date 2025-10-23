import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import radium from "@/assets/raydium-logo.png";
import kamino from "@/assets/new/about-page/kamino.png";

const SubCard = ({
  title,
  icon,
  subtitle,
  description,
  bullets,
  to,
}: {
  title: string;
  icon: React.ReactNode;
  subtitle: string;
  description: string;
  bullets: string[];
  to: string;
}) => {
  return (
    <Card className="bg-[#021323] p-0 px-[54px] py-[49px] rounded-[35px] flex flex-col justify-between">
      <div className="flex flex-col">
        <div className="flex items-center gap-[30px] pb-[70px]">
          {icon}
          <div className="flex flex-col text-start gap-[15px]">
            <p className="text-[30px] leading-[98%]">{title}</p>
            <p className="text-[21px] leading-[111%]">{subtitle}</p>
          </div>
        </div>
        <p className="text-[21px] leading-[145%] pb-[67px]">{description}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 md:gap-[30px] lg:gap-0 xl:gap-[30px] pb-[91px]">
          <ol className="list-disc ml-4">
            {bullets
              .filter((_, idx) => idx % 2 === 0)
              .map((b) => (
                <li className="text-[21px] leading-[145%]" key={b}>
                  {b}
                </li>
              ))}
          </ol>
          <ol className="list-disc ml-4">
            {bullets
              .filter((_, idx) => idx % 2 !== 0)
              .map((b) => (
                <li className="text-[21px] leading-[145%]" key={b}>
                  {b}
                </li>
              ))}
          </ol>
        </div>
      </div>
      <Link
        to={to}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full flex sm:items-center sm:justify-center"
      >
        <Button
          size="custom"
          className="rounded-full gap-8 w-full sm:w-fit text-[18px] leading-[110%] shadow-brand-card text-brand-white py-[20px] px-[26px] hover:bg-brand-background bg-brand-background"
          variant="noShadow"
        >
          Access {title}
          <ArrowRight className="size-6" />
        </Button>
      </Link>
    </Card>
  );
};

export const TradeCard = () => {
  return (
    <Card className="py-[52px] md:py-[70px] px-[17px] md:px-[58px] text-brand-white bg-[#1F273678] rounded-[35px]">
      <CardHeader className="p-0 pb-[58px] md:pb-[142px]">
        <CardTitle className="p-0 text-[25px] md:text-[35px] font-[650] leading-[111%] pb-[38px]">
          Trade & Lend
        </CardTitle>
        <p className="text-[22px] leading-[111%]">
          Access leading DeFi platforms for trading, lending, and yield
          generation
        </p>
      </CardHeader>
      <CardContent className="p-0 flex flex-col lg:flex-row justify-between gap-10">
        <SubCard
          title="Radium"
          icon={<img src={radium} alt="Radium" className="size-[81px]" />}
          subtitle="Trading & Liquidty"
          description="Trade tokens and provide liquidity on Solana's leading AMM"
          bullets={[
            "wYLDS/USDC Trading",
            "Low fees",
            "HASH/USDC Pool",
            "High liquidity",
          ]}
          to="https://raydium.io"
        />
        <SubCard
          title="Kamino Finance"
          icon={<img src={kamino} alt="Kamino" className="h-[81px] w-[74px]" />}
          subtitle="Lending & Yield"
          description="Lending and borrowing with automated yield strategies"
          bullets={[
            "Lending pools",
            "Leveraged farming",
            "Automated strategies",
            "Risk management",
          ]}
          to="https://app.kamino.finance"
        />
      </CardContent>
    </Card>
  );
};
