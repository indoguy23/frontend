import type { FormHTMLAttributes } from "react";
import type { VariantProps } from "class-variance-authority";

import type { formVariants } from "./Form.styles";

export interface FormProps
  extends
    FormHTMLAttributes<HTMLFormElement>,
    VariantProps<typeof formVariants> {}
