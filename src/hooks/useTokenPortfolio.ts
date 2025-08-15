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
                  address === import.meta.env.VITE_SOLANA_YIELD_MINT ? "/lovable-uploads/49dceb8c-5ccf-4ceb-97e6-9447aa7fc33d.png" : "",
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

  const { address, isConnected } = useWallet();

  const { data: tokenData } = useTokenPortfolioQuery(new PublicKey(address));

  const { data: solBalance } = useSolBalanceQuery(new PublicKey(address));

  // Get swYLDS balance from staking
  const { userBalance } = useStaking();

  // Mock data for testing when wallet is connected
  const getMockTokenData = (): TokenData[] => {
    if (!isConnected) return [];
    
    return [
      {
        address: import.meta.env.VITE_SOLANA_USDC_MINT || 'usdc-mock',
        token: 'USDC',
        amount: 2547.83,
        value: 2547.83,
        apy: 0,
        totalInterestEarned: 0,
        unclaimedInterest: 0,
        icon: '/lovable-uploads/4a374512-469e-4932-9bfc-215e5dd3591d.png',
        mint: 'usdc-mint',
        tokenAddress: 'usdc-address',
      },
      {
        address: import.meta.env.VITE_SOLANA_YIELD_MINT || 'wylds-mock',
        token: 'wYLDS',
        amount: 1234.56,
        value: 1234.56,
        apy: 4.5,
        totalInterestEarned: 89.23,
        unclaimedInterest: 12.45,
        icon: '/lovable-uploads/49dceb8c-5ccf-4ceb-97e6-9447aa7fc33d.png',
        mint: 'wylds-mint',
        tokenAddress: 'wylds-address',
      },
      {
        address: 'swYLDS',
        token: 'swYLDS',
        amount: 856.12,
        value: 856.12,
        apy: 8.5,
        totalInterestEarned: 67.89,
        unclaimedInterest: 15.78,
        icon: '/lovable-uploads/49dceb8c-5ccf-4ceb-97e6-9447aa7fc33d.png',
        mint: 'swYLDS-mint',
        tokenAddress: 'swYLDS-address',
      },
      {
        address: 'hash-mock',
        token: 'HASH',
        amount: 45678.90,
        value: 1067.04, // At ~$0.0234 per HASH
        apy: 18.5,
        totalInterestEarned: 234.56,
        unclaimedInterest: 45.67,
        icon: '/src/assets/hash-icon.png',
        mint: 'hash-mint',
        tokenAddress: 'hash-address',
      }
    ];
  };

  useEffect(() => {
    if (isConnected) {
      // Use mock data for testing
      const mockTokens = getMockTokenData();
      setTokens(mockTokens);
      
      console.log('Using mock portfolio data for testing:', mockTokens.map(t => ({ 
        token: t.token, 
        amount: t.amount,
        value: t.value,
        unclaimedInterest: t.unclaimedInterest 
      })));
    } else {
      setTokens([]);
    }
  }, [isConnected]);

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
    tokens: tokens, // Return the tokens with swYLDS included
    claimInterest,
    claimAllInterest,
    getTotalPortfolioValue,
    getTotalInterestEarned,
    getTotalUnclaimedInterest,
  };
};
