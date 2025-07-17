import solanaLogo from '@/assets/solana-logo.svg';

const SolanaAvailableBanner = () => {
  return (
    <section className="w-full py-16 relative overflow-hidden bg-background">
      {/* Content */}
      <div className="relative z-10 flex items-center justify-center gap-6 px-8">
        <div className="flex items-center gap-4">
          <span className="text-2xl md:text-3xl font-bold text-electric-blue">
            Now Available on
          </span>
          
          {/* Solana Logo */}
          <div className="flex items-center gap-3">
            <img 
              src={solanaLogo} 
              alt="Solana" 
              className="w-8 h-8"
            />
            
            <span className="text-2xl md:text-3xl font-bold text-white tracking-wider">
              SOLANA
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolanaAvailableBanner;