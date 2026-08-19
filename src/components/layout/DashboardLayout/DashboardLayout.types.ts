import type { ReactNode } from "react";

import type { SidebarGroup } from "@/components/common/Sidebar";

export interface DashboardLayoutProps {
  children: ReactNode;

  sidebarGroups: SidebarGroup[];

  activePath?: string;

  title?: string;

  description?: string;

  headerActions?: ReactNode;

  className?: string;
}
