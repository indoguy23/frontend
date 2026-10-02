import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Button from "@/components/ui/Button";
import EmptyState from "@/components/ui/EmptyState";
import { useCart } from "@/features/cart/hooks/useCart";

import type {
  CheckoutAddressData,
  CheckoutAddressErrors,
  CheckoutTotals,
  PaymentMethod,
} from "../types/checkout.types";
import { validateCheckoutAddress } from "../../utils/checkoutValidation";
import { createOrder } from "../../services/checkout.service";
import { CheckoutAddress } from "../CheckoutAddress";
import { CheckoutPayment } from "../CheckoutPayment";
import { CheckoutSummary } from "../CheckoutSummary";
import { CheckoutReview } from "../CheckoutReview";

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

type CheckoutStep = "details" | "review";

const CheckoutPage = () => {
  const navigate = useNavigate();

  const { items, subtotal, clearCart } = useCart();

  const [address, setAddress] = useState<CheckoutAddressData>(INITIAL_ADDRESS);

  const [addressErrors, setAddressErrors] = useState<CheckoutAddressErrors>({});

  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod | null>(
    null,
  );

  const [step, setStep] = useState<CheckoutStep>("details");

  const [paymentError, setPaymentError] = useState<string>("");

  const [isPlacingOrder, setIsPlacingOrder] = useState(false);

  const [orderError, setOrderError] = useState("");

  const shipping = 0;
  const discount = 0;

  const totals: CheckoutTotals = {
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

    setStep("review");
  };

  const handlePlaceOrder = async () => {
    if (!paymentMethod || isPlacingOrder) {
      return;
    }

    setIsPlacingOrder(true);
    setOrderError("");

    const payload = {
      items: items.map((item) => ({
        productId: item.product.id,
        quantity: item.quantity,
      })),
      address,
      paymentMethod,
    };

    try {
      const response = await createOrder(payload);

      clearCart();

      navigate("/orders/success", {
        state: {
          order: response,
        },
      });
    } catch (error) {
      console.error("Failed to place order:", error);

      setOrderError(
        error instanceof Error
          ? error.message
          : "Something went wrong while placing your order.",
      );
    } finally {
      setIsPlacingOrder(false);
    }
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

        {step === "details" ? (
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
        ) : (
          <CheckoutReview
            address={address}
            paymentMethod={paymentMethod!}
            totals={totals}
            isPlacingOrder={isPlacingOrder}
            error={orderError}
            onBack={() => setStep("details")}
            onPlaceOrder={handlePlaceOrder}
          />
        )}
      </div>
    </main>
  );
};

export default CheckoutPage;
