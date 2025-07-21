
const HastraLogo = ({ className = "h-14 md:h-18 lg:h-28 w-auto", white = false }: { className?: string; white?: boolean }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <img 
        src="/lovable-uploads/9c0de370-6aee-4c13-9fc7-8e244a2d12f4.png" 
        alt="Hastra" 
        className={`h-14 md:h-18 lg:h-28 w-auto brightness-110 contrast-110 ${white ? 'filter brightness-0 invert' : ''}`}
        loading="eager"
        decoding="async"
        onError={() => {
          // Silently handle logo load errors - fallback handled by alt text
        }}
      />
    </div>
  );
};

export default HastraLogo;
