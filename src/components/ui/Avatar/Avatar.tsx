import { forwardRef, useState } from "react";

import { cn } from "@/utils/cn";

import {
  avatarFallbackStyles,
  avatarImageStyles,
  avatarStatusStyles,
  avatarVariants,
} from "./Avatar.styles";
import type { AvatarProps } from "./Avatar.types";

const Avatar = forwardRef<HTMLDivElement, AvatarProps>(
  (
    {
      src,
      alt,
      fallback,
      size = "md",
      ring,
      status,
      imageProps,
      className,
      ...props
    },
    ref,
  ) => {
    const [hasImageError, setHasImageError] = useState(false);

    const shouldShowImage = Boolean(src) && !hasImageError;

    const fallbackText = fallback.trim().slice(0, 2).toUpperCase();

    return (
      <div
        ref={ref}
        className={cn(
          avatarVariants({
            size,
            ring,
          }),
          className,
        )}
        {...props}
      >
        {shouldShowImage ? (
          <img
            src={src}
            alt={alt}
            className={cn(avatarImageStyles, imageProps?.className)}
            onError={(event) => {
              setHasImageError(true);
              imageProps?.onError?.(event);
            }}
            {...imageProps}
          />
        ) : (
          <span aria-label={alt} className={avatarFallbackStyles}>
            {fallbackText}
          </span>
        )}

        {status && (
          <span
            aria-label={`Status: ${status}`}
            className={cn(
              avatarStatusStyles.base,
              avatarStatusStyles.size[size ?? "md"],
              avatarStatusStyles.variant[status],
            )}
          />
        )}
      </div>
    );
  },
);

Avatar.displayName = "Avatar";

export default Avatar;
