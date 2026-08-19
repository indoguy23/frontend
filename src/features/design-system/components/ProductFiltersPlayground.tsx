import { useState } from "react";

import ProductFilters from "@/components/common/ProductFilters";
import type { ProductFiltersValue } from "@/components/common/ProductFilters";

const DEFAULT_FILTERS: ProductFiltersValue = {
  category: "",
  minPrice: "",
  maxPrice: "",
  rating: "",
  availability: "",
};

const ProductFiltersPlayground = () => {
  const [filters, setFilters] = useState<ProductFiltersValue>(DEFAULT_FILTERS);

  return (
    <section className="rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8">
      <div>
        <h2 className="text-2xl font-semibold text-card-foreground">
          Product Filters
        </h2>

        <p className="mt-2 text-muted-foreground">
          Reusable filters for marketplace product listings.
        </p>
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-[280px_1fr]">
        <ProductFilters
          value={filters}
          onChange={setFilters}
          onReset={() => setFilters(DEFAULT_FILTERS)}
        />

        <div className="rounded-2xl border border-border bg-background p-5">
          <h3 className="font-semibold text-foreground">
            Current Filter State
          </h3>

          <pre className="mt-4 overflow-x-auto rounded-xl bg-muted p-4 text-xs text-muted-foreground">
            {JSON.stringify(filters, null, 2)}
          </pre>
        </div>
      </div>
    </section>
  );
};

export default ProductFiltersPlayground;
