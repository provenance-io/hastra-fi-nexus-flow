
import { Card, CardContent } from '@/components/ui/card';

const TypographySection = () => {
  return (
    <section className="py-20 relative">
      <div className="container relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gradient">Typography</h2>
          <p className="text-xl text-foreground/90 text-center mb-16 max-w-3xl mx-auto">
            Our typography system uses modern, clean fonts that ensure excellent readability across all platforms and devices.
          </p>
          
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <Card className="card-gradient border-transparent">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-hastra-teal">Display Font: Space Grotesk</h3>
                <div className="space-y-6">
                  <div>
                    <h1 className="text-4xl font-black mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                      Headlines & Titles
                    </h1>
                    <p className="text-sm text-foreground/70">48px - 900 weight</p>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                      Subheadings
                    </h2>
                    <p className="text-sm text-foreground/70">32px - 800 weight</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                      Section Headers
                    </h3>
                    <p className="text-sm text-foreground/70">24px - 700 weight</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="card-gradient border-transparent">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-auburn-primary">Body Font: Inter</h3>
                <div className="space-y-6">
                  <div>
                    <p className="text-lg mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                      Large body text for optimal readability and important content sections.
                    </p>
                    <p className="text-sm text-foreground/70">18px - 400 weight</p>
                  </div>
                  <div>
                    <p className="text-base mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                      Regular body text for general content and descriptions.
                    </p>
                    <p className="text-sm text-foreground/70">16px - 400 weight</p>
                  </div>
                  <div>
                    <p className="text-sm mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                      Small text for captions, labels, and secondary information.
                    </p>
                    <p className="text-sm text-foreground/70">14px - 400 weight</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="card-gradient rounded-3xl p-8 card-bottom-static border border-transparent">
            <h3 className="text-2xl font-bold mb-8 text-center text-gradient">Typography Scale & Hierarchy</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-hastra-teal mb-4">Headings</h4>
                  <div className="space-y-3">
                    <div>
                      <h1 className="text-5xl font-black mb-1" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>H1</h1>
                      <p className="text-xs text-foreground/70">72px / 5xl - Space Grotesk 900</p>
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold mb-1" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>H2</h2>
                      <p className="text-xs text-foreground/70">48px / 3xl - Space Grotesk 800</p>
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold mb-1" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>H3</h3>
                      <p className="text-xs text-foreground/70">32px / 2xl - Space Grotesk 700</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-auburn-primary mb-4">Body Text</h4>
                  <div className="space-y-3">
                    <div>
                      <p className="text-lg mb-1" style={{ fontFamily: 'Inter, sans-serif' }}>Body Large</p>
                      <p className="text-xs text-foreground/70">18px - Inter 400</p>
                    </div>
                    <div>
                      <p className="text-base mb-1" style={{ fontFamily: 'Inter, sans-serif' }}>Body Regular</p>
                      <p className="text-xs text-foreground/70">16px - Inter 400</p>
                    </div>
                    <div>
                      <p className="text-sm mb-1" style={{ fontFamily: 'Inter, sans-serif' }}>Body Small</p>
                      <p className="text-xs text-foreground/70">14px - Inter 400</p>
                    </div>
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

export default TypographySection;
