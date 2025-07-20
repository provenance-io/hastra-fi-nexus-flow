
import HastraLogo from '../HastraLogo';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, X } from 'lucide-react';

const LogoGuidelines = () => {
  return (
    <section className="py-20 relative">
      <div className="container relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-gradient">Logo & Identity</h2>
          
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div className="card-gradient rounded-3xl p-8 card-bottom-static border border-transparent">
              <h3 className="text-2xl font-bold mb-6 text-hastra-teal">Primary Logo</h3>
              <div className="flex justify-center mb-6">
                <div className="bg-white/5 rounded-2xl p-8 backdrop-blur-sm">
                  <HastraLogo className="h-20" />
                </div>
              </div>
              <p className="text-foreground/90 leading-relaxed">
                The Hastra logo represents the convergence of traditional finance and blockchain innovation. 
                Always maintain proper proportions and ensure adequate contrast.
              </p>
            </div>
            
            <div className="card-gradient rounded-3xl p-8 card-bottom-static border border-transparent">
              <h3 className="text-2xl font-bold mb-6 text-auburn-primary">Usage Guidelines</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-mint-green mt-0.5 flex-shrink-0" />
                  <p className="text-foreground/90">Maintain minimum clear space equal to the height of the "H"</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-mint-green mt-0.5 flex-shrink-0" />
                  <p className="text-foreground/90">Use high-resolution SVG format for scalability</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-mint-green mt-0.5 flex-shrink-0" />
                  <p className="text-foreground/90">Ensure sufficient contrast against backgrounds</p>
                </div>
                <div className="flex items-start space-x-3">
                  <X className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                  <p className="text-foreground/90">Never stretch or distort the logo proportions</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="card-gradient border-mint-green/20">
              <CardContent className="p-8">
                <h4 className="text-lg font-bold mb-4 text-mint-green flex items-center">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  Correct Usage
                </h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/5 rounded-lg p-4 text-center">
                    <HastraLogo className="h-12 mx-auto mb-2" />
                    <p className="text-sm text-foreground/70">Standard size</p>
                  </div>
                  <div className="bg-charcoal/20 rounded-lg p-4 text-center">
                    <HastraLogo className="h-12 mx-auto mb-2" />
                    <p className="text-sm text-foreground/70">Dark background</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="card-gradient border-red-400/20">
              <CardContent className="p-8">
                <h4 className="text-lg font-bold mb-4 text-red-400 flex items-center">
                  <X className="w-5 h-5 mr-2" />
                  Incorrect Usage
                </h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/5 rounded-lg p-4 text-center">
                    <div className="transform scale-x-150">
                      <HastraLogo className="h-12 mx-auto mb-2" />
                    </div>
                    <p className="text-sm text-red-400">Stretched</p>
                  </div>
                  <div className="bg-white/5 rounded-lg p-4 text-center">
                    <div className="transform skew-x-12">
                      <HastraLogo className="h-12 mx-auto mb-2" />
                    </div>
                    <p className="text-sm text-red-400">Distorted</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoGuidelines;
