import chainBg from "@/assets/new/learn-page/chain-bg.png";
import chainBgMobile from "@/assets/new/learn-page/chain-bg-mobile.png";
import { useIsMobile } from "@/hooks/use-mobile";

export const Build = () => {
  const isMobile = useIsMobile();
  return (
    <section
      className="bg-cover bg-bottom lg:bg-center font-season-sans"
      aria-label="Hastra is built on Provenance"
      style={{ backgroundImage: `url(${isMobile ? chainBgMobile : chainBg})` }}
    >
      <h2 className="text-[35px] lg:text-[55px] pt-[100px] pb-[350px] lg:py-[250px] px-[37px] lg:px-20 sm:w-3/4 lg:w-3/5 leading-[101%]">
        Hastra is built on{" "}
        <span className="font-[550] text-brand-purple">
          Provenance Blockchain
        </span>
        —and we're committed to making the entire ecosystem stronger.
      </h2>
    </section>
  );
};
