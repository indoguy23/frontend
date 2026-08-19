import { useId } from "react";

import { ArrowUpDown } from "lucide-react";

import { cn } from "@/utils/cn";

import { sortControlStyles } from "./SortControl.styles";
import type { SortControlProps } from "./SortControl.types";

const SortControl = ({
  value,
  options,
  onChange,
  label = "Sort by",
  disabled = false,
  className,
}: SortControlProps) => {
  const inputId = useId();

  return (
    <div className={cn(sortControlStyles.root, className)}>
      <ArrowUpDown
        aria-hidden="true"
        className="h-4 w-4 shrink-0 text-muted-foreground"
      />

      <label htmlFor={inputId} className={sortControlStyles.label}>
        {label}
      </label>

      <select
        id={inputId}
        value={value}
        disabled={disabled}
        className={sortControlStyles.select}
        onChange={(event) => onChange(event.target.value)}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SortControl;
