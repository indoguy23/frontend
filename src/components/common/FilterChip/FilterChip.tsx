import { X } from "lucide-react";

import { cn } from "@/utils/cn";

import { filterChipStyles } from "./FilterChip.styles";
import type { FilterChipProps } from "./FilterChip.types";

const FilterChip = ({
  label,
  value,
  onRemove,
  disabled = false,
  className,
}: FilterChipProps) => {
  return (
    <span className={cn(filterChipStyles.root, className)}>
      <span className={filterChipStyles.label}>{label}</span>

      {value && <span className={filterChipStyles.value}>{value}</span>}

      {onRemove && (
        <button
          type="button"
          aria-label={`Remove ${label}${value ? ` ${value}` : ""} filter`}
          disabled={disabled}
          className={filterChipStyles.removeButton}
          onClick={onRemove}
        >
          <X aria-hidden="true" className="h-3.5 w-3.5" />
        </button>
      )}
    </span>
  );
};

export default FilterChip;
