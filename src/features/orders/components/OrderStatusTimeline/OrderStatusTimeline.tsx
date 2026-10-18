import { Check, Circle } from "lucide-react";

import { ORDER_STATUS_CONFIG } from "../../data/orderStatus.data";
import type { OrderStatus } from "../../types/orders.types";
import type { OrderStatusTimelineProps } from "./OrderStatusTimeline.types";
import { orderStatusTimelineStyles as styles } from "./OrderStatusTimeline.styles";

const ORDER_PROGRESS: OrderStatus[] = [
  "confirmed",
  "processing",
  "shipped",
  "delivered",
];

const OrderStatusTimeline = ({
  status,
  createdAt,
  updatedAt,
}: OrderStatusTimelineProps) => {
  if (status === "cancelled") {
    return (
      <section className={styles.container}>
        <h2 className={styles.title}>Order Status</h2>

        <div className={styles.cancelledPanel}>
          <p className={styles.cancelledTitle}>
            {ORDER_STATUS_CONFIG.cancelled.label}
          </p>

          <p className={styles.cancelledDescription}>
            This order has been cancelled.
          </p>

          <p className="mt-2 text-xs text-muted-foreground">
            Last updated: {new Date(updatedAt).toLocaleString()}
          </p>
        </div>
      </section>
    );
  }

  const currentIndex = ORDER_PROGRESS.indexOf(status);
  const activeIndex = currentIndex === -1 ? 0 : currentIndex;

  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Order Tracking</h2>

      <div className={styles.timeline}>
        {ORDER_PROGRESS.map((step, index) => {
          const isCompleted = index <= activeIndex;
          const isLast = index === ORDER_PROGRESS.length - 1;
          const StepIcon = isCompleted ? Check : Circle;

          return (
            <div key={step} className={styles.step}>
              <div className={styles.indicatorWrapper}>
                <span
                  className={`${styles.indicator} ${
                    isCompleted
                      ? styles.completedIndicator
                      : styles.pendingIndicator
                  }`}
                >
                  <StepIcon className="h-3.5 w-3.5" />
                </span>

                {!isLast && (
                  <span
                    className={`${styles.connector} ${
                      index < activeIndex ? "bg-primary" : ""
                    }`}
                  />
                )}
              </div>

              <div className={styles.stepContent}>
                <p className={styles.stepTitle}>
                  {ORDER_STATUS_CONFIG[step].label}
                </p>

                {index === 0 && (
                  <p className={styles.stepDescription}>
                    Order placed on {new Date(createdAt).toLocaleDateString()}
                  </p>
                )}

                {index === activeIndex && (
                  <p className={styles.stepDescription}>Current order status</p>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <p className="border-t border-border pt-4 text-xs text-muted-foreground">
        Last updated: {new Date(updatedAt).toLocaleString()}
      </p>
    </section>
  );
};

export default OrderStatusTimeline;
