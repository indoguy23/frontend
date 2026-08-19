import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Loader from "@/components/ui/Loader";

const LOADER_VARIANTS = [
  "primary",
  "secondary",
  "foreground",
  "muted",
  "success",
  "destructive",
] as const;

const LOADER_SIZES = ["xs", "sm", "md", "lg", "xl"] as const;

const LoaderPlayground = () => {
  return (
    <section className="rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8">
      <div>
        <h2 className="text-2xl font-semibold text-card-foreground">
          Loader Component
        </h2>

        <p className="mt-2 text-muted-foreground">
          Accessible loading indicators for requests, pages, forms and
          background operations.
        </p>
      </div>

      <div className="mt-8 space-y-8">
        <div>
          <h3 className="font-semibold text-card-foreground">Sizes</h3>

          <div className="mt-4 flex flex-wrap items-center gap-6">
            {LOADER_SIZES.map((size) => (
              <div key={size} className="flex flex-col items-center gap-2">
                <Loader size={size} />

                <span className="text-xs uppercase text-muted-foreground">
                  {size}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-card-foreground">
            Semantic Variants
          </h3>

          <div className="mt-4 flex flex-wrap items-center gap-6">
            {LOADER_VARIANTS.map((variant) => (
              <Loader
                key={variant}
                variant={variant}
                label={`Loading ${variant}`}
              />
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-card-foreground">
            Loader with Label
          </h3>

          <div className="mt-4 flex flex-wrap gap-6">
            <Loader size="sm" label="Loading products..." showLabel />

            <Loader variant="success" label="Processing order..." showLabel />
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-card-foreground">Loading States</h3>

          <div className="mt-4 grid gap-5 md:grid-cols-2">
            <Card>
              <div className="flex min-h-32 items-center justify-center">
                <Loader size="lg" label="Loading dashboard..." showLabel />
              </div>
            </Card>

            <Card>
              <p className="text-sm text-muted-foreground">
                Loader inside a custom action.
              </p>

              <Button
                className="mt-4"
                disabled
                leftIcon={<Loader size="sm" variant="current" />}
              >
                Saving Changes
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoaderPlayground;
