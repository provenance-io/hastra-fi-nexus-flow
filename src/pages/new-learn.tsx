import { Hero } from "@/components/new/new-learn/hero";
import { Unlock } from "@/components/new/new-learn/unlock";

export const NewLearn = () => {
  return (
    <div className="mx-auto bg-brand-background max-w-screen overflow-x-hidden">
      <Hero />
      <Unlock />
    </div>
  );
};
