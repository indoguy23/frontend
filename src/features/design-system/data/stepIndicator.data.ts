import type { StepIndicatorItem } from "@/components/common/StepIndicator";

export const CHECKOUT_STEPS: StepIndicatorItem[] = [
  {
    id: "cart",
    label: "Cart",
    description: "Review your items",
    state: "completed",
  },
  {
    id: "address",
    label: "Address",
    description: "Choose delivery address",
    state: "completed",
  },
  {
    id: "payment",
    label: "Payment",
    description: "Select payment method",
    state: "current",
  },
  {
    id: "review",
    label: "Review",
    description: "Confirm your order",
    state: "upcoming",
  },
];

export const VENDOR_ONBOARDING_STEPS: StepIndicatorItem[] = [
  {
    id: "business",
    label: "Business Details",
    state: "completed",
  },
  {
    id: "documents",
    label: "Documents",
    state: "current",
  },
  {
    id: "bank",
    label: "Bank Details",
    state: "upcoming",
  },
  {
    id: "review",
    label: "Review",
    state: "upcoming",
  },
];
