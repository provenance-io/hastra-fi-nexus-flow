import { DevelopedBy } from "@/components/new/new-home/developed-by";
import { Choose } from "@/components/new/new-learn/choose";
import { Hero } from "@/components/new/new-learn/hero";
import { Ready } from "@/components/new/new-learn/ready";

export const NewLearn = () => {
  return (
    <>
      <Hero />
      <Choose />
      <Ready />
      <DevelopedBy />
    </>
  );
};
