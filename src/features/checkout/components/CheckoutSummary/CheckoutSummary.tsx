import PriceDisplay from "@/components/common/PriceDisplay";
import Button from "@/components/ui/Button";

import type { CartItem } from "@/features/cart/types/cart.types";
import type { CheckoutTotals } from "../types/checkout.types";

interface CheckoutSummaryProps {
  items: CartItem[];
  totals: CheckoutTotals;
  onContinue: () => void;
}

const CheckoutSummary = ({
  items,
  totals,
  onContinue,
}: CheckoutSummaryProps) => {
  return (
    <>
      <aside>
        <div className="rounded-xl border bg-card p-4 sm:p-6 lg:sticky lg:top-6">
          <h2 className="text-lg font-semibold">Order Summary</h2>

          <div className="mt-5 space-y-4">
            {items.map(({ product, quantity }) => (
              <div key={product.id} className="flex gap-3">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-16 w-16 shrink-0 rounded-lg border object-contain p-1"
                />

                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-medium">{product.name}</p>

                  <p className="mt-1 text-xs text-muted-foreground">
                    Qty: {quantity}
                  </p>

                  <div className="mt-1 text-xs text-muted-foreground">
                    <PriceDisplay
                      price={product.price}
                      showDiscount={false}
                      size="sm"
                    />
                    <span> each</span>
                  </div>
                </div>

                <div className="shrink-0 text-sm font-medium">
                  <PriceDisplay
                    price={product.price * quantity}
                    showDiscount={false}
                    size="sm"
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="my-5 border-t" />

          <div className="space-y-3">
            <div className="flex items-center justify-between gap-4">
              <span className="text-sm text-muted-foreground">Subtotal</span>

              <PriceDisplay
                price={totals.subtotal}
                showDiscount={false}
                size="sm"
              />
            </div>

            <div className="flex items-center justify-between gap-4">
              <span className="text-sm text-muted-foreground">Shipping</span>

              {totals.shipping === 0 ? (
                <span className="text-sm font-medium">Free</span>
              ) : (
                <PriceDisplay
                  price={totals.shipping}
                  showDiscount={false}
                  size="sm"
                />
              )}
            </div>

            {totals.discount > 0 && (
              <div className="flex items-center justify-between gap-4">
                <span className="text-sm text-muted-foreground">Discount</span>

                <span className="text-sm font-medium">
                  -
                  <PriceDisplay
                    price={totals.discount}
                    showDiscount={false}
                    size="sm"
                  />
                </span>
              </div>
            )}
          </div>

          <div className="my-5 border-t" />

          <div className="flex items-center justify-between gap-4">
            <span className="font-semibold">Total</span>

            <PriceDisplay price={totals.total} showDiscount={false} size="lg" />
          </div>

          <Button type="button" className="mt-6 w-full" onClick={onContinue}>
            Continue
          </Button>

          <p className="mt-3 text-center text-xs text-muted-foreground">
            Review your delivery and payment details before continuing.
          </p>
        </div>
      </aside>
    </>
  );
};

export default CheckoutSummary;
