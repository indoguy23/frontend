import type { ChangeEvent, HTMLAttributes } from "react";
import type { VariantProps } from "class-variance-authority";
import type { searchBarVariants } from "./SearchBar.styles";

export interface SearchBarProps
  extends
    Omit<HTMLAttributes<HTMLDivElement>, "onChange">,
    VariantProps<typeof searchBarVariants> {
  value: string;
  onChange: (value: string) => void;

  onSearch?: (value: string) => void;

  placeholder?: string;

  loading?: boolean;

  clearable?: boolean;

  disabled?: boolean;

  debounceMs?: number;

  inputName?: string;

  inputId?: string;

  ariaLabel?: string;
}

export type SearchInputChangeEvent = ChangeEvent<HTMLInputElement>;
