import { useMemo, useState } from "react";

import { ProductsHeader } from "../components/ProductsHeader";
import {
  ProductsToolbar,
  type ProductSortValue,
} from "../components/ProductsToolbar";
import { ProductFilters } from "../components/ProductFilters";
import { ProductsGrid } from "../components/ProductsGrid";

import { PRODUCTS } from "../data/products.data";

import type { ProductFiltersState } from "../types/products.types";
import Dialog from "@/components/ui/Dialog";
import Button from "@/components/ui/Button";

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

  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const filteredProducts = useMemo(() => {
    let result = [...PRODUCTS];

    // Category
    if (filters.categories.length > 0) {
      result = result.filter((product) =>
        filters.categories.includes(product.category),
      );
    }

    // Minimum Price
    if (filters.minPrice !== "") {
      const minPrice = Number(filters.minPrice);

      result = result.filter((product) => product.price >= minPrice);
    }

    // Maximum Price
    if (filters.maxPrice !== "") {
      const maxPrice = Number(filters.maxPrice);

      result = result.filter((product) => product.price <= maxPrice);
    }

    // Rating
    if (filters.rating !== null) {
      const minimumRating = filters.rating;

      result = result.filter(
        (product) => (product.rating ?? 0) >= minimumRating,
      );
    }

    // Availability
    if (filters.availability.length > 0) {
      result = result.filter((product) => {
        const isInStock = product.stock > 0;

        const matchesInStock =
          filters.availability.includes("in-stock") && isInStock;

        const matchesOutOfStock =
          filters.availability.includes("out-of-stock") && !isInStock;

        return matchesInStock || matchesOutOfStock;
      });
    }

    // Sorting
    switch (sortBy) {
      case "newest":
        result.reverse();
        break;

      case "price-low-high":
        result.sort((a, b) => a.price - b.price);
        break;

      case "price-high-low":
        result.sort((a, b) => b.price - a.price);
        break;

      case "rating":
        result.sort((a, b) => (b.rating ?? 0) - (a.rating ?? 0));
        break;

      case "featured":
      default:
        result.sort(
          (a, b) => Number(Boolean(b.featured)) - Number(Boolean(a.featured)),
        );
        break;
    }

    return result;
  }, [filters, sortBy]);

  const handleFilterClick = () => {
    setIsFilterOpen(true);
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
        <ProductsHeader productCount={filteredProducts.length} />

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

          {/* Products */}
          <section className="min-w-0">
            <ProductsGrid products={filteredProducts} />
          </section>
        </div>
      </div>

      {/* Mobile / Tablet Filters */}
      <Dialog open={isFilterOpen} onOpenChange={setIsFilterOpen}>
        <Dialog.Content size="md">
          <Dialog.Header>
            <Dialog.Title>Filter Products</Dialog.Title>

            <Dialog.Description>
              Narrow down products based on your preferences.
            </Dialog.Description>
          </Dialog.Header>

          <Dialog.Body>
            <ProductFilters
              filters={filters}
              onChange={setFilters}
              onClear={handleClearFilters}
            />
          </Dialog.Body>

          <Dialog.Footer>
            <Button
              type="button"
              variant="outline"
              onClick={handleClearFilters}
            >
              Clear
            </Button>

            <Button type="button" onClick={() => setIsFilterOpen(false)}>
              Show {filteredProducts.length} products
            </Button>
          </Dialog.Footer>
        </Dialog.Content>
      </Dialog>
    </main>
  );
};

export default ProductsPage;
