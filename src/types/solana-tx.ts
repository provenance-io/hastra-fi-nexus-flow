import type {RpcResponseAndContext, SignatureResult} from "@solana/web3.js";

export class SolanaResponse {
    txId?: string;
    success: boolean | undefined;
    response: RpcResponseAndContext<SignatureResult> | undefined;
    error?: string | undefined;
    constructor(success: boolean, response: RpcResponseAndContext<SignatureResult> | undefined, txId?: string, error?: string) {
        this.txId = txId;
        this.success = success;
        this.response = response;
        this.error = error;
    }

};
