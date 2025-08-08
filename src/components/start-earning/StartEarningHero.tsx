const StartEarningHero = () => {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-header-glow/5 to-crypto-accent/5"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiIgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIiBmaWxsPSJub25lIiBzdHJva2U9InJnYmEoMTAsIDIwLCA0MCwwLjA1KSI+PGQgcGF0aD0iTTAtMSAwIDEgTS0xIDAgMSAwIj48L2Q+PC9zdmc+')] opacity-40"></div>
      
      <div className="container relative text-center animate-fade-in">
        <div className="inline-flex items-center px-4 py-2 rounded-full glass-effect border border-header-glow/20 text-sm font-medium text-foreground/80 animate-glow-pulse mb-6">
          <span className="mr-2 w-2 h-2 bg-header-glow rounded-full animate-pulse"></span>
          DeFi Made Simple
        </div>
        
        <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6">
          <span className="block text-gradient">Start (L)earning</span>
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
          Access premium DeFi opportunities with sYLDS and sHASH. Buy tokens, provide liquidity, and earn consistent returns through our integrated ecosystem.
        </p>
      </div>
    </section>
  );
};

export default StartEarningHero;