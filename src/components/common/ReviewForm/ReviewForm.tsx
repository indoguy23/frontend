import type { FormEvent } from "react";

import RatingInput from "@/components/common/RatingInput";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/form/Input";
import Textarea from "@/components/ui/form/Textarea";
import { cn } from "@/utils/cn";

import { reviewFormStyles } from "./ReviewForm.styles";
import type { ReviewFormProps } from "./ReviewForm.types";

const ReviewForm = ({
  value,
  onChange,
  onSubmit,
  errors,
  loading = false,
  disabled = false,
  showTitle = true,
  submitLabel = "Submit Review",
  className,
}: ReviewFormProps) => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (loading || disabled) {
      return;
    }

    onSubmit(value);
  };

  return (
    <form
      className={cn(reviewFormStyles.root, className)}
      onSubmit={handleSubmit}
    >
      <div className={reviewFormStyles.fields}>
        <div className={reviewFormStyles.field}>
          <RatingInput
            value={value.rating}
            onChange={(rating) =>
              onChange({
                ...value,
                rating,
              })
            }
            label="Your rating"
            disabled={disabled || loading}
            size="lg"
          />

          {errors?.rating && (
            <p role="alert" className={reviewFormStyles.error}>
              {errors.rating}
            </p>
          )}
        </div>

        {showTitle && (
          <div className={reviewFormStyles.field}>
            <label htmlFor="review-title" className={reviewFormStyles.label}>
              Review title
            </label>

            <Input
              id="review-title"
              value={value.title}
              placeholder="Summarize your experience"
              disabled={disabled || loading}
              aria-invalid={Boolean(errors?.title)}
              onChange={(event) =>
                onChange({
                  ...value,
                  title: event.target.value,
                })
              }
            />

            {errors?.title && (
              <p role="alert" className={reviewFormStyles.error}>
                {errors.title}
              </p>
            )}
          </div>
        )}

        <div className={reviewFormStyles.field}>
          <label htmlFor="review-comment" className={reviewFormStyles.label}>
            Your review
          </label>

          <Textarea
            id="review-comment"
            value={value.comment}
            placeholder="Share your experience with this product..."
            disabled={disabled || loading}
            aria-invalid={Boolean(errors?.comment)}
            rows={5}
            onChange={(event) =>
              onChange({
                ...value,
                comment: event.target.value,
              })
            }
          />

          {errors?.comment && (
            <p role="alert" className={reviewFormStyles.error}>
              {errors.comment}
            </p>
          )}
        </div>
      </div>

      <div className={reviewFormStyles.footer}>
        <p className={reviewFormStyles.hint}>
          Your review may be visible to other marketplace users.
        </p>

        <Button type="submit" loading={loading} disabled={disabled || loading}>
          {submitLabel}
        </Button>
      </div>
    </form>
  );
};

export default ReviewForm;
