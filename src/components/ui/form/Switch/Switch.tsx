import { forwardRef, useId } from "react";

import * as SwitchPrimitive from "@radix-ui/react-switch";

import { cn } from "@/utils/cn";

import { switchStyles } from "./Switch.styles";
import type { SwitchProps } from "./Switch.types";

const Switch = forwardRef<
  React.ElementRef<typeof SwitchPrimitive.Root>,
  SwitchProps
>(
  (
    { id, label, description, invalid = false, disabled, className, ...props },
    ref,
  ) => {
    const generatedId = useId();
    const switchId = id ?? generatedId;

    const descriptionId = description ? `${switchId}-description` : undefined;

    return (
      <div className={switchStyles.container}>
        {(label || description) && (
          <div className={switchStyles.content}>
            {label && (
              <label
                htmlFor={switchId}
                className={cn(
                  switchStyles.label,
                  disabled && switchStyles.disabledLabel,
                )}
              >
                {label}
              </label>
            )}

            {description && (
              <p id={descriptionId} className={switchStyles.description}>
                {description}
              </p>
            )}
          </div>
        )}

        <SwitchPrimitive.Root
          ref={ref}
          id={switchId}
          disabled={disabled}
          aria-invalid={invalid || undefined}
          aria-describedby={descriptionId}
          className={cn(
            switchStyles.root,
            invalid && switchStyles.invalidRoot,
            className,
          )}
          {...props}
        >
          <SwitchPrimitive.Thumb className={switchStyles.thumb} />
        </SwitchPrimitive.Root>
      </div>
    );
  },
);

Switch.displayName = "Switch";

export default Switch;
