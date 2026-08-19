import { LoaderCircle } from "lucide-react";

import { cn } from "@/utils/cn";

import { buttonVariants } from "./Button.styles";
import type { ButtonProps } from "./Button.types";

const Button = ({
  children,
  type = "button",
  variant,
  size,
  fullWidth,
  loading = false,
  disabled,
  leftIcon,
  rightIcon,
  className,
  ...props
}: ButtonProps) => {
  const isDisabled = disabled || loading;

  return (
    <button
      type={type}
      disabled={isDisabled}
      aria-busy={loading}
      className={cn(
        buttonVariants({
          variant,
          size,
          fullWidth,
        }),
        className,
      )}
      {...props}
    >
      {loading ? (
        <LoaderCircle aria-hidden="true" className="h-4 w-4 animate-spin" />
      ) : (
        leftIcon
      )}

      <span>{children}</span>

      {!loading && rightIcon}
    </button>
  );
};

export default Button;
