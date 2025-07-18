
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowUpRight } from 'lucide-react';
import { ReactNode } from 'react';

interface ActionCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  action: () => void;
  variant: 'primary' | 'secondary';
  isLoading?: boolean;
}

const ActionCard = ({ 
  title, 
  description, 
  icon, 
  action, 
  variant, 
  isLoading = false 
}: ActionCardProps) => {
  const isPrimary = variant === 'primary';

  return (
    <Card className={`
      ${isPrimary ? 'glass-hastra' : 'glass-premium'} 
      hover:scale-105 transition-all duration-300 cursor-pointer group
      ${isPrimary ? 'hover:shadow-hastra-lg' : 'hover:shadow-premium-lg'}
    `}>
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div className={`
            w-12 h-12 rounded-xl flex items-center justify-center
            ${isPrimary ? 'bg-hastra-teal/20 text-hastra-teal' : 'bg-electric-blue/20 text-electric-blue'}
          `}>
            {icon}
          </div>
          <ArrowUpRight className={`
            w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1
            ${isPrimary ? 'text-hastra-teal' : 'text-electric-blue'}
          `} />
        </div>
        
        <CardTitle className="text-lg text-foreground">{title}</CardTitle>
      </CardHeader>
      
      <CardContent>
        <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
          {description}
        </p>
        
        <Button
          onClick={action}
          disabled={isLoading}
          className={`
            w-full font-medium transition-all duration-300
            ${isPrimary 
              ? 'btn-hastra focus:ring-hastra-teal' 
              : 'btn-premium focus:ring-electric-blue'
            }
          `}
          size="sm"
        >
          {isLoading ? (
            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
          ) : null}
          {isLoading ? 'Loading...' : 'Get Started'}
        </Button>
      </CardContent>
    </Card>
  );
};

export default ActionCard;
