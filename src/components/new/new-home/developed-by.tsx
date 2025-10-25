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
      className="relative w-screen flex justify-between items-center font-season-sans pb-[50px]"
    >
      <svg style={{ display: "none" }}>
        <filter id="container-glass" x="0%" y="0%" width="100%" height="100%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.008 0.008"
            numOctaves="2"
            seed="92"
            result="noise"
          />
          <feGaussianBlur in="noise" stdDeviation="0.02" result="blur" />
          <feDisplacementMap
            in="SourceGraphic"
            in2="blur"
            scale="77"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
        <filter id="btn-glass" primitiveUnits="objectBoundingBox">
          <feGaussianBlur
            in="SourceGraphic"
            stdDeviation="0.02"
            result="blur"
          ></feGaussianBlur>
          <feDisplacementMap
            id="disp"
            in="blur"
            in2="map"
            scale="1"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
      </svg>
      <img src={mobileLeft} className="lg:hidden h-[535px]" />
      <img src={mobileRight} className="lg:hidden h-[354px]" />
      <div className="hidden lg:flex items-center gap-[67px]">
        <img src={farLeft} alt="far left image" className="h-[794px]" />
        {/* <div className="glassContainer z-20">
          <img
            src={right}
            alt="left image"
            className="relative h-[781px] z-10 rotate-180"
          />
        </div> */}
        <img src={left} alt="left image" className="h-[781px]" />
      </div>
      <div className="hidden lg:flex items-center gap-[67px]">
        <img src={right} alt="right image" className="h-[523px]" />
        <img src={farRight} alt="far right image" className="h-[691px]" />
      </div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col text-[12px] md:text-[18px] gap-y-[15px] md:gap-y-[23px] leading-[98%]">
        <p>Developed by</p>
        <img src={figureName} alt="figure" className="w-[184px] md:w-[266px]" />
        <p>
          Powered by <span className="font-[750]">Democratized Prime</span>
        </p>
      </div>
    </section>
  );
};
