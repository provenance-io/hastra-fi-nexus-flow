import { useCallback, useEffect, useState } from "react";
import { useWallet } from "@/contexts/WalletContext.tsx";
import { clusterApiUrl, Connection, PublicKey } from "@solana/web3.js";
import { useQuery } from "@tanstack/react-query";
import { getAssociatedTokenAddress } from "@solana/spl-token";
import { Metaplex } from "@metaplex-foundation/js";
import { useSolBalanceQuery } from "@/hooks/useSolanaQuery.ts";
import { useStaking } from "@/hooks/useStaking.ts";

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

export const useTokenPortfolioQuery = (
  publicKey: PublicKey,
  tokenMintAddresses: string[] = [
    `${import.meta.env.VITE_SOLANA_USDC_MINT}`,
    `${import.meta.env.VITE_SOLANA_YIELD_MINT}`,
    // Add swYLDS mint address when available
    // `${import.meta.env.VITE_SOLANA_SWYLDS_MINT}`,
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
                totalInterestEarned: 0,
                unclaimedInterest: 0,
                icon: j.image,
                mint: mint.toBase58(),
                tokenAddress: ta.toBase58(),
              } as TokenData;
            }
          } catch (e) {
            console.error(`No metaplex info for mint address ${mint.toBase58()}`);
          }
          return {
            address: address,
            token: address === import.meta.env.VITE_SOLANA_USDC_MINT ? "USDC" : 
                   address === import.meta.env.VITE_SOLANA_YIELD_MINT ? "wYLDS" : "sHASH",
            amount: amount,
            value: value,
            apy: address === import.meta.env.VITE_SOLANA_YIELD_MINT ? 4.5 : 0, // Default APY for wYLDS only
            totalInterestEarned: 0,
            unclaimedInterest: address === import.meta.env.VITE_SOLANA_YIELD_MINT ? (amount > 0 ? amount * 0.001 : 0) : 0, // Only wYLDS has claimable yield when balance > 0
            icon: address === import.meta.env.VITE_SOLANA_USDC_MINT ? "/lovable-uploads/4a374512-469e-4932-9bfc-215e5dd3591d.png" :
                  address === import.meta.env.VITE_SOLANA_YIELD_MINT ? "/lovable-uploads/e7187c63-0dae-455c-971c-a6de70ce2afc.png" : "",
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
  const [tokens, setTokens] = useState<TokenData[]>([]);

  const { address } = useWallet();

  const { data: tokenData } = useTokenPortfolioQuery(new PublicKey(address));

  const { data: solBalance } = useSolBalanceQuery(new PublicKey(address));

  // Get swYLDS balance from staking
  const { userBalance } = useStaking();

  useEffect(() => {
    if (tokenData) {
      // Add swYLDS token from staking balance
      const swYLDSBalance = parseFloat(userBalance?.swYLDS || '0');
      let tokensWithSwYLDS = [...tokenData];
      
      // Ensure wYLDS always appears in the list, even with 0 balance
      const wYLDSToken = tokensWithSwYLDS.find(t => t.token === 'wYLDS');
      if (!wYLDSToken) {
        tokensWithSwYLDS.push({
          address: import.meta.env.VITE_SOLANA_YIELD_MINT,
          token: 'wYLDS',
          amount: 0,
          value: 0,
          apy: 4.5,
          totalInterestEarned: 0,
          unclaimedInterest: 0,
          icon: '/lovable-uploads/e7187c63-0dae-455c-971c-a6de70ce2afc.png',
          mint: import.meta.env.VITE_SOLANA_YIELD_MINT,
          tokenAddress: 'wYLDS-address',
        });
      }
      
      // Always add swYLDS token, even if balance is 0
      tokensWithSwYLDS.push({
        address: 'swYLDS',
        token: 'swYLDS',
        amount: swYLDSBalance,
        value: swYLDSBalance, // 1:1 with USD for now
        apy: 8.5, // Higher APY for staked tokens
        totalInterestEarned: swYLDSBalance * 0.002, // Mock earned interest
        unclaimedInterest: swYLDSBalance > 0 ? swYLDSBalance * 0.001 : 0, // Mock unclaimed interest only when balance > 0
        icon: '/lovable-uploads/e7187c63-0dae-455c-971c-a6de70ce2afc.png',
        mint: 'swYLDS-mint',
        tokenAddress: 'swYLDS-address',
      });
      
      console.log('Final tokens with claim amounts:', tokensWithSwYLDS.map(t => ({ 
        token: t.token, 
        amount: t.amount,
        unclaimedInterest: t.unclaimedInterest 
      })));
      
      setTokens(tokensWithSwYLDS);
    }
  }, [tokenData, userBalance?.swYLDS]);

  const claimInterest = useCallback(
    (tokenSymbol: string, claimedAmount: number) => {
      setTokens((prevTokens) =>
        prevTokens.map((token) => {
          // For swYLDS claims, add wYLDS instead of swYLDS
          if (tokenSymbol === 'swYLDS') {
            if (token.token === 'wYLDS') {
              return {
                ...token,
                amount: token.amount + claimedAmount,
                value: token.value + claimedAmount,
                totalInterestEarned: token.totalInterestEarned + claimedAmount,
              };
            } else if (token.token === 'swYLDS') {
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
  }, [tokens]);

  const getTotalUnclaimedInterest = useCallback(() => {
    return tokens.reduce((total, token) => total + token.unclaimedInterest, 0);
  }, [tokens]);

  return {
    tokens: tokens, // Return the tokens with swYLDS included
    claimInterest,
    claimAllInterest,
    getTotalPortfolioValue,
    getTotalInterestEarned,
    getTotalUnclaimedInterest,
  };
};
