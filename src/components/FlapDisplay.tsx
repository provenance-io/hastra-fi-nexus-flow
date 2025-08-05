import { useEffect, useState } from "react";

interface FlapDisplayProps {
  value: number;
  digits?: number;
}

const FlapDisplay = ({ value, digits = 6 }: FlapDisplayProps) => {
  const [displayValue, setDisplayValue] = useState(value);
  const [animatingDigits, setAnimatingDigits] = useState<number[]>([]);

  useEffect(() => {
    if (value !== displayValue) {
      // Determine which digits are changing
      const oldStr = displayValue.toString().padStart(digits, '0');
      const newStr = value.toString().padStart(digits, '0');
      const changing: number[] = [];
      
      for (let i = 0; i < digits; i++) {
        if (oldStr[i] !== newStr[i]) {
          changing.push(i);
        }
      }
      
      setAnimatingDigits(changing);
      
      // Animate the change
      setTimeout(() => {
        setDisplayValue(value);
        setTimeout(() => setAnimatingDigits([]), 300);
      }, 100);
    }
  }, [value, displayValue, digits]);

  const formatNumber = (num: number) => {
    return num.toString().padStart(digits, '0');
  };

  return (
    <div className="flex items-center justify-center gap-1 p-4 bg-gradient-to-b from-gray-800 via-gray-900 to-black rounded-lg border-2 border-gray-600 shadow-2xl">
      <div className="flex gap-0.5">
        {formatNumber(displayValue).split('').map((digit, index) => (
          <div
            key={index}
            className={`
              relative w-8 h-12 bg-gradient-to-b from-gray-100 via-white to-gray-200 
              border border-gray-400 rounded-sm shadow-inner
              flex items-center justify-center
              transition-all duration-300 ease-out
              ${animatingDigits.includes(index) ? 'animate-pulse scale-105' : ''}
            `}
          >
            {/* Top flap */}
            <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-gray-200 to-gray-300 border-b border-gray-400 rounded-t-sm"></div>
            
            {/* Bottom flap */}
            <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-b from-gray-300 to-gray-100 rounded-b-sm"></div>
            
            {/* Center line */}
            <div className="absolute top-1/2 left-0 right-0 h-px bg-gray-600 transform -translate-y-px"></div>
            
            {/* Digit */}
            <span className={`
              relative z-10 text-2xl font-mono font-bold text-gray-900 
              transition-all duration-200
              ${animatingDigits.includes(index) ? 'scale-110' : ''}
            `}>
              {digit}
            </span>
            
            {/* Flap animation overlay */}
            {animatingDigits.includes(index) && (
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/20 to-transparent animate-pulse rounded-sm"></div>
            )}
          </div>
        ))}
      </div>
      
      {/* Display label */}
      <div className="ml-3 text-gray-300">
        <div className="text-xs font-mono uppercase tracking-wider">Total</div>
        <div className="text-xs font-mono uppercase tracking-wider">Sends</div>
      </div>
    </div>
  );
};

export default FlapDisplay;