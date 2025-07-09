
import { Link } from 'react-router-dom';
import HastraLogo from './HastraLogo';
import MobileMenu from './MobileMenu';
import { Button } from '@/components/ui/button';

const Header = () => {
  const navItems = [
    { label: 'Products', href: '/wYLDs' },
    { label: 'Innovation', href: '#innovation-focus', isAnchor: true },
    { label: 'Approach', href: '#innovation-approach', isAnchor: true },
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
        <div className="flex items-center space-x-8">
          <Link to="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <HastraLogo />
          </Link>
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <div key={item.label}>
                {item.isAnchor ? (
                  <button
                    onClick={() => handleNavClick(item.href, true)}
                    className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors relative group"
                  >
                    {item.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-header-glow transition-all duration-300 group-hover:w-full" />
                  </button>
                ) : (
                  <Link
                    to={item.href}
                    className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors relative group"
                  >
                    {item.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-header-glow transition-all duration-300 group-hover:w-full" />
                  </Link>
                )}
              </div>
            ))}
          </nav>
        </div>
        
        <div className="flex items-center space-x-4">
          <Button 
            asChild 
            size="sm" 
            className="hidden md:flex btn-gradient text-sm px-4 py-2"
          >
            <Link to="/wYLDs">Launch wYLDS</Link>
          </Button>
          <MobileMenu />
        </div>
      </div>
    </header>
  );
};

export default Header;
