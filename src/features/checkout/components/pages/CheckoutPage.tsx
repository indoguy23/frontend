import { useNavigate } from "react-router-dom";

import Button from "@/components/ui/Button";
import EmptyState from "@/components/ui/EmptyState";
import { useCart } from "@/features/cart/hooks/useCart";
import type {
  CheckoutAddressData,
  CheckoutAddressErrors,
} from "../types/checkout.types";
import { useState } from "react";
import { CheckoutAddress } from "../CheckoutAddress";
import { validateCheckoutAddress } from "../../utils/checkoutValidation";

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

  const handleContinue = () => {
    const errors = validateCheckoutAddress(address);

    setAddressErrors(errors);

    if (Object.keys(errors).length > 0) {
      return;
    }

    // Address is valid.
    // Payment/order logic will be connected next.
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

            <section className="rounded-xl bg-card p-4 sm:p-6">
              <h2 className="text-lg font-semibold">Payment Method</h2>

              <p className="mt-1 text-sm text-muted-foreground">
                Payment options will be added here.
              </p>
            </section>
          </div>

          <aside>
            <div className="rounded-xl bg-card p-4 sm:p-6 lg:sticky lg:top-6">
              <h2 className="text-lg font-semibold">Order Summary</h2>

              <div className="mt-5 space-y-4">
                {items.map(({ product, quantity }) => (
                  <div key={product.id} className="flex gap-3">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-16 w-16 rounded-lg border object-contain p-1"
                    />

                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-medium">
                        {product.name}
                      </p>

                      <p className="mt-1 text-xs text-muted-foreground">
                        Qty: {quantity}
                      </p>
                    </div>

                    <p className="text-sm font-medium">
                      ₹{(product.price * quantity).toLocaleString("en-IN")}
                    </p>
                  </div>
                ))}
              </div>

              <div className="my-5 border-t" />

              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Subtotal</span>

                <span className="font-medium">
                  ₹{subtotal.toLocaleString("en-IN")}
                </span>
              </div>

              <div className="mt-3 flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Shipping</span>

                <span className="text-sm">Calculated later</span>
              </div>

              <div className="my-5 border-t" />

              <div className="flex items-center justify-between">
                <span className="font-semibold">Total</span>

                <span className="text-lg font-semibold">
                  ₹{subtotal.toLocaleString("en-IN")}
                </span>
              </div>

              <Button
                type="button"
                className="mt-6 w-full cursor-pointer"
                onClick={handleContinue}
              >
                Continue
              </Button>

              <p className="mt-3 text-center text-xs text-muted-foreground">
                Complete your delivery and payment details before placing the
                order.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
};

export default CheckoutPage;
