import type { ReactNode } from "react";

export interface PromoCardData {
  id: string;

  title: string;

  description?: string;

  eyebrow?: string;

  image?: string;

  imageAlt?: string;

  discountLabel?: string;
}

export interface PromoCardProps {
  promo: PromoCardData;

  action?: ReactNode;

  variant?: "default" | "compact";

  className?: string;
}
