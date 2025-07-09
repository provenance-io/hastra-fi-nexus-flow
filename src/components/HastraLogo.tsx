
const HastraLogo = ({ className = "h-8 w-auto" }: { className?: string }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <img 
        src="/lovable-uploads/816c9d6f-06d2-4d21-98e1-c69d43257012.png" 
        alt="Hastra" 
        className="h-8 w-auto brightness-110 contrast-110"
      />
    </div>
  );
};

export default HastraLogo;
