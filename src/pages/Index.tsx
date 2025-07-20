
import Hero from '@/components/Hero';
import Products from '@/components/Products';
import InnovationApproach from '@/components/InnovationApproach';
import ProvenanceBranding from '@/components/ProvenanceBranding';

const Index = () => {
  return (
    <div className="relative">
      {/* New muted Hastra gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-hastra-gradient-start/80 via-hastra-gradient-mid/30 to-hastra-gradient-end/10"></div>
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
