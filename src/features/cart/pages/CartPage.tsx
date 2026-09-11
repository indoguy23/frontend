import { Minus, Plus, ShoppingBag, Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

import Button from "@/components/ui/Button";
import EmptyState from "@/components/ui/EmptyState";

import { useCart } from "../hooks/useCart";

const CartPage = () => {
  const navigate = useNavigate();

  const {
    items,
    subtotal,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    clearCart,
  } = useCart();

  if (items.length === 0) {
    return (
      <main className="min-h-screen">
        <div className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <EmptyState
            title="Your cart is empty"
            description="Add some products to your cart and they will appear here."
            primaryAction={
              <Button type="button" onClick={() => navigate("/products")}>
                Continue Shopping
              </Button>
            }
          />
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen">
      <div className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-semibold sm:text-3xl">
              Shopping Cart
            </h1>

            <p className="mt-1 text-sm text-muted-foreground">
              {items.length} {items.length === 1 ? "product" : "products"} in
              your cart
            </p>
          </div>

          <Button type="button" variant="outline" onClick={clearCart}>
            Clear Cart
          </Button>
        </div>

        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_360px]">
          {/* Cart items */}
          <div className="space-y-4">
            {items.map(({ product, quantity }) => (
              <article
                key={product.id}
                className="rounded-2xl border border-border bg-card p-4 sm:p-5"
              >
                <div className="flex flex-col gap-4 sm:flex-row">
                  <button
                    type="button"
                    onClick={() => navigate(`/products/${product.slug}`)}
                    className="shrink-0 overflow-hidden rounded-xl bg-muted"
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-32 w-full object-contain p-2 sm:h-28 sm:w-28"
                    />
                  </button>

                  <div className="flex min-w-0 flex-1 flex-col">
                    <div className="flex items-start justify-between gap-4">
                      <div className="min-w-0">
                        <p className="text-sm text-muted-foreground">
                          {product.category}
                        </p>

                        <button
                          type="button"
                          onClick={() => navigate(`/products/${product.slug}`)}
                          className="mt-1 text-left"
                        >
                          <h2 className="line-clamp-2 font-semibold transition-colors hover:text-primary">
                            {product.name}
                          </h2>
                        </button>
                      </div>

                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => removeFromCart(product.id)}
                        aria-label={`Remove ${product.name} from cart`}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>

                    <div className="mt-4 flex flex-wrap items-end justify-between gap-4">
                      <div>
                        <p className="text-sm text-muted-foreground">Price</p>

                        <p className="mt-1 font-semibold">
                          ₹{product.price.toLocaleString("en-IN")}
                        </p>
                      </div>

                      <div>
                        <p className="mb-2 text-sm text-muted-foreground">
                          Quantity
                        </p>

                        <div className="flex items-center overflow-hidden rounded-lg border border-border">
                          <button
                            type="button"
                            className="flex h-9 w-9 items-center justify-center transition-colors hover:bg-muted disabled:cursor-not-allowed disabled:opacity-50"
                            disabled={quantity <= 1}
                            onClick={() => decreaseQuantity(product.id)}
                            aria-label={`Decrease quantity of ${product.name}`}
                          >
                            <Minus className="h-4 w-4" />
                          </button>

                          <span className="flex h-9 min-w-11 items-center justify-center border-x border-border px-3 text-sm font-medium">
                            {quantity}
                          </span>

                          <button
                            type="button"
                            className="flex h-9 w-9 items-center justify-center transition-colors hover:bg-muted disabled:cursor-not-allowed disabled:opacity-50"
                            disabled={quantity >= product.stock}
                            onClick={() => increaseQuantity(product.id)}
                            aria-label={`Increase quantity of ${product.name}`}
                          >
                            <Plus className="h-4 w-4" />
                          </button>
                        </div>
                      </div>

                      <div className="text-right">
                        <p className="text-sm text-muted-foreground">Total</p>

                        <p className="mt-1 font-semibold">
                          ₹{(product.price * quantity).toLocaleString("en-IN")}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Order summary */}
          <aside className="h-fit rounded-2xl border border-border bg-card p-5 sm:p-6">
            <div className="flex items-center gap-2">
              <ShoppingBag className="h-5 w-5" />

              <h2 className="text-lg font-semibold">Order Summary</h2>
            </div>

            <div className="mt-6 space-y-4">
              <div className="flex items-center justify-between gap-4 text-sm">
                <span className="text-muted-foreground">Subtotal</span>

                <span className="font-medium">
                  ₹{subtotal.toLocaleString("en-IN")}
                </span>
              </div>

              <div className="flex items-center justify-between gap-4 text-sm">
                <span className="text-muted-foreground">Shipping</span>

                <span className="font-medium">Calculated at checkout</span>
              </div>
            </div>

            <div className="my-5 border-t border-border" />

            <div className="flex items-center justify-between gap-4">
              <span className="font-semibold">Total</span>

              <span className="text-xl font-semibold">
                ₹{subtotal.toLocaleString("en-IN")}
              </span>
            </div>

            <Button
              type="button"
              className="mt-6 w-full"
              onClick={() => {
                // Checkout flow will be added later.
              }}
            >
              Proceed to Checkout
            </Button>

            <Button
              type="button"
              variant="outline"
              className="mt-3 w-full"
              onClick={() => navigate("/products")}
            >
              Continue Shopping
            </Button>
          </aside>
        </div>
      </div>
    </main>
  );
};

export default CartPage;
