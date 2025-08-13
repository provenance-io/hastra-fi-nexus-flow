import React, { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

interface CountdownTimerProps {
  targetDate: Date;
  className?: string;
  onComplete?: () => void;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ 
  targetDate, 
  className = '', 
  onComplete 
}) => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const target = targetDate.getTime();
      const difference = target - now;

      if (difference <= 0) {
        setIsComplete(true);
        onComplete?.();
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      }

      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      };
    };

    const timer = setInterval(() => {
      const newTimeLeft = calculateTimeLeft();
      setTimeLeft(newTimeLeft);
    }, 1000);

    // Initial calculation
    const initialTimeLeft = calculateTimeLeft();
    setTimeLeft(initialTimeLeft);

    return () => clearInterval(timer);
  }, [targetDate, onComplete]);

  if (isComplete) {
    return (
      <div className={`flex items-center gap-2 text-green-500 ${className}`}>
        <Clock className="h-4 w-4" />
        <span className="text-sm font-medium">Ready to Claim!</span>
      </div>
    );
  }

  const { days, hours, minutes, seconds } = timeLeft;

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <Clock className="h-4 w-4 text-auburn-primary" />
      <div className="flex items-center gap-1 text-sm font-mono">
        {days > 0 && (
          <>
            <span className="bg-auburn-primary/10 px-2 py-1 rounded text-auburn-primary font-semibold">
              {days}d
            </span>
            <span className="text-muted-foreground">:</span>
          </>
        )}
        <span className="bg-auburn-primary/10 px-2 py-1 rounded text-auburn-primary font-semibold">
          {hours.toString().padStart(2, '0')}h
        </span>
        <span className="text-muted-foreground">:</span>
        <span className="bg-auburn-primary/10 px-2 py-1 rounded text-auburn-primary font-semibold">
          {minutes.toString().padStart(2, '0')}m
        </span>
        <span className="text-muted-foreground">:</span>
        <span className="bg-auburn-primary/10 px-2 py-1 rounded text-auburn-primary font-semibold">
          {seconds.toString().padStart(2, '0')}s
        </span>
      </div>
    </div>
  );
};

export default CountdownTimer;