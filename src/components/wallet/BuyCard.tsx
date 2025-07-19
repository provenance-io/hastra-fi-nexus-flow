import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ArrowUpDown, DollarSign } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import usdcIcon from '/lovable-uploads/dce72281-6459-4785-814f-a1e9872bbb8d.png';
import solanaIcon from '/lovable-uploads/05bbaafe-890c-4692-bac6-96927ee62b7e.png';
import yieldIcon from '/lovable-uploads/0db58d6a-9142-44d8-8e1d-a2283f6ac976.png';
import hashIcon from '/lovable-uploads/bb5fd324-8133-40de-98e0-34ae8f181798.png';

const BuyCard = () => {
  const [sellAsset, setSellAsset] = useState<'USDC' | 'SOL'>('USDC');
  const [buyAsset, setBuyAsset] = useState<'YIELD' | 'HASH'>('YIELD');
  const [amount, setAmount] = useState('');
  const [denomination, setDenomination] = useState<'token' | 'usd'>('usd');
  const { toast } = useToast();

  // Mock exchange rates for calculation
  const exchangeRates = {
    'SOL': 200, // SOL to USD
    'USDC': 1,  // USDC to USD
    'YIELD': 0.50, // YIELD to USD
    'HASH': 1.20   // HASH to USD
  };

  const mockBalances = {
    'SOL': 5.5,
    'USDC': 1200
  };

  const calculateReceiveAmount = () => {
    if (!amount || isNaN(parseFloat(amount))) return { tokens: 0, usd: 0 };
    
    const inputAmount = parseFloat(amount);
    let usdValue: number;
    
    if (denomination === 'usd') {
      usdValue = inputAmount;
    } else {
      usdValue = inputAmount * exchangeRates[sellAsset];
    }
    
    const receiveTokens = usdValue / exchangeRates[buyAsset];
    return { 
      tokens: receiveTokens, 
      usd: usdValue 
    };
  };

  const handleMaxClick = () => {
    const maxBalance = mockBalances[sellAsset];
    const gasBuffer = sellAsset === 'SOL' ? 0.01 : 0; // Reserve SOL for gas
    const maxAmount = Math.max(0, maxBalance - gasBuffer);
    
    if (denomination === 'usd') {
      setAmount((maxAmount * exchangeRates[sellAsset]).toFixed(2));
    } else {
      setAmount(maxAmount.toFixed(6));
    }
  };

  const handleSwap = () => {
    const receiveAmount = calculateReceiveAmount();
    if (receiveAmount.tokens === 0) {
      toast({
        title: "Invalid Amount",
        description: "Please enter a valid amount to swap.",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Swap Initiated",
      description: `Swapping ${amount} ${denomination === 'usd' ? 'USD' : sellAsset} for ${receiveAmount.tokens.toFixed(6)} ${buyAsset}`,
    });
  };

  const receiveAmount = calculateReceiveAmount();

  return (
    <Card className="!bg-transparent rounded-3xl p-8 md:p-12 border border-transparent mb-16 relative">
      <CardHeader className="bg-background/20 rounded-t-3xl">
        <CardTitle className="flex items-center gap-2 text-xl font-bold">
          <ArrowUpDown className="w-5 h-5 text-header-glow" />
          Buy Tokens
        </CardTitle>
      </CardHeader>
      <CardContent className="bg-background/20">
        <div className="card-gradient rounded-2xl p-6 md:p-8 space-y-4">
        {/* Sell Asset Selection */}
        <div className="space-y-2">
          <Label className="text-sm font-medium text-foreground">You're selling</Label>
          <Select value={sellAsset} onValueChange={(value: 'USDC' | 'SOL') => setSellAsset(value)}>
            <SelectTrigger className="bg-muted/50">
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="bg-card">
              <SelectItem value="USDC">
                <div className="flex items-center gap-3 py-1">
                  <img src={usdcIcon} alt="USDC" className="w-6 h-6 rounded-full flex-shrink-0" />
                  <div className="flex flex-col min-w-0 flex-1">
                    <span className="text-sm font-medium">USDC</span>
                    <span className="text-xs text-muted-foreground truncate">{mockBalances.USDC}</span>
                  </div>
                </div>
              </SelectItem>
              <SelectItem value="SOL">
                <div className="flex items-center gap-3 py-1">
                  <img src={solanaIcon} alt="Solana" className="w-6 h-6 rounded-full flex-shrink-0" />
                  <div className="flex flex-col min-w-0 flex-1">
                    <span className="text-sm font-medium">Solana</span>
                    <span className="text-xs text-muted-foreground truncate">{mockBalances.SOL}</span>
                  </div>
                </div>
              </SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Buy Asset Selection */}
        <div className="space-y-2">
          <Label className="text-sm font-medium text-foreground">You're buying</Label>
          <Select value={buyAsset} onValueChange={(value: 'YIELD' | 'HASH') => setBuyAsset(value)}>
            <SelectTrigger className="bg-muted/50">
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="bg-card">
              <SelectItem value="YIELD">
                <div className="flex items-center gap-3 py-1">
                  <img src={yieldIcon} alt="YIELD" className="w-6 h-6 rounded-full flex-shrink-0" />
                  <div className="flex flex-col min-w-0 flex-1">
                    <span className="text-sm font-medium">YIELD Token</span>
                  </div>
                </div>
              </SelectItem>
              <SelectItem value="HASH">
                <div className="flex items-center gap-3 py-1">
                  <img src={hashIcon} alt="HASH" className="w-6 h-6 rounded-full object-cover flex-shrink-0" />
                  <div className="flex flex-col min-w-0 flex-1">
                    <span className="text-sm font-medium">HASH Token</span>
                  </div>
                </div>
              </SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Amount Input */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Label className="text-sm font-medium text-foreground">Amount</Label>
            <div className="flex gap-2">
              <div className="flex items-center bg-muted/30 rounded-md p-1">
                <Button 
                  variant={denomination === 'usd' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setDenomination('usd')}
                  className={`h-7 text-xs px-2 ${denomination === 'usd' ? 'btn-hastra' : 'text-muted-foreground hover:text-foreground'}`}
                >
                  <DollarSign className="w-3 h-3 mr-1" />
                  USD
                </Button>
                <Button 
                  variant={denomination === 'token' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setDenomination('token')}
                  className={`h-7 text-xs px-2 ${denomination === 'token' ? 'btn-hastra' : 'text-muted-foreground hover:text-foreground'}`}
                >
                  {sellAsset}
                </Button>
              </div>
              <Button 
                variant="outline" 
                size="sm" 
                onClick={handleMaxClick}
                className="btn-hastra-outline h-8 text-xs"
              >
                Max
              </Button>
            </div>
          </div>
          <Input
            type="number"
            min="0"
            step="any"
            placeholder={`Enter amount in ${denomination === 'usd' ? 'USD' : sellAsset}`}
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="bg-muted/50 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none [&]:[-moz-appearance:textfield]"
          />
        </div>

        {/* Receive Amount Display */}
        {amount && receiveAmount.tokens > 0 && (
          <div className="bg-muted/50 border border-orange-800/30 rounded-lg p-4">
            <div className="text-sm text-muted-foreground mb-1">You'll receive</div>
            <div className="font-semibold text-lg text-orange-300">{receiveAmount.tokens.toFixed(6)} {buyAsset}</div>
            <div className="text-xs text-muted-foreground">${receiveAmount.usd.toFixed(2)} USD</div>
          </div>
        )}

        {/* Swap Button */}
        <Button 
          onClick={handleSwap} 
          size="lg"
          className="w-full bg-orange-900/20 border border-orange-800/30 text-orange-300 hover:bg-orange-900/30 hover:border-orange-800/40 focus-ring px-8 py-4 text-sm font-medium rounded-xl min-w-[200px] group transition-all duration-200"
          disabled={!amount || receiveAmount.tokens === 0}
        >
          Swap {sellAsset} for {buyAsset}
        </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default BuyCard;