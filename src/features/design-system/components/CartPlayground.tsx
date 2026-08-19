import { useMemo, useState } from "react";

import { CartItem, CartSummary } from "@/components/common/Cart";
import type { CartItemData } from "@/components/common/Cart";
import { showToast } from "@/components/ui/Toast";

const INITIAL_CART: CartItemData[] = [
  {
    id: "PRD-001",
    name: "Wireless Noise Cancelling Headphones",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
    price: 4999,
    originalPrice: 6999,
    quantity: 1,
    stock: 8,
  },
  {
    id: "PRD-002",
    name: "Mechanical RGB Keyboard",
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3",
    price: 3499,
    quantity: 2,
    stock: 4,
  },
];

const CartPlayground = () => {
  const [items, setItems] = useState(INITIAL_CART);

  const subtotal = useMemo(
    () => items.reduce((total, item) => total + item.price * item.quantity, 0),
    [items],
  );

  const discount = 500;
  const shipping = 0;
  const tax = 0;

  const total = Math.max(0, subtotal - discount + shipping + tax);

  const itemCount = items.reduce((count, item) => count + item.quantity, 0);

  const handleQuantityChange = (item: CartItemData, quantity: number) => {
    setItems((current) =>
      current.map((currentItem) =>
        currentItem.id === item.id
          ? {
              ...currentItem,
              quantity,
            }
          : currentItem,
      ),
    );
  };

  const handleRemove = (item: CartItemData) => {
    setItems((current) =>
      current.filter((currentItem) => currentItem.id !== item.id),
    );

    showToast.info(`${item.name} removed from cart.`);
  };

  return (
    <section className="rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8">
      <div>
        <h2 className="text-2xl font-semibold text-card-foreground">
          Cart Components
        </h2>

        <p className="mt-2 text-muted-foreground">
          Reusable cart items and order summary components.
        </p>
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-[minmax(0,1fr)_340px]">
        <div className="space-y-4">
          {items.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              onQuantityChange={handleQuantityChange}
              onRemove={handleRemove}
            />
          ))}
        </div>

        <CartSummary
          subtotal={subtotal}
          discount={discount}
          shipping={shipping}
          tax={tax}
          total={total}
          itemCount={itemCount}
          onAction={() => showToast.success("Checkout action triggered.")}
        />
      </div>
    </section>
  );
};

export default CartPlayground;
