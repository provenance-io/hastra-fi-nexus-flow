
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Copy, Check } from 'lucide-react';
import { useState } from 'react';

const ColorPalette = () => {
  const [copiedColor, setCopiedColor] = useState<string | null>(null);

  const copyToClipboard = (color: string, value: string) => {
    navigator.clipboard.writeText(value);
    setCopiedColor(color);
    setTimeout(() => setCopiedColor(null), 2000);
  };

  const colors = [
    {
      name: 'Hastra Teal',
      hsl: 'hsl(180, 100%, 50%)',
      hex: '#00FFFF',
      usage: 'Primary brand color for logos, CTAs, and key highlights',
      class: 'bg-hastra-teal'
    },
    {
      name: 'Auburn Primary',
      hsl: 'hsl(24, 95%, 53%)',
      hex: '#F97316',
      usage: 'Secondary accent for buttons and interactive elements',
      class: 'bg-auburn-primary'
    },
    {
      name: 'Electric Blue',
      hsl: 'hsl(217, 91%, 60%)',
      hex: '#3B82F6',
      usage: 'Premium accents and data visualization',
      class: 'bg-electric-blue'
    },
    {
      name: 'Mint Green',
      hsl: 'hsl(152, 68%, 55%)',
      hex: '#34D399',
      usage: 'Success states and positive indicators',
      class: 'bg-mint-green'
    },
    {
      name: 'Background Dark',
      hsl: 'hsl(240, 10%, 3.9%)',
      hex: '#0A0A0B',
      usage: 'Primary background for dark theme',
      class: 'bg-background'
    },
    {
      name: 'Foreground Light',
      hsl: 'hsl(0, 0%, 98%)',
      hex: '#FAFAFA',
      usage: 'Primary text color on dark backgrounds',
      class: 'bg-foreground'
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="container relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xl md:text-2xl text-foreground/90 max-w-4xl mx-auto leading-relaxed mb-8 text-center" style={{ textShadow: '0 0 10px rgba(255, 255, 255, 0.3), 0 0 20px rgba(255, 255, 255, 0.1)' }}>Color Palette</h2>
          <p className="text-xl text-foreground/90 text-center mb-16 max-w-3xl mx-auto">
            Our color system reflects sophistication, trust, and innovation. Each color has been carefully chosen to work harmoniously across all brand touchpoints.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {colors.map((color, index) => (
              <Card key={index} className="card-gradient border-transparent group hover:border-hastra-teal/20 transition-all duration-300">
                <CardContent className="p-6">
                  <div className={`w-full h-24 rounded-lg mb-4 ${color.class} shadow-lg`}></div>
                  <h3 className="text-lg font-bold mb-2">{color.name}</h3>
                  <p className="text-sm text-foreground/70 mb-4">{color.usage}</p>
                  
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <code className="text-xs bg-background/50 px-2 py-1 rounded font-mono">{color.hsl}</code>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => copyToClipboard(color.name, color.hsl)}
                        className="h-6 w-6 p-0"
                      >
                        {copiedColor === color.name ? (
                          <Check className="w-3 h-3 text-mint-green" />
                        ) : (
                          <Copy className="w-3 h-3" />
                        )}
                      </Button>
                    </div>
                    <div className="flex items-center justify-between">
                      <code className="text-xs bg-background/50 px-2 py-1 rounded font-mono">{color.hex}</code>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => copyToClipboard(color.name + '-hex', color.hex)}
                        className="h-6 w-6 p-0"
                      >
                        {copiedColor === color.name + '-hex' ? (
                          <Check className="w-3 h-3 text-mint-green" />
                        ) : (
                          <Copy className="w-3 h-3" />
                        )}
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="card-gradient rounded-3xl p-8 card-bottom-static border border-transparent">
            <h3 className="text-2xl font-bold mb-6 text-center text-gradient">Color Usage Examples</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-hastra-teal">Interactive Elements</h4>
                <div className="space-y-3">
                  <Button className="bg-hastra-teal hover:bg-hastra-teal-dark text-background">
                    Primary Button
                  </Button>
                  <Button variant="outline" className="border-auburn-primary text-auburn-primary hover:bg-auburn-primary hover:text-white">
                    Secondary Button
                  </Button>
                </div>
              </div>
              
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-auburn-primary">Status Indicators</h4>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-mint-green rounded-full"></div>
                    <span className="text-mint-green">Success / Active</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-electric-blue rounded-full"></div>
                    <span className="text-electric-blue">Information / Processing</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-auburn-primary rounded-full"></div>
                    <span className="text-auburn-primary">Warning / Attention</span>
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

export default ColorPalette;
