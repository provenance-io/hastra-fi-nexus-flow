import { useEffect } from 'react';

const WYLDsTypeformEmbed = () => {
  useEffect(() => {
    // Load Typeform embed script if not already loaded
    if (!document.querySelector('script[src*="embed.typeform.com"]')) {
      const script = document.createElement('script');
      script.src = '//embed.typeform.com/next/embed.js';
      script.async = true;
      document.head.appendChild(script);
    }
  }, []);

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-background via-header-glow/5 to-crypto-accent/5">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient bg-gradient-to-r from-electric-blue via-neon-cyan to-premium-gold bg-clip-text text-transparent">
            Get Started with YIELD
          </h2>
          <p className="text-lg text-platinum/80">
            Ready to start earning? Fill out our form to get started.
          </p>
        </div>
        
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
          <div data-tf-live="01K0CBFN7M5M8WT3473RN1878R"></div>
        </div>
      </div>
    </section>
  );
};

export default WYLDsTypeformEmbed;