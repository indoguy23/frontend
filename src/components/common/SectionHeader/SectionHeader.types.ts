import type { ReactNode } from "react";

export interface SectionHeaderProps {
  title: string;

  description?: string;

  eyebrow?: string;

  action?: ReactNode;

  align?: "left" | "center";

  className?: string;
}
