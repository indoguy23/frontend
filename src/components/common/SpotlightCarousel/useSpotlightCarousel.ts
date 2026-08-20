import { useCallback, useEffect, useMemo, useState } from "react";

interface UseSpotlightCarouselOptions {
  itemCount: number;

  initialIndex?: number;

  loop?: boolean;

  autoplay?: boolean;

  autoplayInterval?: number;

  pauseOnHover?: boolean;

  onSlideChange?: (index: number) => void;
}

const useSpotlightCarousel = ({
  itemCount,
  initialIndex = 0,
  loop = true,
  autoplay = false,
  autoplayInterval = 4000,
  pauseOnHover = true,
  onSlideChange,
}: UseSpotlightCarouselOptions) => {
  const safeInitialIndex = useMemo(() => {
    if (itemCount <= 0) {
      return 0;
    }

    return Math.min(Math.max(initialIndex, 0), itemCount - 1);
  }, [initialIndex, itemCount]);

  const [activeIndex, setActiveIndex] = useState(safeInitialIndex);

  const [isHovered, setIsHovered] = useState(false);

  const resolvedActiveIndex =
    itemCount <= 0 ? 0 : Math.min(activeIndex, itemCount - 1);

  const canGoPrevious = itemCount > 1 && (loop || resolvedActiveIndex > 0);

  const canGoNext =
    itemCount > 1 && (loop || resolvedActiveIndex < itemCount - 1);

  const goTo = useCallback(
    (index: number) => {
      if (itemCount <= 0) {
        return;
      }

      const nextIndex = loop
        ? ((index % itemCount) + itemCount) % itemCount
        : Math.min(Math.max(index, 0), itemCount - 1);

      setActiveIndex(nextIndex);

      onSlideChange?.(nextIndex);
    },
    [itemCount, loop, onSlideChange],
  );

  const next = useCallback(() => {
    if (!canGoNext) {
      return;
    }

    goTo(resolvedActiveIndex + 1);
  }, [canGoNext, goTo, resolvedActiveIndex]);

  const previous = useCallback(() => {
    if (!canGoPrevious) {
      return;
    }

    goTo(resolvedActiveIndex - 1);
  }, [canGoPrevious, goTo, resolvedActiveIndex]);

  useEffect(() => {
    if (!autoplay || itemCount <= 1 || (pauseOnHover && isHovered)) {
      return;
    }

    const timer = window.setInterval(next, autoplayInterval);

    return () => {
      window.clearInterval(timer);
    };
  }, [autoplay, autoplayInterval, isHovered, itemCount, next, pauseOnHover]);

  return {
    activeIndex: resolvedActiveIndex,

    canGoPrevious,
    canGoNext,

    previous,
    next,
    goTo,

    setIsHovered,
  };
};

export default useSpotlightCarousel;
