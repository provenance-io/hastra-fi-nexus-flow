
const HastraLogo = ({ className = "h-8 w-auto" }: { className?: string }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <svg 
        viewBox="0 0 140 36" 
        className="h-full w-auto"
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Modern geometric logo mark */}
        <g className="fill-current">
          {/* Main hexagon structure */}
          <path 
            d="M18 6L24 10V18L18 22L12 18V10L18 6Z" 
            className="fill-blue-500" 
            opacity="0.8"
          />
          <path 
            d="M18 8L22 11V17L18 20L14 17V11L18 8Z" 
            className="fill-purple-500" 
            opacity="0.6"
          />
          <circle 
            cx="18" 
            cy="14" 
            r="3" 
            className="fill-white"
          />
          <circle 
            cx="18" 
            cy="14" 
            r="1.5" 
            className="fill-blue-600"
          />
          
          {/* Connecting elements */}
          <rect x="6" y="13" width="6" height="2" className="fill-blue-400" opacity="0.7" />
          <rect x="24" y="13" width="6" height="2" className="fill-blue-400" opacity="0.7" />
        </g>
        
        {/* Hastra-Fi text */}
        <text x="40" y="24" className="fill-current text-lg font-bold" fontFamily="system-ui, -apple-system, sans-serif">
          Hastra-Fi
        </text>
      </svg>
    </div>
  );
};

export default HastraLogo;
