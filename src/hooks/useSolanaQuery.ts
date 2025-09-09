import { clusterApiUrl, Connection, PublicKey } from "@solana/web3.js";
import { getAssociatedTokenAddress } from "@solana/spl-token";
import { useQuery } from "@tanstack/react-query";
import type { CoinGeckoPrice } from "../types/coin-gecko";
import {AnchorProvider, type Idl, Program, Wallet} from "@coral-xyz/anchor";
import {SolVaultStake as solVaultStakeIdl } from "@/types/idl/sol-vault-stake.ts";
import {useAnchorWallet} from "@/hooks/use-solana-tx.ts";
import {PendingUnstake} from "@/types/staking.ts";
import {SolVaultStake} from "@/types/sol-vault-stake.ts";

const connection = new Connection(
  clusterApiUrl(import.meta.env.VITE_SOLANA_CLUSTER_NAME),
  "confirmed"
);

export const useSolBalanceQuery = (publicKey: PublicKey | null) => {
  return useQuery<number, Error>({
    queryKey: ["solBalance", publicKey],
    enabled: !!publicKey,
    queryFn: async () => {
      if (!publicKey) throw new Error("No pubkey");
      const balance = await connection.getBalance(publicKey);
      return balance / 1e9; // Convert lamports to SOL
    },
    initialData: 0,
    refetchInterval: 5000, // Optional: refetch every 5 seconds
  });
};

export const useCoinGeckoPrice = () => {
  return useQuery<CoinGeckoPrice | undefined, Error>({
    queryKey: ["coinGecko", "solana"],
    queryFn: async () => {
      const url = new URL("https://api.coingecko.com/api/v3/simple/price");
      url.searchParams.append("ids", "solana,hash-2");
      url.searchParams.append("vs_currencies", "usd");
      const response = await fetch(url.toString());
      if (!response.ok) {
        throw new Error("Failed to fetch Coin Gecko price");
      }
      return response.json();
    },
    refetchInterval: 60000,
  });
};

export const useAtaQuery = (
  publicKey: PublicKey | null,
  tokenAddress?: string
) => {
  return useQuery<string, Error>({
    queryKey: ["ata", publicKey, tokenAddress],
    enabled: !!publicKey && !!tokenAddress,
    queryFn: async () => {
      if (!publicKey || !tokenAddress)
        throw new Error("No wallet or token address provided");
      const ta = await getAssociatedTokenAddress(
        new PublicKey(tokenAddress),
        publicKey
      );
      return ta.toBase58();
    },
  });
};

export const useAccountExistsQuery = (publicKey: PublicKey | null) => {
  return useQuery<boolean, Error>({
    queryKey: ["accountExists", publicKey],
    enabled: !!publicKey,
    queryFn: async () => {
      if (!publicKey) throw new Error("No pubkey");
      const info = await connection.getAccountInfo(publicKey);
      return info != null;
    },
    initialData: undefined,
  });
};

export const useAtaExistsQuery = (
  publicKey: PublicKey | null,
  tokenAddress: string
) => {
  return useQuery<boolean, Error>({
    queryKey: ["ataExists", publicKey, tokenAddress],
    enabled: !!publicKey && !!tokenAddress,
    queryFn: async () => {
      if (!publicKey) throw new Error("No pubkey");
      const ta = await getAssociatedTokenAddress(
        new PublicKey(tokenAddress),
        publicKey
      );
      const info = await connection.getAccountInfo(ta);
      return info != null;
    },
    initialData: undefined,
  });
};

export const useAtaBalanceQuery = (
  publicKey: PublicKey | null,
  tokenAddress: string
) => {
  return useQuery<number, Error>({
    queryKey: ["ataBalance", publicKey, tokenAddress],
    enabled: !!publicKey && !!tokenAddress,
    queryFn: async () => {
      if (!publicKey) throw new Error("No pubkey");
      const ta = await getAssociatedTokenAddress(
        new PublicKey(tokenAddress),
        publicKey
      );
      const balanceInfo = await connection.getTokenAccountBalance(ta);
      return balanceInfo.value.uiAmount || 0;
    },
    initialData: 0,
    refetchInterval: 5000, // Refetch every minute
  });
};

const unbondingConfig = async (program: Program<SolVaultStake>): Promise<number> => {
  const [pda] = PublicKey.findProgramAddressSync(
      [Buffer.from("config")],
      program.programId
  );
  const config = await program.account.config.fetch(pda);
  return config?.unbondingPeriod.toNumber() || 0;
}

export function useUnbondingPeriodConfigQuery() {
    const wallet = useAnchorWallet();
    const provider = new AnchorProvider(connection, wallet, {
        preflightCommitment: "confirmed",
    });
    const program = new Program(solVaultStakeIdl as Idl, provider) as Program<SolVaultStake>;
    return useQuery<number, Error>({
        queryKey: ["staking-config", program.programId.toBase58()],
        enabled: !!program,
        queryFn: async () => {
          return await unbondingConfig(program);
        },
        refetchInterval: 60_000,
    });
}
export function usePendingUnstakeQuery() {
  const wallet = useAnchorWallet();
  const provider = new AnchorProvider(connection, wallet, {
    preflightCommitment: "confirmed",
  });
  const program = new Program(solVaultStakeIdl as Idl, provider) as Program<SolVaultStake>;

  return useQuery<PendingUnstake | null, Error>({
    queryKey: ["unbonding-ticket", program.programId.toBase58(), wallet.publicKey?.toBase58()],
    enabled: !!program && !!wallet && !!wallet.publicKey,
    queryFn: async () => {
      const [pda] = PublicKey.findProgramAddressSync(
          [Buffer.from("ticket"), wallet.publicKey!.toBuffer()],
          program.programId
      );
      const ticket = await program.account.unbondingTicket.fetchNullable(pda);
      if (!ticket) return null;

      const ubConfig = await unbondingConfig(program);

      if(ubConfig === 0) {
        throw new Error("Invalid unbonding config found - cannot calculate pending unstake");
      }

      const endTs: number = ((ticket?.startTs.toNumber() || 0) + ubConfig) * 1000;
      const startTs: number = (ticket?.startTs.toNumber() || 0) * 1000;
      const now = Date.now();
      const status = (endTs < now) ? 'ready' : 'pending';

      console.log({endTs, startTs, now, status});
      return {
        id: pda.toBase58(),
        amount: ((ticket?.requestedAmount.toNumber() || 0) / 1e6).toString(),
        initiatedAt: new Date(startTs),
        availableAt: new Date(endTs),
        status: status,
        canClaim: status === 'ready',
        canCancel: status === 'pending',
      } as PendingUnstake;
    },
    refetchInterval: 15_000, // optional
  });
}
