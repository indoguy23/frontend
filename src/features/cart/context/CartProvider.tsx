import { useMemo, useState, type ReactNode } from "react";

import type { ProductCardData } from "@/components/common/ProductCard";

import type { CartItem } from "../types/cart.types";
import { CartContext } from "./CartContext";

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider = ({ children }: CartProviderProps) => {
  const [items, setItems] = useState<CartItem[]>([]);

  const addToCart = (product: ProductCardData, quantity = 1) => {
    if (product.stock <= 0) {
      return;
    }

    setItems((currentItems) => {
      const existingItem = currentItems.find(
        (item) => item.product.id === product.id,
      );

      if (existingItem) {
        return currentItems.map((item) => {
          if (item.product.id !== product.id) {
            return item;
          }

          return {
            ...item,
            quantity: Math.min(item.quantity + quantity, product.stock),
          };
        });
      }

      return [
        ...currentItems,
        {
          product,
          quantity: Math.min(quantity, product.stock),
        },
      ];
    });
  };

  const increaseQuantity = (productId: string) => {
    setItems((currentItems) =>
      currentItems.map((item) => {
        if (item.product.id !== productId) {
          return item;
        }

        return {
          ...item,
          quantity: Math.min(item.quantity + 1, item.product.stock),
        };
      }),
    );
  };

  const decreaseQuantity = (productId: string) => {
    setItems((currentItems) =>
      currentItems.map((item) => {
        if (item.product.id !== productId) {
          return item;
        }

        return {
          ...item,
          quantity: Math.max(1, item.quantity - 1),
        };
      }),
    );
  };

  const removeFromCart = (productId: string) => {
    setItems((currentItems) =>
      currentItems.filter((item) => item.product.id !== productId),
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  const cartCount = useMemo(
    () => items.reduce((total, item) => total + item.quantity, 0),
    [items],
  );

  const subtotal = useMemo(
    () =>
      items.reduce(
        (total, item) => total + item.product.price * item.quantity,
        0,
      ),
    [items],
  );

  const value = useMemo(
    () => ({
      items,
      cartCount,
      subtotal,
      addToCart,
      increaseQuantity,
      decreaseQuantity,
      removeFromCart,
      clearCart,
    }),
    [items, cartCount, subtotal],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
