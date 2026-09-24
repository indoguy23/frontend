import { useNavigate } from "react-router-dom";

import Button from "@/components/ui/Button";
import EmptyState from "@/components/ui/EmptyState";
import { useCart } from "@/features/cart/hooks/useCart";
import type {
  CheckoutAddressData,
  CheckoutAddressErrors,
  CheckOutTotals,
  PaymentMethod,
} from "../types/checkout.types";
import { useState } from "react";
import { CheckoutAddress } from "../CheckoutAddress";
import { validateCheckoutAddress } from "../../utils/checkoutValidation";
import { CheckoutPayment } from "../CheckoutPayment";
import { CheckoutSummary } from "../CheckoutSummary";

const INITIAL_ADDRESS: CheckoutAddressData = {
  fullName: "",
  phone: "",
  email: "",
  addressLine1: "",
  addressLine2: "",
  city: "",
  state: "",
  postalCode: "",
  country: "India",
};

const CheckoutPage = () => {
  const navigate = useNavigate();

  const { items, subtotal } = useCart();

  const [address, setAddress] = useState<CheckoutAddressData>(INITIAL_ADDRESS);

  const [addressErrors, setAddressErrors] = useState<CheckoutAddressErrors>({});

  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod | null>(
    null,
  );

  const [paymentError, setPaymentError] = useState<string>("");

  const shipping = 0;
  const discount = 0;

  const totals: CheckOutTotals = {
    subtotal,
    shipping,
    discount,
    total: Math.max(subtotal + shipping - discount, 0),
  };

  const handleContinue = () => {
    const errors = validateCheckoutAddress(address);

    setAddressErrors(errors);

    let hasError = Object.keys(errors).length > 0;

    if (!paymentMethod) {
      setPaymentError("Please select a payment method.");
      hasError = true;
    } else {
      setPaymentError("");
    }

    if (hasError) {
      return;
    }

    // Checkout information is valid.
    // Actual order creation/payment integration comes later.
  };

  if (items.length === 0) {
    return (
      <main className="min-h-screen">
        <div className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <EmptyState
            title="Your cart is empty"
            description="Add some products to your cart before proceeding to checkout."
            primaryAction={
              <Button type="button" onClick={() => navigate("/products")}>
                Browse Products
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
        <div className="mb-6">
          <h1 className="text-2xl font-semibold sm:text-3xl">Checkout</h1>

          <p className="mt-1 text-sm text-muted-foreground">
            Complete your delivery and payment details.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_380px]">
          <div className="space-y-6">
            <CheckoutAddress
              value={address}
              errors={addressErrors}
              onChange={setAddress}
            />

            <CheckoutPayment
              value={paymentMethod}
              error={paymentError}
              onChange={(method) => {
                setPaymentMethod(method);
                setPaymentError("");
              }}
            />
          </div>

          <CheckoutSummary
            items={items}
            totals={totals}
            onContinue={handleContinue}
          />
        </div>
      </div>
    </main>
  );
};

export default CheckoutPage;
