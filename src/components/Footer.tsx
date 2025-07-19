
import { useState } from 'react';
import { footerLinks } from '@/data/content';
import { Link } from 'react-router-dom';
import FooterLogo from './FooterLogo';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { X } from 'lucide-react';

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
                <FooterLogo className="h-16 mb-8 -mt-8 opacity-80" />
                
                {/* Email Subscription */}
                <div className="pl-8">
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
                      className="w-full bg-orange-900/20 border border-orange-800/30 text-orange-300 hover:bg-orange-900/30 hover:border-orange-800/40 focus-ring font-bold rounded-xl transition-all duration-200"
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
                  <h4 className="font-semibold text-foreground text-sm tracking-wide">Follow Us</h4>
                  <div className="flex gap-3">
                    <a 
                      href="https://x.com/HastraFi" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-background/50 border border-border/30 rounded-lg flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-header-glow/50 hover:bg-header-glow/10 transition-all duration-200"
                    >
                      <X className="w-4 h-4" />
                    </a>
                    <a 
                      href="https://discord.gg/hastra" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-background/50 border border-border/30 rounded-lg flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-header-glow/50 hover:bg-header-glow/10 transition-all duration-200"
                    >
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419-.019 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9554 2.4189-2.1568 2.4189Z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="py-6 border-t border-border/20">
          <div className="flex flex-col md:flex-row justify-center items-center gap-4">
            <p className="text-sm text-muted-foreground text-center">
              &copy; {new Date().getFullYear()} Hastra Protocol Foundation. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
