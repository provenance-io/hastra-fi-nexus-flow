import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import left from "@/assets/new/learn-page/learn-hero-left.png";
import right from "@/assets/new/learn-page/learn-hero-right.png";
import phoneAnimation from "@/assets/new/learn-page/build-animation.mp4";

export const HighlightCard = ({
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

export const Hero = () => {
  return (
    <section
      aria-label="Learn Page Hero Section"
      className="relative overflow-y-hidden font-season-sans"
    >
      <div
        className="relative mx-auto overflow-x-hidden overflow-y-hidden flex flex-col gap-4 text-brand-white max-w-screen h-screen min-h-[1093px] bg-black"
        aria-label="Hero Image"
      >
        <div className="absolute top-[30%] right-[1%] lg:right-[5%] xl:right-[10%] 2xl:top-[40%] 2xl:right-[10%] z-10">
          <div className="flex flex-col text-[45px] lg:text-[65px] leading-[98%]">
            Repeat after Us:
            <p>
              Accessing <span className="text-brand-purple">good</span>
            </p>
            <p className="">
              <span className="text-brand-purple">investments</span> shouldn't
            </p>
            <p>require a trust fund.</p>
          </div>
        </div>
        <video
          className="absolute inset-0 w-[150%] min-h-[944px] h-full object-cover -left-[25%] overflow-hidden"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src={phoneAnimation} type="video/mp4" />
        </video>
        <div className="absolute w-full right-0 min-h-[944px] h-full bg-gradient-to-r from-transparent to-black to-[80%] border border-white" />
        <div className="absolute bottom-0 w-screen h-[511px] bg-gradient-to-b from-transparent to-[#021323]" />
      </div>
      <img
        src={left}
        alt="left image"
        className="hidden lg:block absolute top-[50%] left-0 h-[559px]"
      />
      <img
        src={right}
        alt="right image"
        className="hidden lg:block absolute top-[60%] right-0 h-[675px]"
      />
      <div className="space-y-[45px] relative w-screen max-w-[96rem] mx-auto min-h-[1000px] md:min-h-[1200px] lg:min-h-[1500px] xl:min-h-[1200px] -mt-[100px] sm:-mt-[300px] md:mt-[-100px] z-30 px-[37px] overflow-y-hidden">
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
              wallet, not locked behind some arbitrary "accredited investor"
              gate. Every{" "}
              <span className="text-brand-light-purple">
                high-yield opportunity hoarded by institutions is a theft
              </span>{" "}
              from the people who actually need those returns. We're not just
              redistributing wealth—we're putting the power to create it
              directly into your hands.
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
                you the keys to institutional-grade wealth creation. Every
                product we ship pushes further past the boundaries they thought
                were permanent. Every innovation transfers more power from their
                vaults to your wallet. The revolution isn't coming. You're
                holding it.
              </p>
            </div>
          }
          className="lg:absolute lg:top-[45%] xl:top-[38%] lg:max-w-[700px] xl:max-w-[913px] lg:left-[150px]"
        />
      </div>
    </section>
  );
};
