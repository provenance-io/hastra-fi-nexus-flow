import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";

const accordionItem =
  "border-none rounded-[35px] p-0 py-[35px] bg-[#1F273678] px-[55px] text-[30px] font-season-sans leading-[103%]";

const accordionContent = "pt-5 text-[28px] leading-[110%] text-start";

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

export const FAQs = () => {
  return (
    <section
      className="max-w-[96rem] mx-auto px-10 font-season-sans"
      aria-label="FAQs"
    >
      <Card className="bg-[#1F273678] rounded-[35px] py-[80px] px-[22px] text-center">
        <h3 className="text-[45px] md:text-[60px] pb-[110px]">FAQ</h3>
        <Accordion type="single" collapsible className="space-y-[22px]">
          {faqs.map((f) => (
            <AccordionItem value={f.question} className={accordionItem}>
              <AccordionTrigger className="p-0">{f.question}</AccordionTrigger>
              <AccordionContent className={accordionContent}>
                {f.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Card>
    </section>
  );
};
