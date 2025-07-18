
import { footerLinks } from '@/data/content';
import { Link } from 'react-router-dom';
import FooterLogo from './FooterLogo';

const Footer = () => {
  return (
    <footer className="border-t border-border/20 bg-muted/30 backdrop-blur supports-[backdrop-filter]:bg-muted/20 py-12">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          <div className="col-span-2">
            <FooterLogo className="h-24 mb-4 opacity-80" />
          </div>
          {Object.entries(footerLinks).map(([key, links]) => (
            <div key={key}>
              <h4 className="font-semibold capitalize text-muted-foreground/90">{key}</h4>
              <ul className="mt-4 space-y-2">
                {links.map(link => (
                  <li key={link.label}>
                    {link.href.startsWith('/') ? (
                      <Link to={link.href} className="text-sm text-muted-foreground/70 hover:text-muted-foreground/90">
                        {link.label}
                      </Link>
                    ) : (
                      <a href={link.href} className="text-sm text-muted-foreground/70 hover:text-muted-foreground/90">
                        {link.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 border-t border-border/20 pt-8 text-center text-sm text-muted-foreground/60">
          &copy; {new Date().getFullYear()} Hastra Protocol Foundation. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
