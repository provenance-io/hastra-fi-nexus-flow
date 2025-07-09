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
            Powered by
          </span>
          <div className="flex items-center gap-2">
            <img 
              src="/lovable-uploads/30e0a19d-182e-4457-b5e0-58c467109e2f.png" 
              alt="Provenance Blockchain" 
              className="h-6 w-auto"
            />
            <span className="text-base text-muted-foreground font-medium">
              Provenance Blockchain
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProvenanceBranding;