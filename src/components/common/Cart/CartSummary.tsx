import Button from "@/components/ui/Button";
import Skeleton from "@/components/ui/Skeleton";
import { cn } from "@/utils/cn";

import { cartStyles } from "./Cart.styles";
import type { CartSummaryProps } from "./Cart.types";

const currencyFormatter = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  maximumFractionDigits: 0,
});

const CartSummary = ({
  subtotal,
  discount = 0,
  shipping = 0,
  tax = 0,
  total,
  itemCount,
  actionLabel = "Proceed to Checkout",
  onAction,
  loading = false,
  className,
}: CartSummaryProps) => {
  if (loading) {
    return (
      <div className={cn(cartStyles.summary, className)}>
        <Skeleton className="h-6 w-32" />

        <div className="mt-5 space-y-4">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
        </div>

        <Skeleton className="mt-6 h-11 w-full" />
      </div>
    );
  }

  return (
    <aside className={cn(cartStyles.summary, className)}>
      <h2 className={cartStyles.summaryTitle}>Order Summary</h2>

      {itemCount !== undefined && (
        <p className="mt-1 text-sm text-muted-foreground">
          {itemCount} {itemCount === 1 ? "item" : "items"}
        </p>
      )}

      <div className={cartStyles.summaryRows}>
        <div className={cartStyles.summaryRow}>
          <span className={cartStyles.summaryLabel}>Subtotal</span>

          <span className={cartStyles.summaryValue}>
            {currencyFormatter.format(subtotal)}
          </span>
        </div>

        {discount > 0 && (
          <div className={cartStyles.summaryRow}>
            <span className={cartStyles.summaryLabel}>Discount</span>

            <span className="font-medium text-success">
              -{currencyFormatter.format(discount)}
            </span>
          </div>
        )}

        <div className={cartStyles.summaryRow}>
          <span className={cartStyles.summaryLabel}>Shipping</span>

          <span className={cartStyles.summaryValue}>
            {shipping === 0 ? "Free" : currencyFormatter.format(shipping)}
          </span>
        </div>

        {tax > 0 && (
          <div className={cartStyles.summaryRow}>
            <span className={cartStyles.summaryLabel}>Tax</span>

            <span className={cartStyles.summaryValue}>
              {currencyFormatter.format(tax)}
            </span>
          </div>
        )}
      </div>

      <div className={cartStyles.totalRow}>
        <span className="font-semibold text-foreground">Total</span>

        <span className="text-xl font-bold text-foreground">
          {currencyFormatter.format(total)}
        </span>
      </div>

      <Button size="lg" className="mt-6 w-full" onClick={onAction}>
        {actionLabel}
      </Button>
    </aside>
  );
};

export default CartSummary;
