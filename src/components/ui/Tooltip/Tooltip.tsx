import { forwardRef } from "react";

import * as TooltipPrimitive from "@radix-ui/react-tooltip";

import { cn } from "@/utils/cn";

import { tooltipContentVariants, tooltipStyles } from "./Tooltip.styles";
import type {
  TooltipContentProps,
  TooltipContentRef,
  TooltipProps,
  TooltipProviderProps,
  TooltipRootProps,
  TooltipTriggerProps,
  TooltipTriggerRef,
} from "./Tooltip.types";

const TooltipProvider = ({
  delayDuration = 400,
  skipDelayDuration = 300,
  ...props
}: TooltipProviderProps) => {
  return (
    <TooltipPrimitive.Provider
      delayDuration={delayDuration}
      skipDelayDuration={skipDelayDuration}
      {...props}
    />
  );
};

const TooltipRoot = (props: TooltipRootProps) => {
  return <TooltipPrimitive.Root {...props} />;
};

const TooltipTrigger = forwardRef<TooltipTriggerRef, TooltipTriggerProps>(
  (props, ref) => {
    return <TooltipPrimitive.Trigger ref={ref} {...props} />;
  },
);

TooltipTrigger.displayName = "Tooltip.Trigger";

const TooltipContent = forwardRef<TooltipContentRef, TooltipContentProps>(
  (
    { size, sideOffset = 8, showArrow = true, className, children, ...props },
    ref,
  ) => {
    return (
      <TooltipPrimitive.Portal>
        <TooltipPrimitive.Content
          ref={ref}
          sideOffset={sideOffset}
          className={cn(tooltipContentVariants({ size }), className)}
          {...props}
        >
          {children}

          {showArrow && (
            <TooltipPrimitive.Arrow className={tooltipStyles.arrow} />
          )}
        </TooltipPrimitive.Content>
      </TooltipPrimitive.Portal>
    );
  },
);

TooltipContent.displayName = "Tooltip.Content";

const TooltipSimple = ({
  content,
  children,
  contentProps,
  ...props
}: TooltipProps) => {
  return (
    <TooltipRoot {...props}>
      <TooltipTrigger asChild>{children}</TooltipTrigger>

      <TooltipContent {...contentProps}>{content}</TooltipContent>
    </TooltipRoot>
  );
};

const Tooltip = Object.assign(TooltipSimple, {
  Provider: TooltipProvider,
  Root: TooltipRoot,
  Trigger: TooltipTrigger,
  Content: TooltipContent,
});

export default Tooltip;
