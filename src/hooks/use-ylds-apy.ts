import { fetchCurrentAPY } from "@/utils/solana-utils";
import { useQuery } from "@tanstack/react-query";

export const useYLDSApy = () => {
  const {
    data: apy,
    isLoading: apyLoading,
    error: apyError,
  } = useQuery({
    queryKey: ["yield-apy"],
    queryFn: fetchCurrentAPY,
    refetchInterval: 5 * 60 * 1000, // Refetch every 5 minutes
  });
  return {
    displayApy: apyError ? "Error" : apyLoading ? "loading..." : apy,
    apy,
    apyLoading,
    apyError,
  };
};
