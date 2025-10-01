import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const WyldsFAQ = () => {
  const faqs = [
    {
      question: "What is wYLDS?",
      answer:
        "wYLDS is a token representing a vault of the YLDS token - the first SEC-registered, yield-bearing stablecoin. It combines the liquidity of traditional stablecoins with the earning power of a money market fund, automatically generating returns for holders.",
    },
    {
      question: "Do I need to stake wYLDS in order to earn?",
      answer:
        "No, you don't need to stake wYLDS to earn returns. Simply holding wYLDS tokens in any compatible Solana wallet automatically makes you eligible for yield distributions. The earning process is completely passive - no additional actions required.",
    },
    {
      question: "What happens if I send wYLDS to a friend?",
      answer:
        "When you send wYLDS tokens to a friend, they become the new holder and will start earning yield on those tokens from the next distribution cycle. You will no longer earn yield on the tokens you've transferred, as earnings are tied to current token ownership.",
    },
    {
      question: "How is my yield calculated?",
      answer:
        "Your yield is calculated based on the number of wYLDS tokens you hold and the overall performance of the underlying YLDS vault. The calculation is automatic and proportional to your token holdings relative to the total supply.",
    },
    {
      question: "Where can I see the yield I've earned?",
      answer:
        "You can view your accruing yield on the Hastra Protocol Page. You can track your distributed yield directly in your Solana wallet balance. The yield is distributed as additional wYLDS tokens, so your wallet balance will reflect both your original holdings and any earned yield up through the previous month. Additionally, you can monitor distributions through supported DeFi platforms.",
    },
    {
      question: "When do I receive my yield?",
      answer:
        "wYLDS distributions occur on a monthly basis. The exact distribution date may vary slightly each month, but you can expect to see your earned yield reflected in your wallet balance consistently every month as long as you hold wYLDS tokens.",
    },
  ];

  return (
    <section className="pt-8 pb-12 px-4 relative overflow-hidden">
      {/* Background gradient */}
      {/* Unified seamless background - removed conflicting gradient */}

      <div className="max-w-5xl mx-auto px-4 relative z-10">
        {/* Description text outside container */}

        {/* FAQ Accordion */}
        <div className="card-gradient rounded-3xl p-8 md:p-12 border border-transparent relative">
          <div className="relative z-10">
            {/* Section Header - Matching About page AnimatedCard style */}
            <div className="mb-8 text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground/90">
                FAQ
              </h2>
            </div>
            <Accordion type="single" collapsible className="space-y-6">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border border-border/10 rounded-xl card-gradient hover:bg-background/60 transition-all duration-300"
                >
                  <AccordionTrigger
                    className="px-6 py-4 text-left hover:no-underline group"
                    style={{
                      color: "hsl(var(--foreground))",
                    }}
                  >
                    <span className="text-base md:text-lg text-foreground group-hover:text-foreground/80 transition-colors duration-300">
                      {faq.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4">
                    <div className="text-platinum/80 leading-relaxed">
                      {faq.answer.includes("Hastra Protocol Page") ? (
                        <span>
                          You can view your <strong>accruing yield</strong> on
                          the{" "}
                          <a
                            href="https://test.hastra.io/protocol"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-foreground hover:text-foreground/80 transition-colors duration-300 underline"
                          >
                            Hastra Protocol Page
                          </a>
                          . You can track your{" "}
                          <strong>distributed yield</strong> directly in your
                          Solana wallet balance. The yield is distributed as
                          additional wYLDS tokens, so your wallet balance will
                          reflect both your original holdings and any earned
                          yield up through the previous month. Additionally, you
                          can monitor distributions through supported DeFi
                          platforms.
                        </span>
                      ) : (
                        faq.answer
                      )}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WyldsFAQ;
