import { cn } from "@/utils/cn";

import { statusBadgeStyles } from "./StatusBadge.styles";
import type { StatusBadgeProps, StatusBadgeStatus } from "./StatusBadge.types";

type StatusVariant = "success" | "warning" | "danger" | "neutral" | "info";

const STATUS_CONFIG: Record<
  StatusBadgeStatus,
  {
    label: string;
    variant: StatusVariant;
  }
> = {
  active: {
    label: "Active",
    variant: "success",
  },

  inactive: {
    label: "Inactive",
    variant: "neutral",
  },

  pending: {
    label: "Pending",
    variant: "warning",
  },

  processing: {
    label: "Processing",
    variant: "info",
  },

  completed: {
    label: "Completed",
    variant: "success",
  },

  success: {
    label: "Success",
    variant: "success",
  },

  failed: {
    label: "Failed",
    variant: "danger",
  },

  cancelled: {
    label: "Cancelled",
    variant: "danger",
  },

  refunded: {
    label: "Refunded",
    variant: "info",
  },

  draft: {
    label: "Draft",
    variant: "neutral",
  },
};

const VARIANT_CLASS: Record<StatusVariant, string> = {
  success: statusBadgeStyles.success,
  warning: statusBadgeStyles.warning,
  danger: statusBadgeStyles.danger,
  neutral: statusBadgeStyles.neutral,
  info: statusBadgeStyles.info,
};

const DOT_CLASS: Record<StatusVariant, string> = {
  success: statusBadgeStyles.successDot,
  warning: statusBadgeStyles.warningDot,
  danger: statusBadgeStyles.dangerDot,
  neutral: statusBadgeStyles.neutralDot,
  info: statusBadgeStyles.infoDot,
};

const StatusBadge = ({
  status,
  label,
  showDot = true,
  className,
}: StatusBadgeProps) => {
  const config = STATUS_CONFIG[status];

  return (
    <span
      className={cn(
        statusBadgeStyles.base,
        VARIANT_CLASS[config.variant],
        className,
      )}
    >
      {showDot && (
        <span
          aria-hidden="true"
          className={cn(statusBadgeStyles.dot, DOT_CLASS[config.variant])}
        />
      )}

      {label ?? config.label}
    </span>
  );
};

export default StatusBadge;
