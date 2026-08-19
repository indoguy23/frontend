import { useState } from "react";

import ReviewForm from "@/components/common/ReviewForm";
import type {
  ReviewFormErrors,
  ReviewFormValues,
} from "@/components/common/ReviewForm";
import Card from "@/components/ui/Card";
import { showToast } from "@/components/ui/Toast";

const INITIAL_VALUES: ReviewFormValues = {
  rating: 0,
  title: "",
  comment: "",
};

const ReviewFormPlayground = () => {
  const [values, setValues] = useState<ReviewFormValues>(INITIAL_VALUES);

  const [errors, setErrors] = useState<ReviewFormErrors>({});

  const handleSubmit = (review: ReviewFormValues) => {
    const nextErrors: ReviewFormErrors = {};

    if (review.rating === 0) {
      nextErrors.rating = "Please select a rating.";
    }

    if (!review.title.trim()) {
      nextErrors.title = "Review title is required.";
    }

    if (!review.comment.trim()) {
      nextErrors.comment = "Please write your review.";
    }

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);

      return;
    }

    setErrors({});

    showToast.success("Review submitted successfully.");

    setValues(INITIAL_VALUES);
  };

  return (
    <section className="rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8">
      <div>
        <h2 className="text-2xl font-semibold text-card-foreground">
          Review Form
        </h2>

        <p className="mt-2 text-muted-foreground">
          Reusable review form composed from existing form and rating
          components.
        </p>
      </div>

      <div className="mt-8 max-w-2xl">
        <Card>
          <ReviewForm
            value={values}
            errors={errors}
            onChange={(nextValues) => {
              setValues(nextValues);

              if (Object.keys(errors).length) {
                setErrors({});
              }
            }}
            onSubmit={handleSubmit}
          />
        </Card>
      </div>
    </section>
  );
};

export default ReviewFormPlayground;
