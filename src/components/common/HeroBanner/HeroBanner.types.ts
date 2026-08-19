import type { ReactNode } from "react";

export interface HeroBannerProps {
  eyebrow?: string;

  title: string;

  description?: string;

  primaryAction?: ReactNode;

  secondaryAction?: ReactNode;

  image?: string;

  imageAlt?: string;

  badge?: ReactNode;

  align?: "left" | "center";

  className?: string;
}
