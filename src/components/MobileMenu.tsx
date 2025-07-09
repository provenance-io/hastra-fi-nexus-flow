import { useState } from 'react';
import { Menu, X, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

const MobileMenu = () => {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: 'Products', href: '/yield' },
    { label: 'Innovation', href: '#innovation-focus', isAnchor: true },
    { label: 'Approach', href: '#innovation-approach', isAnchor: true },
  ];

  const handleNavClick = (href: string, isAnchor?: boolean) => {
    if (isAnchor) {
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
    setOpen(false);
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Open menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-80 bg-background/95 backdrop-blur border-border/50">
        <SheetHeader>
          <SheetTitle className="text-left text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-header-glow to-crypto-accent">
            Navigation
          </SheetTitle>
        </SheetHeader>
        <nav className="mt-8 space-y-4">
          {navItems.map((item) => (
            <div key={item.label}>
              {item.isAnchor ? (
                <button
                  onClick={() => handleNavClick(item.href, true)}
                  className="block w-full text-left px-4 py-3 text-lg font-medium text-foreground hover:text-header-glow transition-colors border-b border-border/30 hover:border-header-glow/50"
                >
                  {item.label}
                </button>
              ) : (
                <Link
                  to={item.href}
                  onClick={() => setOpen(false)}
                  className="block px-4 py-3 text-lg font-medium text-foreground hover:text-header-glow transition-colors border-b border-border/30 hover:border-header-glow/50"
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
          <div className="pt-6 space-y-3">
            <Button asChild size="lg" className="w-full btn-gradient">
              <Link to="/yield">
                Explore YIELD
                <ExternalLink className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;