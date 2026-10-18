import { ArrowLeft, MapPin, Package, Wallet } from "lucide-react";

import PriceDisplay from "@/components/common/PriceDisplay";
import Button from "@/components/ui/Button";

import { ORDER_STATUS_CONFIG } from "../../data/orderStatus.data";
import type { OrderDetailsProps } from "./OrderDetails.types";
import { orderDetailsStyles as styles } from "./OrderDetails.styles";

const OrderDetails = ({
  order,
  onBack,
  onTrackOrder,
  onCancelOrder,
}: OrderDetailsProps) => {
  const status = ORDER_STATUS_CONFIG[order.status];

  const canCancel = ["pending", "confirmed"].includes(order.status);

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <div>
          <Button type="button" variant="ghost" onClick={onBack}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Orders
          </Button>

          <h1 className={`${styles.title} mt-3`}>Order Details</h1>

          <p className={styles.subtitle}>Order #{order.orderId}</p>
        </div>

        <Button type="button" onClick={onTrackOrder}>
          <Package className="mr-2 h-4 w-4" />
          Track Order
        </Button>
      </div>

      <div className={styles.panel}>
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-sm text-muted-foreground">Order placed</p>
            <p className="mt-1 text-sm font-medium">
              {new Date(order.createdAt).toLocaleDateString()}
            </p>
          </div>

          <span className="rounded-full border px-3 py-1 text-sm font-medium">
            {status.label}
          </span>
        </div>
      </div>

      <div className={styles.panel}>
        <h2 className={styles.panelTitle}>Products</h2>

        <div className={styles.items}>
          {order.items.map((item) => (
            <div key={item.productId} className={styles.item}>
              <img
                src={item.productImage}
                alt={item.productName}
                className={styles.itemImage}
              />

              <div className={styles.itemContent}>
                <p className={styles.itemName}>{item.productName}</p>
                <p className={styles.itemMeta}>Quantity: {item.quantity}</p>
                <div className="mt-2">
                  <PriceDisplay
                    price={item.price}
                    showDiscount={false}
                    size="sm"
                  />
                  <span className="text-xs text-muted-foreground"> each</span>
                </div>
              </div>

              <PriceDisplay
                price={item.price * item.quantity}
                showDiscount={false}
                size="sm"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <section className={styles.panel}>
          <div className="flex items-center gap-2">
            <MapPin className="h-5 w-5" />
            <h2 className={styles.panelTitle}>Delivery Address</h2>
          </div>

          <div className="mt-4 text-sm">
            <p className="font-medium">{order.address.fullName}</p>
            <p className="mt-1">{order.address.phone}</p>
            <p className="mt-3 text-muted-foreground">
              {order.address.addressLine1}
              {order.address.addressLine2 && `, ${order.address.addressLine2}`}
              <br />
              {order.address.city}, {order.address.state} -{" "}
              {order.address.postalCode}
              <br />
              {order.address.country}
            </p>
          </div>
        </section>

        <section className={styles.panel}>
          <div className="flex items-center gap-2">
            <Wallet className="h-5 w-5" />
            <h2 className={styles.panelTitle}>Payment Summary</h2>
          </div>

          <div className={styles.summary}>
            <div className={styles.summaryRow}>
              <span className="text-muted-foreground">Subtotal</span>
              <PriceDisplay
                price={order.subtotal}
                showDiscount={false}
                size="sm"
              />
            </div>

            <div className={styles.summaryRow}>
              <span className="text-muted-foreground">Shipping</span>
              {order.shipping === 0 ? (
                <span>Free</span>
              ) : (
                <PriceDisplay
                  price={order.shipping}
                  showDiscount={false}
                  size="sm"
                />
              )}
            </div>

            {order.discount > 0 && (
              <div className={styles.summaryRow}>
                <span className="text-muted-foreground">Discount</span>
                <PriceDisplay
                  price={order.discount}
                  showDiscount={false}
                  size="sm"
                />
              </div>
            )}

            <div className="border-t border-border pt-3">
              <div className={styles.summaryRow}>
                <span className="font-semibold">Total</span>
                <PriceDisplay
                  price={order.total}
                  showDiscount={false}
                  size="lg"
                />
              </div>
            </div>

            <p className="text-sm text-muted-foreground">
              Payment method: {order.paymentMethod}
            </p>
          </div>
        </section>
      </div>

      {canCancel && (
        <div className={styles.footer}>
          <Button
            type="button"
            variant="outline"
            onClick={() => onCancelOrder(order.orderId)}
          >
            Cancel Order
          </Button>
        </div>
      )}
    </section>
  );
};

export default OrderDetails;
