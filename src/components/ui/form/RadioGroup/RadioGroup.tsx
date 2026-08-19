import { forwardRef, useId } from "react";

import { cn } from "@/utils/cn";

import { radioGroupStyles } from "./RadioGroup.styles";
import type { RadioGroupProps } from "./RadioGroup.types";

const RadioGroup = forwardRef<HTMLInputElement, RadioGroupProps>(
  (
    {
      name,
      options,
      value,
      defaultValue,
      onValueChange,
      invalid = false,
      orientation = "vertical",
      disabled,
      required,
      className,
      ...props
    },
    forwardedRef,
  ) => {
    const generatedId = useId();
    const isControlled = value !== undefined;

    return (
      <div
        role="radiogroup"
        aria-invalid={invalid || undefined}
        className={cn(radioGroupStyles.group[orientation], className)}
      >
        {options.map((option, index) => {
          const optionId = `${generatedId}-${option.value}`;
          const isDisabled = disabled || option.disabled;

          return (
            <label
              key={option.value}
              htmlFor={optionId}
              className={cn(
                radioGroupStyles.option,
                isDisabled && radioGroupStyles.disabledOption,
              )}
            >
              <span className={radioGroupStyles.controlWrapper}>
                <input
                  ref={index === 0 ? forwardedRef : undefined}
                  id={optionId}
                  type="radio"
                  name={name}
                  value={option.value}
                  checked={isControlled ? value === option.value : undefined}
                  defaultChecked={
                    !isControlled ? defaultValue === option.value : undefined
                  }
                  disabled={isDisabled}
                  required={required}
                  aria-invalid={invalid || undefined}
                  onChange={(event) => {
                    if (event.target.checked) {
                      onValueChange?.(event.target.value);
                    }
                  }}
                  className={cn(
                    radioGroupStyles.input,
                    invalid && radioGroupStyles.invalidInput,
                  )}
                  {...props}
                />

                <span
                  aria-hidden="true"
                  className={radioGroupStyles.indicator}
                />
              </span>

              <span className={radioGroupStyles.content}>
                <span className={radioGroupStyles.label}>{option.label}</span>

                {option.description && (
                  <span className={radioGroupStyles.description}>
                    {option.description}
                  </span>
                )}
              </span>
            </label>
          );
        })}
      </div>
    );
  },
);

RadioGroup.displayName = "RadioGroup";

export default RadioGroup;
