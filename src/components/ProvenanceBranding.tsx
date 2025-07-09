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
          <span className="text-base text-muted-foreground font-medium">
            Powered by Provenance Blockchain
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default ProvenanceBranding;