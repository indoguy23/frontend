import { forwardRef } from "react";

import { ChevronDown } from "lucide-react";

import { cn } from "@/utils/cn";

import { selectIconStyles, selectVariants } from "./Select.styles";
import type { SelectProps } from "./Select.types";

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      options,
      placeholder = "Select an option",
      size,
      invalid = false,
      fullWidth = true,
      disabled,
      className,
      value,
      defaultValue,
      ...props
    },
    ref,
  ) => {
    const hasControlledValue = value !== undefined;

    return (
      <div className={cn("relative", fullWidth ? "w-full" : "w-fit")}>
        <select
          ref={ref}
          value={value}
          defaultValue={hasControlledValue ? undefined : (defaultValue ?? "")}
          disabled={disabled}
          aria-invalid={invalid || undefined}
          className={cn(
            selectVariants({
              size,
              invalid,
              fullWidth,
            }),
            className,
          )}
          {...props}
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}

          {options.map((option) => (
            <option
              key={option.value}
              value={option.value}
              disabled={option.disabled}
            >
              {option.label}
            </option>
          ))}
        </select>

        <ChevronDown aria-hidden="true" className={selectIconStyles} />
      </div>
    );
  },
);

Select.displayName = "Select";

export default Select;
