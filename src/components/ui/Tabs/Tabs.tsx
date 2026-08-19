import { forwardRef } from "react";

import * as TabsPrimitive from "@radix-ui/react-tabs";

import { cn } from "@/utils/cn";

import {
  tabsListVariants,
  tabsStyles,
  tabsTriggerVariants,
} from "./Tabs.styles";
import type {
  TabsContentProps,
  TabsContentRef,
  TabsListProps,
  TabsListRef,
  TabsProps,
  TabsRootRef,
  TabsTriggerProps,
  TabsTriggerRef,
} from "./Tabs.types";

const TabsRoot = forwardRef<TabsRootRef, TabsProps>(
  ({ className, orientation = "horizontal", ...props }, ref) => {
    return (
      <TabsPrimitive.Root
        ref={ref}
        orientation={orientation}
        className={cn(tabsStyles.root, className)}
        {...props}
      />
    );
  },
);

TabsRoot.displayName = "Tabs";

const TabsList = forwardRef<TabsListRef, TabsListProps>(
  ({ size, className, children, ...props }, ref) => {
    return (
      <div className={tabsStyles.listViewport}>
        <TabsPrimitive.List
          ref={ref}
          className={cn(tabsListVariants({ size }), className)}
          {...props}
        >
          {children}
        </TabsPrimitive.List>
      </div>
    );
  },
);

TabsList.displayName = "Tabs.List";

const TabsTrigger = forwardRef<TabsTriggerRef, TabsTriggerProps>(
  ({ size, className, children, ...props }, ref) => {
    return (
      <TabsPrimitive.Trigger
        ref={ref}
        className={cn(tabsTriggerVariants({ size }), className)}
        {...props}
      >
        {children}
      </TabsPrimitive.Trigger>
    );
  },
);

TabsTrigger.displayName = "Tabs.Trigger";

const TabsContent = forwardRef<TabsContentRef, TabsContentProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <TabsPrimitive.Content
        ref={ref}
        className={cn(tabsStyles.content, className)}
        {...props}
      >
        {children}
      </TabsPrimitive.Content>
    );
  },
);

TabsContent.displayName = "Tabs.Content";

const Tabs = Object.assign(TabsRoot, {
  List: TabsList,
  Trigger: TabsTrigger,
  Content: TabsContent,
});

export default Tabs;
