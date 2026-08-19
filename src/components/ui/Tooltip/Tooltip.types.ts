import type { ComponentPropsWithoutRef, ComponentRef, ReactNode } from "react";
import type { VariantProps } from "class-variance-authority";

import type * as TooltipPrimitive from "@radix-ui/react-tooltip";

import type { tooltipContentVariants } from "./Tooltip.styles";

export type TooltipProviderProps = ComponentPropsWithoutRef<
  typeof TooltipPrimitive.Provider
>;

export type TooltipRootProps = ComponentPropsWithoutRef<
  typeof TooltipPrimitive.Root
>;

export type TooltipTriggerProps = ComponentPropsWithoutRef<
  typeof TooltipPrimitive.Trigger
>;

export interface TooltipContentProps
  extends
    ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>,
    VariantProps<typeof tooltipContentVariants> {
  showArrow?: boolean;
}

export interface TooltipProps extends TooltipRootProps {
  content: ReactNode;
  children: ReactNode;
  contentProps?: TooltipContentProps;
}

export type TooltipTriggerRef = ComponentRef<typeof TooltipPrimitive.Trigger>;

export type TooltipContentRef = ComponentRef<typeof TooltipPrimitive.Content>;
