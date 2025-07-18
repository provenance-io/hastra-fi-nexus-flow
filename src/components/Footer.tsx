import { useState } from 'react';
import { footerLinks } from '@/data/content';
import { Link } from 'react-router-dom';
import FooterLogo from './FooterLogo';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { ArrowRight, Mail } from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hasError, setHasError] = useState(false);
  const { toast } = useToast();

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setHasError(false);
    
    if (!email || !email.includes('@')) {
      setHasError(true);
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate submission (replace with actual backend integration)
    setTimeout(() => {
      toast({
        title: "Success!",
        description: "Thank you for subscribing to our updates.",
      });
      setEmail('');
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <footer className="bg-[#1a1a1a] text-white border-t border-gray-800/50">
      <div className="container mx-auto px-10 py-20">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Company Section */}
          <nav className="space-y-6" aria-labelledby="company-heading">
            <div>
              <FooterLogo className="h-12 mb-6" />
              <h3 id="company-heading" className="text-lg font-semibold text-white mb-4">
                Company
              </h3>
            </div>
            <ul className="space-y-3" role="list">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  {link.href.startsWith('/') ? (
                    <Link 
                      to={link.href} 
                      className="text-gray-300 hover:text-white transition-colors duration-300 text-base block py-1 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 focus:ring-offset-[#1a1a1a] rounded-sm"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <a 
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors duration-300 text-base block py-1 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 focus:ring-offset-[#1a1a1a] rounded-sm"
                    >
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* Products Section */}
          <nav className="space-y-6" aria-labelledby="products-heading">
            <h3 id="products-heading" className="text-lg font-semibold text-white">
              Products
            </h3>
            <ul className="space-y-3" role="list">
              {footerLinks.products.map((link) => (
                <li key={link.label}>
                  {link.href.startsWith('/') ? (
                    <Link 
                      to={link.href} 
                      className="text-gray-300 hover:text-white transition-colors duration-300 text-base block py-1 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 focus:ring-offset-[#1a1a1a] rounded-sm"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <a 
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors duration-300 text-base block py-1 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 focus:ring-offset-[#1a1a1a] rounded-sm"
                    >
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* Legal Section */}
          <nav className="space-y-6" aria-labelledby="legal-heading">
            <h3 id="legal-heading" className="text-lg font-semibold text-white">
              Legal
            </h3>
            <ul className="space-y-3" role="list">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  {link.href.startsWith('/') ? (
                    <Link 
                      to={link.href} 
                      className="text-gray-300 hover:text-white transition-colors duration-300 text-base block py-1 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 focus:ring-offset-[#1a1a1a] rounded-sm"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <a 
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors duration-300 text-base block py-1 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 focus:ring-offset-[#1a1a1a] rounded-sm"
                    >
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* Newsletter Section */}
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Stay Updated
              </h3>
              <p className="text-gray-300 text-base leading-relaxed">
                Get the latest news and updates from Hastra Protocol delivered to your inbox.
              </p>
            </div>

            <form onSubmit={handleEmailSubmit} className="space-y-4" noValidate>
              <div className="relative">
                <label htmlFor="newsletter-email" className="sr-only">
                  Email address for newsletter subscription
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <Input
                    id="newsletter-email"
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setHasError(false);
                    }}
                    disabled={isSubmitting}
                    aria-invalid={hasError}
                    aria-describedby={hasError ? "email-error" : undefined}
                    className={`
                      w-full pl-11 pr-4 py-3 bg-gray-800/50 border text-white placeholder-gray-400
                      rounded-lg transition-all duration-300 text-base
                      focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent
                      hover:bg-gray-800/70
                      ${hasError 
                        ? 'border-red-500 focus:ring-red-400' 
                        : 'border-gray-600 hover:border-gray-500'
                      }
                    `}
                  />
                </div>
                {hasError && (
                  <p id="email-error" className="mt-2 text-sm text-red-400" role="alert">
                    Please enter a valid email address
                  </p>
                )}
              </div>

              <Button 
                type="submit" 
                disabled={isSubmitting || !email.trim()}
                className="
                  w-full bg-orange-600 hover:bg-orange-700 text-white font-medium py-3 px-6 rounded-lg
                  transition-all duration-300 text-base
                  focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 focus:ring-offset-[#1a1a1a]
                  disabled:opacity-50 disabled:cursor-not-allowed
                  group relative overflow-hidden
                "
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Subscribing...
                    </>
                  ) : (
                    <>
                      Subscribe
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </>
                  )}
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 pt-8 border-t border-gray-800/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Hastra Protocol Foundation. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <span className="text-gray-400 text-sm">Built on</span>
              <img 
                src="/lovable-uploads/e80568de-0fba-4199-a928-a9d5b3fa9b76.png" 
                alt="Provenance Blockchain" 
                className="h-6 w-auto opacity-70"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;