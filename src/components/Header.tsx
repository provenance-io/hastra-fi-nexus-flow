import { Link, useLocation } from "react-router-dom";
import FooterLogo from "./FooterLogo";
import MobileMenu from "./MobileMenu";
import WalletHeaderButton from "./wallet/WalletHeaderButton";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Loader2, Wallet } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { useWallet } from "@/contexts/WalletContext";
import { fetchCurrentAPY } from "@/utils/solana-utils";
import { isFeatureEnabled } from "@/utils/featureFlags";

interface FigureYieldResponse {
  rate: number;
}

const Header = () => {
  const location = useLocation();
  const { isConnected, connectWallet } = useWallet();

  const {
    data: apy,
    isLoading: apyLoading,
    error: apyError,
  } = useQuery({
    queryKey: ["yield-apy"],
    queryFn: fetchCurrentAPY,
    refetchInterval: 5 * 60 * 1000, // Refetch every 5 minutes
  });

  const navItems = [
    // Removed innovation and approach items
  ];

  const handleNavClick = (href: string, isAnchor?: boolean) => {
    if (isAnchor) {
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const displayApy = apyLoading
    ? "Loading..."
    : apyError
    ? "Error"
    : `Earn Up to ${apy || 4}% APY`;
  const isEarnPage = location.pathname === "/earn";

  const handleConnectWallet = async () => {
    if (!isConnected) {
      await connectWallet();
    } else {
      // Scroll to dashboard section if already connected
      const dashboardSection = document.querySelector(
        '[data-section="wallet-dashboard"]'
      );
      if (dashboardSection) {
        dashboardSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  // Shared navigation link styles
  const navLinkStyles =
    "text-sm md:text-base lg:text-lg font-medium text-foreground/90 hover:text-foreground transition-all duration-300 relative group tracking-widest uppercase focus:outline-none focus:ring-0 rounded-md px-1 md:px-2 py-1";

  const navTextShadowStyles = {
    textShadow:
      "0 0 10px rgba(255, 255, 255, 0.3), 0 0 20px rgba(255, 255, 255, 0.1)",
    transition: "text-shadow 0.3s ease",
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLElement>) => {
    e.currentTarget.style.textShadow =
      "0 0 15px rgba(255, 255, 255, 0.8), 0 0 30px rgba(255, 255, 255, 0.4), 0 0 45px rgba(255, 255, 255, 0.2)";
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLElement>) => {
    e.currentTarget.style.textShadow =
      "0 0 10px rgba(255, 255, 255, 0.3), 0 0 20px rgba(255, 255, 255, 0.1)";
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/20 bg-muted/30 backdrop-blur supports-[backdrop-filter]:bg-muted/20 shadow-sm shadow-header-glow/5">
      <div className="container flex h-14 md:h-16 lg:h-18 items-center justify-between px-4 md:px-6">
        {/* Responsive logo with proper tablet sizing */}
        <div className="flex items-center space-x-4 md:space-x-6 lg:space-x-12 md:flex-1">
          <Link
            to="/"
            className="flex items-center hover:opacity-80 transition-opacity"
          >
            <FooterLogo className="h-10 md:h-12 lg:h-16 w-auto" />
          </Link>
          <nav className="hidden md:flex items-center space-x-4 lg:space-x-7 xl:space-x-11">
            <Link
              to="/about"
              className={navLinkStyles}
              style={navTextShadowStyles}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              About
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger
                className={`${navLinkStyles} flex items-center outline-none focus:outline-none focus:ring-0 border-none bg-transparent`}
                style={navTextShadowStyles}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                Products
                <svg
                  className="ml-1 w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className="w-72 bg-background/30 backdrop-blur-md border border-border/20 hover:border-orange-300/20 shadow-2xl mt-4 z-50"
                align="start"
              >
                <DropdownMenuItem asChild>
                  <Link
                    to="/yield"
                    className="flex items-center w-full cursor-pointer p-3 hover:bg-orange-300/10 hover:text-orange-300 rounded-lg transition-all duration-200 group focus:outline-none focus:ring-0"
                  >
                    <div className="flex items-center gap-3">
                      <img
                        src="/lovable-uploads/08452a7b-6782-4b0a-900e-0f0c99a4fc4e.png"
                        alt="wYLDS Token"
                        className="w-10 h-10 rounded-lg group-hover:scale-105 transition-transform"
                      />
                      <div>
                        <div className="font-semibold text-platinum/90 mb-1">
                          wYLDS
                        </div>
                        <div className="text-sm text-platinum/70 flex items-center gap-1">
                          {apyLoading && (
                            <Loader2 className="h-3 w-3 animate-spin" />
                          )}
                          <span className={apyError ? "text-red-400" : ""}>
                            {displayApy}
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    to="/swylds"
                    className="flex items-center w-full cursor-pointer p-3 hover:bg-orange-300/10 hover:text-orange-300 rounded-lg transition-all duration-200 group focus:outline-none focus:ring-0"
                  >
                    <div className="flex items-center gap-3">
                      <img
                        src="/lovable-uploads/e7aaba79-32ba-4351-820f-5388f7bed1c2.png"
                        alt="swYLDS Token"
                        className="w-10 h-10 rounded-lg object-cover group-hover:scale-105 transition-transform"
                      />
                      <div>
                        <div className="font-semibold text-platinum/90 mb-1">
                          swYLDS
                        </div>
                        <div className="text-sm text-platinum/70">
                          COMING SOON
                        </div>
                      </div>
                    </div>
                  </Link>
                </DropdownMenuItem>
                {isFeatureEnabled('homesEnabled') && (
                  <DropdownMenuItem asChild>
                    <Link
                      to="/homes"
                      className="flex items-center w-full cursor-pointer p-3 hover:bg-orange-300/10 hover:text-orange-300 rounded-lg transition-all duration-200 group focus:outline-none focus:ring-0"
                    >
                      <div className="flex items-center gap-3">
                        <img
                          src="/lovable-uploads/e7aaba79-32ba-4351-820f-5388f7bed1c2.png"
                          alt="HOMES Token"
                          className="w-10 h-10 rounded-lg object-cover group-hover:scale-105 transition-transform"
                        />
                        <div>
                          <div className="font-semibold text-platinum/90 mb-1">
                            HOMES
                          </div>
                          <div className="text-sm text-platinum/70">
                            COMING SOON
                          </div>
                        </div>
                      </div>
                    </Link>
                  </DropdownMenuItem>
                )}
              </DropdownMenuContent>
            </DropdownMenu>
            {navItems.map((item) => (
              <div key={item.label}>
                {item.isAnchor ? (
                  <button
                    onClick={() => handleNavClick(item.href, true)}
                    className={navLinkStyles}
                    style={navTextShadowStyles}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    {item.label}
                  </button>
                ) : (
                  <Link
                    to={item.href}
                    className={navLinkStyles}
                    style={navTextShadowStyles}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
            <Link
              to="/earn"
              className={navLinkStyles}
              style={navTextShadowStyles}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              Earn
            </Link>
            <Link
              to="/learn"
              className={navLinkStyles}
              style={navTextShadowStyles}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              Learn
            </Link>
          </nav>
        </div>

        <div className="flex items-center space-x-4">
          {isConnected ? (
            <div className="hidden md:block">
              <WalletHeaderButton />
            </div>
          ) : isEarnPage ? (
            <Button
              onClick={handleConnectWallet}
              size="lg"
              variant="secondary"
              className="hidden md:flex tracking-widest"
            >
              CONNECT WALLET
              <Wallet className="ml-2 h-4 w-4" />
            </Button>
          ) : (
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="hidden md:flex tracking-widest"
            >
              <Link to="/earn">LAUNCH PROTOCOL</Link>
            </Button>
          )}
          <MobileMenu />
        </div>
      </div>
    </header>
  );
};

export default Header;
