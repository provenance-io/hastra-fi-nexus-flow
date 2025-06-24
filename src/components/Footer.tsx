
import { footerLinks } from '@/data/content';
import { Link } from 'react-router-dom';
import HastraLogo from './HastraLogo';

const Footer = () => {
  return (
    <footer className="border-t py-12">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          <div className="col-span-2">
            <HastraLogo className="h-8 mb-4" />
            <p className="mt-2 text-sm text-muted-foreground">Pushing Forward the Future of Finance</p>
            <p className="mt-2 text-xs text-muted-foreground">
              Building protocol use cases that expand the financial ecosystem through regulatory-compliant innovation.
            </p>
          </div>
          {Object.entries(footerLinks).map(([key, links]) => (
            <div key={key}>
              <h4 className="font-semibold capitalize">{key}</h4>
              <ul className="mt-4 space-y-2">
                {links.map(link => (
                  <li key={link.label}>
                    {link.href.startsWith('/') ? (
                      <Link to={link.href} className="text-sm text-muted-foreground hover:text-foreground">
                        {link.label}
                      </Link>
                    ) : (
                      <a href={link.href} className="text-sm text-muted-foreground hover:text-foreground">
                        {link.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Hastra-Fi. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
