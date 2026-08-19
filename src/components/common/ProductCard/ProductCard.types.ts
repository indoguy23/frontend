export interface ProductCardData {
  id: string;
  name: string;
  slug: string;
  image: string;
  category: string;

  price: number;
  originalPrice?: number;

  rating?: number;
  reviewCount?: number;

  stock: number;

  featured?: boolean;
}

export interface ProductCardProps {
  product: ProductCardData;

  onAddToCart?: (product: ProductCardData) => void;

  onToggleWishlist?: (product: ProductCardData) => void;

  onViewDetails?: (product: ProductCardData) => void;

  isWishlisted?: boolean;

  loading?: boolean;

  className?: string;
}
