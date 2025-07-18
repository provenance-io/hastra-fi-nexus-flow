
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
    <footer className="border-t border-border/20 bg-muted/30 backdrop-blur supports-[backdrop-filter]:bg-muted/20 py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand and Newsletter */}
          <div className="md:col-span-2 lg:col-span-1">
            <FooterLogo className="h-20 mb-4 opacity-80" />
            <p className="text-sm text-muted-foreground mb-6 max-w-sm">
              Building the future of decentralized finance with institutional-grade products.
            </p>
            
            {/* Social Media */}
            <div className="mb-6">
              <h4 className="font-semibold text-foreground mb-3">Follow Us</h4>
              <div className="flex gap-3">
                <a 
                  href="https://x.com/HastraFi" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-background/50 border border-border/30 rounded-lg flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-border/60 transition-colors"
                >
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Email Subscription */}
            <div>
              <h4 className="font-semibold text-foreground mb-3">Stay Updated</h4>
              <p className="text-sm text-muted-foreground mb-3">
                Get the latest news and updates.
              </p>
              <form onSubmit={handleEmailSubmit} className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-background/50 border-border/30 text-sm"
                  disabled={isSubmitting}
                />
                <Button 
                  type="submit" 
                  size="sm"
                  disabled={isSubmitting || !email}
                  className="bg-orange-900/20 border border-orange-800/30 text-orange-300 hover:bg-orange-900/30 hover:border-orange-800/40 px-4"
                >
                  {isSubmitting ? '...' : 'Join'}
                </Button>
              </form>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:col-span-2 lg:col-span-3">
            {Object.entries(footerLinks).map(([key, links]) => (
              <div key={key}>
                <h4 className="font-semibold capitalize text-foreground mb-4">{key}</h4>
                <ul className="space-y-3">
                  {links.map(link => (
                    <li key={link.label}>
                      {link.href.startsWith('/') ? (
                        <Link 
                          to={link.href} 
                          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                        >
                          {link.label}
                        </Link>
                      ) : (
                        <a 
                          href={link.href} 
                          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
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
          </div>
        </div>
        
        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-border/20 text-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Hastra Protocol Foundation. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
