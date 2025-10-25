import { Build } from "@/components/new/new-about/built";
import { ComingSoon } from "@/components/new/new-about/coming-soon";
import { Connect } from "@/components/new/new-about/connect";
import { Hero } from "@/components/new/new-about/hero";
import { HeroSmall } from "@/components/new/new-about/hero-small";
import { Provenance } from "@/components/new/new-about/provenance";
import { Unlock } from "@/components/new/new-about/unlock";
import { useIsMobile } from "@/hooks/use-mobile";

export const NewAbout = () => {
  const isMobile = useIsMobile();
  return (
    <div className="mx-auto bg-brand-background max-w-screen overflow-x-hidden">
      {isMobile ? <HeroSmall /> : <Hero />}
      <Unlock />
      <Build />
      <Provenance />
      <ComingSoon />
      <Connect />
    </div>
  );
};
