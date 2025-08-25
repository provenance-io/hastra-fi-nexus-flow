import { Badge } from '@/components/ui/badge';
import { TestTube } from 'lucide-react';
import { isFeatureEnabled } from '@/utils/featureFlags';

interface TestOnlyBadgeProps {
  className?: string;
}

const TestOnlyBadge = ({ className }: TestOnlyBadgeProps) => {
  if (!isFeatureEnabled('debugComponentsEnabled')) {
    return null;
  }

  return (
    <Badge 
      variant="outline" 
      className={`fixed top-4 left-4 z-50 bg-orange-500/10 border-orange-500/20 text-orange-600 ${className}`}
    >
      <TestTube className="h-3 w-3 mr-1" />
      TEST MODE
    </Badge>
  );
};

export default TestOnlyBadge;