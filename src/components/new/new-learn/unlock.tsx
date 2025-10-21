import provenance from "@/assets/new/learn-page/provenance-name-white.png";
import figure from "@/assets/figure-logo-name.png";

export const Unlock = () => {
  return (
    <section
      className="max-w-[96rem] flex flex-col mx-auto px-10 py-[100px] text-center"
      aria-label="Unlock the full potential section"
    >
      <div className="flex flex-col md:flex-row gap-5 md:gap-10 py-4 justify-between items-center w-fit mx-auto">
        <img
          src={provenance}
          alt="Provenance Blockchain"
          className="h-[64px]"
        />
        <div className="flex flex-col">
          <p className="text-[26px] leading-[113%]">X</p>
          <p className="text-[15px] leading-[103%]">joined by</p>
        </div>
        <img src={figure} alt="Figure" className="h-[44px]" />
      </div>
      <div className="pt-[80px] md:pt-[137px] flex flex-col md:flex-row justify-between text-start h-full gap-10 md:gap-20 md:px-10">
        <h3 className="text-[45px] md:text-[60px] leading-[103%] md:w-2/5">
          Unlocking the Full Potential of{" "}
          <span className="text-brand-purple">DeFi for RWA</span>
        </h3>
        <div className="space-y-4 text-[20px] md:text-[25px] leading-[110%] md:w-3/5">
          <p>
            Incubated by Figure Technologies and Provenance Blockchain
            Foundation, Hastra is embarking on a joint mission to enable
            unprecedented usability of real-world assets that exist natively
            onchain.
          </p>{" "}
          <p>No more walls. No more siloes.</p>
          <p>
            A definitive step in deploying traditional financial assets within
            the heart of the decentralized economy, unlocking the full
            capabilities of RWA-backed DeFi for everyone.
          </p>
        </div>
      </div>
    </section>
  );
};
