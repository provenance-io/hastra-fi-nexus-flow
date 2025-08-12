import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { TrendingUp, TrendingDown, Minus, Info } from 'lucide-react';
import { formatPercentage } from '@/utils/stakingUtils';

interface APRDisplayProps {
  currentAPR: string;
  aprTrend: 'up' | 'down' | 'stable';
  dataSource: string;
  tooltipContent: string;
}

const APRDisplay: React.FC<APRDisplayProps> = ({
  currentAPR,
  aprTrend,
  dataSource,
  tooltipContent,
}) => {
  const getTrendIcon = () => {
    switch (aprTrend) {
      case 'up':
        return <TrendingUp className="h-3 w-3 text-green-500" />;
      case 'down':
        return <TrendingDown className="h-3 w-3 text-red-500" />;
      default:
        return <Minus className="h-3 w-3 text-muted-foreground" />;
    }
  };

  const getTrendColor = () => {
    switch (aprTrend) {
      case 'up':
        return 'text-green-500';
      case 'down':
        return 'text-red-500';
      default:
        return 'text-muted-foreground';
    }
  };

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <div className="flex items-center space-x-2 cursor-help">
            <Badge 
              variant="secondary" 
              className="bg-amber-warm/10 border-amber-warm/20 text-amber-warm hover:bg-amber-warm/20 px-3 py-1"
            >
              <div className="flex items-center space-x-1">
                <span className="font-semibold">
                  {formatPercentage(currentAPR)} APR
                </span>
                {getTrendIcon()}
              </div>
            </Badge>
            <Info className="h-4 w-4 text-muted-foreground" />
          </div>
        </TooltipTrigger>
        <TooltipContent className="max-w-xs">
          <div className="space-y-2">
            <p className="font-medium">{tooltipContent}</p>
            <p className="text-xs text-muted-foreground">{dataSource}</p>
          </div>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default APRDisplay;