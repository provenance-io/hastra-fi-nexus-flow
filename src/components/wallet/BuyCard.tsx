import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ArrowUpDown, DollarSign } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

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
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <ArrowUpDown className="w-5 h-5" />
          Buy Tokens
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Sell Asset Selection */}
        <div className="space-y-2">
          <Label>You're selling</Label>
          <Select value={sellAsset} onValueChange={(value: 'USDC' | 'SOL') => setSellAsset(value)}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="USDC">USDC (Balance: {mockBalances.USDC})</SelectItem>
              <SelectItem value="SOL">Solana (Balance: {mockBalances.SOL})</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Buy Asset Selection */}
        <div className="space-y-2">
          <Label>You're buying</Label>
          <Select value={buyAsset} onValueChange={(value: 'YIELD' | 'HASH') => setBuyAsset(value)}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="YIELD">YIELD Token</SelectItem>
              <SelectItem value="HASH">HASH Token</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Amount Input */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Label>Amount</Label>
            <div className="flex gap-2">
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => setDenomination(denomination === 'usd' ? 'token' : 'usd')}
              >
                <DollarSign className="w-3 h-3 mr-1" />
                {denomination === 'usd' ? 'USD' : sellAsset}
              </Button>
              <Button variant="outline" size="sm" onClick={handleMaxClick}>
                Max
              </Button>
            </div>
          </div>
          <Input
            type="number"
            placeholder={`Enter amount in ${denomination === 'usd' ? 'USD' : sellAsset}`}
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>

        {/* Receive Amount Display */}
        {amount && receiveAmount.tokens > 0 && (
          <div className="bg-muted/50 p-3 rounded-lg">
            <div className="text-sm text-muted-foreground">You'll receive</div>
            <div className="font-semibold">{receiveAmount.tokens.toFixed(6)} {buyAsset}</div>
            <div className="text-xs text-muted-foreground">${receiveAmount.usd.toFixed(2)} USD</div>
          </div>
        )}

        {/* Swap Button */}
        <Button 
          onClick={handleSwap} 
          className="w-full"
          disabled={!amount || receiveAmount.tokens === 0}
        >
          Swap {sellAsset} for {buyAsset}
        </Button>
      </CardContent>
    </Card>
  );
};

export default BuyCard;