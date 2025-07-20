
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Play, ArrowRight, Download } from 'lucide-react';

const ComponentLibrary = () => {
  return (
    <section className="py-20 relative">
      <div className="container relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gradient">Component Library</h2>
          <p className="text-xl text-foreground/90 text-center mb-16 max-w-3xl mx-auto">
            Consistent component styling ensures a cohesive user experience across all touchpoints.
          </p>
          
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <Card className="card-gradient border-transparent">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-hastra-teal">Button Styles</h3>
                <div className="space-y-4">
                  <div>
                    <Button className="bg-hastra-teal hover:bg-hastra-teal-dark text-background font-semibold">
                      Primary Button
                    </Button>
                    <p className="text-sm text-foreground/70 mt-2">Used for primary actions and CTAs</p>
                  </div>
                  <div>
                    <Button variant="outline" className="border-auburn-primary text-auburn-primary hover:bg-auburn-primary hover:text-white">
                      Secondary Button
                    </Button>
                    <p className="text-sm text-foreground/70 mt-2">Used for secondary actions</p>
                  </div>
                  <div>
                    <Button variant="ghost" className="text-foreground hover:bg-foreground/10">
                      Ghost Button
                    </Button>
                    <p className="text-sm text-foreground/70 mt-2">Used for subtle actions</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="card-gradient border-transparent">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-auburn-primary">Card Styles</h3>
                <div className="space-y-4">
                  <div className="card-gradient rounded-xl p-4 border border-hastra-teal/20">
                    <h4 className="font-semibold mb-2">Standard Card</h4>
                    <p className="text-sm text-foreground/70">Glass morphism with subtle borders</p>
                  </div>
                  <div className="card-gradient rounded-xl p-4 border border-auburn-primary/20 hover:border-auburn-primary/40 transition-all">
                    <h4 className="font-semibold mb-2">Interactive Card</h4>
                    <p className="text-sm text-foreground/70">Hover effects and premium shadows</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="card-gradient rounded-3xl p-8 card-bottom-static border border-transparent">
            <h3 className="text-2xl font-bold mb-8 text-center text-gradient">Interactive Elements</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center space-y-4">
                <h4 className="text-lg font-semibold text-hastra-teal">Hover States</h4>
                <div className="space-y-3">
                  <div className="bg-background/50 rounded-lg p-4 hover:scale-105 transition-transform cursor-pointer">
                    <Play className="w-6 h-6 mx-auto mb-2 text-hastra-teal" />
                    <p className="text-sm">Subtle scale (1.05)</p>
                  </div>
                  <p className="text-xs text-foreground/70">300ms ease transition</p>
                </div>
              </div>
              
              <div className="text-center space-y-4">
                <h4 className="text-lg font-semibold text-auburn-primary">Focus States</h4>
                <div className="space-y-3">
                  <Button className="focus:ring-2 focus:ring-hastra-teal focus:ring-offset-2 focus:ring-offset-background">
                    <ArrowRight className="w-4 h-4 mr-2" />
                    Focus Example
                  </Button>
                  <p className="text-xs text-foreground/70">Brand color outlines</p>
                </div>
              </div>
              
              <div className="text-center space-y-4">
                <h4 className="text-lg font-semibold text-crypto-accent">Active States</h4>
                <div className="space-y-3">
                  <Button className="active:scale-95 transition-transform">
                    <Download className="w-4 h-4 mr-2" />
                    Active Example
                  </Button>
                  <p className="text-xs text-foreground/70">Scale reduction (0.95)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComponentLibrary;
