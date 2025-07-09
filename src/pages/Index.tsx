
import Hero from '@/components/Hero';
import Products from '@/components/Products';
import InnovationApproach from '@/components/InnovationApproach';

const Index = () => {
  return (
    <div className="relative">
      {/* Extended gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-header-glow/5 to-crypto-accent/5"></div>
      <div className="relative z-10">
        <Hero />
        <Products />
        <InnovationApproach />
        <div className="py-8 text-center">
          <p className="text-base text-muted-foreground font-medium">
            Powered by Provenance Blockchain
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
