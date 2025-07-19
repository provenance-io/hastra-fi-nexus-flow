const FooterLogo = ({ className = "h-14 md:h-12 lg:h-16 w-auto" }: { className?: string }) => {
  return (
    <div className="flex items-center">
      <img 
        src="/lovable-uploads/4a374512-469e-4932-9bfc-215e5dd3591d.png" 
        alt="Hastra" 
        className={`brightness-110 contrast-110 ${className}`}
        loading="eager"
        decoding="async"
        onError={(e) => {
          console.error('Footer logo failed to load:', e);
        }}
      />
    </div>
  );
};

export default FooterLogo;