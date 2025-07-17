
import { motion } from 'framer-motion';

const ProvenanceBranding = () => {
  return (
    <motion.div 
      className="py-8 text-center border-t border-border/20"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="container">
        <div className="flex items-center justify-center gap-3">
          <span className="text-xl md:text-2xl text-muted-foreground font-medium flex items-center gap-3">
            Built on
            <img 
              src="/lovable-uploads/e80568de-0fba-4199-a928-a9d5b3fa9b76.png" 
              alt="Provenance Blockchain" 
              className="h-8 md:h-10 w-auto"
            />
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default ProvenanceBranding;
