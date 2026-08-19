import OrderSummary from "@/components/common/OrderSummary";
import { showToast } from "@/components/ui/Toast";

const OrderSummaryPlayground = () => {
  return (
    <section className="rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8">
      <div>
        <h2 className="text-2xl font-semibold text-card-foreground">
          Order Summary
        </h2>

        <p className="mt-2 text-muted-foreground">
          Reusable pricing summary for cart and checkout flows.
        </p>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <OrderSummary
          subtotal={8999}
          discount={1000}
          shipping={0}
          tax={400}
          total={8399}
          itemCount={3}
        />

        <OrderSummary
          subtotal={12999}
          shipping={99}
          tax={650}
          total={13748}
          itemCount={2}
          actionLabel="Proceed to Checkout"
          onAction={() => showToast.success("Proceed to checkout requested.")}
        />
      </div>
    </section>
  );
};

export default OrderSummaryPlayground;
