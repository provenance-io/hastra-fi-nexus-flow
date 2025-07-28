import { clusterApiUrl, Connection, PublicKey } from "@solana/web3.js";
import { getAssociatedTokenAddress } from "@solana/spl-token";
import { useQuery } from "@tanstack/react-query";
import type { CoinGeckoPrice } from "../types/coin-gecko";

const connection = new Connection(
  clusterApiUrl(import.meta.env.VITE_SOLANA_CLUSTER_NAME),
  "confirmed"
);

export const useSolBalanceQuery = (publicKey: PublicKey | null) => {
  return useQuery<number, Error>({
    queryKey: ["solBalance", publicKey],
    enabled: !!publicKey,
    queryFn: async () => {
      if (!publicKey) throw new Error("No pubkey");
      const balance = await connection.getBalance(publicKey);
      return balance / 1e9; // Convert lamports to SOL
    },
    initialData: 0,
    refetchInterval: 5000, // Optional: refetch every 5 seconds
  });
};

export const useCoinGeckoPrice = () => {
  return useQuery<CoinGeckoPrice | undefined, Error>({
    queryKey: ["coinGecko", "solana"],
    queryFn: async () => {
      const url = new URL("https://api.coingecko.com/api/v3/simple/price");
      url.searchParams.append("ids", "solana,hash-2");
      url.searchParams.append("vs_currencies", "usd");
      const response = await fetch(url.toString());
      if (!response.ok) {
        throw new Error("Failed to fetch Coin Gecko price");
      }
      return response.json();
    },
    refetchInterval: 60000,
  });
};

export const useAtaQuery = (
  publicKey: PublicKey | null,
  tokenAddress?: string
) => {
  return useQuery<string, Error>({
    queryKey: ["ata", publicKey, tokenAddress],
    enabled: !!publicKey && !!tokenAddress,
    queryFn: async () => {
      if (!publicKey || !tokenAddress)
        throw new Error("No wallet or token address provided");
      const ta = await getAssociatedTokenAddress(
        new PublicKey(tokenAddress),
        publicKey
      );
      return ta.toBase58();
    },
  });
};

export const useAccountExistsQuery = (publicKey: PublicKey | null) => {
  return useQuery<boolean, Error>({
    queryKey: ["accountExists", publicKey],
    enabled: !!publicKey,
    queryFn: async () => {
      if (!publicKey) throw new Error("No pubkey");
      const info = await connection.getAccountInfo(publicKey);
      return info != null;
    },
    initialData: undefined,
  });
};

export const useAtaExistsQuery = (
  publicKey: PublicKey | null,
  tokenAddress: string
) => {
  return useQuery<boolean, Error>({
    queryKey: ["ataExists", publicKey, tokenAddress],
    enabled: !!publicKey && !!tokenAddress,
    queryFn: async () => {
      if (!publicKey) throw new Error("No pubkey");
      const ta = await getAssociatedTokenAddress(
        new PublicKey(tokenAddress),
        publicKey
      );
      const info = await connection.getAccountInfo(ta);
      return info != null;
    },
    initialData: undefined,
  });
};

export const useAtaBalanceQuery = (
  publicKey: PublicKey | null,
  tokenAddress: string
) => {
  return useQuery<number, Error>({
    queryKey: ["ataBalance", publicKey, tokenAddress],
    enabled: !!publicKey && !!tokenAddress,
    queryFn: async () => {
      if (!publicKey) throw new Error("No pubkey");
      const ta = await getAssociatedTokenAddress(
        new PublicKey(tokenAddress),
        publicKey
      );
      const balanceInfo = await connection.getTokenAccountBalance(ta);
      return balanceInfo.value.uiAmount || 0;
    },
    initialData: 0,
    refetchInterval: 5000, // Refetch every minute
  });
};
