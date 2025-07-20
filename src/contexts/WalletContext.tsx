
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useToast } from '@/hooks/use-toast';
import { appkit } from '@/config/walletconnect';

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

  // Listen for AppKit state changes
  useEffect(() => {
    const unsubscribe = appkit.subscribeState((state) => {
      console.log('AppKit State:', state); // Debug log
      
      // Check if we have an active account connection
      const isWalletConnected = (state as any).address && !state.open;
      const isWalletDisconnected = !(state as any).address && !state.open;
      
      if (isWalletConnected) {
        // Wallet is connected
        setWalletState(prev => ({
          ...prev,
          isConnected: true,
          address: (state as any).address,
          isConnecting: false,
          walletType: 'Connected',
          balance: 1250.45, // You can implement actual balance fetching here
        }));
        
        if (walletState.isConnecting) {
          toast({
            title: "🟢 Wallet Connected",
            description: `Successfully connected wallet`,
            className: "border-l-4 border-l-crypto-accent bg-crypto-accent/10 shadow-glow",
          });
        }
      } else if (isWalletDisconnected) {
        // Wallet is disconnected
        setWalletState(prev => ({
          ...prev,
          isConnected: false,
          address: null,
          isConnecting: false,
          walletType: null,
          balance: 0,
        }));
      }
    });

    return () => {
      unsubscribe();
    };
  }, [toast, walletState.isConnecting]);

  const connectWallet = async (): Promise<void> => {
    setWalletState(prev => ({ ...prev, isConnecting: true, networkError: null }));

    try {
      // Open WalletConnect AppKit modal
      appkit.open();
      
      // The actual connection will be handled by the AppKit state subscription
    } catch (error) {
      console.error('Failed to connect wallet:', error);
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
    appkit.disconnect();
    
    setWalletState({
      isConnected: false,
      isConnecting: false,
      address: null,
      balance: 0,
      networkError: null,
      walletType: null,
    });
    
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
