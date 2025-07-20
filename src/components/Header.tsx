
import { Link, useLocation } from 'react-router-dom';
import FooterLogo from './FooterLogo';
import MobileMenu from './MobileMenu';
import WalletHeaderButton from './wallet/WalletHeaderButton';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { ChevronDown, Loader2, Wallet } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
import { useWallet } from '@/contexts/WalletContext';

interface FigureYieldResponse {
  rate: number;
}

const fetchCurrentAPY = async (): Promise<number> => {
  const response = await fetch('https://api.codetabs.com/v1/proxy?quest=https://www.figuremarkets.com/service-funds/public/api/v1/funds/17d885eb-13e9-47a4-ad2f-228c0aa89a91/yield');
  if (!response.ok) {
    throw new Error('Failed to fetch APY data');
  }
  const data: FigureYieldResponse = await response.json()
  return data.rate;
};

const Header = () => {
  const location = useLocation();
  const { isConnected, connectWallet } = useWallet();
  
  const { data: apy, isLoading: apyLoading, error: apyError } = useQuery({
    queryKey: ['yield-apy'],
    queryFn: fetchCurrentAPY,
    refetchInterval: 5 * 60 * 1000, // Refetch every 5 minutes
  });

  const navItems = [
    // Removed innovation and approach items
  ];

  const handleNavClick = (href: string, isAnchor?: boolean) => {
    if (isAnchor) {
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const displayApy = apyLoading ? 'Loading...' : apyError ? 'Error' : `Earn Up to ${apy || 0}% APY`;
  const isEarnPage = location.pathname === '/earn';

  const handleConnectWallet = async () => {
    if (!isConnected) {
      await connectWallet();
    } else {
      // Scroll to dashboard section if already connected
      const dashboardSection = document.querySelector('[data-section="wallet-dashboard"]');
      if (dashboardSection) {
        dashboardSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  // Shared navigation link styles
  const navLinkStyles = "text-base md:text-lg font-medium text-foreground/90 hover:text-foreground transition-all duration-300 relative group tracking-widest uppercase focus:outline-none focus:ring-0 rounded-md px-2 py-1";
  
  const navTextShadowStyles = {
    textShadow: '0 0 10px rgba(255, 255, 255, 0.3), 0 0 20px rgba(255, 255, 255, 0.1)',
    transition: 'text-shadow 0.3s ease'
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLElement>) => {
    e.currentTarget.style.textShadow = '0 0 15px rgba(255, 255, 255, 0.8), 0 0 30px rgba(255, 255, 255, 0.4), 0 0 45px rgba(255, 255, 255, 0.2)';
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLElement>) => {
    e.currentTarget.style.textShadow = '0 0 10px rgba(255, 255, 255, 0.3), 0 0 20px rgba(255, 255, 255, 0.1)';
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/20 bg-muted/30 backdrop-blur supports-[backdrop-filter]:bg-muted/20 shadow-sm shadow-header-glow/5">
      <div className="container flex h-16 md:h-16 items-center justify-between px-4 md:px-6">
        {/* Mobile: Center the logo with more space, Desktop: Left aligned */}
        <div className="flex items-center space-x-6 md:space-x-12 md:flex-1">
          <Link to="/" className="flex items-center hover:opacity-80 transition-opacity">
            <FooterLogo />
          </Link>
          <nav className="hidden md:flex items-center space-x-7 lg:space-x-11">
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
              <DropdownMenuContent className="w-72 bg-background/30 backdrop-blur-md border border-border/20 hover:border-auburn-primary/20 shadow-2xl mt-4 z-50" align="start">
                <DropdownMenuItem asChild>
                  <Link to="/yield" className="flex items-center w-full cursor-pointer p-3 hover:bg-auburn-primary/10 hover:text-auburn-primary rounded-lg transition-all duration-200 group focus:outline-none focus:ring-0">
                    <div className="flex items-center gap-3">
                      <img 
                        src="/lovable-uploads/08452a7b-6782-4b0a-900e-0f0c99a4fc4e.png" 
                        alt="YIELD Token"
                        className="w-10 h-10 rounded-lg group-hover:scale-105 transition-transform"
                      />
                      <div>
                        <div className="font-semibold text-platinum/90 mb-1">YIELD</div>
                        <div className="text-sm text-platinum/70 flex items-center gap-1">
                          {apyLoading && <Loader2 className="h-3 w-3 animate-spin" />}
                          <span className={apyError ? 'text-red-400' : ''}>
                            {displayApy}
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/homes" className="flex items-center w-full cursor-pointer p-3 hover:bg-auburn-primary/10 hover:text-auburn-primary rounded-lg transition-all duration-200 group focus:outline-none focus:ring-0">
                    <div className="flex items-center gap-3">
                      <img 
                        src="/lovable-uploads/e7aaba79-32ba-4351-820f-5388f7bed1c2.png" 
                        alt="HOMES Token"
                        className="w-10 h-10 rounded-lg object-cover group-hover:scale-105 transition-transform"
                      />
                      <div>
                        <div className="font-semibold text-platinum/90 mb-1">HOMES</div>
                        <div className="text-sm text-platinum/70">COMING SOON</div>
                      </div>
                    </div>
                  </Link>
                </DropdownMenuItem>
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
              to="/learn"
              className={navLinkStyles}
              style={navTextShadowStyles}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              Learn
            </Link>
            <Link
              to="/earn"
              className={navLinkStyles}
              style={navTextShadowStyles}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              Earn
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
