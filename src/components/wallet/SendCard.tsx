import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import { DollarSign, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useCoinGeckoPrice } from "@/hooks/useSolanaQuery.ts";
import { USDC, wYLDS } from "@/types/tokens.ts";
import { PublicKey } from "@solana/web3.js";
import hastraIcon from "/lovable-uploads/bb5fd324-8133-40de-98e0-34ae8f181798.png";
import primeToken from "@/assets/prime-token.png";
import { useTokenPortfolio } from "@/hooks/useTokenPortfolio.ts";
import { useTransfer } from "@/hooks/use-solana-tx.ts";
import { AnchorError } from "@coral-xyz/anchor";
import { match } from "ts-pattern";

const SendCard = ({ canSend }: { canSend: boolean }) => {
  const [exchangeRate, setExchangeRate] = useState<object>({});
  const [selectedToken, setSelectedToken] = useState<string>(wYLDS);
  const [txId, setTxId] = useState<string>("");
  const [recipientAddress, setRecipientAddress] = useState("");
  const [amount, setAmount] = useState("");
  const [denomination, setDenomination] = useState<"token" | "usd">("token");
  const { toast } = useToast();
  const { tokens, tokensLoading, refetchTokens } = useTokenPortfolio();
  const { data: geckoPrice } = useCoinGeckoPrice();
  const { invoke } = useTransfer();

  useEffect(() => {
    const o = {};
    o["SOL"] = (geckoPrice?.solana?.usd as number) || 0; // SOL to USD
    o[USDC] = 1; // USDC to USD
    o[wYLDS] = 1; // wYLDS to USD
    setExchangeRate(o);
  }, [setExchangeRate, geckoPrice]);

  const calculateEquivalent = () => {
    if (!amount || isNaN(parseFloat(amount))) return 0;

    const inputAmount = parseFloat(amount);

    if (denomination === "token") {
      return inputAmount * exchangeRate[selectedToken]; // Token to USD
    } else {
      return inputAmount / exchangeRate[selectedToken]; // USD to Token
    }
  };

  const validateAddress = (address: string) => {
    try {
      new PublicKey(address);
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  };

  const balance = (address: string) => {
    const t = tokens.find((t) => t.address === address);
    return t ? t.value : 0;
  };

  const symbol = (token: string) => {
    const t = tokens.find((t) => t.address === token);
    return t ? t.token : token;
  };

  const icon = (address: string, defaultIcon: string = hastraIcon) => {
    if (address === "PRIME")
      return "/lovable-uploads/e7aaba79-32ba-4351-820f-5388f7bed1c2.png";
    if (address === wYLDS)
      return "/lovable-uploads/d73baf3a-34c8-4ad7-8378-e419bb8268ff.png";
    if (address === USDC)
      return "/lovable-uploads/4bfd88a4-fef5-42d3-81d9-236145936adc.png";
    if (address === "PRIME") return primeToken;
    if (address === "hash-mock") return "/src/assets/hash-icon.png";
    const t = tokens.find((t) => t.address === address);
    return t?.icon ? t.icon : defaultIcon;
  };

  const handleSend = () => {
    setTxId("");
    if (!recipientAddress) {
      toast({
        title: "Recipient Required",
        description: "Please enter a recipient wallet address.",
        variant: "destructive",
      });
      return;
    }

    if (!validateAddress(recipientAddress)) {
      toast({
        title: "Invalid Address",
        description: "Please enter a valid Solana wallet address.",
        variant: "destructive",
      });
      return;
    }

    if (!amount || parseFloat(amount) <= 0) {
      toast({
        title: "Invalid Amount",
        description: "Please enter a valid amount to send.",
        variant: "destructive",
      });
      return;
    }

    const sendAmount =
      denomination === "token" ? parseFloat(amount) : calculateEquivalent();

    if (sendAmount > balance(selectedToken)) {
      toast({
        title: "Insufficient Balance",
        description: `You don't have enough ${symbol(selectedToken)} tokens.`,
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Transaction Initiated",
      description: `Sending ${
        denomination === "token" ? amount : sendAmount.toFixed(6)
      } ${selectedToken} to ${recipientAddress.slice(0, 8)}...`,
    });

    invoke(recipientAddress, selectedToken, Number(amount))
      .then((response) => {
        setTxId(response.txId);
        toast({
          title: "Success",
          description: `Sent ${amount} ${
            denomination === "usd" ? "USD" : symbol(selectedToken)
          } to ${recipientAddress.slice(0, 8)}...`,
          className:
            "border-l-4 border-l-hastra-teal bg-hastra-teal/10 shadow-hastra",
        });
      })
      .catch((error) => {
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
          variant: "destructive",
        });
      })
      .finally(() => refetchTokens());
  };

  const handleMaxClick = () => {
    const maxAmount = balance(selectedToken);
    if (denomination === "token") {
      setAmount(maxAmount.toString());
    } else {
      const usdValue = maxAmount * exchangeRate[selectedToken];
      setAmount(usdValue.toString());
    }
  };

  const equivalent = calculateEquivalent();

  return (
    <div className="space-y-8">
      <div className="flex items-center gap-4 mb-8">
        <Send className="w-6 h-6 md:w-5 md:h-5 text-header-glow" />
        <h3 className="text-xl md:text-xl font-bold">Send Tokens</h3>
      </div>
      <div className="w-full flex justify-center">
        {match(canSend)
          .with(true, () => (
            <div className="bg-background/30 rounded-2xl border border-border/20 p-4 md:p-6 space-y-6 max-w-3xl w-full">
              {/* Token Selection */}
              <div className="space-y-4">
                <Label className="text-base md:text-sm font-semibold text-foreground">
                  Select token to send
                </Label>
                <Select
                  value={selectedToken}
                  onValueChange={(value) => setSelectedToken(value)}
                >
                  <SelectTrigger className="bg-muted/50 h-12 md:h-auto font-sans">
                    {tokensLoading ? (
                      "Loading..."
                    ) : (
                      <div className="flex items-center justify-between w-full">
                        <div className="flex items-center gap-3">
                          <img
                            src={icon(selectedToken)}
                            alt={symbol(selectedToken)}
                            className="w-6 h-6 md:w-5 md:h-5 rounded-full flex-shrink-0 object-cover"
                          />
                          <span className="text-sm md:text-sm font-medium font-sans">
                            {symbol(selectedToken)}
                          </span>
                        </div>
                        <span className="text-xs md:text-xs text-muted-foreground font-mono">
                          {balance(selectedToken)}
                        </span>
                      </div>
                    )}
                  </SelectTrigger>
                  <SelectContent className="bg-card/90 backdrop-blur-sm border border-border/20 z-50">
                    {tokens.map((token) => (
                      <SelectItem
                        key={token.address}
                        value={token.address}
                        className="py-3 md:py-2"
                      >
                        <div className="flex items-center justify-between w-full py-1 md:py-1">
                          <div className="flex items-center gap-3">
                            <img
                              src={icon(token.address)}
                              alt={token.token}
                              className="w-6 h-6 md:w-5 md:h-5 rounded-full flex-shrink-0 object-cover"
                            />
                            <span className="text-sm md:text-sm font-medium font-sans">
                              {symbol(token.address)}
                            </span>
                          </div>
                          <span className="text-xs md:text-xs text-muted-foreground font-mono ml-4">
                            {token.amount}
                          </span>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Recipient Address */}
              <div className="space-y-4">
                <Label className="text-base md:text-sm font-semibold text-foreground font-sans">
                  Recipient wallet address
                </Label>
                <Input
                  placeholder="Enter recipient address..."
                  value={recipientAddress}
                  onChange={(e) => setRecipientAddress(e.target.value)}
                  className="bg-muted/50 h-12 md:h-auto text-base md:text-sm font-sans"
                />
              </div>

              {/* Amount Input */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Label className="text-base md:text-sm font-semibold text-foreground font-sans">
                    Amount to send
                  </Label>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center bg-muted/30 rounded-md p-1">
                      <Button
                        variant={denomination === "token" ? "default" : "ghost"}
                        size="sm"
                        onClick={() => setDenomination("token")}
                        className={`h-8 md:h-7 text-sm md:text-xs px-3 md:px-2 font-sans ${
                          denomination === "token"
                            ? "btn-hastra"
                            : "text-muted-foreground hover:text-auburn-primary"
                        }`}
                      >
                        {symbol(selectedToken)}
                      </Button>
                      <Button
                        variant={denomination === "usd" ? "default" : "ghost"}
                        size="sm"
                        onClick={() => setDenomination("usd")}
                        className={`h-8 md:h-7 text-sm md:text-xs px-3 md:px-2 font-sans ${
                          denomination === "usd"
                            ? "btn-hastra"
                            : "text-muted-foreground hover:text-auburn-primary"
                        }`}
                      >
                        <DollarSign className="w-4 h-4 md:w-3 md:h-3 mr-1" />
                        USD
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
                  placeholder={`Enter amount in ${
                    denomination === "token" ? symbol(selectedToken) : "USD"
                  }`}
                  value={amount}
                  onChange={(e) => {
                    setAmount(e.target.value);
                    setTxId("");
                  }}
                  className="bg-muted/50 h-12 md:h-auto text-base md:text-sm font-sans [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none [&]:[-moz-appearance:textfield]"
                />
                {amount && equivalent > 0 && (
                  <div className="text-xs text-muted-foreground">
                    ≈{" "}
                    {denomination === "token"
                      ? `$${equivalent.toFixed(2)} USD`
                      : `${equivalent.toFixed(6)} ${symbol(selectedToken)}`}
                  </div>
                )}
              </div>

              {/* Transaction Summary */}
              {amount && recipientAddress && (
                <div className="bg-background/30 border border-hastra-teal/30 rounded-xl p-4 md:p-6">
                  <div className="text-sm text-muted-foreground mb-2">
                    Transaction Summary
                  </div>
                  <div className="font-semibold text-lg md:text-base text-hastra-teal">
                    Send{" "}
                    {denomination === "token" ? amount : equivalent.toFixed(6)}{" "}
                    {symbol(selectedToken)}
                  </div>
                  <div className="text-xs text-muted-foreground font-mono mt-1">
                    To: {recipientAddress.slice(0, 8)}...
                    {recipientAddress.slice(-8)}
                  </div>
                  {txId && (
                    <div className="text-xs text-muted-foreground font-mono mt-1">
                      <a
                        href={`${
                          import.meta.env.VITE_EXPLORER_URL
                        }/tx/${txId}?cluster=${
                          import.meta.env.VITE_SOLANA_CLUSTER_NAME
                        }`}
                        target="_blank"
                        className={"underline"}
                        rel="noopener noreferrer"
                      >
                        View {txId.slice(0, 8)}...{txId.slice(-8)} on Explorer
                      </a>
                    </div>
                  )}
                </div>
              )}

              {/* Send Button */}
              <Button
                onClick={handleSend}
                size="lg"
                className="w-full px-6 py-4 md:py-3 text-base md:text-sm font-medium font-sans rounded-xl min-w-[200px] group"
                variant="secondary"
                disabled={!amount || !recipientAddress}
              >
                Send {symbol(selectedToken)}
              </Button>
            </div>
          ))
          .otherwise(() => (
            <div className="flex items-center justify-between">
              You must have SOL and USDC, wYLDS, or PRIME in your wallet to
              send.
            </div>
          ))}
      </div>
    </div>
  );
};

export default SendCard;
