export interface ActiveFilterItem {
  id: string;

  label: string;

  value?: string;
}

export interface ActiveFiltersProps {
  filters: ActiveFilterItem[];

  onRemove?: (filter: ActiveFilterItem) => void;

  onClearAll?: () => void;

  clearLabel?: string;

  className?: string;
}
