import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import Button from "@/components/ui/Button";

import { HOME_COLLECTIONS } from "../../data/collections.data";
import { collectionsSectionStyles } from "./CollectionsSection.styles";

const CollectionsSection = () => {
  return (
    <section
      className={collectionsSectionStyles.root}
      aria-labelledby="collections-title"
    >
      <div className={collectionsSectionStyles.container}>
        <div className={collectionsSectionStyles.header}>
          <div className={collectionsSectionStyles.headingGroup}>
            <p className={collectionsSectionStyles.eyebrow}>
              Curated Collections
            </p>

            <h2
              id="collections-title"
              className={collectionsSectionStyles.title}
            >
              Shop by Collection
            </h2>

            <p className={collectionsSectionStyles.description}>
              Explore curated collections built around how you shop and live.
            </p>
          </div>
        </div>

        <div className={collectionsSectionStyles.grid}>
          {HOME_COLLECTIONS.map((collection) => (
            <article
              key={collection.id}
              className={collectionsSectionStyles.card}
            >
              <img
                src={collection.image}
                alt={collection.title}
                loading="lazy"
                className={collectionsSectionStyles.image}
              />

              <div
                aria-hidden="true"
                className={collectionsSectionStyles.overlay}
              />

              <div className={collectionsSectionStyles.content}>
                <p className={collectionsSectionStyles.cardEyebrow}>
                  {collection.eyebrow}
                </p>

                <h3 className={collectionsSectionStyles.cardTitle}>
                  {collection.title}
                </h3>

                <p className={collectionsSectionStyles.cardDescription}>
                  {collection.description}
                </p>

                <Link to={collection.href}>
                  <Button
                    size="sm"
                    variant="outline"
                    className={collectionsSectionStyles.action}
                    rightIcon={<ArrowRight className="h-4 w-4" />}
                  >
                    Explore Collection
                  </Button>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CollectionsSection;
