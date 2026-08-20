import type { ReactNode } from "react";

export interface SpotlightCarouselProps<T> {
  items: T[];

  renderItem: (item: T, index: number) => ReactNode;

  getItemKey: (item: T, index: number) => string | number;

  autoplay?: boolean;

  autoplayInterval?: number;

  pauseOnHover?: boolean;

  loop?: boolean;

  showArrows?: boolean;

  showIndicators?: boolean;

  showCounter?: boolean;

  keyboardNavigation?: boolean;

  swipeNavigation?: boolean;

  initialIndex?: number;

  onSlideChange?: (index: number, item: T) => void;

  className?: string;
}
