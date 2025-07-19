import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Wallet, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { useWallet } from '@/contexts/WalletContext';

const WalletConnectionSection = () => {
  const { 
    isConnected, 
    isConnecting, 
    networkError, 
    connectWallet 
  } = useWallet();

  const handleConnectWallet = async () => {
    if (!isConnected) {
      await connectWallet();
    } else {
      // Scroll to dashboard section if already connected
      const dashboardSection = document.querySelector('[data-section="wallet-dashboard"]');
      if (dashboardSection) {
        dashboardSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section className="py-24 md:py-32 bg-gradient-to-br from-header-glow/5 via-background to-crypto-accent/5">
      <div className="container">
        <div className="max-w-2xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <div className="w-16 h-16 mx-auto rounded-full bg-header-glow/20 flex items-center justify-center">
              <Wallet className="w-8 h-8 text-header-glow" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gradient mb-2">Connect Your Wallet</h2>
              <p className="text-muted-foreground text-lg">
                {isConnected ? 'Wallet connected! View your dashboard above to start trading.' : 'Connect your wallet to start earning yield with YIELD and sHASH tokens'}
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

          {!isConnected && (
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
                  onClick={handleConnectWallet}
                  disabled={isConnecting}
                  className="w-full bg-orange-900/20 border border-orange-800/30 text-orange-300 hover:bg-orange-900/30 hover:border-orange-800/40 transition-all duration-200 group-hover:scale-[1.02]"
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
                      Connect Wallet
                    </>
                  )}
                </Button>

              </CardContent>
            </Card>
          )}
          
          {isConnected && (
            <div className="text-center">
              <Button 
                size="lg" 
                className="bg-orange-900/20 border border-orange-800/30 text-orange-300 hover:bg-orange-900/30 hover:border-orange-800/40 transition-all duration-200 group-hover:scale-[1.02]"
                onClick={handleConnectWallet}
              >
                View Dashboard
                <Wallet className="ml-2 h-5 w-5" />
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default WalletConnectionSection;