import FilterChip from "@/components/common/FilterChip";
import { cn } from "@/utils/cn";

import { activeFiltersStyles } from "./ActiveFilters.styles";
import type { ActiveFiltersProps } from "./ActiveFilters.types";

const ActiveFilters = ({
  filters,
  onRemove,
  onClearAll,
  clearLabel = "Clear all",
  className,
}: ActiveFiltersProps) => {
  if (filters.length === 0) {
    return null;
  }

  return (
    <div
      className={cn(activeFiltersStyles.root, className)}
      aria-label="Active filters"
    >
      {filters.map((filter) => (
        <FilterChip
          key={filter.id}
          label={filter.label}
          value={filter.value}
          onRemove={onRemove ? () => onRemove(filter) : undefined}
        />
      ))}

      {onClearAll && filters.length > 1 && (
        <button
          type="button"
          className={activeFiltersStyles.clearButton}
          onClick={onClearAll}
        >
          {clearLabel}
        </button>
      )}
    </div>
  );
};

export default ActiveFilters;
