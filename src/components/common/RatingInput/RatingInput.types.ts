export interface RatingInputProps {
  value: number;

  onChange: (value: number) => void;

  maxRating?: number;

  disabled?: boolean;

  size?: "sm" | "md" | "lg";

  label?: string;

  className?: string;
}
