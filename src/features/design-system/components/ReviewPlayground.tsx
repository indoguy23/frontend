import { ReviewCard, ReviewSummary } from "@/components/common/Review";
import { showToast } from "@/components/ui/Toast";

import { REVIEW_BREAKDOWN, REVIEW_DATA } from "../data/review.data";

const ReviewPlayground = () => {
  return (
    <section className="rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8">
      <div>
        <h2 className="text-2xl font-semibold text-card-foreground">
          Review Components
        </h2>

        <p className="mt-2 text-muted-foreground">
          Reusable customer review cards and rating summaries.
        </p>
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-[280px_minmax(0,1fr)]">
        <ReviewSummary
          averageRating={4.7}
          totalReviews={284}
          ratingBreakdown={REVIEW_BREAKDOWN}
        />

        <div className="space-y-4">
          {REVIEW_DATA.map((review) => (
            <ReviewCard
              key={review.id}
              review={review}
              onHelpful={(selectedReview) =>
                showToast.success(
                  `Marked ${selectedReview.authorName}'s review as helpful.`,
                )
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewPlayground;
