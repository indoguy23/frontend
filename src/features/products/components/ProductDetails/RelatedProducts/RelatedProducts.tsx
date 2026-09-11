import { useNavigate } from "react-router-dom";

import ProductCard from "@/components/common/ProductCard";
import type { ProductCardData } from "@/components/common/ProductCard";

import type { ProductDetailsData } from "../../../types/products.types";

import { relatedProductsStyles } from "./RelatedProducts.styles";

interface RelatedProductsProps {
  currentProduct: ProductDetailsData;
  products: ProductDetailsData[];
}

const RELATED_PRODUCTS_LIMIT = 4;

const RelatedProducts = ({
  currentProduct,
  products,
}: RelatedProductsProps) => {
  const navigate = useNavigate();

  const relatedProducts = products
    .filter(
      (product) =>
        product.category === currentProduct.category &&
        product.id !== currentProduct.id,
    )
    .slice(0, RELATED_PRODUCTS_LIMIT);

  const handleViewDetails = (product: ProductCardData) => {
    navigate(`/products/${product.slug}`);
  };

  if (relatedProducts.length === 0) {
    return null;
  }

  return (
    <section className={relatedProductsStyles.root}>
      <div className={relatedProductsStyles.header}>
        <h2 className={relatedProductsStyles.title}>Related Products</h2>
      </div>

      <div className={relatedProductsStyles.grid}>
        {relatedProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onViewDetails={handleViewDetails}
          />
        ))}
      </div>
    </section>
  );
};

export default RelatedProducts;
