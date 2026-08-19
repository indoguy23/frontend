import { useState } from "react";

import ActiveFilters from "@/components/common/ActiveFilters";
import type { ActiveFilterItem } from "@/components/common/ActiveFilters";
import Card from "@/components/ui/Card";

const INITIAL_FILTERS: ActiveFilterItem[] = [
  {
    id: "category",
    label: "Category:",
    value: "Electronics",
  },
  {
    id: "price",
    label: "Price:",
    value: "₹1,000 – ₹10,000",
  },
  {
    id: "rating",
    label: "Rating:",
    value: "4★ & above",
  },
  {
    id: "stock",
    label: "Availability:",
    value: "In Stock",
  },
];

const ActiveFiltersPlayground = () => {
  const [filters, setFilters] = useState(INITIAL_FILTERS);

  const handleRemove = (selectedFilter: ActiveFilterItem) => {
    setFilters((current) =>
      current.filter((filter) => filter.id !== selectedFilter.id),
    );
  };

  const handleClearAll = () => {
    setFilters([]);
  };

  return (
    <section className="rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8">
      <div>
        <h2 className="text-2xl font-semibold text-card-foreground">
          Active Filters
        </h2>

        <p className="mt-2 text-muted-foreground">
          Reusable removable filter chips for marketplace listings, searches and
          data views.
        </p>
      </div>

      <div className="mt-8 max-w-3xl">
        <Card>
          {filters.length > 0 ? (
            <ActiveFilters
              filters={filters}
              onRemove={handleRemove}
              onClearAll={handleClearAll}
            />
          ) : (
            <p className="text-sm text-muted-foreground">
              No filters are currently active.
            </p>
          )}
        </Card>
      </div>
    </section>
  );
};

export default ActiveFiltersPlayground;
