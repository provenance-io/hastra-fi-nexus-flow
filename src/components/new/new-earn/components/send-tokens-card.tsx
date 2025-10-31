import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  useDepositAndMint,
  useRequestRedeem,
  useTransfer,
} from "@/hooks/use-solana-tx";
import {
  useCoinGeckoPrice,
  usePendingRedemptionRequest,
} from "@/hooks/useSolanaQuery";
import { TokenData, useTokenPortfolio } from "@/hooks/useTokenPortfolio";
import { PRIME, USDC, wYLDS } from "@/types/tokens";
import { AnchorError } from "@coral-xyz/anchor";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import z from "zod";
import wyldsIcon from "@/assets/new/about-page/wYLDS.png";
import { useToast } from "@/hooks/use-toast";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import { Notice } from "./notice";
import { PublicKey } from "@solana/web3.js";

const formSchema = z.object({
  sending: z.string(),
  recipientAddress: z.string(),
  amount: z.string().min(1),
});

const DisplayTokenSelect = ({
  token,
}: {
  token:
    | TokenData
    | { mint: string; icon: string; token: string; amount: string };
}) => {
  const isImage = token.icon.startsWith("/") || token.icon.startsWith("http");
  return (
    <div className="flex items-center justify-between w-full text-[20px] md:text-[25px] leading-[116%] ">
      <div className="flex items-center gap-4 w-full">
        {isImage ? (
          <div className="flex items-center justify-center">
            <img
              src={token.icon}
              alt={`${token.token} Token`}
              className="size-[36px] rounded-full object-cover shadow-sm flex-shrink-0"
            />
          </div>
        ) : (
          <div className="size-[36px] rounded-xl bg-hastra-teal/10 flex items-center justify-center shadow-sm flex-shrink-0">
            <span className="text-hastra-teal font-bold text-base">
              {token.icon}
            </span>
          </div>
        )}
        {token.token}
      </div>
      <div className="w-full text-end pr-2">{token.amount}</div>
    </div>
  );
};

