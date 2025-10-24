import phoneAnimation from "@/assets/new/learn-page/build-animation.mp4";
import { HeroCards } from "./components/hero-cards";

export const HeroSmall = () => {
  return (
    <section
      aria-label="Learn Page Hero Section"
      className="relative overflow-y-hidden font-season-sans"
    >
      <div
        className="mx-auto overflow-x-hidden overflow-y-hidden flex flex-col text-brand-white max-w-screen h-full bg-black"
        aria-label="Hero Image"
      >
        <div className="relative overflow-hidden h-full">
          <video
            playsInline
            className="videoTag overflow-hidden object-cover min-h-[600px] md:h-full"
            autoPlay
            loop
            muted
          >
            <source src={phoneAnimation} type="video/mp4" />
          </video>
          <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-b from-transparent from-50% to-black z-[20]" />
        </div>
        <div className="pb-[100px] w-full px-5 z-10 bg-gradient-to-b from-transparent to-[#021323]">
          <div className="flex flex-col items-center text-[45px] leading-[108%]">
            Repeat after Us: Accessing{" "}
            <span className="text-brand-purple w-full sm:w-fit">
              good investments
            </span>{" "}
            shouldn't require a trust fund.
          </div>
        </div>
      </div>
      <HeroCards />
    </section>
  );
};
