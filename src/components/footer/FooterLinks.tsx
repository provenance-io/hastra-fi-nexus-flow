
import { Link } from 'react-router-dom';
import { footerLinks } from '@/data/content';

interface FooterLinksProps {
  title: string;
  links: Array<{ label: string; href: string }>;
}

const FooterLinksSection = ({ title, links }: FooterLinksProps) => (
  <nav className="space-y-6" aria-labelledby={`${title.toLowerCase()}-heading`}>
    <h3 id={`${title.toLowerCase()}-heading`} className="text-xl font-bold text-white mb-6 relative">
      {title}
      <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full"></div>
    </h3>
    <ul className="space-y-4" role="list">
      {links.map((link) => (
        <li key={link.label}>
          {link.href.startsWith('/') ? (
            <Link 
              to={link.href} 
              className="
                text-gray-300 hover:text-white transition-all duration-300 text-base 
                flex items-center gap-3 py-2 px-3 rounded-lg hover:bg-gray-800/30
                focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 
                focus:ring-offset-gray-900 group
              "
            >
              <span className="w-1.5 h-1.5 bg-gray-500 rounded-full group-hover:bg-orange-400 transition-colors duration-300"></span>
              {link.label}
            </Link>
          ) : (
            <a 
              href={link.href}
              className="
                text-gray-300 hover:text-white transition-all duration-300 text-base 
                flex items-center gap-3 py-2 px-3 rounded-lg hover:bg-gray-800/30
                focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 
                focus:ring-offset-gray-900 group
              "
            >
              <span className="w-1.5 h-1.5 bg-gray-500 rounded-full group-hover:bg-orange-400 transition-colors duration-300"></span>
              {link.label}
            </a>
          )}
        </li>
      ))}
    </ul>
  </nav>
);

const FooterLinks = () => {
  return (
    <>
      <FooterLinksSection title="Company" links={footerLinks.company} />
      <FooterLinksSection title="Products" links={footerLinks.products} />
      <FooterLinksSection title="Legal" links={footerLinks.legal} />
    </>
  );
};

export default FooterLinks;
