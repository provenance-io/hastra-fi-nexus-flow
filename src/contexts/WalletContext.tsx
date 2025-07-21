
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useToast } from '@/hooks/use-toast';
import { useWallet as useSolanaWallet } from '@solana/wallet-adapter-react';
import { useWalletModal } from '@solana/wallet-adapter-react-ui';

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
  const { 
    wallet, 
    publicKey, 
    connected, 
    connecting, 
    disconnect: solanaDisconnect,
  } = useSolanaWallet();
  const { setVisible } = useWalletModal();

  // Update our state based on Solana wallet adapter state
  useEffect(() => {
    // Wallet state monitoring for development debugging if needed

    const previouslyConnected = walletState.isConnected;

    setWalletState(prev => ({
      ...prev,
      isConnected: connected,
      isConnecting: connecting,
      address: publicKey?.toString() || null,
      walletType: wallet?.adapter?.name || null,
      balance: connected ? 1250.45 : 0, // Mock balance for now
      networkError: null,
    }));

    // Show connection success toast
    if (connected && publicKey && !previouslyConnected) {
      toast({
        title: "🟢 Wallet Connected",
        description: `Successfully connected ${wallet?.adapter?.name || 'wallet'}`,
        className: "bg-background/30 backdrop-blur-md border border-border/20 hover:border-orange-300/20 shadow-2xl",
      });
    }
  }, [connected, connecting, publicKey, wallet, toast, walletState.isConnected]);

  const connectWallet = async (): Promise<void> => {
    // Opening Solana wallet selection modal
    
    try {
      setWalletState(prev => ({ ...prev, isConnecting: true, networkError: null }));
      
      // Open the wallet selection modal
      setVisible(true);
      
    } catch (error) {
      // Error opening wallet modal - could be connected to error tracking service
      setWalletState(prev => ({
        ...prev,
        isConnecting: false,
        networkError: 'Failed to open wallet selection. Please try again.',
      }));
      
      toast({
        title: "Connection Error",
        description: "Could not open wallet selection. Please try again.",
        variant: "destructive",
      });
    }
  };

  const disconnectWallet = (): void => {
    try {
      // Disconnecting wallet
      solanaDisconnect();
      
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
      
    } catch (error) {
      // Error disconnecting wallet - could be connected to error tracking service
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
      // Failed to refresh balance - could be connected to error tracking service
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
