
import Hero from '@/components/Hero';
import Products from '@/components/Products';
import InnovationApproach from '@/components/InnovationApproach';
import ProvenanceBranding from '@/components/ProvenanceBranding';

const Index = () => {
  return (
    <div className="relative">
      {/* Extended gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-header-glow/5 to-crypto-accent/5"></div>
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
