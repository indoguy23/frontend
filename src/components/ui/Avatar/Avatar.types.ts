import type { HTMLAttributes, ImgHTMLAttributes } from "react";
import type { VariantProps } from "class-variance-authority";

import type { avatarVariants } from "./Avatar.styles";

export type AvatarStatus = "online" | "offline" | "busy" | "away";

export interface AvatarProps
  extends
    Omit<HTMLAttributes<HTMLDivElement>, "children">,
    VariantProps<typeof avatarVariants> {
  src?: string;
  alt: string;
  fallback: string;
  status?: AvatarStatus;
  imageProps?: Omit<ImgHTMLAttributes<HTMLImageElement>, "src" | "alt">;
}
