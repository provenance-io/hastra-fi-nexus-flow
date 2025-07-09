
const HastraLogo = ({ className = "h-12 w-auto" }: { className?: string }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <img 
        src="/lovable-uploads/816c9d6f-06d2-4d21-98e1-c69d43257012.png" 
        alt="Hastra" 
        className="h-12 w-auto brightness-110 contrast-110"
        loading="eager"
        decoding="async"
        onError={(e) => {
          console.error('Logo failed to load:', e);
        }}
      />
    </div>
  );
};

export default HastraLogo;
