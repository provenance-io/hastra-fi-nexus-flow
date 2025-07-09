import { portfolioCards } from '@/data/homesPortfolioData';
import HOMESPortfolioCard from './HOMESPortfolioCard';
import HOMESPortfolioFooter from './HOMESPortfolioFooter';

const HOMESPortfolio = () => {
  return (
    <section className="py-20 md:py-32 bg-muted/30" id="homes-actions">
      <div className="container">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Manage Your HOMES Investment
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Purchase tokens, redeem yields, and manage your portfolio seamlessly.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioCards.map((card) => (
            <HOMESPortfolioCard key={card.id} card={card} />
          ))}
        </div>

        <HOMESPortfolioFooter />
      </div>
    </section>
  );
};

export default HOMESPortfolio;