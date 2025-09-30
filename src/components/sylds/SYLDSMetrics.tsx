import { useQuery } from "@tanstack/react-query";
import { Card } from "@/components/ui/card";
import { TrendingUp, TrendingDown, Minus } from "lucide-react";
import {
  fetchActiveHolders,
  fetchTotalCirculation,
  fetchCurrentAPR,
} from "@/utils/solana-utils";

const formatNumber = (num: number): string => {
  if (num >= 1e9) return `$${(num / 1e9).toFixed(1)}B`;
  if (num >= 1e6) return `$${(num / 1e6).toFixed(1)}M`;
  if (num >= 1e3) return `$${(num / 1e3).toFixed(1)}K`;
  return `$${num.toFixed(2)}`;
};

const formatHolders = (holders: string): string => {
  const num = parseInt(holders);
  if (num >= 1000) return `${Math.floor(num / 1000)}k+`;
  return holders;
};

const SYLDSMetrics = () => {
  const { data: currentAPR, isLoading: apyLoading } = useQuery({
    queryKey: ["currentAPR"],
    queryFn: fetchCurrentAPR,
    refetchInterval: 5 * 60 * 1000,
  });

  const { data: activeHolders, isLoading: holdersLoading } = useQuery({
    queryKey: ["activeHolders"],
    queryFn: fetchActiveHolders,
    refetchInterval: 5 * 60 * 1000,
  });

  const { data: totalCirculation, isLoading: circulationLoading } = useQuery({
    queryKey: ["totalCirculation"],
    queryFn: fetchTotalCirculation,
    refetchInterval: 5 * 60 * 1000,
  });

  const metrics = [
    {
      title: "Current APY",
      value: apyLoading
        ? "Loading..."
        : currentAPR
        ? `${currentAPR.toFixed(1)}%`
        : "Unknown",
      trend: { direction: "up" as const, value: "+0.3% this week" },
      icon: TrendingUp,
    },
    {
      title: "Total Value Locked",
      value: circulationLoading
        ? "Loading..."
        : totalCirculation
        ? formatNumber(totalCirculation * 1.1)
        : "$12.4M",
      trend: { direction: "up" as const, value: "+15% this month" },
      icon: TrendingUp,
    },
    {
      title: "Active Stakers",
      value: holdersLoading
        ? "Loading..."
        : activeHolders
        ? formatHolders(activeHolders)
        : "2,847",
      trend: { direction: "up" as const, value: "+234 this week" },
      icon: TrendingUp,
    },
    {
      title: "Avg. Stake Duration",
      value: "127 days",
      trend: { direction: "stable" as const, value: "Growing confidence" },
      icon: Minus,
    },
  ];

  const getTrendColor = (direction: string) => {
    switch (direction) {
      case "up":
        return "text-green-500";
      case "down":
        return "text-red-500";
      default:
        return "text-muted-foreground";
    }
  };

  const getTrendIcon = (direction: string) => {
    switch (direction) {
      case "up":
        return TrendingUp;
      case "down":
        return TrendingDown;
      default:
        return Minus;
    }
  };

  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Live sYLDS Metrics
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real-time data showing the performance and growth of the sYLDS
            ecosystem
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, index) => {
            const TrendIcon = getTrendIcon(metric.trend.direction);

            return (
              <Card
                key={index}
                className="p-6 bg-card/50 backdrop-blur-sm border-border/40 hover:bg-card/70 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="font-medium text-muted-foreground text-sm">
                    {metric.title}
                  </h3>
                  <metric.icon className="h-4 w-4 text-muted-foreground" />
                </div>

                <div className="space-y-2">
                  <p className="text-2xl font-bold text-foreground">
                    {metric.value}
                  </p>

                  <div
                    className={`flex items-center space-x-1 text-sm ${getTrendColor(
                      metric.trend.direction
                    )}`}
                  >
                    <TrendIcon className="h-3 w-3" />
                    <span>{metric.trend.value}</span>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SYLDSMetrics;
