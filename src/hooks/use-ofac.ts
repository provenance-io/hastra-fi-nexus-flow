import {useQuery} from "@tanstack/react-query";
import {isFeatureEnabled} from "@/utils/featureFlags.ts";

interface OfacResponse {
    Address: string;
    Score: number;
    Level: string;
    Reason: string;
    Entities: string[];
}

export const useOfac = (address: string) => {
    return useQuery<OfacResponse, Error>({
        queryKey: ["ofac", address],
        enabled: !!address,
        queryFn: async () => {
            if(isFeatureEnabled('ofacCheckEnabled')) {
                const response = await fetch(
                    new URL(`${import.meta.env.VITE_HASTRA_PULSE_URL}/wallet/analyze`),
                    {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({ address }),
                    }
                );
                if (!response.ok) {
                    throw new Error(`Failed to fetch OFAC data for ${address}`);
                }
                return await response.json();
            } else {
                //fake ofac
                return {
                    Address: address,
                    Score: 999999,
                    Level: "",
                    Reason: "",
                    Entities: [],
                };
            }
        }
    });
};
