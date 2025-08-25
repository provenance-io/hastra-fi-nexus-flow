import { AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toggleAdminFeature, type FeatureFlags } from '@/utils/featureFlags';

interface FeatureDisabledBannerProps {
  featureName: keyof FeatureFlags;
  displayName: string;
}

const FeatureDisabledBanner = ({ featureName, displayName }: FeatureDisabledBannerProps) => {
  const handleEnable = () => {
    toggleAdminFeature(featureName, true);
  };

  return (
    <div className="bg-destructive text-destructive-foreground px-4 py-3 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <AlertTriangle className="h-4 w-4" />
        <span className="text-sm font-medium">
          {displayName} is only enabled in Lovable preview mode
        </span>
      </div>
      <Button
        onClick={handleEnable}
        variant="secondary"
        size="sm"
        className="bg-destructive-foreground text-destructive hover:bg-destructive-foreground/90"
      >
        Enable in Test/Production
      </Button>
    </div>
  );
};

export default FeatureDisabledBanner;