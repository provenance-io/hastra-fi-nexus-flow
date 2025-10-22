import { AccountPageCard } from "./account-page-card";
import { BuySendSection } from "./buy-send-section";
import { TokenHoldingsCard } from "./token-holdings-card";

export const AccountPage = () => {
  return (
    <section
      aria-label="Hastra Account Page"
      className="w-screen min-h-screen mt-[108px]"
    >
      <div className="px-[37px] w-full h-full flex md:justify-center md:items-center py-[118px]">
        <h3 className="md:text-center md:w-1/2 text-[55px] leading-[98%] text-wrap hyphens-auto sm:hyphens-none">
          Your <br className="sm:hidden" />
          <span className="text-brand-purple font-[550]">
            decentralized
          </span>{" "}
          <br className="sm:hidden" />
          finance command center
        </h3>
      </div>
      <div className="space-y-6">
        <AccountPageCard />
        <TokenHoldingsCard />
        <BuySendSection />
      </div>
    </section>
  );
};
