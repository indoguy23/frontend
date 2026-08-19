import Divider from "@/components/ui/Divider";

const DividerPlayground = () => {
  return (
    <section className="rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8">
      <div>
        <h2 className="text-2xl font-semibold text-card-foreground">
          Divider Component
        </h2>

        <p className="mt-2 text-muted-foreground">
          Reusable separators for sections, menus, forms and grouped content.
        </p>
      </div>

      <div className="mt-8 space-y-8">
        <div>
          <h3 className="font-semibold text-card-foreground">
            Horizontal Divider
          </h3>

          <p className="mt-3 text-sm text-muted-foreground">
            Content shown above the divider.
          </p>

          <Divider spacing="md" />

          <p className="text-sm text-muted-foreground">
            Content shown below the divider.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-card-foreground">
            Labeled Divider
          </h3>

          <div className="mt-4 max-w-md">
            <button
              type="button"
              className="w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground"
            >
              Continue with Google
            </button>

            <Divider label="OR" spacing="md" />

            <button
              type="button"
              className="w-full rounded-xl bg-primary px-4 py-3 font-semibold text-primary-foreground"
            >
              Continue with Email
            </button>
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-card-foreground">
            Vertical Divider
          </h3>

          <div className="mt-4 flex h-16 items-center rounded-2xl border border-border bg-background px-5">
            <span className="text-sm text-foreground">Products</span>

            <Divider orientation="vertical" spacing="md" />

            <span className="text-sm text-foreground">Orders</span>

            <Divider orientation="vertical" spacing="md" />

            <span className="text-sm text-foreground">Customers</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DividerPlayground;
