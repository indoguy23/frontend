import type { RadioOption } from "@/components/ui/form/RadioGroup";

export const PAYMENT_METHOD_OPTIONS: RadioOption[] = [
  {
    label: "Credit or Debit Card",
    value: "card",
    description: "Pay securely using Visa, Mastercard or RuPay.",
  },
  {
    label: "UPI",
    value: "upi",
    description: "Pay using any supported UPI application.",
  },
  {
    label: "Cash on Delivery",
    value: "cod",
    description: "Pay when your order is delivered.",
  },
];

export const DELIVERY_OPTIONS: RadioOption[] = [
  {
    label: "Standard Delivery",
    value: "standard",
    description: "Delivery within 4–6 business days.",
  },
  {
    label: "Express Delivery",
    value: "express",
    description: "Delivery within 1–2 business days.",
  },
  {
    label: "Same-Day Delivery",
    value: "same-day",
    description: "Available only for eligible locations.",
    disabled: true,
  },
];

export const USER_ROLE_OPTIONS: RadioOption[] = [
  {
    label: "Customer",
    value: "customer",
  },
  {
    label: "Vendor",
    value: "vendor",
  },
];
