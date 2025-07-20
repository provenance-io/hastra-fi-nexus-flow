
import Hero from '@/components/Hero';
import Products from '@/components/Products';
import InnovationApproach from '@/components/InnovationApproach';
import ProvenanceBranding from '@/components/ProvenanceBranding';

const Index = () => {
  return (
    <div className="relative">
      {/* Extended gradient background */}
      <div className="absolute inset-0 bg-gradient-to-bl from-crypto-accent/5 via-header-glow/5 to-background"></div>
      <div className="relative z-10">
        <Hero />
        <Products />
        <InnovationApproach />
        <ProvenanceBranding />
      </div>
    </div>
  );
};

export default Index;
