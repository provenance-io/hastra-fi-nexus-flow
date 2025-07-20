
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, X, Globe, Smartphone, Monitor, Mail } from 'lucide-react';

const UsageGuidelines = () => {
  return (
    <section className="py-20 relative">
      <div className="container relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gradient">Usage Guidelines</h2>
          <p className="text-xl text-foreground/90 text-center mb-16 max-w-3xl mx-auto">
            Guidelines for implementing the Hastra brand across different contexts and mediums.
          </p>
          
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <Card className="card-gradient border-mint-green/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-mint-green flex items-center">
                  <CheckCircle className="w-6 h-6 mr-3" />
                  Do's
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-mint-green mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-foreground/90">Use approved color combinations consistently</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-mint-green mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-foreground/90">Maintain consistent spacing and typography hierarchy</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-mint-green mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-foreground/90">Apply glass morphism effects appropriately</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-mint-green mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-foreground/90">Ensure accessibility standards are met</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-mint-green mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-foreground/90">Use SVG format for logos and icons</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="card-gradient border-red-400/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-red-400 flex items-center">
                  <X className="w-6 h-6 mr-3" />
                  Don'ts
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <X className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-foreground/90">Modify logo proportions or brand colors</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <X className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-foreground/90">Use colors outside the approved palette</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <X className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-foreground/90">Override the established typography system</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <X className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-foreground/90">Apply excessive animations or effects</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <X className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-foreground/90">Use low-resolution or pixelated assets</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="card-gradient rounded-3xl p-8 card-bottom-static border border-transparent mb-16">
            <h3 className="text-2xl font-bold mb-8 text-center text-gradient">Digital Applications</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-hastra-teal/10 rounded-full flex items-center justify-center">
                  <Globe className="w-8 h-8 text-hastra-teal" />
                </div>
                <h4 className="font-semibold">Web Applications</h4>
                <p className="text-sm text-foreground/70">Responsive design with consistent branding</p>
              </div>
              
              <div className="text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-auburn-primary/10 rounded-full flex items-center justify-center">
                  <Smartphone className="w-8 h-8 text-auburn-primary" />
                </div>
                <h4 className="font-semibold">Mobile Apps</h4>
                <p className="text-sm text-foreground/70">Touch-friendly interface with brand consistency</p>
              </div>
              
              <div className="text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-crypto-accent/10 rounded-full flex items-center justify-center">
                  <Monitor className="w-8 h-8 text-crypto-accent" />
                </div>
                <h4 className="font-semibold">Marketing</h4>
                <p className="text-sm text-foreground/70">Social media and advertising materials</p>
              </div>
              
              <div className="text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-electric-blue/10 rounded-full flex items-center justify-center">
                  <Mail className="w-8 h-8 text-electric-blue" />
                </div>
                <h4 className="font-semibold">Communications</h4>
                <p className="text-sm text-foreground/70">Email templates and documentation</p>
              </div>
            </div>
          </div>
          
          <div className="card-gradient rounded-3xl p-8 card-bottom-static border border-transparent">
            <h3 className="text-2xl font-bold mb-8 text-center text-gradient">Responsive Guidelines</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-hastra-teal mb-4">Breakpoints</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center bg-background/30 rounded-lg p-3">
                    <span className="text-sm font-medium">Mobile</span>
                    <span className="text-sm text-foreground/70">320px - 768px</span>
                  </div>
                  <div className="flex justify-between items-center bg-background/30 rounded-lg p-3">
                    <span className="text-sm font-medium">Tablet</span>
                    <span className="text-sm text-foreground/70">768px - 1024px</span>
                  </div>
                  <div className="flex justify-between items-center bg-background/30 rounded-lg p-3">
                    <span className="text-sm font-medium">Desktop</span>
                    <span className="text-sm text-foreground/70">1024px - 1440px</span>
                  </div>
                  <div className="flex justify-between items-center bg-background/30 rounded-lg p-3">
                    <span className="text-sm font-medium">Large</span>
                    <span className="text-sm text-foreground/70">1440px+</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-auburn-primary mb-4">Mobile Optimizations</h4>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-auburn-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-sm text-foreground/80">Touch-friendly button sizes (44px minimum)</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-auburn-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-sm text-foreground/80">Simplified animations for performance</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-auburn-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-sm text-foreground/80">Optimized font sizes and spacing</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-auburn-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-sm text-foreground/80">Thumb-friendly navigation placement</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UsageGuidelines;
