import React, { useState, useEffect, useRef } from 'react';

interface DynamicConnectingLinesProps {
  connections: Array<{
    from: string;
    to: string;
    visible: boolean;
    delay?: number;
  }>;
}

interface LinePosition {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  length: number;
  angle: number;
}

const DynamicConnectingLines: React.FC<DynamicConnectingLinesProps> = ({
  connections,
}) => {
  const [linePositions, setLinePositions] = useState<{ [key: string]: LinePosition }>({});
  const containerRef = useRef<HTMLDivElement>(null);

  const calculateLinePosition = (fromId: string, toId: string, connectionIndex: number): LinePosition | null => {
    const fromElement = document.getElementById(fromId);
    const toElement = document.getElementById(toId);
    
    if (!fromElement || !toElement || !containerRef.current) {
      return null;
    }

    const containerRect = containerRef.current.getBoundingClientRect();
    const fromRect = fromElement.getBoundingClientRect();
    const toRect = toElement.getBoundingClientRect();

    // Determine connection points based on alternating pattern: left, right, center
    const pattern = connectionIndex % 3;
    let fromX, toX;
    
    switch (pattern) {
      case 0: // Left side
        fromX = fromRect.left + 20 - containerRect.left;
        toX = toRect.left + 20 - containerRect.left;
        break;
      case 1: // Right side
        fromX = fromRect.right - 20 - containerRect.left;
        toX = toRect.right - 20 - containerRect.left;
        break;
      case 2: // Center
      default:
        fromX = fromRect.left + fromRect.width / 2 - containerRect.left;
        toX = toRect.left + toRect.width / 2 - containerRect.left;
        break;
    }

    const x1 = fromX;
    const y1 = fromRect.bottom - containerRect.top;
    const x2 = toX;
    const y2 = toRect.top - containerRect.top;

    const length = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    const angle = Math.atan2(y2 - y1, x2 - x1) * (180 / Math.PI);

    return { x1, y1, x2, y2, length, angle };
  };

  const updatePositions = () => {
    const newPositions: { [key: string]: LinePosition } = {};
    
    connections.forEach(({ from, to }, index) => {
      const key = `${from}-${to}`;
      const position = calculateLinePosition(from, to, index);
      if (position) {
        newPositions[key] = position;
      }
    });
    
    setLinePositions(newPositions);
  };

  useEffect(() => {
    // Initial calculation
    const timer = setTimeout(updatePositions, 100);
    
    // Update on resize
    const handleResize = () => {
      updatePositions();
    };
    
    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', updatePositions);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', updatePositions);
    };
  }, [connections]);

  // Recalculate when connections change
  useEffect(() => {
    updatePositions();
  }, [connections]);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-40"
      style={{ position: 'absolute' }}
    >
      {connections.map(({ from, to, visible, delay = 0 }) => {
        const key = `${from}-${to}`;
        const position = linePositions[key];
        
        if (!position) return null;
        
        return (
          <div
            key={key}
            className={`absolute transition-all duration-1000 ease-out ${
              visible ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0'
            }`}
            style={{
              left: `${position.x1}px`,
              top: `${position.y1}px`,
              width: `${position.length}px`,
              height: '2px',
              background: 'rgba(229, 218, 194, 0.8)',
              transformOrigin: 'left center',
              transform: `rotate(${position.angle}deg)`,
              boxShadow: '0 0 12px rgba(229, 218, 194, 0.6), 0 0 6px rgba(229, 218, 194, 0.4)',
              transitionDelay: `${delay}ms`,
            }}
          />
        );
      })}
    </div>
  );
};

export default DynamicConnectingLines;