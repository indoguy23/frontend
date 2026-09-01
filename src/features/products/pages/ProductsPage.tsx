import { useState } from "react";

import { ProductsHeader } from "../components/ProductsHeader";
import {
  ProductsToolbar,
  type ProductSortValue,
} from "../components/ProductsToolbar";
import { ProductFilters } from "../components/ProductFilters";

import type { ProductFiltersState } from "../types/products.types";

const INITIAL_FILTERS: ProductFiltersState = {
  categories: [],
  minPrice: "",
  maxPrice: "",
  rating: null,
  availability: [],
};

const ProductsPage = () => {
  const [sortBy, setSortBy] = useState<ProductSortValue>("featured");

  const [filters, setFilters] = useState<ProductFiltersState>(INITIAL_FILTERS);

  const productCount = 128;

  const handleFilterClick = () => {
    // Mobile/tablet filter dialog will be connected later.
  };

  const handleClearFilters = () => {
    setFilters(INITIAL_FILTERS);
  };

  return (
    <main className="min-h-screen">
      <div
        className={[
          "mx-auto",
          "w-full",
          "max-w-7xl",
          "px-4",
          "py-6",
          "sm:px-6",
          "sm:py-8",
          "lg:px-8",
        ].join(" ")}
      >
        <ProductsHeader productCount={productCount} />

        <ProductsToolbar
          sortBy={sortBy}
          onSortChange={setSortBy}
          onFilterClick={handleFilterClick}
        />

        <div className="mt-6 grid gap-6 lg:grid-cols-[240px_minmax(0,1fr)]">
          {/* Desktop Filters */}
          <aside className="hidden lg:block">
            <ProductFilters
              filters={filters}
              onChange={setFilters}
              onClear={handleClearFilters}
            />
          </aside>

          {/* Product Grid */}
          <section className="min-w-0">
            {/* ProductsGrid will be added next */}
          </section>
        </div>

        {/* Pagination will be added later */}
      </div>
    </main>
  );
};

export default ProductsPage;
