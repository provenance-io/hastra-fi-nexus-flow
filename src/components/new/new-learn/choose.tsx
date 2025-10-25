import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const cards = [
  {
    tags: ["1 track", "Beginner"],
    title: "Hastra",
    description:
      "Master our platform, wYLDS and HASH tokens, and the Provenance ecosystem.",
    to: "#",
    link: "Explore Hastra",
  },
  {
    tags: ["2 tracks", "All Levels"],
    title: "DeFi",
    description:
      "Learn decentralized finance from basics to advanced strategies and mastery.",
    to: "#",
    link: "Explore DeFi",
  },
  {
    tags: ["3 tracks", "Beginner"],
    title: "Crypto",
    description:
      "Fundamental blockchain and cryptocurrency concepts for complete beginners.",
    to: "#",
    link: "Explore Crypto",
  },
];

export const Choose = () => {
  return (
    <section
      className="max-w-[96rem] mx-auto px-10 font-season-sans overflow-x-hidden w-screen"
      aria-label="Choose Your Path"
    >
      <Card className="shadow-button-small-shadow rounded-[50px] pt-[80px] pb-10 bg-brand-background flex flex-col items-center justify-center">
        <h3 className="text-[45px] leading-[98%] text-center pb-[25px]">
          Choose Your
          <br /> Learning Path
        </h3>
        <p className="text-[22px] pb-[91px]">
          Select your area of interest to see relevant learning tracks
        </p>
        <div className="lg:gap-x-[14px] flex flex-nowrap overflow-x-scroll pb-10 px-6 w-full lg:justify-center">
          {cards.map((c) => (
            <Card
              key={c.title}
              className="mx-[7px] lg:mx-0 rounded-[60px] bg-[#0A1936BF] py-[62px] px-20 text-center w-[402px] min-w-[402px] flex flex-col border-r-0 border-l-0 border-y-[0.3px] border-gray-600"
            >
              <div className="w-full flex gap-4 items-center justify-center pb-[34px]">
                {c.tags.map((t) => (
                  <Badge
                    key={t}
                    className="p-[10px] w-fit bg-[#1E2C44] rounded-[30px] text-brand-white"
                  >
                    {t}
                  </Badge>
                ))}
              </div>
              <p className="text-[40px] leading-[108%] text-center pb-[17px]">
                {c.title}
              </p>
              <p className="text-base leading-[133%] pb-10">{c.description}</p>
              <Link to={c.to}>
                <Button
                  variant="ghost"
                  className="text-brand-white text-base leading-[133%]"
                >
                  {c.link} <ArrowRight className="size-6" />
                </Button>
              </Link>
            </Card>
          ))}
        </div>
      </Card>
    </section>
  );
};
