import {
  Package,
  ShoppingCart,
  Star,
  Users,
} from "lucide-react";

import Metric from "@/components/common/Metric";

const MetricPlayground = () => {
  return (
    <section className="rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8">
      <div>
        <h2 className="text-2xl font-semibold text-card-foreground">
          Metric
        </h2>

        <p className="mt-2 text-muted-foreground">
          Compact reusable metrics for marketplace details,
          analytics and dashboard panels.
        </p>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <Metric
          label="Products"
          value="124"
          icon={
            <Package className="h-4 w-4" />
          }
          trend="up"
          trendValue="+8.4%"
          description="this month"
        />

        <Metric
          label="Orders"
          value="1,248"
          icon={
            <ShoppingCart className="h-4 w-4" />
          }
          trend="up"
          trendValue="+12%"
          description="vs last month"
        />

        <Metric
          label="Customers"
          value="3,426"
          icon={
            <Users className="h-4 w-4" />
          }
          trend="down"
          trendValue="-2.1%"
          description="this month"
        />

        <Metric
          label="Average Rating"
          value="4.7"
          icon={
            <Star className="h-4 w-4" />
          }
          trend="neutral"
          trendValue="0%"
          description="no change"
        />
      </div>
    </section>
  );
};

export default MetricPlayground;