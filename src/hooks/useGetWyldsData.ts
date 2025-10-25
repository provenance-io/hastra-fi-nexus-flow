import {
  fetchCurrentAPY,
  fetchActiveHolders,
  fetchTotalCirculation,
} from "@/utils/solana-utils";
import { useQuery } from "@tanstack/react-query";

export const useGetWyldsData = () => {
  const {
    data: apy,
    isLoading: apyLoading,
    error: apyError,
  } = useQuery({
    queryKey: ["yield-apy"],
    queryFn: fetchCurrentAPY,
    refetchInterval: 5 * 60 * 1000, // Refetch every 5 minutes
  });

  const {
    data: holders,
    isLoading: holdersLoading,
    error: holdersError,
  } = useQuery({
    queryKey: ["active-holders"],
    queryFn: fetchActiveHolders,
    refetchInterval: 5 * 60 * 1000, // Refetch every 5 minutes
  });

  const {
    data: circulation,
    isLoading: circulationLoading,
    error: circulationError,
  } = useQuery({
    queryKey: ["total-circulation"],
    queryFn: fetchTotalCirculation,
    refetchInterval: 5 * 60 * 1000, // Refetch every 5 minutes
  });

  return {
    displayApy: apyLoading ? "Loading..." : apyError ? "Error" : `${apy}%`,
    displayHolders: holdersLoading
      ? "Loading..."
      : holdersError
      ? "Error"
      : holders,
    displayCirculation: circulationLoading
      ? "Loading..."
      : circulationError
      ? "Error"
      : `$${circulation.toFixed(2)}`,
  };
};
