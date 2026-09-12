import { createContext } from "react";

import type { ProductCardData } from "@/components/common/ProductCard";
import type { WishlistItem } from "../types/wishlist.types";

export interface WishlistContextValue {
  items: WishlistItem[];
  wishlistCount: number;
  isWishlisted: (productId: string) => boolean;
  toggleWishlist: (product: ProductCardData) => void;
  removeFromWishlist: (productId: string) => void;
  clearWishlist: () => void;
}

export const WishlistContext = createContext<WishlistContextValue | undefined>(
  undefined,
);
