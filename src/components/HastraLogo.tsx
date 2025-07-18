
const HastraLogo = ({ className = "h-20 w-auto" }: { className?: string }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <img 
        src="/lovable-uploads/9c0de370-6aee-4c13-9fc7-8e244a2d12f4.png" 
        alt="Hastra" 
        className="h-20 w-auto brightness-110 contrast-110"
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
