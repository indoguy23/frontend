export interface SellerCardData {
  id: string;

  name: string;

  slug: string;

  logo?: string;

  description?: string;

  rating?: number;

  reviewCount?: number;

  productCount?: number;

  location?: string;

  verified?: boolean;

  featured?: boolean;
}

export interface SellerCardProps {
  seller: SellerCardData;

  onViewStore?: (seller: SellerCardData) => void;

  className?: string;
}
