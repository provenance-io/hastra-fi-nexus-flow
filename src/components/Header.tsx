
import { navigationLinks } from '@/data/content';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex">
          <a href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold text-lg">Hastra-Fi</span>
          </a>
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            {navigationLinks.map((link) => (
              <a key={link.label} href={link.href} className="transition-colors hover:text-foreground/80 text-foreground/60">
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
