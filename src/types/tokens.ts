export const USDC: string = import.meta.env.VITE_SOLANA_USDC_MINT;
export const wYLDS: string = import.meta.env.VITE_SOLANA_WYLDS_MINT;

export const PRIME: string = import.meta.env.VITE_SOLANA_PRIME_MINT;

export interface RedemptionRequest {
    user: string;
    amount: string;
    vaultMint: string;
    mint: string;
}

