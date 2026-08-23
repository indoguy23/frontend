import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import CategoryCard from "@/components/common/CategoryCard";
import Button from "@/components/ui/Button";

import { categorySectionStyles } from "./CategorySection.styles";
import { HOME_CATEGORIES } from "@/features/home/data/homeCategories.data";

const CategorySection = () => {
  return (
    <section
      className={categorySectionStyles.root}
      aria-labelledby="shop-by-category-title"
    >
      <div className={categorySectionStyles.container}>
        <div className={categorySectionStyles.header}>
          <div className={categorySectionStyles.headingGroup}>
            <p className={categorySectionStyles.eyebrow}>Explore</p>

            <h2
              id="shop-by-category-title"
              className={categorySectionStyles.title}
            >
              Shop by Category
            </h2>

            <p className={categorySectionStyles.description}>
              Find what you need across popular marketplace categories.
            </p>
          </div>

          <Button
            variant="ghost"
            className={categorySectionStyles.viewAll}
            rightIcon={<ArrowRight className="h-4 w-4" />}
          >
            View All
          </Button>
        </div>

        {/* Mobile */}
        <div className={categorySectionStyles.mobileRail}>
          {HOME_CATEGORIES.map((category) => (
            <div key={category.id} className={categorySectionStyles.mobileItem}>
              <Link to={category.href}>
                <CategoryCard category={category} />
              </Link>
            </div>
          ))}
        </div>

        {/* Tablet + Desktop */}
        <div className={categorySectionStyles.grid}>
          {HOME_CATEGORIES.map((category) => (
            <Link key={category.id} to={category.href}>
              <CategoryCard category={category} />
            </Link>
          ))}
        </div>

        <div className={categorySectionStyles.mobileAction}>
          <Button
            variant="outline"
            className="w-full"
            rightIcon={<ArrowRight className="h-4 w-4" />}
          >
            View All Categories
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