export const SendTokensCard = () => {
  const [exchangeRate, setExchangeRate] = useState<object>({});
  const [txId, setTxId] = useState("");
  const [denom, setDenom] = useState<"USD" | "USDC">("USD");

  // Hook calls
  const { toast } = useToast();
  const { data: geckoPrice } = useCoinGeckoPrice();
  const { tokens, refetchTokens } = useTokenPortfolio();
  const { invoke } = useTransfer();

  useEffect(() => {
    const o = {};
    o["SOL"] = (geckoPrice?.solana?.usd as number) || 0; // SOL to USD
    o[USDC] = 1; // USDC to USD
    o[wYLDS] = 1; // wYLDS to USD
    o[PRIME] = 1; // PRIME to wYLDS (1:1 with USD for now)
    o["HASH"] = (geckoPrice?.["hash-2"]?.usd as number) || 0; // HASH to USD
    setExchangeRate(o);
    console.dir(tokens);
  }, [setExchangeRate, geckoPrice, tokens]);

  // Form Register
  const form = useForm<z.infer<typeof formSchema>>({
    defaultValues: {
      amount: "0",
      sending: tokens.find((t) => t.mint === USDC)?.mint || "",
      recipientAddress: "",
    },
    resolver: zodResolver(formSchema),
  });

  const watchSending = form.watch("sending");
  const watchRecipientAddress = form.watch("recipientAddress");
  const watchAmount = form.watch("amount");

  // Helper functions
  const handleMaxClick = () => {
    const maxBalance = tokens.find((t) => t.address === watchSending);
    const gasBuffer = watchSending === "SOL" ? 0.01 : 0; // Reserve SOL for gas
    const maxAmount = Math.max(0, (maxBalance?.amount || 0) - gasBuffer);
    if (denom === "USD") {
      form.setValue(
        "amount",
        (maxAmount * exchangeRate[watchSending]).toFixed(2)
      );
    } else {
      form.setValue("amount", maxAmount.toFixed(6));
    }
  };

  const calculateEquivalent = () => {
    if (!watchAmount || isNaN(parseFloat(watchAmount))) return 0;

    const inputAmount = parseFloat(watchAmount);

    if (denom !== "USD") {
      return inputAmount * exchangeRate[watchSending]; // Token to USD
    } else {
      return inputAmount / exchangeRate[watchSending]; // USD to Token
    }
  };

  const balance = (address: string) => {
    const t = tokens.find((t) => t.address === address);
    return t ? t.amount : 0;
  };

  const symbol = (address: string) => {
    const t = tokens.find((t) => t.address === address);
    return t ? t.token : "Unknown";
  };

  const icon = (address: string, defaultIcon: string = wyldsIcon) => {
    const t = tokens.find((t) => t.address === address);
    return t?.icon ? t.icon : defaultIcon;
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

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    setTxId("");
    if (!data.recipientAddress) {
      toast({
        title: "Recipient Required",
        description: "Please enter a recipient wallet address.",
        variant: "destructive",
      });
      return;
    }

    if (!validateAddress(data.recipientAddress)) {
      toast({
        title: "Invalid Address",
        description: "Please enter a valid Solana wallet address.",
        variant: "destructive",
      });
      return;
    }

    if (!data.amount || parseFloat(data.amount) <= 0) {
      toast({
        title: "Invalid Amount",
        description: "Please enter a valid amount to send.",
        variant: "destructive",
      });
      return;
    }

    const sendAmount =
      denom !== "USD" ? parseFloat(data.amount) : calculateEquivalent();

    if (sendAmount > balance(data.sending)) {
      toast({
        title: "Insufficient Balance",
        description: `You don't have enough ${symbol(data.sending)} tokens.`,
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Transaction Initiated",
      description: `Sending ${
        denom !== "USD" ? data.amount : Number(data.amount).toFixed(6)
      } ${symbol(data.sending)} to ${data.recipientAddress.slice(0, 8)}...`,
    });

    invoke(data.recipientAddress, data.sending, Number(data.amount))
      .then((response) => {
        setTxId(response.txId);
        toast({
          title: "Success",
          description: `Sent ${data.amount} ${
            denom === "USD" ? "USD" : symbol(data.sending)
          } to ${data.recipientAddress.slice(0, 8)}...`,
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

  return (
    <Card className="py-[52px] md:py-[70px] px-[17px] md:px-[58px] text-brand-white bg-[#1F273678] rounded-[35px]">
      <CardHeader className="p-0 pb-[58px] md:pb-[142px]">
        <CardTitle className="p-0 text-[25px] md:text-[35px] font-[650] leading-[111%]">
          Send Tokens
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="space-y-[60px] md:space-y-[72px]">
              <div className="w-full flex flex-col md:flex-row items-center justify-between gap-[60px] md:gap-8">
                <FormField
                  control={form.control}
                  name="sending"
                  render={({ field }) => (
                    <FormItem className="space-y-8 w-full">
                      <FormLabel className="text-[22px] md:text-[25px] leading-[111%]">
                        Select token to send
                      </FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger className="bg-[#021E4830] rounded-[39px] flex items-center py-8 border-l-0 border-r-0 border-y-[0.1px] border-gray-600 w-full">
                            {tokens && tokens.length > 0 && (
                              <DisplayTokenSelect
                                token={
                                  tokens.find((t) => t.mint === watchSending) ||
                                  tokens[0]
                                }
                              />
                            )}
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className="w-full">
                          {tokens.map((t) => (
                            <SelectItem
                              value={t.mint}
                              disabled={t.amount === 0}
                            >
                              <DisplayTokenSelect token={t} />
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="recipientAddress"
                  render={({ field }) => (
                    <FormItem className="space-y-8 w-full">
                      <FormLabel className="text-[22px] md:text-[25px] leading-[111%]">
                        Recipient wallet address
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter recipient address..."
                          className="[&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none [-moz-appearance:textfield] text-[20px] md:text-[25px] bg-[#021E4830] leading-[116%] rounded-[39px] pl-10 flex items-center py-8 border-l-0 border-r-0 border-y-[0.1px] border-gray-600 w-full"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="amount"
                render={({ field }) => (
                  <FormItem className="space-y-8 w-full">
                    <div className="flex flex-col md:flex-row justify-between md:items-center">
                      <FormLabel className="text-[22px] md:text-[25px] leading-[111%]">
                        Amount
                      </FormLabel>
                      <div className="flex items-center gap-x-3 pt-5 md:pt-0">
                        <Button
                          type="button"
                          size="custom"
                          variant="noShadow"
                          className={cn(
                            "rounded-full text-[13px] md:text-[22px] leading-[111%] py-2 px-[17px] md:py-[15px] md:px-[31px] hover:text-[#212E3C]",
                            denom === "USD"
                              ? "bg-[#BABABA] text-[#212E3C]"
                              : "bg-[#212E3C] text-[#CBCBCB]"
                          )}
                          onClick={() => setDenom("USD")}
                        >
                          USD $
                        </Button>
                        <Button
                          type="button"
                          size="custom"
                          variant="noShadow"
                          className={cn(
                            "rounded-full text-[13px] md:text-[22px] leading-[111%] py-2 px-[17px] md:py-[15px] md:px-[31px] hover:text-[#212E3C]",
                            denom === "USDC"
                              ? "bg-[#BABABA] text-[#212E3C]"
                              : "bg-[#212E3C] text-[#CBCBCB]"
                          )}
                          onClick={() => setDenom("USDC")}
                        >
                          USDC
                        </Button>
                        <Button
                          type="button"
                          size="custom"
                          variant="noShadow"
                          className={cn(
                            "rounded-full text-[13px] md:text-[22px] leading-[111%] py-2 px-[17px] md:py-[15px] md:px-[31px] text-[#CBCBCB] bg-[#212E3C] hover:bg-[#BABABA] hover:text-[#212E3C]"
                          )}
                          onClick={handleMaxClick}
                        >
                          MAX
                        </Button>
                      </div>
                    </div>
                    <FormControl>
                      <div className="relative">
                        <Input
                          type="number"
                          min={0}
                          step={0.01}
                          className="[&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none [-moz-appearance:textfield] text-[20px] md:text-[25px] bg-[#021E4830] leading-[116%] rounded-[39px] pl-10 flex items-center py-8 border-l-0 border-r-0 border-y-[0.1px] border-gray-600 w-full"
                          {...field}
                        />
                        {denom === "USD" && (
                          <p className="absolute top-[22px] md:top-[18px] left-5 md:left-4 text-[20px] md:text-[25px] leading-[116%]">
                            $
                          </p>
                        )}
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            {Number(watchAmount) > 0 && Boolean(watchRecipientAddress) && (
              <Notice
                notice={
                  <div className="text-brand-white text-pretty md:w-2/3 flex flex-col leading-[143%]">
                    <p>Transaction Summary</p>
                    <p className="text-brand-purple font-[650]">
                      Send {watchAmount} {symbol(watchSending)}
                    </p>
                    <p>To: {watchRecipientAddress.slice(0, 8)}...</p>
                  </div>
                }
                borderColor="border-brand-purple"
              />
            )}
            <div className="pt-10 text-gray-500 w-full text-center">
              Always verify transactions before confirming
            </div>
            <div className="w-full flex justify-center pt-10 md:pt-20">
              <Button
                disabled={!Number(watchAmount) || !watchRecipientAddress}
                size="custom"
                className="rounded-full text-[13px] md:text-base leading-[110%] shadow-brand-card text-brand-white py-[20px] px-[26px] hover:bg-brand-background bg-brand-background"
                variant="noShadow"
              >
                Send {symbol(watchSending)}
                <ArrowRight className="size-6" />
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};
