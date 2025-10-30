import farLeft from "@/assets/new/prime-page/prime-stats-far-left.png";
import left from "@/assets/new/prime-page/prime-stats-left.png";
import right from "@/assets/new/prime-page/prime-stats-right.png";
import farRight from "@/assets/new/prime-page/prime-stats-far-right.png";
import figureName from "@/assets/figure-logo-name.png";
import mobileLeft from "@/assets/new/about-page/dev-by-mobile-left.png";
import mobileRight from "@/assets/new/about-page/dev-by-mobile-right.png";
import { usePRIMEAPR } from "@/hooks/use-prime-apr";

export const Stats = () => {
  const { rate, loading, error } = usePRIMEAPR();
  const displayApr = loading ? "..." : error ? "Error" : `${rate}%`;
  const vals = [
    {
      title: displayApr,
      description: "Current APY",
    },
    {
      title: "$12.4M",
      description: "Total Value Locked",
    },
    {
      title: "2,847",
      description: "Active Stakers",
    },
  ];
  return (
    <section
      aria-label="Developed By Figure"
      className="relative w-screen flex justify-center items-center font-season-sans py-[100px] lg:py-[350px]"
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
      <img src={farLeft} className="absolute left-0 lg:hidden h-[535px]" />
      <img
        src={farRight}
        className="absolute right-0 lg:hidden h-[354px] rotate-180"
      />
      <img
        src={farLeft}
        alt="far left image"
        className="absolute hidden lg:flex h-[414px] top-[10%] left-0"
      />
      <div className="absolute glassContainer z-20 top-[20%] left-[10%] hidden lg:flex">
        <img src={left} alt="left image" className="relative h-[488px] z-10" />
      </div>
      <div className="hidden lg:flex absolute glassContainer z-20 top-[10%] right-[20%]">
        <img src={right} alt="left image" className="relative h-[436px] z-10" />
      </div>
      <img
        src={farRight}
        alt="far right image"
        className="hidden lg:flex absolute h-[414px] rotate-180 top-[20%] right-0"
      />
      <div className="max-w-7xl flex flex-col lg:flex-row items-center text-center justify-between gap-[150px] leading-[98%] px-20">
        {vals.map((v) => (
          <div className="space-y-[35px]" key={v.description}>
            <p className="text-[80px] leading-[54%] font-[550]">{v.title}</p>
            <p className="text-[22px] leading-[99%]">{v.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
