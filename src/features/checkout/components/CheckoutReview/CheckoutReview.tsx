import { MapPin, Pencil, Wallet } from "lucide-react";

import PriceDisplay from "@/components/common/PriceDisplay";
import Button from "@/components/ui/Button";

import { PAYMENT_OPTIONS } from "../../data/paymentOptions.data";
import type {
  CheckoutAddressData,
  CheckoutTotals,
  PaymentMethod,
} from "../types/checkout.types";

interface CheckoutReviewProps {
  address: CheckoutAddressData;
  paymentMethod: PaymentMethod;
  totals: CheckoutTotals;
  isPlacingOrder?: boolean;
  error?: string;
  onBack: () => void;
  onPlaceOrder: () => void;
}

const CheckoutReview = ({
  address,
  paymentMethod,
  totals,
  isPlacingOrder = false,
  error,
  onBack,
  onPlaceOrder,
}: CheckoutReviewProps) => {
  const selectedPaymentMethod = PAYMENT_OPTIONS.find(
    (option) => option.value === paymentMethod,
  );

  const PaymentIcon = selectedPaymentMethod?.icon ?? Wallet;

  return (
    <>
      <div className="space-y-6">
        {/* Delivery Address */}
        <section className="rounded-xl  bg-card p-4 sm:p-6">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5" />
              <h2 className="text-lg font-semibold">Delivery Address</h2>
            </div>

            <Button type="button" variant="ghost" size="sm" onClick={onBack}>
              <Pencil className="mr-2 h-4 w-4" />
            </Button>
          </div>

          <div className="mt-4 text-sm">
            <p className="font-medium">{address.fullName}</p>
            <p className="mt-1">{address.phone}</p>

            <p className="mt-3 text-muted-foreground">
              {address.addressLine1}
              {address.addressLine2 && `, ${address.addressLine2}`}
              <br />
              {address.city}, {address.state} - {address.postalCode}
              <br />
              {address.country}
            </p>
          </div>
        </section>

        {/* Payment Method */}
        <section className="rounded-xl  bg-card p-4 sm:p-6">
          <div className="flex items-center gap-2">
            <PaymentIcon className="h-5 w-5" />
            <h2 className="text-lg font-semibold">Payment Method</h2>
          </div>

          <p className="mt-3 text-sm font-medium">
            {selectedPaymentMethod?.label ?? paymentMethod}
          </p>

          {selectedPaymentMethod?.description && (
            <p className="mt-1 text-sm text-muted-foreground">
              {selectedPaymentMethod.description}
            </p>
          )}
        </section>

        {/* Order Total */}
        <section className="rounded-xl  bg-card p-4 sm:p-6">
          <div className="flex items-center justify-between gap-4">
            <span className="font-semibold">Order Total</span>

            <PriceDisplay price={totals.total} showDiscount={false} size="lg" />
          </div>
        </section>

        {/* Order Error */}
        {error && (
          <div
            role="alert"
            className="rounded-lg border-destructive/30 bg-destructive/10 p-3 text-sm text-destructive"
          >
            {error}
          </div>
        )}

        {/* Actions */}
        <div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
          <Button
            type="button"
            variant="outline"
            onClick={onBack}
            disabled={isPlacingOrder}
          >
            Back
          </Button>

          <Button
            type="button"
            onClick={onPlaceOrder}
            disabled={isPlacingOrder}
          >
            {isPlacingOrder ? "Placing Order..." : "Place Order"}
          </Button>
        </div>
      </div>
    </>
  );
};

export default CheckoutReview;
