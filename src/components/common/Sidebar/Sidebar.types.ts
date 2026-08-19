import type { LucideIcon } from "lucide-react";

export interface SidebarItem {
  id: string;
  label: string;
  href: string;
  icon: LucideIcon;
  badge?: string | number;
  disabled?: boolean;
}

export interface SidebarGroup {
  id: string;
  label?: string;
  items: SidebarItem[];
}

export interface SidebarProps {
  groups: SidebarGroup[];

  activePath?: string;

  collapsed?: boolean;

  onCollapsedChange?: (collapsed: boolean) => void;

  className?: string;
}
