import { Banknote, CreditCard, Smartphone } from "lucide-react";
import type { PaymentMethod } from "../types/checkout.types";

interface CheckoutPaymentProps {
  value: PaymentMethod | null;
  onChange: (value: PaymentMethod) => void;
  error?: string;
}

const CheckoutPayment = ({ value, onChange, error }: CheckoutPaymentProps) => {
  const paymentOptions: {
    value: PaymentMethod;
    title: string;
    description: string;
    icon: typeof Banknote;
  }[] = [
    {
      value: "cash-on-delivery",
      title: "Cash on Delivery",
      description: "Pay when your order is delivered.",
      icon: Banknote,
    },
    {
      value: "upi",
      title: "UPI",
      description: "Pay securely using your preferred UPI app.",
      icon: Smartphone,
    },
    {
      value: "card",
      title: "Credit / Debit Card",
      description: "Pay using your credit or debit card.",
      icon: CreditCard,
    },
  ];

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
          {paymentOptions.map((option) => {
            const Icon = option.icon;

            const isSelected = value === option.value;

            return (
              <label
                key={option.value}
                className={[
                  "flex cursor-pointer items-center gap-4",
                  "rounded-xl border p-4",
                  "transition-colors",
                  "hover:bg-muted/50",
                  isSelected ? "border-primary bg-primary/5" : "border-border",
                ].join(" ")}
              >
                <input
                  type="radio"
                  name="payment-method"
                  value={option.value}
                  checked={isSelected}
                  onChange={() => onChange(option.value)}
                  className="h-4 w-4 accent-primary"
                />

                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-muted">
                  <Icon aria-hidden="true" className="h-5 w-5" />
                </div>

                <div className="min-w-0">
                  <p className="text-sm font-medium">{option.title}</p>

                  <p className="mt-1 text-xs text-muted-foreground">
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
