import { IndianRupee, Package, ShoppingCart, Users } from "lucide-react";

import StatCard from "@/components/common/StatCard";

const StatCardPlayground = () => {
  return (
    <section className="rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8">
      <div>
        <h2 className="text-2xl font-semibold text-card-foreground">
          StatCard Component
        </h2>

        <p className="mt-2 text-muted-foreground">
          Reusable dashboard metrics for revenue, orders, products and
          customers.
        </p>
      </div>

      <div className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard
          title="Total Revenue"
          value="₹1,24,500"
          description="Revenue generated this month."
          icon={IndianRupee}
          trend="up"
          trendValue="+12.4%"
          trendLabel="from last month"
        />

        <StatCard
          title="Total Orders"
          value="1,248"
          description="Orders placed this month."
          icon={ShoppingCart}
          trend="up"
          trendValue="+8.2%"
          trendLabel="from last month"
        />

        <StatCard
          title="Products"
          value="124"
          description="Products currently listed."
          icon={Package}
          trend="neutral"
          trendValue="0%"
          trendLabel="no change"
        />

        <StatCard
          title="Customers"
          value="3,426"
          description="Registered marketplace customers."
          icon={Users}
          trend="down"
          trendValue="-2.1%"
          trendLabel="from last month"
        />
      </div>

      <div className="mt-8">
        <h3 className="font-semibold text-foreground">Loading State</h3>

        <div className="mt-4 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {Array.from({
            length: 4,
          }).map((_, index) => (
            <StatCard key={index} title="" value="" loading />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatCardPlayground;
