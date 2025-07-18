import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Send, DollarSign } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import yieldIcon from '/lovable-uploads/0db58d6a-9142-44d8-8e1d-a2283f6ac976.png';
import hashIcon from '@/assets/hash-icon.png';

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
    <Card className="w-full glass-effect border-border/50 hover:border-header-glow/30 transition-all duration-300 group">
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center gap-2 text-xl font-bold">
          <Send className="w-5 h-5 text-header-glow" />
          Send Tokens
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Token Selection */}
        <div className="space-y-2">
          <Label className="text-sm font-medium text-foreground">Select token to send</Label>
          <Select value={selectedToken} onValueChange={(value: 'YIELD' | 'HASH') => setSelectedToken(value)}>
            <SelectTrigger className="bg-muted/50 border-hastra-teal/20 focus:border-hastra-teal focus:ring-hastra-teal/20">
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="bg-card border-hastra-teal/20">
              <SelectItem value="YIELD">
                <div className="flex items-center gap-2">
                  <img src={yieldIcon} alt="YIELD" className="w-5 h-5 rounded-full" />
                  YIELD (Balance: {tokenBalances.YIELD})
                </div>
              </SelectItem>
              <SelectItem value="HASH">
                <div className="flex items-center gap-2">
                  <img src={hashIcon} alt="HASH" className="w-5 h-5 rounded-full" />
                  HASH (Balance: {tokenBalances.HASH})
                </div>
              </SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Recipient Address */}
        <div className="space-y-2">
          <Label className="text-sm font-medium text-foreground">Recipient wallet address</Label>
          <Input
            placeholder="Enter Solana wallet address..."
            value={recipientAddress}
            onChange={(e) => setRecipientAddress(e.target.value)}
            className="font-mono text-sm bg-muted/50 border-hastra-teal/20 focus:border-hastra-teal focus:ring-hastra-teal/20"
          />
        </div>

        {/* Amount Input */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Label className="text-sm font-medium text-foreground">Amount to send</Label>
            <div className="flex items-center bg-muted/30 rounded-md p-1">
              <Button 
                variant={denomination === 'token' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setDenomination('token')}
                className={`h-7 text-xs px-2 ${denomination === 'token' ? 'btn-hastra' : 'text-muted-foreground hover:text-foreground'}`}
              >
                {selectedToken}
              </Button>
              <Button 
                variant={denomination === 'usd' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setDenomination('usd')}
                className={`h-7 text-xs px-2 ${denomination === 'usd' ? 'btn-hastra' : 'text-muted-foreground hover:text-foreground'}`}
              >
                <DollarSign className="w-3 h-3 mr-1" />
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
            className="bg-muted/50 border-hastra-teal/20 focus:border-hastra-teal focus:ring-hastra-teal/20 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none [&]:[-moz-appearance:textfield]"
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
          className="w-full btn-hastra h-12 text-base font-semibold"
          disabled={!amount || !recipientAddress}
        >
          Send {selectedToken}
        </Button>
      </CardContent>
    </Card>
  );
};

export default SendCard;