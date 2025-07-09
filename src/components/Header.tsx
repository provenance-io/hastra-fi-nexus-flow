
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
import { ChevronDown } from 'lucide-react';

const Header = () => {
  const navItems = [
    // Removed innovation and approach items
  ];

  const handleNavClick = (href: string, isAnchor?: boolean) => {
    if (isAnchor) {
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-header-glow/20 bg-[hsl(var(--header-footer-bg)/0.6)] backdrop-blur supports-[backdrop-filter]:bg-[hsl(var(--header-footer-bg)/0.5)] shadow-[0_0_20px_hsl(var(--header-glow)/0.1)]">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center space-x-12">
          <Link to="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <HastraLogo />
          </Link>
          <nav className="hidden md:flex items-center space-x-6">
            <Link
              to="/about"
              className="text-lg font-medium text-foreground/70 hover:text-foreground transition-colors relative group"
            >
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-header-glow transition-all duration-300 group-hover:w-full" />
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-lg font-medium text-foreground/70 hover:text-foreground transition-colors relative group">
                Products
                <ChevronDown className="ml-1 h-4 w-4" />
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-header-glow transition-all duration-300 group-hover:w-full" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-72 bg-orange-900/20 backdrop-blur-md border border-orange-800/30 shadow-2xl" align="start">
                <DropdownMenuItem asChild>
                  <Link to="/yield" className="flex items-center w-full cursor-pointer p-3 hover:bg-orange-900/30 hover:border-orange-800/40 rounded-lg transition-all duration-200 group">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-header-glow/20 border border-header-glow/30 flex items-center justify-center group-hover:scale-105 transition-transform">
                        <span className="text-header-glow font-bold">Y</span>
                      </div>
                      <div>
                        <div className="font-semibold text-orange-300 mb-1">YIELD</div>
                        <div className="text-sm text-orange-300/70">Earn Up to 3.5% APY</div>
                      </div>
                    </div>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/homes" className="flex items-center w-full cursor-pointer p-3 hover:bg-orange-900/30 hover:border-orange-800/40 rounded-lg transition-all duration-200 group">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-crypto-accent/20 border border-crypto-accent/30 flex items-center justify-center group-hover:scale-105 transition-transform">
                        <span className="text-crypto-accent font-bold">H</span>
                      </div>
                      <div>
                        <div className="font-semibold text-orange-300 mb-1">HOMES</div>
                        <div className="text-sm text-orange-300/70">Earn Up to 8% APY</div>
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
                    className="text-base font-medium text-foreground/70 hover:text-foreground transition-colors relative group"
                  >
                    {item.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-header-glow transition-all duration-300 group-hover:w-full" />
                  </button>
                ) : (
                  <Link
                    to={item.href}
                    className="text-base font-medium text-foreground/70 hover:text-foreground transition-colors relative group"
                  >
                    {item.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-header-glow transition-all duration-300 group-hover:w-full" />
                  </Link>
                )}
              </div>
            ))}
            <Link
              to="/learn"
              className="text-lg font-medium text-foreground/70 hover:text-foreground transition-colors relative group"
            >
              (L)earn
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-header-glow transition-all duration-300 group-hover:w-full" />
            </Link>
            <Link
              to="/earn"
              className="text-lg font-medium text-foreground/70 hover:text-foreground transition-colors relative group"
            >
              Earn
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-header-glow transition-all duration-300 group-hover:w-full" />
            </Link>
          </nav>
        </div>
        
        <div className="flex items-center space-x-4">
          <Button 
            asChild 
            size="sm" 
            className="hidden md:flex btn-gradient text-base px-4 py-2"
          >
            <Link to="/yield">Connect Your Wallet</Link>
          </Button>
          <MobileMenu />
        </div>
      </div>
    </header>
  );
};

export default Header;
