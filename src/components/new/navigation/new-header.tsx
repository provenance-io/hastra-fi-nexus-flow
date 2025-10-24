import hastraWithName from "@/assets/purple-hastra-name.png";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useWallet } from "@/contexts/WalletContext";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { match } from "ts-pattern";
import { MobileHeader } from "./mobile-header";

export const headerNavItems = [
  {
    name: "About",
    link: "/about",
  },
  {
    name: "Product",
    link: "/product",
  },
  {
    name: "Earn",
    link: "/earn",
  },
  {
    name: "Learn",
    link: "/learn",
  },
];

export const NewHeader = () => {
  const { pathname } = useLocation();
  const isMobile = useIsMobile();
  const [activeTab, setActiveTab] = useState("About");
  const [isScrolled, setIsScrolled] = useState(false);
  const { isConnected, disconnectWallet, connectWallet } = useWallet();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    headerNavItems.map((h) => {
      if (pathname.includes(h.link)) {
        setActiveTab(h.name);
      }
    });
  }, [pathname]);

  return isMobile ? (
    <MobileHeader
      isScrolled={isScrolled}
      isConnected={isConnected}
      disconnectWallet={disconnectWallet}
      connectWallet={connectWallet}
    />
  ) : (
    <nav
      className={cn(
        "fixed top-0 z-50 w-full flex justify-between transition-all duration-300 items-center px-4 md:px-6 pt-[37px] pb-4 max-w-screen overflow-x-hidden font-season-sans",
        isScrolled
          ? "bg-brand-background pt-4"
          : "bg-gradient-to-t from-transparent to-[60%] to-brand-background"
      )}
    >
      <div className="flex items-center justify-between gap-5 xl:gap-[72px]">
        <Link to="/">
          <img
            src={hastraWithName}
            alt="Hastra"
            className="w-[161px] flex-shrink-0"
          />
        </Link>
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="rounded-full h-[63px] lg:gap-x-10 xl:gap-x-20 bg-transparent border-[0.3px] border-brand-light-purple px-[18px]">
            {headerNavItems.map((item) => (
              <TabsTrigger
                key={item.name}
                value={item.name}
                className="px-[18px] py-3 text-base"
                showDataState={false}
              >
                <Link to={item.link}>{item.name}</Link>
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </div>
      {pathname !== "/earn" ? (
        <Link to="/earn">
          <Button
            className="rounded-full w-[150px] xl:w-[230px] h-[63px] text-base leading-[110%] shadow-button text-brand-white"
            variant="ghost"
          >
            Launch Protocol
          </Button>
        </Link>
      ) : (
        match(isConnected)
          .with(true, () => (
            <Button
              className="rounded-full w-[150px] xl:w-[230px] h-[63px] text-base leading-[110%] shadow-button text-brand-white"
              variant="ghost"
              onClick={disconnectWallet}
            >
              Disconnect Wallet
            </Button>
          ))
          .otherwise(() => (
            <Button
              className="rounded-full w-[150px] xl:w-[230px] h-[63px] text-base leading-[110%] shadow-button text-brand-white"
              variant="ghost"
              onClick={connectWallet}
            >
              Connect Wallet
            </Button>
          ))
      )}
    </nav>
  );
};
