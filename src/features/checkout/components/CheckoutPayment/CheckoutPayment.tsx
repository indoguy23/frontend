import type { PaymentMethod } from "../types/checkout.types";
import { PAYMENT_OPTIONS } from "../../data/paymentOptions.data";

interface CheckoutPaymentProps {
  value: PaymentMethod | null;
  onChange: (value: PaymentMethod) => void;
  error?: string;
}

const CheckoutPayment = ({ value, onChange, error }: CheckoutPaymentProps) => {
  return (
    <>
      <section className="rounded-xl bg-card p-4 sm:p-6">
        <div>
          <h2 className="text-lg font-semibold">Payment Method</h2>

          <p className="mt-1 text-sm text-muted-foreground">
            Choose how you would like to pay for your order.
          </p>
        </div>

        <div
          className="mt-6 space-y-3"
          role="radiogroup"
          aria-label="Payment method"
          aria-invalid={Boolean(error)}
        >
          {PAYMENT_OPTIONS.map((option) => {
            const Icon = option.icon;
            const isSelected = value === option.value;

            return (
              <label
                key={option.value}
                className="flex cursor-pointer items-center gap-3 rounded-lg p-4"
              >
                <input
                  type="radio"
                  name="payment-method"
                  value={option.value}
                  checked={isSelected}
                  onChange={() => onChange(option.value)}
                />

                <Icon aria-hidden="true" className="h-5 w-5 shrink-0" />

                <div>
                  <p className="text-sm font-medium">{option.label}</p>

                  <p className="text-xs text-muted-foreground">
                    {option.description}
                  </p>
                </div>
              </label>
            );
          })}
        </div>

        {error && (
          <p role="alert" className="mt-3 text-sm text-destructive">
            {error}
          </p>
        )}
      </section>
    </>
  );
};

export default CheckoutPayment;
