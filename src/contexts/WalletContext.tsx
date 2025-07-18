
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useToast } from '@/hooks/use-toast';

export interface WalletState {
  isConnected: boolean;
  isConnecting: boolean;
  address: string | null;
  balance: number;
  networkError: string | null;
}

export interface WalletContextType extends WalletState {
  connectWallet: () => Promise<void>;
  disconnectWallet: () => void;
  refreshBalance: () => Promise<void>;
}

const WalletContext = createContext<WalletContextType | undefined>(undefined);

export const useWallet = () => {
  const context = useContext(WalletContext);
  if (context === undefined) {
    throw new Error('useWallet must be used within a WalletProvider');
  }
  return context;
};

interface WalletProviderProps {
  children: ReactNode;
}

export const WalletProvider: React.FC<WalletProviderProps> = ({ children }) => {
  const [walletState, setWalletState] = useState<WalletState>({
    isConnected: false,
    isConnecting: false,
    address: null,
    balance: 0,
    networkError: null,
  });

  const { toast } = useToast();

  // Check for existing wallet connection on mount
  useEffect(() => {
    const checkWalletConnection = () => {
      const mockConnected = localStorage.getItem('mock-wallet-connected') === 'true';
      const savedAddress = localStorage.getItem('mock-wallet-address');
      const savedBalance = localStorage.getItem('mock-wallet-balance');
      
      if (mockConnected && savedAddress) {
        setWalletState(prev => ({
          ...prev,
          isConnected: true,
          address: savedAddress,
          balance: savedBalance ? parseFloat(savedBalance) : 1250.45,
        }));
      }
    };

    checkWalletConnection();
  }, []);

  const connectWallet = async (): Promise<void> => {
    setWalletState(prev => ({ ...prev, isConnecting: true, networkError: null }));

    try {
      // Simulate connection delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Mock successful connection
      const mockAddress = '0x742d35Cc6734Cf532A954B07C03bfcBb1316d35A4';
      const mockBalance = 1250.45;
      
      setWalletState(prev => ({
        ...prev,
        isConnected: true,
        address: mockAddress,
        balance: mockBalance,
        isConnecting: false,
      }));
      
      // Persist wallet connection
      localStorage.setItem('mock-wallet-connected', 'true');
      localStorage.setItem('mock-wallet-address', mockAddress);
      localStorage.setItem('mock-wallet-balance', mockBalance.toString());
      
      toast({
        title: "Wallet Connected",
        description: "Successfully connected to MetaMask",
      });
      
    } catch (error) {
      setWalletState(prev => ({
        ...prev,
        isConnecting: false,
        networkError: 'Failed to connect wallet. Please try again.',
      }));
      
      toast({
        title: "Connection Failed",
        description: "Failed to connect wallet. Please try again.",
        variant: "destructive",
      });
    }
  };

  const disconnectWallet = (): void => {
    setWalletState({
      isConnected: false,
      isConnecting: false,
      address: null,
      balance: 0,
      networkError: null,
    });
    
    // Clear persisted data
    localStorage.removeItem('mock-wallet-connected');
    localStorage.removeItem('mock-wallet-address');
    localStorage.removeItem('mock-wallet-balance');
    
    toast({
      title: "Wallet Disconnected",
      description: "Your wallet has been disconnected",
    });
  };

  const refreshBalance = async (): Promise<void> => {
    if (!walletState.isConnected) return;
    
    try {
      // Simulate balance refresh
      await new Promise(resolve => setTimeout(resolve, 1000));
      const newBalance = Math.random() * 2000 + 500; // Random balance between 500-2500
      
      setWalletState(prev => ({
        ...prev,
        balance: newBalance,
      }));
      
      localStorage.setItem('mock-wallet-balance', newBalance.toString());
      
    } catch (error) {
      console.error('Failed to refresh balance:', error);
    }
  };

  const contextValue: WalletContextType = {
    ...walletState,
    connectWallet,
    disconnectWallet,
    refreshBalance,
  };

  return (
    <WalletContext.Provider value={contextValue}>
      {children}
    </WalletContext.Provider>
  );
};
