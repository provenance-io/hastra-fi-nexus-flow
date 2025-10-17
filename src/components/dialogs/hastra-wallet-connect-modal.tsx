import { useState, useMemo, useEffect } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import { WalletReadyState } from "@solana/wallet-adapter-base";
import { useHastraWalletConnectModal } from "@/contexts/HastraWalletModalContext";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Checkbox } from "@/components/ui/checkbox";
import { ExternalLink } from "lucide-react";
import { CardContent, CardFooter } from "../ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

/**
 * Handles accepting terms and conditions (if required) and connecting a wallet
 * @returns
 */
export function HastraWalletConnectModal() {
  const termsAcceptedKey = "termsAccepted";
  const { wallets, select, wallet, connect } = useWallet();
  const { visible, setVisible } = useHastraWalletConnectModal();
  const [showTerms, setShowTerms] = useState(true);
  const [expandedWallets, setExpandedWallets] = useState(false);

  // State for terms acceptance
  const [agreed, setAgreed] = useState(false);
  const termsAccepted = localStorage.getItem(termsAcceptedKey);
  const [accordionValue, setAccordionValue] = useState<"terms" | "wallets">();

  useEffect(() => {
    if (showTerms && !termsAccepted && !agreed) {
      setAccordionValue("terms");
    } else {
      setAccordionValue("wallets");
    }
  }, [showTerms, termsAccepted, agreed]);

  // Categorize wallets like the original adapter
  const [installedWallets, notDetectedWallets] = useMemo(() => {
    const installed = [];
    const notDetected = [];

    for (const wallet of wallets) {
      if (wallet.readyState === WalletReadyState.Installed) {
        installed.push(wallet);
      } else if (wallet.readyState === WalletReadyState.NotDetected) {
        notDetected.push(wallet);
      }
      // Include Loadable wallets (like WalletConnect) in installed if ready
      else if (wallet.readyState === WalletReadyState.Loadable) {
        installed.push(wallet);
      }
    }

    return [installed, notDetected];
  }, [wallets]);

  // Get more wallets to show (first 3 not detected + get more button)
  const collapsedWallets = useMemo(
    () => notDetectedWallets.slice(0, 3),
    [notDetectedWallets]
  );

  const hiddenWallets = useMemo(
    () => notDetectedWallets.slice(3),
    [notDetectedWallets]
  );

  const handleWalletSelect = async (wallet) => {
    if (!agreed && !termsAccepted) return;

    if (!termsAccepted) {
      localStorage.setItem(termsAcceptedKey, "true");
    }

    try {
      select(wallet.adapter.name);
      // For loadable wallets like WalletConnect, we may need to connect explicitly
      if (wallet.readyState === WalletReadyState.Loadable) {
        await connect();
      }
      setVisible(false);
    } catch (error) {
      console.error("Error selecting wallet:", error);
    }
  };

  const handleInstallWallet = (wallet) => {
    window.open(wallet.adapter.url, "_blank", "noopener,noreferrer");
  };

  const handleClose = () => {
    setVisible(false);
    setShowTerms(true);
    setAgreed(false);
    setExpandedWallets(false);
  };

  return (
    <Dialog open={visible} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[400px]">
        {/* Header */}
        <DialogHeader className="px-4 pt-4 pb-3 space-y-0">
          <DialogTitle className="text-center text-base font-semibold">
            {showTerms && !termsAccepted
              ? "Accept terms and Connect a wallet"
              : "Connect a wallet"}
          </DialogTitle>
        </DialogHeader>

        <Accordion
          type="single"
          collapsible
          value={accordionValue}
          onValueChange={(val) =>
            setAccordionValue(val as unknown as "terms" | "wallets")
          }
        >
          {showTerms && !termsAccepted && (
            <AccordionItem value="terms">
              <AccordionTrigger onClick={() => setAccordionValue("terms")}>
                Terms and Conditions
              </AccordionTrigger>
              <AccordionContent>
                <ScrollArea className="h-[220px]">
                  <CardContent className="space-y-4 text-sm">
                    <p>
                      The Hastra Protocol is not available to residents of
                      Belarus, the Central African Republic, The Democratic
                      Republic of Congo, the Democratic People’s Republic of
                      Korea, the Crimea, Donetsk People’s Republic, and Luhansk
                      People’s Republic regions of Ukraine, Cuba, Iran, Libya,
                      Somalia, Sudan, South Sudan, the United States of America,
                      Yemen, Zimbabwe and any other jurisdiction in which
                      accessing or using the Hastra Protocol is prohibited (the
                      “Prohibited Jurisdictions”).
                    </p>
                    <p>
                      By using or accessing this Interface, the Hastra Protocol,
                      or related smart contracts, you represent that you are not
                      located in, incorporated or established in, or a citizen
                      or resident of the Prohibited Jurisdictions. You also
                      represent that you are not subject to sanctions or
                      otherwise designated on any list of prohibited or
                      restricted parties or excluded or denied persons,
                      including but not limited to the lists maintained by the
                      United States’ Department of Treasury’s Office of Foreign
                      Assets Control, the United Nations Security Council, the
                      European Union or its Member States, or any other
                      government authority.
                    </p>
                    {/* Add more terms as needed */}
                  </CardContent>
                </ScrollArea>
                <CardFooter className="space-x-2 pt-3">
                  <Checkbox
                    id="terms"
                    checked={agreed}
                    onCheckedChange={(val) => setAgreed(val ? true : false)}
                    className="size-6"
                  />
                  <label
                    htmlFor="terms"
                    className="text-xs font-medium cursor-pointer"
                  >
                    I agree to the terms and conditions
                  </label>
                </CardFooter>
              </AccordionContent>
            </AccordionItem>
          )}
          <AccordionItem value="wallets">
            <AccordionTrigger
              disabled={showTerms && !termsAccepted && !agreed}
              showChevron={!termsAccepted}
              className={
                showTerms && !termsAccepted && !agreed
                  ? "opacity-50"
                  : termsAccepted
                  ? "pointer-events-none"
                  : ""
              }
              onClick={() => setAccordionValue("wallets")}
            >
              Select a wallet
            </AccordionTrigger>
            <AccordionContent>
              {/* Wallet List */}
              <div className="px-2 pb-2">
                {/* Installed/Loadable wallets */}
                {installedWallets.length > 0 && (
                  <div className="space-y-1">
                    {installedWallets.map((wallet, index) => (
                      <button
                        key={wallet.adapter.name + index}
                        onClick={() => handleWalletSelect(wallet)}
                        disabled={!agreed && !termsAccepted}
                        className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-accent transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-left"
                      >
                        <img
                          src={wallet.adapter.icon}
                          alt={wallet.adapter.name}
                          className="w-7 h-7"
                        />
                        <span className="flex-1 text-sm font-medium">
                          {wallet.adapter.name}
                        </span>
                        {wallet.readyState === WalletReadyState.Installed && (
                          <span className="text-xs text-muted-foreground">
                            Detected
                          </span>
                        )}
                      </button>
                    ))}
                  </div>
                )}

                {/* Separator if both sections exist */}
                {installedWallets.length > 0 && collapsedWallets.length > 0 && (
                  <div className="my-2 border-t" />
                )}

                {/* Not Detected wallets */}
                {collapsedWallets.length > 0 && (
                  <div className="space-y-1">
                    {/* Show first 3 not detected wallets */}
                    {collapsedWallets.map((wallet) => (
                      <button
                        key={wallet.adapter.name}
                        onClick={() => handleInstallWallet(wallet)}
                        className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-accent transition-colors text-left group"
                      >
                        <div className="relative">
                          <img
                            src={wallet.adapter.icon}
                            alt={wallet.adapter.name}
                            className="w-7 h-7 opacity-50"
                          />
                        </div>
                        <span className="flex-1 text-sm font-medium text-muted-foreground">
                          {wallet.adapter.name}
                        </span>
                        <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                      </button>
                    ))}

                    {/* Expanded wallets */}
                    {expandedWallets &&
                      hiddenWallets.map((wallet) => (
                        <button
                          key={wallet.adapter.name}
                          onClick={() => handleInstallWallet(wallet)}
                          className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-accent transition-colors text-left group"
                        >
                          <div className="relative">
                            <img
                              src={wallet.adapter.icon}
                              alt={wallet.adapter.name}
                              className="w-7 h-7 opacity-50"
                            />
                          </div>
                          <span className="flex-1 text-sm font-medium text-muted-foreground">
                            {wallet.adapter.name}
                          </span>
                          <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                        </button>
                      ))}

                    {/* Show More/Less button */}
                    {hiddenWallets.length > 0 && (
                      <button
                        onClick={() => setExpandedWallets(!expandedWallets)}
                        className="w-full flex items-center justify-center gap-2 px-3 py-2.5 rounded-lg hover:bg-accent transition-colors text-sm font-medium"
                      >
                        {expandedWallets ? (
                          <>Less options</>
                        ) : (
                          <>More options</>
                        )}
                      </button>
                    )}
                  </div>
                )}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </DialogContent>
    </Dialog>
  );
}
