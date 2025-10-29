import {clusterApiUrl} from "@solana/web3.js";

export const getNetworkUrl = () : string => {
    if(import.meta.env.VITE_SOLANA_RPC_URL) {
        return import.meta.env.VITE_SOLANA_RPC_URL;
    }
    return clusterApiUrl(import.meta.env.VITE_SOLANA_CLUSTER_NAME);
}
