import type { LucideIcon } from "lucide-react";

export type StatTrend = "up" | "down" | "neutral";

export interface StatCardProps {
  title: string;

  value: string | number;

  description?: string;

  icon?: LucideIcon;

  trend?: StatTrend;

  trendValue?: string;

  trendLabel?: string;

  loading?: boolean;

  className?: string;
}
