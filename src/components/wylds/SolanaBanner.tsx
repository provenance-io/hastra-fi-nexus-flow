const SolanaBanner = () => {
  return (
    <div className="py-8 relative">
      <div className="container">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[hsl(var(--electric-blue))] via-[hsl(var(--neon-cyan))] to-[hsl(var(--crypto-accent))] p-1">
          <div className="bg-[hsl(var(--background))] rounded-2xl p-6 md:p-8">
            <div className="flex items-center justify-center gap-4 text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-premium-gradient flex items-center gap-3">
                Now Available on
                <img 
                  src="/lovable-uploads/7429c185-eea8-4ae9-ae38-f67a29999963.png" 
                  alt="Solana" 
                  className="h-8 w-auto"
                />
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolanaBanner;