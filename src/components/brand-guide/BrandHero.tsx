
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import HastraLogo from '../HastraLogo';

interface BrandHeroProps {
  generatePDF: () => void;
  isGenerating: boolean;
}

const BrandHero = ({ generatePDF, isGenerating }: BrandHeroProps) => {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiIgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIiBmaWxsPSJub25lIiBzdHJva2U9InJnYmEoMTAsIDIwLCA0MCwwLjA1KSI+PGQgcGF0aD0iTTAtMSAwIDEgTS0xIDAgMSAwIj48L2Q+PC9zdmc+')] opacity-30"></div>
      
      <div className="container relative text-center">
        <div className="flex justify-center mb-8">
          <div 
            className="relative animate-fade-in"
            style={{
              filter: 'drop-shadow(0 0 6px rgba(0, 255, 150, 0.4)) drop-shadow(0 0 12px rgba(0, 200, 255, 0.2))',
              animation: 'logoGlow 4s ease-in-out infinite'
            }}
          >
            <img 
              src="/lovable-uploads/8c030929-6e47-4894-bd4f-ad6c2021ca5e.png" 
              alt="Hastra Logo" 
              className="h-48 md:h-64 w-auto"
              loading="eager"
            />
          </div>
        </div>
        <p className="text-xl md:text-2xl text-foreground/90 max-w-4xl mx-auto leading-relaxed mb-12" style={{ textShadow: '0 0 10px rgba(255, 255, 255, 0.3), 0 0 20px rgba(255, 255, 255, 0.1)' }}>
          Complete Visual Identity & Design System
        </p>
        
        <Button 
          onClick={generatePDF}
          disabled={isGenerating}
          className="group mb-12"
          variant="secondary"
          size="lg"
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

        <div className="flex justify-center">
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
  );
};

export default BrandHero;
