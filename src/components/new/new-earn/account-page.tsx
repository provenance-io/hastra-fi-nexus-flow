import { AccountPageCard } from "./account-page-card";
import { TokenHoldingsCard } from "./token-holdings-card";

export const AccountPage = () => {
  return (
    <section
      aria-label="Hastra Account Page"
      className="w-screen min-h-screen mt-[108px]"
    >
      <div className="px-4 w-full h-full flex md:justify-center md:items-center pt-[100px] pb-4 md:py-[118px]">
        <h3 className="md:text-center w-1/2 text-[55px] leading-[98%]">
          Your{" "}
          <span className="text-brand-purple font-[550]">decentralized</span>{" "}
          finance command center
        </h3>
      </div>
      <div className="space-y-6">
        <AccountPageCard />
        <TokenHoldingsCard />
      </div>
    </section>
  );
};
