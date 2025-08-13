import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Button } from '@/components/ui/button';
import { Settings, Eye, EyeOff } from 'lucide-react';
import { getFeatureFlags, toggleAdminFeature, type FeatureFlags } from '@/utils/featureFlags';

const AdminFeatureToggle = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [features, setFeatures] = useState<FeatureFlags>(getFeatureFlags());

  const handleToggle = (feature: keyof FeatureFlags, enabled: boolean) => {
    toggleAdminFeature(feature, enabled);
    setFeatures(prev => ({ ...prev, [feature]: enabled }));
  };

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  if (!isVisible) {
    return (
      <Button
        onClick={toggleVisibility}
        variant="ghost"
        size="sm"
        className="fixed bottom-4 right-4 z-50 opacity-50 hover:opacity-100"
        title="Show Admin Controls"
      >
        <Settings className="h-4 w-4" />
      </Button>
    );
  }

  return (
    <Card className="fixed bottom-4 right-4 z-50 w-80 shadow-lg">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-sm font-medium flex items-center gap-2">
            <Settings className="h-4 w-4" />
            Admin Controls
          </CardTitle>
          <Button
            onClick={toggleVisibility}
            variant="ghost"
            size="sm"
            className="h-8 w-8 p-0"
          >
            <EyeOff className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <label htmlFor="homes-toggle" className="text-sm font-medium">
            HOMES Page
          </label>
          <Switch
            id="homes-toggle"
            checked={features.homesEnabled}
            onCheckedChange={(enabled) => handleToggle('homesEnabled', enabled)}
          />
        </div>
        
        <div className="text-xs text-muted-foreground">
          <p>Toggle features on/off. Changes are saved to localStorage and require a page refresh.</p>
          <p className="mt-1">URL override: <code>?admin=true&feature=homesEnabled</code></p>
        </div>
      </CardContent>
    </Card>
  );
};

export default AdminFeatureToggle;