import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Send, DollarSign } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import yieldIcon from '/lovable-uploads/0db58d6a-9142-44d8-8e1d-a2283f6ac976.png';
import hashIcon from '/lovable-uploads/bb5fd324-8133-40de-98e0-34ae8f181798.png';

const SendCard = () => {
  const [selectedToken, setSelectedToken] = useState<'YIELD' | 'HASH'>('YIELD');
  const [recipientAddress, setRecipientAddress] = useState('');
  const [amount, setAmount] = useState('');
  const [denomination, setDenomination] = useState<'token' | 'usd'>('token');
  const { toast } = useToast();

  // Mock token prices and balances
  const tokenPrices = {
    'YIELD': 0.50,
    'HASH': 1.20
  };

  const tokenBalances = {
    'YIELD': 2500,
    'HASH': 850
  };

  const calculateEquivalent = () => {
    if (!amount || isNaN(parseFloat(amount))) return 0;
    
    const inputAmount = parseFloat(amount);
    const price = tokenPrices[selectedToken];
    
    if (denomination === 'token') {
      return inputAmount * price; // Token to USD
    } else {
      return inputAmount / price; // USD to Token
    }
  };

  const validateAddress = (address: string) => {
    // Basic Solana address validation (base58, 32-44 characters)
    const solanaAddressRegex = /^[1-9A-HJ-NP-Za-km-z]{32,44}$/;
    return solanaAddressRegex.test(address);
  };

  const handleSend = () => {
    if (!recipientAddress) {
      toast({
        title: "Recipient Required",
        description: "Please enter a recipient wallet address.",
        variant: "destructive"
      });
      return;
    }

    if (!validateAddress(recipientAddress)) {
      toast({
        title: "Invalid Address",
        description: "Please enter a valid Solana wallet address.",
        variant: "destructive"
      });
      return;
    }

    if (!amount || parseFloat(amount) <= 0) {
      toast({
        title: "Invalid Amount",
        description: "Please enter a valid amount to send.",
        variant: "destructive"
      });
      return;
    }

    const sendAmount = denomination === 'token' ? parseFloat(amount) : calculateEquivalent();
    const availableBalance = tokenBalances[selectedToken];

    if (sendAmount > availableBalance) {
      toast({
        title: "Insufficient Balance",
        description: `You don't have enough ${selectedToken} tokens.`,
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Transaction Initiated",
      description: `Sending ${denomination === 'token' ? amount : sendAmount.toFixed(6)} ${selectedToken} to ${recipientAddress.slice(0, 8)}...`,
    });
  };

  const equivalent = calculateEquivalent();

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 mb-6">
        <Send className="w-6 h-6 md:w-5 md:h-5 text-header-glow" />
        <h3 className="text-2xl md:text-xl font-bold">Send Tokens</h3>
      </div>
      <div className="card-gradient rounded-2xl p-6 md:p-8 space-y-6">
        {/* Token Selection */}
        <div className="space-y-3">
          <Label className="text-base md:text-sm font-medium text-foreground">Select token to send</Label>
          <Select value={selectedToken} onValueChange={(value: 'YIELD' | 'HASH') => setSelectedToken(value)}>
            <SelectTrigger className="bg-muted/50 h-14 md:h-auto font-sans">
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center gap-4">
                  <img 
                    src={selectedToken === 'YIELD' ? yieldIcon : hashIcon} 
                    alt={selectedToken} 
                    className="w-8 h-8 md:w-6 md:h-6 rounded-full flex-shrink-0 object-cover" 
                  />
                  <span className="text-base md:text-sm font-medium font-sans">{selectedToken}</span>
                </div>
                <span className="text-sm md:text-xs text-muted-foreground font-mono">{tokenBalances[selectedToken]}</span>
              </div>
            </SelectTrigger>
            <SelectContent className="bg-card/90 backdrop-blur-sm border border-border/20 z-50">
              <SelectItem value="YIELD" className="py-4 md:py-2">
                <div className="flex items-center justify-between w-full py-2 md:py-1">
                  <div className="flex items-center gap-4">
                    <img src={yieldIcon} alt="YIELD" className="w-8 h-8 md:w-6 md:h-6 rounded-full flex-shrink-0 object-cover" />
                    <span className="text-base md:text-sm font-medium font-sans">YIELD</span>
                  </div>
                  <span className="text-sm md:text-xs text-muted-foreground font-mono ml-4">{tokenBalances.YIELD}</span>
                </div>
              </SelectItem>
              <SelectItem value="HASH" className="py-4 md:py-2">
                <div className="flex items-center justify-between w-full py-2 md:py-1">
                  <div className="flex items-center gap-4">
                    <img src={hashIcon} alt="HASH" className="w-8 h-8 md:w-6 md:h-6 rounded-full object-cover flex-shrink-0" />
                    <span className="text-base md:text-sm font-medium font-sans">HASH</span>
                  </div>
                  <span className="text-sm md:text-xs text-muted-foreground font-mono ml-4">{tokenBalances.HASH}</span>
                </div>
              </SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Recipient Address */}
        <div className="space-y-3">
          <Label className="text-base md:text-sm font-medium text-foreground font-sans">Recipient wallet address</Label>
          <Input
            placeholder="Enter recipient address..."
            value={recipientAddress}
            onChange={(e) => setRecipientAddress(e.target.value)}
            className="font-mono text-base md:text-sm bg-muted/50 h-14 md:h-auto"
          />
        </div>

        {/* Amount Input */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <Label className="text-base md:text-sm font-medium text-foreground font-sans">Amount to send</Label>
            <div className="flex items-center bg-muted/30 rounded-md p-1">
              <Button 
                variant={denomination === 'token' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setDenomination('token')}
                className={`h-8 md:h-7 text-sm md:text-xs px-3 md:px-2 font-sans ${denomination === 'token' ? 'btn-hastra' : 'text-muted-foreground hover:text-foreground'}`}
              >
                {selectedToken}
              </Button>
              <Button 
                variant={denomination === 'usd' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setDenomination('usd')}
                className={`h-8 md:h-7 text-sm md:text-xs px-3 md:px-2 font-sans ${denomination === 'usd' ? 'btn-hastra' : 'text-muted-foreground hover:text-foreground'}`}
              >
                <DollarSign className="w-4 h-4 md:w-3 md:h-3 mr-1" />
                USD
              </Button>
            </div>
          </div>
          <Input
            type="number"
            min="0"
            step="any"
            placeholder={`Enter amount in ${denomination === 'token' ? selectedToken : 'USD'}`}
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="bg-muted/50 h-14 md:h-auto text-lg md:text-base font-sans [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none [&]:[-moz-appearance:textfield]"
          />
          {amount && equivalent > 0 && (
            <div className="text-xs text-muted-foreground">
              ≈ {denomination === 'token' ? `$${equivalent.toFixed(2)} USD` : `${equivalent.toFixed(6)} ${selectedToken}`}
            </div>
          )}
        </div>

        {/* Transaction Summary */}
        {amount && recipientAddress && (
          <div className="glass-hastra rounded-lg p-4 border border-hastra-teal/20">
            <div className="text-sm text-muted-foreground mb-1">Transaction Summary</div>
            <div className="font-semibold text-lg text-hastra-teal">
              Send {denomination === 'token' ? amount : equivalent.toFixed(6)} {selectedToken}
            </div>
            <div className="text-xs text-muted-foreground font-mono">
              To: {recipientAddress.slice(0, 8)}...{recipientAddress.slice(-8)}
            </div>
          </div>
        )}

        {/* Send Button */}
        <Button 
          onClick={handleSend} 
          size="lg"
          className="w-full bg-orange-900/20 border border-orange-800/30 text-orange-300 hover:bg-orange-900/30 hover:border-orange-800/40 focus-ring px-8 py-6 md:py-4 text-lg md:text-sm font-medium font-sans rounded-xl min-w-[200px] group transition-all duration-200"
          disabled={!amount || !recipientAddress}
        >
          Send {selectedToken}
        </Button>
        </div>
    </div>
  );
};

export default SendCard;