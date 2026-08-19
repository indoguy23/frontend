import type { TextareaHTMLAttributes } from "react";
import type { VariantProps } from "class-variance-authority";

import type { textareaVariants } from "./Textarea.styles";

export interface TextareaProps
  extends
    TextareaHTMLAttributes<HTMLTextAreaElement>,
    VariantProps<typeof textareaVariants> {
  invalid?: boolean;
  fullWidth?: boolean;
  resize?: "none" | "vertical" | "horizontal" | "both";
}
