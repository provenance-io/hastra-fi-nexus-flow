import { useWallet } from "@/contexts/WalletContext";
import WalletOverview from "./WalletOverview";
import BuyCard from "./BuyCard";
import SendCard from "./SendCard";
import TradingPlatformsSection from "../start-earning/TradingPlatformsSection";
import StakingSection from "../staking/StakingSection";
import { useTokenPortfolio } from "@/hooks/useTokenPortfolio.ts";
import { useOfac } from "@/hooks/use-ofac.ts";
import { useEffect, useState } from "react";
import { Progress } from "@/components/ui/progress.tsx";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../ui/tabs";
import { match } from "ts-pattern";
import { cn } from "@/lib/utils";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import {
  ArrowUpDown,
  ChartCandlestick,
  FolderOpen,
  Send,
  TrendingUp,
  Wallet,
} from "lucide-react";
import { TokenHoldings } from "./TokenHoldings";

const tabSections = [
  "Portfolio",
  "Holdings",
  "Buy",
  "Send",
  "Stake",
  "Trade",
] as const;

const getTabLogo = (section: (typeof tabSections)[number]) => {
  return match(section)
    .with("Buy", () => <ArrowUpDown className="size-4" />)
    .with("Holdings", () => <Wallet className="size-4" />)
    .with("Portfolio", () => <FolderOpen className="size-4" />)
    .with("Send", () => <Send className="size-4" />)
    .with("Stake", () => <TrendingUp className="size-4" />)
    .with("Trade", () => <ChartCandlestick className="size-4" />)
    .exhaustive();
};

const ofacLimitedSections = ["Buy", "Send", "Stake"];

const HastraDashboard = () => {
  const { isConnected, address } = useWallet();
  const { tokens } = useTokenPortfolio();
  const [tabsValue, setTabsValue] = useState("Portfolio");

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
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const elementPosition = element.offsetTop;
      const offsetPosition = elementPosition - 100; // Offset to keep title visible

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
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
    <div className="w-full">
      {/* Header */}
      <div className="mb-6 md:mb-8 text-center">
        <p
          className="text-xl md:text-2xl text-foreground/90 max-w-4xl mx-auto leading-relaxed"
          style={{
            textShadow:
              "0 0 10px rgba(255, 255, 255, 0.3), 0 0 20px rgba(255, 255, 255, 0.1)",
          }}
        >
          Your decentralized finance command center
        </p>
      </div>

      {match({ ofacLoading, ofacPassed: ofacPass() })
        .with({ ofacLoading: true }, () => (
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-primary"></div>
            <span className="text-base font-medium text-foreground">
              OFAC in Progress
            </span>
          </div>
        ))
        .with({ ofacPassed: false }, () => (
          <div className="mb-8 md:mb-12">
            <div className="card-gradient rounded-3xl border border-border/30 shadow-lg p-6 md:p-12 max-w-3xl mx-auto text-center">
              <h2 className="text-lg font-semibold mb-2">
                Trading is Disabled
              </h2>
              <p className="text-base text-foreground mb-4">
                Your account did not pass the OFAC compliance check.
              </p>
            </div>
          </div>
        ))
        .otherwise(() => undefined)}

      <Tabs value={tabsValue} onValueChange={(val) => setTabsValue(val)}>
        <TabsList
          className={cn(
            "hidden md:flex w-full mb-8 overflow-x-scroll no-scrollbar",
            displayedTabs.length === tabSections.length
              ? "justify-between"
              : "space-x-10"
          )}
        >
          {displayedTabs.map((t) => (
            <TabsTrigger
              key={t}
              className="w-full flex items-center gap-2 text-orange-300"
              value={t}
            >
              {getTabLogo(t)}
              {t}
            </TabsTrigger>
          ))}
        </TabsList>
        <Select value={tabsValue} onValueChange={(val) => setTabsValue(val)}>
          <SelectTrigger className="w-full md:hidden mb-4">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {displayedTabs.map((t) => (
                <SelectItem value={t} key={t}>
                  <div className="flex flex-row items-center gap-2">
                    {getTabLogo(t)}
                    {t}
                  </div>
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
        {tabSections.map((t) =>
          match(t)
            .with("Buy", () => (
              <TabsContent value={t}>
                {ofacPass() ? (
                  <div id="buy-section" className="mb-8 md:mb-12">
                    <div id="buy-section" className="mb-8 md:mb-12 relative">
                      <div className="card-gradient rounded-3xl border border-border/30 shadow-lg p-4 lg:p-6">
                        <BuyCard />
                      </div>
                    </div>
                  </div>
                ) : undefined}
              </TabsContent>
            ))
            .with("Holdings", () => (
              <TabsContent value={t}>
                <TokenHoldings />
              </TabsContent>
            ))
            .with("Portfolio", () => (
              <TabsContent value={t}>
                <WalletOverview />
              </TabsContent>
            ))
            .with("Send", () => (
              <TabsContent value={t}>
                {ofacPass() ? (
                  <div id="buy-section" className="mb-8 md:mb-12">
                    <div id="buy-section" className="mb-8 md:mb-12 relative">
                      <div className="card-gradient rounded-3xl border border-border/30 shadow-lg p-4 lg:p-6">
                        <SendCard />
                      </div>
                    </div>
                  </div>
                ) : undefined}
              </TabsContent>
            ))
            .with("Stake", () => (
              <TabsContent value={t}>
                {ofacPass() ? (
                  <StakingSection />
                ) : (
                  "Staking is disabled until OFAC checks are passed."
                )}
              </TabsContent>
            ))
            .with("Trade", () => (
              <TabsContent value={t}>
                <div id="trade-lend-section" className="mb-8 md:mb-12">
                  <div className="card-gradient rounded-3xl border border-border/30 shadow-lg p-4 md:p-6">
                    <TradingPlatformsSection />
                  </div>
                </div>
              </TabsContent>
            ))
            .exhaustive()
        )}
      </Tabs>

      {/* Additional Info */}
      <div className="text-center text-muted-foreground mt-8">
        <p className="text-sm">Always verify transactions before confirming</p>
      </div>
    </div>
  );
};
export default HastraDashboard;
