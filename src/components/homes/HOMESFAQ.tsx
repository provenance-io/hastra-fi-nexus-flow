import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const HOMESFAQ = () => {
  const faqData = [
    {
      question: "What is HOMES?",
      answer: "HOMES is a tokenized real estate platform that allows you to own fractions of premium properties through blockchain technology. Each property is tokenized, enabling fractional ownership with complete transparency and liquidity. Investors can earn rental yields and participate in property appreciation while maintaining the ability to trade their tokens 24/7."
    },
    {
      question: "How does HOMES earn yield and what are the Rewards options?",
      answer: "HOMES generates yield through multiple streams: rental income from tokenized properties (4-12% annual yield), property appreciation over time, and professional property management. Rewards are distributed as yield-bearing tokens that can be staked, traded, or converted to stablecoins. Token holders receive proportional rental income and participate in property value increases."
    },
    {
      question: "What is wYIELD and Rewards?",
      answer: "wYIELD is a yield-bearing wrapper token that automatically compounds returns from multiple DeFi protocols. Rewards are distributed through smart contracts that allocate yield based on your token holdings. wYIELD tokens earn continuous yield that can be claimed at any time or automatically compounded for maximum returns."
    },
    {
      question: "How is YIELD earned and distributed?",
      answer: "YIELD is earned through staking mechanisms, liquidity provision, and participation in various DeFi protocols. Distribution happens automatically through smart contracts on a continuous basis. Users can claim their YIELD rewards at any time or set up auto-compounding to maximize returns. The distribution rate varies based on total protocol participation and market conditions."
    },
    {
      question: "What is HASH and sHASH (bridged Hash SPL)?",
      answer: "HASH is the native utility token of the Provenance Blockchain ecosystem, used for governance, staking, and transaction fees. sHASH is the Solana SPL (Solana Program Library) bridged version of HASH, allowing HASH holders to participate in Solana-based DeFi while maintaining exposure to the Provenance ecosystem. sHASH enables cross-chain liquidity and yield opportunities."
    },
    {
      question: "How can I convert YIELD or sHASH to USDC?",
      answer: "You can convert YIELD to USDC through the YIELD/USDC liquidity pool on Raydium DEX. For sHASH, you can use the HASH/USDC liquidity pool also available on Raydium. Both pools offer instant swaps with competitive rates. Additionally, you can provide liquidity to these pools to earn trading fees and additional yield. Simply connect your Solana wallet and swap directly through the Raydium interface."
    }
  ];

  return (
    <section className="py-20 md:py-32" id="homes-faq">
      <div className="container max-w-4xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground">
            Everything you need to know about HOMES and our tokenized real estate platform
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqData.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="glass-effect border-border/50 hover:border-header-glow/30 transition-all duration-300 rounded-lg px-6"
            >
              <AccordionTrigger className="text-left hover:no-underline py-6">
                <span className="text-lg font-semibold">{faq.question}</span>
              </AccordionTrigger>
              <AccordionContent className="pb-6 pt-2">
                <p className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default HOMESFAQ;