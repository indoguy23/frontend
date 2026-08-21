import { Menu } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

import { cn } from "@/utils/cn";

import { CATEGORY_NAVIGATION_ITEMS } from "./categoryNavigation.data";
import { categoryNavigationStyles } from "./CategoryNavigation.styles";

const CategoryNavigation = () => {
  const location = useLocation();

  return (
    <nav
      aria-label="Product categories"
      className={categoryNavigationStyles.root}
    >
      <div className={categoryNavigationStyles.container}>
        <Link
          to="/categories"
          className={categoryNavigationStyles.allCategories}
        >
          <Menu aria-hidden="true" className="h-4 w-4" />
          All Categories
        </Link>

        <div className={categoryNavigationStyles.scrollArea}>
          <div className={categoryNavigationStyles.list}>
            {CATEGORY_NAVIGATION_ITEMS.map((category) => {
              const isActive =
                location.pathname === category.href ||
                location.pathname.startsWith(`${category.href}/`);

              return (
                <Link
                  key={category.id}
                  to={category.href}
                  className={cn(
                    categoryNavigationStyles.item,
                    isActive && categoryNavigationStyles.activeItem,
                  )}
                >
                  {category.label}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default CategoryNavigation;
