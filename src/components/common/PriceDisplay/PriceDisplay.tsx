import Badge from "@/components/ui/Badge";
import { cn } from "@/utils/cn";

import { priceDisplayStyles } from "./PriceDisplay.styles";
import type { PriceDisplayProps } from "./PriceDisplay.types";

const calculateDiscount = (price: number, originalPrice?: number) => {
  if (!originalPrice || originalPrice <= price) {
    return null;
  }

  return Math.round(((originalPrice - price) / originalPrice) * 100);
};

const PriceDisplay = ({
  price,
  originalPrice,
  currency = "INR",
  locale = "en-IN",
  showDiscount = true,
  size = "md",
  className,
}: PriceDisplayProps) => {
  const formatter = new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  });

  const discount = calculateDiscount(price, originalPrice);

  return (
    <div className={cn(priceDisplayStyles.root, className)}>
      <span
        className={cn(priceDisplayStyles.current, priceDisplayStyles[size])}
      >
        {formatter.format(price)}
      </span>

      {originalPrice && originalPrice > price && (
        <span className={priceDisplayStyles.original}>
          {formatter.format(originalPrice)}
        </span>
      )}

      {showDiscount && discount !== null && (
        <Badge variant="destructive">{discount}% Off</Badge>
      )}
    </div>
  );
};

export default PriceDisplay;
