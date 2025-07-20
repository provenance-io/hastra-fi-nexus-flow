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
    <section className="py-24 md:py-32 relative">
      {/* Removed background effects to allow parent gradient to show through */}
      <div className="container relative">
        <div className="max-w-2xl mx-auto space-y-8">
          <div className="text-center space-y-6">
            <div className="w-20 h-20 mx-auto rounded-full card-gradient border border-white/20 flex items-center justify-center"
                 style={{
                   backdropFilter: 'blur(16px)',
                   boxShadow: '0 0 20px rgba(229, 218, 194, 0.3), 0 0 40px rgba(229, 218, 194, 0.1)'
                 }}>
              <Wallet className="w-10 h-10 text-platinum" />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-3" style={{ 
                background: 'linear-gradient(135deg, hsl(var(--platinum)), hsl(var(--muted-foreground)))', 
                WebkitBackgroundClip: 'text', 
                WebkitTextFillColor: 'transparent',
                textShadow: '0 0 30px rgba(229, 218, 194, 0.4)'
              }}>Connect Your Wallet</h2>
              <p className="text-platinum/80 text-lg leading-relaxed" style={{ textShadow: '0 0 10px rgba(255, 255, 255, 0.2)' }}>
                {isConnected ? 'Wallet connected! View your dashboard above to start trading.' : 'Connect your wallet to start earning yield with YIELD and sHASH tokens in a secure, premium DeFi environment'}
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
            <div className="card-gradient rounded-3xl p-8 border border-white/10"
                 style={{
                   backdropFilter: 'blur(16px)',
                   boxShadow: '0 0 20px rgba(229, 218, 194, 0.2), 0 0 40px rgba(229, 218, 194, 0.1)'
                 }}>
              <div className="text-center mb-8">
                <h3 className="text-xl font-bold text-platinum mb-2">Get Started</h3>
                <p className="text-platinum/70">
                  Connect your MetaMask wallet to access premium DeFi opportunities
                </p>
              </div>
              <div className="space-y-6 mb-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 rounded-xl card-gradient border border-white/10">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-platinum">Secure Connection</p>
                      <p className="text-sm text-platinum/70">Your wallet stays in your control</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 rounded-xl card-gradient border border-white/10">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-platinum">Track Earnings</p>
                      <p className="text-sm text-platinum/70">Monitor your yields and positions</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 rounded-xl card-gradient border border-white/10">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-platinum">Easy Trading</p>
                      <p className="text-sm text-platinum/70">Access integrated DeFi platforms</p>
                    </div>
                  </div>
                </div>

                <Button
                  onClick={handleConnectWallet}
                  disabled={isConnecting}
                  className="w-full bg-platinum/10 border border-platinum/20 text-platinum hover:bg-platinum/20 hover:border-platinum/30 transition-all duration-300 font-medium"
                  style={{
                    backdropFilter: 'blur(10px)',
                    boxShadow: '0 0 20px rgba(229, 218, 194, 0.3), 0 0 40px rgba(229, 218, 194, 0.1)'
                  }}
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

              </div>
            </div>
          )}
          
          {isConnected && (
            <div className="text-center">
              <Button 
                size="lg" 
                className="bg-platinum/10 border border-platinum/20 text-platinum hover:bg-platinum/20 hover:border-platinum/30 transition-all duration-300 font-medium"
                style={{
                  backdropFilter: 'blur(10px)',
                  boxShadow: '0 0 20px rgba(229, 218, 194, 0.3), 0 0 40px rgba(229, 218, 194, 0.1)'
                }}
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