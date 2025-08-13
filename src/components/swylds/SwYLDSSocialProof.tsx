import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Shield, FileCheck, Building2, Star, Quote } from 'lucide-react';

const trustBadges = [
  {
    icon: Shield,
    title: "SEC Registered Foundation",
    description: "Built on Figure Markets' regulatory-compliant YLDS"
  },
  {
    icon: FileCheck,
    title: "Smart Contract Audited",
    description: "Independently verified by leading security firms"
  },
  {
    icon: Building2,
    title: "Real Asset Backing",
    description: "Yield generated from actual real estate lending"
  }
];

const testimonials = [
  {
    quote: "Finally, sustainable DeFi yield that makes sense. 9% from real mortgages beats speculation any day.",
    author: "Alex Chen",
    role: "DeFi Investor",
    rating: 5
  },
  {
    quote: "Using swYLDS on Kamino for leverage while earning base yield is brilliant. True capital efficiency.",
    author: "Sarah Martinez",
    role: "Asset Manager", 
    rating: 5
  },
  {
    quote: "The transparency around where yield comes from gives me confidence. Real assets, real returns.",
    author: "Michael Torres",
    role: "Portfolio Manager",
    rating: 5
  }
];

const SwYLDSSocialProof = () => {
  return (
    <section className="py-16 md:py-24 border-t border-border/40">
      <div className="container">
        {/* Trust Indicators */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Built on Trust & Transparency
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
            swYLDS is backed by regulatory compliance, security audits, and real-world assets
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {trustBadges.map((badge, index) => (
              <Card key={index} className="p-6 bg-card/50 backdrop-blur-sm border-border/40 text-center">
                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-green-500/20 to-blue-500/20">
                  <badge.icon className="h-8 w-8 text-green-500" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{badge.title}</h3>
                <p className="text-muted-foreground text-sm">{badge.description}</p>
              </Card>
            ))}
          </div>
        </div>
        
        {/* User Testimonials */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              What Users Are Saying
            </h3>
            <p className="text-muted-foreground">
              Real feedback from swYLDS stakers
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 bg-card/50 backdrop-blur-sm border-border/40 relative">
                <Quote className="h-8 w-8 text-crypto-accent/30 absolute top-4 left-4" />
                
                <div className="pt-8">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-500 fill-current" />
                    ))}
                  </div>
                  
                  <blockquote className="text-muted-foreground mb-6 italic">
                    "{testimonial.quote}"
                  </blockquote>
                  
                  <div className="border-t border-border/40 pt-4">
                    <cite className="font-semibold text-foreground not-italic">
                      {testimonial.author}
                    </cite>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
        
        {/* Key Statistics */}
        <div className="text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-crypto-accent">
                2,847+
              </div>
              <p className="text-muted-foreground">Active Stakers</p>
            </div>
            
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-auburn-primary">
                $12.4M+
              </div>
              <p className="text-muted-foreground">Total Value Locked</p>
            </div>
            
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-green-500">
                99.8%
              </div>
              <p className="text-muted-foreground">Uptime</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SwYLDSSocialProof;