import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Separator } from '@/components/ui/separator';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Code, Database, Zap, Bug, TestTube, Settings, AlertTriangle, CheckCircle, Globe } from 'lucide-react';
import { useWallet } from '@/contexts/WalletContext';
import { getFeatureFlags, toggleAdminFeature, pageRoutes, type FeatureFlags } from '@/utils/featureFlags';
import FeatureDisabledBanner from '@/components/test/FeatureDisabledBanner';

const TestDebug = () => {
  const { isConnected, address } = useWallet();
  const featureFlags = getFeatureFlags();

  // Check if we're in Lovable preview mode
  const isLovablePreview = window.location.hostname.includes('lovable.app') || 
                          window.location.hostname.includes('lovable.dev') ||
                          window.location.hostname === 'localhost';

  // Get feature states as they would appear in production (without Lovable preview auto-enable)
  const getProductionFeatureState = (feature: keyof FeatureFlags): boolean => {
    // Check localStorage overrides first
    try {
      const adminSettings = localStorage.getItem('admin_feature_flags');
      if (adminSettings) {
        const settings = JSON.parse(adminSettings);
        if (settings[feature] !== undefined) return settings[feature];
      }
    } catch (error) {
      // Ignore localStorage errors
    }

    // Check environment variables (what would be used in production)
    switch (feature) {
      // Core pages - default enabled
      case 'indexEnabled':
        return import.meta.env.VITE_FEATURE_INDEX_ENABLED !== 'false';
      case 'aboutEnabled':
        return import.meta.env.VITE_FEATURE_ABOUT_ENABLED !== 'false';
      case 'learnEnabled':
        return import.meta.env.VITE_FEATURE_LEARN_ENABLED !== 'false';
      case 'earnEnabled':
        return import.meta.env.VITE_FEATURE_EARN_ENABLED !== 'false';
      case 'termsEnabled':
        return import.meta.env.VITE_FEATURE_TERMS_ENABLED !== 'false';
      case 'privacyEnabled':
        return import.meta.env.VITE_FEATURE_PRIVACY_ENABLED !== 'false';
      case 'brandGuideEnabled':
        return import.meta.env.VITE_FEATURE_BRAND_GUIDE_ENABLED !== 'false';
      
      // Product pages 
      case 'wyldsEnabled':
        return import.meta.env.VITE_FEATURE_WYLDS_ENABLED !== 'false';
      case 'syldsEnabled':
        return import.meta.env.VITE_FEATURE_SYLDS_ENABLED !== 'false';
      case 'homesEnabled':
        return import.meta.env.VITE_FEATURE_HOMES_ENABLED === 'true';
      case 'senditEnabled':
        return import.meta.env.VITE_FEATURE_SENDIT_ENABLED !== 'false';
      
      // Development/admin pages - default disabled in production
      case 'testPagesEnabled':
        return import.meta.env.VITE_FEATURE_TEST_PAGES_ENABLED === 'true';
      case 'debugComponentsEnabled':
        return import.meta.env.VITE_FEATURE_DEBUG_COMPONENTS_ENABLED === 'true';
      
      // System features
      case 'ofacCheckEnabled':
        return import.meta.env.VITE_FEATURE_OFAC_ENABLED === 'true';
      
      default:
        return false;
    }
  };

  const handleFeatureToggle = (feature: keyof FeatureFlags, enabled: boolean) => {
    toggleAdminFeature(feature, enabled);
  };

  const shouldShowBanner = isLovablePreview && !getProductionFeatureState('testPagesEnabled');

  const environmentInfo = {
    NODE_ENV: import.meta.env.MODE,
    CLUSTER: import.meta.env.VITE_SOLANA_CLUSTER_NAME,
    RPC_URL: import.meta.env.VITE_SOLANA_RPC_URL,
    TIMESTAMP: new Date().toISOString(),
  };

  const performanceInfo = {
    userAgent: navigator.userAgent,
    language: navigator.language,
    platform: navigator.platform,
    cookieEnabled: navigator.cookieEnabled,
    onLine: navigator.onLine,
  };

  return (
    <div className="min-h-screen bg-background">
      {shouldShowBanner && (
        <>
          <FeatureDisabledBanner 
            featureName="testPagesEnabled" 
            displayName="Test Debug" 
          />
          <div className="h-[52px]" />
        </>
      )}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto space-y-6">
          {/* Header */}
          <div className="text-center space-y-2">
            <h1 className="text-4xl font-bold flex items-center justify-center gap-2">
              <TestTube className="h-8 w-8 text-primary" />
              Test & Debug Console
            </h1>
            <p className="text-muted-foreground">Development and testing utilities</p>
            <Badge variant="secondary" className="text-xs">
              Environment: {environmentInfo.NODE_ENV}
            </Badge>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Wallet Status */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Database className="h-5 w-5" />
                  Wallet Status
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span>Connected:</span>
                  <Badge variant={isConnected ? "default" : "secondary"}>
                    {isConnected ? "Yes" : "No"}
                  </Badge>
                </div>
                {address && (
                  <div className="flex justify-between">
                    <span>Address:</span>
                    <code className="text-xs bg-muted px-2 py-1 rounded">
                      {address.slice(0, 8)}...{address.slice(-8)}
                    </code>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Page Visibility Control */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Globe className="h-5 w-5" />
                  Page Visibility Control
                </CardTitle>
                {isLovablePreview && (
                  <p className="text-sm text-muted-foreground">
                    Control which pages are visible in test/production environments
                  </p>
                )}
              </CardHeader>
              <CardContent className="space-y-4">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Page</TableHead>
                      <TableHead>URL</TableHead>
                      <TableHead className="text-center">Production Status</TableHead>
                      {isLovablePreview && <TableHead className="text-center">Control</TableHead>}
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {Object.entries(pageRoutes).map(([featureKey, { path, name }]) => {
                      const productionState = getProductionFeatureState(featureKey as keyof FeatureFlags);
                      
                      return (
                        <TableRow key={featureKey}>
                          <TableCell className="font-medium">{name}</TableCell>
                          <TableCell>
                            <code className="text-xs bg-muted px-2 py-1 rounded">{path}</code>
                          </TableCell>
                          <TableCell className="text-center">
                            <Badge 
                              variant={productionState ? "default" : "destructive"}
                              className="text-xs"
                            >
                              {productionState ? "Visible" : "Hidden"}
                            </Badge>
                          </TableCell>
                          {isLovablePreview && (
                            <TableCell className="text-center">
                              <Switch
                                checked={productionState}
                                onCheckedChange={(enabled) => handleFeatureToggle(featureKey as keyof FeatureFlags, enabled)}
                              />
                            </TableCell>
                          )}
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
                
                {isLovablePreview && (
                  <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-950/20 rounded border border-blue-200 dark:border-blue-800">
                    <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 text-sm">
                      <CheckCircle className="h-4 w-4" />
                      <strong>Lovable Preview Mode Active</strong>
                    </div>
                    <p className="text-blue-600 dark:text-blue-400 text-sm mt-1">
                      All pages are visible in preview mode. Hidden pages will show a red banner when disabled in production.
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* System Feature Flags */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Settings className="h-5 w-5" />
                  System Features
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">OFAC Compliance Check:</span>
                    <div className="flex items-center gap-2">
                      <Badge 
                        variant={getProductionFeatureState('ofacCheckEnabled') ? "default" : "destructive"}
                        className="text-xs"
                      >
                        {getProductionFeatureState('ofacCheckEnabled') ? "Enabled" : "Disabled"}
                      </Badge>
                    </div>
                  </div>
                  
                  {isLovablePreview && (
                    <div className="flex items-center justify-between bg-muted/50 p-2 rounded">
                      <span className="text-sm">Enable OFAC checks:</span>
                      <Switch
                        checked={getProductionFeatureState('ofacCheckEnabled')}
                        onCheckedChange={(enabled) => handleFeatureToggle('ofacCheckEnabled', enabled)}
                      />
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Environment Variables */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code className="h-5 w-5" />
                  Environment Info
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {Object.entries(environmentInfo).map(([key, value]) => (
                  <div key={key} className="space-y-1">
                    <div className="flex justify-between items-start">
                      <span className="font-medium">{key}:</span>
                      <code className="text-xs bg-muted px-2 py-1 rounded max-w-xs break-all">
                        {value || 'undefined'}
                      </code>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Browser Info */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bug className="h-5 w-5" />
                  Browser Info
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {Object.entries(performanceInfo).map(([key, value]) => (
                  <div key={key} className="space-y-1">
                    <div className="flex justify-between items-start">
                      <span className="font-medium">{key}:</span>
                      <span className="text-xs max-w-xs break-all text-right">
                        {typeof value === 'boolean' ? (value ? 'Yes' : 'No') : value}
                      </span>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="h-5 w-5" />
                Quick Actions
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Button 
                  onClick={() => localStorage.clear()} 
                  variant="outline"
                  className="flex items-center gap-2"
                >
                  <Database className="h-4 w-4" />
                  Clear LocalStorage
                </Button>
                <Button 
                  onClick={() => window.location.reload()} 
                  variant="outline"
                  className="flex items-center gap-2"
                >
                  <Zap className="h-4 w-4" />
                  Force Reload
                </Button>
                <Button 
                  onClick={() => console.clear()} 
                  variant="outline"
                  className="flex items-center gap-2"
                >
                  <Code className="h-4 w-4" />
                  Clear Console
                </Button>
              </div>
              
              <Separator />
              
              <div className="text-sm text-muted-foreground">
                <p className="font-medium mb-2">Test URLs:</p>
                <div className="space-y-1">
                  <code className="block bg-muted px-2 py-1 rounded text-xs">
                    ?admin=true&feature=homesEnabled - Enable HOMES
                  </code>
                  <code className="block bg-muted px-2 py-1 rounded text-xs">
                    ?admin=true&feature=testPagesEnabled - Enable Test Pages
                  </code>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default TestDebug;