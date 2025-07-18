import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const WYLDsFAQ = () => {
  const faqs = [
    {
      question: "What is YIELD?",
      answer: "YIELD is a token representing a vault of the YLDS token - the first SEC-registered, yield-bearing stablecoin. It combines the liquidity of traditional stablecoins with the earning power of a money market fund, automatically generating returns for holders."
    },
    {
      question: "Do I need to stake YIELD in order to earn?",
      answer: "No, you don't need to stake YIELD to earn returns. Simply holding YIELD tokens in any compatible Solana wallet automatically makes you eligible for yield distributions. The earning process is completely passive - no additional actions required."
    },
    {
      question: "What happens if I send YIELD to a friend?",
      answer: "When you send YIELD tokens to a friend, they become the new holder and will start earning yield on those tokens from the next distribution cycle. You will no longer earn yield on the tokens you've transferred, as earnings are tied to current token ownership."
    },
    {
      question: "How is my yield calculated?",
      answer: "Your yield is calculated based on the number of YIELD tokens you hold and the overall performance of the underlying YLDS vault. The calculation is automatic and proportional to your token holdings relative to the total supply."
    },
    {
      question: "Where can I see the yield I've earned?",
      answer: "You can view your accruing yield on the Hastra Protocol Page. You can track your distributed yield directly in your Solana wallet balance. The yield is distributed as additional YIELD tokens, so your wallet balance will reflect both your original holdings and any earned yield up through the previous month. Additionally, you can monitor distributions through supported DeFi platforms."
    },
    {
      question: "When do I receive my yield?",
      answer: "YIELD distributions occur on a monthly basis. The exact distribution date may vary slightly each month, but you can expect to see your earned yield reflected in your wallet balance consistently every month as long as you hold YIELD tokens."
    }
  ];

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background gradient */}
      {/* Unified seamless background - removed conflicting gradient */}
      
      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-gradient-to-r from-electric-blue via-neon-cyan to-premium-gold bg-clip-text mb-4">
            Frequently Asked Questions
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-electric-blue to-neon-cyan mx-auto rounded-full"></div>
          <p className="text-lg text-platinum/80 mt-6 max-w-2xl mx-auto">
            Get answers to common questions about YIELD tokens and how they work
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="bg-card/50 backdrop-blur-sm border border-electric-blue/20 rounded-2xl p-8 hover:border-electric-blue/30 transition-all duration-300">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-electric-blue/10 rounded-xl bg-card/30 hover:bg-card/50 transition-all duration-300"
              >
                <AccordionTrigger className="px-6 py-4 text-left hover:no-underline group">
                  <span className="text-lg font-semibold text-electric-blue group-hover:text-neon-cyan transition-colors duration-300">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <div className="text-platinum/80 leading-relaxed">
                    {faq.answer.includes("Hastra Protocol Page") ? (
                      <span>
                        You can view your <strong>accruing yield</strong> on the{" "}
                        <a 
                          href="https://test.hastra.io/protocol" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-electric-blue hover:text-neon-cyan transition-colors duration-300 underline"
                        >
                          Hastra Protocol Page
                        </a>
                        . You can track your <strong>distributed yield</strong> directly in your Solana wallet balance. The yield is distributed as additional YIELD tokens, so your wallet balance will reflect both your original holdings and any earned yield up through the previous month. Additionally, you can monitor distributions through supported DeFi platforms.
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
    </section>
  );
};

export default WYLDsFAQ;