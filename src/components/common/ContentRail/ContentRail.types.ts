import type { ReactNode } from "react";

export interface ContentRailProps {
  children: ReactNode;

  gap?: "sm" | "md" | "lg";

  itemWidth?: string;

  showControls?: boolean;

  className?: string;
}
