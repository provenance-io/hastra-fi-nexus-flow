
import { footerLinks } from '@/data/content';

const Footer = () => {
  return (
    <footer className="border-t py-12">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
          <div className="col-span-2">
            <h3 className="font-bold text-lg">Hastra-Fi</h3>
            <p className="mt-2 text-sm text-muted-foreground">Pushing Forward the Future of Finance</p>
          </div>
          {Object.entries(footerLinks).map(([key, links]) => (
            <div key={key}>
              <h4 className="font-semibold capitalize">{key}</h4>
              <ul className="mt-4 space-y-2">
                {links.map(link => (
                  <li key={link.label}>
                    <a href={link.href} className="text-sm text-muted-foreground hover:text-foreground">
                      {link.label}
                    </a>
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
