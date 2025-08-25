import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Code, Database, Zap, Bug, TestTube, Settings } from 'lucide-react';
import { useWallet } from '@/contexts/WalletContext';
import { getFeatureFlags } from '@/utils/featureFlags';

const TestDebug = () => {
  const { isConnected, address } = useWallet();
  const featureFlags = getFeatureFlags();

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

            {/* Feature Flags */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Settings className="h-5 w-5" />
                  Feature Flags
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {Object.entries(featureFlags).map(([key, value]) => (
                  <div key={key} className="flex justify-between">
                    <span className="capitalize">{key.replace('Enabled', '')}:</span>
                    <Badge variant={value ? "default" : "secondary"}>
                      {value ? "Enabled" : "Disabled"}
                    </Badge>
                  </div>
                ))}
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