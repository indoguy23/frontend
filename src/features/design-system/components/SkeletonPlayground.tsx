import Card from "@/components/ui/Card";
import Skeleton from "@/components/ui/Skeleton";

const PRODUCT_SKELETONS = Array.from({ length: 4 }, (_, index) => index);

const SkeletonPlayground = () => {
  return (
    <section className="rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8">
      <div>
        <h2 className="text-2xl font-semibold text-card-foreground">
          Skeleton Component
        </h2>

        <p className="mt-2 text-muted-foreground">
          Content-shaped placeholders for cards, profiles, lists and marketplace
          data.
        </p>
      </div>

      <div className="mt-8 space-y-10">
        {/* Basic shapes */}

        <div>
          <h3 className="font-semibold text-card-foreground">Basic Shapes</h3>

          <div className="mt-4 flex flex-wrap items-center gap-6">
            <Skeleton className="h-20 w-32" />

            <Skeleton variant="circle" className="h-16 w-16" />

            <div className="w-full max-w-sm space-y-3">
              <Skeleton variant="text" className="h-4 w-full" />

              <Skeleton variant="text" className="h-4 w-4/5" />

              <Skeleton variant="text" className="h-4 w-2/3" />
            </div>
          </div>
        </div>

        {/* Profile skeleton */}

        <div>
          <h3 className="font-semibold text-card-foreground">
            Profile Skeleton
          </h3>

          <Card
            className="mt-4 max-w-xl"
            aria-busy="true"
            aria-label="Loading user profile"
          >
            <div className="flex items-center gap-4">
              <Skeleton variant="circle" className="h-14 w-14 shrink-0" />

              <div className="flex-1 space-y-3">
                <Skeleton variant="text" className="h-5 w-40" />

                <Skeleton variant="text" className="h-4 w-56 max-w-full" />
              </div>
            </div>
          </Card>
        </div>

        {/* Product card skeletons */}

        <div>
          <h3 className="font-semibold text-card-foreground">
            Product Card Skeletons
          </h3>

          <div
            className="mt-4 grid gap-5 sm:grid-cols-2 xl:grid-cols-4"
            aria-busy="true"
            aria-label="Loading products"
          >
            {PRODUCT_SKELETONS.map((item) => (
              <Card key={item} padding="none" className="overflow-hidden">
                <Skeleton className="aspect-square w-full rounded-none" />

                <div className="space-y-4 p-5">
                  <Skeleton variant="text" className="h-4 w-20" />

                  <Skeleton variant="text" className="h-5 w-full" />

                  <Skeleton variant="text" className="h-5 w-3/4" />

                  <div className="flex items-center justify-between gap-4">
                    <Skeleton variant="text" className="h-6 w-24" />

                    <Skeleton className="h-10 w-10 rounded-xl" />
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Dashboard skeleton */}

        <div>
          <h3 className="font-semibold text-card-foreground">
            Dashboard Skeleton
          </h3>

          <div
            className="mt-4 grid gap-5 md:grid-cols-2 xl:grid-cols-4"
            aria-busy="true"
            aria-label="Loading dashboard statistics"
          >
            {PRODUCT_SKELETONS.map((item) => (
              <Card key={item}>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 space-y-3">
                    <Skeleton variant="text" className="h-4 w-24" />

                    <Skeleton variant="text" className="h-8 w-20" />
                  </div>

                  <Skeleton className="h-11 w-11 rounded-xl" />
                </div>

                <Skeleton variant="text" className="mt-5 h-4 w-32" />
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkeletonPlayground;
