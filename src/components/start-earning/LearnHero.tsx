
import { Button } from '@/components/ui/button';
import { BookOpen, ArrowRight } from 'lucide-react';
import { scrollToSection } from '@/utils/scrollUtils';
import { SECTION_DATA_ATTRIBUTES } from '@/constants/sections';

/**
 * Hero section constants
 */
const HERO_CONTENT = {
  MAIN_TITLE: "Learn DeFi",
  SUBTITLE: "Start Earning",
  DESCRIPTION: "Master DeFi fundamentals and start earning with sYLDS and HOMES tokens.",
  CTA_PRIMARY: "Start Learning",
  CTA_SECONDARY: "Skip to Earning",
} as const;

const BUTTON_STYLES = {
  BASE: "min-w-[200px] group",
  SIZE: "lg" as const,
  VARIANT: "secondary" as const,
} as const;

/**
 * Handles smooth scroll to learning section
 */
const handleScrollToLearning = (): void => {
  scrollToSection(SECTION_DATA_ATTRIBUTES.LEARNING);
};


/**
 * Main hero heading with gradient text effects
 */
const HeroHeading = () => (
  <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight">
    <span className="block text-gradient">
      {HERO_CONTENT.MAIN_TITLE}
    </span>
    <span className="block bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
      {HERO_CONTENT.SUBTITLE}
    </span>
  </h1>
);

/**
 * Hero description with enhanced text shadow
 */
const HeroDescription = () => (
  <div>
    <p 
      className="text-xl md:text-2xl text-foreground/90 max-w-4xl mx-auto leading-relaxed" 
      style={{ textShadow: '0 0 10px rgba(255, 255, 255, 0.3), 0 0 20px rgba(255, 255, 255, 0.1)' }}
    >
      Master DeFi fundamentals and start earning with{' '}
      <span className="font-semibold">sYLDS</span> and{' '}
      <span className="font-semibold">HOMES</span> tokens.
    </p>
  </div>
);

/**
 * Call-to-action buttons section
 */
const HeroCTAButtons = () => (
  <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12">
    <Button 
      size={BUTTON_STYLES.SIZE}
      variant={BUTTON_STYLES.VARIANT}
      className={BUTTON_STYLES.BASE}
      onClick={handleScrollToLearning}
    >
      {HERO_CONTENT.CTA_PRIMARY}
      <BookOpen className="ml-2 h-5 w-5 transition-transform group-hover:scale-110" />
    </Button>
    <Button 
      size={BUTTON_STYLES.SIZE}
      variant={BUTTON_STYLES.VARIANT}
      className={BUTTON_STYLES.BASE}
      asChild
    >
      <a href="/earn">
        {HERO_CONTENT.CTA_SECONDARY}
        <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
      </a>
    </Button>
  </div>
);

/**
 * Learn page hero section component
 * Provides an engaging introduction to the DeFi learning resources
 */
const LearnHero = () => {
  return (
    <section className="relative py-24 md:py-40 overflow-hidden" role="banner">
      <div className="container relative z-20">
        <div className="text-center space-y-8 animate-fade-in">
          <HeroHeading />
          <HeroDescription />
          <HeroCTAButtons />
        </div>
      </div>
    </section>
  );
};

export default LearnHero;
