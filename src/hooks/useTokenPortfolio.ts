
import { useState, useCallback } from 'react';

export interface TokenData {
  token: string;
  amount: number;
  value: number;
  apy: number;
  totalInterestEarned: number;
  unclaimedInterest: number;
  icon: string;
}

const initialTokens: TokenData[] = [
  {
    token: 'YIELD',
    amount: 850.25,
    value: 850.25,
    apy: 8.0,
    totalInterestEarned: 68.02,
    unclaimedInterest: 12.45,
    icon: '/lovable-uploads/08452a7b-6782-4b0a-900e-0f0c99a4fc4e.png'
  },
  {
    token: 'HASH (Sol)',
    amount: 127.43,
    value: 400.20,
    apy: 12.5,
    totalInterestEarned: 50.03,
    unclaimedInterest: 8.67,
    icon: '/lovable-uploads/bb5fd324-8133-40de-98e0-34ae8f181798.png'
  }
];

export const useTokenPortfolio = () => {
  const [tokens, setTokens] = useState<TokenData[]>(initialTokens);

  const claimInterest = useCallback((tokenSymbol: string, claimedAmount: number) => {
    setTokens(prevTokens => 
      prevTokens.map(token => {
        if (token.token === tokenSymbol) {
          return {
            ...token,
            amount: token.amount + claimedAmount,
            value: token.value + claimedAmount, // Assuming 1:1 for simplicity
            totalInterestEarned: token.totalInterestEarned + claimedAmount,
            unclaimedInterest: 0
          };
        }
        return token;
      })
    );
  }, []);

  const getTotalPortfolioValue = useCallback(() => {
    return tokens.reduce((total, token) => total + token.value, 0);
  }, [tokens]);

  const getTotalInterestEarned = useCallback(() => {
    return tokens.reduce((total, token) => total + token.totalInterestEarned, 0);
  }, [tokens]);

  const getTotalUnclaimedInterest = useCallback(() => {
    return tokens.reduce((total, token) => total + token.unclaimedInterest, 0);
  }, [tokens]);

  return {
    tokens,
    claimInterest,
    getTotalPortfolioValue,
    getTotalInterestEarned,
    getTotalUnclaimedInterest
  };
};
