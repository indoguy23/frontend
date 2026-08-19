export type StatusBadgeStatus =
  | "active"
  | "inactive"
  | "pending"
  | "processing"
  | "completed"
  | "success"
  | "failed"
  | "cancelled"
  | "refunded"
  | "draft";

export interface StatusBadgeProps {
  status: StatusBadgeStatus;

  label?: string;

  showDot?: boolean;

  className?: string;
}
