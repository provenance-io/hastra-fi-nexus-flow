import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Progress } from '@/components/ui/progress';
import { formatExplorerURL } from '@/utils/stakingUtils';
import {
  CheckCircle,
  XCircle,
  Loader2,
  ExternalLink,
  X,
  Clock,
  Signature,
  Radio,
  Shield,
} from 'lucide-react';
import { TransactionStatus } from '@/types/staking';

interface TransactionProgressProps {
  isVisible: boolean;
  mode: 'stake' | 'unstake' | 'claim';
  stage: TransactionStatus;
  txHash?: string;
  error?: string;
  onRetry?: () => void;
  onClose: () => void;
  unstakeDetails?: {
    availableAt: Date;
    unstakeId: string;
  };
}

const TransactionProgress: React.FC<TransactionProgressProps> = ({
  isVisible,
  mode,
  stage,
  txHash,
  error,
  onRetry,
  onClose,
  unstakeDetails,
}) => {
  if (!isVisible) return null;

  const getStageIcon = (currentStage: TransactionStatus) => {
    switch (currentStage) {
      case 'preparing':
        return <Clock className="h-4 w-4" />;
      case 'signing':
        return <Signature className="h-4 w-4" />;
      case 'broadcasting':
        return <Radio className="h-4 w-4" />;
      case 'confirming':
        return <Shield className="h-4 w-4" />;
      case 'success':
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      case 'error':
        return <XCircle className="h-4 w-4 text-destructive" />;
      default:
        return <Clock className="h-4 w-4" />;
    }
  };

  const getStageLabel = (currentStage: TransactionStatus) => {
    switch (currentStage) {
      case 'preparing':
        return 'Preparing transaction...';
      case 'signing':
        return 'Please sign the transaction in your wallet';
      case 'broadcasting':
        return 'Broadcasting transaction...';
      case 'confirming':
        return 'Confirming transaction...';
      case 'success':
        return 'Transaction successful!';
      case 'error':
        return 'Transaction failed';
      default:
        return 'Processing...';
    }
  };

  const getProgressValue = () => {
    switch (stage) {
      case 'preparing':
        return 20;
      case 'signing':
        return 40;
      case 'broadcasting':
        return 60;
      case 'confirming':
        return 80;
      case 'success':
        return 100;
      case 'error':
        return 0;
      default:
        return 0;
    }
  };

  const getModeTitle = () => {
    switch (mode) {
      case 'stake':
        return 'Staking Transaction';
      case 'unstake':
        return 'Unstaking Transaction';
      case 'claim':
        return 'Claim Transaction';
      default:
        return 'Transaction';
    }
  };

  const isProcessing = ['preparing', 'signing', 'broadcasting', 'confirming'].includes(stage);
  const isComplete = stage === 'success';
  const hasFailed = stage === 'error';

  return (
    <Card className="card-gradient rounded-2xl border border-border/30 shadow-lg p-6">
      <div className="space-y-4">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            {isProcessing && (
              <Loader2 className="h-5 w-5 animate-spin text-hastra-teal" />
            )}
            {getStageIcon(stage)}
            <div>
              <h3 className="font-semibold text-foreground">{getModeTitle()}</h3>
              <p className="text-sm text-muted-foreground">
                {getStageLabel(stage)}
              </p>
            </div>
          </div>

          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            disabled={isProcessing}
            className="h-8 w-8 p-0"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>

        {/* Progress Bar */}
        {!hasFailed && (
          <div className="space-y-2">
            <Progress 
              value={getProgressValue()} 
              className="h-2"
            />
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>Progress</span>
              <span>{getProgressValue()}%</span>
            </div>
          </div>
        )}

        {/* Status Badge */}
        <div className="flex justify-center">
          {isComplete && (
            <Badge className="bg-green-500/10 text-green-500 border-green-500/20">
              <CheckCircle className="h-3 w-3 mr-1" />
              Transaction Confirmed
            </Badge>
          )}
          {hasFailed && (
            <Badge variant="destructive" className="bg-destructive/10">
              <XCircle className="h-3 w-3 mr-1" />
              Transaction Failed
            </Badge>
          )}
          {isProcessing && (
            <Badge className="bg-hastra-teal/10 text-hastra-teal border-hastra-teal/20">
              <Loader2 className="h-3 w-3 mr-1 animate-spin" />
              Processing
            </Badge>
          )}
        </div>

        {/* Transaction Hash */}
        {txHash && (
          <div className="p-3 bg-secondary/30 rounded-lg border border-border/30">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Transaction Hash</span>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => window.open(formatExplorerURL(txHash), '_blank')}
                className="h-6 px-2 text-xs"
              >
                <ExternalLink className="h-3 w-3 mr-1" />
                View
              </Button>
            </div>
            <p className="text-xs font-mono text-foreground mt-1 break-all">
              {txHash}
            </p>
          </div>
        )}

        {/* Error Message */}
        {error && (
          <Alert className="border-destructive/30 bg-destructive/10">
            <XCircle className="h-4 w-4 text-destructive" />
            <AlertDescription className="text-destructive">
              {error}
            </AlertDescription>
          </Alert>
        )}

        {/* Unstaking Details */}
        {isComplete && mode === 'unstake' && unstakeDetails && (
          <div className="p-4 bg-auburn-primary/10 border border-auburn-primary/20 rounded-lg">
            <div className="space-y-2">
              <h4 className="font-medium text-auburn-primary">Unstaking Initiated</h4>
              <p className="text-sm text-muted-foreground">
                Your tokens will be available to claim on{' '}
                <span className="font-medium text-foreground">
                  {unstakeDetails.availableAt.toLocaleDateString()}
                </span>
              </p>
              <p className="text-xs text-muted-foreground">
                Unstake ID: {unstakeDetails.unstakeId}
              </p>
            </div>
          </div>
        )}

        {/* Actions */}
        <div className="flex justify-end space-x-3">
          {hasFailed && onRetry && (
            <Button
              onClick={onRetry}
              variant="outline"
              size="sm"
              className="btn-hastra-outline"
            >
              Retry
            </Button>
          )}
          {(isComplete || hasFailed) && (
            <Button
              onClick={onClose}
              variant="outline"
              size="sm"
            >
              Close
            </Button>
          )}
        </div>
      </div>
    </Card>
  );
};

export default TransactionProgress;