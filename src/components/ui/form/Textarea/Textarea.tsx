import { forwardRef } from "react";

import { cn } from "@/utils/cn";

import { textareaVariants } from "./Textarea.styles";
import type { TextareaProps } from "./Textarea.types";

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      size,
      invalid = false,
      fullWidth = true,
      resize = "vertical",
      disabled,
      readOnly,
      className,
      ...props
    },
    ref,
  ) => {
    return (
      <textarea
        ref={ref}
        disabled={disabled}
        readOnly={readOnly}
        aria-invalid={invalid || undefined}
        className={cn(
          textareaVariants({
            size,
            invalid,
            fullWidth,
            resize,
          }),
          className,
        )}
        {...props}
      />
    );
  },
);

Textarea.displayName = "Textarea";

export default Textarea;
