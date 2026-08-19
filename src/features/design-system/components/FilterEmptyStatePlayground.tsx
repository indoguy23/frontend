import FilterEmptyState from "@/components/common/FilterEmptyState";
import Button from "@/components/ui/Button";
import { showToast } from "@/components/ui/Toast";

const FilterEmptyStatePlayground = () => {
  return (
    <section className="rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8">
      <div>
        <h2 className="text-2xl font-semibold text-card-foreground">
          Filter Empty State
        </h2>

        <p className="mt-2 text-muted-foreground">
          Reusable empty results UI for search, filters, tables and marketplace
          listings.
        </p>
      </div>

      <div className="mt-8 space-y-6">
        <FilterEmptyState
          searchTerm="gaming laptop"
          activeFilterCount={3}
          primaryAction={
            <Button onClick={() => showToast.info("Filters cleared.")}>
              Clear Filters
            </Button>
          }
          secondaryAction={
            <Button
              variant="outline"
              onClick={() => showToast.info("Showing all products.")}
            >
              Browse All
            </Button>
          }
        />

        <FilterEmptyState
          title="No orders found"
          description="No orders match the selected status and date range."
          activeFilterCount={2}
          primaryAction={<Button variant="outline">Reset Filters</Button>}
        />
      </div>
    </section>
  );
};

export default FilterEmptyStatePlayground;
