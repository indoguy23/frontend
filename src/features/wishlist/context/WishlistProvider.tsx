import { useCallback, useMemo, useState, type ReactNode } from "react";

import type { ProductCardData } from "@/components/common/ProductCard";

import { WishlistContext } from "./WishlistContext";
import type { WishlistItem } from "../types/wishlist.types";

interface WishlistProviderProps {
  children: ReactNode;
}

export const WishlistProvider = ({ children }: WishlistProviderProps) => {
  const [items, setItems] = useState<WishlistItem[]>([]);

  const toggleWishlist = (product: ProductCardData) => {
    setItems((currentItems) => {
      const exists = currentItems.some(
        (item) => item.product.id === product.id,
      );

      if (exists) {
        return currentItems.filter((item) => item.product.id !== product.id);
      }

      return [...currentItems, { product }];
    });
  };

  const removeFromWishlist = (productId: string) => {
    setItems((currentItems) =>
      currentItems.filter((item) => item.product.id !== productId),
    );
  };

  const clearWishlist = () => {
    setItems([]);
  };

  const isWishlisted = useCallback(
    (productId: string) => {
      return items.some((item) => item.product.id === productId);
    },
    [items],
  );
  const wishlistCount = items.length;

  const value = useMemo(
    () => ({
      items,
      wishlistCount,
      isWishlisted,
      toggleWishlist,
      removeFromWishlist,
      clearWishlist,
    }),
    [items, wishlistCount, isWishlisted],
  );

  return (
    <WishlistContext.Provider value={value}>
      {children}
    </WishlistContext.Provider>
  );
};
