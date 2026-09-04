import type { ProductCardData } from "@/components/common/ProductCard";

export interface ProductFiltersState {
  categories: string[];
  minPrice: string;
  maxPrice: string;
  rating: number | null;
  availability: string[];
}

export interface ProductSpecification {
  label: string;
  value: string;
}

export interface ProductSeller {
  id: string;
  name: string;
  slug: string;
  rating?: number;
  verified?: boolean;
  location?: string;
}

export interface ProductDetailsData extends ProductCardData {
  images: string[];
  description: string;
  specifications: ProductSpecification[];
  seller: ProductSeller;
}
