import { Card } from "@/components/ui/card";
import { useGetWyldsData } from "@/hooks/useGetWyldsData";
import { cn } from "@/lib/utils";

export const WatchItGrow = () => {
  const { displayApy, displayHolders, displayCirculation } = useGetWyldsData();
  const cards = [
    {
      title: "Total wYLDS in Circulation",
      description: displayCirculation,
    },
    {
      title: "Current APY",
      description: displayApy,
    },
    {
      title: "Active Holders",
      description: displayHolders,
    },
  ];
  return (
    <section
      aria-label="Watch wYLDS as it Grows"
      className="py-[100px] flex flex-col items-center justify-center font-season-sans"
    >
      <h3 className="pb-10 lg:pb-20 text-[45px] md:text-[60px] leading-[103%] text-center px-[37px]">
        Watch <span className="text-brand-purple">wYLDS</span>
        <br />
        as it Grows
      </h3>
      <div className="lg:gap-x-6 flex overflow-x-scroll pb-3 max-w-screen w-full xl:justify-center">
        {cards.map((c) => (
          <Card
            key={c.title}
            className="mx-4 rounded-[60px] bg-[#0A1936BF] pt-[81px] pb-[53px] px-[30px] min-h-[334px] min-w-[404px] h-[334px] w-[404px] flex flex-col items-center text-center"
          >
            <p className="text-[25px]">{c.title}</p>
            <p
              className={cn(
                "text-[70px]",
                c.description === "Error" ? "text-red-300" : ""
              )}
            >
              {c.description}
            </p>
            <div className="flex items-center gap-4 text-[20px]">
              <div className="rounded-full bg-green-300 size-3" />
              Live
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};
