import EarnHero from "@/components/start-earning/EarnHero";
import EnhancedWalletConnection from "@/components/wallet/EnhancedWalletConnection";
import ProvenanceBranding from "@/components/ProvenanceBranding";
import { useWallet } from "@/contexts/WalletContext";
import { match } from "ts-pattern";

const Earn = () => {
  const { isConnected } = useWallet();

  return (
    <div className="relative">
      {/* Extended gradient background to match homepage */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-header-glow/5 to-crypto-accent/5"></div>
      <div className="relative z-10">
        {match(isConnected)
          .with(true, () => (
            <section className="py-12 md:py-16" data-section="wallet-dashboard">
              <div className="container">
                <EnhancedWalletConnection />
              </div>
            </section>
          ))
          .otherwise(() => (
            <EarnHero />
          ))}
        <ProvenanceBranding />
      </div>
    </div>
  );
};

export default Earn;
