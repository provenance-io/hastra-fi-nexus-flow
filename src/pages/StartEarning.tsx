import EnhancedStartEarningHero from '@/components/start-earning/EnhancedStartEarningHero';
import VideoLibrarySection from '@/components/start-earning/VideoLibrarySection';
import InteractiveGuidesSection from '@/components/start-earning/InteractiveGuidesSection';
import BuyTokensSection from '@/components/start-earning/BuyTokensSection';
import PlatformsSection from '@/components/start-earning/PlatformsSection';

const StartEarning = () => {
  return (
    <>
      <EnhancedStartEarningHero />
      <VideoLibrarySection />
      <InteractiveGuidesSection />
      <BuyTokensSection />
      <PlatformsSection />
    </>
  );
};

export default StartEarning;