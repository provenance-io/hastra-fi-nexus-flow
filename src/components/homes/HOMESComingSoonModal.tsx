
import React, { useState, useEffect } from 'react';
import { X, DollarSign, TrendingUp, Shield, Bell } from 'lucide-react';

interface HOMESComingSoonModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const HOMESComingSoonModal: React.FC<HOMESComingSoonModalProps> = ({ isOpen, onClose }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (isOpen) {
      // Load the Beehiiv script when modal opens
      const script = document.createElement('script');
      script.src = 'https://subscribe-forms.beehiiv.com/embed.js';
      script.async = true;
      document.head.appendChild(script);

      return () => {
        // Clean up script when component unmounts
        const existingScript = document.querySelector('script[src="https://subscribe-forms.beehiiv.com/embed.js"]');
        if (existingScript) {
          document.head.removeChild(existingScript);
        }
      };
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed top-16 left-0 right-0 bottom-0 z-40 flex items-center justify-center p-6">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/30 backdrop-blur-sm" 
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-background/95 backdrop-blur-md rounded-2xl shadow-premium max-w-2xl w-full mx-auto border border-border/20 animate-fade-in">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors z-10"
          aria-label="Close modal"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="p-6">
          {/* Header Section */}
          <div className="text-center mb-6">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-electric-blue/20 to-neon-cyan/10 mb-4">
              <DollarSign className="h-8 w-8 text-electric-blue" />
            </div>
            <h2 className="text-2xl font-bold text-foreground mb-2">
              Earn 7-14% APY
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed">
              We're exploring new ways to generate yield through pools of real asset-backed loans.
            </p>
          </div>

          {/* Feature Preview */}
          <div className="space-y-3 mb-6">
            <div className="flex items-center gap-3">
              <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-electric-blue/10 flex items-center justify-center">
                <TrendingUp className="h-4 w-4 text-electric-blue" />
              </div>
              <span className="text-sm text-foreground">Target yields of 7-14% annually</span>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-electric-blue/10 flex items-center justify-center">
                <Shield className="h-4 w-4 text-electric-blue" />
              </div>
              <span className="text-sm text-foreground">Backed by real assets, not speculation</span>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-electric-blue/10 flex items-center justify-center">
                <Bell className="h-4 w-4 text-electric-blue" />
              </div>
              <span className="text-sm text-foreground">Join the waitlist for early access</span>
            </div>
          </div>

          {/* Progress Section */}
          <div className="bg-secondary/50 rounded-xl p-4 mb-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-foreground">Development Progress</span>
              <span className="text-xs text-muted-foreground">Phase 2 of 4</span>
            </div>
            
            <div className="w-full bg-muted rounded-full h-2 mb-2">
              <div 
                className="bg-gradient-to-r from-electric-blue to-neon-cyan h-2 rounded-full transition-all duration-1000 ease-out"
                style={{ width: '50%' }}
              />
            </div>
            
            <p className="text-xs text-muted-foreground">
              Currently in build phase
            </p>
          </div>

          {/* Beehiiv Embed Form */}
          <div className="w-full flex justify-center mb-4">
            <iframe 
              src="https://subscribe-forms.beehiiv.com/30217469-2e22-46f3-a339-7c531ae92535" 
              className="beehiiv-embed w-full max-w-lg rounded-lg border border-border/20" 
              data-test-id="beehiiv-embed" 
              frameBorder="0" 
              scrolling="no" 
              style={{ 
                height: '280px', 
                margin: 0, 
                backgroundColor: 'transparent', 
                boxShadow: '0 0 #0000'
              }}
            />
          </div>

          {/* Footer Disclaimer */}
          <div className="mt-4 pt-4 border-t border-border/50">
            <p className="text-xs text-muted-foreground text-center leading-relaxed">
              Investment involves risk. Yields are targets and not guaranteed. Timeline and features subject to change.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HOMESComingSoonModal;
