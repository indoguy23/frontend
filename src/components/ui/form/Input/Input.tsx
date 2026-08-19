import { forwardRef } from "react";

import { cn } from "@/utils/cn";

import {
  inputIconStyles,
  inputVariants,
  inputWrapperStyles,
} from "./Input.styles";
import type { InputProps } from "./Input.types";

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      type = "text",
      size,
      leftIcon,
      rightIcon,
      invalid = false,
      fullWidth = true,
      disabled,
      readOnly,
      className,
      ...props
    },
    ref,
  ) => {
    const hasLeftIcon = Boolean(leftIcon);
    const hasRightIcon = Boolean(rightIcon);

    return (
      <div
        className={cn(
          inputWrapperStyles.base,
          fullWidth
            ? inputWrapperStyles.fullWidth
            : inputWrapperStyles.fitContent,
        )}
      >
        {leftIcon && (
          <span
            aria-hidden="true"
            className={cn(inputIconStyles.base, inputIconStyles.left)}
          >
            {leftIcon}
          </span>
        )}

        <input
          ref={ref}
          type={type}
          disabled={disabled}
          readOnly={readOnly}
          aria-invalid={invalid || undefined}
          className={cn(
            inputVariants({
              size,
              invalid,
              hasLeftIcon,
              hasRightIcon,
            }),
            className,
          )}
          {...props}
        />

        {rightIcon && (
          <span
            className={cn(
              inputIconStyles.base,
              inputIconStyles.right,
              "pointer-events-auto",
            )}
          >
            {rightIcon}
          </span>
        )}
      </div>
    );
  },
);

Input.displayName = "Input";

export default Input;
