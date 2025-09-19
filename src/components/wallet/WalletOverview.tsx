import { useWallet } from "@/contexts/WalletContext";
import { useTokenPortfolio } from "@/hooks/useTokenPortfolio";
import WalletHeader from "./WalletHeader";
import PortfolioSummary from "./PortfolioSummary";

const WalletOverview = () => {
  const { address, walletType } = useWallet();
  const {
    claimAllInterest,
    getTotalPortfolioValue,
    getTotalInterestEarned,
    getTotalUnclaimedInterest,
  } = useTokenPortfolio();

  const handleClaimAll = () => {
    claimAllInterest();
  };

  const totalPortfolioValue = getTotalPortfolioValue();
  const totalInterestEarned = getTotalInterestEarned();
  const totalUnclaimedInterest = getTotalUnclaimedInterest();

  return (
    <div className="card-gradient rounded-3xl border border-border/30 shadow-lg">
      <WalletHeader address={address} walletType={walletType} />

      <div className="bg-background/20 rounded-b-3xl">
        <PortfolioSummary
          totalPortfolioValue={totalPortfolioValue}
          totalInterestEarned={totalInterestEarned}
          totalUnclaimedInterest={totalUnclaimedInterest}
          onClaimAll={handleClaimAll}
        />
      </div>
    </div>
  );
};

export default WalletOverview;
