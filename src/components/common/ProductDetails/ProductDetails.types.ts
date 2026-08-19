import type { ProductCardData } from "@/components/common/ProductCard";
import type { ProductGalleryImage } from "@/components/common/ProductImageGallery";

export interface ProductDetailsData extends ProductCardData {
  description?: string;

  images: ProductGalleryImage[];

  maxQuantity?: number;
}

export interface ProductDetailsProps {
  product: ProductDetailsData;

  quantity: number;

  onQuantityChange: (quantity: number) => void;

  onAddToCart?: (product: ProductDetailsData, quantity: number) => void;

  onToggleWishlist?: (product: ProductDetailsData) => void;

  isWishlisted?: boolean;

  loading?: boolean;

  className?: string;
}
