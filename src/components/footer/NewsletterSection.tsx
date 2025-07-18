
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { ArrowRight, Mail, CheckCircle } from 'lucide-react';

const NewsletterSection = () => {
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
    
    // Simulate submission
    setTimeout(() => {
      toast({
        title: "Welcome aboard!",
        description: "You'll receive the latest updates from Hastra Protocol.",
      });
      setEmail('');
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm border border-gray-700/30 rounded-2xl p-8 hover:border-orange-500/30 transition-all duration-500">
      <div className="space-y-6">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-500/20 to-orange-600/20 rounded-2xl mb-4">
            <Mail className="w-8 h-8 text-orange-400" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-3">
            Stay in the Loop
          </h3>
          <p className="text-gray-300 text-lg leading-relaxed">
            Get exclusive insights, product updates, and market analysis delivered to your inbox.
          </p>
        </div>

        <form onSubmit={handleEmailSubmit} className="space-y-4" noValidate>
          <div className="relative">
            <label htmlFor="newsletter-email" className="sr-only">
              Email address for newsletter subscription
            </label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 z-10" />
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
                  w-full pl-12 pr-4 py-4 bg-gray-800/50 border text-white placeholder-gray-400
                  rounded-xl transition-all duration-300 text-base h-14
                  focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent
                  hover:bg-gray-800/70 hover:border-gray-500
                  ${hasError 
                    ? 'border-red-500 focus:ring-red-400' 
                    : 'border-gray-600'
                  }
                `}
              />
            </div>
            {hasError && (
              <p id="email-error" className="mt-2 text-sm text-red-400 flex items-center gap-2" role="alert">
                <span className="w-2 h-2 bg-red-400 rounded-full"></span>
                Please enter a valid email address
              </p>
            )}
          </div>

          <Button 
            type="submit" 
            disabled={isSubmitting || !email.trim()}
            className="
              w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 
              text-white font-semibold py-4 px-6 rounded-xl h-14
              transition-all duration-300 text-base
              focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 focus:ring-offset-gray-900
              disabled:opacity-50 disabled:cursor-not-allowed
              group relative overflow-hidden
              shadow-lg hover:shadow-xl hover:shadow-orange-500/25
            "
          >
            <span className="relative z-10 flex items-center justify-center gap-3">
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Subscribing...
                </>
              ) : (
                <>
                  <CheckCircle className="w-5 h-5" />
                  Subscribe to Updates
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </>
              )}
            </span>
          </Button>
        </form>

        <div className="flex items-center justify-center gap-2 text-sm text-gray-400">
          <CheckCircle className="w-4 h-4 text-green-400" />
          No spam, unsubscribe anytime
        </div>
      </div>
    </div>
  );
};

export default NewsletterSection;
