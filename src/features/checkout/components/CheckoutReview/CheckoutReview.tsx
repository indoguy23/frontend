import { MapPin, Pencil, Wallet } from "lucide-react";

import Button from "@/components/ui/Button";
import type {
  CheckoutAddressData,
  CheckoutTotals,
  PaymentMethod,
} from "../types/checkout.types";

interface CheckoutReviewProps {
  address: CheckoutAddressData;
  paymentMethod: PaymentMethod;
  totals: CheckoutTotals;
  onBack: () => void;
  onPlaceOrder: () => void;
}

const PAYMENT_METHOD_LABELS: Record<PaymentMethod, string> = {
  "cash-on-delivery": "Cash on Delivery",
  upi: "UPI",
  card: "Credit / Debit Card",
};

const formatPrice = (value: number) => {
  return `₹${value.toLocaleString("en-IN")}`;
};

const CheckoutReview = ({
  address,
  paymentMethod,
  totals,
  onBack,
  onPlaceOrder,
}: CheckoutReviewProps) => {
  return (
    <>
      <div className="space-y-6">
        <section className="rounded-xl bg-card p-4 sm:p-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="flex items-center gap-2">
                <MapPin aria-hidden="true" className="h-5 w-5" />

                <h2 className="text-lg font-semibold">Delivery Address</h2>
              </div>

              <div className="mt-4 text-sm leading-6 text-muted-foreground">
                <p className="font-medium text-foreground">
                  {address.fullName}
                </p>

                <p>{address.phone}</p>

                <p>{address.email}</p>

                <p className="mt-2">{address.addressLine1}</p>

                {address.addressLine2 && <p>{address.addressLine2}</p>}

                <p>
                  {address.city}, {address.state} {address.postalCode}
                </p>

                <p>{address.country}</p>
              </div>
            </div>

            <Button
              type="button"
              variant="ghost"
              size="icon"
              aria-label="Edit delivery address"
              onClick={onBack}
            >
              <Pencil aria-hidden="true" className="h-4 w-4" />
            </Button>
          </div>
        </section>

        <section className="rounded-xl bg-card p-4 sm:p-6">
          <div className="flex items-center gap-2">
            <Wallet aria-hidden="true" className="h-5 w-5" />

            <h2 className="text-lg font-semibold">Payment Method</h2>
          </div>

          <div className="mt-4 flex items-center justify-between gap-4">
            <div>
              <p className="text-sm font-medium">
                {PAYMENT_METHOD_LABELS[paymentMethod]}
              </p>

              <p className="mt-1 text-xs text-muted-foreground">
                Selected payment method
              </p>
            </div>

            <Button
              type="button"
              variant="ghost"
              size="icon"
              aria-label="Edit payment method"
              onClick={onBack}
            >
              <Pencil aria-hidden="true" className="h-4 w-4" />
            </Button>
          </div>
        </section>

        <section className="rounded-xl bg-card p-4 sm:p-6">
          <h2 className="text-lg font-semibold">Order Total</h2>

          <div className="mt-4 space-y-3">
            <div className="flex justify-between gap-4 text-sm">
              <span className="text-muted-foreground">Subtotal</span>

              <span>{formatPrice(totals.subtotal)}</span>
            </div>

            <div className="flex justify-between gap-4 text-sm">
              <span className="text-muted-foreground">Shipping</span>

              <span>
                {totals.shipping === 0 ? "Free" : formatPrice(totals.shipping)}
              </span>
            </div>

            {totals.discount > 0 && (
              <div className="flex justify-between gap-4 text-sm">
                <span className="text-muted-foreground">Discount</span>

                <span>-{formatPrice(totals.discount)}</span>
              </div>
            )}

            <div className="border-t pt-3">
              <div className="flex justify-between gap-4">
                <span className="font-semibold">Total</span>

                <span className="text-lg font-semibold">
                  {formatPrice(totals.total)}
                </span>
              </div>
            </div>
          </div>
        </section>

        <div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
          <Button type="button" variant="outline" onClick={onBack}>
            Back
          </Button>

          <Button type="button" onClick={onPlaceOrder}>
            Place Order
          </Button>
        </div>
      </div>
    </>
  );
};

export default CheckoutReview;
