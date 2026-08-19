import type { NotificationItemData } from "@/components/common/NotificationItem";

export const NOTIFICATION_ITEM_DATA: NotificationItemData[] = [
  {
    id: "notification-1",
    title: "Order shipped",
    description: "Your order MH-2026-00124 has been shipped.",
    timestamp: "5 min ago",
    type: "success",
    read: false,
  },
  {
    id: "notification-2",
    title: "Low stock warning",
    description: "Wireless Headphones has only 3 units remaining.",
    timestamp: "1 hour ago",
    type: "warning",
    read: false,
  },
  {
    id: "notification-3",
    title: "Payment received",
    description: "Payment for order MH-2026-00118 was received successfully.",
    timestamp: "Yesterday",
    type: "info",
    read: true,
  },
  {
    id: "notification-4",
    title: "Payment failed",
    description: "A payment attempt could not be completed.",
    timestamp: "2 days ago",
    type: "error",
    read: true,
  },
];
