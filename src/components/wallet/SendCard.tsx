import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Send, DollarSign } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

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
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Send className="w-5 h-5" />
          Send Tokens
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Token Selection */}
        <div className="space-y-2">
          <Label>Select token to send</Label>
          <Select value={selectedToken} onValueChange={(value: 'YIELD' | 'HASH') => setSelectedToken(value)}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="YIELD">YIELD (Balance: {tokenBalances.YIELD})</SelectItem>
              <SelectItem value="HASH">HASH (Balance: {tokenBalances.HASH})</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Recipient Address */}
        <div className="space-y-2">
          <Label>Recipient wallet address</Label>
          <Input
            placeholder="Enter Solana wallet address..."
            value={recipientAddress}
            onChange={(e) => setRecipientAddress(e.target.value)}
            className="font-mono text-sm"
          />
        </div>

        {/* Amount Input */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Label>Amount to send</Label>
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => setDenomination(denomination === 'token' ? 'usd' : 'token')}
            >
              <DollarSign className="w-3 h-3 mr-1" />
              {denomination === 'token' ? selectedToken : 'USD'}
            </Button>
          </div>
          <Input
            type="number"
            placeholder={`Enter amount in ${denomination === 'token' ? selectedToken : 'USD'}`}
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          {amount && equivalent > 0 && (
            <div className="text-xs text-muted-foreground">
              ≈ {denomination === 'token' ? `$${equivalent.toFixed(2)} USD` : `${equivalent.toFixed(6)} ${selectedToken}`}
            </div>
          )}
        </div>

        {/* Transaction Summary */}
        {amount && recipientAddress && (
          <div className="bg-muted/50 p-3 rounded-lg">
            <div className="text-sm text-muted-foreground">Transaction Summary</div>
            <div className="font-semibold">
              Send {denomination === 'token' ? amount : equivalent.toFixed(6)} {selectedToken}
            </div>
            <div className="text-xs text-muted-foreground">
              To: {recipientAddress.slice(0, 8)}...{recipientAddress.slice(-8)}
            </div>
          </div>
        )}

        {/* Send Button */}
        <Button 
          onClick={handleSend} 
          className="w-full"
          disabled={!amount || !recipientAddress}
        >
          Send {selectedToken}
        </Button>
      </CardContent>
    </Card>
  );
};

export default SendCard;