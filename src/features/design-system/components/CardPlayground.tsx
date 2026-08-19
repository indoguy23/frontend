import Card from "@/components/ui/Card";
import { PackageCheck, ShoppingBag, Store, Users } from "lucide-react";

const CARD_EXAMPLES = [
  {
    title: "Total Products",
    value: "1,248",
    description: "Products currently listed.",
    icon: ShoppingBag,
  },
  {
    title: "Active Vendors",
    value: "84",
    description: "Approved marketplace sellers.",
    icon: Store,
  },
  {
    title: "Completed Orders",
    value: "3,692",
    description: "Orders successfully delivered.",
    icon: PackageCheck,
  },
  {
    title: "Registered Customers",
    value: "12,580",
    description: "Customers using MarketHub.",
    icon: Users,
  },
] as const;

const CardPlayground = () => {
  return (
    <section className="rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8">
      <div>
        <h2 className="text-2xl font-semibold text-card-foreground">
          Card Component
        </h2>

        <p className="mt-2 text-muted-foreground">
          Generic content containers with reusable visual variants, spacing and
          interactive behavior.
        </p>
      </div>

      <div className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {CARD_EXAMPLES.map((item) => {
          const Icon = item.icon;

          return (
            <Card
              key={item.title}
              interactive
              tabIndex={0}
              role="button"
              aria-label={`View ${item.title}`}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm text-muted-foreground">{item.title}</p>

                  <p className="mt-2 text-3xl font-bold text-card-foreground">
                    {item.value}
                  </p>
                </div>

                <div className="rounded-xl bg-primary-subtle p-3 text-primary-subtle-foreground">
                  <Icon className="h-5 w-5" />
                </div>
              </div>

              <p className="mt-5 text-sm leading-6 text-muted-foreground">
                {item.description}
              </p>
            </Card>
          );
        })}
      </div>

      <div className="mt-8 grid gap-5 lg:grid-cols-3">
        <Card variant="elevated">
          <h3 className="font-semibold text-card-foreground">Elevated Card</h3>

          <p className="mt-2 text-sm text-muted-foreground">
            Suitable for important panels, summaries and dashboard widgets.
          </p>
        </Card>

        <Card variant="outlined">
          <h3 className="font-semibold text-foreground">Outlined Card</h3>

          <p className="mt-2 text-sm text-muted-foreground">
            Suitable when visual separation is needed without a filled surface.
          </p>
        </Card>

        <Card variant="subtle">
          <h3 className="font-semibold text-foreground">Subtle Card</h3>

          <p className="mt-2 text-sm text-muted-foreground">
            Suitable for secondary content and low-emphasis information.
          </p>
        </Card>
      </div>
    </section>
  );
};

export default CardPlayground;
