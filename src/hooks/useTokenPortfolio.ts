import { useCallback, useEffect, useState } from "react";
import { useWallet } from "@/contexts/WalletContext.tsx";
import { clusterApiUrl, Connection, PublicKey } from "@solana/web3.js";
import { useQuery } from "@tanstack/react-query";
import { getAssociatedTokenAddress } from "@solana/spl-token";
import { Metaplex } from "@metaplex-foundation/js";
import hastraIcon from "/lovable-uploads/bb5fd324-8133-40de-98e0-34ae8f181798.png";
import {DistributionDetail} from "@/types/staking.ts";

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
  tokenAddress: string;
}

const connection = new Connection(
  clusterApiUrl(import.meta.env.VITE_SOLANA_CLUSTER_NAME),
  "confirmed"
);
const metaplex = Metaplex.make(connection);

const token = (address: string) => {
  switch (address) {
    case import.meta.env.VITE_SOLANA_USDC_MINT:
      return "USDC";
    case import.meta.env.VITE_SOLANA_WYLDS_MINT:
      return "wYLDS";
    case import.meta.env.VITE_SOLANA_PRIME_MINT:
      return "PRIME";
    default:
      return "UNKNOWN";
  }
};
export const useTokenPortfolioQuery = (
  publicKey: PublicKey,
  tokenMintAddresses: string[] = [
    `${import.meta.env.VITE_SOLANA_USDC_MINT}`,
    `${import.meta.env.VITE_SOLANA_WYLDS_MINT}`,
    `${import.meta.env.VITE_SOLANA_PRIME_MINT}`,
  ]
) => {
  return useQuery<TokenData[], Error>({
    queryKey: ["tokenPortfolio", publicKey],
    enabled: !!publicKey,
    queryFn: async () => {
      if (!publicKey) throw new Error("No pubkey");
      return await Promise.all(
        tokenMintAddresses.map(async (address) => {
          let totalInterestEarned = 0;
          let unclaimedInterest = 0;
          let fetchUrl = `${import.meta.env.VITE_HASTRA_PULSE_URL}/distributions/address/${publicKey.toBase58()}/type`;
          if (address === import.meta.env.VITE_SOLANA_WYLDS_MINT) {
            fetchUrl += "/ylds-distribution";
          } else {
            fetchUrl += "/prime-distribution";
          }
          // retrieve interest earned and interest unclaimed from backend API for wYLDS
          await fetch(fetchUrl)
            .then((res) => res.json())
            .then((data: unknown) => {
              const distributions = data as DistributionDetail[];
              distributions.forEach((distribution) => {
                if (distribution.claimed) {
                  totalInterestEarned += distribution.amount / Math.pow(10, 6)
                } else {
                  unclaimedInterest += distribution.amount / Math.pow(10, 6)
                }
              });
            })
            .catch((err) => {
              console.error("Error fetching interest earned data:", err);
            });
          const mint = new PublicKey(address);
          const ta = await getAssociatedTokenAddress(mint, publicKey);

          let value = 0;
          let amount = 0;

          try {
            const balanceInfo = await connection.getTokenAccountBalance(ta);

            value =
              Number(balanceInfo.value.amount) /
              Math.pow(10, balanceInfo.value.decimals);
            amount = balanceInfo.value.uiAmount;
          } catch (e) {
            console.error(`No balance info for token address ${ta.toBase58()}`);
          }
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
                totalInterestEarned: totalInterestEarned,
                unclaimedInterest: unclaimedInterest,
                icon: j.image,
                mint: mint.toBase58(),
                tokenAddress: ta.toBase58(),
              } as TokenData;
            }
          } catch (e) {
            console.warn(
              `No metaplex info for mint address ${mint.toBase58()}`
            );
          }
          return {
            address: address,
            token: token(address),
            amount: amount,
            value: value,
            apy: address === import.meta.env.VITE_SOLANA_WYLDS_MINT ? 4.5 : 0, // Default APY for wYLDS only
            totalInterestEarned: 0,
            unclaimedInterest:
              address === import.meta.env.VITE_SOLANA_WYLDS_MINT
                ? amount > 0
                  ? amount * 0.001
                  : 0
                : 0, // Only wYLDS has claimable yield when balance > 0
            icon: hastraIcon,
            mint: mint.toBase58(),
            tokenAddress: ta.toBase58(),
          } as TokenData;
        })
      );
    },
    initialData: [],
    refetchInterval: 5000, // Refetch every minute
  });
};

export const useTokenPortfolio = () => {
  const { address, isConnected } = useWallet();
  const {
    data: tokenData,
    isLoading: tokensLoading,
    refetch: refetchTokens,
  } = useTokenPortfolioQuery(new PublicKey(address));
  const [tokens, setTokens] = useState<TokenData[]>(
    isConnected ? tokenData : []
  );

  useEffect(() => {
    if (isConnected) {
      setTokens(tokenData);
    } else {
      setTokens([]);
    }
  }, [isConnected, tokenData]);

  const claimInterest = useCallback(
    (tokenSymbol: string, claimedAmount: number) => {
      setTokens((prevTokens) =>
        prevTokens.map((token) => {
          // Only allow claiming for wYLDS and PRIME tokens
          if (token.token === "USDC" || token.token === "HASH") {
            return token; // No claiming for USDC or HASH
          }

          // For PRIME claims, add wYLDS instead of PRIME
          if (tokenSymbol === "PRIME") {
            if (token.token === "wYLDS") {
              return {
                ...token,
                amount: token.amount + claimedAmount,
                value: token.value + claimedAmount,
                totalInterestEarned: token.totalInterestEarned + claimedAmount,
              };
            } else if (token.token === "PRIME") {
              return {
                ...token,
                totalInterestEarned: token.totalInterestEarned + claimedAmount,
                unclaimedInterest: 0,
              };
            }
          } else if (token.token === tokenSymbol) {
            return {
              ...token,
              amount: token.amount + claimedAmount,
              value: token.value + claimedAmount,
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
      prevTokens.map((token) => {
        // Only allow claiming for tokens that have claimable interest (not USDC or HASH)
        if (token.token === "USDC" || token.token === "HASH") {
          return token; // No claiming for USDC or HASH
        }

        return {
          ...token,
          amount: token.amount + token.unclaimedInterest,
          value: token.value + token.unclaimedInterest, // Assuming 1:1 for simplicity
          totalInterestEarned:
            token.totalInterestEarned + token.unclaimedInterest,
          unclaimedInterest: 0,
        };
      })
    );
  }, []);

  const getTotalPortfolioValue = useCallback(() => {
    return tokens.reduce((total, token) => total + token.value, 0);
  }, [tokens]);

  const getTotalInterestEarned = useCallback(() => {
    return tokens.reduce(
      (total, token) => total + token.totalInterestEarned,
      0
    );
  }, [tokens]);

  const getTotalUnclaimedInterest = useCallback(() => {
    return tokens.reduce((total, token) => total + token.unclaimedInterest, 0);
  }, [tokens]);

  return {
    tokens: tokens, // Return the tokens with PRIME included
    tokensLoading,
    refetchTokens,
    claimInterest,
    claimAllInterest,
    getTotalPortfolioValue,
    getTotalInterestEarned,
    getTotalUnclaimedInterest,
  };
};
