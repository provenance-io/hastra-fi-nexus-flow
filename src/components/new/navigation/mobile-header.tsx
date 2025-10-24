import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Link, useLocation } from "react-router-dom";
import purpleLight from "@/assets/hastra-purple-light.png";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { match } from "ts-pattern";
import { Button } from "@/components/ui/button";
import hamburger from "@/assets/hamburger-icon.png";
import { X } from "lucide-react";

export const MobileHeader = ({
  isScrolled,
  isConnected,
  disconnectWallet,
  connectWallet,
}: {
  isScrolled: boolean;
  isConnected: boolean;
  disconnectWallet: () => void;
  connectWallet: () => void;
}) => {
  const { pathname } = useLocation();
  const menuItems = [
    {
      id: "about",
      title: "About",
      href: "/about",
    },
    {
      id: "product",
      title: "Product",
      href: "/product",
    },
    {
      id: "earn",
      title: "Earn",
      href: "/earn",
    },
    {
      id: "learn",
      title: "Learn",
      href: "/learn",
    },
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav
      className={cn(
        "fixed top-0 z-50 w-full flex justify-between transition-all duration-300 items-center p-5 max-w-screen overflow-x-hidden font-season-sans bg-brand-background"
      )}
    >
      <div className="flex justify-between w-full items-center">
        <div className="flex-shrink-0">
          <Link to="/" className="text-xl font-bold">
            <img src={purpleLight} className="w-[30px]" />
          </Link>
        </div>
        <div className="flex items-center space-x-4 md:space-x-8">
          {pathname !== "/new-earn" ? (
            <Link to="/earn">
              <Button
                className="rounded-full w-fit px-7 h-[40px] text-base leading-[110%] shadow-button text-brand-white"
                variant="ghost"
              >
                Launch Protocol
              </Button>
            </Link>
          ) : (
            match(isConnected)
              .with(true, () => (
                <Button
                  className="rounded-full w-fit px-7 h-[40px] text-base leading-[110%] shadow-button text-brand-white"
                  variant="ghost"
                  onClick={disconnectWallet}
                >
                  Disconnect Wallet
                </Button>
              ))
              .otherwise(() => (
                <Button
                  className="font-season-sans rounded-full w-fit px-7 h-[40px] text-base leading-[116%] shadow-button text-brand-white"
                  variant="ghost"
                  onClick={connectWallet}
                >
                  Connect Wallet
                </Button>
              ))
          )}
          <div className="flex items-center space-x-4 md:space-x-8">
            <Button
              variant="link"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="cursor-pointer"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="size-[38px]" strokeWidth={1} />
              ) : (
                <img src={hamburger} className="w-[38px] cursor-pointer" />
              )}
            </Button>
          </div>
        </div>
      </div>
      <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
        <SheetContent
          aria-describedby={undefined}
          side="top"
          className={`p-0 bg-brand-background h-[30rem]`}
        >
          <SheetHeader className="py-5 px-5 border-b relative">
            <SheetTitle className="flex items-center justify-between gap-6">
              <Link to="/" className="text-xl font-bold">
                <img src={purpleLight} className="w-[30px] h-auto" />
              </Link>
            </SheetTitle>
          </SheetHeader>
          <div className="relative h-[calc(100%-81px)] overflow-hidden">
            <div
              className={`flex w-[200%] transition-transform duration-300 ease-in-out translate-x-0 $`}
            >
              {/* Main Menu Panel */}
              <div className="w-1/2 shrink-0 font-season-serif text-[23px] font-[470] leading-[98%]">
                <nav className="grid gap-1">
                  {menuItems.map((item, idx) => (
                    <div
                      key={item.title}
                      className={`w-full p-4 flex justify-between gap-4 items-center ${
                        idx !== menuItems.length - 1
                          ? "border-b border-b-gray-300"
                          : undefined
                      }`}
                    >
                      <div className="flex gap-4 items-center text-start text-xl overflow-hidden flex-1 min-h-[65px]">
                        <Link
                          to={item.href}
                          className="grid grid-cols-[0.10fr_1fr] gap-4 items-center justify-center text-start text-xl w-full"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <span className="flex-1">{item.title}</span>
                        </Link>
                      </div>
                    </div>
                  ))}
                </nav>
              </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </nav>
  );
};
