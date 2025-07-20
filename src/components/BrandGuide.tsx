
import { Button } from '@/components/ui/button';
import { Download, Palette, Type, Zap, Eye, Globe, Smartphone } from 'lucide-react';
import HastraLogo from './HastraLogo';
import { useState } from 'react';

const BrandGuide = () => {
  const [isGenerating, setIsGenerating] = useState(false);

  const generatePDF = async () => {
    setIsGenerating(true);
    
    // Create a new window with the brand guide content
    const printWindow = window.open('', '_blank');
    if (printWindow) {
      printWindow.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
          <title>Hastra Brand Guide</title>
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Space+Grotesk:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">
          <style>
            * { margin: 0; padding: 0; box-sizing: border-box; }
            body { 
              font-family: 'Inter', sans-serif; 
              line-height: 1.6; 
              color: #333; 
              background: #fff;
            }
            .container { max-width: 800px; margin: 0 auto; padding: 40px 20px; }
            .header { text-align: center; margin-bottom: 60px; }
            .logo { width: 120px; height: auto; margin-bottom: 20px; }
            .title { font-size: 48px; font-weight: 900; margin-bottom: 10px; font-family: 'Space Grotesk', sans-serif; }
            .subtitle { font-size: 18px; color: #666; margin-bottom: 40px; }
            .section { margin-bottom: 60px; page-break-inside: avoid; }
            .section h2 { font-size: 32px; font-weight: 800; margin-bottom: 20px; font-family: 'Space Grotesk', sans-serif; }
            .section h3 { font-size: 24px; font-weight: 700; margin-bottom: 15px; margin-top: 30px; }
            .section p { margin-bottom: 15px; font-size: 16px; }
            .color-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px; margin: 20px 0; }
            .color-card { border: 1px solid #e0e0e0; border-radius: 8px; padding: 15px; }
            .color-swatch { width: 100%; height: 60px; border-radius: 4px; margin-bottom: 10px; }
            .color-name { font-weight: 600; margin-bottom: 5px; }
            .color-value { font-family: monospace; font-size: 14px; color: #666; }
            .typography-sample { margin: 20px 0; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px; }
            .font-display { font-family: 'Space Grotesk', sans-serif; }
            .font-body { font-family: 'Inter', sans-serif; }
            .component-demo { padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px; margin: 20px 0; }
            .button-demo { 
              display: inline-block; 
              padding: 12px 24px; 
              background: linear-gradient(135deg, hsl(24, 95%, 53%), hsl(34, 100%, 84%)); 
              color: white; 
              border: none; 
              border-radius: 8px; 
              font-weight: 600; 
              margin: 5px; 
            }
            .glass-demo { 
              background: rgba(255, 255, 255, 0.05); 
              backdrop-filter: blur(20px); 
              border: 1px solid rgba(255, 255, 255, 0.1); 
              padding: 20px; 
              border-radius: 12px; 
              color: #333; 
            }
            @media print {
              body { background: white; }
              .container { padding: 20px; }
              .section { page-break-inside: avoid; }
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1 class="title">Hastra Brand Guide</h1>
              <p class="subtitle">Complete Visual Identity & Design System</p>
              <p style="color: #999; font-size: 14px;">Generated ${new Date().toLocaleDateString()}</p>
            </div>

            <div class="section">
              <h2>Brand Overview</h2>
              <p><strong>Mission:</strong> Hastra bridges traditional finance with decentralized innovation, creating elite DeFi products backed by real-world assets for the crypto-savvy community.</p>
              <p><strong>Vision:</strong> To be the premier platform where traditional finance meets cutting-edge blockchain technology, offering secure and regulated financial products.</p>
              <p><strong>Values:</strong> Innovation, Security, Transparency, Accessibility, Excellence</p>
            </div>

            <div class="section">
              <h2>Logo & Identity</h2>
              <p>The Hastra logo represents the convergence of traditional finance and blockchain innovation. Use the logo with adequate spacing and never modify its proportions.</p>
              <h3>Logo Usage Guidelines:</h3>
              <ul style="margin-left: 20px;">
                <li>Maintain minimum clear space equal to the height of the "H" in Hastra</li>
                <li>Never stretch or distort the logo</li>
                <li>Use high-resolution versions for all applications</li>
                <li>Ensure sufficient contrast against backgrounds</li>
              </ul>
            </div>

            <div class="section">
              <h2>Color Palette</h2>
              <p>Our color system reflects sophistication, trust, and innovation. The primary palette uses teal accents with warm orange highlights for premium appeal.</p>
              
              <div class="color-grid">
                <div class="color-card">
                  <div class="color-swatch" style="background: hsl(180, 100%, 50%);"></div>
                  <div class="color-name">Hastra Teal</div>
                  <div class="color-value">HSL(180, 100%, 50%)</div>
                  <div class="color-value">#00FFFF</div>
                </div>
                <div class="color-card">
                  <div class="color-swatch" style="background: hsl(24, 95%, 53%);"></div>
                  <div class="color-name">Auburn Primary</div>
                  <div class="color-value">HSL(24, 95%, 53%)</div>
                  <div class="color-value">#F97316</div>
                </div>
                <div class="color-card">
                  <div class="color-swatch" style="background: hsl(240, 10%, 3.9%);"></div>
                  <div class="color-name">Background Dark</div>
                  <div class="color-value">HSL(240, 10%, 3.9%)</div>
                  <div class="color-value">#0A0A0B</div>
                </div>
                <div class="color-card">
                  <div class="color-swatch" style="background: hsl(0, 0%, 98%);"></div>
                  <div class="color-name">Foreground Light</div>
                  <div class="color-value">HSL(0, 0%, 98%)</div>
                  <div class="color-value">#FAFAFA</div>
                </div>
                <div class="color-card">
                  <div class="color-swatch" style="background: hsl(217, 91%, 60%);"></div>
                  <div class="color-name">Electric Blue</div>
                  <div class="color-value">HSL(217, 91%, 60%)</div>
                  <div class="color-value">#3B82F6</div>
                </div>
                <div class="color-card">
                  <div class="color-swatch" style="background: hsl(152, 68%, 55%);"></div>
                  <div class="color-name">Mint Green</div>
                  <div class="color-value">HSL(152, 68%, 55%)</div>
                  <div class="color-value">#34D399</div>
                </div>
              </div>

              <h3>Color Usage Guidelines:</h3>
              <ul style="margin-left: 20px;">
                <li><strong>Hastra Teal:</strong> Primary brand color for logos, CTAs, and key highlights</li>
                <li><strong>Auburn Primary:</strong> Secondary accent for buttons and interactive elements</li>
                <li><strong>Electric Blue:</strong> Premium accents and data visualization</li>
                <li><strong>Mint Green:</strong> Success states and positive indicators</li>
              </ul>
            </div>

            <div class="section">
              <h2>Typography</h2>
              <p>Our typography system uses modern, clean fonts that ensure excellent readability across all platforms.</p>
              
              <div class="typography-sample">
                <h3 class="font-display">Display Font: Space Grotesk</h3>
                <p class="font-display" style="font-size: 32px; font-weight: 900;">Headlines & Titles</p>
                <p class="font-display" style="font-size: 24px; font-weight: 700;">Subheadings</p>
                <p class="font-display" style="font-size: 18px; font-weight: 600;">Section Headers</p>
              </div>

              <div class="typography-sample">
                <h3 class="font-body">Body Font: Inter</h3>
                <p class="font-body" style="font-size: 16px;">Regular body text for optimal readability</p>
                <p class="font-body" style="font-size: 14px;">Smaller text and captions</p>
                <p class="font-body" style="font-size: 16px; font-weight: 600;">Bold emphasis text</p>
              </div>

              <h3>Typography Scale:</h3>
              <ul style="margin-left: 20px;">
                <li><strong>H1:</strong> 72px (5xl) - Space Grotesk 900</li>
                <li><strong>H2:</strong> 48px (3xl) - Space Grotesk 800</li>
                <li><strong>H3:</strong> 32px (2xl) - Space Grotesk 700</li>
                <li><strong>Body Large:</strong> 18px - Inter 400</li>
                <li><strong>Body:</strong> 16px - Inter 400</li>
                <li><strong>Small:</strong> 14px - Inter 400</li>
              </ul>
            </div>

            <div class="section">
              <h2>Visual Effects</h2>
              <p>Hastra's visual language includes sophisticated glass morphism effects, subtle glows, and premium shadows.</p>

              <h3>Glass Morphism</h3>
              <div class="glass-demo">
                <p>Glass morphism creates depth and premium feel with subtle transparency and blur effects.</p>
                <p><strong>Properties:</strong> backdrop-filter: blur(20px), background: rgba(255,255,255,0.05)</p>
              </div>

              <h3>Glow Effects</h3>
              <p>Subtle glow effects using brand colors enhance interactive elements and create visual hierarchy.</p>

              <h3>Shadow System</h3>
              <ul style="margin-left: 20px;">
                <li><strong>Subtle:</strong> 0 1px 3px rgba(0,0,0,0.1)</li>
                <li><strong>Medium:</strong> 0 4px 6px rgba(0,0,0,0.1)</li>
                <li><strong>Large:</strong> 0 10px 25px rgba(0,0,0,0.15)</li>
                <li><strong>Premium:</strong> 0 20px 40px -12px rgba(0,0,0,0.25)</li>
              </ul>
            </div>

            <div class="section">
              <h2>Component Styles</h2>
              <p>Consistent component styling ensures a cohesive user experience across all touchpoints.</p>

              <h3>Buttons</h3>
              <div class="component-demo">
                <button class="button-demo">Primary Button</button>
                <button class="button-demo" style="background: transparent; border: 2px solid hsl(24, 95%, 53%); color: hsl(24, 95%, 53%);">Secondary Button</button>
              </div>

              <h3>Cards</h3>
              <p>Cards use glass morphism effects with subtle borders and premium shadows for depth.</p>

              <h3>Interactive Elements</h3>
              <ul style="margin-left: 20px;">
                <li>Hover states with subtle scale (1.02-1.05)</li>
                <li>Smooth transitions (300ms ease)</li>
                <li>Focus states with brand color outlines</li>
                <li>Active states with slight scale reduction (0.95)</li>
              </ul>
            </div>

            <div class="section">
              <h2>Animation System</h2>
              <p>Smooth, purposeful animations enhance user experience without being distracting.</p>

              <h3>Animation Principles:</h3>
              <ul style="margin-left: 20px;">
                <li><strong>Duration:</strong> 200-500ms for micro-interactions</li>
                <li><strong>Easing:</strong> ease-out for entrances, ease-in for exits</li>
                <li><strong>Purpose:</strong> Guide attention, provide feedback, enhance flow</li>
                <li><strong>Performance:</strong> Hardware-accelerated transforms only</li>
              </ul>

              <h3>Key Animations:</h3>
              <ul style="margin-left: 20px;">
                <li>Fade in/out for content transitions</li>
                <li>Scale transforms for interactive feedback</li>
                <li>Slide animations for navigation</li>
                <li>Glow pulse for attention-drawing elements</li>
              </ul>
            </div>

            <div class="section">
              <h2>Content Strategy</h2>
              <p>Our voice is professional yet approachable, emphasizing innovation and trust.</p>

              <h3>Tone of Voice:</h3>
              <ul style="margin-left: 20px;">
                <li><strong>Professional:</strong> Expert knowledge and authority</li>
                <li><strong>Innovative:</strong> Forward-thinking and cutting-edge</li>
                <li><strong>Trustworthy:</strong> Reliable and transparent</li>
                <li><strong>Accessible:</strong> Clear and understandable</li>
              </ul>

              <h3>Key Messages:</h3>
              <ul style="margin-left: 20px;">
                <li>Elite DeFi products for the crypto-savvy</li>
                <li>Real-world asset backing for security</li>
                <li>Regulatory compliance meets innovation</li>
                <li>Professional-grade financial solutions</li>
              </ul>
            </div>

            <div class="section">
              <h2>Responsive Design</h2>
              <p>Hastra's design system scales beautifully across all devices and screen sizes.</p>

              <h3>Breakpoints:</h3>
              <ul style="margin-left: 20px;">
                <li><strong>Mobile:</strong> 320px - 768px</li>
                <li><strong>Tablet:</strong> 768px - 1024px</li>
                <li><strong>Desktop:</strong> 1024px - 1440px</li>
                <li><strong>Large:</strong> 1440px+</li>
              </ul>

              <h3>Mobile Optimizations:</h3>
              <ul style="margin-left: 20px;">
                <li>Touch-friendly button sizes (44px minimum)</li>
                <li>Simplified animations for performance</li>
                <li>Optimized font sizes and spacing</li>
                <li>Thumb-friendly navigation placement</li>
              </ul>
            </div>

            <div class="section">
              <h2>Brand Applications</h2>
              <p>Guidelines for implementing the Hastra brand across different contexts and mediums.</p>

              <h3>Digital Applications:</h3>
              <ul style="margin-left: 20px;">
                <li>Web applications and interfaces</li>
                <li>Mobile applications</li>
                <li>Social media and marketing materials</li>
                <li>Email templates and communications</li>
              </ul>

              <h3>Do's and Don'ts:</h3>
              <h4>Do:</h4>
              <ul style="margin-left: 20px;">
                <li>Use approved color combinations</li>
                <li>Maintain consistent spacing and typography</li>
                <li>Apply glass morphism effects appropriately</li>
                <li>Ensure accessibility standards are met</li>
              </ul>

              <h4>Don't:</h4>
              <ul style="margin-left: 20px;">
                <li>Modify logo proportions or colors</li>
                <li>Use colors outside the approved palette</li>
                <li>Override the typography system</li>
                <li>Apply excessive animations or effects</li>
              </ul>
            </div>

            <div class="section">
              <h2>Contact & Resources</h2>
              <p>For questions about brand implementation or additional resources, contact the design team.</p>
              <p><strong>Brand Guidelines Version:</strong> 1.0</p>
              <p><strong>Last Updated:</strong> ${new Date().toLocaleDateString()}</p>
            </div>
          </div>
        </body>
        </html>
      `);
      
      printWindow.document.close();
      
      // Wait a moment for content to load, then trigger print
      setTimeout(() => {
        printWindow.print();
        setIsGenerating(false);
      }, 1000);
    }
  };

  return (
    <div className="relative">
      {/* Extended gradient background to match About page */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-header-glow/5 to-crypto-accent/5"></div>
      
      <div className="relative z-10">
        <main className="flex-grow">
          {/* Enhanced Hero Section */}
          <section className="relative py-20 md:py-32 overflow-hidden">
            {/* Unified seamless background pattern */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiIgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIiBmaWxsPSJub25lIiBzdHJva2U9InJnYmEoMTAsIDIwLCA0MCwwLjA1KSI+PGQgcGF0aD0iTTAtMSAwIDEgTS0xIDAgMSAwIj48L2Q+PC9zdmc+')] opacity-30"></div>
            
            <div className="container relative text-center">
              {/* Logo with glow effect */}
              <div className="flex justify-center mb-8">
                <div 
                  className="relative"
                  style={{
                    filter: 'drop-shadow(0 0 6px rgba(0, 255, 150, 0.4)) drop-shadow(0 0 12px rgba(0, 200, 255, 0.2))',
                    animation: 'logoGlow 4s ease-in-out infinite'
                  }}
                >
                  <HastraLogo className="h-24 md:h-32" />
                </div>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-black text-gradient mb-4">
                Hastra Brand Guide
              </h1>
              <p className="text-xl md:text-2xl text-foreground/90 max-w-4xl mx-auto leading-relaxed mb-12" style={{ textShadow: '0 0 10px rgba(255, 255, 255, 0.3), 0 0 20px rgba(255, 255, 255, 0.1)' }}>
                Complete Visual Identity & Design System
              </p>
              
              <Button 
                onClick={generatePDF}
                disabled={isGenerating}
                size="lg"
                className="bg-orange-900/20 border border-orange-800/30 text-orange-300 hover:bg-orange-900/30 hover:border-orange-800/40 focus-ring font-bold px-8 py-4 text-lg rounded-xl group"
              >
                {isGenerating ? (
                  <>
                    <div className="animate-spin mr-2 h-5 w-5 border-2 border-current border-t-transparent rounded-full" />
                    Generating...
                  </>
                ) : (
                  <>
                    <Download className="mr-2 h-5 w-5" />
                    Download Brand Guide
                  </>
                )}
              </Button>

              {/* Flashing downward arrow indicator */}
              <div className="flex justify-center my-12">
                <div className="animate-pulse">
                  <svg 
                    className="w-8 h-8" 
                    style={{
                      filter: 'drop-shadow(0 0 12px rgba(229, 218, 194, 0.8)) drop-shadow(0 0 24px rgba(229, 218, 194, 0.4))',
                      animation: 'pulse 2s ease-in-out infinite'
                    }}
                    fill="none" 
                    stroke="rgba(229, 218, 194, 1)" 
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </div>
              </div>
            </div>
          </section>

          {/* Brand Components Grid Section */}
          <section className="py-16 relative">
            <div className="container relative">
              <div className="max-w-5xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gradient">
                  Brand System Components
                </h2>
                
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-24">
                  <div className="card-gradient rounded-3xl p-8 card-bottom-static border border-transparent hover:border-hastra-teal/30 transition-all duration-300 group">
                    <Palette className="w-12 h-12 text-hastra-teal mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                    <h3 className="text-xl font-bold mb-2 text-center">Color Palette</h3>
                    <p className="text-muted-foreground text-center">Complete color system with HSL values and usage guidelines</p>
                  </div>

                  <div className="card-gradient rounded-3xl p-8 card-bottom-static border border-transparent hover:border-auburn-primary/30 transition-all duration-300 group">
                    <Type className="w-12 h-12 text-auburn-primary mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                    <h3 className="text-xl font-bold mb-2 text-center">Typography</h3>
                    <p className="text-muted-foreground text-center">Font families, scales, and typographic hierarchy</p>
                  </div>

                  <div className="card-gradient rounded-3xl p-8 card-bottom-static border border-transparent hover:border-crypto-accent/30 transition-all duration-300 group">
                    <Zap className="w-12 h-12 text-crypto-accent mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                    <h3 className="text-xl font-bold mb-2 text-center">Visual Effects</h3>
                    <p className="text-muted-foreground text-center">Glass morphism, shadows, and animation guidelines</p>
                  </div>

                  <div className="card-gradient rounded-3xl p-8 card-bottom-static border border-transparent hover:border-mint-green/30 transition-all duration-300 group">
                    <Eye className="w-12 h-12 text-mint-green mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                    <h3 className="text-xl font-bold mb-2 text-center">Component Styles</h3>
                    <p className="text-muted-foreground text-center">Buttons, cards, and interactive element standards</p>
                  </div>

                  <div className="card-gradient rounded-3xl p-8 card-bottom-static border border-transparent hover:border-header-glow/30 transition-all duration-300 group">
                    <Globe className="w-12 h-12 text-header-glow mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                    <h3 className="text-xl font-bold mb-2 text-center">Brand Applications</h3>
                    <p className="text-muted-foreground text-center">Usage guidelines and implementation standards</p>
                  </div>

                  <div className="card-gradient rounded-3xl p-8 card-bottom-static border border-transparent hover:border-orange-400/30 transition-all duration-300 group">
                    <Smartphone className="w-12 h-12 text-orange-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                    <h3 className="text-xl font-bold mb-2 text-center">Responsive Design</h3>
                    <p className="text-muted-foreground text-center">Mobile-first approach and breakpoint system</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Brand Overview Section */}
          <section className="py-20 relative">
            <div className="container relative">
              <div className="max-w-5xl mx-auto">
                <div className="card-gradient rounded-3xl p-8 md:p-12 card-bottom-static border border-transparent">
                  <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gradient">Brand Overview</h2>
                  <div className="grid md:grid-cols-3 gap-12">
                    <div className="text-center">
                      <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-hastra-teal/10 flex items-center justify-center">
                        <div className="w-8 h-8 bg-hastra-teal rounded-full"></div>
                      </div>
                      <h3 className="text-xl font-bold text-hastra-teal mb-4">Mission</h3>
                      <p className="text-lg text-foreground/90 leading-relaxed">
                        Bridge traditional finance with decentralized innovation, creating elite DeFi products backed by real-world assets.
                      </p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-auburn-primary/10 flex items-center justify-center">
                        <div className="w-8 h-8 bg-auburn-primary rounded-full"></div>
                      </div>
                      <h3 className="text-xl font-bold text-auburn-primary mb-4">Vision</h3>
                      <p className="text-lg text-foreground/90 leading-relaxed">
                        Be the premier platform where traditional finance meets cutting-edge blockchain technology.
                      </p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-crypto-accent/10 flex items-center justify-center">
                        <div className="w-8 h-8 bg-crypto-accent rounded-full"></div>
                      </div>
                      <h3 className="text-xl font-bold text-crypto-accent mb-4">Values</h3>
                      <p className="text-lg text-foreground/90 leading-relaxed">
                        Innovation, Security, Transparency, Accessibility, Excellence
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Brand Applications Section */}
          <section className="py-20 relative">
            <div className="container relative">
              <div className="max-w-5xl mx-auto">
                <div className="card-gradient rounded-3xl p-8 md:p-12 card-bottom-static border border-transparent">
                  <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gradient">Brand Implementation</h2>
                  <div className="space-y-8">
                    <div>
                      <h3 className="text-xl font-bold mb-4 text-header-glow">Logo Usage</h3>
                      <p className="text-lg text-foreground/90 leading-relaxed">
                        The Hastra logo should always maintain proper spacing and contrast. Ensure adequate breathing room and never distort proportions. <span className="text-hastra-teal font-semibold">Use the provided SVG format for scalability across all platforms.</span>
                      </p>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-4 text-auburn-primary">Color Application</h3>
                      <p className="text-lg text-foreground/90 leading-relaxed">
                        Primary brand colors should be used consistently across all touchpoints. <span className="text-crypto-accent font-semibold">Hastra Teal serves as the primary accent, while Auburn provides secondary emphasis.</span>
                      </p>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-4 text-mint-green">Digital Guidelines</h3>
                      <p className="text-lg text-foreground/90 leading-relaxed">
                        Maintain consistent spacing, typography hierarchy, and interactive states across all digital platforms. <span className="text-orange-400 font-semibold">Every interaction should reflect our commitment to premium user experience.</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Final CTA Section */}
          <section className="py-20 relative">
            <div className="container relative text-center">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gradient">
                  Ready to Build with Hastra?
                </h2>
                <p className="text-xl md:text-2xl text-foreground/90 leading-relaxed mb-12" style={{ textShadow: '0 0 10px rgba(255, 255, 255, 0.3), 0 0 20px rgba(255, 255, 255, 0.1)' }}>
                  Use these guidelines to create consistent, beautiful experiences that represent our brand values.
                </p>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default BrandGuide;
