import { forwardRef } from "react";

import { cn } from "@/utils/cn";

import { cardVariants } from "./Card.styles";
import type { CardProps } from "./Card.types";

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ variant, padding, interactive, className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          cardVariants({
            variant,
            padding,
            interactive,
          }),
          className,
        )}
        {...props}
      >
        {children}
      </div>
    );
  },
);

Card.displayName = "Card";

export default Card;
