import type { ProductCardData } from "@/components/common/ProductCard";

export interface WishlistItemProps {
  product: ProductCardData;

  onAddToCart?: (product: ProductCardData) => void;

  onRemove?: (product: ProductCardData) => void;

  onViewDetails?: (product: ProductCardData) => void;

  className?: string;
}
