import { createContext } from "react";

import type { ProductCardData } from "@/components/common/ProductCard";
import type { CartItem } from "../types/cart.types";

export interface CartContextValue {
  items: CartItem[];
  cartCount: number;
  subtotal: number;

  addToCart: (product: ProductCardData, quantity?: number) => void;

  increaseQuantity: (productId: string) => void;
  decreaseQuantity: (productId: string) => void;
  removeFromCart: (productId: string) => void;
  clearCart: () => void;
}

export const CartContext = createContext<CartContextValue | undefined>(
  undefined,
);
