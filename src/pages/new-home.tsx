import { DevelopedBy } from "@/components/new/new-home/developed-by";
import { Hero } from "@/components/new/new-home/hero";
import { PrimeCard } from "@/components/new/new-home/prime-card";
import { Steps } from "@/components/new/new-home/steps";
import { WYLDSCard } from "@/components/new/new-home/wylds-card";

export const NewHome = () => {
  return (
    <div className="mx-auto bg-brand-background max-w-screen overflow-x-hidden">
      <Hero />
      <WYLDSCard />
      <PrimeCard />
      <Steps />
      <DevelopedBy />
    </div>
  );
};
