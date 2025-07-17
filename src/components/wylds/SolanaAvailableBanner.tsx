const SolanaAvailableBanner = () => {
  return (
    <section className="w-full py-8 relative overflow-hidden">
      {/* Gradient border effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-electric-blue via-neon-cyan to-green-500 p-[2px]">
        <div className="w-full h-full bg-background rounded-lg"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 flex items-center justify-center gap-6 px-8">
        <div className="flex items-center gap-4">
          <span className="text-2xl md:text-3xl font-bold text-electric-blue">
            Now Available on
          </span>
          
          {/* Solana Logo */}
          <div className="flex items-center gap-3">
            <div className="flex flex-col gap-1">
              <div className="w-8 h-2 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full"></div>
              <div className="w-8 h-2 bg-gradient-to-r from-neon-cyan to-green-400 rounded-full"></div>
              <div className="w-8 h-2 bg-gradient-to-r from-green-400 to-green-600 rounded-full"></div>
            </div>
            
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