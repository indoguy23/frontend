import { cn } from "@/utils/cn";

import { formFieldStyles } from "./FormField.styles";
import type { FormFieldProps } from "./FormField.types";

const FormField = ({
  label,
  required,
  helperText,
  error,
  htmlFor,
  children,
  className,
  ...props
}: FormFieldProps) => {
  return (
    <div className={cn(formFieldStyles.container, className)} {...props}>
      {label && (
        <label htmlFor={htmlFor} className={formFieldStyles.label}>
          {label}

          {required && (
            <span aria-hidden="true" className={formFieldStyles.required}>
              *
            </span>
          )}
        </label>
      )}

      {children}

      {error ? (
        <p role="alert" className={formFieldStyles.error}>
          {error}
        </p>
      ) : (
        helperText && <p className={formFieldStyles.helper}>{helperText}</p>
      )}
    </div>
  );
};

export default FormField;
