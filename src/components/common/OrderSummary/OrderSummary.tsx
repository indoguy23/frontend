import Button from "@/components/ui/Button";
import { cn } from "@/utils/cn";

import { orderSummaryStyles } from "./OrderSummary.styles";
import type { OrderSummaryProps } from "./OrderSummary.types";

const OrderSummary = ({
  subtotal,
  discount = 0,
  shipping = 0,
  tax = 0,
  total,
  currency = "INR",
  locale = "en-IN",
  itemCount,
  actionLabel,
  onAction,
  actionDisabled = false,
  actionLoading = false,
  className,
}: OrderSummaryProps) => {
  const formatter = new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  });

  return (
    <aside className={cn(orderSummaryStyles.root, className)}>
      <h2 className={orderSummaryStyles.title}>Order Summary</h2>

      {itemCount !== undefined && (
        <p className={orderSummaryStyles.itemCount}>
          {itemCount} {itemCount === 1 ? "item" : "items"}
        </p>
      )}

      <div className={orderSummaryStyles.details}>
        <div className={orderSummaryStyles.row}>
          <span className={orderSummaryStyles.label}>Subtotal</span>

          <span className={orderSummaryStyles.value}>
            {formatter.format(subtotal)}
          </span>
        </div>

        {discount > 0 && (
          <div className={orderSummaryStyles.row}>
            <span className={orderSummaryStyles.label}>Discount</span>

            <span className={orderSummaryStyles.discount}>
              -{formatter.format(discount)}
            </span>
          </div>
        )}

        <div className={orderSummaryStyles.row}>
          <span className={orderSummaryStyles.label}>Shipping</span>

          <span className={orderSummaryStyles.value}>
            {shipping === 0 ? "Free" : formatter.format(shipping)}
          </span>
        </div>

        {tax > 0 && (
          <div className={orderSummaryStyles.row}>
            <span className={orderSummaryStyles.label}>Tax</span>

            <span className={orderSummaryStyles.value}>
              {formatter.format(tax)}
            </span>
          </div>
        )}
      </div>

      <div className={orderSummaryStyles.divider} />

      <div className={orderSummaryStyles.totalRow}>
        <span className={orderSummaryStyles.totalLabel}>Total</span>

        <span className={orderSummaryStyles.totalValue}>
          {formatter.format(total)}
        </span>
      </div>

      {actionLabel && onAction && (
        <Button
          className={orderSummaryStyles.action}
          disabled={actionDisabled}
          loading={actionLoading}
          onClick={onAction}
        >
          {actionLabel}
        </Button>
      )}
    </aside>
  );
};

export default OrderSummary;
