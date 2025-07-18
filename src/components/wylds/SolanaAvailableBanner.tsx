import solanaLogo from '@/assets/solana-logo.svg';

const SolanaAvailableBanner = () => {
  return (
    <section className="w-full py-32 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiIgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIiBmaWxsPSJub25lIiBzdHJva2U9InJnYmEoMTAsIDIwLCA0MCwwLjAzKSI+PGQgcGF0aD0iTTAtMSAwIDEgTS0xIDAgMSAwIj48L2Q+PC9zdmc+')] opacity-50"></div>
      
      {/* Floating elements */}
      <div className="absolute top-8 left-20 w-16 h-16 border border-electric-blue/20 rounded-full animate-float opacity-40"></div>
      <div className="absolute bottom-8 right-20 w-12 h-12 border border-neon-cyan/20 rotate-45 animate-float opacity-30" style={{ animationDelay: '1s' }}></div>
      
      {/* Content */}
      <div className="relative z-10 flex items-center justify-center gap-8 px-8">
        <div className="flex items-center gap-8 p-12 pulse-glow-premium">
          <span className="text-4xl md:text-5xl font-bold text-electric-blue">
            Now Available on
          </span>
          
          {/* Solana Logo */}
          <div className="flex items-center gap-4">
            <div className="relative">
              <img 
                src={solanaLogo} 
                alt="Solana" 
                className="w-16 h-16 relative z-10"
              />
              <div className="absolute inset-0 w-16 h-16 bg-electric-blue/20 rounded-full blur-sm animate-pulse"></div>
            </div>
            
            <span className="text-4xl md:text-5xl font-bold text-white tracking-wider relative">
              SOLANA
              <div className="absolute inset-0 text-white opacity-20 blur-sm">SOLANA</div>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolanaAvailableBanner;