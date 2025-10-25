import kamino from "@/assets/new/about-page/kamino.png";
import stake from "@/assets/new/about-page/stake.png";
import swap from "@/assets/new/about-page/swap.png";
import { Card } from "@/components/ui/card";

const StepCards = ({ input }: { input: (typeof stepCards)[0] }) => (
  <Card className="bg-[#0A1936]/75 overflow-hidden rounded-[60px] border-[0.1px] border-l-0 border-r-0 border-gray-600 pt-[30px] md:pt-[65px] pb-5 md:pb-10 flex flex-col justify-center items-center min-w-[313px]">
    {input.icon}
    <p className="text-[33px] md:text-[40px] leading-[108%] w-3/4 pt-[36px] pb-5">
      {input.title}
    </p>
    <p className="text-[12px] md:text-base opacity-50 leading-[113%] w-3/4">
      {input.description}
    </p>
  </Card>
);

const stepCards = [
  {
    icon: (
      <img
        src={swap}
        alt="swap"
        className="h-[54px] w-[62px] md:h-[70px] md:w-[80px]"
      />
    ),
    title: "Swap and get wYLDS",
    description:
      "Deep market research and technical analysis drives every product decision.",
  },
  {
    icon: (
      <img
        src={stake}
        alt="stake"
        className="h-[79px] w-[83px] md:h-[95px] md:w-[101px]"
      />
    ),
    title: "Stake wYLDS = get PRIME",
    description:
      "Building compliant solutions that work within existing financial frameworks.",
  },
  {
    icon: (
      <img
        src={kamino}
        alt="kamino"
        className="h-[66px] w-[58px] md:h-[82px] md:w-[76px]"
      />
    ),
    title: "Loop with key partner Kamino",
    description:
      "Creating interoperable solutions that enhance the entire financial ecosystem.",
  },
];

// #0A1936/75 is the card bg

export const Steps = () => {
  return (
    <section
      aria-label="Steps to get PRIME"
      className="flex flex-col gap-[87px] md:gap-[50px] mx-auto px-10 pt-[100px] text-center font-season-sans"
    >
      <h2 className="text-[45px] md:text-[65px] leading-[98%]">
        Steps to get
        <br />
        to <span className="text-brand-purple">sPRIME</span>
      </h2>
      <div className="gap-x-10 flex flex-nowrap overflow-x-scroll pb-10 px-6">
        {stepCards.map((s) => (
          <StepCards key={s.title} input={s} />
        ))}
      </div>
    </section>
  );
};
