import Footer from '@/components/Footer';
import WYLDsHeader from '@/components/wylds/WYLDsHeader';
import WYLDsHero from '@/components/wylds/WYLDsHero';

const WYLDsPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <WYLDsHeader />
      <main className="flex-grow">
        <WYLDsHero />
        {/* Other sections will be added here in next steps */}
      </main>
      <Footer />
    </div>
  );
};

export default WYLDsPage;
