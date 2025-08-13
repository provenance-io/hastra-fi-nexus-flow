import React, {useEffect, useState} from 'react';
import {Button} from '@/components/ui/button';
import {Input} from '@/components/ui/input';
import {Label} from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger
} from '@/components/ui/select';
import {ArrowUpDown, DollarSign} from 'lucide-react';
import {useToast} from '@/hooks/use-toast';
import hastraIcon
  from '/lovable-uploads/9da758ec-2299-4fe7-82e4-e7fb95e9cdb8.png';

import {useTokenPortfolio} from "@/hooks/useTokenPortfolio.ts";
import {useCoinGeckoPrice} from "@/hooks/useSolanaQuery.ts";
import {USDC, wYLDS} from "@/types/tokens";
import {useDepositAndMint} from "@/hooks/use-solana-tx.ts";
import {AnchorError} from "@coral-xyz/anchor";
const BuyCard = () => {

  const [exchangeRate, setExchangeRate] = useState<object>({});
  const [sellAsset, setSellAsset] = useState<string>(USDC);
  const [buyAsset, setBuyAsset] = useState<string>(wYLDS);
  const [amount, setAmount] = useState('');
  const [denomination, setDenomination] = useState<'token' | 'usd'>('usd');
  const [txId, setTxId] = useState('');
  const { toast } = useToast();
  const { data: geckoPrice } = useCoinGeckoPrice();
  const { tokens } = useTokenPortfolio();
  const {invoke} = useDepositAndMint();

  useEffect(() => {
    const o = {};
    o['SOL'] = geckoPrice?.solana?.usd as number || 0; // SOL to USD
    o[USDC] = 1;  // USDC to USD
    o[wYLDS] = 1; // wYLDS to USD
    o['swYLDS'] = 1; // swYLDS to USD (1:1 with USD for now)
    o['HASH'] = geckoPrice?.['hash-2']?.usd as number || 0;   // HASH to USD

    setExchangeRate(o)

    console.dir(tokens);
  }, [setExchangeRate, geckoPrice, tokens]);

  const calculateReceiveAmount = () => {
    if (!amount || isNaN(parseFloat(amount))) return { tokens: 0, usd: 0 };

    const inputAmount = parseFloat(amount);
    let usdValue: number;

    if (denomination === 'usd') {
      usdValue = inputAmount;
    } else {
      usdValue = inputAmount * exchangeRate[sellAsset];
    }

    const receiveTokens = usdValue / exchangeRate[buyAsset];
    return {
      tokens: receiveTokens,
      usd: usdValue
    };
  };

  const handleMaxClick = () => {
    const maxBalance = tokens.find(t => t.address === sellAsset);
    const gasBuffer = sellAsset === 'SOL' ? 0.01 : 0; // Reserve SOL for gas
    const maxAmount = Math.max(0, (maxBalance?.amount || 0) - gasBuffer);
    
    if (denomination === 'usd') {
      setAmount((maxAmount * exchangeRate[sellAsset]).toFixed(2));
    } else {
      setAmount(maxAmount.toFixed(6));
    }
  };

  const handleSwap = () => {
    setTxId("");
    const receiveAmount = calculateReceiveAmount();
    if (receiveAmount.tokens === 0 || receiveAmount.tokens > balance(sellAsset)) {
      toast({
        title: "Invalid Amount",
        description: "Please enter a valid amount to swap.",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "⚡ Swap Initiated",
      description: `Swapping ${amount} ${denomination === 'usd' ? 'USD' : symbol(sellAsset)} for ${receiveAmount.tokens.toFixed(6)} ${symbol(buyAsset)}`,
      className: "border-l-4 border-l-hastra-teal bg-hastra-teal/10 shadow-hastra",
    });

    invoke(Number(amount)).then((response) => {
      setTxId(response.txId);
      toast({
        title: "Success",
        description: `Swapped ${amount} ${denomination === 'usd' ? 'USD' : symbol(sellAsset)} for ${receiveAmount.tokens.toFixed(6)} ${symbol(buyAsset)}`,
        className: "border-l-4 border-l-hastra-teal bg-hastra-teal/10 shadow-hastra",
      });
    }).catch((error) => {
      let response;
      console.error(error);
      if (error instanceof AnchorError) {
        const e = error as AnchorError;
        response = `${e.error.errorCode.number} ${e.error.errorCode.code} ${e.error.errorMessage}`;
      } else {
        response = JSON.stringify(error);
      }

      toast({
        title: "Error",
        description: response,
        variant:  "destructive"
      });
    });

  };

  const balance = (address: string) => {
    const t = tokens.find(t => t.address === address);
    return t ? t.amount : 0;
  }

  const symbol = (address: string) => {
    if (address === 'swYLDS') return 'swYLDS';
    const t = tokens.find(t => t.address === address);
    return t ? t.token : '';
  }

  const icon = (address: string, defaultIcon: string = hastraIcon) => {
    if (address === 'swYLDS') return '/lovable-uploads/e7aaba79-32ba-4351-820f-5388f7bed1c2.png';
    const t = tokens.find(t => t.address === address);
    return t?.icon ? t.icon : defaultIcon;
  }

  const receiveAmount = calculateReceiveAmount();

  return (
    <div className="space-y-8">
      <div className="flex items-center gap-4 mb-8">
        <ArrowUpDown className="w-6 h-6 md:w-5 md:h-5 text-header-glow" />
        <h3 className="text-xl md:text-xl font-bold">Buy Tokens</h3>
      </div>
      <div className="bg-background/30 rounded-2xl border border-border/20 p-6 space-y-6">
        {/* Sell Asset Selection */}
        <div className="space-y-4">
          <Label className="text-base md:text-sm font-semibold text-foreground">You're selling</Label>
          <Select value={sellAsset} onValueChange={(value) => setSellAsset(value)}>
            <SelectTrigger className="bg-muted/50 h-12 md:h-auto font-sans">
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center gap-3">
                  <img 
                    src={icon(sellAsset)}
                    alt={symbol(sellAsset)}
                    className="w-6 h-6 md:w-5 md:h-5 rounded-full flex-shrink-0 object-cover" 
                  />
                  <span className="text-sm md:text-sm font-medium font-sans">{symbol(sellAsset)}</span>
                </div>
                <span className="text-xs md:text-xs text-muted-foreground font-mono">{balance(sellAsset)}</span>
              </div>
            </SelectTrigger>
            <SelectContent className="bg-card/90 backdrop-blur-sm border border-border/20 z-50">
              <SelectItem value={USDC} className="py-3 md:py-2">
                <div className="flex items-center justify-between w-full py-1 md:py-1">
                  <div className="flex items-center gap-3">
                    <img src={icon(sellAsset)} alt={symbol(sellAsset)} className="w-6 h-6 md:w-5 md:h-5 rounded-full flex-shrink-0 object-cover" />
                    <span className="text-sm md:text-sm font-medium font-sans">{symbol(sellAsset)}</span>
                  </div>
                  <span className="text-xs md:text-xs text-muted-foreground font-mono ml-4">{balance(USDC)}</span>
                </div>
              </SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Buy Asset Selection */}
        <div className="space-y-4">
          <Label className="text-base md:text-sm font-semibold text-foreground">You're buying</Label>
          <Select value={buyAsset} onValueChange={(value) => setBuyAsset(value)}>
            <SelectTrigger className="bg-muted/50 h-12 md:h-auto font-sans">
              <div className="flex items-center gap-3 w-full">
                <img 
                  src={icon(buyAsset)}
                  alt={symbol(buyAsset)}
                  className="w-6 h-6 md:w-5 md:h-5 rounded-full flex-shrink-0 object-cover" 
                />
                <span className="text-sm md:text-sm font-medium font-sans">{symbol(buyAsset)}</span>
              </div>
            </SelectTrigger>
            <SelectContent className="bg-card/90 backdrop-blur-sm border border-border/20 z-50">
              <SelectItem value={wYLDS} className="py-3 md:py-2">
                <div className="flex items-center gap-3 py-1 md:py-1">
                  <img src={icon(wYLDS)} alt="wYLDS" className="w-6 h-6 md:w-5 md:h-5 rounded-full flex-shrink-0 object-cover" />
                  <span className="text-sm md:text-sm font-medium font-sans">wYLDS</span>
                </div>
              </SelectItem>
              <SelectItem value="swYLDS" className="py-3 md:py-2">
                <div className="flex items-center gap-3 py-1 md:py-1">
                  <img src="/lovable-uploads/e7aaba79-32ba-4351-820f-5388f7bed1c2.png" alt="swYLDS" className="w-6 h-6 md:w-5 md:h-5 rounded-full flex-shrink-0 object-cover" />
                  <span className="text-sm md:text-sm font-medium font-sans">swYLDS</span>
                </div>
              </SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Amount Input */}
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <Label className="text-base md:text-sm font-semibold text-foreground">Amount</Label>
            <div className="flex items-center gap-2 flex-wrap">
              <div className="flex items-center bg-muted/30 rounded-md p-1 gap-1 min-w-0">
                <Button 
                  variant={denomination === 'usd' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setDenomination('usd')}
                  className={`h-7 text-xs px-2 min-w-[50px] ${denomination === 'usd' ? 'btn-hastra' : 'text-muted-foreground hover:text-auburn-primary'}`}
                >
                  <DollarSign className="w-3 h-3 mr-1" />
                  USD
                </Button>
                <Button 
                  variant={denomination === 'token' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setDenomination('token')}
                  className={`h-7 text-xs px-2 min-w-[50px] ${denomination === 'token' ? 'btn-hastra' : 'text-muted-foreground hover:text-auburn-primary'}`}
                >
                  {symbol(sellAsset)}
                </Button>
              </div>
              <Button 
                variant="ghost"
                size="sm" 
                onClick={handleMaxClick}
                className="h-7 px-3 text-xs font-medium text-auburn-light hover:bg-auburn-primary/20 hover:text-auburn-light transition-all duration-200 bg-muted/30 rounded-md min-w-[50px]"
              >
                Max
              </Button>
            </div>
          </div>
          <Input
            type="number"
            min="0"
            step="any"
            placeholder={`Enter amount in ${denomination === 'usd' ? 'USD' : symbol(sellAsset)}`}
            value={amount}
            onChange={(e) => {
              setAmount(e.target.value);
              setTxId("");
            }}
            className="bg-muted/50 h-12 md:h-auto text-base md:text-sm [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none [&]:[-moz-appearance:textfield]"
          />
        </div>

        {/* Receive Amount Display */}
        {amount && receiveAmount.tokens > 0 && (
          <div className="bg-background/30 border border-orange-800/30 rounded-xl p-4 md:p-6">
            <div className="text-sm md:text-sm text-muted-foreground mb-2">You'll receive</div>
            <div className="font-semibold text-lg md:text-base text-[hsl(34_100%_84%)]">{receiveAmount.tokens.toFixed(2)} {symbol(buyAsset)}</div>
            <div className="text-xs md:text-xs text-muted-foreground">${receiveAmount.usd.toFixed(2)} USD</div>
            { txId && <div className="text-xs text-muted-foreground font-mono mt-1">
              <a href={`${import.meta.env.VITE_EXPLORER_URL}/tx/${txId}?cluster=${import.meta.env.VITE_SOLANA_CLUSTER_NAME}`}
                 target="_blank"
                 className={"underline"}
                 rel="noopener noreferrer">
                View {txId.slice(0,8)}...{txId.slice(-8)} on Explorer
              </a>
            </div>}
          </div>
        )}

        {/* Swap Button */}
        <Button 
          onClick={handleSwap} 
          size="lg"
          className="w-full px-6 py-4 md:py-3 text-base md:text-sm font-medium rounded-xl min-w-[200px] group"
          variant="secondary"
          disabled={!amount || receiveAmount.tokens === 0}
        >
          Swap {symbol(sellAsset)} for {symbol(buyAsset)}
        </Button>
        </div>
    </div>
  );
};

export default BuyCard;
