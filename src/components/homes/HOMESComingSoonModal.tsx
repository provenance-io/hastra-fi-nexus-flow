import React, { useState } from 'react';
import { X, DollarSign, TrendingUp, Shield, Bell } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HOMESComingSoonModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const HOMESComingSoonModal: React.FC<HOMESComingSoonModalProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.includes('@')) return;

    setIsLoading(true);
    
    // Simulate API call - replace with actual email service integration
    setTimeout(() => {
      console.log('Waitlist signup:', email);
      setIsSubmitted(true);
      setIsLoading(false);
      
      // Auto-close modal after 3 seconds
      setTimeout(() => {
        onClose();
      }, 3000);
    }, 1000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/30 backdrop-blur-sm" 
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-background/95 backdrop-blur-md rounded-2xl shadow-premium max-w-md w-full mx-auto border border-border/20 animate-fade-in">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors z-10"
          aria-label="Close modal"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="p-8">
          {/* Header Section */}
          <div className="text-center mb-8">
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
          <div className="space-y-4 mb-8">
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
          <div className="bg-secondary/50 rounded-xl p-4 mb-8">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-foreground">Development Progress</span>
              <span className="text-xs text-muted-foreground">Phase 1 of 4</span>
            </div>
            
            <div className="w-full bg-muted rounded-full h-2 mb-2">
              <div 
                className="bg-gradient-to-r from-electric-blue to-neon-cyan h-2 rounded-full transition-all duration-1000 ease-out"
                style={{ width: '25%' }}
              />
            </div>
            
            <p className="text-xs text-muted-foreground">
              Currently in concept and research phase
            </p>
          </div>

          {/* Email Capture or Success State */}
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-electric-blue/50 transition-all"
                  required
                />
              </div>
              
              <Button
                type="submit"
                disabled={isLoading || !email.includes('@')}
                className="w-full bg-gradient-to-r from-electric-blue to-neon-cyan hover:from-electric-blue/90 hover:to-neon-cyan/90 text-white font-medium py-3 rounded-lg transition-all duration-200 disabled:opacity-50"
              >
                {isLoading ? 'Joining...' : 'Join the Waitlist'}
              </Button>
            </form>
          ) : (
            <div className="text-center space-y-4">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-electric-blue/10">
                <Bell className="h-6 w-6 text-electric-blue" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">You're on the waitlist!</h3>
                <p className="text-sm text-muted-foreground">
                  We'll notify you when HOMES launches.
                </p>
              </div>
            </div>
          )}

          {/* Footer Disclaimer */}
          <div className="mt-6 pt-4 border-t border-border/50">
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