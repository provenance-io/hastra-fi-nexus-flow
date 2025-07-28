/// <reference types="vite/client" />

import { Cluster } from "@solana/web3.js";

interface ImportMetaEnv {
  VITE_SOLANA_CLUSTER_NAME: Cluster;
  VITE_SOLANA_RPC_URL: string;
  VITE_SOLANA_USDC_MINT: string;
  VITE_SOLANA_YIELD_MINT: string;
  VITE_SOLANA_USDC_VAULT: string;
  VITE_SOLANA_USDC_YIELD_CONFIG_PDA: string;
  VITE_SOLANA_USDC_YIELD_MINT_AUTHORITY_PDA: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
