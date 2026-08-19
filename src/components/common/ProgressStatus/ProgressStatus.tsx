import { cn } from "@/utils/cn";

import { progressStatusStyles } from "./ProgressStatus.styles";
import type {
  ProgressStatusProps,
  ProgressStatusVariant,
} from "./ProgressStatus.types";

const VARIANT_CLASS: Record<ProgressStatusVariant, string> = {
  default: progressStatusStyles.default,
  success: progressStatusStyles.success,
  warning: progressStatusStyles.warning,
  danger: progressStatusStyles.danger,
};

const ProgressStatus = ({
  value,
  label,
  description,
  showValue = true,
  variant = "default",
  className,
}: ProgressStatusProps) => {
  const safeValue = Math.min(Math.max(value, 0), 100);

  return (
    <div className={cn(progressStatusStyles.root, className)}>
      {(label || showValue) && (
        <div className={progressStatusStyles.header}>
          {label && <p className={progressStatusStyles.label}>{label}</p>}

          {showValue && (
            <span className={progressStatusStyles.value}>
              {Math.round(safeValue)}%
            </span>
          )}
        </div>
      )}

      {description && (
        <p className={progressStatusStyles.description}>{description}</p>
      )}

      <div
        className={progressStatusStyles.track}
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(safeValue)}
        aria-label={label ?? "Progress"}
      >
        <div
          className={cn(progressStatusStyles.bar, VARIANT_CLASS[variant])}
          style={{
            width: `${safeValue}%`,
          }}
        />
      </div>
    </div>
  );
};

export default ProgressStatus;
