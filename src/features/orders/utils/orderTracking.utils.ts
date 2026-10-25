import type { OrderStatusStep } from "@/components/common/OrderStatusTimeline";
import type { OrderStatus } from "../types/orders.types";

interface OrderTrackingDates {
  createdAt: string;
  updatedAt: string;
}

const formatDate = (date: string) => {
  const parsedDate = new Date(date);

  if (Number.isNaN(parsedDate.getTime())) return undefined;

  return parsedDate.toLocaleString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
};

export const getOrderTrackingSteps = (
  status: OrderStatus,
  dates: OrderTrackingDates,
): OrderStatusStep[] => {
  const stages = [
    {
      id: "confirmed",
      title: "Order Confirmed",
      description: "Your order has been received and confirmed.",
    },
    {
      id: "processing",
      title: "Processing",
      description: "Your order is being prepared.",
    },
    {
      id: "shipped",
      title: "Shipped",
      description: "Your order has been dispatched.",
    },
    {
      id: "delivered",
      title: "Delivered",
      description: "Your order has been delivered.",
    },
  ];

  if (status === "cancelled") {
    return [
      {
        id: "placed",
        title: "Order Placed",
        description: "Your order was created.",
        date: formatDate(dates.createdAt),
        state: "completed",
      },
      {
        id: "cancelled",
        title: "Order Cancelled",
        description: "This order has been cancelled.",
        date: formatDate(dates.updatedAt),
        state: "cancelled",
      },
    ];
  }

  const currentIndex =
    status === "pending"
      ? -1
      : stages.findIndex((stage) => stage.id === status);

  return [
    {
      id: "placed",
      title: "Order Placed",
      description: "Your order has been received.",
      date: formatDate(dates.createdAt),
      state: "completed",
    },
    ...stages.map((stage, index) => {
      const state =
        index < currentIndex
          ? "completed"
          : index === currentIndex
            ? "current"
            : "upcoming";

      return {
        ...stage,
        date:
          state === "current" || state === "completed"
            ? formatDate(dates.updatedAt)
            : undefined,
        state,
      } satisfies OrderStatusStep;
    }),
  ];
};
