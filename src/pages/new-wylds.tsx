import { DevelopedBy } from "@/components/new/new-wylds/developed-by";
import { FAQs } from "@/components/new/new-wylds/faq";
import { FillOurForm } from "@/components/new/new-wylds/fill-our-form";
import { Hero } from "@/components/new/new-wylds/hero";
import { HeroSmall } from "@/components/new/new-wylds/hero-small";
import { HowItWorks } from "@/components/new/new-wylds/how-it-works";
import { LearnAboutYlds } from "@/components/new/new-wylds/learn-about-ylds";
import { WatchItGrow } from "@/components/new/new-wylds/watch-it-grow";
import { WhatIsWYLDS } from "@/components/new/new-wylds/what-is-wYLDS";
import { useIsMobile } from "@/hooks/use-mobile";

export const NewWYLDS = () => {
  const isMobile = useIsMobile();
  return (
    <>
      {isMobile ? <HeroSmall /> : <Hero />}
      <WhatIsWYLDS />
      <HowItWorks />
      <WatchItGrow />
      <FAQs />
      <FillOurForm />
      <LearnAboutYlds />
      <DevelopedBy />
    </>
  );
};
