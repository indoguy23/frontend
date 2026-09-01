export interface ProductFiltersState {
  categories: string[];
  minPrice: string;
  maxPrice: string;
  rating: number | null;
  availability: string[];
}
