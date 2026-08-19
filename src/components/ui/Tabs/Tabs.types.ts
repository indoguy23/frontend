import type { ComponentPropsWithoutRef, ComponentRef } from "react";
import type { VariantProps } from "class-variance-authority";

import type * as TabsPrimitive from "@radix-ui/react-tabs";

import type { tabsListVariants, tabsTriggerVariants } from "./Tabs.styles";

export type TabsProps = ComponentPropsWithoutRef<typeof TabsPrimitive.Root>;

export interface TabsListProps
  extends
    ComponentPropsWithoutRef<typeof TabsPrimitive.List>,
    VariantProps<typeof tabsListVariants> {}

export interface TabsTriggerProps
  extends
    ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>,
    VariantProps<typeof tabsTriggerVariants> {}

export type TabsContentProps = ComponentPropsWithoutRef<
  typeof TabsPrimitive.Content
>;

export type TabsRootRef = ComponentRef<typeof TabsPrimitive.Root>;

export type TabsListRef = ComponentRef<typeof TabsPrimitive.List>;

export type TabsTriggerRef = ComponentRef<typeof TabsPrimitive.Trigger>;

export type TabsContentRef = ComponentRef<typeof TabsPrimitive.Content>;
