import {
  AVAILABILITY_OPTIONS,
  PRODUCT_CATEGORIES,
  RATING_OPTIONS,
} from "../../data/productFilters.data";

import type { ProductFiltersState } from "../../types/products.types";

import { productFiltersStyles } from "./ProductFilters.styles";

interface ProductFiltersProps {
  filters: ProductFiltersState;
  onChange: (filters: ProductFiltersState) => void;
  onClear: () => void;
}

const ProductFilters = ({
  filters,
  onChange,
  onClear,
}: ProductFiltersProps) => {
  const handleCategoryChange = (category: string) => {
    const exists = filters.categories.includes(category);

    onChange({
      ...filters,
      categories: exists
        ? filters.categories.filter((item) => item !== category)
        : [...filters.categories, category],
    });
  };

  const handleAvailabilityChange = (availability: string) => {
    const exists = filters.availability.includes(availability);

    onChange({
      ...filters,
      availability: exists
        ? filters.availability.filter((item) => item !== availability)
        : [...filters.availability, availability],
    });
  };

  return (
    <div className={productFiltersStyles.root}>
      <div className={productFiltersStyles.header}>
        <h2 className={productFiltersStyles.title}>Filters</h2>

        <button
          type="button"
          className={productFiltersStyles.clearButton}
          onClick={onClear}
        >
          Clear all
        </button>
      </div>

      {/* Categories */}
      <div className={productFiltersStyles.section}>
        <h3 className={productFiltersStyles.sectionTitle}>Category</h3>

        <div className={productFiltersStyles.options}>
          {PRODUCT_CATEGORIES.map((category) => (
            <label key={category.value} className={productFiltersStyles.option}>
              <input
                type="checkbox"
                checked={filters.categories.includes(category.value)}
                onChange={() => handleCategoryChange(category.value)}
                className={productFiltersStyles.checkbox}
              />

              <span>{category.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Price */}
      <div className={productFiltersStyles.section}>
        <h3 className={productFiltersStyles.sectionTitle}>Price Range</h3>

        <div className={productFiltersStyles.priceInputs}>
          <input
            type="number"
            min="0"
            placeholder="Min"
            value={filters.minPrice}
            onChange={(event) =>
              onChange({
                ...filters,
                minPrice: event.target.value,
              })
            }
            className={productFiltersStyles.priceInput}
            aria-label="Minimum price"
          />

          <input
            type="number"
            min="0"
            placeholder="Max"
            value={filters.maxPrice}
            onChange={(event) =>
              onChange({
                ...filters,
                maxPrice: event.target.value,
              })
            }
            className={productFiltersStyles.priceInput}
            aria-label="Maximum price"
          />
        </div>
      </div>

      {/* Rating */}
      <div className={productFiltersStyles.section}>
        <h3 className={productFiltersStyles.sectionTitle}>Customer Rating</h3>

        <div className={productFiltersStyles.options}>
          {RATING_OPTIONS.map((option) => (
            <label key={option.value} className={productFiltersStyles.option}>
              <input
                type="radio"
                name="product-rating"
                checked={filters.rating === option.value}
                onChange={() =>
                  onChange({
                    ...filters,
                    rating: option.value,
                  })
                }
                className={productFiltersStyles.radio}
              />

              <span>{option.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Availability */}
      <div className={productFiltersStyles.section}>
        <h3 className={productFiltersStyles.sectionTitle}>Availability</h3>

        <div className={productFiltersStyles.options}>
          {AVAILABILITY_OPTIONS.map((option) => (
            <label key={option.value} className={productFiltersStyles.option}>
              <input
                type="checkbox"
                checked={filters.availability.includes(option.value)}
                onChange={() => handleAvailabilityChange(option.value)}
                className={productFiltersStyles.checkbox}
              />

              <span>{option.label}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductFilters;
