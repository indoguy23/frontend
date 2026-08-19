import {
  AlertTriangle,
  Check,
  Clock3,
  Info,
  PackageCheck,
  ShieldCheck,
  Sparkles,
  Store,
  X,
} from "lucide-react";

import Badge from "@/components/ui/Badge";

const ORDER_STATUSES = [
  {
    label: "Pending",
    variant: "warning",
    icon: Clock3,
  },
  {
    label: "Processing",
    variant: "info",
    icon: PackageCheck,
  },
  {
    label: "Delivered",
    variant: "success",
    icon: Check,
  },
  {
    label: "Cancelled",
    variant: "destructive",
    icon: X,
  },
] as const;

const BadgePlayground = () => {
  return (
    <section className="rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8">
      <div>
        <h2 className="text-2xl font-semibold text-card-foreground">
          Badge Component
        </h2>

        <p className="mt-2 text-muted-foreground">
          Reusable labels for status, categories, roles, stock information and
          marketplace metadata.
        </p>
      </div>

      <div className="mt-8 space-y-8">
        {/* Variants */}

        <div>
          <h3 className="font-semibold text-card-foreground">Variants</h3>

          <div className="mt-4 flex flex-wrap gap-3">
            <Badge leftIcon={<Sparkles className="h-3.5 w-3.5" />}>
              Featured
            </Badge>

            <Badge
              variant="secondary"
              leftIcon={<Store className="h-3.5 w-3.5" />}
            >
              Vendor
            </Badge>

            <Badge
              variant="success"
              leftIcon={<ShieldCheck className="h-3.5 w-3.5" />}
            >
              Approved
            </Badge>

            <Badge
              variant="warning"
              leftIcon={<AlertTriangle className="h-3.5 w-3.5" />}
            >
              Low Stock
            </Badge>

            <Badge
              variant="destructive"
              leftIcon={<X className="h-3.5 w-3.5" />}
            >
              Rejected
            </Badge>

            <Badge variant="info" leftIcon={<Info className="h-3.5 w-3.5" />}>
              Information
            </Badge>

            <Badge variant="outline">Electronics</Badge>
          </div>
        </div>

        {/* Sizes */}

        <div>
          <h3 className="font-semibold text-card-foreground">Sizes</h3>

          <div className="mt-4 flex flex-wrap items-center gap-3">
            <Badge size="sm">Small</Badge>

            <Badge size="md">Medium</Badge>

            <Badge size="lg">Large</Badge>
          </div>
        </div>

        {/* Dynamic order statuses */}

        <div>
          <h3 className="font-semibold text-card-foreground">
            Dynamic Order Statuses
          </h3>

          <div className="mt-4 flex flex-wrap gap-3">
            {ORDER_STATUSES.map((status) => {
              const Icon = status.icon;

              return (
                <Badge
                  key={status.label}
                  variant={status.variant}
                  leftIcon={<Icon className="h-3.5 w-3.5" />}
                >
                  {status.label}
                </Badge>
              );
            })}
          </div>
        </div>

        {/* Marketplace examples */}

        <div className="grid gap-5 md:grid-cols-2">
          <div className="rounded-2xl border border-border bg-background p-5">
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="success">In Stock</Badge>

              <Badge variant="destructive">20% Off</Badge>

              <Badge variant="outline">Electronics</Badge>
            </div>

            <h3 className="mt-4 font-semibold text-foreground">
              Wireless Headphones
            </h3>

            <p className="mt-2 text-sm text-muted-foreground">
              Product badges can communicate stock, discount and category
              information.
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-background p-5">
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="warning">Pending Approval</Badge>

              <Badge variant="secondary">Vendor</Badge>
            </div>

            <h3 className="mt-4 font-semibold text-foreground">
              Tech World Store
            </h3>

            <p className="mt-2 text-sm text-muted-foreground">
              Vendor badges can communicate role and approval status.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BadgePlayground;
