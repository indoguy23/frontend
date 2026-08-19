import type { ProductCardData } from "@/components/common/ProductCard";
import type { ProductFiltersValue } from "@/components/common/ProductFilters";

export type ProductSortOption =
  | "featured"
  | "price-low-high"
  | "price-high-low"
  | "rating";

export interface ProductListingProps {
  products: ProductCardData[];

  wishlistIds?: string[];

  onAddToCart?: (product: ProductCardData) => void;

  onToggleWishlist?: (product: ProductCardData) => void;

  onViewDetails?: (product: ProductCardData) => void;

  initialFilters?: Partial<ProductFiltersValue>;

  initialSort?: ProductSortOption;

  pageSize?: number;

  loading?: boolean;

  className?: string;
}
