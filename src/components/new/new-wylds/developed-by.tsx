import farLeft from "@/assets/new/about-page/dev-by-far-left.png";
import left from "@/assets/new/about-page/dev-by-left.png";
import right from "@/assets/new/about-page/dev-by-right.png";
import farRight from "@/assets/new/about-page/dev-by-far-right.png";
import figureName from "@/assets/figure-logo-name.png";
import mobileLeft from "@/assets/new/about-page/dev-by-mobile-left.png";
import mobileRight from "@/assets/new/about-page/dev-by-mobile-right.png";

export const DevelopedBy = () => {
  return (
    <section
      aria-label="Developed By Figure"
      className="relative w-screen flex justify-center items-center font-season-sans py-[100px] md:py-[150px]"
    >
      <div className="flex flex-col text-start text-[12px] md:text-[18px] gap-y-[15px] md:gap-y-[23px] leading-[98%]">
        <p>Developed by</p>
        <img src={figureName} alt="figure" className="w-[184px] md:w-[266px]" />
        <p>
          Powered by <span className="font-[750]">Democratized Prime</span>
        </p>
      </div>
    </section>
  );
};
