import { ThumbsUp } from "lucide-react";

import Avatar from "@/components/ui/Avatar";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import RatingDisplay from "@/components/common/RatingDisplay";
import { cn } from "@/utils/cn";

import { reviewStyles } from "./Review.styles";
import type { ReviewCardProps } from "./Review.types";

const ReviewCard = ({ review, onHelpful, className }: ReviewCardProps) => {
  return (
    <article className={cn(reviewStyles.card, className)}>
      <div className={reviewStyles.header}>
        <div className={reviewStyles.author}>
          <Avatar
            src={review.authorAvatar}
            alt={review.authorName}
            fallback={review.authorName
              .split(" ")
              .map((part) => part[0])
              .join("")
              .slice(0, 2)
              .toUpperCase()}
            size="sm"
          />

          <div className={reviewStyles.authorInfo}>
            <p className={reviewStyles.authorName}>{review.authorName}</p>

            <p className={reviewStyles.date}>{review.date}</p>
          </div>
        </div>

        {review.verifiedPurchase && (
          <Badge variant="success">Verified Purchase</Badge>
        )}
      </div>

      <div className="mt-4">
        <RatingDisplay
          rating={review.rating}
          showReviewCount={false}
          size="sm"
        />
      </div>

      {review.title && <h3 className={reviewStyles.title}>{review.title}</h3>}

      <p className={reviewStyles.comment}>{review.comment}</p>

      <div className={reviewStyles.footer}>
        <p className="text-sm text-muted-foreground">
          {review.helpfulCount ?? 0} people found this helpful
        </p>

        <Button
          size="sm"
          variant="ghost"
          leftIcon={<ThumbsUp className="h-4 w-4" />}
          onClick={() => onHelpful?.(review)}
        >
          Helpful
        </Button>
      </div>
    </article>
  );
};

export default ReviewCard;
