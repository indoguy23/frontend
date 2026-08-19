export interface ReviewData {
  id: string;
  authorName: string;
  authorAvatar?: string;

  rating: number;

  title?: string;
  comment: string;

  date: string;

  verifiedPurchase?: boolean;

  helpfulCount?: number;
}

export interface ReviewCardProps {
  review: ReviewData;

  onHelpful?: (review: ReviewData) => void;

  className?: string;
}

export interface ReviewSummaryProps {
  averageRating: number;

  totalReviews: number;

  ratingBreakdown: {
    rating: number;
    count: number;
  }[];

  className?: string;
}
