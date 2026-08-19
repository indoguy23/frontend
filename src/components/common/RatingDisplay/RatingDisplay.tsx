import { Star } from "lucide-react";

import { cn } from "@/utils/cn";

import { ratingDisplayStyles } from "./RatingDisplay.styles";
import type { RatingDisplayProps } from "./RatingDisplay.types";

const RatingDisplay = ({
  rating,
  reviewCount,
  maxRating = 5,
  showValue = true,
  showReviewCount = true,
  size = "md",
  className,
}: RatingDisplayProps) => {
  const safeMaxRating = Math.max(1, Math.floor(maxRating));

  const safeRating = Math.min(Math.max(rating, 0), safeMaxRating);

  const starSizeClass = {
    sm: ratingDisplayStyles.starSm,
    md: ratingDisplayStyles.starMd,
    lg: ratingDisplayStyles.starLg,
  }[size];

  const textSizeClass = {
    sm: ratingDisplayStyles.textSm,
    md: ratingDisplayStyles.textMd,
    lg: ratingDisplayStyles.textLg,
  }[size];

  return (
    <div
      className={cn(ratingDisplayStyles.root, textSizeClass, className)}
      aria-label={`${safeRating.toFixed(1)} out of ${safeMaxRating} stars`}
    >
      <div className={ratingDisplayStyles.stars} aria-hidden="true">
        {Array.from({
          length: safeMaxRating,
        }).map((_, index) => {
          const starNumber = index + 1;

          const isActive = starNumber <= Math.round(safeRating);

          return (
            <Star
              key={starNumber}
              className={cn(
                starSizeClass,
                isActive
                  ? ratingDisplayStyles.activeStar
                  : ratingDisplayStyles.inactiveStar,
              )}
            />
          );
        })}
      </div>

      {showValue && (
        <span className={ratingDisplayStyles.value}>
          {safeRating.toFixed(1)}
        </span>
      )}

      {showReviewCount && reviewCount !== undefined && (
        <span className={ratingDisplayStyles.reviews}>
          ({reviewCount} {reviewCount === 1 ? "review" : "reviews"})
        </span>
      )}
    </div>
  );
};

export default RatingDisplay;
