import StakingSection from "@/components/staking/StakingSection";
import TradingPlatformsSection from "@/components/start-earning/TradingPlatformsSection";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import BuyCard from "@/components/wallet/BuyCard";
import SendCard from "@/components/wallet/SendCard";
import { useAvailableActions } from "@/hooks/use-available-actions";
import { useOfac } from "@/hooks/use-ofac";
import { cn } from "@/lib/utils";
import { match } from "ts-pattern";
import { useEffect, useState } from "react";
import { useWallet } from "@/contexts/WalletContext";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { BuyTokensCard } from "./components/buy-tokens-card";
import { SendTokensCard } from "./components/send-tokens-card";
import { TradeCard } from "./components/trade-card";
import { StakeTokensCard } from "./components/stake-tokens-card";

const tabSections = ["Buy", "Send", "Stake", "Trade"] as const;

const ofacLimitedSections = ["Buy", "Send", "Stake"];

export const BuySendSection = () => {
  const { isConnected, address } = useWallet();
  const [tabsValue, setTabsValue] = useState("Buy");
  const actions = useAvailableActions();

  const {
    isLoading: ofacLoading,
    data: ofac,
    error: ofacError,
  } = useOfac(address);

  const [ofacProgressValue, setOfacProgressValue] = useState<number>(0);

  useEffect(() => {
    if (ofacLoading) {
      setOfacProgressValue(0);
      const interval = setInterval(() => {
        setOfacProgressValue((prev) => (prev < 95 ? prev + 5 : prev));
      }, 500);
      return () => clearInterval(interval);
    } else {
      setOfacProgressValue(100);
    }
  }, [ofacLoading]);

  const ofacPass = () => {
    return !ofacError && ofac && ofac.Score > 10;
  };

  if (!isConnected) {
    return null;
  }

  const displayedTabs = tabSections
    // If waiting on ofac, just remove those options from
    .filter((t) =>
      ofacLoading || !ofacPass() ? !ofacLimitedSections.includes(t) : t
    );
  return (
    <section
      aria-label="buy send section"
      className="font-season-sans pt-[100px] pb-[47px] max-w-[96rem] mx-auto px-[20px] md:px-[37px]"
    >
      <h2 className="font-season-sans pb-[58px] md:pb-[78px] text-[35px] font-[650] leading-[111%] pl-5 md:pl-10">
        Buy & Send
      </h2>
      <Tabs value={tabsValue} onValueChange={(val) => setTabsValue(val)}>
        <TabsList
          className={cn(
            "flex w-full py-8 md:py-10 rounded-full bg-[#101D2C] mb-4 md:mb-10",
            displayedTabs.length === tabSections.length
              ? "justify-between"
              : "space-x-10"
          )}
        >
          {displayedTabs.map((t) => (
            <TabsTrigger
              key={t}
              className="font-season-sans w-full text-[19px] md:text-[25px] font-[650] leading-[111%] flex items-center gap-2 rounded-full py-4 md:py-[23px] text-brand-white"
              value={t}
            >
              {t}
            </TabsTrigger>
          ))}
        </TabsList>
        {tabSections.map((t) =>
          match(t)
            .with("Buy", () => (
              <TabsContent value={t} key={t}>
                {ofacPass() ? <BuyTokensCard /> : undefined}
              </TabsContent>
            ))
            .with("Send", () => (
              <TabsContent value={t} key={t}>
                {ofacPass() ? <SendTokensCard /> : undefined}
              </TabsContent>
            ))
            .with("Stake", () => (
              <TabsContent value={t} key={t}>
                {ofacPass() ? (
                  <StakeTokensCard />
                ) : (
                  "Staking is disabled until OFAC checks are passed."
                )}
              </TabsContent>
            ))
            .with("Trade", () => (
              <TabsContent value={t} key={t}>
                <TradeCard />
              </TabsContent>
            ))
            .exhaustive()
        )}
      </Tabs>
    </section>
  );
};
