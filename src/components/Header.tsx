
import { Link } from 'react-router-dom';
import HastraLogo from './HastraLogo';
import MobileMenu from './MobileMenu';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { ChevronDown, Loader2 } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';

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

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200/30 bg-gradient-to-r from-white via-gray-50/80 to-white backdrop-blur supports-[backdrop-filter]:bg-gradient-to-r supports-[backdrop-filter]:from-white/95 supports-[backdrop-filter]:via-gray-50/60 supports-[backdrop-filter]:to-white/95 shadow-lg shadow-header-glow/10">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center space-x-12">
          <Link to="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <HastraLogo />
          </Link>
          <nav className="hidden md:flex items-center space-x-6">
            <Link
              to="/about"
              className="text-lg font-medium text-gray-700 hover:text-gray-900 transition-colors relative group"
            >
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-header-glow to-crypto-accent transition-all duration-300 group-hover:w-full" />
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-lg font-medium text-gray-700 hover:text-gray-900 transition-colors relative group">
                Products
                <ChevronDown className="ml-1 h-4 w-4" />
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-header-glow to-crypto-accent transition-all duration-300 group-hover:w-full" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-72 bg-white/95 backdrop-blur-md border border-gray-200 shadow-2xl" align="start">
                <DropdownMenuItem asChild>
                  <Link to="/homes" className="flex items-center w-full cursor-pointer p-3 hover:bg-gray-50 rounded-lg transition-all duration-200 group">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-green-100 border border-green-200 flex items-center justify-center group-hover:scale-105 transition-transform">
                        <span className="text-green-600 font-bold">H</span>
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900 mb-1">HOMES</div>
                        <div className="text-sm text-gray-600">COMING SOON</div>
                      </div>
                    </div>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/yield" className="flex items-center w-full cursor-pointer p-3 hover:bg-gray-50 rounded-lg transition-all duration-200 group">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-cyan-100 border border-cyan-200 flex items-center justify-center group-hover:scale-105 transition-transform">
                        <span className="text-cyan-600 font-bold">Y</span>
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900 mb-1">YIELD</div>
                        <div className="text-sm text-gray-600 flex items-center gap-1">
                          {apyLoading && <Loader2 className="h-3 w-3 animate-spin" />}
                          <span className={apyError ? 'text-red-500' : ''}>
                            {displayApy}
                          </span>
                        </div>
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
                    className="text-base font-medium text-gray-700 hover:text-gray-900 transition-colors relative group"
                  >
                    {item.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-header-glow to-crypto-accent transition-all duration-300 group-hover:w-full" />
                  </button>
                ) : (
                  <Link
                    to={item.href}
                    className="text-base font-medium text-gray-700 hover:text-gray-900 transition-colors relative group"
                  >
                    {item.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-header-glow to-crypto-accent transition-all duration-300 group-hover:w-full" />
                  </Link>
                )}
              </div>
            ))}
            <Link
              to="/learn"
              className="text-lg font-medium text-gray-700 hover:text-gray-900 transition-colors relative group"
            >
              (L)earn
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-header-glow to-crypto-accent transition-all duration-300 group-hover:w-full" />
            </Link>
          </nav>
        </div>
        
        <div className="flex items-center space-x-4">
          <Button 
            asChild 
            size="sm" 
            className="hidden md:flex btn-gradient text-base px-4 py-2"
          >
            <a href="https://test.hastra.io/protocol" target="_blank" rel="noopener noreferrer">Launch Protocol</a>
          </Button>
          <MobileMenu />
        </div>
      </div>
    </header>
  );
};

export default Header;
