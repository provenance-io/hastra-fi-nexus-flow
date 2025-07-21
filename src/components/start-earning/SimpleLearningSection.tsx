
import { Button } from '@/components/ui/button';
import { TrendingUp } from 'lucide-react';
import { LEARNING_AREAS, LEARNING_SECTION_CONTENT } from '@/data/learningContent';
import { SECTION_IDS } from '@/constants/sections';
import LearningCard from './LearningCard';

/**
 * Section header component for learning resources
 */
const SectionHeader = () => (
  <div className="text-center mb-16 animate-fade-in">
    <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-6">
      <span className="text-gradient">{LEARNING_SECTION_CONTENT.TITLE}</span>
    </h2>
    <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
      {LEARNING_SECTION_CONTENT.SUBTITLE}
    </p>
  </div>
);

/**
 * Learning areas grid component
 */
const LearningAreasGrid = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {LEARNING_AREAS.map((area, index) => (
      <LearningCard key={area.title} area={area} index={index} />
    ))}
  </div>
);

/**
 * Call-to-action section at the bottom of the learning section
 */
const QuickStartCTA = () => (
  <div className="text-center mt-16 animate-fade-in">
    <p className="text-lg text-muted-foreground mb-6">
      {LEARNING_SECTION_CONTENT.CTA_TEXT}
    </p>
    <Button 
      size="lg" 
      variant="secondary"
      className="min-w-[200px] group"
      asChild
    >
      <a href="/earn">
        {LEARNING_SECTION_CONTENT.CTA_BUTTON}
        <TrendingUp className="ml-2 h-5 w-5 transition-transform group-hover:scale-110" />
      </a>
    </Button>
  </div>
);

/**
 * Simple learning section component
 * Displays learning areas in an organized grid with clear navigation
 */
const SimpleLearningSection = () => {
  return (
    <section 
      id={SECTION_IDS.LEARNING} 
      data-section={SECTION_IDS.LEARNING} 
      className="py-20 md:py-32 relative"
    >
      <div className="container">
        <SectionHeader />
        <LearningAreasGrid />
        <QuickStartCTA />
      </div>
    </section>
  );
};

export default SimpleLearningSection;
