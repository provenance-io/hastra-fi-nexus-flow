import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { useStaking } from "@/hooks/useStaking";
import {
  formatStakingAmount,
  estimateGasFee,
  formatTimestamp,
} from "@/utils/stakingUtils";
import { ArrowRight, Wallet, Clock, AlertTriangle } from "lucide-react";
import { match } from "ts-pattern";

const UnstakingMode: React.FC<{ canUnstake: boolean }> = ({ canUnstake }) => {
  const {
    userBalance,
    unstakingForm,
    protocolData,
    setUnstakingAmount,
    setMaxUnstakeAmount,
    executeUnstaking,
    isTransacting,
  } = useStaking();

  const estimatedGas = estimateGasFee("unstake");

  return match(canUnstake)
    .with(true, () => (
      <div className="space-y-6">
        {/* Balance Display */}
        <div className="flex items-center justify-between p-4 bg-secondary/30 rounded-lg border border-border/30">
          <div className="flex items-center space-x-2">
            <Wallet className="h-4 w-4 text-[hsl(48_100%_67%)]" />
            <span className="text-sm text-muted-foreground">
              Staked Balance
            </span>
          </div>
          <div className="text-right">
            <div className="font-semibold text-foreground">
              {formatStakingAmount(userBalance.sYLDS)} sYLDS
            </div>
            <div className="text-xs text-muted-foreground">
              ${(parseFloat(userBalance.sYLDS) * 1.0).toFixed(2)}
            </div>
          </div>
        </div>

        {/* Cooldown Warning */}
        <Alert className="border-[hsl(48_100%_67%)]/30 bg-[hsl(48_100%_67%)]/10">
          <AlertTriangle className="h-4 w-4 text-[hsl(48_100%_67%)]" />
          <AlertDescription className="text-white">
            <strong>Unstaking Period:</strong> {protocolData.unstakingCooldown}{" "}
            cooldown period applies. Your tokens will be available to claim
            after the cooldown period ends.
          </AlertDescription>
        </Alert>

        {/* Unstaking Input */}
        <div className="bg-background/30 rounded-2xl border border-border/20 p-6 space-y-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <Label
                htmlFor="unstake-amount"
                className="text-base md:text-sm font-semibold text-foreground font-sans"
              >
                Amount to Unstake
              </Label>
              <Button
                type="button"
                variant="ghost"
                size="sm"
                onClick={setMaxUnstakeAmount}
                disabled={isTransacting}
                className="h-7 px-3 text-xs font-medium text-auburn-light hover:bg-auburn-primary/20 hover:text-auburn-light transition-all duration-200 bg-muted/30 rounded-md min-w-[50px]"
              >
                Max
              </Button>
            </div>
            <div className="relative">
              <Input
                id="unstake-amount"
                type="number"
                placeholder="0.00"
                value={unstakingForm.amount}
                onChange={(e) => setUnstakingAmount(e.target.value)}
                className="bg-muted/50 h-12 md:h-auto text-base md:text-sm font-sans pr-24 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                disabled={isTransacting}
              />
              <div className="absolute right-3 top-1/2 -translate-y-1/2">
                <span className="text-sm text-muted-foreground">sYLDS</span>
              </div>
            </div>

            {/* Error Messages */}
            {unstakingForm.errors.length > 0 && (
              <div className="space-y-1">
                {unstakingForm.errors.map((error, index) => (
                  <p key={index} className="text-xs text-destructive">
                    {error.message}
                  </p>
                ))}
              </div>
            )}
          </div>

          {/* Exchange Preview */}
          {unstakingForm.amount && parseFloat(unstakingForm.amount) > 0 && (
            <Card className="p-4 bg-secondary/20 border border-border/30">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">
                    You will receive
                  </span>
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4 text-[hsl(48_100%_67%)]" />
                    <span className="text-sm font-medium text-[hsl(48_100%_67%)]">
                      ~{formatStakingAmount(unstakingForm.estimatedOutput)}{" "}
                      wYLDS
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-center py-2">
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <span>
                      {formatStakingAmount(unstakingForm.amount)} sYLDS
                    </span>
                    <ArrowRight className="h-4 w-4" />
                    <span>
                      {formatStakingAmount(unstakingForm.estimatedOutput)} wYLDS
                    </span>
                  </div>
                </div>

                <div className="border-t border-border/30 pt-3 space-y-2">
                  <div className="flex justify-between text-xs">
                    <span className="text-muted-foreground">Exchange Rate</span>
                    <span className="font-medium">
                      1 sYLDS = {protocolData.exchangeRate} wYLDS
                    </span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-muted-foreground">Unstaking Fee</span>
                    <span className="font-medium text-green-500">No Fee</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-muted-foreground">
                      Estimated Gas Fee
                    </span>
                    <span className="font-medium">~{estimatedGas} SOL</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-muted-foreground">Available At</span>
                    <span className="font-medium text-[hsl(48_100%_67%)]">
                      {formatTimestamp(unstakingForm.availableDate)}
                    </span>
                  </div>
                </div>
              </div>
            </Card>
          )}

          {/* Unstake Button */}
          <Button
            onClick={executeUnstaking}
            disabled={!unstakingForm.isValid || isTransacting}
            size="lg"
            variant="secondary"
            className="w-full px-6 py-4 md:py-3 text-base md:text-sm font-medium font-sans rounded-xl min-w-[200px] group"
          >
            {isTransacting ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent mr-2" />
                Processing...
              </>
            ) : (
              <>
                Unstake {unstakingForm.amount || "0"} sYLDS
                <ArrowRight className="ml-2 h-4 w-4 text-[hsl(48_100%_67%)]" />
              </>
            )}
          </Button>
        </div>
      </div>
    ))
    .otherwise(() => (
      <div className="flex items-center justify-between">
        You must have SOL and sYLDS in your wallet to unstake.
      </div>
    ));
};

export default UnstakingMode;
