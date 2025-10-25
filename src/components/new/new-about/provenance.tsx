import { Link } from "react-router-dom";

export const Provenance = () => {
  return (
    <section
      aria-label="Build on Provennace"
      className="w-screen flex items-center justify-center py-[100px] font-season-sans"
    >
      <h2 className="w-2/3 text-center text-[35px] leading-[113%]">
        Most DeFi protocols create their own tokens to capture value for
        themselves. We're taking a different approach.{" "}
        <span className="font-[650]">
          Instead of launching another token, we're channeling our success
          directly back to the HASH holders
        </span>{" "}
        who power and secure the{" "}
        <Link to="https://provenance.io" className="underline">
          Provenance Blockchain
        </Link>
        .
      </h2>
    </section>
  );
};
