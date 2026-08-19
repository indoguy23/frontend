export type RatingDisplaySize = "sm" | "md" | "lg";

export interface RatingDisplayProps {
  rating: number;

  reviewCount?: number;

  maxRating?: number;

  showValue?: boolean;

  showReviewCount?: boolean;

  size?: RatingDisplaySize;

  className?: string;
}
