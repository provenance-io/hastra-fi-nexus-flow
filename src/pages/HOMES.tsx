import HOMESHero from '@/components/homes/HOMESHero';
import HOMESAbout from '@/components/homes/HOMESAbout';
import HOMESPortfolio from '@/components/homes/HOMESPortfolio';
import HOMESPoolComposition from '@/components/homes/HOMESPoolComposition';
import HOMESFAQ from '@/components/homes/HOMESFAQ';

const HOMESPage = () => {
  return (
    <>
      <HOMESHero />
      <HOMESAbout />
      <HOMESPortfolio />
      <HOMESPoolComposition />
      <HOMESFAQ />
    </>
  );
};

export default HOMESPage;