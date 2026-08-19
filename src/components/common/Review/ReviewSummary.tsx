import RatingDisplay from "@/components/common/RatingDisplay";
import { cn } from "@/utils/cn";

import { reviewStyles } from "./Review.styles";
import type { ReviewSummaryProps } from "./Review.types";

const ReviewSummary = ({
  averageRating,
  totalReviews,
  ratingBreakdown,
  className,
}: ReviewSummaryProps) => {
  return (
    <aside className={cn(reviewStyles.summary, className)}>
      <p className={reviewStyles.average}>{averageRating.toFixed(1)}</p>

      <div className="mt-2">
        <RatingDisplay
          rating={averageRating}
          reviewCount={totalReviews}
          showValue={false}
        />
      </div>

      <div className={reviewStyles.breakdown}>
        {ratingBreakdown.map((item) => {
          const percentage =
            totalReviews === 0 ? 0 : (item.count / totalReviews) * 100;

          return (
            <div key={item.rating} className={reviewStyles.breakdownRow}>
              <span className="text-sm text-muted-foreground">
                {item.rating}★
              </span>

              <div className={reviewStyles.progress}>
                <div
                  className={reviewStyles.progressValue}
                  style={{
                    width: `${percentage}%`,
                  }}
                />
              </div>

              <span className="text-right text-xs text-muted-foreground">
                {item.count}
              </span>
            </div>
          );
        })}
      </div>
    </aside>
  );
};

export default ReviewSummary;
