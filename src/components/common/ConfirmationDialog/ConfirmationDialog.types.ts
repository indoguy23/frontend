export type ConfirmationDialogVariant = "default" | "danger";

export interface ConfirmationDialogProps {
  open: boolean;

  onOpenChange: (open: boolean) => void;

  title: string;

  description?: string;

  confirmLabel?: string;

  cancelLabel?: string;

  variant?: ConfirmationDialogVariant;

  loading?: boolean;

  disabled?: boolean;

  onConfirm: () => void;
}
