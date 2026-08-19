import { forwardRef, useEffect, useId, useRef } from "react";

import { Check } from "lucide-react";

import { cn } from "@/utils/cn";

import { checkboxStyles } from "./Checkbox.styles";
import type { CheckboxProps } from "./Checkbox.types";

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      id,
      label,
      description,
      invalid = false,
      indeterminate = false,
      disabled,
      className,
      ...props
    },
    forwardedRef,
  ) => {
    const generatedId = useId();
    const checkboxId = id ?? generatedId;

    const internalRef = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
      if (internalRef.current) {
        internalRef.current.indeterminate = indeterminate;
      }
    }, [indeterminate]);

    const setRefs = (element: HTMLInputElement | null) => {
      internalRef.current = element;

      if (typeof forwardedRef === "function") {
        forwardedRef(element);
        return;
      }

      if (forwardedRef) {
        forwardedRef.current = element;
      }
    };

    return (
      <div className={checkboxStyles.container}>
        <div className={checkboxStyles.controlWrapper}>
          <input
            ref={setRefs}
            id={checkboxId}
            type="checkbox"
            disabled={disabled}
            aria-invalid={invalid || undefined}
            aria-describedby={
              description ? `${checkboxId}-description` : undefined
            }
            className={cn(
              checkboxStyles.input,
              invalid && checkboxStyles.invalidInput,
              className,
            )}
            {...props}
          />

          {!indeterminate && (
            <Check
              aria-hidden="true"
              className={cn(checkboxStyles.indicator, "h-3.5 w-3.5")}
            />
          )}

          {indeterminate && (
            <span
              aria-hidden="true"
              className={cn(checkboxStyles.indeterminateIndicator, "block")}
            />
          )}
        </div>

        {(label || description) && (
          <div className={checkboxStyles.content}>
            {label && (
              <label
                htmlFor={checkboxId}
                className={cn(
                  checkboxStyles.label,
                  disabled && checkboxStyles.disabledLabel,
                )}
              >
                {label}
              </label>
            )}

            {description && (
              <p
                id={`${checkboxId}-description`}
                className={checkboxStyles.description}
              >
                {description}
              </p>
            )}
          </div>
        )}
      </div>
    );
  },
);

Checkbox.displayName = "Checkbox";

export default Checkbox;
