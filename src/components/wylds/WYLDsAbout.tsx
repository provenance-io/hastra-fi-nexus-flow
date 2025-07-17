
import { CheckCircle, Building2, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import SolanaBanner from './SolanaBanner';

const benefits = [
  'Regulatory compliance and transparency',
  'No minimum holding period',
  'Daily yield distribution',
  'Backed by real-world assets',
  'Instant liquidity',
  'Low transaction fees on Solana',
];

const howItWorks = [
  {
    step: '1',
    title: 'Hold YIELD tokens',
    description: 'Simply hold YIELD tokens in any compatible wallet',
  },
  {
    step: '2',
    title: 'Automatic yield calculation',
    description: 'Yield is automatically calculated and distributed daily',
  },
  {
    step: '3',
    title: 'Watch your balance grow',
    description: 'Watch your balance grow without any additional action',
  },
  {
    step: '4',
    title: 'Redeem via key Solana partners',
    description: 'Easily redeem your YIELD through Raydium and Kamino protocols',
  },
];

const WYLDsAbout = () => {
  return (
    <section className="py-24 md:py-32 relative">
      {/* Premium background - matching homepage */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-header-glow/5 to-crypto-accent/5"></div>
      
      <div className="container relative">
        <SolanaBanner />
        



        <div className="text-center">
          <div className="card-premium rounded-3xl p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold mb-6 text-premium-gradient">
              Building the Future of Finance
            </h3>
            <p className="text-xl text-platinum/90 max-w-3xl mx-auto leading-relaxed">
              As part of Hastra-Fi's mission to expand protocol capabilities, YIELD serves as a foundational 
              building block for creating new <span className="text-electric-blue font-semibold">financial primitives</span> that bridge 
              <span className="text-neon-cyan font-semibold">traditional and decentralized finance</span>.
            </p>
            
            {/* Call to action */}
            <div className="mt-10">
              <Button className="btn-premium px-10 py-4 text-lg rounded-xl">
                Explore YIELD Features
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WYLDsAbout;
