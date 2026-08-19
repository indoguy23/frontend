import CategoryCard from "@/components/common/CategoryCard";
import { showToast } from "@/components/ui/Toast";

import { CATEGORY_CARD_DATA } from "../data/categoryCard.data";

const CategoryCardPlayground = () => {
  return (
    <section className="rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8">
      <div>
        <h2 className="text-2xl font-semibold text-card-foreground">
          Category Card
        </h2>

        <p className="mt-2 text-muted-foreground">
          Reusable category cards for marketplace discovery and navigation.
        </p>
      </div>

      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {CATEGORY_CARD_DATA.map((category) => (
          <CategoryCard
            key={category.id}
            category={category}
            onClick={(selectedCategory) =>
              showToast.info(`Opening ${selectedCategory.name}.`)
            }
          />
        ))}
      </div>
    </section>
  );
};

export default CategoryCardPlayground;
