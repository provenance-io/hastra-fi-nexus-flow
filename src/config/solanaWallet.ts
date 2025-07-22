import {
    PhantomWalletAdapter,
    SolflareWalletAdapter,
} from '@solana/wallet-adapter-wallets';
import {clusterApiUrl} from '@solana/web3.js';
import {useMemo} from 'react';

export const useSolanaWalletConfig = () => {
  // The network can be set to 'devnet', 'testnet', or 'mainnet-beta'.
  const network = import.meta.env.VITE_SOLANA_CLUSTER_NAME;

  // You can also provide a custom RPC endpoint.
  const endpoint = useMemo(() => clusterApiUrl(network), [network]);

  const wallets = useMemo(
    () => [
      new PhantomWalletAdapter(),
      new SolflareWalletAdapter(),
    ],
    []
  );

  return { endpoint, wallets };
};
