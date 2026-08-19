import {
  ChevronRight,
  Package,
  ShoppingCart,
  UserPlus,
  WalletCards,
} from "lucide-react";

import DataList from "@/components/common/DataList";
import type { DataListItem } from "@/components/common/DataList";
import Badge from "@/components/ui/Badge";
import { showToast } from "@/components/ui/Toast";

const ACTIVITY_ITEMS: DataListItem[] = [
  {
    id: "activity-1",
    title: "New order received",
    description: "Order MH-2026-00148 was placed by Rahul Sharma.",
    meta: "5 min ago",
    leading: (
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-muted text-muted-foreground">
        <ShoppingCart className="h-4 w-4" />
      </div>
    ),
    trailing: <ChevronRight className="h-4 w-4 text-muted-foreground" />,
    onClick: () => {
      showToast.info("Opening order activity.");
    },
  },

  {
    id: "activity-2",
    title: "Product stock updated",
    description: "Wireless Headphones stock changed to 18 units.",
    meta: "30 min ago",
    leading: (
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-muted text-muted-foreground">
        <Package className="h-4 w-4" />
      </div>
    ),
    trailing: <Badge variant="success">Updated</Badge>,
  },

  {
    id: "activity-3",
    title: "New seller registered",
    description: "Urban Style submitted a marketplace seller application.",
    meta: "2 hours ago",
    leading: (
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-muted text-muted-foreground">
        <UserPlus className="h-4 w-4" />
      </div>
    ),
  },

  {
    id: "activity-4",
    title: "Payment completed",
    description: "₹8,499 payment received for order MH-2026-00124.",
    meta: "Yesterday",
    leading: (
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-muted text-muted-foreground">
        <WalletCards className="h-4 w-4" />
      </div>
    ),
    trailing: <Badge variant="success">Paid</Badge>,
  },
];

const DataListPlayground = () => {
  return (
    <section className="rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8">
      <div>
        <h2 className="text-2xl font-semibold text-card-foreground">
          Data List
        </h2>

        <p className="mt-2 text-muted-foreground">
          Reusable compact lists for activities, transactions, orders and
          dashboard data.
        </p>
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <div>
          <h3 className="mb-4 font-semibold text-foreground">Default</h3>

          <DataList items={ACTIVITY_ITEMS} />
        </div>

        <div>
          <h3 className="mb-4 font-semibold text-foreground">Compact</h3>

          <DataList items={ACTIVITY_ITEMS} compact />
        </div>
      </div>
    </section>
  );
};

export default DataListPlayground;
