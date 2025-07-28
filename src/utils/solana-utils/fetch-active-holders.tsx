interface SolanaYieldsAccountResponse {
  jsonrpc: string;
  result: {
    account: {
      data: {
        parsed: {
          info: {
            isNative: boolean;
            mint: string;
            owner: string;
            state: string;
            tokenAmount: {
              amount: string;
              decimals: number;
              uiAmount: number;
              uiAmountString: string;
            };
          };
          type: string;
        };
        program: string;
        space: number;
      };
      executable: boolean;
      lamports: number;
      owner: string;
      rentEpoch: number;
      space: number;
    };
    pubkey: string;
  }[];
  id: 1;
}

export const fetchActiveHolders = async (): Promise<string> => {
  const response = await fetch(import.meta.env.VITE_SOLANA_RPC_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      jsonrpc: "2.0",
      id: 1,
      method: "getProgramAccounts",
      params: [
        "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",
        {
          encoding: "jsonParsed",
          filters: [
            {
              dataSize: 165,
            },
            {
              memcmp: {
                offset: 0,
                bytes: import.meta.env.VITE_SOLANA_YIELD_MINT,
              },
            },
          ],
        },
      ],
    }),
  });
  if (!response.ok) {
    throw new Error("Failed to fetch active holders data");
  }
  const data: SolanaYieldsAccountResponse = await response.json();
  return String(data?.result?.length) || "0";
};
