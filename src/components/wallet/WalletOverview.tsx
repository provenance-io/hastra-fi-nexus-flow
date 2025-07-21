
import { useWallet } from '@/contexts/WalletContext';
import { useTokenPortfolio } from '@/hooks/useTokenPortfolio';
import TokenLineItem from './TokenLineItem';
import WalletHeader from './WalletHeader';
import PortfolioSummary from './PortfolioSummary';
import { useState } from 'react';

const WalletOverview = () => {
  const { refreshBalance, address, walletType } = useWallet();
  const { 
    tokens, 
    claimInterest, 
    claimAllInterest,
    getTotalPortfolioValue, 
    getTotalInterestEarned,
    getTotalUnclaimedInterest 
  } = useTokenPortfolio();
  
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [showTokenHoldings, setShowTokenHoldings] = useState(true);

  const handleRefreshBalance = async () => {
    setIsRefreshing(true);
    await refreshBalance();
    setIsRefreshing(false);
  };

  const handleTokenClaim = (tokenSymbol: string) => (claimedAmount: number) => {
    claimInterest(tokenSymbol, claimedAmount);
  };

  const handleClaimAll = () => {
    claimAllInterest();
  };

  const totalPortfolioValue = getTotalPortfolioValue();
  const totalInterestEarned = getTotalInterestEarned();
  const totalUnclaimedInterest = getTotalUnclaimedInterest();

  return (
    <div className="card-gradient rounded-3xl border border-border/30 shadow-lg">
      <WalletHeader
        address={address}
        walletType={walletType}
        isRefreshing={isRefreshing}
        showTokenHoldings={showTokenHoldings}
        onRefresh={handleRefreshBalance}
        onToggleHoldings={() => setShowTokenHoldings(!showTokenHoldings)}
      />
      
      <div className="bg-background/20 rounded-b-3xl">
        {/* Portfolio Summary */}
        <PortfolioSummary
          totalPortfolioValue={totalPortfolioValue}
          totalInterestEarned={totalInterestEarned}
          totalUnclaimedInterest={totalUnclaimedInterest}
          onClaimAll={handleClaimAll}
        />

        {/* Token Holdings */}
        {showTokenHoldings && (
          <div className="px-8 pb-6 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold text-foreground">Token Holdings</h3>
              <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent flex-1 ml-6"></div>
            </div>
            <div className="space-y-4">
              {tokens.map((token) => (
                <TokenLineItem
                  key={token.token}
                  token={token.token}
                  amount={token.amount}
                  value={token.value}
                  apy={token.apy}
                  totalInterestEarned={token.totalInterestEarned}
                  unclaimedInterest={token.unclaimedInterest}
                  icon={token.icon}
                  onClaim={handleTokenClaim(token.token)}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default WalletOverview;
