import { useRef, type KeyboardEvent, type PointerEvent } from "react";

import { ChevronLeft, ChevronRight } from "lucide-react";

import Button from "@/components/ui/Button";
import { cn } from "@/utils/cn";

import { spotlightCarouselStyles } from "./SpotlightCarousel.styles";
import type { SpotlightCarouselProps } from "./SpotlightCarousel.types";
import useSpotlightCarousel from "./useSpotlightCarousel";

const SWIPE_THRESHOLD = 50;

const SpotlightCarousel = <T,>({
  items,
  renderItem,
  getItemKey,
  autoplay = false,
  autoplayInterval = 4000,
  pauseOnHover = true,
  loop = true,
  showArrows = true,
  showIndicators = true,
  showCounter = true,
  keyboardNavigation = true,
  swipeNavigation = true,
  initialIndex = 0,
  onSlideChange,
  className,
}: SpotlightCarouselProps<T>) => {
  const pointerStartX = useRef<number | null>(null);

  const {
    activeIndex,
    canGoPrevious,
    canGoNext,
    previous,
    next,
    goTo,
    setIsHovered,
  } = useSpotlightCarousel({
    itemCount: items.length,
    initialIndex,
    loop,
    autoplay,
    autoplayInterval,
    pauseOnHover,
    onSlideChange: (index) => {
      const item = items[index];

      if (item !== undefined) {
        onSlideChange?.(index, item);
      }
    },
  });

  const getRelativePosition = (index: number) => {
    if (items.length <= 1) {
      return 0;
    }

    let difference = index - activeIndex;

    if (loop) {
      const half = items.length / 2;

      if (difference > half) {
        difference -= items.length;
      }

      if (difference < -half) {
        difference += items.length;
      }
    }

    return difference;
  };

  const getSlideTransform = (position: number) => {
    if (position === 0) {
      return [
        "translate(-50%, -50%)",
        "translateX(0)",
        "translateZ(120px)",
        "rotateY(0deg)",
        "scale(1)",
      ].join(" ");
    }

    if (position === -1) {
      return [
        "translate(-50%, -50%)",
        "translateX(-68%)",
        "translateZ(-80px)",
        "rotateY(12deg)",
        "scale(0.82)",
      ].join(" ");
    }

    if (position === 1) {
      return [
        "translate(-50%, -50%)",
        "translateX(68%)",
        "translateZ(-80px)",
        "rotateY(-12deg)",
        "scale(0.82)",
      ].join(" ");
    }

    if (position === -2) {
      return [
        "translate(-50%, -50%)",
        "translateX(-115%)",
        "translateZ(-180px)",
        "rotateY(18deg)",
        "scale(0.68)",
      ].join(" ");
    }

    if (position === 2) {
      return [
        "translate(-50%, -50%)",
        "translateX(115%)",
        "translateZ(-180px)",
        "rotateY(-18deg)",
        "scale(0.68)",
      ].join(" ");
    }

    return [
      "translate(-50%, -50%)",
      `translateX(${position < 0 ? "-150%" : "150%"})`,
      "translateZ(-250px)",
      "scale(0.55)",
    ].join(" ");
  };

  const getSlideClassName = (position: number) => {
    if (position === 0) {
      return spotlightCarouselStyles.activeSlide;
    }

    if (Math.abs(position) === 1) {
      return spotlightCarouselStyles.adjacentSlide;
    }

    if (Math.abs(position) === 2) {
      return spotlightCarouselStyles.outerSlide;
    }

    return spotlightCarouselStyles.hiddenSlide;
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (!keyboardNavigation) {
      return;
    }

    if (event.key === "ArrowLeft") {
      event.preventDefault();
      previous();
    }

    if (event.key === "ArrowRight") {
      event.preventDefault();
      next();
    }

    if (event.key === "Home") {
      event.preventDefault();
      goTo(0);
    }

    if (event.key === "End") {
      event.preventDefault();

      goTo(items.length - 1);
    }
  };

  const handlePointerDown = (event: PointerEvent<HTMLDivElement>) => {
    if (!swipeNavigation) {
      return;
    }

    pointerStartX.current = event.clientX;
  };

  const handlePointerUp = (event: PointerEvent<HTMLDivElement>) => {
    if (!swipeNavigation || pointerStartX.current === null) {
      return;
    }

    const distance = event.clientX - pointerStartX.current;

    pointerStartX.current = null;

    if (Math.abs(distance) < SWIPE_THRESHOLD) {
      return;
    }

    if (distance > 0) {
      previous();
      return;
    }

    next();
  };

  if (items.length === 0) {
    return null;
  }

  return (
    <div
      className={cn(spotlightCarouselStyles.root, className)}
      tabIndex={keyboardNavigation ? 0 : undefined}
      role="region"
      aria-roledescription="carousel"
      aria-label="Spotlight carousel"
      onKeyDown={handleKeyDown}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
    >
      <div className={spotlightCarouselStyles.stage}>
        <div aria-hidden="true" className={spotlightCarouselStyles.spotlight} />

        {items.map((item, index) => {
          const position = getRelativePosition(index);

          const isActive = position === 0;

          return (
            <div
              key={getItemKey(item, index)}
              aria-hidden={!isActive}
              className={cn(
                spotlightCarouselStyles.slide,
                getSlideClassName(position),
              )}
              style={{
                transform: getSlideTransform(position),
              }}
              onClick={() => {
                if (position !== 0 && Math.abs(position) <= 2) {
                  goTo(index);
                }
              }}
            >
              {renderItem(item, index)}
            </div>
          );
        })}

        {showArrows && items.length > 1 && (
          <div className={spotlightCarouselStyles.controls}>
            <Button
              type="button"
              size="icon"
              variant="outline"
              aria-label="Previous slide"
              disabled={!canGoPrevious}
              className={spotlightCarouselStyles.controlButton}
              onClick={previous}
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>

            <Button
              type="button"
              size="icon"
              variant="outline"
              aria-label="Next slide"
              disabled={!canGoNext}
              className={spotlightCarouselStyles.controlButton}
              onClick={next}
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        )}
      </div>

      {(showIndicators || showCounter) && (
        <div className={spotlightCarouselStyles.footer}>
          {showIndicators && items.length > 1 && (
            <div
              className={spotlightCarouselStyles.indicators}
              aria-label="Choose slide"
            >
              {items.map((item, index) => (
                <button
                  key={getItemKey(item, index)}
                  type="button"
                  aria-label={`Go to slide ${index + 1}`}
                  aria-current={activeIndex === index ? "true" : undefined}
                  className={cn(
                    spotlightCarouselStyles.indicator,
                    activeIndex === index &&
                      spotlightCarouselStyles.activeIndicator,
                  )}
                  onClick={() => goTo(index)}
                />
              ))}
            </div>
          )}

          {showCounter && (
            <p className={spotlightCarouselStyles.counter}>
              {String(activeIndex + 1).padStart(2, "0")}
              {" / "}
              {String(items.length).padStart(2, "0")}
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default SpotlightCarousel;
