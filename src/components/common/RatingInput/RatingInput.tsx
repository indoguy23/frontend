import { useState } from "react";

import { Star } from "lucide-react";

import { cn } from "@/utils/cn";

import { ratingInputStyles } from "./RatingInput.styles";
import type { RatingInputProps } from "./RatingInput.types";

const RatingInput = ({
  value,
  onChange,
  maxRating = 5,
  disabled = false,
  size = "md",
  label,
  className,
}: RatingInputProps) => {
  const [hoveredRating, setHoveredRating] = useState<number | null>(null);

  const safeMaxRating = Math.max(1, Math.floor(maxRating));

  const displayedRating = hoveredRating ?? value;

  const iconSizeClass = ratingInputStyles[size];

  return (
    <div className={cn(ratingInputStyles.root, className)}>
      {label && <span className={ratingInputStyles.label}>{label}</span>}

      <div
        className={ratingInputStyles.stars}
        role="radiogroup"
        aria-label={label ?? "Select rating"}
        onMouseLeave={() => setHoveredRating(null)}
      >
        {Array.from({
          length: safeMaxRating,
        }).map((_, index) => {
          const ratingValue = index + 1;

          const isActive = ratingValue <= displayedRating;

          return (
            <button
              key={ratingValue}
              type="button"
              role="radio"
              aria-checked={value === ratingValue}
              aria-label={`${ratingValue} ${
                ratingValue === 1 ? "star" : "stars"
              }`}
              disabled={disabled}
              className={ratingInputStyles.button}
              onMouseEnter={() => setHoveredRating(ratingValue)}
              onFocus={() => setHoveredRating(ratingValue)}
              onBlur={() => setHoveredRating(null)}
              onClick={() => onChange(ratingValue)}
            >
              <Star
                aria-hidden="true"
                className={cn(
                  iconSizeClass,
                  isActive
                    ? ratingInputStyles.active
                    : ratingInputStyles.inactive,
                )}
              />
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default RatingInput;
