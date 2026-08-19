import {
  BarChart3,
  Boxes,
  LayoutDashboard,
  Package,
  Settings,
  ShoppingCart,
  Store,
  Users,
} from "lucide-react";

import type { SidebarGroup } from "@/components/common/Sidebar";

export const VENDOR_SIDEBAR_GROUPS: SidebarGroup[] = [
  {
    id: "overview",
    label: "Overview",
    items: [
      {
        id: "dashboard",
        label: "Dashboard",
        href: "/vendor",
        icon: LayoutDashboard,
      },
      {
        id: "analytics",
        label: "Analytics",
        href: "/vendor/analytics",
        icon: BarChart3,
      },
    ],
  },
  {
    id: "commerce",
    label: "Commerce",
    items: [
      {
        id: "products",
        label: "Products",
        href: "/vendor/products",
        icon: Package,
        badge: 24,
      },
      {
        id: "orders",
        label: "Orders",
        href: "/vendor/orders",
        icon: ShoppingCart,
        badge: 8,
      },
      {
        id: "inventory",
        label: "Inventory",
        href: "/vendor/inventory",
        icon: Boxes,
      },
      {
        id: "customers",
        label: "Customers",
        href: "/vendor/customers",
        icon: Users,
      },
    ],
  },
  {
    id: "business",
    label: "Business",
    items: [
      {
        id: "store",
        label: "Store Profile",
        href: "/vendor/store",
        icon: Store,
      },
      {
        id: "settings",
        label: "Settings",
        href: "/vendor/settings",
        icon: Settings,
      },
    ],
  },
];
