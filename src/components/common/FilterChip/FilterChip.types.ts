export interface FilterChipProps {
  label: string;

  value?: string;

  onRemove?: () => void;

  disabled?: boolean;

  className?: string;
}
