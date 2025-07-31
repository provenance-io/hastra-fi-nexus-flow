interface FigureYieldResponse {
  rate: number;
}

export const fetchCurrentAPY = async (): Promise<number> => {
  // TODO: Replace with Solana YIELDS service when able
  const response = await fetch(
    "https://api.codetabs.com/v1/proxy?quest=https://www.figuremarkets.com/service-funds/public/api/v1/funds/17d885eb-13e9-47a4-ad2f-228c0aa89a91/yield"
  );
  if (!response.ok) {
    throw new Error("Failed to fetch APY data");
  }
  const data: FigureYieldResponse = await response.json();
  // Subtract 0.25% take rate
  return data && data.rate && data.rate > 0.25 ? data.rate - 0.25 : 0;
};
