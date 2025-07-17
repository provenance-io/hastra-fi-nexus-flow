import { Sparkles } from 'lucide-react';

const SolanaBanner = () => {
  return (
    <div className="py-8 relative">
      <div className="container">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[hsl(var(--electric-blue))] via-[hsl(var(--neon-cyan))] to-[hsl(var(--crypto-accent))] p-1">
          <div className="bg-[hsl(var(--background))] rounded-2xl p-6 md:p-8">
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center">
              <div className="flex items-center gap-3">
                <img 
                  src="/lovable-uploads/7429c185-eea8-4ae9-ae38-f67a29999963.png" 
                  alt="Solana" 
                  className="h-8 w-auto"
                />
                <Sparkles className="h-5 w-5 text-[hsl(var(--electric-blue))] animate-pulse" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-premium-gradient">
                Now Available on Solana
              </h3>
              <div className="flex items-center gap-3">
                <Sparkles className="h-5 w-5 text-[hsl(var(--neon-cyan))] animate-pulse" />
                <img 
                  src="/lovable-uploads/7429c185-eea8-4ae9-ae38-f67a29999963.png" 
                  alt="Solana" 
                  className="h-8 w-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolanaBanner;