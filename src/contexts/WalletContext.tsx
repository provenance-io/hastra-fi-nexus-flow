
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
      console.log('🔍 Full AppKit State:', JSON.stringify(state, null, 2)); // More detailed debug
      
      // Check for actual wallet connection using AppKit's standard properties
      const isWalletConnected = (state as any).isConnected === true;
      const walletAddress = (state as any).caipAddress || (state as any).address;
      const connectorInfo = (state as any).connectorType || (state as any).connectorName;
      
      console.log('🔎 Connection Analysis:', {
        isWalletConnected,
        hasAddress: !!walletAddress,
        address: walletAddress,
        connector: connectorInfo,
        modalOpen: state.open,
        loading: state.loading
      });
      
      // Handle connection state changes
      if (!state.open && !state.loading) {
        if (isWalletConnected && walletAddress) {
          console.log('✅ Valid wallet connection confirmed');
          setWalletState(prev => ({
            ...prev,
            isConnected: true,
            address: walletAddress,
            isConnecting: false,
            walletType: connectorInfo || 'Connected Wallet',
            balance: 1250.45,
            networkError: null,
          }));
          
          toast({
            title: "🟢 Wallet Connected",
            description: `Successfully connected to ${connectorInfo || 'wallet'}`,
            className: "border-l-4 border-l-crypto-accent bg-crypto-accent/10 shadow-glow",
          });
        } else {
          console.log('❌ No valid wallet connection');
          setWalletState(prev => ({
            ...prev,
            isConnected: false,
            address: null,
            isConnecting: false,
            walletType: null,
            balance: 0,
          }));
        }
      }
    });

    return () => {
      unsubscribe();
    };
  }, [toast]);

  const connectWallet = async (): Promise<void> => {
    console.log('🚀 Initiating wallet connection...');
    setWalletState(prev => ({ ...prev, isConnecting: true, networkError: null }));

    try {
      console.log('📱 Opening AppKit modal...');
      // Use AppKit's open method to show wallet selection
      appkit.open();
      
    } catch (error) {
      console.error('❌ Connection error:', error);
      setWalletState(prev => ({
        ...prev,
        isConnecting: false,
        networkError: 'Failed to open wallet connection modal.',
      }));
      
      toast({
        title: "Connection Failed",
        description: "Could not open wallet connection. Please try again.",
        variant: "destructive",
      });
    }
  };

  const disconnectWallet = (): void => {
    try {
      // First disconnect from AppKit
      appkit.disconnect();
      
      // Wait a bit then reset state to ensure clean disconnect
      setTimeout(() => {
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
      }, 100);
      
    } catch (error) {
      console.error('Error disconnecting wallet:', error);
      // Force reset state even if disconnect fails
      setWalletState({
        isConnected: false,
        isConnecting: false,
        address: null,
        balance: 0,
        networkError: null,
        walletType: null,
      });
    }
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
