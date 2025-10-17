import React, { ReactNode } from "react";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { useSolanaWalletConfig } from "@/config/solanaWallet";
import { HastraWalletConnectModal } from "@/components/dialogs/hastra-wallet-connect-modal";
import { HastraWalletModalProvider } from "./HastraWalletModalContext";

interface SolanaWalletProviderProps {
  children: ReactNode;
}

export const SolanaWalletProvider: React.FC<SolanaWalletProviderProps> = ({
  children,
}) => {
  const { endpoint, wallets } = useSolanaWalletConfig();

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <HastraWalletModalProvider>
          <HastraWalletConnectModal />
          {children}
        </HastraWalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
};
