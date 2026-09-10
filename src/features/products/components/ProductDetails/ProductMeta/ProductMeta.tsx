import { BadgeCheck, MapPin, Star } from "lucide-react";

import type { ProductDetailsData } from "../../../types/products.types";

import { productMetaStyles } from "./ProductMeta.styles";

interface ProductMetaProps {
  product: ProductDetailsData;
}

const ProductMeta = ({ product }: ProductMetaProps) => {
  return (
    <section className={productMetaStyles.root}>
      {/* Specifications */}
      <div className={productMetaStyles.card}>
        <h2 className={productMetaStyles.title}>Product Specifications</h2>

        <div className={productMetaStyles.specifications}>
          {product.specifications.map((specification) => (
            <div
              key={specification.label}
              className={productMetaStyles.specificationRow}
            >
              <span className={productMetaStyles.specificationLabel}>
                {specification.label}
              </span>

              <span className={productMetaStyles.specificationValue}>
                {specification.value}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Seller Information */}
      <div className={productMetaStyles.card}>
        <h2 className={productMetaStyles.title}>Seller Information</h2>

        <div className={productMetaStyles.sellerHeader}>
          <div className={productMetaStyles.sellerNameWrapper}>
            <p className={productMetaStyles.sellerName}>
              {product.seller.name}
            </p>

            <p className={productMetaStyles.sellerSlug}>
              @{product.seller.slug}
            </p>
          </div>

          {product.seller.verified && (
            <div className={productMetaStyles.verified}>
              <BadgeCheck className="h-4 w-4" />
              Verified
            </div>
          )}
        </div>

        <div className={productMetaStyles.sellerDetails}>
          {typeof product.seller.rating === "number" && (
            <div className={productMetaStyles.sellerDetailRow}>
              <span className={productMetaStyles.sellerDetailLabel}>
                Seller rating
              </span>

              <span className="flex items-center gap-1 font-medium">
                <Star className="h-4 w-4 fill-current" />
                {product.seller.rating.toFixed(1)}
              </span>
            </div>
          )}

          {product.seller.location && (
            <div className={productMetaStyles.sellerDetailRow}>
              <span className={productMetaStyles.sellerDetailLabel}>
                Location
              </span>

              <span className="flex items-center gap-1 font-medium">
                <MapPin className="h-4 w-4" />
                {product.seller.location}
              </span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProductMeta;
