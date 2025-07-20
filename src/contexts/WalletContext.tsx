
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
      console.log('🔍 AppKit State Update:', {
        loading: state.loading,
        open: state.open,
        selectedNetworkId: state.selectedNetworkId,
        activeChain: state.activeChain
      });
      
      // Check all possible connection indicators from AppKit
      const caipAddress = (state as any).caipAddress;
      const address = (state as any).address;
      const account = (state as any).account;
      const isConnected = (state as any).isConnected;
      const connectorType = (state as any).connectorType;
      
      // Log detailed connection state
      console.log('🔎 Wallet Connection Details:', {
        caipAddress,
        address,
        account,
        isConnected,
        connectorType,
        hasAnyAddress: !!(caipAddress || address || account)
      });
      
      // Determine if we have a valid wallet connection
      const hasValidConnection = (isConnected === true) || !!(caipAddress || address || account);
      const walletAddress = caipAddress || address || account;
      
      // Only process state when not loading and modal is closed
      if (!state.loading && !state.open) {
        if (hasValidConnection && walletAddress) {
          console.log('✅ Setting connected state with address:', walletAddress);
          setWalletState(prev => ({
            ...prev,
            isConnected: true,
            address: walletAddress,
            isConnecting: false,
            walletType: connectorType || 'Solana Wallet',
            balance: 1250.45,
            networkError: null,
          }));
          
          toast({
            title: "🟢 Wallet Connected",
            description: `Successfully connected ${connectorType || 'Solana wallet'}`,
            className: "border-l-4 border-l-crypto-accent bg-crypto-accent/10 shadow-glow",
          });
        } else {
          console.log('❌ No valid connection - clearing state');
          setWalletState(prev => ({
            ...prev,
            isConnected: false,
            address: null,
            isConnecting: false,
            walletType: null,
            balance: 0,
          }));
        }
      } else if (state.open) {
        console.log('📱 Modal is open - setting connecting state');
        setWalletState(prev => ({
          ...prev,
          isConnecting: true,
          networkError: null,
        }));
      }
    });

    return () => {
      unsubscribe();
    };
  }, [toast]);

  const connectWallet = async (): Promise<void> => {
    console.log('🚀 Starting wallet connection process...');
    
    try {
      setWalletState(prev => ({ ...prev, isConnecting: true, networkError: null }));
      
      console.log('📱 Opening wallet selection modal...');
      appkit.open({ view: 'Connect' }); // Explicitly open to Connect view
      
    } catch (error) {
      console.error('❌ Error opening wallet modal:', error);
      setWalletState(prev => ({
        ...prev,
        isConnecting: false,
        networkError: 'Failed to open wallet selection. Please try again.',
      }));
      
      toast({
        title: "Connection Error",
        description: "Could not open wallet selection. Please refresh and try again.",
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
