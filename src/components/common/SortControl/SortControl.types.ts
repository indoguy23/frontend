export interface SortOption {
  value: string;
  label: string;
}

export interface SortControlProps {
  value: string;

  options: SortOption[];

  onChange: (value: string) => void;

  label?: string;

  disabled?: boolean;

  className?: string;
}
