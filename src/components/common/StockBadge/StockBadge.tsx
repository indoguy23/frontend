import Badge from "@/components/ui/Badge";
import { cn } from "@/utils/cn";

import type { StockBadgeProps } from "./StockBadge.types";

const StockBadge = ({
  stock,
  lowStockThreshold = 5,
  showQuantity = true,
  className,
}: StockBadgeProps) => {
  if (stock <= 0) {
    return (
      <Badge variant="destructive" className={cn(className)}>
        Out of Stock
      </Badge>
    );
  }

  if (stock <= lowStockThreshold) {
    return (
      <Badge variant="warning" className={cn(className)}>
        {showQuantity ? `Only ${stock} left` : "Low Stock"}
      </Badge>
    );
  }

  return (
    <Badge variant="success" className={cn(className)}>
      {showQuantity ? `${stock} in stock` : "In Stock"}
    </Badge>
  );
};

export default StockBadge;
