import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const HighlightCard = ({
  title,
  description,
  className,
}: {
  title: string;
  description: string | React.ReactNode;
  className?: string;
}) => (
  <Card
    className={cn(
      "text-brand-white bg-[#0a1936] opacity-75 rounded-[60px] p-0 px-10 lg:px-[67px] xl:px-[87px] pt-10 pb-10 lg:pt-[51px] lg:pb-[60px] xl:pt-[71px] xl:pb-[90px] shadow-brand-card",
      className
    )}
  >
    <CardHeader className="p-0 pb-[57px]">
      <CardTitle className="p-0 text-[35px] md:text-[45px] leading-[98%] font-[400]">
        {title}
      </CardTitle>
    </CardHeader>
    <CardContent className="p-0 text-base md:text-[25px] leading-[110%]">
      {description}
    </CardContent>
  </Card>
);

export const HeroCards = () => {
  return (
    <div className="space-y-[45px] relative w-screen max-w-[96rem] mx-auto min-h-[1000px] z-30 px-[37px] overflow-y-hidden">
      <HighlightCard
        title="Our Mission"
        description={
          <div>
            To obliterate the artificial walls between Wall Street's inner
            circle and everyone else via DeFi technology. We aim to{" "}
            <span className="text-brand-light-purple">
              shatter every boundary that keeps you dependent on their system
            </span>
            . Because being your own bank isn't a privilege—it's your
            fundamental right.
          </div>
        }
        className="lg:absolute lg:top-0 lg:max-w-[500px] xl:max-w-[650px] xl:left-[92px] z-30"
      />
      <HighlightCard
        title="Our Belief"
        description={
          <div>
            The same 8% yields that make the rich richer should be in your
            wallet, not locked behind some arbitrary "accredited investor" gate.
            Every{" "}
            <span className="text-brand-light-purple">
              high-yield opportunity hoarded by institutions is a theft
            </span>{" "}
            from the people who actually need those returns. We're not just
            redistributing wealth—we're putting the power to create it directly
            into your hands.
          </div>
        }
        className="lg:absolute lg:top-[5%] lg:max-w-[500px] xl:max-w-[650px] right-[2%] xl:right-[92px] z-20 opacity-90"
      />
      <HighlightCard
        title="Our Vision"
        description={
          <div className="space-y-12">
            <p>
              A financial system where you don't need their permission, their
              minimums, or their approval. True decentralization means every
              person on{" "}
              <span className="text-brand-light-purple">
                Earth becomes their own financial institution
              </span>
              —no middlemen skimming profits, no gatekeepers deciding your
              worth.
            </p>
            <p>
              We're building the world where blockchain doesn't just enable
              financial inclusion—it demolishes financial apartheid and hands
              you the keys to institutional-grade wealth creation. Every product
              we ship pushes further past the boundaries they thought were
              permanent. Every innovation transfers more power from their vaults
              to your wallet. The revolution isn't coming. You're holding it.
            </p>
          </div>
        }
        className="lg:absolute lg:top-[45%] xl:top-[38%] lg:max-w-[700px] xl:max-w-[913px] lg:left-[150px]"
      />
    </div>
  );
};
