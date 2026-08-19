import { RotateCcw } from "lucide-react";

import Button from "@/components/ui/Button";
import FormField from "@/components/ui/form/FormField";
import Input from "@/components/ui/form/Input";
import Select from "@/components/ui/form/Select";
import {
  PRODUCT_AVAILABILITY_OPTIONS,
  PRODUCT_CATEGORY_FILTER_OPTIONS,
  PRODUCT_RATING_OPTIONS,
} from "@/constants/selectOptions";
import { cn } from "@/utils/cn";

import { productFiltersStyles } from "./ProductFilters.styles";
import type { ProductFiltersProps } from "./ProductFilters.types";

const ProductFilters = ({
  value,
  onChange,
  onReset,
  className,
}: ProductFiltersProps) => {
  const updateField = <TKey extends keyof typeof value>(
    key: TKey,
    fieldValue: (typeof value)[TKey],
  ) => {
    onChange({
      ...value,
      [key]: fieldValue,
    });
  };

  const hasFilters =
    Boolean(value.category) ||
    Boolean(value.minPrice) ||
    Boolean(value.maxPrice) ||
    Boolean(value.rating) ||
    Boolean(value.availability);

  return (
    <aside className={cn(productFiltersStyles.container, className)}>
      <div className={productFiltersStyles.header}>
        <h2 className={productFiltersStyles.title}>Filters</h2>

        {hasFilters && (
          <Button
            size="sm"
            variant="ghost"
            leftIcon={<RotateCcw className="h-4 w-4" />}
            onClick={onReset}
          >
            Reset
          </Button>
        )}
      </div>

      <div className={productFiltersStyles.content}>
        <FormField label="Category" htmlFor="product-filter-category">
          <Select
            id="product-filter-category"
            value={value.category}
            options={PRODUCT_CATEGORY_FILTER_OPTIONS}
            onChange={(event) => updateField("category", event.target.value)}
          />
        </FormField>

        <div>
          <p className="mb-2 text-sm font-medium text-foreground">
            Price Range
          </p>

          <div className={productFiltersStyles.priceGrid}>
            <FormField label="Min" htmlFor="product-filter-min-price">
              <Input
                id="product-filter-min-price"
                type="number"
                min="0"
                value={value.minPrice}
                placeholder="₹0"
                onChange={(event) =>
                  updateField("minPrice", event.target.value)
                }
              />
            </FormField>

            <FormField label="Max" htmlFor="product-filter-max-price">
              <Input
                id="product-filter-max-price"
                type="number"
                min="0"
                value={value.maxPrice}
                placeholder="₹10000"
                onChange={(event) =>
                  updateField("maxPrice", event.target.value)
                }
              />
            </FormField>
          </div>
        </div>

        <FormField label="Rating" htmlFor="product-filter-rating">
          <Select
            id="product-filter-rating"
            value={value.rating}
            options={PRODUCT_RATING_OPTIONS}
            onChange={(event) => updateField("rating", event.target.value)}
          />
        </FormField>

        <FormField label="Availability" htmlFor="product-filter-availability">
          <Select
            id="product-filter-availability"
            value={value.availability}
            options={PRODUCT_AVAILABILITY_OPTIONS}
            onChange={(event) =>
              updateField("availability", event.target.value)
            }
          />
        </FormField>
      </div>
    </aside>
  );
};

export default ProductFilters;
