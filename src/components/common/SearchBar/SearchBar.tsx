import { useEffect, useId } from "react";

import { LoaderCircle, Search, X } from "lucide-react";

import useDebounce from "@/hooks/useDebounce";
import { cn } from "@/utils/cn";

import { searchBarStyles, searchBarVariants } from "./SearchBar.styles";
import type { SearchBarProps } from "./SearchBar.types";

const SearchBar = ({
  value,
  onChange,
  onSearch,
  placeholder = "Search...",
  loading = false,
  clearable = true,
  disabled = false,
  debounceMs = 300,
  inputName = "search",
  inputId,
  ariaLabel = "Search",
  variant,
  size = "md",
  className,
  ...props
}: SearchBarProps) => {
  const generatedId = useId();

  const resolvedInputId = inputId ?? generatedId;

  const debouncedValue = useDebounce(value, debounceMs);

  useEffect(() => {
    onSearch?.(debouncedValue);
  }, [debouncedValue, onSearch]);

  const handleClear = () => {
    onChange("");
  };

  return (
    <div
      className={cn(
        searchBarVariants({
          variant,
          size,
          disabled,
        }),
        className,
      )}
      {...props}
    >
      <Search
        aria-hidden="true"
        className={cn(
          searchBarStyles.searchIcon,
          size === "lg" ? "h-5 w-5" : "h-4 w-4",
        )}
      />

      <input
        id={resolvedInputId}
        name={inputName}
        type="search"
        value={value}
        disabled={disabled}
        placeholder={placeholder}
        aria-label={ariaLabel}
        onChange={(event) => onChange(event.target.value)}
        className={cn(
          searchBarStyles.input,
          searchBarStyles.inputSize[size ?? "md"],
          (loading || (clearable && value)) && "pr-20",
        )}
      />

      <div className={searchBarStyles.actions}>
        {loading && (
          <LoaderCircle
            aria-hidden="true"
            className="h-4 w-4 animate-spin text-muted-foreground"
          />
        )}

        {clearable && value && !disabled && (
          <button
            type="button"
            aria-label="Clear search"
            title="Clear search"
            onClick={handleClear}
            className={searchBarStyles.actionButton}
          >
            <X aria-hidden="true" className="h-4 w-4" />
          </button>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
