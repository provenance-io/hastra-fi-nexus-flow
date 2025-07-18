
import { useState } from 'react';
import { footerLinks } from '@/data/content';
import { Link } from 'react-router-dom';
import FooterLogo from './FooterLogo';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';

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
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          <div className="col-span-2">
            <FooterLogo className="h-24 mb-4 opacity-80" />
            
            {/* Email Subscription */}
            <div className="max-w-sm">
              <h4 className="font-semibold text-foreground mb-3">Subscribe for Updates</h4>
              <p className="text-sm text-muted-foreground mb-4">
                Get the latest news and updates from Hastra Protocol.
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
                  {isSubmitting ? 'Joining...' : 'Subscribe'}
                </Button>
              </form>
            </div>
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
