import React from "react";
import { Clock } from "lucide-react";
import StakingWidget from "./StakingWidget";
import PendingUnstakesCard from "./PendingUnstakesCard";

const StakingSection: React.FC = () => {
  return (
    <div id="staking-section" className="mb-8 md:mb-12 space-y-8">
      {/* Main Staking Widget */}
      <div className="card-gradient rounded-3xl border border-border/30 shadow-lg p-4 md:p-6">
        <StakingWidget />
        {/* Pending Unstakes - Inside the main box */}
        <div className="mt-8 space-y-4">
          <div className="flex items-center space-x-2">
            <Clock className="h-5 w-5 text-auburn-primary" />
            <h2 className="text-lg md:text-xl font-semibold text-foreground">
              Pending Unstakes
            </h2>
          </div>
          <PendingUnstakesCard />
        </div>
      </div>
    </div>
  );
};

export default StakingSection;
