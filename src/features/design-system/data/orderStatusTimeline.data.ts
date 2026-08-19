import type { OrderStatusStep } from "@/components/common/OrderStatusTimeline";

export const ORDER_STATUS_TIMELINE_DATA: OrderStatusStep[] = [
  {
    id: "placed",
    title: "Order Placed",
    description: "Your order has been successfully placed.",
    date: "13 Aug 2026, 10:15 AM",
    state: "completed",
  },
  {
    id: "confirmed",
    title: "Order Confirmed",
    description: "The seller has confirmed your order.",
    date: "13 Aug 2026, 10:42 AM",
    state: "completed",
  },
  {
    id: "shipped",
    title: "Shipped",
    description: "Your order is on the way.",
    date: "13 Aug 2026, 4:20 PM",
    state: "current",
  },
  {
    id: "out-for-delivery",
    title: "Out for Delivery",
    description: "Your package will be delivered soon.",
    state: "upcoming",
  },
  {
    id: "delivered",
    title: "Delivered",
    description: "The order has been delivered.",
    state: "upcoming",
  },
];
