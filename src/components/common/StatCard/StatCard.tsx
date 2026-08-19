import { ArrowDownRight, ArrowRight, ArrowUpRight } from "lucide-react";

import Skeleton from "@/components/ui/Skeleton";
import { cn } from "@/utils/cn";

import { statCardStyles } from "./StatCard.styles";
import type { StatCardProps, StatTrend } from "./StatCard.types";

const renderTrendIcon = (trend: StatTrend) => {
  switch (trend) {
    case "up":
      return <ArrowUpRight aria-hidden="true" className="h-4 w-4" />;

    case "down":
      return <ArrowDownRight aria-hidden="true" className="h-4 w-4" />;

    case "neutral":
    default:
      return <ArrowRight aria-hidden="true" className="h-4 w-4" />;
  }
};
const getTrendClassName = (trend: StatTrend) => {
  switch (trend) {
    case "up":
      return statCardStyles.trendUp;

    case "down":
      return statCardStyles.trendDown;

    case "neutral":
    default:
      return statCardStyles.trendNeutral;
  }
};

const StatCard = ({
  title,
  value,
  description,
  icon: Icon,
  trend,
  trendValue,
  trendLabel,
  loading = false,
  className,
}: StatCardProps) => {
  if (loading) {
    return (
      <div className={cn(statCardStyles.card, className)}>
        <div className="flex items-start justify-between gap-4">
          <Skeleton className="h-4 w-28" />
          <Skeleton className="h-10 w-10 rounded-xl" />
        </div>

        <Skeleton className="mt-5 h-9 w-32" />

        <Skeleton className="mt-3 h-4 w-40" />

        <Skeleton className="mt-4 h-4 w-36" />
      </div>
    );
  }

  return (
    <article className={cn(statCardStyles.card, className)}>
      <div className={statCardStyles.header}>
        <div>
          <p className={statCardStyles.title}>{title}</p>

          <p className={statCardStyles.value}>{value}</p>
        </div>

        {Icon && (
          <div className={statCardStyles.iconWrapper}>
            <Icon aria-hidden="true" className="h-5 w-5" />
          </div>
        )}
      </div>

      {description && (
        <p className={statCardStyles.description}>{description}</p>
      )}

      {(trend || trendValue || trendLabel) && (
        <div className={statCardStyles.footer}>
          {trend && trendValue && (
            <span
              className={cn(statCardStyles.trendBase, getTrendClassName(trend))}
            >
              {renderTrendIcon(trend)}

              {trendValue}
            </span>
          )}

          {trendLabel && (
            <span className={statCardStyles.trendLabel}>{trendLabel}</span>
          )}
        </div>
      )}
    </article>
  );
};

export default StatCard;
