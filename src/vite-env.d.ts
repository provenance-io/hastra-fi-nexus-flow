/// <reference types="vite/client" />

import { Cluster } from "@solana/web3.js";

interface ImportMetaEnv {
  VITE_SOLANA_CLUSTER_NAME: Cluster;
  VITE_SOLANA_RPC_URL: string;
  VITE_SOLANA_USDC_MINT: string;
  VITE_SOLANA_WYLDS_MINT: string;
  VITE_SOLANA_USDC_VAULT: string;
  VITE_SOLANA_USDC_WYLDS_CONFIG_PDA: string;
  VITE_SOLANA_USDC_WYLDS_MINT_AUTHORITY_PDA: string;
  VITE_HASTRA_PULSE_URL: string;
  VITE_SOLANA_SYLDS_MINT: string;
  VITE_SOLANA_SYLDS_VAULT: string;
  VITE_SOLANA_SYLDS_CONFIG_PDA: string;
  VITE_SOLANA_SYLDS_MINT_AUTHORITY_PDA: string;
  VITE_FEATURE_HOMES_ENABLED: string;
  VITE_FEATURE_TEST_PAGES_ENABLED: string;
  VITE_FEATURE_DEBUG_COMPONENTS_ENABLED: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
