import chainBg from "@/assets/new/learn-page/chain-bg.png";
import chainBgMobile from "@/assets/new/learn-page/chain-bg-mobile.png";
import { useIsMobile } from "@/hooks/use-mobile";

export const LearnAboutYlds = () => {
  const isMobile = useIsMobile();
  return (
    <section
      className="px-[37px] bg-cover font-season-sans bg-top w-screen pt-[100px] md:pt-[200px] pb-[271px] flex items-center justify-center text-center"
      aria-label="Learn about YLDS"
      style={{
        backgroundImage: `url(${isMobile ? chainBgMobile : chainBg})`,
      }}
    >
      <div className="flex flex-col gap-[26px] md:w-1/2 items-center justify-center">
        <h3 className="text-[45px] md:text-[55px] leading-[101%] pb-[26px]">
          Learn About YLDS
        </h3>
        <p className="text-[20px] md:text-[25px] leading-[103%]">
          Visit the official YLDS website to understand the underlying
          technology and ecosystem.
        </p>
      </div>
    </section>
  );
};
