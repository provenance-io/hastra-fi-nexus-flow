import { useState, useEffect } from "react";

interface LeveragePool {
  leveragePool: {
    name: string;
    rate: number | string;
  };
}

export const usePRIMEAPR = () => {
  const [rate, setRate] = useState<number>(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchAPR = async () => {
    try {
      setLoading(true);
      setError(null);
      // TODO: We should be able to add this easily to Hastra Service
      const response = await fetch(
        "https://corsproxy.io/?url=https://www.figuremarkets.com/service-lending/api/v1/leverage-pools/summary?location=US"
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data: LeveragePool[] = await response.json();
      const found = data.find((r) => {
        const name = r?.leveragePool?.name;
        return name === "YLDS HELOCs";
      });

      if (found) {
        const raw = found.leveragePool.rate;
        const numeric = typeof raw === "number" ? raw : parseFloat(raw);
        setRate(numeric * 100);
      } else {
        throw new Error("YLDS HELOC pool not found");
      }
    } catch (err) {
      console.error("Error fetching PRIME APR data:", err);
      setError(
        err instanceof Error ? err.message : "Failed to fetch PRIME APR data"
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAPR();

    // Refresh every 30 seconds
    const interval = setInterval(fetchAPR, 30000);

    return () => clearInterval(interval);
  }, []);

  return {
    rate,
    loading,
    error,
    refetch: fetchAPR,
  };
};
