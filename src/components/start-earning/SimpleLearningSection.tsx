
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { TrendingUp } from 'lucide-react';
import { LEARNING_AREAS, LEARNING_SECTION_CONTENT } from '@/data/learningContent';
import { SECTION_IDS } from '@/constants/sections';
import LearningCard from './LearningCard';
import DefiBasiscsModal from './modals/DefiBasiscsModal';
import MasteringDefiModal from './modals/MasteringDefiModal';
import HastraForDummiesModal from './modals/HastraForDummiesModal';

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
 * Learning areas grid component with modal functionality
 */
const LearningAreasGrid = ({ onCardClick }: { onCardClick: (title: string) => void }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {LEARNING_AREAS.map((area, index) => (
      <div key={area.title} onClick={() => onCardClick(area.title)} className="cursor-pointer">
        <LearningCard area={area} index={index} />
      </div>
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
 * Simple learning section component with modal state management
 * Displays learning areas in an organized grid with detailed modals
 */
const SimpleLearningSection = () => {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const handleCardClick = (title: string) => {
    setActiveModal(title);
  };

  const handleCloseModal = () => {
    setActiveModal(null);
  };

  return (
    <>
      <section 
        id={SECTION_IDS.LEARNING} 
        data-section={SECTION_IDS.LEARNING} 
        className="py-20 md:py-32 relative"
      >
        <div className="container">
          <SectionHeader />
          <LearningAreasGrid onCardClick={handleCardClick} />
          <QuickStartCTA />
        </div>
      </section>

      {/* Modals */}
      <DefiBasiscsModal 
        isOpen={activeModal === 'DeFi Basics'} 
        onClose={handleCloseModal} 
      />
      <MasteringDefiModal 
        isOpen={activeModal === 'Mastering DeFi'} 
        onClose={handleCloseModal} 
      />
      <HastraForDummiesModal 
        isOpen={activeModal === 'Hastra for Dummies'} 
        onClose={handleCloseModal} 
      />
    </>
  );
};

export default SimpleLearningSection;
