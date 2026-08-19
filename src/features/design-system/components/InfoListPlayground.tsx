import InfoList from "@/components/common/InfoList";
import Badge from "@/components/ui/Badge";
import Card from "@/components/ui/Card";

const ORDER_INFO = [
  {
    id: "order-number",
    label: "Order Number",
    value: "MH-2026-00124",
  },
  {
    id: "status",
    label: "Status",
    value: <Badge variant="success">Delivered</Badge>,
  },
  {
    id: "customer",
    label: "Customer",
    value: "Rahul Sharma",
  },
  {
    id: "payment",
    label: "Payment Method",
    value: "UPI",
  },
  {
    id: "amount",
    label: "Order Amount",
    value: "₹8,499",
  },
  {
    id: "date",
    label: "Order Date",
    value: "17 Aug 2026",
    description: "Placed at 10:42 AM",
  },
];

const InfoListPlayground = () => {
  return (
    <section className="rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8">
      <div>
        <h2 className="text-2xl font-semibold text-card-foreground">
          Info List
        </h2>

        <p className="mt-2 text-muted-foreground">
          Reusable label and value layouts for marketplace and dashboard detail
          views.
        </p>
      </div>

      <div className="mt-8 space-y-6">
        <Card>
          <h3 className="font-semibold text-foreground">Two Columns</h3>

          <div className="mt-5">
            <InfoList items={ORDER_INFO} columns={2} />
          </div>
        </Card>

        <Card>
          <h3 className="font-semibold text-foreground">Bordered</h3>

          <div className="mt-5">
            <InfoList items={ORDER_INFO} columns={3} bordered />
          </div>
        </Card>
      </div>
    </section>
  );
};

export default InfoListPlayground;
