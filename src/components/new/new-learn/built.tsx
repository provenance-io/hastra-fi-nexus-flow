import chainBg from "@/assets/new/learn-page/chain-bg.png";

export const Build = () => {
  return (
    <section
      className="bg-cover"
      aria-label="Hastra is built on Provenance"
      style={{ backgroundImage: `url(${chainBg})` }}
    ></section>
  );
};
