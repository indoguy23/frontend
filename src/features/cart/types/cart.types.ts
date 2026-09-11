import type { ProductCardData } from "@/components/common/ProductCard";

export interface CartItem {
  product: ProductCardData;
  quantity: number;
}
