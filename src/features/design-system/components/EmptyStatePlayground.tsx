import type { LucideIcon } from "lucide-react";
import {
  BellOff,
  Heart,
  PackageOpen,
  SearchX,
  ShoppingCart,
} from "lucide-react";

import Button from "@/components/ui/Button";
import EmptyState from "@/components/ui/EmptyState";

interface EmptyStateExample {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  actionLabel?: string;
}

const EMPTY_STATE_EXAMPLES: EmptyStateExample[] = [
  {
    id: "cart",
    title: "Your cart is empty",
    description:
      "Browse products and add items to your cart before proceeding to checkout.",
    icon: ShoppingCart,
    actionLabel: "Explore Products",
  },
  {
    id: "wishlist",
    title: "No wishlist items",
    description: "Save products you like so you can easily find them later.",
    icon: Heart,
    actionLabel: "Discover Products",
  },
  {
    id: "orders",
    title: "No orders yet",
    description: "Your completed and active orders will appear here.",
    icon: PackageOpen,
    actionLabel: "Start Shopping",
  },
  {
    id: "notifications",
    title: "No notifications",
    description:
      "You’re all caught up. New account and order updates will appear here.",
    icon: BellOff,
  },
];

const EmptyStatePlayground = () => {
  return (
    <section className="rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8">
      <div>
        <h2 className="text-2xl font-semibold text-card-foreground">
          Empty State Component
        </h2>

        <p className="mt-2 text-muted-foreground">
          Reusable guidance for empty lists, carts, search results and dashboard
          sections.
        </p>
      </div>

      <div className="mt-8 space-y-8">
        <div>
          <h3 className="font-semibold text-card-foreground">
            Search Result Example
          </h3>

          <EmptyState
            className="mt-4"
            variant="bordered"
            icon={<SearchX className="h-6 w-6" />}
            title="No matching products"
            description="We couldn't find any products matching your current search and filters."
            primaryAction={<Button>Clear Filters</Button>}
            secondaryAction={<Button variant="outline">Return Home</Button>}
          />
        </div>

        <div>
          <h3 className="font-semibold text-card-foreground">
            Marketplace Examples
          </h3>

          <div className="mt-4 grid gap-5 lg:grid-cols-2">
            {EMPTY_STATE_EXAMPLES.map((item) => {
              const Icon = item.icon;

              return (
                <EmptyState
                  key={item.id}
                  size="sm"
                  variant="subtle"
                  icon={<Icon className="h-6 w-6" />}
                  title={item.title}
                  description={item.description}
                  primaryAction={
                    item.actionLabel ? (
                      <Button size="sm">{item.actionLabel}</Button>
                    ) : undefined
                  }
                />
              );
            })}
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-card-foreground">
            Minimal Empty State
          </h3>

          <EmptyState
            className="mt-4"
            size="sm"
            title="Nothing to display"
            description="Data will appear here when it becomes available."
          />
        </div>
      </div>
    </section>
  );
};

export default EmptyStatePlayground;
