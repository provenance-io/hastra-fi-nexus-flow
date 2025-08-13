import React from 'react';
import StakingWidget from './StakingWidget';
import PendingUnstakesCard from './PendingUnstakesCard';

const StakingSection: React.FC = () => {
  return (
    <div id="staking-section" className="mb-8 md:mb-12">
      <div className="card-gradient rounded-3xl border border-border/30 shadow-lg p-6 md:p-12">
        <h2 className="text-lg md:text-xl font-semibold text-foreground mb-6 md:mb-8">
          Stake
        </h2>
        
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 md:gap-12">
          {/* Main Staking Widget - Takes 2 columns on xl screens */}
          <div className="xl:col-span-2">
            <StakingWidget />
          </div>
          
          {/* Pending Unstakes - Takes 1 column on xl screens */}
          <div className="xl:col-span-1">
            <PendingUnstakesCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StakingSection;