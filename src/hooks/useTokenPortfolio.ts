import { useCallback, useEffect, useState } from "react";
import { useWallet } from "@/contexts/WalletContext.tsx";
import { Cluster, clusterApiUrl, Connection, PublicKey } from "@solana/web3.js";
import { useQuery } from "@tanstack/react-query";
import { getAssociatedTokenAddress } from "@solana/spl-token";
import { Metaplex } from "@metaplex-foundation/js";
import { useSolBalanceQuery } from "@/hooks/useSolanaQuery.ts";

export interface TokenData {
  address: string;
  token: string;
  amount: number;
  value: number;
  apy: number;
  totalInterestEarned: number;
  unclaimedInterest: number;
  icon: string;
  mint: string;
}

const connection = new Connection(
  clusterApiUrl(import.meta.env.VITE_SOLANA_CLUSTER_NAME as Cluster),
  "confirmed"
);
const metaplex = Metaplex.make(connection);

export const useTokenPortfolioQuery = (
  publicKey: PublicKey,
  tokenMintAddresses: string[] = [
    `${import.meta.env.VITE_SOLANA_USDC_MINT}`,
    `${import.meta.env.VITE_SOLANA_YIELD_MINT}`,
  ]
) => {
  return useQuery<TokenData[], Error>({
    queryKey: ["tokenPortfolio", publicKey],
    enabled: !!publicKey,
    queryFn: async () => {
      if (!publicKey) throw new Error("No pubkey");
      return await Promise.all(
        tokenMintAddresses.map(async (address) => {
          const mint = new PublicKey(address);
          const ta = await getAssociatedTokenAddress(mint, publicKey);
          const balanceInfo = await connection.getTokenAccountBalance(ta);

          const value =
            Number(balanceInfo.value.amount) /
            Math.pow(10, balanceInfo.value.decimals);
          const amount = balanceInfo.value.uiAmount;
          try {
            const nftMetadata = await metaplex
              .nfts()
              .findByMint({ mintAddress: mint });
            const metadata = await fetch(nftMetadata.uri);
            const j = await metadata.json();
            if (j) {
              return {
                address: address,
                token: j.symbol,
                amount: amount,
                value: value,
                apy: 0,
                totalInterestEarned: 0,
                unclaimedInterest: 0,
                icon: j.image,
                mint: mint.toBase58(),
              } as TokenData;
            }
          } catch (e) {
            console.error(`Error processing mint address ${mint.toBase58()}`);
            console.error(e);
          }
          return {
            address: address,
            token: "UNKNOWN",
            amount: amount,
            value: value,
            apy: 0,
            totalInterestEarned: 0,
            unclaimedInterest: 0,
            icon: "",
            mint: mint.toBase58(),
          } as TokenData;
        })
      );
    },
    initialData: [],
    refetchInterval: 5000, // Refetch every minute
  });
};
export const useTokenPortfolio = () => {
  const [tokens, setTokens] = useState<TokenData[]>([]);

  const { address } = useWallet();

  const { data: tokenData } = useTokenPortfolioQuery(new PublicKey(address));

  const { data: solBalance } = useSolBalanceQuery(new PublicKey(address));

  useEffect(() => {
    if (tokenData) {
      setTokens(tokenData);
    }
  }, [tokenData]);

  const claimInterest = useCallback(
    (tokenSymbol: string, claimedAmount: number) => {
      setTokens((prevTokens) =>
        prevTokens.map((token) => {
          if (token.token === tokenSymbol) {
            return {
              ...token,
              amount: token.amount + claimedAmount,
              value: token.value + claimedAmount, // Assuming 1:1 for simplicity
              totalInterestEarned: token.totalInterestEarned + claimedAmount,
              unclaimedInterest: 0,
            };
          }
          return token;
        })
      );
    },
    []
  );

  const claimAllInterest = useCallback(() => {
    setTokens((prevTokens) =>
      prevTokens.map((token) => ({
        ...token,
        amount: token.amount + token.unclaimedInterest,
        value: token.value + token.unclaimedInterest, // Assuming 1:1 for simplicity
        totalInterestEarned:
          token.totalInterestEarned + token.unclaimedInterest,
        unclaimedInterest: 0,
      }))
    );
  }, []);

  const getTotalPortfolioValue = useCallback(() => {
    return tokenData.reduce((total, token) => total + token.value, 0);
  }, [tokenData]);

  const getTotalInterestEarned = useCallback(() => {
    return tokens.reduce(
      (total, token) => total + token.totalInterestEarned,
      0
    );
  }, [tokenData]);

  const getTotalUnclaimedInterest = useCallback(() => {
    return tokens.reduce((total, token) => total + token.unclaimedInterest, 0);
  }, [tokenData]);

  return {
    tokens: tokenData,
    claimInterest,
    claimAllInterest,
    getTotalPortfolioValue,
    getTotalInterestEarned,
    getTotalUnclaimedInterest,
  };
};
