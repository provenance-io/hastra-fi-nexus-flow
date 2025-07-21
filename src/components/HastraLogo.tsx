
const HastraLogo = ({ className = "h-14 md:h-18 lg:h-28 w-auto", white = false }: { className?: string; white?: boolean }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <img 
        src="/lovable-uploads/19ede298-00c0-4c17-b8ad-18366183aecc.png" 
        alt="Hastra" 
        className={`h-14 md:h-18 lg:h-28 w-auto ${white ? 'filter brightness-0 invert' : ''}`}
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
