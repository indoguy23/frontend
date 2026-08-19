import StockBadge from "@/components/common/StockBadge";
import Card from "@/components/ui/Card";

const StockBadgePlayground = () => {
  return (
    <section className="rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8">
      <div>
        <h2 className="text-2xl font-semibold text-card-foreground">
          Stock Badge
        </h2>

        <p className="mt-2 text-muted-foreground">
          Reusable product inventory status indicators.
        </p>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Card>
          <p className="mb-4 text-sm text-muted-foreground">Available</p>

          <StockBadge stock={20} showQuantity={false} />
        </Card>

        <Card>
          <p className="mb-4 text-sm text-muted-foreground">
            Available with quantity
          </p>

          <StockBadge stock={20} />
        </Card>

        <Card>
          <p className="mb-4 text-sm text-muted-foreground">Low stock</p>

          <StockBadge stock={3} />
        </Card>

        <Card>
          <p className="mb-4 text-sm text-muted-foreground">Out of stock</p>

          <StockBadge stock={0} />
        </Card>
      </div>
    </section>
  );
};

export default StockBadgePlayground;
