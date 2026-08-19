import OrderCard from "@/components/common/OrderCard";
import { showToast } from "@/components/ui/Toast";

import { ORDER_CARD_DATA } from "../data/orderCard.data";

const OrderCardPlayground = () => {
  return (
    <section className="rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8">
      <div>
        <h2 className="text-2xl font-semibold text-card-foreground">
          Order Card
        </h2>

        <p className="mt-2 text-muted-foreground">
          Reusable order overview cards for customer, vendor and admin order
          flows.
        </p>
      </div>

      <div className="mt-8 grid gap-5 lg:grid-cols-2">
        {ORDER_CARD_DATA.map((order) => (
          <OrderCard
            key={order.id}
            order={order}
            onViewDetails={(selectedOrder) =>
              showToast.info(`Opening ${selectedOrder.orderNumber}.`)
            }
            onTrackOrder={(selectedOrder) =>
              showToast.info(`Tracking ${selectedOrder.orderNumber}.`)
            }
            onCancelOrder={(selectedOrder) =>
              showToast.info(
                `Cancel requested for ${selectedOrder.orderNumber}.`,
              )
            }
          />
        ))}
      </div>
    </section>
  );
};

export default OrderCardPlayground;
