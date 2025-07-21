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
      title: "⚡ Swap Initiated",
      description: `Swapping ${amount} ${denomination === 'usd' ? 'USD' : sellAsset} for ${receiveAmount.tokens.toFixed(6)} ${buyAsset}`,
      className: "border-l-4 border-l-hastra-teal bg-hastra-teal/10 shadow-hastra",
    });
  };

  const receiveAmount = calculateReceiveAmount();

  return (
    <div className="space-y-8">
      <div className="flex items-center gap-4 mb-8">
        <ArrowUpDown className="w-6 h-6 md:w-5 md:h-5 text-header-glow" />
        <h3 className="text-xl md:text-xl font-bold">Buy Tokens</h3>
      </div>
      <div className="card-gradient rounded-2xl p-8 md:p-10 space-y-8">
        {/* Sell Asset Selection */}
        <div className="space-y-4">
          <Label className="text-base md:text-sm font-semibold text-foreground">You're selling</Label>
          <Select value={sellAsset} onValueChange={(value: 'USDC' | 'SOL') => setSellAsset(value)}>
            <SelectTrigger className="bg-muted/50 h-14 md:h-auto font-sans">
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center gap-4">
                  <img 
                    src={sellAsset === 'USDC' ? usdcIcon : solanaIcon} 
                    alt={sellAsset === 'USDC' ? 'USDC' : 'Solana'} 
                    className="w-8 h-8 md:w-6 md:h-6 rounded-full flex-shrink-0 object-cover" 
                  />
                  <span className="text-base md:text-sm font-medium font-sans">{sellAsset === 'USDC' ? 'USDC' : 'Solana'}</span>
                </div>
                <span className="text-sm md:text-xs text-muted-foreground font-mono">{mockBalances[sellAsset]}</span>
              </div>
            </SelectTrigger>
            <SelectContent className="bg-card/90 backdrop-blur-sm border border-border/20 z-50">
              <SelectItem value="USDC" className="py-4 md:py-2">
                <div className="flex items-center justify-between w-full py-2 md:py-1">
                  <div className="flex items-center gap-4">
                    <img src={usdcIcon} alt="USDC" className="w-8 h-8 md:w-6 md:h-6 rounded-full flex-shrink-0 object-cover" />
                    <span className="text-base md:text-sm font-medium font-sans">USDC</span>
                  </div>
                  <span className="text-sm md:text-xs text-muted-foreground font-mono ml-4">{mockBalances.USDC}</span>
                </div>
              </SelectItem>
              <SelectItem value="SOL" className="py-4 md:py-2">
                <div className="flex items-center justify-between w-full py-2 md:py-1">
                  <div className="flex items-center gap-4">
                    <img src={solanaIcon} alt="Solana" className="w-8 h-8 md:w-6 md:h-6 rounded-full flex-shrink-0 object-cover" />
                    <span className="text-base md:text-sm font-medium font-sans">Solana</span>
                  </div>
                  <span className="text-sm md:text-xs text-muted-foreground font-mono ml-4">{mockBalances.SOL}</span>
                </div>
              </SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Buy Asset Selection */}
        <div className="space-y-4">
          <Label className="text-base md:text-sm font-semibold text-foreground">You're buying</Label>
          <Select value={buyAsset} onValueChange={(value: 'YIELD' | 'HASH') => setBuyAsset(value)}>
            <SelectTrigger className="bg-muted/50 h-14 md:h-auto font-sans">
              <div className="flex items-center gap-4 w-full">
                <img 
                  src={buyAsset === 'YIELD' ? yieldIcon : hashIcon} 
                  alt={buyAsset} 
                  className="w-8 h-8 md:w-6 md:h-6 rounded-full flex-shrink-0 object-cover" 
                />
                <span className="text-base md:text-sm font-medium font-sans">{buyAsset}</span>
              </div>
            </SelectTrigger>
            <SelectContent className="bg-card/90 backdrop-blur-sm border border-border/20 z-50">
              <SelectItem value="YIELD" className="py-4 md:py-2">
                <div className="flex items-center gap-4 py-2 md:py-1">
                  <img src={yieldIcon} alt="YIELD" className="w-8 h-8 md:w-6 md:h-6 rounded-full flex-shrink-0 object-cover" />
                  <span className="text-base md:text-sm font-medium font-sans">YIELD</span>
                </div>
              </SelectItem>
              <SelectItem value="HASH" className="py-4 md:py-2">
                <div className="flex items-center gap-4 py-2 md:py-1">
                  <img src={hashIcon} alt="HASH" className="w-8 h-8 md:w-6 md:h-6 rounded-full object-cover flex-shrink-0" />
                  <span className="text-base md:text-sm font-medium font-sans">HASH</span>
                </div>
              </SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Amount Input */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <Label className="text-base md:text-sm font-semibold text-foreground">Amount</Label>
            <div className="flex items-center gap-3">
              <div className="flex items-center bg-muted/30 rounded-md p-1 gap-1">
                <Button 
                  variant={denomination === 'usd' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setDenomination('usd')}
                  className={`h-8 md:h-7 text-sm md:text-xs px-4 md:px-3 ${denomination === 'usd' ? 'btn-hastra' : 'text-muted-foreground hover:text-foreground'}`}
                >
                  <DollarSign className="w-4 h-4 md:w-3 md:h-3 mr-1" />
                  USD
                </Button>
                <Button 
                  variant={denomination === 'token' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setDenomination('token')}
                  className={`h-8 md:h-7 text-sm md:text-xs px-4 md:px-3 ${denomination === 'token' ? 'btn-hastra' : 'text-muted-foreground hover:text-foreground'}`}
                >
                  {sellAsset}
                </Button>
              </div>
              <Button 
                variant="ghost"
                size="sm" 
                onClick={handleMaxClick}
                className="h-8 md:h-7 px-4 md:px-3 text-sm md:text-xs font-medium text-[hsl(34_100%_84%)] hover:bg-orange-900/30 hover:text-[hsl(34_100%_84%)] transition-all duration-200 bg-muted/30 rounded-md"
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
            className="bg-muted/50 h-14 md:h-auto text-lg md:text-base [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none [&]:[-moz-appearance:textfield]"
          />
        </div>

        {/* Receive Amount Display */}
        {amount && receiveAmount.tokens > 0 && (
          <div className="bg-muted/50 border border-orange-800/30 rounded-lg p-4 md:p-4">
            <div className="text-base md:text-sm text-muted-foreground mb-2">You'll receive</div>
            <div className="font-semibold text-xl md:text-lg text-[hsl(34_100%_84%)]">{receiveAmount.tokens.toFixed(6)} {buyAsset}</div>
            <div className="text-sm md:text-xs text-muted-foreground">${receiveAmount.usd.toFixed(2)} USD</div>
          </div>
        )}

        {/* Swap Button */}
        <Button 
          onClick={handleSwap} 
          size="lg"
          className="w-full px-8 py-6 md:py-4 text-lg md:text-sm font-medium rounded-xl min-w-[200px] group"
          variant="secondary"
          disabled={!amount || receiveAmount.tokens === 0}
        >
          Swap {sellAsset} for {buyAsset}
        </Button>
        </div>
    </div>
  );
};

export default BuyCard;