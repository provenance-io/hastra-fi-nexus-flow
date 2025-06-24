
const HastraLogo = ({ className = "h-8 w-auto" }: { className?: string }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <svg 
        viewBox="0 0 120 32" 
        className="h-full w-auto"
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Geometric H symbol */}
        <g className="fill-current">
          <rect x="2" y="4" width="3" height="24" className="fill-blue-500" />
          <rect x="15" y="4" width="3" height="24" className="fill-blue-500" />
          <rect x="2" y="14" width="16" height="3" className="fill-gradient-to-r from-blue-500 to-purple-500" />
          <circle cx="10" cy="15.5" r="2" className="fill-purple-500" />
        </g>
        
        {/* Hastra-Fi text */}
        <text x="28" y="22" className="fill-current text-sm font-bold" fontFamily="system-ui">
          Hastra-Fi
        </text>
      </svg>
    </div>
  );
};

export default HastraLogo;
