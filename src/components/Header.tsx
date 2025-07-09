
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
    <header className="sticky top-0 z-50 w-full border-b border-header-glow/20 bg-header-bg/95 backdrop-blur supports-[backdrop-filter]:bg-header-bg/80 shadow-[0_0_20px_hsl(var(--header-glow)/0.1)]">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center space-x-12">
          <Link to="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <HastraLogo />
          </Link>
          <nav className="hidden md:flex items-center space-x-6">
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-lg font-medium text-foreground/70 hover:text-foreground transition-colors relative group">
                Products
                <ChevronDown className="ml-1 h-4 w-4" />
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-header-glow transition-all duration-300 group-hover:w-full" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 glass-effect border-border/50" align="start">
                <DropdownMenuItem asChild>
                  <Link to="/yield" className="flex items-center w-full cursor-pointer p-3 hover:bg-header-glow/10 rounded-lg transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center">
                        <span className="text-blue-400 font-bold text-sm">Y</span>
                      </div>
                      <div>
                        <div className="font-medium">YIELD</div>
                        <div className="text-xs text-muted-foreground">Earn up to 8% APY</div>
                      </div>
                    </div>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/homes" className="flex items-center w-full cursor-pointer p-3 hover:bg-amber-500/10 rounded-lg transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-amber-500/20 flex items-center justify-center">
                        <span className="text-amber-400 font-bold text-sm">H</span>
                      </div>
                      <div>
                        <div className="font-medium">HOMES</div>
                        <div className="text-xs text-muted-foreground">Tokenized Real Estate</div>
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
              to="/about"
              className="text-lg font-medium text-foreground/70 hover:text-foreground transition-colors relative group"
            >
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-header-glow transition-all duration-300 group-hover:w-full" />
            </Link>
            <Link
              to="/start-earning"
              className="text-lg font-medium text-foreground/70 hover:text-foreground transition-colors relative group"
            >
              Start Earning
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
