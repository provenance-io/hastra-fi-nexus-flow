
import { Card, CardContent } from '@/components/ui/card';
import { MessageCircle, Target, Shield, Users } from 'lucide-react';

const ContentVoice = () => {
  return (
    <section className="py-20 relative">
      <div className="container relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gradient">Content & Voice</h2>
          <p className="text-xl text-foreground/90 text-center mb-16 max-w-3xl mx-auto">
            Our voice is professional yet approachable, emphasizing innovation and trust in every interaction.
          </p>
          
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <Card className="card-gradient border-transparent">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-hastra-teal">Tone of Voice</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <Shield className="w-6 h-6 text-hastra-teal mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-2">Professional</h4>
                      <p className="text-sm text-foreground/80">Expert knowledge and authority in traditional finance and DeFi</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Target className="w-6 h-6 text-auburn-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-2">Innovative</h4>
                      <p className="text-sm text-foreground/80">Forward-thinking and cutting-edge in approach</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <MessageCircle className="w-6 h-6 text-crypto-accent mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-2">Trustworthy</h4>
                      <p className="text-sm text-foreground/80">Reliable and transparent in all communications</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Users className="w-6 h-6 text-electric-blue mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-2">Accessible</h4>
                      <p className="text-sm text-foreground/80">Clear and understandable for all audiences</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="card-gradient border-transparent">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-auburn-primary">Key Messages</h3>
                <div className="space-y-4">
                  <div className="bg-background/30 rounded-lg p-4">
                    <h4 className="font-semibold text-sm mb-2 text-hastra-teal">Elite DeFi Products</h4>
                    <p className="text-sm text-foreground/80">For the crypto-savvy community seeking premium financial solutions</p>
                  </div>
                  <div className="bg-background/30 rounded-lg p-4">
                    <h4 className="font-semibold text-sm mb-2 text-auburn-primary">Real-World Asset Backing</h4>
                    <p className="text-sm text-foreground/80">Security and stability through tangible asset integration</p>
                  </div>
                  <div className="bg-background/30 rounded-lg p-4">
                    <h4 className="font-semibold text-sm mb-2 text-crypto-accent">Regulatory Compliance</h4>
                    <p className="text-sm text-foreground/80">Innovation meets regulatory standards and transparency</p>
                  </div>
                  <div className="bg-background/30 rounded-lg p-4">
                    <h4 className="font-semibold text-sm mb-2 text-electric-blue">Professional-Grade Solutions</h4>
                    <p className="text-sm text-foreground/80">Enterprise-level financial products for modern investors</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="card-gradient rounded-3xl p-8 card-bottom-static border border-transparent">
            <h3 className="text-2xl font-bold mb-8 text-center text-gradient">Content Examples</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-hastra-teal mb-4">Headlines & CTAs</h4>
                <div className="space-y-3">
                  <div className="bg-background/30 rounded-lg p-3">
                    <p className="text-sm font-medium">"Experience Elite DeFi Innovation"</p>
                  </div>
                  <div className="bg-background/30 rounded-lg p-3">
                    <p className="text-sm font-medium">"Secure Your Financial Future"</p>
                  </div>
                  <div className="bg-background/30 rounded-lg p-3">
                    <p className="text-sm font-medium">"Join the Financial Revolution"</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-auburn-primary mb-4">Body Copy Style</h4>
                <div className="bg-background/30 rounded-lg p-4">
                  <p className="text-sm text-foreground/80 leading-relaxed">
                    "At Hastra, we bridge the gap between traditional finance and decentralized innovation. 
                    Our elite DeFi products are backed by real-world assets and designed for the crypto-savvy 
                    investor who demands both security and cutting-edge technology."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentVoice;
