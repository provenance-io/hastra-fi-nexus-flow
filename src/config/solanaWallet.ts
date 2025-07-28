import {
  PhantomWalletAdapter,
  SolflareWalletAdapter,
  WalletConnectWalletAdapter,
} from "@solana/wallet-adapter-wallets";
import { Cluster, clusterApiUrl } from "@solana/web3.js";
import { useMemo } from "react";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";

export const useSolanaWalletConfig = () => {
  // The network can be set to 'devnet', 'testnet', or 'mainnet-beta'.
  const network = import.meta.env.VITE_SOLANA_CLUSTER_NAME as Cluster;

  // You can also provide a custom RPC endpoint.
  const endpoint = useMemo(() => clusterApiUrl(network), [network]);
  const WC_NETWORK =
    network === "mainnet-beta"
      ? WalletAdapterNetwork.Mainnet
      : WalletAdapterNetwork.Devnet;

  const wallets = useMemo(
    () => [
      new PhantomWalletAdapter(),
      new SolflareWalletAdapter({ network: network as WalletAdapterNetwork }),
      new WalletConnectWalletAdapter({
        network: WC_NETWORK,
        options: {
          projectId: import.meta.env.VITE_WALLET_CONNECT_APP_ID,
          metadata: {
            name: "Hastra",
            description: "Hastra Protocol Wallet",
            url: "https://hastra.io",
            icons: [
              `${import.meta.env.VITE_CDN_URL}/images/hastra-mint-logo.png`,
            ],
          },
        },
      }),
    ],
    [WC_NETWORK, network]
  );

  return { endpoint, wallets };
};
