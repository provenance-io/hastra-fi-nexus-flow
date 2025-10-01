import { CheckCircle, Building2, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const benefits = [
  "Regulatory compliance and transparency",
  "No minimum holding period",
  "Daily yield distribution",
  "Backed by real-world assets",
  "Instant liquidity",
  "Low transaction fees on Solana",
];

const howItWorks = [
  {
    step: "1",
    title: "Hold sPRIME tokens",
    description: "Simply hold sPRIME tokens in any compatible wallet",
  },
  {
    step: "2",
    title: "Automatic yield calculation",
    description: "Yield is automatically calculated and distributed daily",
  },
  {
    step: "3",
    title: "Watch your balance grow",
    description: "Watch your balance grow without any additional action",
  },
  {
    step: "4",
    title: "Redeem via key Solana partners",
    description:
      "Easily redeem your sPRIME through Raydium and Kamino protocols",
  },
];

const PRIMEAbout = () => {
  return (
    <section className="py-24 md:py-32 relative">
      {/* Premium background - matching homepage */}
      {/* Unified seamless background - removed conflicting gradient */}

      <div className="container relative"></div>
    </section>
  );
};

export default PRIMEAbout;
