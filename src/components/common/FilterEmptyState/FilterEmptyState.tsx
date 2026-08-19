import { SearchX } from "lucide-react";

import { cn } from "@/utils/cn";

import { filterEmptyStateStyles } from "./FilterEmptyState.styles";
import type { FilterEmptyStateProps } from "./FilterEmptyState.types";

const FilterEmptyState = ({
  title = "No matching results",
  description = "Try adjusting your search or filters to find what you're looking for.",
  searchTerm,
  activeFilterCount = 0,
  primaryAction,
  secondaryAction,
  className,
}: FilterEmptyStateProps) => {
  return (
    <div className={cn(filterEmptyStateStyles.root, className)}>
      <div className={filterEmptyStateStyles.iconWrapper}>
        <SearchX aria-hidden="true" className="h-6 w-6" />
      </div>

      <h3 className={filterEmptyStateStyles.title}>{title}</h3>

      <p className={filterEmptyStateStyles.description}>{description}</p>

      {(searchTerm || activeFilterCount > 0) && (
        <div className={filterEmptyStateStyles.meta}>
          {searchTerm && (
            <span className={filterEmptyStateStyles.badge}>
              Search: “{searchTerm}”
            </span>
          )}

          {activeFilterCount > 0 && (
            <span className={filterEmptyStateStyles.badge}>
              {activeFilterCount}{" "}
              {activeFilterCount === 1 ? "filter" : "filters"} active
            </span>
          )}
        </div>
      )}

      {(primaryAction || secondaryAction) && (
        <div className={filterEmptyStateStyles.actions}>
          {primaryAction}

          {secondaryAction}
        </div>
      )}
    </div>
  );
};

export default FilterEmptyState;
