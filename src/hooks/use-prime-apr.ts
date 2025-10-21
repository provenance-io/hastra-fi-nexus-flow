import { fetchCurrentAPR } from "@/utils/solana-utils";
import { useQuery } from "@tanstack/react-query";

export const usePrimeApr = () => {
  const {
    data: currentAPR,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["currentAPR"],
    queryFn: fetchCurrentAPR,
    refetchInterval: 5 * 60 * 1000, // Refetch every 5 minutes
  });
  return {
    displayApr: isLoading ? "loading..." : error ? "Error" : currentAPR,
    currentAPR,
    isLoading,
    error,
  };
};
