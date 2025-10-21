import hastraWithName from "@/assets/purple-hastra-name.png";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

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
  const [activeTab, setActiveTab] = useState("About");
  const [isScrolled, setIsScrolled] = useState(false);

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

  return (
    <nav
      className={cn(
        "fixed top-0 z-50 w-full flex justify-between transition-all duration-300 items-center px-4 md:px-6 pt-[37px] pb-4 max-w-screen overflow-x-hidden",
        isScrolled ? "bg-brand-background" : "bg-transparent"
      )}
    >
      <div className="flex items-center justify-between gap-[72px]">
        <Link to="/">
          <img src={hastraWithName} alt="Hastra" className="w-[161px]" />
        </Link>
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="rounded-full h-[63px] gap-x-20 bg-transparent border-[0.3px] border-brand-light-purple px-[18px]">
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
      <Button className="rounded-full w-[230px] h-[63px] text-base leading-[110%]">
        Launch Protocol
      </Button>
    </nav>
  );
};
