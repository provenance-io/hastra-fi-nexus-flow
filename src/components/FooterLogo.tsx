const FooterLogo = ({ className = "h-24 w-auto" }: { className?: string }) => {
  return (
    <div className={`flex items-start ${className}`}>
      <img 
        src="/lovable-uploads/4a374512-469e-4932-9bfc-215e5dd3591d.png" 
        alt="Hastra" 
        className="h-24 w-auto brightness-110 contrast-110"
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