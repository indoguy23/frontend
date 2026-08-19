import OrderItem from "@/components/common/OrderItem";
import Card from "@/components/ui/Card";
import { showToast } from "@/components/ui/Toast";

import { ORDER_ITEM_DATA } from "../data/orderItem.data";

const OrderItemPlayground = () => {
  return (
    <section className="rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8">
      <div>
        <h2 className="text-2xl font-semibold text-card-foreground">
          Order Item
        </h2>

        <p className="mt-2 text-muted-foreground">
          Reusable product rows for order details, confirmation, invoices and
          reorder flows.
        </p>
      </div>

      <div className="mt-8">
        <Card>
          {ORDER_ITEM_DATA.map((item) => (
            <OrderItem
              key={item.id}
              item={item}
              onViewProduct={(selectedItem) =>
                showToast.info(`Opening ${selectedItem.name}.`)
              }
              onBuyAgain={(selectedItem) =>
                showToast.success(`${selectedItem.name} added to cart.`)
              }
            />
          ))}
        </Card>
      </div>
    </section>
  );
};

export default OrderItemPlayground;
