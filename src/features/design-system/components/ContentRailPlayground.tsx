import CategoryCard from "@/components/common/CategoryCard";
import ContentRail from "@/components/common/ContentRail";
import SectionHeader from "@/components/common/SectionHeader";

import { CATEGORY_CARD_DATA } from "../data/categoryCard.data";

const ContentRailPlayground = () => {
  return (
    <section className="rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8">
      <SectionHeader
        eyebrow="Reusable Layout"
        title="Content Rail"
        description="Horizontally scrollable content for products, categories, sellers and other marketplace cards."
      />

      <div className="mt-8">
        <ContentRail itemWidth="260px" gap="md">
          {CATEGORY_CARD_DATA.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </ContentRail>
      </div>
    </section>
  );
};

export default ContentRailPlayground;
