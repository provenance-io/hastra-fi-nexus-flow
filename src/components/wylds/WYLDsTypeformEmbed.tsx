
import { Widget } from '@typeform/embed-react';

const WYLDsTypeformEmbed = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground/90 mb-4">
            Partner with YIELD
          </h2>
          <p className="text-lg text-platinum/80">
            Want to bring YIELD to your platform or chain? Fill out our form to get started.
          </p>
        </div>
        
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
          <Widget id="HetEUZ6j" style={{ width: '100%', height: '800px' }} />
        </div>
      </div>
    </section>
  );
};

export default WYLDsTypeformEmbed;
