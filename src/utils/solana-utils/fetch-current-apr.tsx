interface LeveragePool {
  leveragePool: {
    name: string;
    rate: number | string;
  };
}

/**
 * TODO: Update this with hastra endpoint
 * @returns sYLDS current APR
 */
export const fetchCurrentAPR = async (): Promise<number> => {
  const response = await fetch(
    "https://corsproxy.io/?url=https://www.figuremarkets.com/service-lending/api/v1/leverage-pools/summary?location=US"
  );
  if (!response.ok) {
    throw new Error("Failed to fetch APY data");
  }
  const data: LeveragePool[] = await response.json();
  let rate = 0;
  const found = data.find((r) => {
    const name = r?.leveragePool?.name;
    return name === "YLDS HELOCs";
  });

  if (found) {
    const raw = found.leveragePool.rate;
    const numeric = typeof raw === "number" ? raw : parseFloat(raw);
    rate = numeric * 100;
  } else {
    throw new Error("YLDS HELOC pool not found");
  }
  return rate;
};
