import { Build } from "@/components/new/new-learn/built";
import { ComingSoon } from "@/components/new/new-learn/coming-soon";
import { Connect } from "@/components/new/new-learn/connect";
import { Hero } from "@/components/new/new-learn/hero";
import { HeroSmall } from "@/components/new/new-learn/hero-small";
import { Provenance } from "@/components/new/new-learn/provenance";
import { Unlock } from "@/components/new/new-learn/unlock";
import { useIsMobile } from "@/hooks/use-mobile";

export const NewLearn = () => {
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
