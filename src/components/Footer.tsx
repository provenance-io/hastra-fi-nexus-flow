
import { useState } from 'react';
import { footerLinks } from '@/data/content';
import { Link } from 'react-router-dom';
import FooterLogo from './FooterLogo';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { Twitter } from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
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
    <footer className="border-t border-border/20 bg-muted/30 backdrop-blur supports-[backdrop-filter]:bg-muted/20">
      <div className="container">
        {/* Main Footer Content */}
        <div className="py-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-4">
              <div className="max-w-sm">
                <FooterLogo className="h-16 mb-2 -mt-6 opacity-80" />
                
                {/* Email Subscription */}
                <div>
                  <h4 className="font-semibold text-foreground mb-3 text-sm uppercase tracking-wide">Stay Updated</h4>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    Get the latest news and updates.
                  </p>
                  <form onSubmit={handleEmailSubmit} className="space-y-3">
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-background/50 border-border/30 text-sm focus:border-header-glow/50"
                      disabled={isSubmitting}
                    />
                    <Button 
                      type="submit" 
                      size="sm"
                      disabled={isSubmitting || !email}
                      className="w-full bg-gradient-to-r from-header-glow to-crypto-accent text-white hover:opacity-90 transition-all duration-200"
                    >
                      {isSubmitting ? 'Subscribing...' : 'Subscribe'}
                    </Button>
                  </form>
                </div>
              </div>
            </div>

            {/* Navigation Links */}
            <div className="lg:col-span-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {Object.entries(footerLinks).map(([key, links]) => (
                  <div key={key} className="space-y-4">
                    <h4 className="font-semibold capitalize text-foreground text-sm uppercase tracking-wide">
                      {key}
                    </h4>
                    <ul className="space-y-3">
                      {links.map(link => (
                        <li key={link.label}>
                          {link.href.startsWith('/') ? (
                            <Link 
                              to={link.href} 
                              className="text-sm text-muted-foreground hover:text-header-glow transition-colors duration-200"
                            >
                              {link.label}
                            </Link>
                          ) : (
                            <a 
                              href={link.href} 
                              className="text-sm text-muted-foreground hover:text-header-glow transition-colors duration-200"
                              target={link.href.startsWith('http') ? '_blank' : undefined}
                              rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                            >
                              {link.label}
                            </a>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
                
                {/* Social Media Column */}
                <div className="space-y-4">
                  <h4 className="font-semibold text-foreground text-sm uppercase tracking-wide">Follow Us</h4>
                  <div className="flex gap-3">
                    <a 
                      href="https://x.com/HastraFi" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-background/50 border border-border/30 rounded-lg flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-header-glow/50 hover:bg-header-glow/10 transition-all duration-200"
                    >
                      <Twitter className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="py-6 border-t border-border/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Hastra Protocol Foundation. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-xs text-muted-foreground">
              <span>Built on Solana</span>
              <span>•</span>
              <span>Regulated by SEC</span>
              <span>•</span>
              <span>Powered by Provenance</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
