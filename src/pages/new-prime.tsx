import { Hero } from "@/components/new/new-prime/hero";
import { HeroSmall } from "@/components/new/new-prime/hero-small";
import { HowPrimeWorks } from "@/components/new/new-prime/how-prime-works";
import { WhyChoosePrime } from "@/components/new/new-prime/why-choose-prime";
import { Stats } from "@/components/new/new-prime/stats";
import { useIsMobile } from "@/hooks/use-mobile";

export const NewPrime = () => {
  const isMobile = useIsMobile();
  return (
    <>
      {isMobile ? <HeroSmall /> : <Hero />}
      <HowPrimeWorks />
      <WhyChoosePrime />
      <Stats />
    </>
  );
};
