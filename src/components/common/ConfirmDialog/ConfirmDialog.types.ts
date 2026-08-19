export type ConfirmDialogVariant = "default" | "destructive";

export interface ConfirmDialogProps {
  open: boolean;

  onOpenChange: (open: boolean) => void;

  title: string;

  description?: string;

  confirmLabel?: string;

  cancelLabel?: string;

  variant?: ConfirmDialogVariant;

  loading?: boolean;

  onConfirm: () => void;
}
