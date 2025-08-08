interface APYResponse {
  estimatedRate: string;
}

export const fetchCurrentAPY = async (): Promise<number> => {
  const response = await fetch(new URL(`${import.meta.env.VITE_HASTRA_PULSE_URL}/apy/estimated`));
  if (!response.ok) {
    throw new Error("Failed to fetch APY data");
  }
  const data: APYResponse = await response.json();
  return parseFloat(data.estimatedRate);
};
