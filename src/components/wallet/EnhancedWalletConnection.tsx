
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { useWallet } from '@/contexts/WalletContext';
import { Wallet, AlertCircle, CheckCircle, Loader2 } from 'lucide-react';
import WalletDashboard from './WalletDashboard';

const EnhancedWalletConnection = () => {
  const { 
    isConnected, 
    isConnecting, 
    networkError, 
    connectWallet, 
    disconnectWallet 
  } = useWallet();

  if (isConnected) {
    return (
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold text-gradient">Your Dashboard</h2>
            <p className="text-muted-foreground mt-2">Manage your DeFi positions and track earnings</p>
          </div>
          <Button
            onClick={disconnectWallet}
            variant="outline"
            className="focus-ring hover:border-destructive/50 hover:text-destructive"
          >
            Disconnect Wallet
          </Button>
        </div>
        <WalletDashboard />
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto space-y-8">
      <div className="text-center space-y-4">
        <div className="w-16 h-16 mx-auto rounded-full bg-header-glow/20 flex items-center justify-center">
          <Wallet className="w-8 h-8 text-header-glow" />
        </div>
        <div>
          <h2 className="text-3xl font-bold text-gradient mb-2">Connect Your Wallet</h2>
          <p className="text-muted-foreground text-lg">
            Connect your wallet to start earning yield with YIELD and sHASH tokens
          </p>
        </div>
      </div>

      {networkError && (
        <Alert className="border-destructive/50 bg-destructive/10">
          <AlertCircle className="h-4 w-4 text-destructive" />
          <AlertDescription className="text-destructive">
            {networkError}
          </AlertDescription>
        </Alert>
      )}

      <Card className="glass-effect border-border/50">
        <CardHeader className="text-center">
          <CardTitle className="text-xl">Get Started</CardTitle>
          <CardDescription>
            Connect your MetaMask wallet to access DeFi opportunities
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div className="flex items-center gap-3 p-4 rounded-lg bg-muted/30">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <div>
                <p className="font-medium">Secure Connection</p>
                <p className="text-sm text-muted-foreground">Your wallet stays in your control</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 rounded-lg bg-muted/30">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <div>
                <p className="font-medium">Track Earnings</p>
                <p className="text-sm text-muted-foreground">Monitor your yields and positions</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 rounded-lg bg-muted/30">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <div>
                <p className="font-medium">Easy Trading</p>
                <p className="text-sm text-muted-foreground">Access integrated DeFi platforms</p>
              </div>
            </div>
          </div>

          <Button
            onClick={connectWallet}
            disabled={isConnecting}
            className="w-full bg-orange-900/20 border border-orange-800/30 text-orange-300 hover:bg-orange-900/30 hover:border-orange-800/40 focus-ring font-bold py-4 text-lg rounded-xl group transition-all duration-200"
            size="lg"
          >
            {isConnecting ? (
              <>
                <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                Connecting...
              </>
            ) : (
              <>
                <Wallet className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Connect MetaMask
              </>
            )}
          </Button>

          <p className="text-center text-sm text-muted-foreground">
            Don't have MetaMask? <a href="https://metamask.io" target="_blank" rel="noopener noreferrer" className="text-header-glow hover:underline">Download here</a>
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default EnhancedWalletConnection;
