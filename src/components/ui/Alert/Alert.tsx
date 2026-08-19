import { forwardRef } from "react";

import {
  AlertCircle,
  AlertTriangle,
  CheckCircle2,
  Info,
  X,
} from "lucide-react";

import { cn } from "@/utils/cn";

import { alertStyles, alertVariants } from "./Alert.styles";
import type { AlertProps } from "./Alert.types";

const defaultIcons = {
  default: AlertCircle,
  info: Info,
  success: CheckCircle2,
  warning: AlertTriangle,
  destructive: AlertCircle,
} as const;

const Alert = forwardRef<HTMLDivElement, AlertProps>(
  (
    {
      title,
      description,
      icon,
      action,
      dismissible = false,
      onDismiss,
      variant = "default",
      className,
      children,
      role,
      ...props
    },
    ref,
  ) => {
    const Icon = defaultIcons[variant ?? "default"];

    const resolvedRole =
      role ?? (variant === "destructive" ? "alert" : "status");

    return (
      <div
        ref={ref}
        role={resolvedRole}
        className={cn(alertVariants({ variant }), className)}
        {...props}
      >
        <div aria-hidden="true" className={alertStyles.icon}>
          {icon ?? <Icon className="h-5 w-5" />}
        </div>

        <div className={alertStyles.content}>
          {title && <div className={alertStyles.title}>{title}</div>}

          {description && (
            <div className={alertStyles.description}>{description}</div>
          )}

          {children}
        </div>

        {action && <div className={alertStyles.action}>{action}</div>}

        {dismissible && (
          <button
            type="button"
            aria-label="Dismiss alert"
            className={alertStyles.dismissButton}
            onClick={onDismiss}
          >
            <X aria-hidden="true" className="h-4 w-4" />
          </button>
        )}
      </div>
    );
  },
);

Alert.displayName = "Alert";

export default Alert;
