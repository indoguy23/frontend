export interface ProductFiltersValue {
  category: string;
  minPrice: string;
  maxPrice: string;
  rating: string;
  availability: string;
}

export interface ProductFiltersProps {
  value: ProductFiltersValue;

  onChange: (value: ProductFiltersValue) => void;

  onReset?: () => void;

  className?: string;
}
