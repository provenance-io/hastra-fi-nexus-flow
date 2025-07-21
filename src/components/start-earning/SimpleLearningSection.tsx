
import { Button } from '@/components/ui/button';
import { ArrowLeft, TrendingUp } from 'lucide-react';
import { LEARNING_CATEGORIES } from '@/data/learningCategories';
import { LEARNING_SECTION_CONTENT, ANIMATION_DELAY_MULTIPLIER } from '@/constants/learning';
import { SECTION_IDS } from '@/constants/sections';
import { useLearningState } from '@/hooks/useLearningState';
import CategoryCard from './CategoryCard';
import TrackCard from './TrackCard';
import DefiBasiscsModal from './modals/DefiBasiscsModal';
import MasteringDefiModal from './modals/MasteringDefiModal';
import HastraForDummiesModal from './modals/HastraForDummiesModal';
import BlockchainFundamentalsModal from './modals/BlockchainFundamentalsModal';


/**
 * Categories grid component
 */
const CategoriesGrid = ({ onCategoryClick }: { onCategoryClick: (categoryId: string) => void }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {LEARNING_CATEGORIES.map((category, index) => (
      <CategoryCard 
        key={category.id} 
        category={category} 
        index={index} 
        onClick={onCategoryClick} 
      />
    ))}
  </div>
);

/**
 * Tracks grid component for selected category
 */
const TracksGrid = ({ 
  categoryId, 
  onTrackClick, 
  onBackClick 
}: { 
  categoryId: string; 
  onTrackClick: (title: string) => void;
  onBackClick: () => void;
}) => {
  const selectedCategory = LEARNING_CATEGORIES.find(cat => cat.id === categoryId);
  
  if (!selectedCategory) return null;

  return (
    <div className="space-y-8">
      {/* Back Button and Category Header */}
      <div className="space-y-4">
        <Button 
          variant="ghost" 
          onClick={onBackClick}
          className="group flex items-center gap-2 text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          Back to Categories
        </Button>
        
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-6xl font-black tracking-tight">
            <span className="text-gradient">{selectedCategory.title} Learning Tracks</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {selectedCategory.description}
          </p>
        </div>
      </div>

      {/* Tracks Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {selectedCategory.tracks.map((track, index) => (
          <TrackCard 
            key={track.title} 
            track={track} 
            index={index} 
            onTrackClick={onTrackClick}
          />
        ))}
      </div>
    </div>
  );
};

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
 * Simple learning section component with category and track state management
 * Displays learning categories and tracks with detailed modals
 */
const SimpleLearningSection = () => {
  const {
    selectedCategory,
    activeModal,
    handleCategoryClick,
    handleTrackClick,
    handleBackClick,
    handleCloseModal,
  } = useLearningState();

  return (
    <>
      <section 
        id={SECTION_IDS.LEARNING} 
        data-section={SECTION_IDS.LEARNING} 
        className="py-20 md:py-32 relative"
      >
        <div className="container">
          {!selectedCategory ? (
            // Category Selection View
            <div className="space-y-16">
              <div className="text-center animate-fade-in">
                <p className="max-w-3xl mx-auto text-lg md:text-xl lg:text-2xl text-platinum/80 leading-relaxed mb-6" 
                   style={{ 
                     textShadow: '0 0 10px rgba(255, 255, 255, 0.3), 0 0 20px rgba(255, 255, 255, 0.1)' 
                   }}>
                  {LEARNING_SECTION_CONTENT.TITLE}
                </p>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  {LEARNING_SECTION_CONTENT.SUBTITLE}
                </p>
              </div>
              <CategoriesGrid onCategoryClick={handleCategoryClick} />
              <QuickStartCTA />
            </div>
          ) : (
            // Tracks View for Selected Category
            <TracksGrid 
              categoryId={selectedCategory}
              onTrackClick={handleTrackClick}
              onBackClick={handleBackClick}
            />
          )}
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
      <BlockchainFundamentalsModal 
        isOpen={activeModal === 'Blockchain Fundamentals'} 
        onClose={handleCloseModal} 
      />
    </>
  );
};

export default SimpleLearningSection;
