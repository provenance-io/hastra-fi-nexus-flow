import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { Slider } from '@/components/ui/slider';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Separator } from '@/components/ui/separator';
import { Palette, Play, Code2, Zap, TestTube2 } from 'lucide-react';
import { toast } from 'sonner';
import { isFeatureEnabled } from '@/utils/featureFlags';
import FeatureDisabledBanner from '@/components/test/FeatureDisabledBanner';

const ComponentPlayground = () => {
  const [sliderValue, setSliderValue] = useState([50]);
  const [switchValue, setSwitchValue] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [progressValue, setProgressValue] = useState(33);

  const buttonVariants = ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link'];
  const badgeVariants = ['default', 'secondary', 'destructive', 'outline'];
  
  const testToast = (type: string) => {
    switch (type) {
      case 'success':
        toast.success('Success toast!', { description: 'This is a success message.' });
        break;
      case 'error':
        toast.error('Error toast!', { description: 'This is an error message.' });
        break;
      case 'info':
        toast.info('Info toast!', { description: 'This is an info message.' });
        break;
      default:
        toast('Default toast!', { description: 'This is a default message.' });
    }
  };

  // Check if we're in Lovable preview mode
  const isLovablePreview = window.location.hostname.includes('lovable.app') || 
                          window.location.hostname.includes('lovable.dev') ||
                          window.location.hostname === 'localhost';

  // Check production feature state
  const getProductionFeatureState = (): boolean => {
    try {
      const adminSettings = localStorage.getItem('admin_feature_flags');
      if (adminSettings) {
        const settings = JSON.parse(adminSettings);
        if (settings.testPagesEnabled !== undefined) return settings.testPagesEnabled;
      }
    } catch (error) {
      // Ignore localStorage errors
    }
    return import.meta.env.VITE_FEATURE_TEST_PAGES_ENABLED === 'true';
  };

  const shouldShowBanner = isLovablePreview && !getProductionFeatureState();

  return (
    <div className="min-h-screen bg-background">
      {shouldShowBanner && (
        <>
          <FeatureDisabledBanner 
            featureName="testPagesEnabled" 
            displayName="Component Playground" 
          />
          <div className="h-[52px]" />
        </>
      )}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto space-y-6">
          {/* Header */}
          <div className="text-center space-y-2">
            <h1 className="text-4xl font-bold flex items-center justify-center gap-2">
              <TestTube2 className="h-8 w-8 text-primary" />
              Component Playground
            </h1>
            <p className="text-muted-foreground">Test and preview UI components</p>
            <Badge variant="secondary" className="text-xs">
              Development Environment
            </Badge>
          </div>

          <Tabs defaultValue="buttons" className="w-full">
            <TabsList className="grid w-full grid-cols-5">
              <TabsTrigger value="buttons">Buttons</TabsTrigger>
              <TabsTrigger value="inputs">Inputs</TabsTrigger>
              <TabsTrigger value="feedback">Feedback</TabsTrigger>
              <TabsTrigger value="layout">Layout</TabsTrigger>
              <TabsTrigger value="colors">Colors</TabsTrigger>
            </TabsList>

            {/* Buttons Tab */}
            <TabsContent value="buttons" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Play className="h-5 w-5" />
                    Button Variants
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {buttonVariants.map((variant) => (
                      <Button 
                        key={variant} 
                        variant={variant as any}
                        onClick={() => testToast('info')}
                      >
                        {variant}
                      </Button>
                    ))}
                  </div>
                  
                  <Separator />
                  
                  <div className="space-y-2">
                    <h4 className="font-medium">Button Sizes</h4>
                    <div className="flex items-center gap-4">
                      <Button size="sm">Small</Button>
                      <Button size="default">Default</Button>
                      <Button size="lg">Large</Button>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-medium">Badge Variants</h4>
                    <div className="flex flex-wrap gap-2">
                      {badgeVariants.map((variant) => (
                        <Badge key={variant} variant={variant as any}>
                          {variant}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Inputs Tab */}
            <TabsContent value="inputs" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Input Components</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Text Input</label>
                    <Input 
                      placeholder="Enter some text..." 
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                    />
                    <p className="text-xs text-muted-foreground">Value: {inputValue}</p>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Switch</label>
                    <div className="flex items-center gap-2">
                      <Switch 
                        checked={switchValue}
                        onCheckedChange={setSwitchValue}
                      />
                      <span className="text-sm">
                        {switchValue ? 'Enabled' : 'Disabled'}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Slider</label>
                    <Slider
                      value={sliderValue}
                      onValueChange={setSliderValue}
                      max={100}
                      step={1}
                      className="w-full"
                    />
                    <p className="text-xs text-muted-foreground">Value: {sliderValue[0]}</p>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Progress</label>
                    <Progress value={progressValue} className="w-full" />
                    <div className="flex gap-2">
                      <Button 
                        size="sm" 
                        onClick={() => setProgressValue(Math.max(0, progressValue - 10))}
                      >
                        -10
                      </Button>
                      <Button 
                        size="sm" 
                        onClick={() => setProgressValue(Math.min(100, progressValue + 10))}
                      >
                        +10
                      </Button>
                      <span className="text-sm self-center">{progressValue}%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Feedback Tab */}
            <TabsContent value="feedback" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Feedback Components</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <h4 className="font-medium">Toast Notifications</h4>
                    <div className="flex flex-wrap gap-2">
                      <Button onClick={() => testToast('default')}>Default Toast</Button>
                      <Button onClick={() => testToast('success')}>Success Toast</Button>
                      <Button onClick={() => testToast('error')}>Error Toast</Button>
                      <Button onClick={() => testToast('info')}>Info Toast</Button>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-medium">Alert</h4>
                    <Alert>
                      <Zap className="h-4 w-4" />
                      <AlertDescription>
                        This is a test alert component in the playground.
                      </AlertDescription>
                    </Alert>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Layout Tab */}
            <TabsContent value="layout" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Card Component</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      This is a sample card component with header and content sections.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Another Card</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Cards are great for organizing content into sections.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Colors Tab */}
            <TabsContent value="colors" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Palette className="h-5 w-5" />
                    Design System Colors
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="space-y-2">
                      <div className="h-16 bg-primary rounded border"></div>
                      <p className="text-xs font-medium">Primary</p>
                    </div>
                    <div className="space-y-2">
                      <div className="h-16 bg-secondary rounded border"></div>
                      <p className="text-xs font-medium">Secondary</p>
                    </div>
                    <div className="space-y-2">
                      <div className="h-16 bg-accent rounded border"></div>
                      <p className="text-xs font-medium">Accent</p>
                    </div>
                    <div className="space-y-2">
                      <div className="h-16 bg-muted rounded border"></div>
                      <p className="text-xs font-medium">Muted</p>
                    </div>
                    <div className="space-y-2">
                      <div className="h-16 bg-card rounded border"></div>
                      <p className="text-xs font-medium">Card</p>
                    </div>
                    <div className="space-y-2">
                      <div className="h-16 bg-popover rounded border"></div>
                      <p className="text-xs font-medium">Popover</p>
                    </div>
                    <div className="space-y-2">
                      <div className="h-16 bg-destructive rounded border"></div>
                      <p className="text-xs font-medium">Destructive</p>
                    </div>
                    <div className="space-y-2">
                      <div className="h-16 bg-border rounded border"></div>
                      <p className="text-xs font-medium">Border</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default ComponentPlayground;