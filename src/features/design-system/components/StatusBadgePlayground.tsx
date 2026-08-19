import StatusBadge from "@/components/common/StatusBadge";
import type { StatusBadgeStatus } from "@/components/common/StatusBadge";

const STATUSES: StatusBadgeStatus[] = [
  "active",
  "inactive",
  "pending",
  "processing",
  "completed",
  "success",
  "failed",
  "cancelled",
  "refunded",
  "draft",
];

const StatusBadgePlayground = () => {
  return (
    <section className="rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8">
      <div>
        <h2 className="text-2xl font-semibold text-card-foreground">
          Status Badge
        </h2>

        <p className="mt-2 text-muted-foreground">
          Standardized marketplace statuses for orders, payments, products,
          vendors and accounts.
        </p>
      </div>

      <div className="mt-8">
        <h3 className="text-sm font-semibold text-foreground">Default</h3>

        <div className="mt-4 flex flex-wrap gap-3">
          {STATUSES.map((status) => (
            <StatusBadge key={status} status={status} />
          ))}
        </div>
      </div>

      <div className="mt-8">
        <h3 className="text-sm font-semibold text-foreground">
          Without Status Dot
        </h3>

        <div className="mt-4 flex flex-wrap gap-3">
          {STATUSES.map((status) => (
            <StatusBadge key={status} status={status} showDot={false} />
          ))}
        </div>
      </div>

      <div className="mt-8">
        <h3 className="text-sm font-semibold text-foreground">Custom Label</h3>

        <div className="mt-4 flex flex-wrap gap-3">
          <StatusBadge status="processing" label="Preparing Order" />

          <StatusBadge status="completed" label="Delivered" />

          <StatusBadge status="failed" label="Payment Failed" />
        </div>
      </div>
    </section>
  );
};

export default StatusBadgePlayground;
