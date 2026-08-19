import { Children, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import Button from "@/components/ui/Button";
import { cn } from "@/utils/cn";

import { contentRailStyles } from "./ContentRail.styles";
import type { ContentRailProps } from "./ContentRail.types";

const ContentRail = ({
  children,
  gap = "md",
  itemWidth = "280px",
  showControls = true,
  className,
}: ContentRailProps) => {
  const viewportRef = useRef<HTMLDivElement>(null);

  const gapClass = {
    sm: contentRailStyles.gapSm,
    md: contentRailStyles.gapMd,
    lg: contentRailStyles.gapLg,
  }[gap];

  const scroll = (direction: "left" | "right") => {
    const viewport = viewportRef.current;

    if (!viewport) {
      return;
    }

    const amount = viewport.clientWidth * 0.8;

    viewport.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <div className={cn(contentRailStyles.root, className)}>
      {showControls && (
        <div className={contentRailStyles.controls}>
          <Button
            size="icon"
            variant="outline"
            aria-label="Scroll left"
            onClick={() => scroll("left")}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>

          <Button
            size="icon"
            variant="outline"
            aria-label="Scroll right"
            onClick={() => scroll("right")}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      )}

      <div ref={viewportRef} className={contentRailStyles.viewport}>
        <div className={cn(contentRailStyles.track, gapClass)}>
          {Children.map(children, (child) => (
            <div
              className="shrink-0 snap-start"
              style={{
                width: itemWidth,
              }}
            >
              {child}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContentRail;
