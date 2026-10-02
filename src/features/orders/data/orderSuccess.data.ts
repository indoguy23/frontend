import {
  CheckCircle2,
  ShoppingBag,
  ClipboardList,
  type LucideIcon,
} from "lucide-react";
import type { ButtonVariant } from "@/components/ui/Button/Button.types";

export interface OrderSuccessContent {
  title: string;
  description: string;
  orderIdLabel: string;
  statusLabel: string;
  totalLabel: string;
}

interface OrderSuccessAction {
  id: string;
  label: string;
  icon: LucideIcon;
  variant: ButtonVariant;
  action: "continue-shopping" | "view-orders";
}

export const ORDER_SUCCESS_CONTENT: OrderSuccessContent = {
  title: "Order Placed Successfully",
  description:
    "Thank you for your order. Your order has been received successfully.",
  orderIdLabel: "Order ID",
  statusLabel: "Status",
  totalLabel: "Total",
};

export const ORDER_SUCCESS_ICONS = {
  success: CheckCircle2,
};

export const ORDER_SUCCESS_ACTIONS: OrderSuccessAction[] = [
  {
    id: "continue-shopping",
    label: "Continue Shopping",
    icon: ShoppingBag,
    variant: "primary",
    action: "continue-shopping",
  },
  {
    id: "view-orders",
    label: "View Orders",
    icon: ClipboardList,
    variant: "outline",
    action: "view-orders",
  },
];
