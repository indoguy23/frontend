import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";

import Button from "@/components/ui/Button";
import Dialog from "@/components/ui/Dialog";

import { ProductFilters } from "../components/ProductFilters";
import { ProductsGrid } from "../components/ProductsGrid";
import { ProductsHeader } from "../components/ProductsHeader";
import { ProductsPagination } from "../components/ProductsPagination";
import {
  ProductsToolbar,
  type ProductSortValue,
} from "../components/ProductsToolbar";

import { PRODUCTS } from "../data/products.data";

import type { ProductFiltersState } from "../types/products.types";

const INITIAL_FILTERS: ProductFiltersState = {
  categories: [],
  minPrice: "",
  maxPrice: "",
  rating: null,
  availability: [],
};

const PRODUCTS_PER_PAGE = 6;

const ProductsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchTerm = searchParams.get("search")?.trim() ?? "";

  return (
    <ProductsPageContent
      key={searchTerm}
      searchTerm={searchTerm}
      searchParams={searchParams}
      setSearchParams={setSearchParams}
    />
  );
};

type ProductsPageContentProps = {
  searchTerm: string;
  searchParams: URLSearchParams;
  setSearchParams: ReturnType<typeof useSearchParams>[1];
};

const ProductsPageContent = ({
  searchTerm,
  searchParams,
  setSearchParams,
}: ProductsPageContentProps) => {
  const [sortBy, setSortBy] = useState<ProductSortValue>("featured");
  const [filters, setFilters] = useState<ProductFiltersState>(INITIAL_FILTERS);
  const [draftFilters, setDraftFilters] =
    useState<ProductFiltersState>(INITIAL_FILTERS);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const filteredProducts = useMemo(() => {
    let result = [...PRODUCTS];

    if (searchTerm) {
      const normalizedSearchTerm = searchTerm.toLowerCase();

      result = result.filter((product) => {
        const searchableValues = [
          product.name,
          product.category,
          product.description,
          product.seller?.name,
        ];

        return searchableValues.some((value) =>
          value?.toLowerCase().includes(normalizedSearchTerm),
        );
      });
    }

    if (filters.categories.length > 0) {
      result = result.filter((product) =>
        filters.categories.includes(product.category),
      );
    }

    if (filters.minPrice !== "") {
      const minPrice = Number(filters.minPrice);
      result = result.filter((product) => product.price >= minPrice);
    }

    if (filters.maxPrice !== "") {
      const maxPrice = Number(filters.maxPrice);
      result = result.filter((product) => product.price <= maxPrice);
    }

    if (filters.rating !== null) {
      result = result.filter(
        (product) => (product.rating ?? 0) >= filters.rating!,
      );
    }

    if (filters.availability.length > 0) {
      result = result.filter((product) => {
        const isInStock = product.stock > 0;

        return (
          (filters.availability.includes("in-stock") && isInStock) ||
          (filters.availability.includes("out-of-stock") && !isInStock)
        );
      });
    }

    switch (sortBy) {
      case "newest":
        // Add a createdAt field to products to support newest-first sorting.
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
  }, [filters, sortBy, searchTerm]);

  const totalPages = Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE);
  const safeCurrentPage = Math.min(currentPage, Math.max(totalPages, 1));

  const paginatedProducts = useMemo(() => {
    const startIndex = (safeCurrentPage - 1) * PRODUCTS_PER_PAGE;

    return filteredProducts.slice(startIndex, startIndex + PRODUCTS_PER_PAGE);
  }, [filteredProducts, safeCurrentPage]);

  const handleFilterClick = () => {
    setDraftFilters({
      ...filters,
      categories: [...filters.categories],
      availability: [...filters.availability],
    });

    setIsFilterOpen(true);
  };

  const handleDraftFiltersChange = (updatedFilters: ProductFiltersState) => {
    setDraftFilters(updatedFilters);
  };

  const handleApplyFilters = () => {
    setFilters({
      ...draftFilters,
      categories: [...draftFilters.categories],
      availability: [...draftFilters.availability],
    });

    setCurrentPage(1);
    setIsFilterOpen(false);
  };

  const handleClearDraftFilters = () => {
    setDraftFilters({
      ...INITIAL_FILTERS,
      categories: [],
      availability: [],
    });
  };

  const handleFiltersChange = (updatedFilters: ProductFiltersState) => {
    setFilters(updatedFilters);
    setCurrentPage(1);
  };

  const handleClearFilters = () => {
    setFilters({
      ...INITIAL_FILTERS,
      categories: [],
      availability: [],
    });

    setCurrentPage(1);
  };

  const handleSortChange = (value: ProductSortValue) => {
    setSortBy(value);
    setCurrentPage(1);
  };

  const handleClearSearch = () => {
    const updatedParams = new URLSearchParams(searchParams);
    updatedParams.delete("search");

    setSearchParams(updatedParams, { replace: true });
  };

  const handleClearAll = () => {
    handleClearFilters();
    handleClearSearch();
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
          onSortChange={handleSortChange}
          onFilterClick={handleFilterClick}
        />

        <div className="mt-6 grid gap-6 lg:grid-cols-[240px_minmax(0,1fr)]">
          <aside className="hidden lg:block">
            <ProductFilters
              filters={filters}
              onChange={handleFiltersChange}
              onClear={handleClearFilters}
            />
          </aside>

          <section className="min-w-0">
            <ProductsGrid
              products={paginatedProducts}
              onClearFilters={handleClearAll}
            />

            <ProductsPagination
              currentPage={safeCurrentPage}
              totalPages={totalPages}
              totalItems={filteredProducts.length}
              pageSize={PRODUCTS_PER_PAGE}
              onPageChange={setCurrentPage}
            />
          </section>
        </div>
      </div>

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
              filters={draftFilters}
              onChange={handleDraftFiltersChange}
              onClear={handleClearDraftFilters}
            />
          </Dialog.Body>

          <Dialog.Footer>
            <Button
              type="button"
              variant="outline"
              onClick={handleClearDraftFilters}
            >
              Clear
            </Button>

            <Button type="button" onClick={handleApplyFilters}>
              Show {filteredProducts.length} products
            </Button>
          </Dialog.Footer>
        </Dialog.Content>
      </Dialog>
    </main>
  );
};

export default ProductsPage;
