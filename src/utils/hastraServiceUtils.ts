export type TransferUSDCResponse = {
  ID: string;
  SolanaTxID: string;
  CircleTxID: string;
  MPCAddress: string;
  FMUSDCReceived: boolean;
  YLDSBidSubmitted: boolean;
  Status: string;
  CreatedAt: string;
  UpdatedAt: string;
};

/**
 * Function to move USDC from SC to Figure Markets
 * via Circle
 */
export const transferUSDC = async ({
  txHash,
  walletAddress,
}: {
  txHash: string;
  walletAddress: string;
}) => {
  const response = await fetch(
    `${import.meta.env.VITE_HASTRA_PULSE_URL}/deposit`,
    {
      method: "POST",
      body: JSON.stringify({
        TxId: txHash,
        solanaWallet: walletAddress,
      }),
    }
  );
  if (!response.ok) {
    console.error("Unable to process USDC transaction:", response.status);
    throw new Error(`Unable to process USDC transaction: ${response.status}`);
  }
  return (await response.json()) as TransferUSDCResponse;
};
