import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { StakeTokensForm } from "./stake-tokens-form";
import { UnstakeTokensForm } from "./unstake-tokens-form";

export const StakeTokensCard = () => {
  return (
    <section aria-label="Stake Tokens Section" className="font-season-sans">
      <Card className="py-[52px] md:py-[70px] px-[17px] md:px-[58px] text-brand-white bg-[#1F273678] rounded-[35px]">
        <CardHeader className="p-0 pb-[58px] md:pb-[142px]">
          <CardTitle className="font-season-sans p-0 text-[25px] md:text-[35px] font-[650] leading-[111%]">
            Stake Tokens
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0 flex justify-between items-start gap-10">
          <StakeTokensForm />
          <UnstakeTokensForm />
        </CardContent>
      </Card>
    </section>
  );
};
