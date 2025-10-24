import { Card, CardContent } from "@/components/ui/card";
import comingSoonCardBg from "@/assets/new/learn-page/coming-soon-bg.png";

export const ComingSoon = () => {
  return (
    <section
      aria-label="Coming Soon"
      className="max-w-[96rem] mx-auto px-4 lg:px-10 font-season-sans"
    >
      <Card
        className="rounded-[50px] bg-center px-[10px] lg:px-[45px] lg:pt-[100px] pb-[50px]"
        style={{ backgroundImage: `url(${comingSoonCardBg})` }}
      >
        <CardContent className="pt-[100px]">
          <div className="flex flex-col md:flex-row gap-10 justify-center">
            <div className="flex flex-col gap-10 items-center">
              <h3 className="text-[45px] md:text-[65px] leading-[98%] w-full">
                Coming Soon:
                <br />
                HASH Token
                <br />
                Buy & Burn Program
              </h3>
              <p className="text-[23px] md:text-[30px] leading-[110%]">
                A significant portion of revenue from our institutional-grade
                DeFi products will be used to systematically purchase and
                permanently burn HASH tokens from the open market .
              </p>
            </div>
            <div className="space-y-4">
              <p className="text-[23px] md:text-[30px] leading-[110%] font-[650] pb-6">
                Why This Approach:
              </p>
              <ol className="list-disc text-[23px] md:text-[30px] leading-[110%] ml-6 space-y-6">
                <li className="pl-2">
                  Strengthens network economics-Reducing HASH supply while
                  demand grows from ecosystem activity
                </li>
                <li className="pl-2">
                  Aligns incentives-Our protocol's success directly benefits
                  every HASH holder, not just our team
                </li>
                <li className="pl-2">
                  Supports decentralization-We're not just using Provenance
                  infrastructure—we're actively investing in its long-term
                  economic health
                </li>
              </ol>
            </div>
          </div>
          <div className="flex items-center justify-center pt-[100px]">
            <p className="w-full md:w-3/4 text-center text-pretty text-[30px] md:text-[35px] leading-[98%]">
              This isn't about short-term price movements. It's about building
              sustainable value for the community that makes decentralized
              finance possible. Every token we burn represents our commitment to
              the ecosystem that enables financial freedom for everyone.
            </p>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
