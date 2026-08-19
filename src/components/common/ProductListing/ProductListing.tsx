import { useMemo, useState } from "react";

import ProductCard from "@/components/common/ProductCard";
import type { ProductCardData } from "@/components/common/ProductCard";
import ProductFilters from "@/components/common/ProductFilters";
import type { ProductFiltersValue } from "@/components/common/ProductFilters";
import Pagination from "@/components/common/Pagination";
import SearchBar from "@/components/common/SearchBar";
import EmptyState from "@/components/ui/EmptyState";
import Select from "@/components/ui/form/Select";
import { PRODUCT_SORT_OPTIONS } from "@/constants/selectOptions";
import { cn } from "@/utils/cn";

import { productListingStyles } from "./ProductListing.styles";
import type {
  ProductListingProps,
  ProductSortOption,
} from "./ProductListing.types";

const DEFAULT_FILTERS: ProductFiltersValue = {
  category: "",
  minPrice: "",
  maxPrice: "",
  rating: "",
  availability: "",
};

const ProductListing = ({
  products,
  wishlistIds = [],
  onAddToCart,
  onToggleWishlist,
  onViewDetails,
  initialFilters,
  initialSort = "featured",
  pageSize = 6,
  loading = false,
  className,
}: ProductListingProps) => {
  const [search, setSearch] = useState("");

  const [filters, setFilters] = useState<ProductFiltersValue>({
    ...DEFAULT_FILTERS,
    ...initialFilters,
  });

  const [sort, setSort] = useState<ProductSortOption>(initialSort);

  const [currentPage, setCurrentPage] = useState(1);

  const filteredProducts = useMemo(() => {
    const normalizedSearch = search.trim().toLowerCase();

    const minPrice = filters.minPrice ? Number(filters.minPrice) : null;

    const maxPrice = filters.maxPrice ? Number(filters.maxPrice) : null;

    const minimumRating = filters.rating ? Number(filters.rating) : null;

    return products.filter((product) => {
      const matchesSearch =
        !normalizedSearch ||
        product.name.toLowerCase().includes(normalizedSearch) ||
        product.category.toLowerCase().includes(normalizedSearch);

      const matchesCategory =
        !filters.category || product.category === filters.category;

      const matchesMinPrice = minPrice === null || product.price >= minPrice;

      const matchesMaxPrice = maxPrice === null || product.price <= maxPrice;

      const matchesRating =
        minimumRating === null || (product.rating ?? 0) >= minimumRating;

      const matchesAvailability =
        !filters.availability ||
        (filters.availability === "in-stock"
          ? product.stock > 0
          : product.stock <= 0);

      return (
        matchesSearch &&
        matchesCategory &&
        matchesMinPrice &&
        matchesMaxPrice &&
        matchesRating &&
        matchesAvailability
      );
    });
  }, [products, search, filters]);

  const sortedProducts = useMemo(() => {
    const result = [...filteredProducts];

    switch (sort) {
      case "price-low-high":
        return result.sort((a, b) => a.price - b.price);

      case "price-high-low":
        return result.sort((a, b) => b.price - a.price);

      case "rating":
        return result.sort((a, b) => (b.rating ?? 0) - (a.rating ?? 0));

      case "featured":
      default:
        return result.sort(
          (a, b) => Number(Boolean(b.featured)) - Number(Boolean(a.featured)),
        );
    }
  }, [filteredProducts, sort]);

  const totalPages = Math.max(1, Math.ceil(sortedProducts.length / pageSize));

  const safeCurrentPage = Math.min(currentPage, totalPages);

  const startIndex = (safeCurrentPage - 1) * pageSize;

  const paginatedProducts = sortedProducts.slice(
    startIndex,
    startIndex + pageSize,
  );

  const handleSearchChange = (value: string) => {
    setSearch(value);
    setCurrentPage(1);
  };

  const handleFilterChange = (value: ProductFiltersValue) => {
    setFilters(value);
    setCurrentPage(1);
  };

  const handleResetFilters = () => {
    setFilters(DEFAULT_FILTERS);
    setCurrentPage(1);
  };

  const handleSortChange = (value: string) => {
    setSort(value as ProductSortOption);

    setCurrentPage(1);
  };

  return (
    <section className={cn(productListingStyles.container, className)}>
      <div className={productListingStyles.toolbar}>
        <SearchBar
          value={search}
          onChange={handleSearchChange}
          placeholder="Search products..."
          className="w-full lg:max-w-md"
        />

        <div className={productListingStyles.controls}>
          <span className="whitespace-nowrap text-sm text-muted-foreground">
            Sort by
          </span>

          <div className="w-full sm:w-56">
            <Select
              value={sort}
              options={PRODUCT_SORT_OPTIONS}
              onChange={(event) => handleSortChange(event.target.value)}
            />
          </div>
        </div>
      </div>

      <div className={productListingStyles.content}>
        <ProductFilters
          value={filters}
          onChange={handleFilterChange}
          onReset={handleResetFilters}
        />

        <div className={productListingStyles.resultsArea}>
          <p className={productListingStyles.resultInfo}>
            Showing{" "}
            <strong className="text-foreground">{sortedProducts.length}</strong>{" "}
            {sortedProducts.length === 1 ? "product" : "products"}
          </p>

          {loading ? (
            <div className={productListingStyles.grid}>
              {Array.from({
                length: pageSize,
              }).map((_, index) => (
                <ProductCard
                  key={index}
                  product={
                    products[0] ??
                    ({
                      id: "loading",
                      name: "",
                      slug: "",
                      image: "",
                      category: "",
                      price: 0,
                      stock: 0,
                    } satisfies ProductCardData)
                  }
                  loading
                />
              ))}
            </div>
          ) : paginatedProducts.length > 0 ? (
            <div className={productListingStyles.grid}>
              {paginatedProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  isWishlisted={wishlistIds.includes(product.id)}
                  onAddToCart={onAddToCart}
                  onToggleWishlist={onToggleWishlist}
                  onViewDetails={onViewDetails}
                />
              ))}
            </div>
          ) : (
            <EmptyState
              variant="bordered"
              title="No products found"
              description="Try changing your search or filters to find more products."
            />
          )}

          {!loading && sortedProducts.length > pageSize && (
            <div className={productListingStyles.pagination}>
              <Pagination
                currentPage={safeCurrentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProductListing;
