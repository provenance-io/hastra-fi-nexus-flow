
import { Card, CardContent } from '@/components/ui/card';

const VisualEffects = () => {
  return (
    <section className="py-20 relative">
      <div className="container relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xl md:text-2xl text-foreground/90 max-w-4xl mx-auto leading-relaxed mb-8 text-center" style={{ textShadow: '0 0 10px rgba(255, 255, 255, 0.3), 0 0 20px rgba(255, 255, 255, 0.1)' }}>Visual Effects</h2>
          <p className="text-xl text-foreground/90 text-center mb-16 max-w-3xl mx-auto">
            Hastra's visual language includes sophisticated glass morphism effects, subtle glows, and premium shadows.
          </p>
          
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <Card className="card-gradient border-transparent">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-hastra-teal">Glass Morphism</h3>
                <div className="glass-premium rounded-xl p-6 mb-4">
                  <h4 className="font-semibold mb-2">Premium Glass Effect</h4>
                  <p className="text-sm text-foreground/80">
                    Creates depth and premium feel with subtle transparency and blur effects.
                  </p>
                </div>
                <div className="text-xs text-foreground/70 space-y-1">
                  <p><strong>Background:</strong> rgba(255,255,255,0.05)</p>
                  <p><strong>Backdrop Filter:</strong> blur(20px)</p>
                  <p><strong>Border:</strong> 1px solid rgba(255,255,255,0.1)</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="card-gradient border-transparent">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-auburn-primary">Glow Effects</h3>
                <div className="space-y-4">
                  <div className="bg-background/50 rounded-xl p-4 shadow-hastra">
                    <div className="w-8 h-8 bg-hastra-teal rounded-full mx-auto mb-2"></div>
                    <p className="text-sm text-center">Hastra Teal Glow</p>
                  </div>
                  <div className="bg-background/50 rounded-xl p-4 shadow-auburn">
                    <div className="w-8 h-8 bg-auburn-primary rounded-full mx-auto mb-2"></div>
                    <p className="text-sm text-center">Auburn Glow</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="card-gradient rounded-3xl p-8 card-bottom-static border border-transparent">
            <h3 className="text-2xl font-bold mb-8 text-center text-gradient">Shadow System</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center space-y-4">
                <div className="bg-background/50 rounded-lg p-4 shadow-sm">
                  <div className="w-12 h-12 bg-hastra-teal/20 rounded-lg mx-auto"></div>
                </div>
                <div>
                  <h4 className="font-semibold text-sm">Subtle</h4>
                  <p className="text-xs text-foreground/70">0 1px 3px rgba(0,0,0,0.1)</p>
                </div>
              </div>
              
              <div className="text-center space-y-4">
                <div className="bg-background/50 rounded-lg p-4 shadow-md">
                  <div className="w-12 h-12 bg-auburn-primary/20 rounded-lg mx-auto"></div>
                </div>
                <div>
                  <h4 className="font-semibold text-sm">Medium</h4>
                  <p className="text-xs text-foreground/70">0 4px 6px rgba(0,0,0,0.1)</p>
                </div>
              </div>
              
              <div className="text-center space-y-4">
                <div className="bg-background/50 rounded-lg p-4 shadow-lg">
                  <div className="w-12 h-12 bg-crypto-accent/20 rounded-lg mx-auto"></div>
                </div>
                <div>
                  <h4 className="font-semibold text-sm">Large</h4>
                  <p className="text-xs text-foreground/70">0 10px 25px rgba(0,0,0,0.15)</p>
                </div>
              </div>
              
              <div className="text-center space-y-4">
                <div className="bg-background/50 rounded-lg p-4 shadow-premium">
                  <div className="w-12 h-12 bg-electric-blue/20 rounded-lg mx-auto"></div>
                </div>
                <div>
                  <h4 className="font-semibold text-sm">Premium</h4>
                  <p className="text-xs text-foreground/70">0 20px 40px -12px rgba(0,0,0,0.25)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisualEffects;
