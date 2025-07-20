
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Play, RotateCcw } from 'lucide-react';
import { useState } from 'react';

const AnimationSystem = () => {
  const [animationDemo, setAnimationDemo] = useState<string | null>(null);

  const triggerAnimation = (type: string) => {
    setAnimationDemo(type);
    setTimeout(() => setAnimationDemo(null), 1000);
  };

  return (
    <section className="py-20 relative">
      <div className="container relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gradient">Animation System</h2>
          <p className="text-xl text-foreground/90 text-center mb-16 max-w-3xl mx-auto">
            Smooth, purposeful animations enhance user experience without being distracting.
          </p>
          
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <Card className="card-gradient border-transparent">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-hastra-teal">Animation Principles</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-hastra-teal rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-sm">Duration</h4>
                      <p className="text-sm text-foreground/70">200-500ms for micro-interactions</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-auburn-primary rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-sm">Easing</h4>
                      <p className="text-sm text-foreground/70">ease-out for entrances, ease-in for exits</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-crypto-accent rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-sm">Purpose</h4>
                      <p className="text-sm text-foreground/70">Guide attention, provide feedback, enhance flow</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-electric-blue rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-sm">Performance</h4>
                      <p className="text-sm text-foreground/70">Hardware-accelerated transforms only</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="card-gradient border-transparent">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-auburn-primary">Interactive Demos</h3>
                <div className="space-y-6">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Fade In</span>
                      <Button 
                        size="sm" 
                        variant="outline"
                        onClick={() => triggerAnimation('fade-in')}
                      >
                        <Play className="w-3 h-3 mr-1" />
                        Demo
                      </Button>
                    </div>
                    <div className="bg-background/50 rounded-lg p-4 h-16 flex items-center justify-center">
                      <div 
                        className={`w-8 h-8 bg-hastra-teal rounded-full ${animationDemo === 'fade-in' ? 'animate-fade-in' : ''}`}
                        key={animationDemo === 'fade-in' ? 'fade-in' : 'static'}
                      ></div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Scale</span>
                      <Button 
                        size="sm" 
                        variant="outline"
                        onClick={() => triggerAnimation('scale')}
                      >
                        <Play className="w-3 h-3 mr-1" />
                        Demo
                      </Button>
                    </div>
                    <div className="bg-background/50 rounded-lg p-4 h-16 flex items-center justify-center">
                      <div 
                        className={`w-8 h-8 bg-auburn-primary rounded-full transition-transform duration-300 ${animationDemo === 'scale' ? 'scale-110' : ''}`}
                      ></div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Glow Pulse</span>
                      <Button 
                        size="sm" 
                        variant="outline"
                        onClick={() => triggerAnimation('glow')}
                      >
                        <Play className="w-3 h-3 mr-1" />
                        Demo
                      </Button>
                    </div>
                    <div className="bg-background/50 rounded-lg p-4 h-16 flex items-center justify-center">
                      <div 
                        className={`w-8 h-8 bg-crypto-accent rounded-full ${animationDemo === 'glow' ? 'animate-pulse shadow-lg shadow-crypto-accent/50' : ''}`}
                      ></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="card-gradient rounded-3xl p-8 card-bottom-static border border-transparent">
            <h3 className="text-2xl font-bold mb-8 text-center text-gradient">Animation Library</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center space-y-3">
                <div className="bg-background/50 rounded-lg p-4">
                  <RotateCcw className="w-6 h-6 mx-auto text-hastra-teal animate-spin-slow" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm">Spin</h4>
                  <p className="text-xs text-foreground/70">4s linear infinite</p>
                </div>
              </div>
              
              <div className="text-center space-y-3">
                <div className="bg-background/50 rounded-lg p-4">
                  <div className="w-6 h-6 mx-auto bg-auburn-primary rounded-full animate-float"></div>
                </div>
                <div>
                  <h4 className="font-semibold text-sm">Float</h4>
                  <p className="text-xs text-foreground/70">3s ease-in-out infinite</p>
                </div>
              </div>
              
              <div className="text-center space-y-3">
                <div className="bg-background/50 rounded-lg p-4">
                  <div className="w-6 h-6 mx-auto bg-crypto-accent rounded-full animate-pulse-light"></div>
                </div>
                <div>
                  <h4 className="font-semibold text-sm">Pulse</h4>
                  <p className="text-xs text-foreground/70">2s ease-in-out infinite</p>
                </div>
              </div>
              
              <div className="text-center space-y-3">
                <div className="bg-background/50 rounded-lg p-4">
                  <div className="w-6 h-6 mx-auto bg-electric-blue rounded animate-morph"></div>
                </div>
                <div>
                  <h4 className="font-semibold text-sm">Morph</h4>
                  <p className="text-xs text-foreground/70">8s ease-in-out infinite</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnimationSystem;
