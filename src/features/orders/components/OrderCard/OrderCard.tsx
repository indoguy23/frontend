import Button from "@/components/ui/Button";
import PriceDisplay from "@/components/common/PriceDisplay";

import { ORDER_STATUS_CONFIG } from "../../data/orderStatus.data";
import type { OrderCardProps } from "./OrderCard.types";
import { ordercardStyles as orderCardStyles } from "./OrderCard.styles";

const OrderCard = ({ order, onViewDetails }: OrderCardProps) => {
  const statusConfig = ORDER_STATUS_CONFIG[order.status];

  return (
    <article className={orderCardStyles.card}>
      <div className={orderCardStyles.header}>
        <div>
          <p className={orderCardStyles.orderId}>Order #{order.orderId}</p>

          <p className={orderCardStyles.date}>
            {new Date(order.createdAt).toLocaleDateString()}
          </p>
        </div>

        <span className={orderCardStyles.status}>{statusConfig.label}</span>
      </div>

      <div className={orderCardStyles.items}>
        {order.items.map((item) => (
          <div key={item.productId} className={orderCardStyles.item}>
            <img
              src={item.productImage}
              alt={item.productName}
              className={orderCardStyles.itemImage}
            />

            <div className={orderCardStyles.itemContent}>
              <p className={orderCardStyles.itemName}>{item.productName}</p>

              <p className={orderCardStyles.itemQuantity}>
                Qty: {item.quantity}
              </p>
            </div>

            <PriceDisplay
              price={item.price * item.quantity}
              showDiscount={false}
              size="sm"
            />
          </div>
        ))}
      </div>

      <div className={orderCardStyles.footer}>
        <div>
          <span className="text-xs text-muted-foreground">Total</span>

          <div className={orderCardStyles.total}>
            <PriceDisplay price={order.total} showDiscount={false} size="sm" />
          </div>
        </div>

        <Button
          type="button"
          variant="outline"
          onClick={() => onViewDetails(order.orderId)}
        >
          View Details
        </Button>
      </div>
    </article>
  );
};

export default OrderCard;
