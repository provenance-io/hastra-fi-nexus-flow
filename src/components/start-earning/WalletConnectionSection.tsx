import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Wallet, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { useWallet } from "@/contexts/WalletContext";

const WalletConnectionSection = () => {
  const { isConnected, isConnecting, networkError, connectWallet } =
    useWallet();

  const handleConnectWallet = async () => {
    if (!isConnected) {
      await connectWallet();
    } else {
      // Scroll to dashboard section if already connected
      const dashboardSection = document.querySelector(
        '[data-section="wallet-dashboard"]'
      );
      if (dashboardSection) {
        dashboardSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <section className="pt-2 md:pt-4 pb-16 md:pb-24 relative">
      {/* Removed background effects to allow parent gradient to show through */}
      <div className="container relative">
        <div className="max-w-2xl mx-auto space-y-20">
          <div className="text-center space-y-6">
            <div
              className="w-20 h-20 mx-auto rounded-full card-gradient border border-white/20 flex items-center justify-center"
              style={{
                backdropFilter: "blur(16px)",
                boxShadow:
                  "0 0 20px rgba(229, 218, 194, 0.3), 0 0 40px rgba(229, 218, 194, 0.1)",
              }}
            >
              <Wallet className="w-10 h-10 text-platinum" />
            </div>
            <div>
              <p
                className="text-platinum/80 text-lg leading-relaxed"
                style={{ textShadow: "0 0 10px rgba(255, 255, 255, 0.2)" }}
              >
                {isConnected
                  ? "Wallet connected! View your dashboard above to start trading."
                  : "Connect your wallet to start earning yield with PRIME and wHASH tokens in a secure, premium DeFi environment"}
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
            <div className="max-w-6xl mx-auto">
              <div className="bg-background/20 rounded-3xl border border-border/20 p-8 md:p-12">
                <h3 className="text-2xl md:text-3xl font-bold text-center mb-12 text-foreground">
                  Get Started
                </h3>

                <div className="max-w-2xl mx-auto">
                  <p className="text-muted-foreground text-center mb-8 leading-relaxed">
                    Connect your Solana wallet to access premium DeFi
                    opportunities
                  </p>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-center gap-4 p-4 rounded-xl bg-background/30 border border-border/10">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-foreground">
                          Secure Connection
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Your wallet stays in your control
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 p-4 rounded-xl bg-background/30 border border-border/10">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-foreground">
                          Track Earnings
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Monitor your yields and positions
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 p-4 rounded-xl bg-background/30 border border-border/10">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-foreground">
                          Easy Trading
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Access integrated DeFi platforms
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="text-center">
                    <Button
                      onClick={handleConnectWallet}
                      disabled={isConnecting}
                      variant="secondary"
                      className="group-hover:scale-[1.02] transition-transform duration-300"
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
              </div>
            </div>
          )}

          {isConnected && (
            <div className="max-w-6xl mx-auto">
              <div className="bg-background/20 rounded-3xl border border-border/20 p-8 md:p-12">
                <div className="text-center">
                  <Button
                    size="lg"
                    variant="secondary"
                    className="group-hover:scale-[1.02] transition-transform duration-300"
                    onClick={handleConnectWallet}
                  >
                    View Dashboard
                    <Wallet className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default WalletConnectionSection;
