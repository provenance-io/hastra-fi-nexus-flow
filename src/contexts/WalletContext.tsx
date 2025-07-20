
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useToast } from '@/hooks/use-toast';

export interface WalletState {
  isConnected: boolean;
  isConnecting: boolean;
  address: string | null;
  balance: number;
  networkError: string | null;
  walletType: string | null;
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
    walletType: null,
  });

  const { toast } = useToast();

  // Check for existing wallet connection on mount
  useEffect(() => {
    const checkWalletConnection = () => {
      const mockConnected = localStorage.getItem('mock-wallet-connected') === 'true';
      const savedAddress = localStorage.getItem('mock-wallet-address');
      const savedBalance = localStorage.getItem('mock-wallet-balance');
      const savedWalletType = localStorage.getItem('mock-wallet-type');
      
      if (mockConnected && savedAddress) {
        setWalletState(prev => ({
          ...prev,
          isConnected: true,
          address: savedAddress,
          balance: savedBalance ? parseFloat(savedBalance) : 1250.45,
          walletType: savedWalletType || 'Phantom',
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
      
      // Mock successful connection with Solana address
      const mockAddress = '9WzDXwBbmkg8ZTbNMqUxvQRAyrZzDsGYdLVL9zYtAWWM';
      const mockBalance = 1250.45;
      const walletType = 'Phantom'; // Phantom wallet for Solana
      
      setWalletState(prev => ({
        ...prev,
        isConnected: true,
        address: mockAddress,
        balance: mockBalance,
        isConnecting: false,
        walletType: walletType,
      }));
      
      // Persist wallet connection
      localStorage.setItem('mock-wallet-connected', 'true');
      localStorage.setItem('mock-wallet-address', mockAddress);
      localStorage.setItem('mock-wallet-balance', mockBalance.toString());
      localStorage.setItem('mock-wallet-type', walletType);
      
      toast({
        title: "🟢 Wallet Connected",
        description: `Successfully connected to ${walletType}`,
        className: "border-l-4 border-l-crypto-accent bg-crypto-accent/10 shadow-glow",
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
      walletType: null,
    });
    
    // Clear persisted data
    localStorage.removeItem('mock-wallet-connected');
    localStorage.removeItem('mock-wallet-address');
    localStorage.removeItem('mock-wallet-balance');
    localStorage.removeItem('mock-wallet-type');
    
    toast({
      title: "🔴 Wallet Disconnected",
      description: "Your wallet has been disconnected",
      className: "border-l-4 border-l-auburn-primary bg-auburn-primary/10 shadow-auburn",
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
