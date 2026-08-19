import OrderStatusTimeline from "@/components/common/OrderStatusTimeline";
import Card from "@/components/ui/Card";

import { ORDER_STATUS_TIMELINE_DATA } from "../data/orderStatusTimeline.data";

const OrderStatusTimelinePlayground = () => {
  return (
    <section className="rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8">
      <div>
        <h2 className="text-2xl font-semibold text-card-foreground">
          Order Status Timeline
        </h2>

        <p className="mt-2 text-muted-foreground">
          Reusable order tracking and fulfillment status timeline.
        </p>
      </div>

      <div className="mt-8 max-w-2xl">
        <Card>
          <OrderStatusTimeline steps={ORDER_STATUS_TIMELINE_DATA} />
        </Card>
      </div>
    </section>
  );
};

export default OrderStatusTimelinePlayground;
