
import { motion } from 'framer-motion';

const ProvenanceBranding = () => {
  return (
    <motion.div 
      className="py-8 text-center bg-background"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="container">
        <div className="flex flex-col items-center justify-center gap-4">
          <span className="text-xl md:text-2xl text-foreground/80 font-medium">
            Built on
          </span>
          <img 
            src="/lovable-uploads/e80568de-0fba-4199-a928-a9d5b3fa9b76.png" 
            alt="Provenance Blockchain" 
            className="h-16 md:h-20 w-auto"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default ProvenanceBranding;
