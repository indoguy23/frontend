import { ImageOff } from "lucide-react";

import { cn } from "@/utils/cn";

import { heroBannerStyles } from "./HeroBanner.styles";
import type { HeroBannerProps } from "./HeroBanner.types";

const HeroBanner = ({
  eyebrow,
  title,
  description,
  primaryAction,
  secondaryAction,
  image,
  imageAlt = "",
  badge,
  align = "left",
  className,
}: HeroBannerProps) => {
  const isCentered = align === "center";

  return (
    <section className={cn(heroBannerStyles.root, className)}>
      <div
        className={cn(
          heroBannerStyles.grid,
          isCentered && heroBannerStyles.centered,
        )}
      >
        <div className={heroBannerStyles.content}>
          {badge && <div className="mb-4">{badge}</div>}

          {eyebrow && <p className={heroBannerStyles.eyebrow}>{eyebrow}</p>}

          <h1 className={heroBannerStyles.title}>{title}</h1>

          {description && (
            <p
              className={cn(
                heroBannerStyles.description,
                isCentered && "mx-auto",
              )}
            >
              {description}
            </p>
          )}

          {(primaryAction || secondaryAction) && (
            <div
              className={cn(
                heroBannerStyles.actions,
                isCentered && "justify-center",
              )}
            >
              {primaryAction}
              {secondaryAction}
            </div>
          )}
        </div>

        {!isCentered && (
          <div className={heroBannerStyles.imageWrapper}>
            {image ? (
              <img
                src={image}
                alt={imageAlt}
                className={heroBannerStyles.image}
              />
            ) : (
              <div className={heroBannerStyles.fallback}>
                <div className="flex flex-col items-center gap-2">
                  <ImageOff className="h-7 w-7" />
                  <span className="text-sm">No banner image</span>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default HeroBanner;
