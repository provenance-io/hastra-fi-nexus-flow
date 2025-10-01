interface SolanaYieldsMintResponse {
  jsonrpc: string;
  result: {
    context: {
      apiVersion: string;
      slot: number;
    };
    value: {
      amount: string;
      decimals: number;
      uiAmount: number;
      uiAmountString: string;
    };
  };
  id: 1;
}

export const fetchTotalCirculation = async (): Promise<number> => {
  const response = await fetch(import.meta.env.VITE_SOLANA_RPC_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      jsonrpc: "2.0",
      id: 1,
      method: "getTokenSupply",
      params: [import.meta.env.VITE_SOLANA_PRIME_MINT],
    }),
  });
  if (!response.ok) {
    throw new Error("Failed to fetch circulation data");
  }
  const data: SolanaYieldsMintResponse = await response.json();
  return data.result.value.uiAmount;
};
