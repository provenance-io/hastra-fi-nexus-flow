import React from 'react';
import StakingWidget from './StakingWidget';
import PendingUnstakesCard from './PendingUnstakesCard';
import StakingPortfolioCard from './StakingPortfolioCard';

const StakingSection: React.FC = () => {
  return (
    <div id="staking-section" className="mb-8 md:mb-12">
      <div className="card-gradient rounded-3xl border border-border/30 shadow-lg p-6 md:p-12">
        <h2 className="text-lg md:text-xl font-semibold text-foreground mb-6 md:mb-8">
          Staking & Rewards
        </h2>
        
        <div className="space-y-8 md:space-y-12">
          {/* Main Staking Widget */}
          <StakingWidget />
          
          {/* Portfolio and Unstaking Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            <StakingPortfolioCard />
            <PendingUnstakesCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StakingSection;