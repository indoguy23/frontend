import type { ReactNode } from "react";

export type MetricTrend =
  | "up"
  | "down"
  | "neutral";

export interface MetricProps {
  label: string;

  value: ReactNode;

  description?: string;

  icon?: ReactNode;

  trend?: MetricTrend;

  trendValue?: string;

  className?: string;
}