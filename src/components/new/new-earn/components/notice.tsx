import { Card } from "@/components/ui/card";

export const Notice = ({
  notice,
  borderColor,
}: {
  notice: React.ReactNode;
  borderColor: string;
}) => (
  <Card
    className={`mt-[23px] space-y-[22px] w-full text-[18px] md:text-[23px] leading-[143%] rounded-[35px] bg-[#021323] border-[0.5px] ${borderColor} p-0 py-10 md:py-[67px] flex flex-col items-center justify-center text-center`}
  >
    {notice}
  </Card>
);
