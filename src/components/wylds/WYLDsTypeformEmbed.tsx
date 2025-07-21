
import { Widget } from '@typeform/embed-react';

const WYLDsTypeformEmbed = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-5xl mx-auto px-4">
        {/* Text moved outside of card */}
        <div className="mb-8 text-center">
          <p className="max-w-3xl mx-auto text-lg md:text-xl lg:text-2xl text-platinum/80 leading-relaxed" 
             style={{ 
               textShadow: '0 0 10px rgba(255, 255, 255, 0.3), 0 0 20px rgba(255, 255, 255, 0.1)' 
             }}>
            Want to bring YIELD to your platform or chain? Fill out our form to get started.
          </p>
        </div>
        
        {/* Form card without the text */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
          <Widget id="HetEUZ6j" style={{ width: '100%', height: '800px' }} />
        </div>
      </div>
    </section>
  );
};

export default WYLDsTypeformEmbed;
