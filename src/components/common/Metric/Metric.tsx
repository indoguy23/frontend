import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
} from "lucide-react";

import { cn } from "@/utils/cn";

import { metricStyles } from "./Metric.styles";
import type {
  MetricProps,
  MetricTrend,
} from "./Metric.types";

interface TrendIconProps {
  trend: MetricTrend;
}

const TrendIcon = ({
  trend,
}: TrendIconProps) => {
  if (trend === "up") {
    return (
      <ArrowUpRight
        aria-hidden="true"
        className="h-3.5 w-3.5"
      />
    );
  }

  if (trend === "down") {
    return (
      <ArrowDownRight
        aria-hidden="true"
        className="h-3.5 w-3.5"
      />
    );
  }

  return (
    <ArrowRight
      aria-hidden="true"
      className="h-3.5 w-3.5"
    />
  );
};

const getTrendClassName = (
  trend: MetricTrend,
) => {
  if (trend === "up") {
    return metricStyles.trendUp;
  }

  if (trend === "down") {
    return metricStyles.trendDown;
  }

  return metricStyles.trendNeutral;
};

const Metric = ({
  label,
  value,
  description,
  icon,
  trend,
  trendValue,
  className,
}: MetricProps) => {
  return (
    <div
      className={cn(
        metricStyles.root,
        className,
      )}
    >
      <div className={metricStyles.header}>
        <p className={metricStyles.label}>
          {label}
        </p>

        {icon && (
          <div className={metricStyles.icon}>
            {icon}
          </div>
        )}
      </div>

      <div className={metricStyles.value}>
        {value}
      </div>

      {(description ||
        (trend && trendValue)) && (
        <div className={metricStyles.footer}>
          {trend && trendValue && (
            <span
              className={cn(
                "inline-flex items-center gap-1 font-medium",
                getTrendClassName(trend),
              )}
            >
              <TrendIcon trend={trend} />

              {trendValue}
            </span>
          )}

          {description && (
            <span
              className={
                metricStyles.description
              }
            >
              {description}
            </span>
          )}
        </div>
      )}
    </div>
  );
};

export default Metric;