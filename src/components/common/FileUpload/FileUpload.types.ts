export interface FileUploadProps {
  value?: File | null;

  onChange: (file: File | null) => void;

  accept?: string;

  maxSize?: number;

  disabled?: boolean;

  loading?: boolean;

  label?: string;

  helperText?: string;

  error?: string;

  showPreview?: boolean;

  className?: string;
}
