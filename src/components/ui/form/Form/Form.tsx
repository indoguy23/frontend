import { forwardRef } from "react";

import { cn } from "@/utils/cn";

import { formVariants } from "./Form.styles";
import type { FormProps } from "./Form.types";

const Form = forwardRef<HTMLFormElement, FormProps>(
  ({ spacing, className, children, ...props }, ref) => {
    return (
      <form
        ref={ref}
        className={cn(formVariants({ spacing }), className)}
        {...props}
      >
        {children}
      </form>
    );
  },
);

Form.displayName = "Form";

export default Form;
