export interface PriceDisplayProps {
  price: number;

  originalPrice?: number;

  currency?: string;

  locale?: string;

  showDiscount?: boolean;

  size?: "sm" | "md" | "lg";

  className?: string;
}
