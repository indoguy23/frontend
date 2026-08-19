import { ArrowUpRight, ImageOff } from "lucide-react";

import Badge from "@/components/ui/Badge";
import { cn } from "@/utils/cn";

import { categoryCardStyles } from "./CategoryCard.styles";
import type { CategoryCardProps } from "./CategoryCard.types";

const CategoryCard = ({ category, onClick, className }: CategoryCardProps) => {
  const handleClick = () => {
    onClick?.(category);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLElement>) => {
    if (!onClick) {
      return;
    }

    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      handleClick();
    }
  };

  return (
    <article
      className={cn(
        categoryCardStyles.card,
        onClick && categoryCardStyles.clickable,
        className,
      )}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
    >
      <div className={categoryCardStyles.imageWrapper}>
        {category.image ? (
          <img
            src={category.image}
            alt={category.name}
            className={categoryCardStyles.image}
          />
        ) : (
          <div className={categoryCardStyles.fallback}>
            <ImageOff aria-hidden="true" className="h-8 w-8" />
          </div>
        )}

        {category.featured && (
          <div className={categoryCardStyles.badge}>
            <Badge variant="secondary">Featured</Badge>
          </div>
        )}
      </div>

      <div className={categoryCardStyles.content}>
        <h3 className={categoryCardStyles.name}>{category.name}</h3>

        {category.description && (
          <p className={categoryCardStyles.description}>
            {category.description}
          </p>
        )}

        <div className={categoryCardStyles.footer}>
          {category.productCount !== undefined && (
            <span className={categoryCardStyles.count}>
              {category.productCount}{" "}
              {category.productCount === 1 ? "product" : "products"}
            </span>
          )}

          {onClick && (
            <span aria-hidden="true" className={categoryCardStyles.action}>
              <ArrowUpRight className="h-4 w-4" />
            </span>
          )}
        </div>
      </div>
    </article>
  );
};

export default CategoryCard;
