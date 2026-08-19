import { Eye, ImageOff, MapPin, XCircle } from "lucide-react";

import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { cn } from "@/utils/cn";

import { orderCardStyles } from "./OrderCard.styles";
import type { OrderCardProps, OrderCardStatus } from "./OrderCard.types";

const getStatusVariant = (status: OrderCardStatus) => {
  switch (status) {
    case "delivered":
      return "success";

    case "cancelled":
      return "destructive";

    case "pending":
      return "warning";

    case "confirmed":
    case "shipped":
    default:
      return "secondary";
  }
};

const getStatusLabel = (status: OrderCardStatus) => {
  switch (status) {
    case "pending":
      return "Pending";

    case "confirmed":
      return "Confirmed";

    case "shipped":
      return "Shipped";

    case "delivered":
      return "Delivered";

    case "cancelled":
      return "Cancelled";
  }
};

const OrderCard = ({
  order,
  currency = "INR",
  locale = "en-IN",
  onViewDetails,
  onTrackOrder,
  onCancelOrder,
  className,
}: OrderCardProps) => {
  const formatter = new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  });

  const canTrack = order.status === "confirmed" || order.status === "shipped";

  const canCancel = order.status === "pending" || order.status === "confirmed";

  return (
    <article className={cn(orderCardStyles.root, className)}>
      <div className={orderCardStyles.header}>
        <div>
          <h3 className={orderCardStyles.orderNumber}>
            Order #{order.orderNumber}
          </h3>

          <p className={orderCardStyles.date}>{order.date}</p>
        </div>

        <Badge variant={getStatusVariant(order.status)}>
          {getStatusLabel(order.status)}
        </Badge>
      </div>

      <div className={orderCardStyles.items}>
        {order.items.map((item) => (
          <div key={item.id} className={orderCardStyles.item}>
            {item.image ? (
              <img
                src={item.image}
                alt={item.name}
                className={orderCardStyles.image}
              />
            ) : (
              <div className={orderCardStyles.fallbackImage}>
                <ImageOff aria-hidden="true" className="h-4 w-4" />
              </div>
            )}

            <div className={orderCardStyles.itemInfo}>
              <p className={orderCardStyles.itemName}>{item.name}</p>

              <p className={orderCardStyles.quantity}>
                Quantity: {item.quantity}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className={orderCardStyles.footer}>
        <div>
          <p className={orderCardStyles.totalLabel}>Order Total</p>

          <p className={orderCardStyles.totalValue}>
            {formatter.format(order.total)}
          </p>
        </div>

        <div className={orderCardStyles.actions}>
          {onViewDetails && (
            <Button
              size="sm"
              variant="outline"
              leftIcon={<Eye className="h-4 w-4" />}
              onClick={() => onViewDetails(order)}
            >
              Details
            </Button>
          )}

          {canTrack && onTrackOrder && (
            <Button
              size="sm"
              variant="outline"
              leftIcon={<MapPin className="h-4 w-4" />}
              onClick={() => onTrackOrder(order)}
            >
              Track
            </Button>
          )}

          {canCancel && onCancelOrder && (
            <Button
              size="sm"
              variant="ghost"
              leftIcon={<XCircle className="h-4 w-4" />}
              onClick={() => onCancelOrder(order)}
            >
              Cancel
            </Button>
          )}
        </div>
      </div>
    </article>
  );
};

export default OrderCard;
