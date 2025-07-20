
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import HastraLogo from './HastraLogo';
import { useState } from 'react';
import BrandHero from './brand-guide/BrandHero';
import BrandOverview from './brand-guide/BrandOverview';
import LogoGuidelines from './brand-guide/LogoGuidelines';
import ColorPalette from './brand-guide/ColorPalette';
import TypographySection from './brand-guide/TypographySection';
import ComponentLibrary from './brand-guide/ComponentLibrary';
import VisualEffects from './brand-guide/VisualEffects';
import AnimationSystem from './brand-guide/AnimationSystem';
import ContentVoice from './brand-guide/ContentVoice';
import UsageGuidelines from './brand-guide/UsageGuidelines';

const BrandGuide = () => {
  const [isGenerating, setIsGenerating] = useState(false);

  const generatePDF = async () => {
    setIsGenerating(true);
    
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
              <h2>Color Palette</h2>
              <div class="color-grid">
                <div class="color-card">
                  <div class="color-swatch" style="background: hsl(180, 100%, 50%);"></div>
                  <div class="color-name">Hastra Teal</div>
                  <div class="color-value">HSL(180, 100%, 50%)</div>
                </div>
                <div class="color-card">
                  <div class="color-swatch" style="background: hsl(24, 95%, 53%);"></div>
                  <div class="color-name">Auburn Primary</div>
                  <div class="color-value">HSL(24, 95%, 53%)</div>
                </div>
              </div>
            </div>
            <div class="section">
              <h2>Typography</h2>
              <p><strong>Primary Font:</strong> Space Grotesk - Headlines & Display</p>
              <p><strong>Secondary Font:</strong> Inter - Body text & UI elements</p>
            </div>
            <div class="section">
              <h2>Usage Guidelines</h2>
              <p>This brand guide provides comprehensive standards for implementing Hastra's visual identity across all touchpoints.</p>
            </div>
          </div>
        </body>
        </html>
      `);
      
      printWindow.document.close();
      setTimeout(() => {
        printWindow.print();
        setIsGenerating(false);
      }, 1000);
    }
  };

  return (
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-header-glow/5 to-crypto-accent/5"></div>
      
      <div className="relative z-10">
        <main className="flex-grow">
          <BrandHero 
            generatePDF={generatePDF} 
            isGenerating={isGenerating} 
          />
          
          <BrandOverview />
          
          <LogoGuidelines />
          
          <ColorPalette />
          
          <TypographySection />
          
          <ComponentLibrary />
          
          <VisualEffects />
          
          <AnimationSystem />
          
          <ContentVoice />
          
          <UsageGuidelines />
        </main>
      </div>
    </div>
  );
};

export default BrandGuide;
